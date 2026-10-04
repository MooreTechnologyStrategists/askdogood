import {
  Action,
  PageIntro,
  Section,
  OfferCards,
  Reassurance,
} from "@/components/Experience";
export default function Coaching() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Personal support"
        title="Let’s make your next step clearer."
        text="Choose a personalized wellness plan, explore ongoing membership, or ask us about a conversation on relationships, career, or a life transition."
      >
        <div className="adg-actions">
          <Action href="/contact?topic=Personal%20support">
            Ask about support
          </Action>
        </div>
      </PageIntro>
      <Section title="Wellness offers you can explore now.">
        <OfferCards ids={["custom-wellness-plan", "dogood-wellness-circle"]} />
        <Reassurance />
      </Section>
      <Section tone title="For a personal conversation.">
        <p>
          Tell us what you want help with. We’ll discuss availability, scope,
          format, and price before you commit. Medical care, therapy, and crisis
          support require qualified professionals.
        </p>
        <div className="adg-actions">
          <Action href="/support/relationships" secondary>
            Relationships & support
          </Action>
          <Action href="/support/career" secondary>
            Career & purpose
          </Action>
          <Action href="/contact?topic=Personal%20support">
            Start an inquiry
          </Action>
        </div>
      </Section>
    </div>
  );
}
