import { Link } from 'wouter';
import { ArrowRight, Clock, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const featuredSeries = {
  title: 'Chyna White',
  subtitle: 'A sharp fiction lead with pressure, taste, strategy, and a long memory.',
  description:
    'Chyna White is built to land like a headline, not background noise. The story world blends boardroom tension, street memory, romance, and survival into a lead character who knows exactly how to command a room.',
  image:
    'https://askdogoodassets.blob.core.windows.net/images/stories/episode1_the_setup.png',
};

const launchPoints = [
  'A lead character written with authority instead of apology',
  'Modern serialized fiction that feels cinematic and current',
  'Adult stakes, sharp dialogue, and a premium editorial presentation',
];

const storyStats = [
  { label: 'Live episode', value: '01' },
  { label: 'Planned arc', value: '04' },
  { label: 'Tone', value: 'Bold' },
];

export default function ShortStories() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(250,245,240,1)_0%,rgba(255,255,255,1)_45%,rgba(247,241,236,1)_100%)] text-foreground">
      <section className="border-b border-border/70 bg-[radial-gradient(circle_at_top_left,rgba(191,87,47,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(98,59,41,0.12),transparent_24%)]">
        <div className="container py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <Badge className="rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Stories by Ask DoGood
              </Badge>
              <div className="space-y-4">
                <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
                  Fiction with impact, built around one name that can carry the room.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  The stories section is now centered on a cleaner launch: fewer distractions, stronger positioning, and a clearer reason to start with Chyna White.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {storyStats.map((item) => (
                  <Card key={item.label} className="border-border/70 bg-background/80 shadow-sm">
                    <CardContent className="px-5 py-4">
                      <p className="text-2xl font-semibold text-foreground">{item.value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-full px-7 py-6 text-base">
                  <Link href="/stories/chyna-white/episode-1">
                    Read Episode 1 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-7 py-6 text-base">
                  <Link href="/stories/chyna-white">Explore Chyna White</Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden border-border/70 bg-card/90 shadow-[0_20px_70px_rgba(68,42,31,0.12)]">
              <div className="relative aspect-[4/5] bg-[linear-gradient(180deg,rgba(64,37,25,0.04),rgba(64,37,25,0.14))]">
                <img
                  src={featuredSeries.image}
                  alt="Chyna White featured story art"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                  width="900"
                  height="1125"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,10,8,0.02)_0%,rgba(14,10,8,0.62)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/75">Featured Launch</p>
                  <h2 className="mt-3 font-serif text-4xl font-semibold">{featuredSeries.title}</h2>
                  <p className="mt-3 max-w-lg text-base leading-7 text-white/85">{featuredSeries.subtitle}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-border/70 bg-background/90 shadow-sm">
            <CardContent className="space-y-6 p-8 md:p-10">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Why Chyna lands now</p>
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  Fierce, current, and written like she already owns the conversation.
                </h2>
              </div>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                {featuredSeries.description}
              </p>
              <div className="grid gap-4">
                {launchPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-border/70 bg-muted/20 px-5 py-4 text-sm leading-7 text-foreground md:text-base">
                    {point}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/80 shadow-sm">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Now Reading</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">Episode 1: The Setup</h3>
                </div>
                <Badge variant="outline" className="border-primary/25 text-primary">
                  Live
                </Badge>
              </div>
              <div className="space-y-5 pt-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>12 minute read</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Flame className="h-4 w-4 text-primary" />
                  <span>Boardroom pressure, old history, and a lead who refuses to fold</span>
                </div>
                <p className="border-l-2 border-primary/40 pl-4 text-base italic leading-8 text-foreground/85">
                  "The conference room smelled like expensive cologne and desperation. Chyna leaned back in her chair like the room was already hers."
                </p>
                <Button asChild className="mt-4 w-full rounded-full py-6 text-base">
                  <Link href="/stories/chyna-white/episode-1">Start the story</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}