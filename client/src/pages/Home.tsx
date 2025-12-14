import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, HeartPulse, BookOpen, UtensilsCrossed } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container relative py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground">
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

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                A real-life wellness ecosystem focused on thyroid recovery, mindset, routines, and rebuilding
                your life with purpose — not perfection.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/dashboard">
                  <Button size="lg" className="gap-2">
                    Go to Dashboard <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/clinical-recipes">
                  <Button size="lg" variant="outline" className="gap-2">
                    Open Recipe App <UtensilsCrossed className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="text-sm text-muted-foreground">
                Built for the people who are tired of “just be consistent” with no system.
              </div>
            </div>

            {/* HERO IMAGE PANEL */}
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl border bg-secondary/20 overflow-hidden shadow-sm">
                {/* Replace the src below with your real homepage image path when VS Code behaves */}
                <img
                  src="/client/public/hero-home.webp/"
                  alt="Ask DoGood hero"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Tip: if this image 404s, the site still loads — you just see the panel background.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
              What you’ll find here
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
                <CardDescription>Mind, body, and soul support that actually applies.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Guided focus areas (thyroid, stress, habits) that help you build momentum without burnout.
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UtensilsCrossed className="h-5 w-5 text-primary" />
                  Clinical Recipe System
                </CardTitle>
                <CardDescription>Meals tailored to real conditions.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Turn symptoms, goals, and reality into meals you can actually stick to.
              </CardContent>
            </Card>

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

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/about">
              <Button variant="outline" className="gap-2">
                Meet RoSeé <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
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
    </div>
  );
}
