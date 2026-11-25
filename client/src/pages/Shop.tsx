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
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Good Kitchen</h3><p className="mt-2">Meal-prep containers, food scales, cutting boards and air fryers. Start with what you already own.</p><div className="adg-actions mt-4"><a className="adg-button adg-button-secondary" href="/free-meal-plan">Start with our free meal plan</a><a className="adg-button" href="/product/21-day-plant-based-reset">Explore the 21-Day Plant-Based Reset</a></div></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Good Move</h3><p className="mt-2">Walking shoes, resistance bands and exercise mats. Choose equipment that fits your mobility and budget.</p><div className="adg-actions mt-4"><a className="adg-button adg-button-secondary" href="/keep-moving">Find ways to move</a><a className="adg-button" href="/product/7-day-reset">Explore the 7-Day Reset</a></div></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Good Reset</h3><p className="mt-2">Sleep masks, comfortable bedding and a simple wind-down journal.</p><div className="adg-actions mt-4"><a className="adg-button adg-button-secondary" href="/services#wellness-planner">Start a free DERS plan</a><a className="adg-button" href="/product/7-day-reset">Get the 7-Day Reset</a></div></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Good Soul</h3><p className="mt-2">Gratitude journals, devotionals and books for reflection.</p><div className="adg-actions mt-4"><a className="adg-button adg-button-secondary" href="/pockets-of-peace">Find a pocket of peace</a><a className="adg-button" href="/product/dogood-wellness-circle">Explore the wellness membership</a></div></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Good Garden</h3><p className="mt-2">Planters, hand tools, watering cans and seed-starting supplies.</p><div className="adg-actions mt-4"><a className="adg-button adg-button-secondary" href="/garden">Explore the garden</a><a className="adg-button" href="/product/garden-to-table-wellness-bundle">See the Garden to Table bundle</a></div></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">The Wellness Corner</h3><p className="mt-2">Appointment notebooks and validated upper-arm blood pressure monitors; check with your care team about fit.</p><div className="adg-actions mt-4"><a className="adg-button adg-button-secondary" href="/doctor-checklist">Get the appointment checklist</a><a className="adg-button" href="/product/black-womens-health-advocacy-toolkit">Explore the advocacy toolkit</a></div></article>
          <article className="adg-card p-5"><h3 className="text-xl font-semibold">Beauty & Self-Care</h3><p className="mt-2">Satin bonnets, gentle detangling tools and everyday accessories.</p><div className="adg-actions mt-4"><a className="adg-button adg-button-secondary" href="/journey">Read our story</a><a className="adg-button" href="/product/dogood-wellness-circle">Explore the wellness membership</a></div></article>
        </div>
        <div className="adg-actions"><Action href="/resources">Explore free wellness resources</Action><Action href="#stay-connected" secondary>Join the free newsletter</Action></div><p className="adg-small">For organizations: <Action href="/work-with-askdogood" secondary>Explore community workshops</Action></p>
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
