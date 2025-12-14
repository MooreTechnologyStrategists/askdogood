import { CLINICAL_RECIPE_APP_URL } from "@/config/clinicalRecipes";

export const DEFAULT_CLINICAL_RECIPE_APP_URL =
  "https://clinical-recipe-system.vercel.app/";

export const CLINICAL_RECIPE_APP_URL: string =
  (import.meta.env.VITE_CLINICAL_RECIPE_APP_URL?.trim() as string | undefined) ||
  DEFAULT_CLINICAL_RECIPE_APP_URL;
