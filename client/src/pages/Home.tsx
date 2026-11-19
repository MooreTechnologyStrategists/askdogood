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
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Columbia_Heights_14th_Street.JPG/1280px-Columbia_Heights_14th_Street.JPG"
        alt="Looking north along 14th Street NW in Columbia Heights, Washington, DC"
      >
        <div className="adg-actions">
          <Action href="#find-your-next-step">
            Find My Wellness Starting Point
          </Action>
          <Action href="#pathways" secondary>
            Explore Free Resources & Guides
          </Action>
        </div>
        <p className="adg-small">14th Street NW, Columbia Heights, 2008. Photo by <a className="underline" href="https://commons.wikimedia.org/wiki/File:Columbia_Heights_14th_Street.JPG">AgnosticPreachersKid</a> · <a className="underline" href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</p>
      </PageIntro>

      <Section id="survivor-day" eyebrow="Saturday, November 21, 2026" title="International Survivors of Suicide Loss Day">
        <div className="adg-card">
          <p>If someone you love died by suicide, you may miss the sound of their laugh or wish someone would say their name. Whether your loss was recent or years ago, there’s room for you here.</p>
          <p>The American Foundation for Suicide Prevention brings people together to remember those they’ve lost. Find a gathering in the DC area or join Survivor Day Live online on November 21 at 7 p.m. Eastern.</p>
          <p><a className="underline" href="https://afsp.org/chapter/national-capital-area-survivor-day-events">Find local gatherings and the livestream</a></p>
          <p>If you need someone to talk to right now, you can reach a crisis counselor in the U.S. Call <a className="underline" href="tel:988?oai_link_source=model_response_hotline">988</a> or text <a className="underline" href="sms:988?oai_link_source=model_response_hotline">988</a>.</p>
        </div>
      </Section>

      <Section id="food-help" title="Find free groceries in Prince George’s County and DC">
        <p className="adg-lead">If groceries are tight this week, start with the pickup closest to home. Check the organizer’s page before heading out, especially on holidays.</p>
        <div className="adg-grid adg-grid-three">
          <article className="adg-card">
            <h3>Weekday pantries in Prince George’s County</h3>
            <p>County residents can visit the Hyattsville pantry at 6505 Belcrest Road, the Landover pantry at 425 Brightseat Road, or the Temple Hills pantry at 4235 28th Avenue. Regular hours are weekdays, 8 a.m. to 4:30 p.m.</p>
            <Action href="https://www.princegeorgescountymd.gov/departments-offices/food-pantry-services" secondary>Check county pantry details</Action>
          </article>
          <article className="adg-card">
            <h3>Free produce in Hyattsville</h3>
            <p>Walk up or drive up to First United Methodist Church, 6901 Belcrest Road, on the third Tuesday of the month. Pickup starts at noon. Call 301-985-5000 to confirm.</p>
            <Action href="https://www.hyattsville.org/937/Meals-Assistance" secondary>See the city’s produce giveaways</Action>
          </article>
          <article className="adg-card">
            <h3>Groceries in Shaw and Anacostia</h3>
            <p>Bread for the City offers monthly grocery pickups at 1525 7th Street NW and 1700 Marion Barry Avenue SE. Both pantries normally open Monday through Thursday, 9 a.m. to 3 p.m.</p>
            <Action href="https://breadforthecity.org/food/" secondary>Plan a Bread for the City visit</Action>
          </article>
        </div>
        <p>Need a closer pickup? <a className="adg-text-link" href="https://www.capitalareafoodbank.org/find-food-assistance/">Search the Capital Area Food Bank map.</a> To find more help or give directly to the regional campaign, visit <a className="adg-text-link" href="https://www.nbcwashington.com/community/how-to-donate-to-food-4-families-and-how-to-find-help/4174658/">NBC4 and Telemundo 44’s Food 4 Families</a>.</p>
        <figure className="my-5">
            <img className="adg-photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Setting_up_Produce_Stand_%289560825549%29.jpg/960px-Setting_up_Produce_Stand_%289560825549%29.jpg" alt="A market vendor arranging tomatoes in green baskets" loading="lazy" />
            <figcaption className="adg-small">Setting up at the Columbia Heights Community Marketplace, 2013. Photo by <a className="underline" href="https://commons.wikimedia.org/wiki/File:Setting_up_Produce_Stand_(9560825549).jpg">Hakim Fobia / USDA</a> · <a className="underline" href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
          </figure>
        <p>Hosting a giveaway at your shop, church, or community center? Send the date, pickup address, eligibility details, and public event link so neighbors can find you.</p>
        <div className="adg-actions"><Action href="/contact?topic=Community%20food%20listing" secondary>Submit or update a food listing</Action></div>
      </Section>

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
          <div>
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
            <figure className="my-5">
              <img className="adg-photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Watch_Out_%283678790941%29.jpg/960px-Watch_Out_%283678790941%29.jpg" alt="Close-up of a performer in a dark cap at an outdoor go-go set" loading="lazy" />
              <figcaption className="adg-small">Respect Street Go-Go at the Other Folklife Festival in DC, 2009. Photo by <a className="underline" href="https://commons.wikimedia.org/wiki/File:Watch_Out_(3678790941).jpg">Steve Snodgrass</a> · <a className="underline" href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
            </figure>
          </div>
        </div>
      </Section>
    </div>
  );
}
