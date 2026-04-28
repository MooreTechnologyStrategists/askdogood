param(
  [string]$MockupDir,
  [string]$AzureAccountName = 'askdogoodassets',
  [string]$AzureContainer = 'images',
  [switch]$RunOnce
)

$ErrorActionPreference = 'Stop'

if ([string]::IsNullOrWhiteSpace($MockupDir)) {
  $MockupDir = Join-Path $PSScriptRoot '..\assets\merch\mockups'
}

$mappingPath = Join-Path $PSScriptRoot 'merch_images.json'
if (-not (Test-Path $mappingPath)) {
  throw "Missing mapping file: $mappingPath"
}

$mapping = Get-Content -Raw -Path $mappingPath | ConvertFrom-Json

function Get-MissingMockups {
  $missing = @()
  foreach ($item in $mapping) {
    $path = Join-Path $MockupDir $item.file
    if (-not (Test-Path $path)) {
      $missing += $item.file
    }
  }
  return $missing
}

function Test-AzureLogin {
  & az account show --output none 2>$null
  return ($LASTEXITCODE -eq 0)
}

function Publish-Mockups {
  foreach ($item in $mapping) {
    $source = Join-Path $MockupDir $item.file
    $blobName = "merch/$($item.file)"

    & az storage blob upload `
      --only-show-errors `
      --overwrite true `
      --auth-mode login `
      --account-name $AzureAccountName `
      --container-name $AzureContainer `
      --name $blobName `
      --file $source | Out-Null

    if ($LASTEXITCODE -ne 0) {
      throw "Azure upload failed for $($item.file)"
    }
  }
}

function Test-BlobUrls {
  foreach ($item in $mapping) {
    try {
      $resp = Invoke-WebRequest -Method Head -Uri $item.url -UseBasicParsing
      if ($resp.StatusCode -lt 200 -or $resp.StatusCode -ge 400) {
        throw "Unexpected status code $($resp.StatusCode) for $($item.url)"
      }
    } catch {
      throw "Blob URL not reachable: $($item.url)"
    }
  }
}

function Invoke-GumroadSync {
  $syncScript = Join-Path $PSScriptRoot 'gumroad_sync_merch.ps1'
  if (-not (Test-Path $syncScript)) {
    throw "Missing Gumroad script: $syncScript"
  }

  $raw = & $syncScript
  if ([string]::IsNullOrWhiteSpace($raw)) {
    throw 'Gumroad sync returned no output.'
  }

  $json = $raw | ConvertFrom-Json
  if ($json.success -ne $true) {
    throw 'Gumroad sync response did not indicate success.'
  }

  return $json
}

function Invoke-MerchPipelineIfReady {
  $missing = Get-MissingMockups
  if ($missing.Count -gt 0) {
    Write-Host "Waiting on mockups ($($missing.Count) missing)."
    return $false
  }

  if (-not (Test-AzureLogin)) {
    Write-Host 'Azure CLI is not logged in. Run: az login'
    return $false
  }

  Write-Host 'All mockups found. Uploading to Azure...'
  Publish-Mockups

  Write-Host 'Verifying uploaded image URLs...'
  Test-BlobUrls

  Write-Host 'Syncing merch listings to Gumroad...'
  $result = Invoke-GumroadSync

  Write-Host 'Merch pipeline complete.'
  $result | ConvertTo-Json -Depth 8
  return $true
}

if (-not (Test-Path $MockupDir)) {
  New-Item -ItemType Directory -Force -Path $MockupDir | Out-Null
}

if ($RunOnce) {
  if (Invoke-MerchPipelineIfReady) {
    exit 0
  }

  exit 2
}

Write-Host "Watching folder for mockups: $MockupDir"

if (Invoke-MerchPipelineIfReady) {
  exit 0
}

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = (Resolve-Path $MockupDir)
$watcher.Filter = '*.*'
$watcher.IncludeSubdirectories = $false
$watcher.EnableRaisingEvents = $true

$eventName = 'MerchMockupChanged'
Register-ObjectEvent -InputObject $watcher -EventName Created -SourceIdentifier $eventName | Out-Null

try {
  while ($true) {
    Wait-Event -SourceIdentifier $eventName | Out-Null
    Get-Event -SourceIdentifier $eventName | Remove-Event

    if (Invoke-MerchPipelineIfReady) {
      break
    }
  }
} finally {
  Unregister-Event -SourceIdentifier $eventName -ErrorAction SilentlyContinue
  $watcher.Dispose()
}
