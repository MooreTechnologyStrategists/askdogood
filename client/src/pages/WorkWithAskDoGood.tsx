import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, HandHeart, Sparkles, Users } from "lucide-react";

const partners = [
  "Senior centers and aging services",
  "Veterans organizations",
  "Faith communities and ministries",
  "Nonprofits and community centers",
  "Healthcare and public-health partners",
  "Corporate sponsors and employee programs",
] as const;

const offers = [
  {
    title: "Organizational workshops",
    description:
      "A practical, in-person or virtual session on food, movement, or stress that your members can actually use, built around your group and your time.",
    icon: <Users className="h-5 w-5 text-primary" />,
  },
  {
    title: "Reset-style programming",
    description:
      "A guided, multi-week experience like the 21-Day Plant-Based Reset, adapted for your community and delivered with clear, simple materials.",
    icon: <Sparkles className="h-5 w-5 text-primary" />,
  },
  {
    title: "Digital resources for your members",
    description:
      "Guides, meal ideas, and reference tools your staff can hand to the people you serve, without creating new content from scratch.",
    icon: <BookOpen className="h-5 w-5 text-primary" />,
  },
  {
    title: "Sponsored community experiences",
    description:
      "A branded wellness event or program your organization sponsors, so your name reaches people through something genuinely useful.",
    icon: <HandHeart className="h-5 w-5 text-primary" />,
  },
] as const;

export default function WorkWithAskDoGood() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,177,109,0.18),transparent_36%),linear-gradient(180deg,rgba(19,55,45,0.07),rgba(255,255,255,0.95))]" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-5 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.28em]">
              Partner With AskDoGood
            </Badge>
            <h1 className="text-5xl font-bold leading-tight md:text-6xl font-serif">
              Practical wellness programming for your community.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              AskDoGood brings workshops, guided resets, and everyday resources to the organizations
              serving the people who need them most.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="mailto:askdogood@gmail.com?subject=Partnership%20Inquiry%20for%20AskDoGood">
                <Button className="rounded-3xl px-8 py-6 text-base font-semibold">
                  Start a partnership conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Who We Work With</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Built for the organizations already doing the work</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <Card key={partner} className="rounded-2xl border border-border/70 bg-card shadow-sm">
                  <CardContent className="p-5">
                    <p className="text-base font-semibold leading-6">{partner}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/20 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">What We Bring</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Four ways to bring AskDoGood to your people</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {offers.map((offer) => (
                <Card key={offer.title} className="h-full rounded-[1.75rem] border border-border/70 bg-background/90 shadow-sm">
                  <CardHeader>
                    <div className="mb-3 inline-flex w-fit rounded-2xl bg-primary/10 p-3">{offer.icon}</div>
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                    <CardDescription className="text-sm leading-7 text-muted-foreground">
                      {offer.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 py-16 md:grid-cols-[0.7fr_1.3fr] md:items-center md:py-20">
        <img
          src="/images/personal/professional/zachary-nelson-community.jpg"
          alt="Community members gathered for a wellness workshop"
          className="aspect-square w-full max-w-sm rounded-[2rem] object-cover"
          loading="lazy"
          width="600"
          height="600"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why Partners Trust AskDoGood</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Grounded in lived experience, built for real communities</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            AskDoGood was built by Rosee from a personal health journey and years of working directly with families,
            churches, and community organizations. Every workshop and resource is designed to be practical, respectful,
            and easy for your team to put to use right away.
          </p>
          <Link href="/journey" className="mt-6 inline-flex items-center font-semibold text-primary">
            Read the founder story <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-primary/20 bg-card px-8 py-10 text-center shadow-lg md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Next Step</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Tell us about your community</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
              Send a note with your organization, who you serve, and what you have in mind. We will follow up to talk
              through timing, format, and fit.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="mailto:askdogood@gmail.com?subject=Partnership%20Inquiry%20for%20AskDoGood">
                <Button className="rounded-3xl px-8 py-6 text-base font-semibold">
                  Email AskDoGood
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
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
