<#
.SYNOPSIS
Creates GitHub issues from markdown files placed in `.github/ISSUES/`.

USAGE
From repository root (PowerShell / pwsh):

  # Dry run - prints what would be created
  pwsh .\.github\scripts\create_github_issues.ps1 -DryRun

  # Create issues (uses gh auth from your environment)
  pwsh .\.github\scripts\create_github_issues.ps1

REQUIREMENTS
- GitHub CLI (`gh`) must be installed and authenticated (`gh auth login` or set `GITHUB_TOKEN`).

Notes:
- Files must include a `Title: ...` line and may include `Labels: a,b,c` on the second line.
- The remainder of the file becomes the issue body.
#>

param(
    [string]$IssuesPath = '.github/ISSUES',
    [switch]$DryRun
)

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Error "GitHub CLI 'gh' not found in PATH. Install from https://cli.github.com/"
    exit 1
}

$fullPath = Join-Path -Path (Get-Location) -ChildPath $IssuesPath
if (-not (Test-Path $fullPath)) {
    Write-Error "Issues path not found: $fullPath"
    exit 1
}

$files = Get-ChildItem -Path $fullPath -Filter *.md | Sort-Object Name
if ($files.Count -eq 0) {
    Write-Host "No issue files found in $fullPath"
    exit 0
}

foreach ($file in $files) {
    Write-Host "Processing: $($file.Name)"
    $text = Get-Content -Path $file.FullName -Raw

    # Extract Title and Labels
    $titleMatch = [regex]::Match($text, '^Title:\s*(.+)$', 'MultiLine')
    $labelsMatch = [regex]::Match($text, '^Labels:\s*(.+)$', 'MultiLine')

    if (-not $titleMatch.Success) {
        Write-Warning "Skipping $($file.Name): no Title: line found"
        continue
    }
    $title = $titleMatch.Groups[1].Value.Trim()
    $labelsRaw = if ($labelsMatch.Success) { $labelsMatch.Groups[1].Value.Trim() } else { "" }

    # Remove the Title and Labels lines from body
    $body = $text -replace '(?m)^Title:.*\r?\n?', ''
    $body = $body -replace '(?m)^Labels:.*\r?\n?', ''

    # Trim leading/trailing whitespace
    $body = $body.Trim()

    if ($DryRun) {
        Write-Host "--DRY RUN-- Would create issue:`n  Title: $title`n  Labels: $labelsRaw`n  Body (first 200 chars): $($body.Substring(0, [math]::Min(200, $body.Length)))`n"
        continue
    }

    # Prepare temp file for body
    $tmp = [System.IO.Path]::GetTempFileName()
    Set-Content -Path $tmp -Value $body -Encoding UTF8

    # Build label arguments
    $labelArgs = @()
    if ($labelsRaw -ne '') {
        $labelsRaw.Split(',') | ForEach-Object { $labelArgs += @('--label', $_.Trim()) }
    }

    # Create the issue
    $args = @('issue','create','--title',$title,'--body-file',$tmp) + $labelArgs
    try {
        Write-Host "Creating issue: $title"
        gh @args
        Write-Host "Created: $title"
    }
    catch {
        Write-Error "Failed to create issue for $($file.Name): $_"
    }
    finally {
        Remove-Item -Path $tmp -ErrorAction SilentlyContinue
    }
}

Write-Host "Done."
