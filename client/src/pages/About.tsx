import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Users,
  Mail,
  Handshake,
  Target,
  BookOpen,
  ShoppingBag,
  UsersRound,
  Flame,
  Megaphone,
} from "lucide-react";
import { siteCopy, splitCopy } from "@/content/siteCopy";
import PromoBanner from '../components/PromoBanner';
import PersistentCTABanner from '../components/PersistentCTABanner';
import SEO from "@/components/SEO";
import { GA_EVENTS } from "@/config/analytics";
import { trackEvent } from "@/lib/analytics";

const ABOUT_HERO_IMAGE = "/images/personal/rosee-hero-1.jpg";
const ABOUT_STORY_IMAGE = "/images/personal/rosee-hero-2.jpg";

const FLAGSHIP_DROPS = [
  {
    title: "DO GOOD.",
    line: "Be the reason someone believes good people still exist.",
    focus: "AskDoGood core uniform",
    vibe: "Minimal, premium, timeless",
  },
  {
    title: "THE NEXT 250 STARTS WITH US.",
    line: "Choose love, learning, community, service, and innovation.",
    focus: "Summer to year-round civic pride",
    vibe: "DMV and Carolinas event-ready",
  },
  {
    title: "PROTECT THE GIRLS.",
    line: "Teach them. Believe them. Support them. Respect them. Protect them.",
    focus: "Advocacy-led hero design",
    vibe: "Movement energy, clear purpose",
  },
  {
    title: "BUILD. DON'T SCROLL.",
    line: "Cloud. AI. Security. Future.",
    focus: "The Dope Cloud Teacher flagship",
    vibe: "Tech-minimal, conference-ready",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About RoSeé Murphy | Ask DoGood"
        description="Meet RoSeé Murphy, founder of Ask DoGood. Thyroid advocate, wellness coach, and community builder sharing lived recovery, resilience, and real-life healing."
        keywords={['RoSeé Murphy', 'Ask DoGood founder', 'thyroid advocate', 'wellness coach', 'healing journey', 'Hashimoto\'s recovery']}
        url="/about"
      />
      <PersistentCTABanner />
      <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="container relative py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left: Copy */}
            <div className="space-y-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                About Ask DoGood
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {siteCopy.about.headline}
              </h1>

              <div className="max-w-xl space-y-4 text-lg md:text-xl text-muted-foreground">
                {splitCopy(siteCopy.about.content).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="text-sm font-medium text-primary/80">{siteCopy.cta}</p>

              {/* Value anchor / trust block */}
              <div className="rounded-2xl border bg-background/60 p-5">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  What I stand on
                </div>

                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  <li>
                    I don’t teach motivation — I teach stability. Because consistency only works when your body
                    and mind feel safe.
                  </li>
                  <li>
                    Discipline doesn’t have to be harsh, and healing doesn’t require perfection.
                  </li>
                  <li>
                    Faith is welcomed here as encouragement, not pressure — faith-forward, not faith-forced.
                  </li>
                  <li>
                    Everything I share is designed for real life — tired days included.
                  </li>
                </ul>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/free-meal-plan">
                  <Button size="lg" className="gap-2 shadow-md hover:shadow-lg transition-shadow">
                    Get the Free Meal Plan <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 shadow-sm hover:shadow-md transition-shadow"
                  >
                    Book a Reset Session <Handshake className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/blog">
                  <Button variant="secondary" className="gap-2">
                    Read DoGood Notes <Mail className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button variant="outline" className="gap-2">
                    Shop DoGood Bundles <ShoppingBag className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/coaching">
                  <Button variant="outline" className="gap-2">
                    Book Coaching <UsersRound className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Trust blocks */}
              <div className="grid gap-3 sm:grid-cols-3 pt-2">
                <div className="rounded-xl border bg-background/60 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    No fluff
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Tools you can actually use.</div>
                </div>

                <div className="rounded-xl border bg-background/60 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <HeartPulse className="h-4 w-4 text-primary" />
                    Health-aware
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Symptoms, routines, real support.</div>
                </div>

                <div className="rounded-xl border bg-background/60 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Users className="h-4 w-4 text-primary" />
                    Community-first
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Healing out loud — together.</div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full rounded-3xl border bg-secondary/20 overflow-hidden shadow-sm">
                <img
                  src={ABOUT_HERO_IMAGE}
                  alt="Ask DoGood — real healing and structure"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "70% 35%" }}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "https://askdogoodassets.blob.core.windows.net/images/about-hero.webp";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-background/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.15),transparent_55%)]" />
              </div>

              <div className="mt-4 text-center text-xs text-muted-foreground">
                Stability first. Structure next. Consistency after.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/5] w-full rounded-3xl border overflow-hidden shadow-sm bg-secondary/20">
                <img
                  src={ABOUT_STORY_IMAGE}
                  alt="Ask DoGood founder"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 15%" }}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = "https://askdogoodassets.blob.core.windows.net/images/about-story.webp";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
                Why I created Ask DoGood
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                I’m not here to sell you motivation — I’m here to give you a system.
                A way to rebuild when your body feels unpredictable, your mind feels heavy,
                and life is still demanding receipts.
              </p>

              {/* Mission block */}
              <div className="rounded-2xl border bg-secondary/10 p-5">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Target className="h-4 w-4 text-primary" />
                  The mission
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Make healing practical. Make discipline compassionate. And make “starting over”
                  feel like a strategy — not a shame sentence.
                </p>
              </div>

              {/* What they get here */}
              <div className="grid gap-4">
                <Link href="/resources/start">
                <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
                  <CardContent className="p-5 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Healing</span> — stabilization, inflammation awareness,
                    rest, and realistic nutrition (the kind that works on tired days).
                  </CardContent>
                </Card>
                </Link>

                <Link href="/resources/library">
                <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
                  <CardContent className="p-5 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Structure</span> — routines, accountability,
                    and “doable” plans that don’t collapse when life gets loud.
                  </CardContent>
                </Card>
                </Link>

                <Link href="/work-with-askdogood">
                <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
                  <CardContent className="p-5 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Real-life growth</span> — rebuilding confidence,
                    identity, and momentum without shame.
                  </CardContent>
                </Card>
                </Link>

                <Link href="/journey">
                <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
                  <CardContent className="p-5 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Faith-friendly support</span> — encouragement you can use,
                    without pressure or judgment. Come as you are.
                  </CardContent>
                </Card>
                </Link>

                <Link href="/resources">
                <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer border-primary/20">
                  <CardContent className="p-5 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Vice cessation</span> — practical steps and accountability
                    frameworks for quitting smoking, alcohol, sugar dependency, and other destructive habits for good.
                  </CardContent>
                </Card>
                </Link>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/free-meal-plan">
                  <Button className="gap-2 shadow-md hover:shadow-lg transition-shadow">
                    Start with the Free Reset <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" className="gap-2 shadow-sm hover:shadow-md transition-shadow">
                    Read the Blog <BookOpen className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button variant="secondary" className="gap-2">
                    Join DoGood Circle <UsersRound className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/coaching">
                  <Button variant="outline" className="gap-2">
                    Book a Reset Session <Handshake className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <p className="text-xs text-muted-foreground">
                If you’re overwhelmed, start small. Consistency beats intensity — and yes, I’ll remind you again next week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP MERCH SECTION */}
      <section className="py-14 md:py-20 border-y bg-gradient-to-br from-secondary/20 via-background to-primary/10">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium">
              <Flame className="h-4 w-4 text-primary" />
              Summer Flagship Drops
            </div>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
              Merch with a mission, not random inventory
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              These are the campaign-ready concepts selected to drive first sales fast across the DMV and the Carolinas,
              while building long-term brand equity for AskDoGood and The Dope Cloud Teacher.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FLAGSHIP_DROPS.map((drop) => (
              <Card key={drop.title} className="border-primary/20 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold tracking-tight">{drop.title}</h3>
                  <p className="text-sm text-muted-foreground">{drop.line}</p>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Focus:</span> {drop.focus}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Vibe:</span> {drop.vibe}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border bg-background/80 p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Megaphone className="h-4 w-4 text-primary" />
                  7-Day Sales Sprint
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Launch one AskDoGood hero tee and one DCT hero tee first. Keep messaging tight, publish 10 short videos,
                  and route every click to one checkout path.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/merch">
                  <Button
                    className="gap-2"
                    onClick={() =>
                      trackEvent(GA_EVENTS.MERCH_CTA_CLICK, {
                        cta_location: "about_flagship_section",
                        cta_type: "shop_merch",
                      })
                    }
                  >
                    Shop Merch <ShoppingBag className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() =>
                      trackEvent(GA_EVENTS.MERCH_CTA_CLICK, {
                        cta_location: "about_flagship_section",
                        cta_type: "launch_planning",
                      })
                    }
                  >
                    Start Launch Planning <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-16">
        <div className="container">
          <div className="rounded-3xl border bg-secondary/20 p-8 md:p-10 text-center shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
              Ready to rebuild with a plan?
            </h3>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Start with the free reset, grab the structure, and let’s turn “I’m trying” into “I’m consistent.”
              Faith-friendly. Practical. Real-life tested.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/free-meal-plan">
                <Button size="lg" className="gap-2 shadow-md hover:shadow-lg transition-shadow">
                  Get the Free Reset <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/coaching">
                <Button size="lg" variant="outline" className="gap-2 shadow-sm hover:shadow-md transition-shadow">
                  Book a Reset Session <Handshake className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  Join DoGood Circle <UsersRound className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              No spam. No shame. Just practical wins and steady progress.
            </div>
          </div>
        </div>
      </section>
      <PromoBanner />
    </main>
      </>
  );
}



