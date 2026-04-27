# AskDoGood Gumroad Site Link Audit

Audit date: April 18, 2026

## Public Link Status

Resolved live during audit:

- `https://askdogood.gumroad.com/l/thyroid-health-mastery`

Returned 404 during audit:

- `https://askdogood.gumroad.com/`
- `https://askdogood.gumroad.com/l/21-day-plant-based-reset`
- `https://askdogood.gumroad.com/l/30-day-meal-plan`
- `https://askdogood.gumroad.com/l/clinical-food-rx`
- `https://askdogood.gumroad.com/l/thyroid-symptom-tracker`
- `https://askdogood.gumroad.com/l/thyroid-lab-guide`
- `https://askdogood.gumroad.com/l/garden-to-table-bundle`
- `https://askdogood.gumroad.com/l/autoimmune-recovery-guide`
- `https://askdogood.gumroad.com/l/adioal`
- `https://askdogood.gumroad.com/l/wellness-circle`
- `https://askdogood.gumroad.com/l/thyroid-checklist`

## Code Surfaces Using Gumroad Links

### Centralized config

- `client/src/config/gumroad.ts`
- `client/src/data/catalog.ts`

These are the main sources that feed most product cards and buy buttons. This is the right place to keep canonical URLs.

### Pages and components affected by config-driven product URLs

- `client/src/pages/Home.tsx`
- `client/src/pages/MealPrep.tsx`
- `client/src/pages/Merch.tsx`
- `client/src/pages/ThyroidCourse.tsx`
- `client/src/pages/products/ThyroidMasteryCourse.tsx`
- `client/src/pages/Shop.tsx`
- `client/src/pages/Resources.tsx`
- `client/src/data/catalog.ts`

### Pages/components that had hardcoded product links or copy-level references

- `client/src/components/Chatbot.tsx`

This file has now been moved onto centralized config URLs for the key direct Gumroad links it was hardcoding.

## What Is Broken Versus Ready

### Working now

- Thyroid Health Mastery Course

### Ready in site content, but public Gumroad listing still missing or not published

- 21-Day Plant-Based Reset
- Thyroid Symptom Tracker
- Thyroid Lab Interpretation Guide
- 30-Day Thyroid Meal Plan
- Garden to Table Wellness Bundle
- DoGood Wellness Circle
- Thyroid Checklist

### Needs packaging or cleanup before launch

- Autoimmune Recovery Guide
- Thyroid Supplement Protocol Templates
- Black Women's Health Advocacy Toolkit
- Meal Prep Deposit checkout if you still want this to use Gumroad

## Recommended Cleanup Applied

- Canonical store base in site config is now set to `https://roseecraft.gumroad.com` unless overridden by env vars.
- Canonical slugs are now centralized in `client/src/config/gumroad.ts`.
- Legacy drift like `adioal` and duplicate reset slugs has been removed from the main config path.

## What To Test After Each New Product Is Created

1. Homepage featured/catalog CTA
2. Shop page product card
3. Resources page product card
4. Meal Prep page product CTA if relevant
5. Chatbot product links
6. Direct public Gumroad URL in a private browser window