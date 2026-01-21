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
import ConvertKitSubscribe from "@/components/ConvertKitSubscribe";
import GardenSeasonsSection from "@/components/GardenSeasonsSection";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import AffiliateProductRecommendations from "@/components/AffiliateProductRecommendations";
import SpicyCarousel from "@/components/SpicyCarousel";
import ExternalNewsFeeds from "@/components/ExternalNewsFeeds";
import { gardenSeasons } from "@/content/gardenSeasons";

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

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* MY STORY / PERSONAL SECTION */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT: Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border shadow-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src="https://askdogoodassets.blob.core.windows.net/images/personal/rosee-story.webp"
                    alt="RoSeé's wellness journey"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl max-w-[200px]">
                  <p className="text-sm font-medium">7+ years of thyroid recovery, countless lessons learned</p>
                </div>
              </div>

              {/* RIGHT: Story */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">My Story</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
                  From Misdiagnosed to Mission-Driven
                </h2>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I spent years being told my thyroid symptoms were "just stress" or "in my head." 
                    The fatigue, brain fog, weight struggles—all dismissed. Until I couldn't ignore it anymore.
                  </p>
                  <p>
                    After finally getting diagnosed and having my thyroid removed, I realized the medical system 
                    wasn't designed to help people like us truly <em>heal</em>—just manage symptoms. So I became 
                    my own advocate, my own researcher, my own healer.
                  </p>
                  <p>
                    <strong>Seven years later,</strong> I've built a life I love despite chronic illness. 
                    I've learned that healing isn't linear, that structure creates freedom, and that 
                    you can thrive while being transparent about the struggle.
                  </p>
                  <p className="text-foreground font-medium">
                    AskDoGood is everything I wish someone had given me on day one. 
                    Real guidance. Real empathy. Real results.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link href="/about">
                    <Button size="lg" className="gap-2">
                      Read My Full Story <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/journey">
                    <Button size="lg" variant="outline" className="gap-2">
                      Start Your Journey
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARDEN SECTION - Seasons of Growth */}
      <section className="py-20 border-t">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Finding Peace in Growth</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Seasons of Growth: My Garden Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Gardening saved me. It taught me patience, faith, and the beauty of slow growth. 
                Each season mirrors life—planting, tending, harvesting, and letting go.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {gardenSeasons.map((season) => (
                <Link key={season.slug} href={`/garden/${season.slug}`}>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={season.heroImg}
                        alt={season.heroAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = '/assets/img/blog/_fallback/blog.webp';
                        }}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {season.title}
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>
                        {season.subtitle}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                "I try to find joy in everything. Even when it's draining or thankless, 
                the real reward is the wisdom you pick up along the way."
              </p>
              <Link href="/garden">
                <Button size="lg" variant="outline" className="gap-2">
                  Explore All Seasons <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* READ LABELS - Education Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20 border-y">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full mb-4">
                <BookOpen className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Real Talk</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                I Teach My Clients to <span className="text-primary">READ LABELS!</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Because labels tell you everything—and hide just as much. Let's break down what you need to know.
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* The Organic Trap */}
              <Card className="border-l-4 border-l-orange-500 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span>🏷️</span> The "Organic" Trap
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Here's what they don't tell you:</strong> If a product has <em>one</em> organic ingredient, 
                    they can slap "organic" on the label and charge you double. Read that again. ONE. INGREDIENT.
                  </p>
                  <p className="leading-relaxed">
                    So when you see "organic coconut water," check if it's actually coconut—or mostly water with a splash of coconut. 
                    The first ingredient listed is what the product <strong className="text-foreground">mainly consists of</strong>. 
                    If water's first, you're paying premium prices for diluted product.
                  </p>
                </CardContent>
              </Card>

              {/* Sodium Reality Check */}
              <Card className="border-l-4 border-l-pink-500 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span>🧂</span> Sodium: The Silent Saboteur
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">For my high blood pressure warriors:</strong> This is critical. 
                    Processed foods are LOADED with sodium. And that "small" bag of chips? Check the servings.
                  </p>
                  <div className="bg-pink-50 dark:bg-pink-950/30 p-6 rounded-lg space-y-3">
                    <p className="text-foreground font-semibold">Let's do the math:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li><strong>Bag says:</strong> 150mg sodium per serving</li>
                      <li><strong>Servings per bag:</strong> 6</li>
                      <li><strong>You eat the whole bag:</strong> 150mg × 6 = <span className="text-pink-700 dark:text-pink-400 font-bold">900mg sodium</span></li>
                      <li><strong>That was just a SNACK.</strong></li>
                    </ul>
                  </div>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Pro tip:</strong> If you're managing high blood pressure, aim for around <strong>1,200mg of sodium daily</strong>. 
                    Yes, that means more veggies, more fruits, less processed everything. And please—<em>stop adding salt after your food is already prepared</em>. 
                    The damage is done before it hits your plate.
                  </p>
                </CardContent>
              </Card>

              {/* Change Your Taste Buds */}
              <Card className="border-l-4 border-l-purple-500 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span>🌱</span> Change Your Taste Buds, Change Your Life
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Real talk:</strong> I get it. You don't like certain foods. They don't taste good to you. 
                    But here's the thing—<em>your taste buds can change</em>. And they will, if you give them a chance.
                  </p>
                  <p className="leading-relaxed">
                    The smarter choice isn't to turn your nose up at foods that can <strong className="text-foreground">actually benefit your health</strong>. 
                    The smarter choice is to <strong className="text-foreground">retrain your palate</strong>.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-3">Get out of that poverty mindset:</p>
                    <p className="leading-relaxed">
                      Even if you're living in poverty financially—and I see you, I've been there—<em>you don't have to eat like it</em>. 
                      Read those labels. Make the smartest decisions you can with what you have. Small changes compound.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What Else Labels Reveal */}
              <Card className="border-l-4 border-l-teal-500 bg-gradient-to-br from-teal-50/50 to-white dark:from-teal-950/20 dark:to-zinc-900">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span>🔍</span> What Else Labels Tell You
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 font-bold shrink-0">→</span>
                      <span><strong className="text-foreground">Ingredient order matters:</strong> First ingredient = highest quantity. If sugar's second, you're eating candy disguised as health food.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 font-bold shrink-0">→</span>
                      <span><strong className="text-foreground">Check serving sizes:</strong> Companies love to split products into tiny servings to make numbers look better.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 font-bold shrink-0">→</span>
                      <span><strong className="text-foreground">Extra ingredients = extra risk:</strong> If you can't pronounce it, your body probably doesn't want it.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 font-bold shrink-0">→</span>
                      <span><strong className="text-foreground">Hidden sugars:</strong> They go by 50+ names. Dextrose, maltose, corn syrup—it's all sugar, baby.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Want to Master Your Nutrition?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                My Thyroid Health Mastery Course teaches you exactly how to read labels, 
                choose the right foods for YOUR body, and build a sustainable wellness routine—no BS, just results.
              </p>
              <Link href="/shop">
                <Button size="lg" className="gap-2">
                  Learn More About the Course <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
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

      {/* SPICY CAROUSEL - Daily Dose of Realness */}
      <SpicyCarousel />

      {/* EXTERNAL NEWS FEEDS */}
      <ExternalNewsFeeds />

      {/* NEWSLETTER SIGNUP */}
      <section className="py-20 bg-secondary/20">
        <div className="container max-w-4xl">
          <ConvertKitSubscribe
            variant="card"
            title="Join the AskDoGood Newsletter"
            description="Get weekly insights on healing, thyroid health, mindset, and real-life strategies delivered straight to your inbox. No fluff, just real talk."
          />
        </div>
      </section>

      {/* AFFILIATE PRODUCT RECOMMENDATIONS */}
      <AffiliateProductRecommendations />
    </div>
  );
}
