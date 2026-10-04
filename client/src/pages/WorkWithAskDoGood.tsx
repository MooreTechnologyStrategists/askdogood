import {
  Action,
  PageIntro,
  Section,
  Reassurance,
} from "@/components/Experience";
export default function WorkWithAskDoGood() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="Workshops & partnerships"
        title="Useful wellness for the people you serve."
        text="Bring practical food, stress, healthy-habit, and life-transition education to your community. Programs can be adapted for adults, seniors, veterans, caregivers, families, and workplaces."
        image="/images/personal/travel/rosee-speaking-paris-2023.webp"
        alt="RoSeé speaking to a group in Paris"
      >
        <div className="adg-actions">
          <Action href="/contact?topic=Community%20workshop">
            Request a workshop conversation
          </Action>
        </div>
      </PageIntro>
      <Section title="Choose a format.">
        <div className="adg-grid adg-grid-three">
          {[
            [
              "One workshop",
              "A focused session on a practical topic, with take-home ideas participants can use.",
            ],
            [
              "A short series",
              "A connected set of sessions for building routines and practicing new habits.",
            ],
            [
              "Sponsored community programming",
              "Help make useful education and resources accessible to a group you care about.",
            ],
          ].map(([title, text]) => (
            <article className="adg-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <Action href="/contact?topic=Community%20workshop" secondary>
                Discuss this format
              </Action>
            </article>
          ))}
        </div>
      </Section>
      <Section tone title="Topics that meet real life.">
        <div className="adg-grid adg-grid-three">
          {[
            [
              "Food & meal planning",
              "Affordable food ideas, hydration, and easier planning.",
            ],
            [
              "Rest & stress",
              "Sleep routines, everyday stress, and making space to recharge.",
            ],
            [
              "Healthy aging & caregiving",
              "Useful routines for seniors, caregivers, and families.",
            ],
            [
              "Life transitions",
              "Rebuilding structure during change, loss, or a new chapter.",
            ],
            [
              "Garden & food literacy",
              "Connecting growing, food, and everyday learning.",
            ],
            [
              "Digital wellness",
              "Thoughtful technology habits and everyday confidence.",
            ],
          ].map(([title, text]) => (
            <article className="adg-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="From idea to a clear proposal.">
        <div className="adg-grid adg-grid-three">
          {[
            [
              "Tell us about your group",
              "Share the audience, goal, date, format, and approximate group size.",
            ],
            [
              "Review your proposal",
              "We confirm fit, content, availability, delivery, and a quoted price.",
            ],
            [
              "Agree and prepare",
              "Once the scope is agreed, we coordinate scheduling, materials, and next steps.",
            ],
          ].map(([title, text]) => (
            <div className="adg-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="adg-note">
          Program fees are quoted based on scope, format, group size, and
          delivery needs. Workshops provide non-clinical wellness education.
        </p>
        <Reassurance />
        <div className="adg-actions">
          <Action href="/contact?topic=Community%20workshop">
            Plan a program with AskDoGood
          </Action>
        </div>
      </Section>
    </div>
  );
}
