import {
  PageIntro,
  Section,
  TopicCards,
  HowItWorks,
  Action,
} from "@/components/Experience";
export default function ResourcesStart() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Start here"
        title="What do you need today?"
        text="Choose the part of life you want help with. Each path brings together free reading, practical tools, and relevant ways to get more support."
      />
      <Section>
        <TopicCards />
      </Section>
      <Section tone title="Take it one step at a time.">
        <HowItWorks />
        <div className="adg-actions">
          <Action href="/shop">See offers & prices</Action>
          <Action href="/contact" secondary>
            Ask a question
          </Action>
        </div>
      </Section>
    </div>
  );
}
