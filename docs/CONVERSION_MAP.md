# Conversion Map

Date: 2026-07-14

## North-Star Conversion Paths

1. Content to Email
2. Content to Product
3. Content to Service Inquiry
4. Content to Community/Membership
5. Content to Repeat Visit

## Primary Visitor Journeys and Destinations

### 1) I Need to Feel Better
- Destination cluster: mental wellness, grief support, encouragement stories, stress tools, faith reflection, membership waitlist.
- Primary conversion: newsletter + wellness journal + challenge signup.

### 2) I Want to Get Healthier
- Destination cluster: nutrition, recipes, low-sodium guidance, thyroid and heart support, meal prep.
- Primary conversion: meal plans + meal prep order/inquiry + workshops.

### 3) I Am Caring for Someone
- Destination cluster: caregiver checklists, elder-care navigation, appointment planning, support resources.
- Primary conversion: caregiver planner + workshop inquiry + newsletter segment.

### 4) My Family Is Struggling
- Destination cluster: teen support, parent-child communication, family conflict resources.
- Primary conversion: family guide downloads + workshop/community program inquiry.

### 5) I Want a Better Future
- Destination cluster: career/tech literacy, AI for daily life, job resources, Dope Cloud Teacher bridge.
- Primary conversion: workshop/course signup + mailing list segment.

## Current-State Conversion Observations

- Many conversion surfaces already exist (newsletter, products, shop, services).
- Funnel hierarchy is diluted by too many homepage sections and mixed intent.
- Mission-level CTA clarity exists in parts, but primary route to "Find what you need" is not consistently implemented.
- Form completion reliability is at risk while `/api/*` path appears unresolved for static deployment.

## Event Model (Priority)

Critical events:
- `journey_path_selected`
- `resource_card_click`
- `newsletter_signup_start`
- `newsletter_signup_success`
- `service_inquiry_submit`
- `product_click`
- `checkout_click`
- `article_read_complete` (scroll/time)

High-impact properties:
- `journey_type`
- `content_pillar`
- `source_page`
- `cta_location`
- `product_slug`

## Conversion Priorities

Critical:
1. Reliable lead capture and service inquiry submission.
2. One clear CTA set per journey on homepage.
3. Remove dead links from key conversion surfaces.

High:
1. Standardize product cards around solution bundles (Eat Better, Feel Better, Care Better, Grow Better).
2. Add trust-copy at conversion points (what happens next, response time, disclosure).

Medium:
1. Personalize recommendations by journey path.
2. Add lightweight return-visitor prompts.
