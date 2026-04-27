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

$targets = @(
  @{ key='plantReset'; name='21-Day Plant-Based Reset'; slug='21-day-plant-based-reset'; native_type='digital'; price=4700; description='A 21-day guided reset with meal ideas, shopping support, prep tips, and wellness encouragement for anyone ready to clean things up without making life miserable.'; cover='https://askdogoodassets.blob.core.windows.net/images/products/Clinical_Food_RX_Cover.png' },
  @{ key='mealPlan'; name='30-Day Thyroid Meal Plan'; slug='30-day-meal-plan'; native_type='digital'; price=2999; description='Recipes, prep guidance, shopping ideas, and a simple plan to help reduce decision fatigue and support more intentional eating.'; cover='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80&auto=format&fit=crop' },
  @{ key='labGuide'; name='Thyroid Lab Interpretation Guide'; slug='thyroid-lab-guide'; native_type='digital'; price=2700; description='A straightforward guide to TSH, Free T3, Free T4, antibodies, reverse T3, and the right questions to ask your provider.'; cover='https://askdogoodassets.blob.core.windows.net/images/products/Lab_Interpretation_Guide_Cover.png' },
  @{ key='supplementTemplates'; name='Thyroid Supplement Protocol Templates'; slug='thyroid-supplement-templates'; native_type='digital'; price=1700; description='Downloadable templates to help structure your supplement routine, symptom tracking, digestion notes, and recovery support.'; cover='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop' },
  @{ key='gardenBundle'; name='Garden to Table Wellness Bundle'; slug='garden-to-table-bundle'; native_type='digital'; price=3700; description='A lifestyle bundle for people who want to reconnect with food, healing, herbs, and simple nourishment from garden to table.'; cover='https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80&auto=format&fit=crop' },
  @{ key='autoimmuneGuide'; name='Autoimmune Recovery Guide'; slug='autoimmune-recovery-guide'; native_type='digital'; price=2700; description='Includes food guidance, symptom support, lifestyle structure, and practical wellness tools for autoimmune healing support.'; cover='https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80&auto=format&fit=crop' },
  @{ key='symptomTracker'; name='Thyroid Symptom Tracker'; slug='thyroid-symptom-tracker'; native_type='digital'; price=999; description='Track what you feel, when it changes, and what may be affecting your thyroid health so you can speak more clearly about what your body is doing.'; cover='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80&auto=format&fit=crop' },
  @{ key='wellnessCircle'; name='DoGood Wellness Circle'; slug='wellness-circle'; native_type='membership'; price=1900; subscription_duration='monthly'; description='Monthly community experience with Q&A sessions, exclusive content, wellness tools, recipes, insights, and support for women rebuilding their health and peace.'; cover='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80&auto=format&fit=crop' },
  @{ key='thyroidChecklist'; name='Thyroid Checklist'; slug='thyroid-checklist'; native_type='digital'; price=0; description='A fast, practical starting-point checklist for thyroid-related symptoms and next steps.'; cover='https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80&auto=format&fit=crop' },
  @{ key='blackWomensToolkit'; name='Black Women''s Health Advocacy Toolkit'; slug='black-womens-health-advocacy-toolkit'; native_type='digital'; price=2700; description='A practical advocacy toolkit with checklists, appointment prep, scripts, and decision-support guidance created to help Black women be heard, respected, and better prepared in medical settings.'; cover='https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80&auto=format&fit=crop' }
)

$results = @()
foreach ($t in $targets) {
  $id = $null
  $action = ''

  if ($existing.ContainsKey($t.slug)) {
    $id = $existing[$t.slug].id
    $action = 'updated'
    $updateData = @{
      name = $t.name
      custom_permalink = $t.slug
      description = $t.description
    }

    # Tiered memberships reject direct product-level price updates.
    if ($t.native_type -ne 'membership') {
      $updateData['price'] = [string]$t.price
      $updateData['price_currency_type'] = 'usd'
    }

    Invoke-GumroadJson -Method 'PUT' -Path "/products/$id" -Data $updateData | Out-Null
  } else {
    $action = 'created'
    $createData = @{
      native_type = $t.native_type
      name = $t.name
      custom_permalink = $t.slug
      description = $t.description
      price = [string]$t.price
      price_currency_type = 'usd'
    }
    if ($t.native_type -eq 'membership' -and $t.subscription_duration) {
      $createData['subscription_duration'] = $t.subscription_duration
    }
    $created = Invoke-GumroadJson -Method 'POST' -Path '/products' -Data $createData
    $id = $created.product.id
  }

  if ($t.cover) {
    try {
      Invoke-GumroadJson -Method 'POST' -Path "/products/$id/covers" -Data @{ url = $t.cover } | Out-Null
    } catch {
      # Keep going if cover fetch fails.
    }
  }

  Invoke-GumroadJson -Method 'PUT' -Path "/products/$id/enable" -Data @{} | Out-Null
  $final = Invoke-GumroadJson -Method 'GET' -Path "/products/$id" -Data @{}

  $results += [pscustomobject]@{
    key = $t.key
    slug = $t.slug
    id = $id
    action = $action
    short_url = $final.product.short_url
    published = $final.product.published
    formatted_price = $final.product.formatted_price
  }
}

$results | ConvertTo-Json -Depth 6
