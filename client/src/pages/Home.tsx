import CommunityEvents from "@/components/CommunityEvents";
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
        eyebrow="AskDoGood · Rooted in the DMV. Built for real life."
        title="Real life is complicated. Start with what you need today."
        text="Maybe you need help sorting out a bill, finding your footing after a setback, making sense of a difficult relationship, or just getting through a hard week. Start with free reading, checklists, and links to resources. We explain what each tool does and what it cannot do."
        image="/images/personal/rosee-garden-2026.webp"
        alt="RoSeé smiling in her garden"
      >
        <p>I’m RoSeé. My journey has included difficult seasons, hard lessons, and finding a new direction. Education, technology, faith, and a commitment to growth helped me build a stronger foundation. I built AskDoGood to pay forward what I’m learning—so someone else can see possibilities and take a real next step.</p>
        <div className="adg-actions"><Action href="#choose">Find my next step</Action><Action href="/resources/start#right-now" secondary>I need practical help now</Action></div>
        <p className="adg-small">Start with free resources. You do not need to purchase anything to begin.</p>
      </PageIntro>
      <Section eyebrow="NEW · Your five-minute escape" title="A little breathing room, with something useful to take away.">
        <div className="adg-grid adg-grid-three">
          <article className="adg-card adg-image-card"><img src="/images/personal/rosee-garden-2026.webp" alt="RoSeé in the garden" loading="lazy" /><div><h3>Grow through what you go through.</h3><p>Learn when to start seeds, how to care for young plants, and what gardening can teach us about patience. Start with our existing garden guides.</p><Action href="/pockets-of-peace">Step into Pockets of Peace</Action></div></article>
          <article className="adg-card"><p className="adg-eyebrow">Turn the music up</p><h3>The soundtrack of us.</h3><p>Pick a song that means something to you, reflect on the memory behind it, and save your thoughts to your own device. No account or purchase required.</p><Action href="/pockets-of-peace#take-five" secondary>Find your five-minute reset</Action></article>
          <article className="adg-card"><p className="adg-eyebrow">Good food. Real life.</p><h3>Beats, Plants &amp; Plates.</h3><p>Browse existing recipes and practical meal ideas. We’ll distinguish tested instructions from stories and works in progress.</p><Action href="/whats-good-to-eat" secondary>What's good to eat?</Action></article>
        </div>
      </Section>
      <Section
        id="choose"
        eyebrow="Start with what brought you here"
        title="What would help today?"
      >
        <TopicCards />
      </Section>
      <Section tone eyebrow="Our commitment to the DMV" title="Your neighborhood deserves investment. Your life deserves room to grow.">
        <div style={{ maxWidth: "48rem" }}>
          <p>AskDoGood is rooted in Prince George’s County and Washington, DC, with a commitment to reaching underserved neighbors, including Wards 7 and 8. These communities hold talent, creativity, families, and futures worth investing in. Hardship is something people face; it is not the whole story of who they are.</p>
          <p>My stance is clear: I stand with people seeking dignity, stability, care, and a fair chance to build a better life. I oppose policies and decisions—including those of the current administration—that strip our communities of opportunity or make everyday survival harder. I want our response to include both a clear voice and something useful people can do.</p>
          <p>That means making free starting points easy to find, sharing resources people can check, connecting learning with opportunity, and being honest about what AskDoGood can offer. My faith calls me toward service. You do not need to share my beliefs to belong here.</p>
        </div>
        <div className="adg-actions"><Action href="/resources/start">Start with free support</Action><Action href="/work-with-askdogood" secondary>Bring this work to your community</Action></div>
      </Section>
      <Section eyebrow="The person. The practice. The purpose." title="See the work behind the words.">
        <p className="adg-lead">My story is a starting point for connection. Here are places you can see what I share, what I teach, and why I keep showing up.</p>
        <div className="adg-grid adg-grid-three">
          <article className="adg-card"><h3>A life rebuilt through learning</h3><p>I am a U.S. Army veteran, cloud technology professional, educator, and entrepreneur. My work brings service, practical knowledge, and lived experience into the same conversation.</p><Action href="/journey" secondary>Read my story</Action></article>
          <article className="adg-card adg-image-card"><img src="/images/personal/travel/rosee-speaking-paris-2023.webp" alt="RoSeé speaking in Paris in 2023" loading="lazy" /><div><h3>Taking my voice into the world</h3><p>This photograph and the story behind it document a chapter of learning, speaking, and moving beyond fear. Read what that experience meant to me.</p><Action href="/blog/overcoming-fear-and-thriving-my-journey-to-paris-to-speak-on-thyroid-metabolism" secondary>See the Paris chapter</Action></div></article>
          <article className="adg-card"><h3>Turning knowledge into opportunity</h3><p>Through The Dope Cloud TeacHer, I help make cloud, AI, and digital skills approachable. Explore the learning options and how this work connects with your next chapter.</p><Action href="https://thedopecloudteacher.org/classes/" secondary>Explore DCT learning</Action></article>
        </div>
        <p className="adg-small">These are examples of my experience and work. Your path, timing, and outcomes will be your own.</p>
      </Section>
      <Section id="real-talk" tone eyebrow="Pull up a chair" title="The story has layers. So do we.">
        <div className="adg-grid adg-grid-three">
          <article className="adg-card adg-image-card">
            <img src="/images/personal/travel/rosee-speaking-paris-2023.webp" alt="RoSeé speaking in Paris" loading="lazy" />
            <div><h3>How did a woman afraid to fly end up speaking in Paris?</h3><p>Fear had an opinion. Life had other plans. Come read the chapter behind the photograph.</p><Action href="/blog/overcoming-fear-and-thriving-my-journey-to-paris-to-speak-on-thyroid-metabolism" secondary>Read the Paris story</Action></div>
          </article>
          <article className="adg-card"><p className="adg-eyebrow">Let’s talk about it</p><h3>Is it peace—or are you just tired of explaining yourself?</h3><p>Boundaries, connection, and the conversations we rehearse in the car. A little relationship tea, with room for honesty and a useful next step.</p><Action href="/blog/how-to-build-a-weekly-relationship-check-in-ritual" secondary>Start the conversation</Action></article>
          <article className="adg-card"><p className="adg-eyebrow">Wear what you believe</p><h3>Good on you. Good in the world.</h3><p>A cream tee. A black hoodie. A message you can take into your everyday life. Meet the original AskDoGood collection.</p><Action href="/merch">Find your piece</Action></article>
        </div>
        <div className="adg-actions"><Action href="#prayer" secondary>Take a prayer pause</Action><Action href="/blog" secondary>Browse the reading room</Action></div>
      </Section>
      <Section id="in-community" tone eyebrow="Good in motion" title="Meet us in the community.">
        <CommunityEvents />
        <div className="adg-actions"><Action href="/community" secondary>Events & community connections</Action><Action href="/whats-good-to-eat">What’s good to eat?</Action></div>
      </Section>
      <Section>
        <CommunityVoice />
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
              life. God’s grace and mercy gave me another chance. Paying it forward is part of how I live now. This is where useful knowledge meets an honest conversation.
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
            src="/images/personal/rosee-at-the-table.webp"
            alt="RoSeé smiling at a table in a green sweater"
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
      <Section tone eyebrow="Scripture for the everyday" title="Faith that meets you here—and moves you forward.">
        <div className="adg-grid adg-grid-three">
          <article className="adg-card"><p className="adg-eyebrow">James 1:5 · Wisdom</p><h3>Bring the question to God.</h3><p>James invites those who lack wisdom to ask God. What decision needs a quiet moment and an honest prayer today?</p><Action href="https://www.biblegateway.com/passage/?search=James+1%3A5&version=KJV" secondary>Read the passage</Action></article>
          <article className="adg-card"><p className="adg-eyebrow">Micah 6:8 · Justice, mercy, humility</p><h3>Let your faith show up in your choices.</h3><p>Notice one person you can serve, one place you can practice mercy, and one conversation you can enter with humility.</p><Action href="https://www.biblegateway.com/passage/?search=Micah+6%3A8&version=KJV" secondary>Read the passage</Action></article>
          <article className="adg-card"><p className="adg-eyebrow">Revelation · A conversation</p><h3>Does Revelation speak to our time?</h3><p>Explore the parallels people notice, the passages behind them, and the hope that belongs in the conversation.</p><Action href="/blog/does-revelation-speak-to-our-time" secondary>Read & reflect</Action></article>
        </div>
        <p className="adg-small">Reflections above paraphrase the themes. Follow each link to read the Scripture in context.</p>
      </Section>
      <Section id="prayer" tone eyebrow="Faith, with room to breathe" title="A prayer for the next good step.">
        <div className="adg-split">
          <div className="adg-card"><p className="adg-lead">God, help me quiet the noise long enough to hear what matters. Give me wisdom for the next decision, courage to release what drains me, and patience for what is still growing. Help me care for myself and show up with love for my community. One honest step at a time. Amen.</p></div>
          <div><h3>Pause. Pray. Put one thing into practice.</h3><p>Take one slow breath. Name what is weighing on you. Choose one kind, practical action for today. This space is faith-rooted, and you are welcome wherever you are in your journey.</p><Action href="/blog/prayer-for-guidance-and-support-in-overcoming-vices-and-bad-habits" secondary>Read the prayer & reflection</Action><p className="adg-small">You can reflect privately; you do not need to submit anything.</p></div>
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
        <div className="adg-card" style={{ marginTop: "1.5rem" }}>
          <a href="https://thedopecloudteacher.org/classes/" className="adg-actions"><img src="/images/branding/the-dope-cloud-teacher-logo.png" alt="The Dope Cloud Teacher official logo" width="100" height="100" style={{ objectFit: "contain" }} /><span><strong>Grow your skills. Bring them back to your community.</strong><br />Explore cloud and AI classes, certification pathways, and instructor opportunities with our sister brand.</span></a>
        </div>
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
