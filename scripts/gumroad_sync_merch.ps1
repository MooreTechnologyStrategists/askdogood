$ErrorActionPreference = 'Stop'
$token = $env:GUMROAD_TOKEN

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
  $args = @('-sS', '-X', $Method)

  if ($Method -eq 'GET') {
    $args += '-G'
    $args += $base
    $args += '--data-urlencode'
    $args += "access_token=$token"
    if ($Data) {
      foreach ($k in $Data.Keys) {
        $args += '--data-urlencode'
        $args += "$k=$($Data[$k])"
      }
    }
  } else {
    $args += $base
    $args += '-d'
    $args += "access_token=$token"
    if ($Data) {
      foreach ($k in $Data.Keys) {
        $args += '-d'
        $args += "$k=$($Data[$k])"
      }
    }
  }

  $raw = & curl.exe @args
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
  @{ id='mug-gratitude'; name='The "Gratitude" Mug'; price=1800; category='mugs'; description='Start your day with real talk. Less attitude, more gratitude. Bold minimalist AskDoGood design with premium finish.'; image='https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_gratitude.webp' },
  @{ id='mug-healing'; name='The "Healing Path" Mug'; price=1800; category='mugs'; description='Healing is not linear. A warm, earthy AskDoGood mug built for your daily reset routine.'; image='https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_healing.webp' },
  @{ id='mug-thriving'; name='The "Thriving" Mug'; price=1800; category='mugs'; description='Thriving, not surviving. A bold statement mug for your morning motivation.'; image='https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_thriving.webp' },
  @{ id='mug-small-wins'; name='The "Small Wins" Mug'; price=1800; category='mugs'; description='Small wins compound. Botanical wellness styling with clean AskDoGood branding.'; image='https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_small_wins.webp' },
  @{ id='mug-therapy'; name='The "Therapy" Mug'; price=1800; category='mugs'; description='Therapy saved my life. A clean and honest design celebrating healing work.'; image='https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_therapy.webp' },

  @{ id='tshirt-progress'; name='The "Progress" Tee'; price=2800; category='tshirts'; description='Progress over perfection. Premium AskDoGood tee with all-day comfort and bold attitude.'; image=$null },
  @{ id='tshirt-healing-loud'; name='The "Healing Out Loud" Tee'; price=2800; category='tshirts'; description='Healing out loud. Community-centered streetwear energy with wellness purpose.'; image=$null },
  @{ id='tshirt-structure'; name='The "Structure" Tee'; price=2800; category='tshirts'; description='Structure over motivation. Built for disciplined routines and long-term change.'; image=$null },
  @{ id='tshirt-chosen'; name='The "I Chose Me" Tee'; price=2800; category='tshirts'; description='I chose me. Crisp minimalist AskDoGood statement tee for self-respect and standards.'; image=$null },
  @{ id='tshirt-no-apologies'; name='The "No Apologies" Tee'; price=2800; category='tshirts'; description='No apologies. Edgy and artistic design for people who move with conviction.'; image=$null },

  @{ id='hoodie-boundaries'; name='The "Boundaries" Hoodie'; price=4800; category='hoodies'; description='Boundaries are beautiful. Elevated hoodie for calm confidence and clear standards.'; image=$null },
  @{ id='hoodie-rest'; name='The "Rest" Hoodie'; price=4800; category='hoodies'; description='Rest is productive too. Soft comfort piece for recovery days and quiet focus.'; image=$null },
  @{ id='hoodie-magic'; name='The "Black Girl Magic" Hoodie'; price=4800; category='hoodies'; description='Black Girl Magic energy with playful confidence and unmistakable AskDoGood spirit.'; image=$null },
  @{ id='hoodie-vibes'; name='The "Good Vibes" Hoodie'; price=4800; category='hoodies'; description='Good vibes only. Creative expression in a premium comfort fit.'; image=$null },

  @{ id='tote-ancestral'; name='The "Ancestral Strength" Tote'; price=2200; category='totes'; description='Ancestral strength, modern healing. Heavy-duty tote built for everyday intention.'; image=$null },
  @{ id='tote-community'; name='The "Community" Tote'; price=2200; category='totes'; description='We rise by lifting each other. Minimal tote celebrating collective care.'; image=$null },
  @{ id='tote-plant-powered'; name='The "Plant Powered" Tote'; price=2200; category='totes'; description='Plant Powered. Clean wellness branding for market runs and daily essentials.'; image=$null }
)

$results = @()
$dailyLimitReached = $false
$remaining = @()
foreach ($m in $merchTargets) {
  if ($dailyLimitReached) {
    $remaining += $m.id
    continue
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
