import { Link } from "wouter";
import {
  Action,
  PageIntro,
  Section,
  TopicCards,
  OfferCards,
  HowItWorks,
  Reassurance,
} from "@/components/Experience";
import { mission, vision } from "@/content/experience";
import {
  CommunityVoice,
  CommunityResources,
} from "@/components/CommunityVoice";
export default function Home() {
  return (
    <div className="adg-page">
      <PageIntro
        eyebrow="AskDoGood · Health, connection & everyday life"
        title="A little guidance. A good next step."
        text="Whole-life support for real-life pressure. Find space to exhale, practical guidance, and a stronger next step for your health, relationships, work, and everyday life."
        image="/images/personal/rosee-garden-2026.webp"
        alt="RoSeé smiling in her garden"
      >
        <p className="adg-small">
          Start with a $17 reset guide, get a $97 personalized wellness plan, or
          explore $19/month membership.
        </p>
        <div className="adg-actions">
          <Action href="#choose">Find what I need</Action>
          <Action href="/shop" secondary>
            See offers & prices
          </Action>
        </div>
      </PageIntro>
      <Section>
        <CommunityVoice />
      </Section>
      <Section
        id="choose"
        eyebrow="Start with what brought you here"
        title="What would help today?"
      >
        <TopicCards />
      </Section>
      <Section
        tone
        eyebrow="Useful, even before you spend a dollar"
        title="Start with one good step."
      >
        <div className="adg-split">
          <div>
            <p className="adg-lead">
              Feeling overwhelmed? Take the free next-step checklist. Choose one
              small action for today, then build from there.
            </p>
            <div className="adg-actions">
              <Action href="/next-step-checklist.html">
                Get the free checklist
              </Action>
              <Action href="#stay-connected" secondary>
                Stay connected
              </Action>
            </div>
          </div>
          <div className="adg-mini-poster">
            <span>FEEL IT.</span>
            <span>NAME IT.</span>
            <strong>TAKE ONE STEP.</strong>
            <p>Your pace. Your life. Your next chapter.</p>
          </div>
        </div>
      </Section>
      <Section
        tone
        eyebrow="Practical support you can purchase"
        title="Three ways to take a next step."
      >
        <OfferCards />
        <div className="adg-actions">
          <Action href="/shop" secondary>
            Browse all offers
          </Action>
        </div>
      </Section>
      <Section eyebrow="From exploring to doing" title="Here’s how it works.">
        <HowItWorks />
        <Reassurance />
      </Section>
      <Section
        tone
        eyebrow="Featured preview · In development"
        title="Beats, Plants & Plates."
      >
        <div className="adg-split">
          <img
            src="/images/merch/beats-plants-plates-cover.webp"
            alt="Beats, Plants & Plates review-edition cookbook cover"
            className="adg-book-cover"
            loading="lazy"
          />
          <div>
            <h3>Good food. Good music. A stronger everyday rhythm.</h3>
            <p>
              Original recipes with a hip-hop heartbeat, practical swaps, and
              sourced cultural notes. Read two recipe drafts while we prepare
              the first release.
            </p>
            <div className="adg-actions">
              <Action href="/cookbook">Explore the cookbook preview</Action>
              <Action href="/contact?topic=Cookbook%20interest" secondary>
                Tell me more
              </Action>
            </div>
            <p className="adg-small">
              Review edition. Kitchen testing and release preparation remain.
              Purchasing is not open yet.
            </p>
          </div>
        </div>
      </Section>
      <Section tone eyebrow="Made with a message" title="Wear a little good.">
        <div className="adg-split">
          <img
            src="/images/merch/askdogood-original-three.webp"
            alt="AskDoGood black hoodie, hoodie and jogger set, and cream tee"
            className="adg-photo adg-photo-contain"
            loading="lazy"
          />
          <div>
            <h3>Your original AskDoGood collection.</h3>
            <p>
              Black embroidered hoodie $59. Hoodie and jogger set $95. Cream
              logo tee $29. Sizes S–2XL; shipping is calculated at checkout.
            </p>
            <div className="adg-actions">
              <Action href="/merch">Shop merch</Action>
            </div>
            <p className="adg-small">
              Made to order. Review sizing and delivery details before checkout.
            </p>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Built from life, for life"
        title="Meet the person behind AskDoGood."
      >
        <div className="adg-split">
          <div>
            <p>
              I’m RoSeé. AskDoGood grew from my own experiences with health,
              rebuilding, learning, and finding peace in the middle of real
              life. This is where useful knowledge meets an honest conversation.
            </p>
            <h3>Our mission</h3>
            <p>{mission}</p>
            <h3>Our vision</h3>
            <p>{vision}</p>
            <p>
              Faith-rooted, culturally grounded, and welcoming to people from
              every walk of life.
            </p>
            <div className="adg-actions">
              <Action href="/about" secondary>
                Get to know AskDoGood
              </Action>
              <Action href="/journey" secondary>
                Read my story
              </Action>
            </div>
          </div>
          <img
            src="/images/personal/food/zay-at-first-watch.jpg"
            alt="RoSeé smiling outside a restaurant"
            className="adg-photo"
            loading="lazy"
          />
        </div>
      </Section>
      <Section
        tone
        eyebrow="For the people you serve"
        title="Bring AskDoGood to your community."
      >
        <p className="adg-lead">
          Practical workshops on food, stress, healthy routines, caregiving, and
          life transitions for community groups, senior centers, veterans
          organizations, and workplaces.
        </p>
        <div className="adg-actions">
          <Action href="/work-with-askdogood">
            Explore workshops & partnerships
          </Action>
        </div>
      </Section>
      <Section
        tone
        eyebrow="The reading room"
        title="Stories that meet the moment."
      >
        <div className="adg-grid adg-grid-three">
          {[
            {
              slug: "when-life-shifts-your-next-step-still-matters",
              title: "When life shifts, your next step still matters",
              text: "Work, care, and the pressure to keep going—with practical places to begin.",
              image:
                "/images/editorial/when-life-shifts-your-next-step-still-matters.svg",
              alt: "Editorial graphic about life transitions",
            },
            {
              slug: "dmv-meal-prep-for-busy-women-who-want-to-eat-clean-without-burning-out",
              title: "Feed yourself without burning yourself out",
              text: "A practical meal-prep rhythm for a life that is already full.",
              image: "/images/personal/food/muhammad-dishes-1.jpg",
              alt: "Colorful vegetables in a prepared dish",
            },
            {
              slug: "how-to-build-a-weekly-relationship-check-in-ritual",
              title: "Connection takes a little room",
              text: "Make space for listening, honesty, and a useful weekly check-in.",
              image:
                "/images/personal/professional/clay-banks-hands-together.jpg",
              alt: "Hands together around a table",
            },
          ].map(item => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="adg-card adg-image-card"
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="adg-text-link">Read & take a next step</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section
        id="pockets"
        eyebrow="Little pockets of peace"
        title="There’s room for joy, too."
      >
        <div className="adg-grid adg-grid-three">
          {[
            {
              title: "In the garden",
              text: "Growing, changing, and making room for a slower moment.",
              href: "/garden",
              image: "/images/personal/food/garden-peppers.jpg",
              alt: "Peppers growing in RoSeé’s garden",
            },
            {
              title: "What music made me",
              text: "Old school sounds, culture, and stories worth sharing.",
              href: "/interests",
              image: "/images/personal/rosee-with-mc-lyte.jpg",
              alt: "A photograph of RoSeé with MC Lyte",
            },
            {
              title: "Life beyond the familiar",
              text: "The places and experiences that open a new chapter.",
              href: "/journey",
              image: "/images/personal/travel/rosee-speaking-paris-2023.webp",
              alt: "RoSeé speaking in Paris",
            },
          ].map(item => (
            <Link
              key={item.title}
              href={item.href}
              className="adg-card adg-image-card"
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="adg-text-link">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Care, work & community"
        title="Real life doesn’t happen in separate boxes."
      >
        <p className="adg-lead">
          A job change can affect your care. A money worry can follow you home.
          Whole-life support makes room for that reality—and helps you find
          something useful to do.
        </p>
        <CommunityResources />
        <div className="adg-actions">
          <Action
            href="/blog/when-life-shifts-your-next-step-still-matters"
            secondary
          >
            Read: When life shifts
          </Action>
        </div>
      </Section>
    </div>
  );
}
