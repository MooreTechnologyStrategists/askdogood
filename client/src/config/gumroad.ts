export const GUMROAD_URLS = {
  storefront: import.meta.env.VITE_GUMROAD_STOREFRONT_URL || "https://askdogood.gumroad.com",
  thyroidMastery:
    import.meta.env.VITE_GUMROAD_THYROID_MASTERY_URL ||
    "https://askdogood.gumroad.com/l/thyroid-health-mastery",
  plantReset:
    import.meta.env.VITE_GUMROAD_PLANT_RESET_URL ||
    "https://askdogood.gumroad.com/l/clinical-food-rx",
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
  freeChecklistMealPlan:
    import.meta.env.VITE_GUMROAD_FREE_CHECKLIST_MEAL_PLAN_URL ||
    "https://askdogood.gumroad.com/l/thyroid-checklist",
} as const;
