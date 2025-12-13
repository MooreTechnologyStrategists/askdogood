import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, Shield, Users, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "No filters, no pretense — real talk about real experiences.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We heal together. Our stories matter, and so do our voices.",
    },
    {
      icon: Shield,
      title: "Advocacy",
      description: "Fighting for better care, better outcomes, and better treatment for all of us.",
    },
    {
      icon: Lightbulb,
      title: "Empowerment",
      description: "Knowledge is power. I share what I’ve learned so you can advocate for yourself.",
    },
  ];

  const heroImg = "/assets/img/brand/rosee-about.webp";
  const fallbackHeroImg = "/assets/img/brand/rosee-about.jpg";

  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-background/60 backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />
                Grounded power. Quiet confidence. Real healing.
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
                About RoSeé
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Thyroid cancer survivor. Balanced-living advocate. Black, disabled, veteran woman.
                Truth-teller — with receipts.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Connect with me <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/blog">Read the Blog</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-2xl" />
              <div className="relative rounded-[2rem] border bg-card shadow-sm overflow-hidden">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={heroImg}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = fallbackHeroImg;
                    }}
                    alt="RoSeé Murphy — Ask DoGood"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 border-t bg-background/70 backdrop-blur">
                  <div className="text-sm font-medium">RoSeé “DoGood” Murphy</div>
                  <div className="text-sm text-muted-foreground">
                    Founder, Ask DoGood • Advocate • Builder
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Micro statement row */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card className="bg-background/70 backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">What I do</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                I translate complicated health realities into clear, practical steps you can actually apply.
              </CardContent>
            </Card>

            <Card className="bg-background/70 backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Why I do it</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Because being dismissed for decades can break you — or build you. I chose built.
              </CardContent>
            </Card>

            <Card className="bg-background/70 backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">What you’ll get here</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Honest storytelling, advocacy energy, and a calm ecosystem that helps you stay consistent.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl space-y-10">
          <header className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
              My story
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This is the part where people expect a neat summary. That’s not my life — so this won’t be neat.
            </p>
          </header>

          <Card className="border bg-secondary/10">
            <CardContent className="p-8 space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I’m a Black, disabled veteran woman who spent over two decades navigating a healthcare system
                that kept “monitoring” my thyroid while I was slowly unraveling inside.
              </p>

              <p className="text-lg leading-relaxed">
                The symptoms weren’t subtle — they were life-altering. Brain fog. Hair loss. Anxiety that didn’t
                make sense. The constant feeling that something was wrong. And I kept hearing the same message:
                <span className="font-medium text-foreground"> “It’s in your head.”</span>
              </p>

              <div className="rounded-xl border bg-background p-5">
                <p className="text-base leading-relaxed">
                  The truth? It *was* in my head — because my hormones were wrecking my nervous system, and no one
                  wanted to dig deeper.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                I can’t count how many times I was nudged toward psychiatry instead of real thyroid testing.
                How often my pain got labeled “stress.” How often I left appointments feeling unheard.
                That’s not just personal — it’s a pattern.
              </p>

              <p className="text-lg leading-relaxed">
                When I finally got diagnosed with thyroid cancer, it was devastating… and validating.
                I wasn’t crazy. I wasn’t dramatic. My body was trying to warn me for years.
              </p>

              <p className="text-lg leading-relaxed">
                Now I use my voice to help others trust themselves, ask better questions, and demand better care —
                especially in Black and brown communities where symptoms get minimized and outcomes get worse.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-16 md:py-20 bg-secondary/20 border-y">
        <div className="container max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
            Why this work matters
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-background">
              <CardContent className="p-7 space-y-3">
                <div className="text-sm text-muted-foreground">The reality</div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Black women are more likely to have symptoms dismissed, concerns minimized, and pain ignored.
                  That costs lives — and it doesn’t have to.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardContent className="p-7 space-y-3">
                <div className="text-sm text-muted-foreground">The mission</div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  This platform exists to help you stay grounded, informed, and confident — so you can advocate
                  for yourself and move toward real healing with structure.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-background/70">
            <CardContent className="p-7 text-muted-foreground leading-relaxed">
              I’m not a doctor. I’m someone who lived through the confusion, the dismissal, and the “you’re fine”
              when I wasn’t fine. If my story helps one person recognize the signs sooner, ask better questions,
              or refuse to be gaslit — then this work is worth it.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
              What I stand for
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide how I show up — and how Ask DoGood is being built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEYOND HEALTH */}
      <section className="py-16 md:py-20 bg-secondary/20 border-y">
        <div className="container max-w-4xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
            Beyond health
          </h2>

          <Card className="bg-background">
            <CardContent className="p-8 space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                While health advocacy is at the core, I’m also about restoration, personal growth, and living
                honestly — even when it’s messy.
              </p>

              <p className="text-lg leading-relaxed">
                I talk about habits, vices, healing, relapse, rebuilding, and faith — not to judge, but to make
                space for truth. In communities where silence is normal, truth is revolutionary.
              </p>

              <p className="text-lg leading-relaxed">
                I’m a professional, a survivor, a work in progress — and a builder. If you’re trying to rebuild
                your health and your life at the same time… welcome home.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="/signup">
                Begin your journey <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="rounded-2xl border bg-background p-10 md:p-12 text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
              Let’s connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? Want to share your story? I’m here to listen — and I’ll keep it real with you.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
