import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Sparkles,
  HeartPulse,
  BookOpen,
  UtensilsCrossed,
  ShieldCheck,
  Users,
} from "lucide-react";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ask-dogood.kit.com/7455966d1b/index.js';
    script.async = true;
    script.setAttribute('data-uid', '8918501');
    
    const container = document.getElementById('thyroid-toolkit-signup');
    if (container) {
      container.appendChild(script);
    }
    
    return () => {
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="container relative py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT: COPY */}
            <div className="space-y-6 text-center lg:text-left">
              {/* Brand Logo */}
              <div className="flex justify-center lg:justify-start mb-4">
                <img
                  src="https://askdogoodassets.blob.core.windows.net/images/brand/logo-flower-circle.webp"
                  alt="Ask DoGood"
                  className="h-20 w-20 object-contain"
                  loading="eager"
                />
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground mx-auto lg:mx-0">
                <Sparkles className="h-4 w-4 text-primary" />
                Healing. Structure. Real-life growth.
              </div>

              <h1
                className="text-4xl md:text-6xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Ask DoGood
                <span className="block text-primary">Your healing, with a plan.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                A real-life wellness ecosystem focused on thyroid recovery, mindset, routines,
                and rebuilding your life with purpose — not perfection.
              </p>

              {/* HERO BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/journey">
                  <Button
                    className="flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow border border-primary/20 px-6 py-3 text-lg"
                  >
                    Start Here <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/clinical-recipes">
                  <Button
                    className="flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow bg-background/60 backdrop-blur border border-border/70 px-6 py-3 text-lg"
                  >
                    Clinical Food RX <UtensilsCrossed className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="text-sm text-muted-foreground">
                Built for the people who are tired of "just be consistent" with no system.
              </div>

              {/* TRUST / POSITIONING */}
              <div className="grid gap-3 sm:grid-cols-3 pt-2">
                <Link href="/no-fluff">
                  <div className="rounded-xl border bg-background/60 px-4 py-3 hover:bg-background/80 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-2 text-sm font-medium justify-center lg:justify-start">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      No fluff
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Real talk + real tools.
                    </div>
                  </div>
                </Link>

                <Link href="/clinical-recipes">
                  <div className="rounded-xl border bg-background/60 px-4 py-3 hover:bg-background/80 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-2 text-sm font-medium justify-center lg:justify-start">
                      <HeartPulse className="h-4 w-4 text-primary" />
                      Health-aware
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Symptoms, meds, goals.
                    </div>
                  </div>
                </Link>

                <Link href="/blog">
                  <div className="rounded-xl border bg-background/60 px-4 py-3 hover:bg-background/80 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-2 text-sm font-medium justify-center lg:justify-start">
                      <Users className="h-4 w-4 text-primary" />
                      Community-first
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Healing out loud.
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* RIGHT: IMAGE + LABELS */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full rounded-3xl border bg-secondary/20 overflow-hidden shadow-sm">
                <img
                  src="https://askdogoodassets.blob.core.windows.net/images/hero-home.webp"
                  alt="Ask DoGood hero"
                  className="h-full w-full object-cover"
                  style={{
                    objectPosition: "50% 35%", // tweak 30–45% to center face vertically
                  }}
                  loading="eager"
                />

                {/* Creative overlay: cinematic + subtle brand tint + vignette */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-primary/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_80%)] bg-black/25" />

                {/* Optional: subtle highlight flare */}
                <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />

                {/* Frame ring */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-border/40 rounded-3xl" />
              </div>

              {/* Centered labels under image */}
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground text-center">
                <span className="inline-flex items-center justify-center gap-1 rounded-full border bg-background/70 px-3 py-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  Structure you can follow
                </span>
                <span className="inline-flex items-center justify-center gap-1 rounded-full border bg-background/70 px-3 py-1">
                  <HeartPulse className="h-3.5 w-3.5 text-primary" />
                  Healing that respects reality
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THYROID RESET TOOLKIT CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container max-w-4xl">
          <div id="thyroid-toolkit-signup"></div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What you'll find here
            </h2>
            <p className="mt-2 text-muted-foreground text-lg">
              Practical tools + real talk — designed to help you stabilize, rebuild, and level up.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-primary" />
                  Healing Paths
                </CardTitle>
                <CardDescription>
                  Mind, body, and soul support that actually applies.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Guided focus areas (thyroid, stress, habits) that help you build momentum without burnout.
              </CardContent>
            </Card>

            <Link href="/clinical-recipes">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UtensilsCrossed className="h-5 w-5 text-primary" />
                    Clinical Food RX
                  </CardTitle>
                  <CardDescription>Meals tailored to real conditions.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Turn symptoms, goals, and reality into meals you can actually stick to.
                  <div className="mt-3 flex items-center gap-1 text-primary font-medium text-sm">
                    Try it now <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Challenges
                </CardTitle>
                <CardDescription>Small wins that compound.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Weekly challenges to create structure and track your progress without shame.
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Blog
                </CardTitle>
                <CardDescription>Truth, strategy, and encouragement.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                The honest conversations people avoid — delivered with compassion and receipts.
              </CardContent>
            </Card>
          </div>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/about">
              <Button className="gap-2 border border-border/70 bg-background/60">
                Meet RoSeé <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button className="gap-2 border border-border/70 bg-background/60">
                Read the Blog <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="gap-2">
                Contact <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ASKDOGOOD SHOW TEASER */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-[400px] md:h-auto">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(https://askdogoodassets.blob.core.windows.net/images/personal/askdogood-show-teaser.webp)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 w-fit">
                    <Sparkles className="h-4 w-4" />
                    Coming Soon
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-4">The AskDoGood Show</h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    Real conversations about health, healing, and thriving in Black & Brown communities.
                  </p>
                  
                  <div className="space-y-3 text-muted-foreground mb-8">
                    <p>
                      From thyroid health to mental wellness, from navigating healthcare to building resilience—this is where we talk about what matters.
                    </p>
                    <p className="font-medium text-foreground">
                      Podcast. Radio. Real talk. No filters.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="gap-2 px-6 py-3 text-lg">
                      Get Notified <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button className="gap-2 border border-border/70 bg-background/60 px-6 py-3 text-lg">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SIGNUP */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-4xl">
          <BeehiivSubscribe
            variant="card"
            title="Join the AskDoGood Newsletter"
            description="Get weekly insights on healing, thyroid health, mindset, and real-life strategies delivered straight to your inbox. No fluff, just real talk."
          />
        </div>
      </section>
    </div>
  );
}
