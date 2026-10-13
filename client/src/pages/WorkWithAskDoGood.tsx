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
        image="/images/community/family-cooking.webp"
        alt="A family preparing food together at home"
      >
        <div className="adg-actions">
          <Action href="/contact?topic=Community%20workshop">
            Request a workshop conversation
          </Action>
        </div>
      </PageIntro>
      <Section title="Three ways to learn, grow, and move forward.">
        <p className="adg-note">Real-life learning for real people. These are facilitated group experiences for organizations, campuses, employers and community partners—not prebooked public dates. Tell us about your group and we'll propose a date, format and quote. Sponsored seats may be available when funding is confirmed.</p>
        <div className="adg-grid adg-grid-three">
          <article className="adg-card">
            <img src="/images/community/family-cooking.webp" alt="Family sharing a relaxed moment preparing food together" loading="lazy" style={{width:"100%",aspectRatio:"4 / 3",objectFit:"cover",borderRadius:"16px"}} />
            <p className="adg-note">ASKDOGOOD · WELLNESS & LIFE SKILLS</p>
            <h3>The Life Reset Lab</h3>
            <p>Sometimes the next chapter starts with one manageable change. In this welcoming, judgment-free workshop, we explore healthy living on a budget, finding trustworthy community resources, handling life transitions, and creating a realistic personal next-step plan. Expect conversation, reflection, practical take-home tools and encouragement—not lectures or pressure to have everything figured out.</p>
            <p>Ideal for student groups, community organizations, employee resource groups, veterans and adult learners. Educational programming only; not therapy, medical advice or financial counseling.</p>
            <Action href="/contact?topic=Life%20Reset%20Lab">Request a Life Reset Lab</Action>
          </article>
          <article className="adg-card">
            <p className="adg-note">THE DOPE CLOUD TEACHER · DIGITAL CONFIDENCE</p>
            <h3>Digital Confidence: AI Without Fear</h3>
            <p>Curious about AI but not sure where to begin? You belong in this conversation. Explore useful everyday AI tools, learn to spot scams and misinformation, protect personal information and practice asking better questions. No technical background or age limit to curiosity. We move at a human pace and make room for every question.</p>
            <p>Ideal for seniors, libraries, community groups and first-time AI learners. Offered through our sister education brand, The Dope Cloud Teacher.</p>
            <a href="https://thedopecloudteacher.org/partners.html">Explore DCT group training →</a>
          </article>
          <article className="adg-card">
            <p className="adg-note">THE DOPE CLOUD TEACHER · WORKPLACE LEARNING</p>
            <h3>AI at Work: Use It. Verify It. Protect It.</h3>
            <p>Make AI useful without putting your organization at risk. Teams learn where AI can save time, how to verify outputs, what information should stay private, and how to apply practical safeguards. The session combines relatable examples, guided exercises and an actionable checklist participants can use immediately.</p>
            <p>Ideal for employers, nonprofit teams, college departments and professional groups. Offered through The Dope Cloud Teacher.</p>
            <a href="https://thedopecloudteacher.org/partners.html">Ask DCT about workplace training →</a>
          </article>
        </div>
      </Section>
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
