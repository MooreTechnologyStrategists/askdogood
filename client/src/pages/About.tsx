import {
  Action,
  PageIntro,
  Section,
  TopicCards,
} from "@/components/Experience";
import { mission, vision } from "@/content/experience";
export default function About() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="About AskDoGood"
        title="Useful guidance for a full, real life."
        text="AskDoGood brings together health education, relationships, practical life tools, and honest stories—so you can find a next step that fits your life."
        image="/images/personal/food/zay-at-first-watch.jpg"
        alt="RoSeé smiling outside a restaurant"
      />
      <Section>
        <div className="adg-grid adg-grid-three">
          <article className="adg-card">
            <p className="adg-eyebrow">Mission</p>
            <h2>Help people move forward.</h2>
            <p>{mission}</p>
          </article>
          <article className="adg-card">
            <p className="adg-eyebrow">Vision</p>
            <h2>Useful support within reach.</h2>
            <p>{vision}</p>
          </article>
          <article className="adg-card">
            <p className="adg-eyebrow">Values</p>
            <h2>Care with purpose.</h2>
            <p>
              Faith, service, honesty, culture, curiosity, and respect. Everyone
              is welcome here.
            </p>
          </article>
        </div>
      </Section>
      <Section tone title="What you’ll find here.">
        <TopicCards />
        <div className="adg-actions">
          <Action href="/shop">Explore guides, plans & membership</Action>
          <Action href="/merch" secondary>
            Shop merch
          </Action>
        </div>
      </Section>
      <Section title="Built from lived experience.">
        <div className="adg-split">
          <div>
            <p>
              I’m RoSeé Murphy, the person behind AskDoGood. My experiences with
              health, family, service, work, and rebuilding shape the questions
              I ask and the stories I share.
            </p>
            <p>
              AskDoGood brings useful information into everyday language.
              Personal stories are shared as personal stories; wellness
              resources are educational, and specialized care belongs with
              qualified professionals.
            </p>
            <p>
              We also bring practical wellness workshops and resources to
              organizations serving their communities.
            </p>
            <div className="adg-actions">
              <Action href="/journey" secondary>
                Read my journey
              </Action>
              <Action href="/work-with-askdogood" secondary>
                Explore community workshops
              </Action>
            </div>
          </div>
          <img
            className="adg-photo"
            src="/images/personal/travel/rosee-speaking-paris-2023.webp"
            alt="RoSeé speaking in Paris in 2023"
            loading="lazy"
          />
        </div>
      </Section>
    </div>
  );
}
