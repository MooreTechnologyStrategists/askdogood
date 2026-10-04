import BookTeaser from "@/components/BookTeaser";
import { Action, PageIntro, Section } from "@/components/Experience";
export default function Journey() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="RoSeé’s story"
        title="Still learning. Still rebuilding. Still doing good."
        text="My life has moved through service, health challenges, motherhood, technology, creativity, and starting again. AskDoGood is where those experiences meet a desire to help someone else move forward."
        image="/images/personal/rosee-garden-2026.webp"
        alt="RoSeé in her garden"
      />
      <Section title="The experiences behind the purpose.">
        <div className="adg-grid adg-grid-three">
          {[
            [
              "Service & community",
              "My military service and community work helped shape a commitment to meeting people where they are.",
            ],
            [
              "Health & self-advocacy",
              "My experience with thyroid disease and surgery brought new questions about health, everyday routines, and speaking up for myself.",
            ],
            [
              "Work & reinvention",
              "Technology, learning, creativity, and entrepreneurship have all been part of building my next chapter.",
            ],
          ].map(([title, text]) => (
            <article className="adg-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone title="From fear to a wider world.">
        <div className="adg-split">
          <img
            className="adg-photo"
            src="/images/personal/travel/rosee-speaking-paris-2023.webp"
            alt="RoSeé speaking at a conference in Paris in 2023"
            loading="lazy"
          />
          <div>
            <p>
              I once feared flying. In 2023, I found myself in Paris speaking
              about thyroid physiology and metabolism. That experience became
              part of a larger story about possibility and the places life can
              take you.
            </p>
            <Action
              href="/blog/overcoming-fear-and-thriving-my-journey-to-paris-to-speak-on-thyroid-metabolism"
              secondary
            >
              Read the Paris story
            </Action>
          </div>
        </div>
      </Section>
      <Section title="There’s a life beyond the work.">
        <div className="adg-split">
          <div>
            <p>
              The garden, music, family, food, and everyday moments give this
              space its heartbeat. I share what I’m creating, what I’m
              questioning, and what I’m learning as I go.
            </p>
            <div className="adg-actions">
              <Action href="/garden" secondary>
                Step into the garden
              </Action>
              <Action href="/interests" secondary>
                Explore music & interests
              </Action>
            </div>
          </div>
          <img
            className="adg-photo"
            src="/images/personal/rosee-with-mc-lyte.jpg"
            alt="A photograph of RoSeé with MC Lyte"
            loading="lazy"
          />
        </div>
      </Section>
      <Section tone title="Where my story meets your next step.">
        <p>
          Explore useful guides, wellness planning, community support, and
          real-life resources.
        </p>
        <div className="adg-actions">
          <Action href="/resources/start">Find my path</Action>
          <Action href="/about" secondary>
            Read our mission
          </Action>
        </div>
      </Section>
      <BookTeaser />
    </div>
  );
}
