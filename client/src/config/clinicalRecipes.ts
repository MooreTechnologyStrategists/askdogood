export const DEFAULT_CLINICAL_RECIPE_APP_URL =
  "https://clinical-food-rx.preview.emergentagent.com/";

export const CLINICAL_RECIPE_APP_URL: string =
  (import.meta.env.VITE_CLINICAL_RECIPE_APP_URL?.trim() as string | undefined) ||
  DEFAULT_CLINICAL_RECIPE_APP_URL;
