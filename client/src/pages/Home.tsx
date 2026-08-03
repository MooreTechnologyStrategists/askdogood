import { Link } from "wouter";
import { ArrowRight, BookOpen, HeartHandshake, Leaf, ShieldCheck, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import { GUMROAD_URLS } from "@/config/gumroad";

const founderDriveImage = "https://drive.google.com/uc?export=view&id=1yGzYr86_4TtbRey1cE3iorkfgf0iiAN9";
const founderImageFallbacks = ["/images/personal/rosee-hero-1.jpg", "/images/personal/rosee-hero-2.jpg"];

const founderGallery = [
  {
    src: founderDriveImage,
    alt: "Rosee founder portrait from Google Drive",
    caption: "Founder portrait",
  },
  {
    src: "/images/personal/rosee-hero-1.jpg",
    alt: "Rosee founder image one",
    caption: "In the garden",
  },
  {
    src: "/images/personal/rosee-hero-2.jpg",
    alt: "Rosee founder image two",
    caption: "Natural and confident",
  },
];

function handleFounderImageError(e: React.SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  const currentStep = Number(img.dataset.fallbackStep || "0");

  if (currentStep >= founderImageFallbacks.length) {
    img.onerror = null;
    return;
  }

  img.dataset.fallbackStep = String(currentStep + 1);
  img.src = founderImageFallbacks[currentStep];
}

const healingPillars = [
  {
    title: "Healing Foods",
    description: "Food choices that changed how I felt day to day.",
    href: "/blog",
    icon: UtensilsCrossed,
    topics: [
      "Why I Love Kale",
      "Salmon Changed My Relationship with Protein",
      "Are Eggs Really Bad?",
      "Why I Stopped Eating White Sugar",
    ],
  },
  {
    title: "Herbs & Minerals",
    description: "The herbs and nutrients I studied and tested over time.",
    href: "/herbs",
    icon: Leaf,
    topics: ["Goldenseal", "Ginger", "Turmeric", "Magnesium", "Zinc", "Vitamin D", "Sea Moss"],
  },
  {
    title: "Mind & Spirit",
    description: "Mental, emotional, and spiritual habits that support healing.",
    href: "/resources",
    icon: ShieldCheck,
    topics: [
      "Stress Makes People Sick",
      "Healing From Trauma",
      "Rest Is Medicine",
      "Walking With God Through Illness",
    ],
  },
  {
    title: "Relationships",
    description: "How boundaries and social circles shape long-term health.",
    href: "/relationship-keeper",
    icon: HeartHandshake,
    topics: [
      "The People Around You Affect Your Health",
      "Why Boundaries Matter",
      "Do Not Let Others Eat You Into Disease",
    ],
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <section className="container py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              A living journal of healing and learning
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
              I Did Not Become Healthy Overnight.
              <br />
              I Became Curious.
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-8 text-muted-foreground">
              <p>For over twenty years my body forced me to become a student.</p>
              <p>I was not trying to become a holistic health coach. I was trying to survive.</p>
              <p>
                One diagnosis became another. One medication became another. One symptom became another.
                Eventually I realized nobody would fight for my body harder than I would.
              </p>
              <p>
                So I researched, changed my food, changed my habits, changed my thinking, and kept what worked.
                Today I share what I learned so someone else does not spend twenty years searching alone.
              </p>
            </div>
            <p className="mt-6 text-xl font-semibold text-foreground">Welcome to AskDoGood.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/journey">
                <Button className="rounded-3xl px-6 py-6 text-base font-semibold shadow-lg">
                  Start My Healing Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="rounded-3xl px-6 py-6 text-base font-semibold">
                  Meet Rosee
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <img
              src={founderDriveImage}
              alt="Rosee in a natural setting with fresh ingredients"
              className="relative w-full rounded-[2.5rem] border border-border/70 object-cover shadow-2xl"
              loading="eager"
              onError={handleFounderImageError}
            />
          </div>
        </div>
      </section>

      <section className="container pb-8 md:pb-16">
        <div className="rounded-[2rem] border border-border/70 bg-card/80 p-6 md:p-8">
          <h2 className="text-3xl font-bold md:text-4xl">Founder Gallery</h2>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
            This front page now features your story visually. Add your next one or two photos and we can rotate them into this section and the hero.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {founderGallery.map((image) => (
              <figure key={image.alt} className="overflow-hidden rounded-3xl border border-border/60 bg-background shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-72 w-full object-cover"
                  loading="lazy"
                  onError={handleFounderImageError}
                />
                <figcaption className="px-4 py-3 text-sm font-medium text-muted-foreground">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-8 md:pb-16">
        <div className="rounded-[2rem] border border-primary/25 bg-gradient-to-br from-primary/10 to-accent/10 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Monetization Fast Lane</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Start free, get results, then go deeper</h2>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
            This path is built to finish: free entry, paid transformation, and ongoing support.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Card className="border-primary/20 bg-background/85">
              <CardHeader>
                <CardTitle className="text-xl">1. Free Start</CardTitle>
                <CardDescription>Get the Thyroid Checklist and join the newsletter.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={GUMROAD_URLS.thyroidChecklist} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full rounded-2xl">
                    Download Free Checklist
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background/85">
              <CardHeader>
                <CardTitle className="text-xl">2. Core Offer</CardTitle>
                <CardDescription>Move into the full Thyroid Health Mastery Course.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={GUMROAD_URLS.thyroidMastery} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-2xl">
                    Buy Thyroid Mastery
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background/85">
              <CardHeader>
                <CardTitle className="text-xl">3. Monthly Support</CardTitle>
                <CardDescription>Stay consistent inside the DoGood Wellness Circle.</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={GUMROAD_URLS.wellnessCircle} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-2xl bg-primary/90 hover:bg-primary">
                    Join Wellness Circle
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <BeehiivSubscribe
            variant="inline"
            className="mt-6 bg-background/85"
            source="home_monetization_lane"
            magnetType="thyroid-checklist"
            title="Get weekly healing notes from Rosee"
            description="Real food, real habits, and real progress updates from my lived journey."
            buttonText="Join Free"
          />
        </div>
      </section>

      <section className="container pb-8 md:pb-16">
        <Card className="border-primary/20 bg-card/90 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">Why Should You Listen To Me?</CardTitle>
            <CardDescription className="text-base md:text-lg">Not because I know everything. Because I refused to stop learning.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              My journey did not begin with herbs. It began with fear: years of smoking, high blood pressure at
              thirty-four, sudden weight gain after quitting cigarettes, low energy, and poor breathing.
            </p>
            <p>
              A doctor once told me, "For every pound you lose, your blood pressure will come down." That sentence
              changed everything.
            </p>
            <p>
              I completed P90X. Lost forty pounds. Stopped drinking. Cut sugar and excess salt. Became vegetarian,
              then explored plant-based eating. I studied herbs, nutrition, inflammation, gut health, minerals, and
              my own body.
            </p>
            <p className="font-medium text-foreground">Healing is not just about medicine. Healing is about paying attention.</p>
          </CardContent>
        </Card>
      </section>

      <section className="container pb-8 md:pb-16">
        <div className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">The Lesson</h2>
          <div className="mt-5 space-y-4 text-lg leading-8 text-muted-foreground">
            <p>
              People laughed when I changed. Family joked about my food. Friends questioned why I stopped eating what
              everyone else ate.
            </p>
            <p>
              Years later, many of those same people started eating healthier themselves. Sometimes leadership looks
              lonely before it looks inspiring.
            </p>
          </div>
          <blockquote className="mt-8 rounded-2xl border border-primary/30 bg-background/70 p-6 text-xl font-semibold leading-8 text-foreground">
            "Some people will take you to hell with them, unintentionally."
          </blockquote>
          <p className="mt-6 text-lg font-medium text-foreground">Do not follow the crowd. Lead yourself first.</p>
        </div>
      </section>

      <section className="container pb-8 md:pb-16">
        <h2 className="text-3xl font-bold md:text-4xl">My Healing Philosophy</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">Not medical advice. Not magic. Not perfection. Just principles I learned after decades of listening to my body.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card className="premium-hover">
            <CardHeader>
              <CardTitle>Eat Pure</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">Choose foods that nourish instead of simply filling your stomach.</CardContent>
          </Card>
          <Card className="premium-hover">
            <CardHeader>
              <CardTitle>Seek Truth</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">Research everything. Question everything. Never stop learning.</CardContent>
          </Card>
          <Card className="premium-hover">
            <CardHeader>
              <CardTitle>Find Peace</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">Protect your mind as fiercely as you protect your body.</CardContent>
          </Card>
        </div>
      </section>

      <section className="container pb-8 md:pb-16">
        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">My Favorite Discovery</CardTitle>
            <CardDescription className="text-base md:text-lg">Healing can begin where we least expect it: the gut.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>People expect me to start with expensive supplements. I start with what changed my quality of life first.</p>
            <ul className="list-disc space-y-1 pl-6 text-foreground">
              <li>Probiotics</li>
              <li>Digestive Enzymes</li>
            </ul>
            <p>Those two reminded me that small, consistent shifts can produce major change over time.</p>
          </CardContent>
        </Card>
      </section>

      <section className="container pb-8 md:pb-16">
        <div className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">The AskDoGood Trinity</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">A simple framework for body, spirit, and whole-life healing</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-background p-5">
              <p className="text-sm text-muted-foreground">For body health</p>
              <p className="mt-1 text-xl font-semibold">Eat Pure.</p>
            </div>
            <div className="rounded-2xl border bg-background p-5">
              <p className="text-sm text-muted-foreground">For spiritual health</p>
              <p className="mt-1 text-xl font-semibold">Seek Truth.</p>
            </div>
            <div className="rounded-2xl border bg-background p-5">
              <p className="text-sm text-muted-foreground">For holistic health</p>
              <p className="mt-1 text-xl font-semibold">Find Peace.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-8 md:pb-16">
        <h2 className="text-3xl font-bold md:text-4xl">Explore the New AskDoGood Pillars</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {healingPillars.map((pillar) => (
            <Card key={pillar.title} className="premium-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <pillar.icon className="h-5 w-5 text-primary" />
                  {pillar.title}
                </CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                  {pillar.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link href={pillar.href}>
                    <Button variant="outline" className="rounded-2xl">
                      Open {pillar.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <h2 className="text-3xl font-bold md:text-4xl">What I Am Eating Right Now</h2>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Real meals, practical prep, no perfection pressure. These are examples from my current rhythm.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Beet-Ginger Fiber Smoothie</CardTitle>
              <CardDescription>Blend instead of juicing to keep more fiber.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc space-y-1 pl-6">
                <li>1 small beet, peeled and chopped</li>
                <li>1-inch ginger piece</li>
                <li>1-2 dates</li>
                <li>1 cup frozen strawberries, optional</li>
                <li>Half banana, optional</li>
                <li>Handful of kale</li>
                <li>Juice from half lemon</li>
                <li>1 to 1.5 cups water or coconut water, plus ice</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Maple-Ginger Salmon Dinner</CardTitle>
              <CardDescription>Use a blended date instead of maple if avoiding added sugar.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc space-y-1 pl-6">
                <li>Salmon with grated ginger, garlic, lemon, black pepper, olive oil, paprika</li>
                <li>Roasted yams</li>
                <li>Sauteed kale with garlic</li>
                <li>Optional sliced egg for extra protein</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Breakfast Overnight Oats</CardTitle>
              <CardDescription>Simple, steady energy to start the day.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc space-y-1 pl-6">
                <li>Oats</li>
                <li>Chopped dates</li>
                <li>Cinnamon</li>
                <li>Ground flaxseed or chia</li>
                <li>Plant milk or Greek yogurt</li>
                <li>Lightly grated ginger</li>
                <li>Chopped walnuts or pecans</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/blog">
            <Button className="rounded-3xl px-6 py-6 text-base font-semibold">
              Read the Journal <BookOpen className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/guest-contributors">
            <Button variant="outline" className="rounded-3xl px-6 py-6 text-base font-semibold">
              Join the Community
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
