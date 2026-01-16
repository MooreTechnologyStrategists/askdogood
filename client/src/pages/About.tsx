import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, ShieldCheck, HeartPulse, Users } from "lucide-react";

const ABOUT_HERO_IMAGE =
  "https://askdogoodassets.blob.core.windows.net/images/about-hero.webp"; // city reflection
const ABOUT_STORY_IMAGE =
  "https://askdogoodassets.blob.core.windows.net/images/about-story.webp"; // looking up

export default function About() {
  return (
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
                  I help people rebuild
                   <span className="block text-primary">
                    when life feels unstable.
                  </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Ask DoGood is where health, structure, and faith meet real life.
                  No hype. No guilt. Just systems that help you feel steady again.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/journey">
                  <Button
                    size="lg"
                    className="gap-2 shadow-md hover:shadow-lg transition-shadow"
                  >
                    Start with My Journey <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 shadow-sm hover:shadow-md transition-shadow"
                  >
                    Work With Me <ArrowRight className="h-4 w-4" />
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
                  <div className="text-xs text-muted-foreground mt-1">
                    Tools you can actually use.
                  </div>
                </div>

                <div className="rounded-xl border bg-background/60 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <HeartPulse className="h-4 w-4 text-primary" />
                    Health-aware
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Symptoms, routines, real support.
                  </div>
                </div>

                <div className="rounded-xl border bg-background/60 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Users className="h-4 w-4 text-primary" />
                    Community-first
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Healing out loud — together.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full rounded-3xl border bg-secondary/20 overflow-hidden shadow-sm">
                <img
                  src={ABOUT_HERO_IMAGE}
                  alt="RoSeé Murphy — Ask DoGood"
                  className="h-full w-full object-cover"
                  // face centering control (adjust if needed)
                  style={{ objectPosition: "70% 35%" }}
                  loading="lazy"
                />

                {/* Creative overlay (keeps it elegant, hides minor image artifacts) */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-background/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.15),transparent_55%)]" />
              </div>

              <div className="mt-4 text-center text-xs text-muted-foreground">
                Real healing. Real story. Real strategy.
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
                  alt="RoSeé Murphy"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 15%" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-transparent" />
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Why I created Ask DoGood
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                I’m not here to sell you motivation — I’m here to give you a system.
                A way to rebuild when your body feels unpredictable, your mind feels heavy, and life is still
                demanding receipts.
              </p>

              <div className="grid gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Healing</span> — we focus on stabilization,
                    inflammation awareness, rest, and realistic nutrition.
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Structure</span> — routines, accountability,
                    and “doable” plans that don’t collapse on hard days.
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Real-life growth</span> — rebuilding confidence,
                    identity, and momentum without shame.
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/blog">
                  <Button
                    variant="outline"
                    className="gap-2 shadow-sm hover:shadow-md transition-shadow"
                  >
                    Read the Blog <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="gap-2 shadow-md hover:shadow-lg transition-shadow">
                    Go to Dashboard <ArrowRight className="h-4 w-4" />
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
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Ready to rebuild with a plan?
            </h3>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Start with the journey, grab the structure, and let’s turn “I’m trying” into “I’m consistent.”
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/journey">
                <Button size="lg" className="gap-2 shadow-md hover:shadow-lg transition-shadow">
                  Start Here <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 shadow-sm hover:shadow-md transition-shadow"
                >
                  Contact <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
