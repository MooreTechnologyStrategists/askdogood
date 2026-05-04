import { Link } from 'wouter';
import { ArrowRight, Clock, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ShortStories() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(250,245,240,1)_0%,rgba(255,255,255,1)_45%,rgba(247,241,236,1)_100%)] text-foreground">
      <section className="border-b border-border/70 bg-[radial-gradient(circle_at_top_left,rgba(191,87,47,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(98,59,41,0.12),transparent_24%)]">
        <div className="container py-16 md:py-24">
          <div className="text-center">
            <Badge className="rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Stories by Ask DoGood
            </Badge>
            <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl mx-auto mt-8">
              Fiction with impact, built around real stories.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl mx-auto mt-4">
              The stories section is being refreshed. New fiction and features coming soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}