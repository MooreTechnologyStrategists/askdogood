export const GUMROAD_URLS = {
  storefront: import.meta.env.VITE_GUMROAD_STOREFRONT_URL || "https://askdogood.gumroad.com",
  thyroidMastery:
    import.meta.env.VITE_GUMROAD_THYROID_MASTERY_URL ||
    "https://roseecraft.gumroad.com/l/thyroid-health-mastery",
  plantReset:
    import.meta.env.VITE_GUMROAD_PLANT_RESET_URL ||
    "https://askdogood.gumroad.com/l/21-day-plant-based-reset",
  mealPlan:
    import.meta.env.VITE_GUMROAD_MEAL_PLAN_URL ||
    "https://askdogood.gumroad.com/l/30-day-meal-plan",
  mealPrepDeposit:
    import.meta.env.VITE_GUMROAD_MEAL_PREP_URL ||
    "https://askdogood.gumroad.com/l/clinical-food-rx",
  symptomTracker:
    import.meta.env.VITE_GUMROAD_SYMPTOM_TRACKER_URL ||
    "https://askdogood.gumroad.com/l/thyroid-symptom-tracker",
  labGuide:
    import.meta.env.VITE_GUMROAD_LAB_GUIDE_URL ||
    "https://askdogood.gumroad.com/l/thyroid-lab-guide",
  supplementTemplates:
    import.meta.env.VITE_GUMROAD_SUPPLEMENT_TEMPLATES_URL ||
    "https://askdogood.gumroad.com/l/adioal",
  gardenBundle:
    import.meta.env.VITE_GUMROAD_GARDEN_BUNDLE_URL ||
    "https://askdogood.gumroad.com/l/garden-to-table-bundle",
  autoimmuneGuide:
    import.meta.env.VITE_GUMROAD_AUTOIMMUNE_GUIDE_URL ||
    "https://askdogood.gumroad.com/l/autoimmune-recovery-guide",
  wellnessCircle:
    import.meta.env.VITE_GUMROAD_WELLNESS_CIRCLE_URL ||
    "https://askdogood.gumroad.com/l/wellness-circle",
  thyroidChecklist:
    import.meta.env.VITE_GUMROAD_THYROID_CHECKLIST_URL ||
    "https://askdogood.gumroad.com/l/thyroid-checklist",
  budgetGroceryChecklist:
    import.meta.env.VITE_GUMROAD_BUDGET_GROCERY_CHECKLIST_URL ||
    "https://askdogoodassets.blob.core.windows.net/downloads/budget-grocery-checklist.pdf",
  mealPrepContainerGuide:
    import.meta.env.VITE_GUMROAD_MEAL_PREP_CONTAINER_GUIDE_URL ||
    "https://askdogoodassets.blob.core.windows.net/downloads/meal-prep-container-guide.pdf",
  freeChecklistMealPlan:
    import.meta.env.VITE_GUMROAD_FREE_CHECKLIST_MEAL_PLAN_URL ||
    "https://askdogood.gumroad.com/l/thyroid-checklist",
} as const;
