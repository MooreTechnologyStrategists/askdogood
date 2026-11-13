import "./Home.css";
import { ClipboardList, MoonStar, Sprout, Stethoscope } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Action, PageIntro, Section } from "@/components/Experience";
import { mission, vision } from "@/content/experience";
import { catalogById } from "@/data/catalog";
import { trackEvent } from "@/lib/analytics";

const pathways = [
  {
    title: "Thyroid & Hormone Health",
    illustration: Stethoscope,
    description:
      "Organize your questions and prepare to discuss thyroid labs with your clinician.",
    free: ["Open the free thyroid lab guide", "/free-thyroid-lab-guide"],
    guide: "thyroid-lab-interpretation-guide",
    program: "thyroid-health-mastery",
  },
  {
    title: "Budget Nutrition & Container Gardening",
    illustration: Sprout,
    description:
      "Plan affordable meals and learn what you can grow in a small space.",
    free: ["Explore the garden resources", "/garden"],
    guide: "garden-to-table-wellness-bundle",
    program: "21-day-plant-based-reset",
  },
  {
    title: "Patient Advocacy & Appointment Prep",
    illustration: ClipboardList,
    description:
      "Gather your notes, decide what to ask, and make the most of your next visit.",
    free: ["Open the free appointment checklist", "/doctor-checklist"],
    guide: "black-womens-health-advocacy-toolkit",
    program: null,
  },
  {
    title: "Rest & Everyday Routines",
    illustration: MoonStar,
    description:
      "Make room for rest, comfortable movement, and a practice that grounds you.",
    free: ["Build a free DERS plan", "/services#wellness-planner"],
    guide: "7-day-reset",
    program: null,
  },
] as const;

type Pathway = (typeof pathways)[number];

function WellnessQuiz() {
  const [pathway, setPathway] = useState<Pathway | null>(null);
  const [format, setFormat] = useState<"free" | "guide" | "program" | null>(
    null
  );
  const heading = useRef<HTMLHeadingElement>(null);
  const step = format ? 3 : pathway ? 2 : 1;

  useEffect(() => {
    if (step > 1) heading.current?.focus();
  }, [step]);

  function chooseFormat(choice: NonNullable<typeof format>) {
    setFormat(choice);
    trackEvent("wellness_quiz_complete");
  }

  const productId = format === "program" ? pathway?.program : pathway?.guide;
  const product =
    format !== "free" && productId ? catalogById[productId] : undefined;

  function goBack() {
    if (format) setFormat(null);
    else {
      setPathway(null);
      heading.current?.focus();
    }
  }

  return (
    <div className="adg-card" data-clarity-mask="true">
      <p className="adg-eyebrow">Step {step} of 3</p>
      <h3 ref={heading} tabIndex={-1}>
        {step === 1
          ? "What would you like support with?"
          : step === 2
            ? "How would you like to get started?"
            : pathway?.title}
      </h3>
      {step === 1 && (
        <div className="adg-actions">
          {pathways.map(option => (
            <button
              key={option.title}
              type="button"
              className="adg-button adg-button-secondary"
              onClick={() => {
                setPathway(option);
                trackEvent("wellness_quiz_start");
              }}
            >
              {option.title}
            </button>
          ))}
        </div>
      )}
      {step === 2 && (
        <div className="adg-actions">
          <button
            type="button"
            className="adg-button adg-button-secondary"
            onClick={() => chooseFormat("free")}
          >
            Start with a free resource
          </button>
          <button
            type="button"
            className="adg-button adg-button-secondary"
            onClick={() => chooseFormat("guide")}
          >
            Use a self-paced guide or toolkit
          </button>
          {pathway?.program && (
            <button
              type="button"
              className="adg-button adg-button-secondary"
              onClick={() => chooseFormat("program")}
            >
              Explore a structured program
            </button>
          )}
        </div>
      )}
      {format && pathway && (
        <>
          <p>{product?.shortSummary ?? pathway.description}</p>
          <div className="adg-actions">
            {product?.internalPath && (
              <a className="adg-button" href={product.internalPath}>
                View {product.name} · {product.priceLabel}
              </a>
            )}
            <a
              className={
                product?.internalPath
                  ? "adg-button adg-button-secondary"
                  : "adg-button"
              }
              href={pathway.free[1]}
            >
              {pathway.free[0]}
            </a>
          </div>
        </>
      )}
      {step > 1 && (
        <button
          type="button"
          className="adg-button adg-button-secondary"
          onClick={goBack}
        >
          Back
        </button>
      )}
      <p className="adg-small">
        Your answers stay in this quiz. These recommendations are for wellness
        education.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="AskDoGood · Prince George’s County & Washington, DC"
        title="Real life. Real wellness. Real community."
        text="Good living doesn’t have to cost a fortune. Come as you are, find practical wellness resources, and grow from where you are—right here in our community."
        image="/images/community/family-kitchen.webp"
        alt="A family preparing a meal together"
      >
        <div className="adg-actions">
          <Action href="#find-your-next-step">
            Find My Wellness Starting Point
          </Action>
          <Action href="#pathways" secondary>
            Explore Free Resources & Guides
          </Action>
        </div>
      </PageIntro>

      <Section id="featured-experiences" title="Good things to explore right now" eyebrow="Made for real life">
        <div className="adg-grid adg-grid-three">
          <article className="adg-card">
            <p className="adg-eyebrow">Family-friendly discovery</p>
            <h3>Play & Grow</h3>
            <p>Hands-on activities, fresh ideas, and space to learn something new together. Curiosity belongs here.</p>
            <Action href="/play-grow">Explore Play & Grow</Action>
          </article>
          <article className="adg-card">
            <p className="adg-eyebrow">From our kitchen</p>
            <h3>The AskDoGood Cookbook</h3>
            <p>Take a peek at the recipes and the stories behind them. The cookbook is being prepared for release; join us for updates.</p>
            <Action href="/cookbook">Preview the cookbook</Action>
          </article>
          <article className="adg-card">
            <p className="adg-eyebrow">Wear the good</p>
            <h3>AskDoGood Merch</h3>
            <p>Everyday pieces that carry a little encouragement into the world. See what is available in the shop.</p>
            <Action href="/merch">Shop merch</Action>
          </article>
        </div>
      </Section>

      <Section id="find-your-next-step" tone title="Find Your Next Step">
        <WellnessQuiz />
      </Section>

      <Section id="pathways" title="Explore wellness guides and tools">
        <div className="adg-grid adg-grid-four">
          {pathways.map(pathway => (
            <article className="adg-card adg-pathway-card" key={pathway.title}>
              <pathway.illustration
                className="adg-pathway-illustration"
                aria-hidden="true"
                strokeWidth={1.1}
              />
              <h3>{pathway.title}</h3>
              <p>{pathway.description}</p>
              <Action href={pathway.free[1]} secondary>
                {pathway.free[0]}
              </Action>
            </article>
          ))}
        </div>
        <p className="adg-lead">
          Diet, Exercise, Rest, and Spiritual Practice are the four parts of
          DERS, our framework for building routines you can live with.
        </p>
        <div className="adg-actions">
          <Action href="/shop" secondary>
            Browse the shop
          </Action>
        </div>
      </Section>

      <Section
        id="meet-dogood"
        tone
        eyebrow="Meet RoSeé"
        title="A little good from DoGood. Pull up a chair."
      >
        <div className="adg-split">
          <img
            className="adg-photo"
            src="/images/personal/rosee-smiling.webp"
            alt="RoSeé Murphy, founder of AskDoGood"
            loading="lazy"
          />
          <div>
            <p>
              I’m RoSeé, also known as DoGood. I’m an Army veteran and cloud
              architect. I built AskDoGood to turn what I’ve lived and learned
              into something useful for our people.
            </p>
            <p>{mission}</p>
            <p>{vision}</p>
            <Action href="/about" secondary>
              Meet the founder
            </Action>
          </div>
        </div>
      </Section>

      <Section
        id="community-highlights"
        eyebrow="Wellness in the DMV"
        title="Bring practical wellness to your group"
      >
        <div className="adg-split">
          <div>
            <p>
              Across Prince George’s County and DC, we want wellness to feel
              like something you can talk about after church, at the senior
              center, or around the kitchen table. Our workshops make room for
              real questions, from stretching a grocery budget to building a
              routine that fits the week you actually have.
            </p>
            <p>
              Two recent stops for AskDoGood were the St. Luke recruitment and
              resource fair in Washington, DC, and the YPD Community Impact
              Event. We’ve also been talking with the University of Maryland
              Extension’s Expanded Food and Nutrition Education Program about
              a possible community nutrition pilot.
            </p>
            <p>
              If you bring people together at a church, senior center,
              nonprofit, or workplace, tell us what would be useful for your
              group. We’ll talk through what a workshop could look like.
            </p>
            <div className="adg-actions">
              <Action href="/contact?topic=Community%20workshop">
                Inquire About a Group Workshop
              </Action>
              <Action href="/work-with-askdogood" secondary>
                Explore Workshop Formats
              </Action>
            </div>
          </div>
          <figure>
            <img
              className="adg-photo"
              src="/images/community/st-luke-connections.webp"
              alt="Attendees and recruiters talking beside resource tables at St. Luke"
              loading="lazy"
            />
            <figcaption className="adg-small">
              Connecting with neighbors at the St. Luke resource fair in
              Washington, DC.
            </figcaption>
            <div className="adg-actions">
              <Action href="/community" secondary>
                See Community Highlights
              </Action>
            </div>
          </figure>
        </div>
      </Section>
    </div>
  );
}
