# Merch URL Status

Status date: 2026-06-29
Source of truth: client/src/data/merch-products.ts

## Configured Checkout URLs (2)

These products now have dedicated checkoutUrl values configured:

1. tshirt-soft-life-discipline - Soft Life Is a Discipline Tee
- https://askdogood.gumroad.com/l/askdogood-soft-life-is-a-discipline-tee

2. tshirt-classroom-to-cloud - From Classroom to Cloud Tee
- https://askdogood.gumroad.com/l/dope-cloud-teacher-from-classroom-to-cloud-tee

Note: you still need these exact slugs to exist as live Gumroad products for conversion-ready checkout.

## Products Still Missing Valid Dedicated URLs (19)

These products still only have placeholder Stripe links and currently fall back to the storefront:

1. tshirt-protect-the-girls - Protect the Girls Tee
2. tshirt-build-dont-scroll - Build. Don't Scroll. Tee
3. mug-gratitude - The "Gratitude" Mug
4. mug-healing - The "Healing Path" Mug
5. mug-thriving - The "Thriving" Mug
6. mug-small-wins - The "Small Wins" Mug
7. mug-therapy - The "Therapy" Mug
8. tshirt-progress - The "Progress" Tee
9. tshirt-healing-loud - The "Healing Out Loud" Tee
10. tshirt-structure - The "Structure" Tee
11. tshirt-chosen - The "I Chose Me" Tee
12. tshirt-no-apologies - The "No Apologies" Tee
13. hoodie-boundaries - The "Boundaries" Hoodie
14. hoodie-rest - The "Rest" Hoodie
15. hoodie-magic - The "Black Girl Magic" Hoodie
16. hoodie-vibes - The "Good Vibes" Hoodie
17. tote-ancestral - The "Ancestral Strength" Tote
18. tote-community - The "Community" Tote
19. tote-plant-powered - The "Plant Powered" Tote

## Fast Completion Plan

1. Create/confirm both hero Gumroad products first.
2. Replace placeholder links for the four campaign concepts next.
3. Replace placeholder links for remaining evergreen catalog items.
4. Re-test by clicking each merch product card once and checking GA4 checkout_source values.
