import {
  PageIntro,
  Section,
  TopicCards,
  HowItWorks,
  Action,
} from "@/components/Experience";
import {
  CommunityVoice,
  CommunityResources,
} from "@/components/CommunityVoice";
export default function ResourcesStart() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Start here · You belong here"
        title="Tell us what you are trying to sort out. Start with a free resource."
        text="If you are overwhelmed, choose one issue instead of trying to solve everything today. Browse practical checklists and resource links, see what each one covers, and decide what you want to do next. AskDoGood shares information and lived experience; we cannot guarantee housing, employment, medical care, financial assistance, or individual outcomes."
      >
        <div className="adg-actions">
          <Action href="#paths">Find my path</Action>
          <Action href="#right-now" secondary>
            I need practical help now
          </Action>
        </div>
      </PageIntro>
      <Section>
        <CommunityVoice />
      </Section>
      <Section
        id="paths"
        tone
        eyebrow="Your whole life matters"
        title="What would help today?"
      >
        <TopicCards />
        <p className="adg-small">
          Start with free reading and tools. Paid guides, plans, and membership
          are optional next steps, with prices shown before you choose.
        </p>
      </Section>
      <Section
        id="right-now"
        eyebrow="Real challenges. Useful starting points."
        title="When the ground shifts, reach for something solid."
      >
        <p className="adg-lead">
          Politics and policy belong in the conversation when they affect our
          jobs, care, food, and families. Alongside our perspectives, we point
          you toward original sources and practical resources you can check for
          yourself.
        </p>
        <CommunityResources />
      </Section>
      <Section
        tone
        eyebrow="Start small. Build strength."
        title="You don’t need a perfect life to make a useful plan."
      >
        <div className="adg-grid adg-grid-three">
          <article className="adg-card">
            <h3>Start free</h3>
            <p>
              Use a printable checklist to choose one manageable step for your
              body, mind, money, or connections.
            </p>
            <Action href="/next-step-checklist.html" secondary>
              Get my next-step checklist
            </Action>
          </article>
          <article className="adg-card">
            <h3>Stay connected</h3>
            <p>
              Find the free newsletter signup below for resources, personal
              stories, and new offers.
            </p>
            <Action href="#stay-connected" secondary>
              Join the newsletter
            </Action>
          </article>
          <article className="adg-card">
            <h3>Choose more structure</h3>
            <p>
              Explore the $17 reset guide, $97 personalized plan, or $19/month
              wellness membership.
            </p>
            <Action href="/shop">See what fits</Action>
          </article>
        </div>
      </Section>
      <Section title="Here’s how your next step works.">
        <HowItWorks />
        <div className="adg-actions">
          <Action href="/contact" secondary>
            Ask RoSeé a question
          </Action>
        </div>
      </Section>
    </div>
  );
}
