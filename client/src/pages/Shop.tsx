import WellnessPaths from "@/components/WellnessPaths";
import {
  Action,
  PageIntro,
  Section,
  OfferCards,
  Reassurance,
} from "@/components/Experience";
import { flagshipDigitalProducts } from "@/data/catalog";
export default function Shop() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Shop AskDoGood"
        title="Choose your next good step."
        text="Explore practical wellness guides and tools for everyday life. Personal support and workshops are arranged separately."
      >
        <div className="adg-actions">
          <Action href="#offers">Find my support path</Action>
          <Action href="#good-finds">Explore Good Finds</Action>
        </div>
      </PageIntro>
      <Section id="offers" title="Care. Food. Your everyday routine.">
        <WellnessPaths />
        <Reassurance />
      </Section>
      <Section
        eyebrow="Explore a specific topic"
        title="More wellness guides & tools."
      >
        <p>
          Choose a resource for food planning, health education, or appointment
          preparation.
        </p>
        <details className="adg-card adg-details">
          <summary>Browse the additional digital resources</summary>
          <OfferCards
            ids={flagshipDigitalProducts
              .filter(p => p.id !== "7-day-reset")
              .map(p => p.id)}
          />
        </details>
      </Section>
      <Section id="good-finds" eyebrow="The Good Finds Collection" title="Live better. Spend smarter.">
        <p>Practical shopping guides for everyday life. Start with what you already own; these are optional ideas, not required purchases.</p>
        <p>Partner links are not active in this collection yet. When they become available, we will clearly identify links that may earn us a commission.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Good Kitchen</h3><p className="mt-2">Meal-prep containers, food scales, cutting boards and air fryers. Start with what you already own.</p></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Good Move</h3><p className="mt-2">Walking shoes, resistance bands and exercise mats. Choose equipment that fits your mobility and budget.</p></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Good Reset</h3><p className="mt-2">Sleep masks, comfortable bedding and a simple wind-down journal.</p></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Good Soul</h3><p className="mt-2">Gratitude journals, devotionals and books for reflection.</p></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Good Garden</h3><p className="mt-2">Planters, hand tools, watering cans and seed-starting supplies.</p></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Wellness Corner</h3><p className="mt-2">Appointment notebooks and validated upper-arm blood pressure monitors; check with your care team about fit.</p></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">Beauty & Self-Care</h3><p className="mt-2">Satin bonnets, gentle detangling tools and everyday accessories.</p></article>
        </div>
        <div className="adg-actions"><Action href="/resources">Explore free wellness resources</Action></div>
      </Section>
      <Section
        tone
        eyebrow="For groups and organizations"
        title="Looking for a workshop?"
      >
        <p>
          Explore practical community programming. Scope, availability, and
          price are agreed before booking.
        </p>
        <div className="adg-actions">
          <Action href="/work-with-askdogood">See workshop options</Action>
        </div>
      </Section>
    </div>
  );
}
