// Canonical Gumroad storefront — all product URLs must use this base.
// Do NOT use roseecraft.gumroad.com; that account is inactive for AskDoGood products.
const GUMROAD_STOREFRONT = "https://askdogood.gumroad.com";

const gumroadProductUrl = (slug: string) => `${GUMROAD_STOREFRONT}/l/${slug}`;

export const GUMROAD_SLUGS = {
  thyroidMastery: "thyroid-health-mastery",          // LIVE — flagship course ($97)
  plantReset: "21-day-plant-based-reset",             // LIVE — plant-based reset ($47)
  mealPlan: "30-day-meal-plan",                       // LIVE — 30-day meal plan ($29.99)
  mealPrepDeposit: "meal-prep-deposit",               // UNPUBLISHED — booking deposit, publish when service is active
  symptomTracker: "thyroid-symptom-tracker",          // LIVE — symptom tracker ($9.99)
  labGuide: "thyroid-lab-guide",                      // LIVE — lab guide ($27)
  supplementTemplates: "thyroid-supplement-templates",// LIVE — supplement templates ($17); slug may need rename before full push
  gardenBundle: "garden-to-table-bundle",             // LIVE — garden bundle ($37)
  autoimmuneGuide: "autoimmune-recovery-guide",       // LIVE — autoimmune guide ($27)
  wellnessCircle: "wellness-circle",                  // LIVE — monthly membership ($27)
  thyroidChecklist: "thyroid-checklist",              // LIVE — free lead magnet
  blackWomensToolkit: "black-womens-health-advocacy-toolkit", // LIVE — advocacy toolkit ($27)
} as const;

export const GUMROAD_URLS = {
  storefront: GUMROAD_STOREFRONT,
  thyroidMastery: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.thyroidMastery}`,
  plantReset: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.plantReset}`,
  mealPlan: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.mealPlan}`,
  mealPrepDeposit: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.mealPrepDeposit}`,
  symptomTracker: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.symptomTracker}`,
  labGuide: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.labGuide}`,
  supplementTemplates: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.supplementTemplates}`,
  gardenBundle: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.gardenBundle}`,
  autoimmuneGuide: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.autoimmuneGuide}`,
  wellnessCircle: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.wellnessCircle}`,
  thyroidChecklist: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.thyroidChecklist}`,
  blackWomensToolkit: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.blackWomensToolkit}`,
  budgetGroceryChecklist: "https://askdogoodassets.blob.core.windows.net/downloads/budget-grocery-checklist.pdf",
  mealPrepContainerGuide: "https://askdogoodassets.blob.core.windows.net/downloads/meal-prep-container-guide.pdf",
  freeChecklistMealPlan: `${GUMROAD_STOREFRONT}/l/${GUMROAD_SLUGS.thyroidChecklist}`,
} as const;
