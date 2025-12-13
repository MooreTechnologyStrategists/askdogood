import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Sparkles, HeartPulse, UtensilsCrossed, BookOpen, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HERO_IMG = "/assets/img/heroes/hero-home.webp";
const HERO_IMG_FALLBACK = "/assets/img/rosee-home.jpg"; // optional fallback if you have it

const CLINICAL_RECIPE_APP_URL =
  (import.meta.env.VITE_CLINICAL_RECIPE_APP_URL as string | undefined) ??
  "https://clinical-food-rx.preview.emergentagent.com/";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative py-14 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-background/60 backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />
                Calm structure for real healing.
              </div>

              <h1
                className="text-4xl md:text-6xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Ask DoGood
                <span className="block text-muted-foreground font-sans text-xl md:text-2xl mt-3">
                  Healing, clarity, and community — built with truth.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Welcome. I’m RoSeé — thyroid cancer survivor, wellness advocate, and builder.
                This is a grounded space for better habits, better questions, and better outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/journey">
                    Start with my story <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href="/blog">Read the Blog</Link>
                </Button>
              </div>

              {/* Trust bullets */}
              <div className="grid gap-3 sm:grid-cols-3 pt-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 mt-0.5 text-primary" />
                  Real-life lessons, not fluff.
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <HeartPulse className="h-4 w-4 mt-0.5 text-primary" />
                  Body-first, nervous-system aware.
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mt-0.5 text-primary" />
                  Community energy, not judgment.
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-2xl" />
              <div className="relative rounded-[2rem] border bg-card shadow-sm overflow-hidden">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={HERO_IMG}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = HERO_IMG_FALLBACK;
                    }}
                    alt="RoSeé Murphy — Ask DoGood"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 border-t bg-background/70 backdrop-blur">
                  <div className="text-sm font-medium">RoSeé “DoGood” Murphy</div>
                  <div className="text-sm text-muted-foreground">
                    Survivor • Advocate • Builder • DMV vibes with global vision
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick feature row */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Card className="bg-background/70 backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Healing paths</CardTitle>
                <CardDescription>Pick your focus. Keep it simple.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Thyroid & hormones, plant-based healing, mind/stress/soul — built to meet you where you are.
              </CardContent>
            </Card>

            <Card className="bg-background/70 backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Practical tools</CardTitle>
                <CardDescription>Structure beats motivation.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Guides, checklists, and habit systems that help you stay consistent without burning out.
              </CardContent>
            </Card>

            <Card className="bg-background/70 backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Real conversations</CardTitle>
                <CardDescription>Truth is part of the treatment.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
