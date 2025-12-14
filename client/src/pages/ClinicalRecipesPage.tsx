import { CLINICAL_RECIPE_APP_URL } from "@/config/clinicalRecipes";

export default function ClinicalRecipesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Clinical Food RX
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Personalized, health-aware recipes built around your conditions,
          medications, and real-life needs.
        </p>
      </section>

      {/* Embedded App */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="w-full h-[80vh] rounded-xl overflow-hidden border shadow-sm bg-black">
          <iframe
            src={CLINICAL_RECIPE_APP_URL}
            title="Clinical Recipe System"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </main>
  );
}
