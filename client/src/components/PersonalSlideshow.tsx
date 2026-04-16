import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { founderFeatures } from '@/data/founderFeatures';

export default function PersonalSlideshow() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {founderFeatures.map((feature, index) => (
        <Card key={feature.id} className="overflow-hidden border-border/70 bg-background/90 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
          {feature.image ? (
            <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
              <img
                src={feature.image}
                alt={feature.imageAlt}
                className="h-full w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
                width="800"
                height="500"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,10,8,0.02)_0%,rgba(14,10,8,0.46)_100%)]" />
              <div className="absolute bottom-4 left-4">
                <Badge className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
                  {feature.eyebrow}
                </Badge>
              </div>
            </div>
          ) : null}
          <CardContent className="space-y-4 p-6 md:p-7">
            {!feature.image ? (
              <Badge className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary">
                {feature.eyebrow}
              </Badge>
            ) : null}
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground">{feature.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground md:text-base">{feature.summary}</p>
            </div>
            <Button asChild variant="outline" className="rounded-full px-5">
              <Link href={feature.href}>
                {feature.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
      <div className="md:col-span-2">
        <Card className="border-border/70 bg-card/80 shadow-sm">
          <CardContent className="flex flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between md:p-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Built to grow</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                This section now supports future photos, event media, outreach proof, and fuller articles without returning to a weak image carousel.
              </p>
            </div>
            <Button asChild className="rounded-full px-6">
              <Link href="/behind-the-scenes">
                Open the full page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
