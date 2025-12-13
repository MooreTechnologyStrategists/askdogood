import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Sparkles, Utensils, HeartPulse, BookOpen } from "lucide-react";

export default function Home() {
  const heroImg = "/assets/img/brand/rosee-hero.webp"; // swap to .jpg/.png if needed
  const fallbackHeroImg = "/assets/img/brand/rosee-hero.jpg"; // optional fallback if you keep both

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b">
        {/* subtle background wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Copy */}
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-background/60 backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />
                Calm structure. Real results. No fluff.
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                A calmer way to heal, rebuild, and move forward.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Ask DoGood is your wellness ecosystem — built for real life. Grounded guidance,
                practical tools, and a community vibe that helps you stay consistent without burning out.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/signup">
                    Begin your journey <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href="/login">Continue where you left off</Link>
                </Button>
              </div>

              <div className="flex items-start gap-2 rounded-xl border p-4 bg-background/70 backdrop-blur">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  Secure sign-in is handled by Azure Static Web Apps (Microsoft). Ask DoGood does not store passwords.
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-2xl" />
              <div className="relative rounded-[2rem] border bg-card shadow-sm overflow-hidden">
                {/* editorial frame */}
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={heroImg}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = fallbackHeroImg;
                    }}
                    alt="RoSeé Murphy — Ask DoGood"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>

                {/* caption bar */}
                <div className="p-5 border-t bg-background/70 backdrop-blur">
                  <div className="text-sm font-medium">RoSeé “DoGood” Murphy</div>
                  <div className="text-sm text-muted-foreground">
                    Wellness advocate • lived experience • practical healing
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick tiles */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-primary" />
                  Structure for healing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Small steps, weekly focus areas, and a dashboard that keeps you grounded — not overwhelmed.
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Food that fits real life
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Meal prep + a Clinical Recipe System that turns goals into practical, everyday meals.
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Stories & guidance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Real talk about wellness, mindset, and rebuilding — with clarity, compassion, and backbone.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURE: Clinical Recipe System */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                The Clinical Recipe System
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                AI-powered nutritional recipes tailored to real health conditions. Use it to turn labs,
                symptoms, and goals into meals that actually fit your lifestyle.
              </p>
              <div className="flex gap-3 flex-col sm:flex-row">
                <Button asChild className="gap-2">
                  <Link href="/clinical-recipes">
                    Open Recipe System <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/blog">Read the blog</Link>
                </Button>
              </div>
            </div>

            <Card className="border bg-secondary/20">
              <CardContent className="p-6 space-y-3">
                <div className="text-sm text-muted-foreground">How it fits:</div>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-2">
                  <li>Pick a weekly focus area (energy, stress, inflammation, sleep).</li>
                  <li>Translate it into meals using the Clinical Recipe System.</li>
                  <li>Track wins and reflections inside your Ask DoGood journey.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t bg-secondary/20">
        <div className="container">
          <div className="rounded-2xl border bg-background p-10 md:p-12 text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold">
              Start where you are. Build what you deserve.
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              If you’ve been carrying too much for too long — this is your reset. Calm structure, bold truth,
              and real tools you’ll actually use.
            </p>
            <div className="flex justify-center gap-3 flex-col sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/signup">
                  Begin your journey <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Meet RoSeé</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
