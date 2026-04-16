import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { founderFeatures } from '@/data/founderFeatures';

const sections = [
  {
    id: 'in-the-kitchen',
    eyebrow: 'Food practice',
    title: 'In the Kitchen',
    caption: 'Real meals. Real ingredients. This is where healing starts, one plate at a time.',
    image: '/images/personal/food/meal-prep.jpg',
    imageAlt: 'Meal prep and healing food prepared for AskDoGood',
  },
  {
    id: 'juices-and-smoothies',
    eyebrow: 'Daily nourishment',
    title: 'Juices & Smoothies',
    caption: 'Simple blends designed to reduce inflammation and support stronger daily energy.',
    image: '/images/personal/food/smoothie-green-goddess.jpg',
    imageAlt: 'Green smoothie prepared for daily wellness support',
  },
  {
    id: 'staying-active',
    eyebrow: 'Movement',
    title: 'Staying Active',
    caption: 'Movement does not have to be extreme. Consistency is what creates change.',
    image: '/images/personal/rosee-hero-1.jpg',
    imageAlt: 'RoSee Murphy outdoors and staying active',
  },
  {
    id: 'building-the-platform',
    eyebrow: 'Tech and execution',
    title: 'Building the Platform',
    caption: 'AskDoGood is being built in real time, combining health, technology, and community.',
  },
  {
    id: 'learning-and-growing',
    eyebrow: 'Education',
    title: 'Learning & Growing',
    caption: 'Growth is part of the process. The more you learn, the more you can help others.',
  },
];

export default function BehindTheScenes() {
  const leadFeature = founderFeatures[0];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(250,245,240,1)_0%,rgba(255,255,255,1)_40%,rgba(247,241,236,1)_100%)] text-foreground">
      <section className="border-b border-border/70 bg-[radial-gradient(circle_at_top_left,rgba(191,87,47,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(98,59,41,0.12),transparent_22%)]">
        <div className="container py-16 md:py-24">
          <Button asChild variant="ghost" className="mb-8 rounded-full px-0 text-primary hover:bg-transparent">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <Badge className="rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Behind AskDoGood
              </Badge>
              <div className="space-y-4">
                <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
                  The real work behind real change.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  AskDoGood is not just a brand. It is a lifestyle in progress.
                </p>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  Everything here comes from real experiences: testing recipes, learning what works and what does not, managing health challenges, and building a business while rebuilding life.
                </p>
                <p className="max-w-2xl text-lg leading-8 text-foreground/85 md:text-xl">
                  This is not perfection. This is progress.
                </p>
              </div>
            </div>

            <Card className="overflow-hidden border-border/70 bg-card/90 shadow-[0_20px_70px_rgba(68,42,31,0.12)]">
              <div className="relative aspect-[4/5] bg-muted/30">
                <img
                  src={leadFeature.image}
                  alt={leadFeature.imageAlt}
                  className="h-full w-full object-cover"
                  loading="eager"
                  width="900"
                  height="1125"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,10,8,0.04)_0%,rgba(14,10,8,0.72)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/75">Featured Memory</p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold">CIAA birthday with MC Lyte and DJ K-Rock</h2>
                  <p className="mt-3 max-w-lg text-base leading-7 text-white/85">
                    A personal milestone with real cultural weight, including exclusive time with MC Lyte and world-renowned DJ K-Rock during your surprise thirty-ninth birthday celebration at CIAA.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Daily practice</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Real life behind the brand.
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Each section now groups one kind of work with the right kind of visual so the page reads as organized, credible, and intentional.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sections.map((section) => (
              <Card key={section.id} id={section.id} className="scroll-mt-28 overflow-hidden border-border/70 bg-background/90 shadow-sm">
                {section.image ? (
                  <div className="h-56 overflow-hidden bg-muted/30">
                    <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width="720"
                      height="448"
                    />
                  </div>
                ) : (
                  <div className="flex h-56 items-end bg-[linear-gradient(135deg,rgba(19,55,45,0.08),rgba(205,177,109,0.18))] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">{section.eyebrow}</p>
                  </div>
                )}
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{section.eyebrow}</p>
                  <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground">{section.title}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{section.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <Card className="border-border/70 bg-card/90 shadow-sm">
            <CardContent className="flex flex-col items-start justify-between gap-4 p-8 md:flex-row md:items-center md:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">What comes next</p>
                <p className="mt-2 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                  This page is now structured for more photos, footage, and story proof without slipping back into mismatched captions or a generic image strip.
                </p>
              </div>
              <Button asChild className="rounded-full px-6 py-6 text-base">
                <Link href="/work-with-askdogood">
                  Work With AskDoGood <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}