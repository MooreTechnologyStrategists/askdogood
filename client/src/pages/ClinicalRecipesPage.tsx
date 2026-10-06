import { Action, PageIntro, Section } from "@/components/Experience";
export default function ClinicalRecipesPage() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Health & food"
        title="Something good to make at home."
        text="Explore recipes and practical food ideas. Start with one meal you want to try, then build a routine that fits your life."
        image="/images/personal/food/rosee-home-meal.webp"
        alt="A home-prepared meal from RoSeé’s photo archive"
      />
      <Section tone title="What’s good to eat?">
        <p>Tell us what you have, find a recipe to explore, and save a simple week of meals on your device.</p>
        <Action href="/whats-good-to-eat">Open the kitchen tools</Action>
      </Section>
      <Section title="Pick a recipe.">
        <div className="adg-grid adg-grid-three">
          {[
            ["Lentil burgers", "dogood-lentil-burgers"],
            ["Chickpea burgers", "chickpea-burgers"],
            ["Quinoa & rice medley", "quinoa-rice-medley"],
            ["Purple cabbage & broccoli slaw", "purple-cabbage-broccoli-slaw"],
            ["Roasted vegetables", "roasted-vegetables-trio"],
            ["Mason jar salad", "mason-jar-salad"],
            ["Homemade pizza", "homemade-pizza"],
            ["Green smoothie bowl", "green-smoothie-bowl"],
            ["Growing fresh mint", "growing-fresh-mint"],
          ].map(([title, slug]) => (
            <article className="adg-card" key={slug}>
              <h3>{title}</h3>
              <Action href={`/recipe/${slug}`} secondary>
                See recipe & instructions
              </Action>
            </article>
          ))}
        </div>
      </Section>
      <Section tone title="Make food planning easier.">
        <p>
          Explore meal-prep ideas or use the recipe planner to organize your
          meals.
        </p>
        <div className="adg-actions">
          <Action href="/meal-prep" secondary>
            Meal-prep ideas
          </Action>
          <Action href="/recipes/planner" secondary>
            Open the recipe planner
          </Action>
          <Action href="/product/custom-wellness-plan">
            Explore a personalized wellness plan
          </Action>
        </div>
      </Section>
    </div>
  );
}
