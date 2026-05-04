const GUMROAD_STOREFRONT = "https://askdogood.gumroad.com";

const gumroadProductUrl = (slug: string) => `${GUMROAD_STOREFRONT}/l/${slug}`;

export const GUMROAD_SLUGS = {
  thyroidMastery: "thyroid-health-mastery",
  plantReset: "21-day-plant-based-reset",
  mealPlan: "30-day-meal-plan",
  mealPrepDeposit: "meal-prep-deposit",
  symptomTracker: "thyroid-symptom-tracker",
  labGuide: "thyroid-lab-guide",
  supplementTemplates: "thyroid-supplement-templates",
  gardenBundle: "garden-to-table-bundle",
  autoimmuneGuide: "autoimmune-recovery-guide",
  wellnessCircle: "wellness-circle",
  thyroidChecklist: "thyroid-checklist",
  blackWomensToolkit: "black-womens-health-advocacy-toolkit",
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
