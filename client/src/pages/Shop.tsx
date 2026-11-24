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
