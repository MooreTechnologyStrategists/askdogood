import { CLINICAL_RECIPE_APP_URL } from "@/config/clinicalRecipes";

export default function ClinicalRecipesPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-2">Clinical Recipes</h1>
        <p className="text-muted-foreground mb-6">
          Your personalized nutrition lab — built for real life.
        </p>

        <div className="rounded-2xl overflow-hidden border bg-background shadow-sm">
          <iframe
            title="Clinical Recipe System"
            src={CLINICAL_RECIPE_APP_URL}
            className="w-full h-[80vh]"
            loading="lazy"
            referrerPolicy="no-referrer"
            allow="clipboard-read; clipboard-write"
          />
        </div>
      </div>
    </div>
  );
}
