# Ask DoGood Product + Service Catalog for Gumroad + Stripe

**Audit date:** April 2026  
**Source files reviewed:** `client/src/pages/Shop.tsx`, `client/src/pages/Coaching.tsx`, `client/src/pages/Home.tsx`, `client/src/pages/MealPrep.tsx`, `client/src/data/merch-products.ts`, `client/src/data/bundles.ts`

---

## Quick platform recommendation

- **Gumroad** → best for digital downloads, templates, guides, and self-paced courses.
- **Stripe** → best for coaching, workshops, subscriptions you want more control over, and all physical merch.
- **Both** → best for flagship digital offers you want to sell from multiple places.

> If you want the simplest launch path: put **all digital products on Gumroad first**, then use **Stripe for coaching + merch**.

---

## 1) Core digital products

| Product | Price | Description | Image / cover | Current link | Recommended checkout | Status / notes |
|---|---:|---|---|---|---|---|
| Thyroid Health Mastery Course | $97 | Signature thyroid course with video modules, lab guidance, medication support, nutrition, stress tools, and advocacy help. | `https://askdogoodassets.blob.core.windows.net/images/products/Thyroid_Health_Mastery_Cover.png` | `https://askdogood.gumroad.com/l/thyroid-health-mastery` | **Both** (Gumroad primary, Stripe optional mirror) | Ready now. One legacy page still references `l/thyroid-mastery`; choose one canonical slug. |
| 21-Day Plant-Based Reset | $47 | 21-day anti-inflammatory reset with meal plans, shopping lists, prep guides, and thyroid-friendly recipes. | `https://askdogoodassets.blob.core.windows.net/images/products/Clinical_Food_RX_Cover.png` | `https://askdogood.gumroad.com/l/clinical-food-rx` | **Both** | Ready now. `Resources.tsx` also references `l/21-day-plant-based-reset`; unify the slug. |
| Thyroid Lab Interpretation Guide | $27 | Plain-language guide to TSH, Free T3, Free T4, antibodies, reverse T3, optimal ranges, and doctor questions. | `https://askdogoodassets.blob.core.windows.net/images/products/Lab_Interpretation_Guide_Cover.png` | `https://askdogood.gumroad.com/l/thyroid-lab-guide` | **Gumroad** | Ready now. Good low-ticket digital offer. |
| Thyroid Supplement Protocol Templates | $17 | Downloadable templates to build supplement, symptom, digestion, and stress-management protocols. | `https://askdogoodassets.blob.core.windows.net/images/products/Thyroid_Health_Mastery_Cover.png` | `https://askdogood.gumroad.com/l/adioal` | **Gumroad** | Content is sellable, but the slug `adioal` should be renamed and it needs its own cover image. |
| Garden to Table Wellness Bundle | $37 | Herb-growing, gardening, and 50+ recipe bundle with meal prep guidance and seasonal wellness content. | `/bundle-garden-to-table-v2.png` | Gumroad: `https://askdogood.gumroad.com/l/garden-to-table-bundle`  
Stripe: `https://buy.stripe.com/6oUfZgbuId18g7N8Kk77O03` | **Both** | Best candidate to sell on both platforms because a live Stripe link already exists. |
| Autoimmune Recovery Guide | $27 | Root-cause support guide with food lists, meal plans, supplements, stress tools, sleep support, and symptom tracking. | `/images/branding/askdogood-logo-navy.png` | `https://askdogood.gumroad.com/l/autoimmune-recovery-guide` | **Gumroad** | Good digital guide. Needs a dedicated product cover instead of a logo placeholder. |
| Black Women’s Health Advocacy Toolkit | $27 | Scripts, templates, checklists, and insurance-navigation tools for advocating in medical settings. | `/images/branding/askdogood-logo-orange.png` | No live checkout link found in code | **Gumroad** | Strong product idea; needs a live Gumroad/Stripe link and a real cover image. |
| Thyroid Symptom Tracker | $9.99 | Printable PDF tracker for symptoms, severity, medication, and supplement logging. | Homepage lifestyle image: `https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600` | `https://askdogood.gumroad.com/l/thyroid-symptom-tracker` | **Gumroad** | Great impulse-buy entry product. |
| 30-Day Thyroid Meal Plan | $29.99 | 30-day meal plan with recipes, shopping lists, and prep guidance for thyroid-friendly eating. | Homepage lifestyle image: `https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600` | `https://askdogood.gumroad.com/l/30-day-meal-plan` | **Both** | Strong evergreen digital offer. |

---

## 2) Membership and recurring offer

| Product | Price | Description | Image | Current link | Recommended checkout | Status / notes |
|---|---:|---|---|---|---|---|
| DoGood Wellness Circle | $27/mo regular, $19/mo founding | Monthly sisterhood-style wellness membership with live Q&A, private community, exclusive recipes, discounts, and support. | `/images/branding/askdogood-logo-navy.png` | `https://askdogood.gumroad.com/l/wellness-circle` | **Both** | Gumroad link already exists. Stripe is also worth adding later for better subscription control and checkout flexibility. |

---

## 3) Services and high-ticket offers

| Service | Price | Description | Image suggestion | Current link / path | Recommended checkout | Status / notes |
|---|---:|---|---|---|---|---|
| Discovery Call | $297 | 60-minute video call with lab review, personalized action plan, and follow-up support. | Professional headshot + consultation graphic | `client/src/pages/Coaching.tsx` | **Stripe** | Best sold through Stripe payment link or invoice. |
| Transformation Package | $997/month | 4 coaching sessions per month, custom meal and supplement plans, weekly check-ins, and priority support. | Premium coaching package graphic | `client/src/pages/Coaching.tsx` | **Stripe** | Best as recurring Stripe subscription or manual invoice. |
| VIP Intensive | $1,997 one-time | 4-hour deep-dive intensive with health history review, 90-day protocol, recipes, and follow-up calls. | Luxury VIP-day branded image | `client/src/pages/Coaching.tsx` | **Stripe** | High-ticket service; Stripe only is the cleanest fit. |
| Meal Prep Workshop | $75 | In-person or virtual group workshop for meal prep support in the DMV area. | Workshop photo or branded event flyer | `client/src/pages/MealPrep.tsx` | **Stripe** | Needs a real booking/payment link. |
| Private Meal Prep Coaching | $97 | Lower-ticket private support call tied to meal prep and practical nutrition guidance. | Headshot + meal prep image | `client/src/pages/MealPrep.tsx` | **Stripe** | Good add-on offer; sell via Stripe or direct invoice. |

---

## 4) Merch currently best for Stripe only

### A. Ready mockup merch in `client/src/data/merch-products.ts`

| Product | Price | Short description | Image | Recommended checkout | Status |
|---|---:|---|---|---|---|
| The “Gratitude” Mug | $18 | Bold gratitude-focused mug with gold-accent minimal design. | `https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_gratitude.webp` | **Stripe** | Image ready; Stripe link still placeholder/test. |
| The “Healing Path” Mug | $18 | Earthy-toned reminder that healing isn’t linear. | `https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_healing.webp` | **Stripe** | Ready image; needs live Stripe link. |
| The “Thriving” Mug | $18 | Empowering mug built around the “thriving not just surviving” message. | `https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_thriving.webp` | **Stripe** | Ready image; needs live Stripe link. |
| The “Small Wins” Mug | $18 | Botanical mug celebrating consistency and small wins. | `https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_small_wins.webp` | **Stripe** | Ready image; needs live Stripe link. |
| The “Therapy” Mug | $18 | Mental-health-forward mug with simple, clean typography. | `https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_therapy.webp` | **Stripe** | Ready image; needs live Stripe link. |
| The “Progress” Tee | $28 | Oversized tee with “progress over perfection” messaging. | `https://askdogoodassets.blob.core.windows.net/images/merch/mockup_tshirt_progress.webp` | **Stripe** | Ready image; needs live Stripe link. |
| The “Healing Out Loud” Tee | $28 | Community-centered statement shirt. | `/images/merch/mockup_tshirt_healing_loud.webp` | **Stripe** | Good concept; confirm image exists in production assets. |
| The “Structure” Tee | $28 | Clean motivational tee in terracotta styling. | `/images/merch/mockup_tshirt_structure.webp` | **Stripe** | Needs live Stripe link. |
| The “I Chose Me” Tee | $28 | Minimalist self-love statement tee. | `/images/merch/mockup_tshirt_chosen.webp` | **Stripe** | Needs live Stripe link. |
| The “No Apologies” Tee | $28 | Edgier artsy statement tee. | `/images/merch/mockup_tshirt_no_apologies.webp` | **Stripe** | Needs live Stripe link. |
| The “Boundaries” Hoodie | $48 | Cozy hoodie with wellness + streetwear tone. | `/images/merch/mockup_hoodie_boundaries.webp` | **Stripe** | Needs live Stripe link. |
| The “Rest” Hoodie | $48 | Oversized hoodie celebrating rest and self-care. | `/images/merch/mockup_hoodie_rest.webp` | **Stripe** | Needs live Stripe link. |
| The “Black Girl Magic” Hoodie | $48 | Empowering hoodie with whimsical Black Girl Magic energy. | `/images/merch/mockup_hoodie_magic.webp` | **Stripe** | Needs live Stripe link. |
| The “Good Vibes” Hoodie | $48 | Artsy expressive hoodie for wellness branding. | `/images/merch/mockup_hoodie_vibes.webp` | **Stripe** | Needs live Stripe link. |
| The “Ancestral Strength” Tote | $22 | Heavy-duty tote with ancestral healing theme. | `/images/merch/mockup_tote_ancestral.webp` | **Stripe** | Needs live Stripe link. |
| The “Community” Tote | $22 | Tote built around togetherness and mutual support. | `/images/merch/mockup_tote_community.webp` | **Stripe** | Needs live Stripe link. |
| The “Plant Powered” Tote | $22 | Minimal plant-based wellness tote. | `/images/merch/mockup_tote_plant_powered.webp` | **Stripe** | Needs live Stripe link. |

### B. Additional merch/concept products already defined on the Shop page

| Product | Price | Short description | Image | Recommended checkout | Status |
|---|---:|---|---|---|---|
| “Thyroid Thriver” Premium Tee | $32 | Premium empowerment tee for thyroid warriors. | `/images/branding/askdogood-logo-aqua.png` | **Stripe** | Product copy is ready; real mockup still needed. |
| “Ask DoGood” Vintage Washed Hoodie | $58 | Oversized healing-season hoodie with embroidered logo and back art. | `/images/branding/askdogood-logo-orange.png` | **Stripe** | Good premium merch item; needs real mockup. |
| “Real Food, Real Healing” Dad Cap | $28 | Organic cotton dad cap for market runs and garden days. | `/images/branding/askdogood-logo-navy.png` | **Stripe** | Needs real mockup. |
| “Autoimmune Warrior” Crewneck Sweatshirt | $48 | Heavyweight crewneck for chronic illness and autoimmune community. | `/images/branding/askdogood-logo-aqua.png` | **Stripe** | Needs real mockup. |
| “Garden to Table” Organic Tote Bag | $24 | Oversized canvas tote for produce runs and groceries. | `/images/branding/askdogood-logo-orange.png` | **Stripe** | Needs real mockup. |
| “Black Girl Magic Healing” Crop Hoodie | $52 | Cropped hoodie celebrating Black women’s healing journey. | `/images/branding/askdogood-logo-navy.png` | **Stripe** | Needs real mockup. |
| “Normalize Rest” Oversized Sleep Tee | $38 | Soft modal sleep tee for recovery and rest days. | `/images/branding/askdogood-logo-aqua.png` | **Stripe** | Needs real mockup. |
| “Good Energy Only” Tie-Dye Sweatpants | $44 | Hand-dyed fleece sweatpants with mantra embroidery. | `/images/branding/askdogood-logo-orange.png` | **Stripe** | Needs real mockup. |
| “Plant-Powered” Mesh Snapback | $32 | Breathable trucker-style cap for workouts and garden days. | `/images/branding/askdogood-logo-navy.png` | **Stripe** | Needs real mockup. |
| “Healing Happens Here” Embroidered Joggers | $54 | Premium fleece joggers with subtle healing message. | `/images/branding/askdogood-logo-aqua.png` | **Stripe** | Needs real mockup. |
| “Bloom Where You’re Planted” Bucket Hat | $30 | Reversible floral bucket hat with sun protection. | `/images/branding/askdogood-logo-orange.png` | **Stripe** | Needs real mockup. |
| “Wellness Warrior” Ringer Tee | $34 | Retro-inspired tee with customizable year. | `/images/branding/askdogood-logo-navy.png` | **Stripe** | Needs real mockup. |
| DMV Discernment T-Shirt | $32 | DMV culture statement tee. | `/mockups/tshirt-dmv-discernment.png` | **Stripe** | Marked as pending image editing in code. |
| NC Version DMV Tee | $32 | Carolina variation of the discernment tee. | `/mockups/tshirt-nc-version.png` | **Stripe** | Pending image editing. |
| “Not Loud, Just Heard” Tee | $32 | Quiet-confidence message tee. | `/mockups/tshirt-not-loud.png` | **Stripe** | Pending image editing. |
| “Peace is Non-Negotiable” Tee | $32 | Boundaries + peace statement tee. | `/mockups/tshirt-peace-non-negotiable.png` | **Stripe** | Pending image editing. |
| Hydrate & Heal Tumbler | $28 | 20oz insulated tumbler with hydration reminder branding. | `/mockups/tumbler-hydrate.png` | **Stripe** | Pending image editing. |
| Protect Your Peace Water Bottle | $32 | 32oz motivational bottle with time markers and affirmations. | `/mockups/water-bottle-protect-peace.png` | **Stripe** | Pending image editing. |
| Alignment Yoga Mat | $28 | Eco-friendly yoga mat with alignment markers. | `/mockups/yoga-mat-alignment.png` | **Stripe** | Pending image editing. |
| Return to Yourself Yoga Mat | $28 | Inspirational mat built around the “Return to Yourself” mantra. | `/mockups/yoga-mat-return-to-yourself.png` | **Stripe** | Pending image editing. |

---

## 5) Free lead magnets you can keep for email growth

| Freebie | Description | Link |
|---|---|---|
| Budget Grocery Checklist PDF | Free practical grocery planning resource. | `https://askdogoodassets.blob.core.windows.net/downloads/budget-grocery-checklist.pdf` |
| Meal Prep Container Guide PDF | Free meal prep storage and container guide. | `https://askdogoodassets.blob.core.windows.net/downloads/meal-prep-container-guide.pdf` |
| Thyroid Checklist | Free thyroid-related opt-in/lead magnet. | `https://askdogood.gumroad.com/l/thyroid-checklist` |

---

## Best launch order

1. **Thyroid Health Mastery Course** — flagship authority offer
2. **21-Day Plant-Based Reset** — easiest mid-ticket wellness offer
3. **Thyroid Symptom Tracker** — low-ticket entry product
4. **Thyroid Lab Interpretation Guide** — strong upsell from blogs and resources
5. **DoGood Wellness Circle** — recurring revenue
6. **Garden to Table Bundle** — great cross-sell for food/garden audience
7. **Coaching packages** — use Stripe only
8. **Merch** — launch after real mockups + live Stripe links are set

---

## Cleanup notes before publishing

- Pick one canonical Gumroad slug for the thyroid course: `thyroid-health-mastery` **or** `thyroid-mastery`.
- Pick one canonical Gumroad slug for the reset: `clinical-food-rx` **or** `21-day-plant-based-reset`.
- Rename `https://askdogood.gumroad.com/l/adioal` to a clearer product slug.
- Several merch and digital items still reference placeholder logo or mockup paths; swap in real covers before launch.
- `client/src/data/merch-products.ts` still uses **test/placeholder Stripe links**, so those products are not ready for public checkout until replaced.
