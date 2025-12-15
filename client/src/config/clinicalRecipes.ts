// Clinical Recipe System URL
// Always points to the Vercel deployment (always-on, no sleep)
export const CLINICAL_RECIPE_APP_URL = "https://clinical-recipe-system.vercel.app";

// For local development or testing, you can override with:
// VITE_CLINICAL_RECIPE_APP_URL in .env
export const getClinicalRecipeUrl = (): string => {
  if (typeof import.meta.env.VITE_CLINICAL_RECIPE_APP_URL === 'string' && 
      import.meta.env.VITE_CLINICAL_RECIPE_APP_URL.trim()) {
    return import.meta.env.VITE_CLINICAL_RECIPE_APP_URL.trim();
  }
  return CLINICAL_RECIPE_APP_URL;
};
