import Hero from "@/components/site/Hero";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Heart, Lightbulb, Users } from "lucide-react";
import { Link } from "wouter";

// If you haven't created this yet, comment it out for now
import ClinicalRecipesEmbed from "@/components/clinical/ClinicalRecipesEmbed";

export default function Home() {
  const healingPaths = [
    {
      title: "Thyroid & Hormones",
      description:
        "Simple, grounded support for thyroid recovery, energy, inflammation, and day-to-day stability.",
      href: "/journey",
      image: "/assets/img/journey/hero-journey.webp",
    },
    {
      title: "Plant-Based Healing",
      description:
        "Real-life food shifts that support the body without turning your life into a punishment.",
      href: "/blog",
      image: "/assets/img/blog/default.webp",
    },
    {
      title: "Mind, Stress & Soul",
      description:
        "Nervous system care, boundaries, breath, faith, and the quiet rebuild behind the scenes.",
      href: "/journey",
      image: "/assets/img/about/hero-about.webp",
    },
  ];

  const latestPosts = [
    {
      title: "The Glow After the Storm",
      description:
        "What life looks like when you stop carrying blame that was never yours—and start living on purpose.",
      href: "/blog",
    },
    {
      title: "Healing Isn’t Pretty — But It’s Holy",
      description:
        "A real talk reflection on rebuilding with dignity, patience, and faith when life gets heavy.",
      href: "/blog",
    },
    {
      title: "Alcohol vs. Weed: How Are You Really Coping?",
      description:
        "Not judgment—just clarity. Let’s talk coping, habits, and what healing actually demands.",
      href: "/blog",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Single, primary hero */}
      <Hero
        title="Ask DoGood"
        subtitle="Healing, resilience, and building a better life on purpose."
        image="/assets/img/heroes/hero-home.webp"
        align="center"
      />

      {/* Supporting section (no longer a competing hero) */}
      <section className="border-b bg-background">
        <div className="container py-12 md:py-20 lg:py-24">
          <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] md:items-center">
            {/* Left: Supporting copy */}
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Ask DoGood · Mind · Body · Soul
              </p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                Healing isn’t a trend. It’s a lifestyle.
              </h2>

              <p className="max-w-xl text-base md:text-lg text-muted-foreground">
                Ask DoGood is your hub for real-world healing: practical
                wellness tools, thyroid + chronic illness support, and
                faith-filled encouragement for people who are tired of starting
                over from scratch.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/journey">
                  <Button
                    size="lg"
                    className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-6 text-base font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Start Your Healing Journey
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>

                <Link href="/blog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 py-6 text-base font-semibold border-muted-foreground/30 hover:border-primary hover:bg-primary/5"
                  >
                    Read the Latest Posts
                  </Button>
                </Link>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground">
                No fluff. No fake perfection. Just honest conversations and
                tools to help you feel better in your body and your life.
              </p>
            </div>

            {/* Right: Feature cards */}
            <div className="grid gap-4">
              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      Thyroid & Chronic Illness Support
                    </CardTitle>
                    <CardDescription>
                      Learn from real experience—20+ years of fighting,
                      surviving, and rebuilding.
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      Practical Holistic Health
                    </CardTitle>
                    <CardDescription>
                      Food, movement, stress, and mindset—broken down so real
                      people can actually use it.
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      Community & Conversation
                    </CardTitle>
                    <CardDescription>
                      Join the stories, questions, and small wins from people
                      healing while life keeps lifing.
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full justify-center text-xs"
                    >
                      Connect with Ask DoGood
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Paths / Featured Guides */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Featured Healing Paths</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Choose a starting point. Keep it simple. Build consistency.
              </p>
            </div>

            <Link href="/journey">
              <Button variant="outline" className="rounded-full">
                Explore the Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {healingPaths.map((p) => (
              <Card key={p.title} className="overflow-hidden shadow-sm">
                <div className="h-40 w-full bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={p.href}>
                    <Button className="w-full rounded-full">Start Here</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Recipes (embed + CTA) */}
      <section className="py-14 md:py-20">
        <ClinicalRecipesEmbed />
      </section>

      {/* Latest Posts Preview */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Latest Posts</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Real words for real life—healing, clarity, and the rebuild.
              </p>
            </div>

            <Link href="/blog">
              <Button variant="outline" className="rounded-full">
                See all posts <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Card key={post.title} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={post.href}>
                    <Button variant="outline" className="w-full rounded-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
