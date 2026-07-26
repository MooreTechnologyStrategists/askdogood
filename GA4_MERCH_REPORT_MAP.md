# GA4 Merch Report Map

Purpose: read week-1 merch performance in under 2 minutes.

## Primary Events

### merch_cta_click
Source:
- Triggered from merch grid buttons and About flagship CTA buttons.

Where implemented:
- client/src/pages/Merch.tsx
- client/src/pages/About.tsx

Key parameters:
- product_id
- product_name
- product_brand (askdogood | dct)
- product_category
- product_price
- cta_location (merch_grid | about_flagship_section)
- cta_type (shop_merch | launch_planning, About only)
- checkout_source (checkout_url | stripe_link | storefront_fallback)
- purchase_url

### product_click
Source:
- Triggered in merch grid click handler via trackProductClick.

Where implemented:
- client/src/pages/Merch.tsx
- client/src/lib/analytics.ts

Key parameters:
- product_name
- product_value
- product_category

## Recommended GA4 Explorations

### 1) Fast winner board
Explore type:
- Free form

Rows:
- product_name

Columns:
- product_brand

Values:
- Event count (event_name = merch_cta_click)

Filters:
- cta_location exactly matches merch_grid

Use this to rank the top-performing products by click intent.

### 2) URL readiness monitor
Explore type:
- Free form

Rows:
- checkout_source

Values:
- Event count (event_name = merch_cta_click)

Interpretation:
- checkout_url = best state
- stripe_link = direct checkout path
- storefront_fallback = product still missing a dedicated live URL

### 3) Campaign source quality
Explore type:
- Free form

Rows:
- Session source / medium

Values:
- Event count (event_name = merch_cta_click)

Filters:
- cta_location matches merch_grid OR about_flagship_section

Use this to decide where ad and content budget should go next.

## Week-1 KPI Targets
- merch_cta_click total: 20+
- checkout_source = checkout_url share: 60%+
- top product event count gap vs #2: less than 30% (healthy portfolio)
- storefront_fallback share: less than 15% by end of week

## Build Notes
- If storefront_fallback is high, product URLs are not fully configured.
- Priority fix order:
  1) top 2 hero products
  2) all featured products
  3) full catalog
