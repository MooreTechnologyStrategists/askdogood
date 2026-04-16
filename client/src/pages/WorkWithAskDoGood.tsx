import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BriefcaseBusiness,
  HeartPulse,
  Landmark,
  Sparkles,
  TrendingUp,
  Users,
  UtensilsCrossed,
} from "lucide-react";

const pillars = [
  {
    title: "Nutritional Intelligence",
    description:
      "Food-first education, symptom-aware meal planning, and practical guidance that helps people eat to heal instead of just eat to survive.",
    icon: <UtensilsCrossed className="h-5 w-5 text-primary" />,
  },
  {
    title: "Physical Activation",
    description:
      "Movement as medicine through walking, routines, recovery-minded exercise, and energy-building habits that feel sustainable in real life.",
    icon: <HeartPulse className="h-5 w-5 text-primary" />,
  },
  {
    title: "Mental And Spiritual Alignment",
    description:
      "Stress reduction, mindset support, faith-friendly grounding, and emotional reset tools for people living with pressure, grief, diagnosis, or burnout.",
    icon: <Sparkles className="h-5 w-5 text-primary" />,
  },
  {
    title: "Economic Stability",
    description:
      "The differentiator: AskDoGood connects healing with skill-building, career direction, and income pathways through education and technology.",
    icon: <TrendingUp className="h-5 w-5 text-primary" />,
  },
  {
    title: "Environmental And Community Reset",
    description:
      "Home routines, family systems, neighborhood support, and community-centered structures that make healthier choices easier to keep.",
    icon: <Users className="h-5 w-5 text-primary" />,
  },
] as const;

const audiences = [
  "Community centers and nonprofit programs",
  "Churches and faith-based wellness ministries",
  "Schools, youth, and family support initiatives",
  "Corporate wellness and employee wellbeing programs",
  "Government and public-health outreach teams",
  "Clinics that need stronger patient follow-through between visits",
] as const;

const offers = [
  {
    title: "Personal Wellness Reset Coaching",
    description:
      "If you are tired of feeling off, low energy, or stuck in unhealthy habits, this is where the reset starts. We focus on nutrition, simple movement, stress reduction, and habits that actually stick.",
  },
  {
    title: "Custom Meal Prep & Nutrition Support",
    description:
      "Food is one of the fastest ways to change how you feel. This support covers smoothies and juices, vegan, vegetarian, keto, or flexible plans, plus simple affordable meals that meet people where they are.",
  },
  {
    title: "Community Health & Lifestyle Workshops",
    description:
      "These sessions are built for real people dealing with real life, with topics including reducing inflammation naturally, building energy through food and movement, managing stress, and introducing tech opportunities for income growth.",
  },
  {
    title: "Health + Income Reset",
    description:
      "Healing is important, but so is stability. This offer connects better health habits, career pathways in tech, and opportunities to increase income so the work supports both wellness and financial footing.",
  },
] as const;

const partnershipTiers = [
  {
    title: "Medical And Clinical Alignment",
    description:
      "For clinics and lifestyle medicine providers that want patients to leave with better daily systems, not just instructions.",
    angle: "You treat the patient. AskDoGood helps translate guidance into everyday routines people can actually keep.",
    icon: <HeartPulse className="h-5 w-5 text-primary" />,
  },
  {
    title: "Government And Grants",
    description:
      "For public-health and prevention teams focused on education, disease burden, access, and lower long-term costs.",
    angle: "AskDoGood supports prevention, self-management, and culturally relevant follow-through at the community level.",
    icon: <Landmark className="h-5 w-5 text-primary" />,
  },
  {
    title: "Community And Education",
    description:
      "For workshops, schools, churches, and neighborhood organizations that need programming people will actually use.",
    angle: "AskDoGood modernizes wellness education with real-life language, clear tools, and a stronger trust bridge.",
    icon: <Users className="h-5 w-5 text-primary" />,
  },
  {
    title: "Lifestyle And Wellness Brands",
    description:
      "For retreats, spas, and aligned brands that want grounded, practical, community-facing extensions of wellness work.",
    angle: "AskDoGood brings everyday implementation to brands that already understand transformation and aspiration.",
    icon: <BriefcaseBusiness className="h-5 w-5 text-primary" />,
  },
] as const;

export default function WorkWithAskDoGood() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,177,109,0.18),transparent_36%),linear-gradient(180deg,rgba(19,55,45,0.07),rgba(255,255,255,0.95))]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <Badge className="mb-5 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.28em]">
              Work With AskDoGood
            </Badge>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl font-serif">
              Heal Better. Live Smarter. <span className="text-primary">Earn Stronger.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              AskDoGood is a holistic health and workforce empowerment platform that helps individuals
              and communities rebuild health, daily structure, and long-term stability through lifestyle
              education, practical tools, and technology-informed opportunity.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:askdogood@gmail.com?subject=Partnership%20Inquiry%20for%20AskDoGood">
                <Button className="rounded-3xl px-8 py-6 text-base font-semibold">
                  Book A Partnership Conversation
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="rounded-3xl px-8 py-6 text-base font-semibold">
                  Send An Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Who We Help</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Programs built for real people and real systems</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {audiences.map((audience) => (
                <Card key={audience} className="rounded-[1.75rem] border border-border/70 bg-card shadow-sm">
                  <CardContent className="p-6">
                    <p className="text-base font-semibold leading-7">{audience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">The Framework</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">The AskDoGood 5-Pillar System</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                This framework is built to help people recover from instability, not just consume more wellness content.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-5">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="h-full rounded-[1.75rem] border border-border/70 bg-background/90 shadow-sm">
                  <CardHeader>
                    <div className="mb-3 inline-flex w-fit rounded-2xl bg-primary/10 p-3">{pillar.icon}</div>
                    <CardTitle className="text-xl leading-tight">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-7 text-muted-foreground">
                      {pillar.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">What We Offer</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Programming that moves from information to implementation</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                Clear, direct offers built around practical change instead of abstract wellness language.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {offers.map((offer) => (
                  <Card key={offer.title} className="rounded-[1.75rem] border border-border/70 bg-card shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl">{offer.title}</CardTitle>
                      <CardDescription className="text-sm leading-7 text-muted-foreground">
                        {offer.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/8 via-background to-secondary/10 shadow-lg">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Why AskDoGood</p>
                <CardTitle className="text-3xl font-bold">The bridge most programs are missing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-sm leading-7 text-muted-foreground">
                <p>
                  Clinics give advice. Content brands give inspiration. AskDoGood translates healing into daily practice,
                  with lived experience, cultural fluency, and service offers people can actually understand and use.
                </p>
                <p>
                  The platform is especially strong where health, burnout, food access, community trust, and economic pressure overlap.
                </p>
                <p>
                  That makes AskDoGood valuable for partners who want better follow-through, clearer messaging, and stronger audience trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-background to-primary/5 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Partnership Tiers</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">How AskDoGood fits into the ecosystem</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {partnershipTiers.map((tier) => (
                <Card key={tier.title} className="rounded-[1.75rem] border border-border/70 bg-background/90 shadow-sm">
                  <CardHeader>
                    <div className="mb-3 inline-flex w-fit rounded-2xl bg-primary/10 p-3">{tier.icon}</div>
                    <CardTitle className="text-2xl">{tier.title}</CardTitle>
                    <CardDescription className="text-sm leading-7 text-muted-foreground">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium leading-7 text-foreground">{tier.angle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary/20 bg-card px-8 py-10 text-center shadow-lg md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Start Here</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Let’s build something people can actually use</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              AskDoGood is available for workshops, community partnerships, wellness programming, and strategic collaborations that connect healing with everyday stability.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="mailto:askdogood@gmail.com?subject=Work%20With%20AskDoGood">
                <Button className="rounded-3xl px-8 py-6 text-base font-semibold">
                  Email AskDoGood
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/shop">
                <Button variant="outline" className="rounded-3xl px-8 py-6 text-base font-semibold">
                  Explore Programs And Tools
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              AskDoGood provides education, tools, and wellness programming. It does not replace individualized medical care.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
