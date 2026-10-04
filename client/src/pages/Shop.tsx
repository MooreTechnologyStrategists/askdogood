import {
  Action,
  PageIntro,
  Section,
  OfferCards,
  Reassurance,
} from "@/components/Experience";
import OriginalMerchCheckout from "@/components/OriginalMerchCheckout";
import { flagshipDigitalProducts } from "@/data/catalog";
export default function Shop() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Shop AskDoGood"
        title="Choose your next good step."
        text="Start with a guide, choose a personalized wellness plan, join the monthly membership, or shop the original merch. Read the details before you buy."
      >
        <div className="adg-actions">
          <Action href="#offers">Guides, plans & membership</Action>
          <Action href="#original-collection" secondary>
            Shop merch
          </Action>
        </div>
      </PageIntro>
      <Section id="offers" title="Start with these three.">
        <OfferCards />
        <Reassurance />
      </Section>
      <Section
        id="original-collection"
        tone
        eyebrow="Made with a message"
        title="The original AskDoGood collection."
      >
        <p>
          Choose your piece and size. Shipping is calculated at secure checkout.
        </p>
        <OriginalMerchCheckout />
        <div className="adg-actions">
          <Action href="/merch" secondary>
            View the full collection
          </Action>
        </div>
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
