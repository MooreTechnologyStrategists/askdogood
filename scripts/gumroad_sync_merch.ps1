$ErrorActionPreference = 'Stop'
$token = $env:GUMROAD_TOKEN

$imageMap = @{}
$imageMapPath = Join-Path $PSScriptRoot 'merch_images.json'
if (Test-Path $imageMapPath) {
  try {
    $imageOverrides = Get-Content -Raw -Path $imageMapPath | ConvertFrom-Json
    foreach ($entry in $imageOverrides) {
      if ($entry.id -and $entry.url) {
        $imageMap[$entry.id] = [string]$entry.url
      }
    }
  } catch {
    Write-Warning "Unable to parse merch_images.json; using built-in image URLs."
  }
}

if ([string]::IsNullOrWhiteSpace($token)) {
  throw 'GUMROAD_TOKEN environment variable is required.'
}

function Invoke-GumroadJson {
  param(
    [ValidateSet('GET','POST','PUT','DELETE')]
    [string]$Method,
    [string]$Path,
    [hashtable]$Data
  )

  $base = "https://api.gumroad.com/v2$Path"
  $curlArgs = @('-sS', '-X', $Method)

  if ($Method -eq 'GET') {
    $curlArgs += '-G'
    $curlArgs += $base
    $curlArgs += '--data-urlencode'
    $curlArgs += "access_token=$token"
    if ($Data) {
      foreach ($k in $Data.Keys) {
        $curlArgs += '--data-urlencode'
        $curlArgs += "$k=$($Data[$k])"
      }
    }
  } else {
    $curlArgs += $base
    $curlArgs += '-d'
    $curlArgs += "access_token=$token"
    if ($Data) {
      foreach ($k in $Data.Keys) {
        $curlArgs += '-d'
        $curlArgs += "$k=$($Data[$k])"
      }
    }
  }

  $raw = & curl.exe @curlArgs
  if ([string]::IsNullOrWhiteSpace($raw)) {
    throw "Empty response for $Method $Path"
  }

  $json = $raw | ConvertFrom-Json
  if ($json.success -ne $true) {
    $msg = $json.message
    if (-not $msg) { $msg = 'Unknown Gumroad API error.' }
    throw "$Method $Path failed: $msg"
  }

  return $json
}

$productsResp = Invoke-GumroadJson -Method 'GET' -Path '/products' -Data @{}
$existing = @{}
foreach ($p in $productsResp.products) {
  if ($p.custom_permalink) { $existing[$p.custom_permalink] = $p }
}

$merchTargets = @(
  @{ id='mug-gratitude'; name='The "Gratitude" Mug'; price=1800; category='mugs'; description='Start your day with real talk. Less attitude, more gratitude. Bold minimalist AskDoGood design with premium finish.'; image='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop' },
  @{ id='mug-healing'; name='The "Healing Path" Mug'; price=1800; category='mugs'; description='Healing is not linear. A warm, earthy AskDoGood mug built for your daily reset routine.'; image='https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=1200&q=80&auto=format&fit=crop' },
  @{ id='mug-thriving'; name='The "Thriving" Mug'; price=1800; category='mugs'; description='Thriving, not surviving. A bold statement mug for your morning motivation.'; image='https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80&auto=format&fit=crop' },
  @{ id='mug-small-wins'; name='The "Small Wins" Mug'; price=1800; category='mugs'; description='Small wins compound. Botanical wellness styling with clean AskDoGood branding.'; image='https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&q=80&auto=format&fit=crop' },
  @{ id='mug-therapy'; name='The "Therapy" Mug'; price=1800; category='mugs'; description='Therapy saved my life. A clean and honest design celebrating healing work.'; image='https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=1200&q=80&auto=format&fit=crop' },

  @{ id='tshirt-progress'; name='The "Progress" Tee'; price=2800; category='tshirts'; description='Black tee with AskDoGood terracotta and sage accents. Progress over perfection with premium comfort and bold focus.'; image='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80&auto=format&fit=crop' },
  @{ id='tshirt-healing-loud'; name='The "Healing Out Loud" Tee'; price=2800; category='tshirts'; description='Black tee with AskDoGood color pops and community-centered statement energy.'; image='https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&q=80&auto=format&fit=crop' },
  @{ id='tshirt-structure'; name='The "Structure" Tee'; price=2800; category='tshirts'; description='Black tee with clean typography and AskDoGood signature palette for disciplined living.'; image='https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=1200&q=80&auto=format&fit=crop' },
  @{ id='tshirt-chosen'; name='The "I Chose Me" Tee'; price=2800; category='tshirts'; description='Black tee with minimal AskDoGood styling and confident self-respect messaging.'; image='https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80&auto=format&fit=crop' },
  @{ id='tshirt-no-apologies'; name='The "No Apologies" Tee'; price=2800; category='tshirts'; description='Black tee with expressive streetwear edge and AskDoGood color details.'; image='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1200&q=80&auto=format&fit=crop' },

  @{ id='hoodie-boundaries'; name='The "Boundaries" Hoodie'; price=4800; category='hoodies'; description='Boundaries are beautiful. Elevated hoodie for calm confidence and clear standards.'; image='https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&q=80&auto=format&fit=crop' },
  @{ id='hoodie-rest'; name='The "Rest" Hoodie'; price=4800; category='hoodies'; description='Rest is productive too. Soft comfort piece for recovery days and quiet focus.'; image='https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80&auto=format&fit=crop' },
  @{ id='hoodie-magic'; name='The "Black Girl Magic" Hoodie'; price=4800; category='hoodies'; description='Black Girl Magic energy with playful confidence and unmistakable AskDoGood spirit.'; image='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80&auto=format&fit=crop' },
  @{ id='hoodie-vibes'; name='The "Good Vibes" Hoodie'; price=4800; category='hoodies'; description='Good vibes only. Creative expression in a premium comfort fit.'; image='https://images.unsplash.com/photo-1622445275576-721325763afe?w=1200&q=80&auto=format&fit=crop' },

  @{ id='tote-ancestral'; name='The "Ancestral Strength" Tote'; price=2200; category='totes'; description='Ancestral strength, modern healing. Heavy-duty tote built for everyday intention.'; image='https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=1200&q=80&auto=format&fit=crop' },
  @{ id='tote-community'; name='The "Community" Tote'; price=2200; category='totes'; description='We rise by lifting each other. Minimal tote celebrating collective care.'; image='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80&auto=format&fit=crop' },
  @{ id='tote-plant-powered'; name='The "Plant Powered" Tote'; price=2200; category='totes'; description='Plant Powered. Clean wellness branding for market runs and daily essentials.'; image='https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1200&q=80&auto=format&fit=crop' }
)

$results = @()
$dailyLimitReached = $false
$remaining = @()
foreach ($m in $merchTargets) {
  if ($dailyLimitReached) {
    $remaining += $m.id
    continue
  }

  if ($imageMap.ContainsKey($m.id)) {
    $m.image = $imageMap[$m.id]
  }

  $id = $null
  $action = ''

  $description = "$($m.description)\n\nCategory: $($m.category)\nBrand: AskDoGood\n\nFulfillment note: This merch listing is part of AskDoGood's current rollout and may ship in curated production drops."

  if ($existing.ContainsKey($m.id)) {
    $id = $existing[$m.id].id
    $action = 'updated'
    Invoke-GumroadJson -Method 'PUT' -Path "/products/$id" -Data @{
      name = $m.name
      custom_permalink = $m.id
      description = $description
      price = [string]$m.price
      price_currency_type = 'usd'
      custom_summary = 'AskDoGood branded merch'
    } | Out-Null
  } else {
    $action = 'created'
    try {
      $created = Invoke-GumroadJson -Method 'POST' -Path '/products' -Data @{
        native_type = 'digital'
        name = $m.name
        custom_permalink = $m.id
        description = $description
        price = [string]$m.price
        price_currency_type = 'usd'
        custom_summary = 'AskDoGood branded merch'
      }
      $id = $created.product.id
    } catch {
      if ($_.Exception.Message -like '*only create 10 products per day*') {
        $dailyLimitReached = $true
        $remaining += $m.id
        $results += [pscustomobject]@{
          merch_id = $m.id
          gumroad_id = $null
          action = 'deferred-daily-limit'
          short_url = $null
          published = $false
          formatted_price = $null
        }
        continue
      }
      throw
    }
  }

  if ($m.image) {
    try {
      Invoke-GumroadJson -Method 'POST' -Path "/products/$id/covers" -Data @{ url = $m.image } | Out-Null
    } catch {
      # Continue if cover import fails.
    }
  }

  Invoke-GumroadJson -Method 'PUT' -Path "/products/$id/enable" -Data @{} | Out-Null
  $final = Invoke-GumroadJson -Method 'GET' -Path "/products/$id" -Data @{}

  $results += [pscustomobject]@{
    merch_id = $m.id
    gumroad_id = $id
    action = $action
    short_url = $final.product.short_url
    published = $final.product.published
    formatted_price = $final.product.formatted_price
  }
}

[pscustomobject]@{
  success = $true
  daily_limit_reached = $dailyLimitReached
  deferred_merch_ids = $remaining
  processed = $results
} | ConvertTo-Json -Depth 8
