# AskDoGood merchandise — preserved for future launch
Status: **Archived from public site on November 24, 2026. Do not accept or advertise merchandise orders until approved.**

## Approved designs
- Outta Pocket — gray hoodie with DC three-star flag on back.
- Nah Moe — royal blue hoodie.
- Whole Time, You Lunchin’ Slim — tan hoodie.
- PG Circle — chocolate-brown hoodie.
- I Still Make Plans — powder-blue hoodie with dark/navy AskDoGood brand mark.
- Matching skull cap, baseball cap, and head wrap concepts are planned but require separate approved proof art.
- Retail target for each approved hoodie: **$59 before shipping and applicable taxes**.

## Master website files preserved (not deployed in the shopping experience)
- `client/src/components/DMVStreetwearDrop.tsx` — existing four-hoodie display.
- `client/src/pages/Merch.tsx` — archived merchandising page (route is currently mapped to the digital Shop, not this page).
- `client/src/components/OriginalMerchCheckout.tsx` — original checkout implementation; not mounted on public site.
- `client/src/data/merch-products.ts` and `client/src/data/catalog.ts` — product data and concepts retained, merch excluded from active `catalogItems`.
- `client/public/images/merch/` — high-resolution website artwork for all concepts, retained in source control.
- `public/images/merch/` — additional approved imported previews, retained in source control.
- `MERCH_DESIGN_SPECS.md` and `MERCH_AI_DESIGN_BRIEFS_JULY_2026.md` — design information.

## Original design artwork to restore
- `client/public/images/merch/dmv-four.webp`
- `client/public/images/merch/dmv-outta-pocket.webp`
- `client/public/images/merch/dmv-nah-moe.webp`
- `client/public/images/merch/dmv-lunchin-slim.webp`
- `client/public/images/merch/dmv-pg-circle.webp`
- `client/public/images/merch/dmv-flag.webp`
- `client/public/images/merch/dmv-plans.webp`

The above files are design mockups, not production-ready separations. Preserve their exact appearance; do not invent replacement artwork.

## Requirements before relaunch
1. Verify AskDoGood's Maryland sales and use tax account and whether a Prince George's County Trader’s License is required for this print-on-demand arrangement.
2. Activate only a jurisdiction with confirmed registration in Stripe Tax, and verify checkout taxes for test addresses.
3. Confirm business address, seller identity, and payment account information.
4. Prepare printer-quality transparent design artwork, print areas, garment sizes/colors, logo treatment, and approve a physical supplier sample.
5. Create distinct Printify products and enabled size variants, verify inventory, base cost, and shipping.
6. Test a **safe sandbox checkout** without using real Printify production tokens to fulfill a test charge.
7. Confirm actual provider holiday order cutoff before advertising Christmas delivery.

## Deployment change
- The public `/merch` route has been replaced with the digital wellness `/shop` page until reauthorization.
- Merchandise sections and links have been removed from site navigation, landing pages, and SEO entries.
- Existing underlying data, artwork, and code are deliberately retained for a future launch; no irreversible deletion.
