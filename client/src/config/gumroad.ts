const GUMROAD_STOREFRONT =
  import.meta.env.VITE_GUMROAD_STOREFRONT_URL || "https://roseecraft.gumroad.com";

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
} as const;

export const GUMROAD_URLS = {
  storefront: GUMROAD_STOREFRONT,
  thyroidMastery:
    import.meta.env.VITE_GUMROAD_THYROID_MASTERY_URL ||
    "https://askdogood.gumroad.com/l/thyroid-health-mastery",
  plantReset:
    import.meta.env.VITE_GUMROAD_PLANT_RESET_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.plantReset),
  mealPlan:
    import.meta.env.VITE_GUMROAD_MEAL_PLAN_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.mealPlan),
  mealPrepDeposit:
    import.meta.env.VITE_GUMROAD_MEAL_PREP_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.mealPrepDeposit),
  symptomTracker:
    import.meta.env.VITE_GUMROAD_SYMPTOM_TRACKER_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.symptomTracker),
  labGuide:
    import.meta.env.VITE_GUMROAD_LAB_GUIDE_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.labGuide),
  supplementTemplates:
    import.meta.env.VITE_GUMROAD_SUPPLEMENT_TEMPLATES_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.supplementTemplates),
  gardenBundle:
    import.meta.env.VITE_GUMROAD_GARDEN_BUNDLE_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.gardenBundle),
  autoimmuneGuide:
    import.meta.env.VITE_GUMROAD_AUTOIMMUNE_GUIDE_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.autoimmuneGuide),
  wellnessCircle:
    import.meta.env.VITE_GUMROAD_WELLNESS_CIRCLE_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.wellnessCircle),
  thyroidChecklist:
    import.meta.env.VITE_GUMROAD_THYROID_CHECKLIST_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.thyroidChecklist),
  budgetGroceryChecklist:
    import.meta.env.VITE_GUMROAD_BUDGET_GROCERY_CHECKLIST_URL ||
    "https://askdogoodassets.blob.core.windows.net/downloads/budget-grocery-checklist.pdf",
  mealPrepContainerGuide:
    import.meta.env.VITE_GUMROAD_MEAL_PREP_CONTAINER_GUIDE_URL ||
    "https://askdogoodassets.blob.core.windows.net/downloads/meal-prep-container-guide.pdf",
  freeChecklistMealPlan:
    import.meta.env.VITE_GUMROAD_FREE_CHECKLIST_MEAL_PLAN_URL ||
    gumroadProductUrl(GUMROAD_SLUGS.thyroidChecklist),
} as const;
