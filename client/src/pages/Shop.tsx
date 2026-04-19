import { Link } from "wouter";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  ShoppingBag,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteCopy, splitCopy } from "@/content/siteCopy";
import {
  catalogById,
  flagshipDigitalProducts,
  hasLiveCheckout,
  launchOrder,
  leadMagnets,
  membershipOffers,
  serviceCatalog,
  type CatalogItem,
} from "@/data/catalog";

const readyNow = [...flagshipDigitalProducts, ...membershipOffers];

const launchRoadmap = launchOrder
  .map((id) => catalogById[id])
  .filter((item): item is CatalogItem => Boolean(item));

function CatalogAction({ item }: { item: CatalogItem }) {
  if (hasLiveCheckout(item)) {
    return (
      <a href={item.checkoutUrl} target="_blank" rel="noopener noreferrer" className="w-full">
        <Button className="w-full gap-2">
          {item.kind === "lead-magnet" ? "Download" : "Open checkout"}
          <ExternalLink className="h-4 w-4" />
        </Button>
      </a>
    );
  }

  if (item.internalPath) {
    return (
      <Link href={item.internalPath}>
        <Button variant="outline" className="w-full gap-2">
          {item.kind === "lead-magnet" ? "Open resource" : "Learn more"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    );
  }

  return (
    <Link href="/contact">
      <Button variant="outline" className="w-full gap-2">
        Join waitlist
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Link>
  );
}

function CatalogCard({ item }: { item: CatalogItem }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-border/60 bg-card/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden bg-muted">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        <Badge className="absolute left-4 top-4 bg-background/90 text-foreground shadow-sm">
          {item.status}
        </Badge>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-2xl">{item.name}</CardTitle>
            <CardDescription className="mt-2 text-base">{item.shortSummary}</CardDescription>
          </div>
          <span className="text-lg font-semibold text-primary">{item.priceLabel}</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-5">
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>{item.description}</p>
          <p className="font-medium text-foreground/80">{item.category}</p>
          {item.notes ? <p>{item.notes}</p> : null}
        </div>
        <div className="mt-auto">
          <CatalogAction item={item} />
        </div>
      </CardContent>
    </Card>
  );
}

export default function Shop() {
  const healthNutritionItems = [
    catalogById["21-day-plant-based-reset"],
    catalogById["30-day-thyroid-meal-plan"],
  ].filter((item): item is CatalogItem => Boolean(item));

  const educationItems = [
    catalogById["thyroid-lab-interpretation-guide"],
    catalogById["thyroid-checklist"],
  ].filter((item): item is CatalogItem => Boolean(item));

  const transformationItems = [
    catalogById["dogood-wellness-circle"],
    catalogById["transformation-package"],
  ].filter((item): item is CatalogItem => Boolean(item));

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Shop AskDoGood Courses, Guides, and Wellness Tools"
        description="Explore AskDoGood digital products, free resources, membership offers, services, and upcoming merch from a single professional storefront."
      />

      <section className="relative overflow-hidden border-b border-border/40 bg-[radial-gradient(circle_at_top_left,_rgba(233,124,64,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,116,144,0.18),_transparent_30%)] py-20">
        <div className="container relative z-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <Badge variant="outline" className="mb-6 rounded-full px-4 py-1 text-xs uppercase tracking-[0.22em]">
                AskDoGood catalog
              </Badge>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
                {siteCopy.shop.headline}
              </h1>
              <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-muted-foreground">
                {splitCopy(siteCopy.shop.content).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground/85">
                {siteCopy.cta}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={readyNow[0].checkoutUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    Shop ready-now offers
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <Link href="/resources">
                  <Button size="lg" variant="outline" className="gap-2">
                    Get free resources
                    <Download className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="border-border/50 bg-background/85 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Why Buy From Here</CardTitle>
                <CardDescription>
                  {siteCopy.shop.whyBuyFromHere}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {launchRoadmap.slice(0, 5).map((item, index) => (
                  <div key={item.id} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card px-4 py-3">
                    <span className="mt-0.5 text-sm font-semibold text-primary">0{index + 1}</span>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.status}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-border/40 bg-background/70">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="border-border/60 bg-card/90 shadow-sm">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Health & Nutrition</p>
                <CardTitle className="text-2xl">Food-first structure that supports healing</CardTitle>
                <CardDescription className="text-base leading-7">
                  Simple, effective strategies to reduce inflammation, improve energy, and support your body using real food.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {healthNutritionItems.map((item) => (
                  <div key={item.id} className="rounded-xl border border-border/50 bg-background px-4 py-3">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="mt-1 leading-6">{item.shortSummary}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/90 shadow-sm">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Health Education</p>
                <CardTitle className="text-2xl">Tools that help you understand your body</CardTitle>
                <CardDescription className="text-base leading-7">
                  Learn how to understand your body and your numbers so you are no longer dependent on guesswork.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {educationItems.map((item) => (
                  <div key={item.id} className="rounded-xl border border-border/50 bg-background px-4 py-3">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="mt-1 leading-6">{item.shortSummary}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/90 shadow-sm">
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Lifestyle Transformation</p>
                <CardTitle className="text-2xl">Programs that push daily change into motion</CardTitle>
                <CardDescription className="text-base leading-7">
                  A structured system to reset your health, mindset, and daily habits, with room to go deeper when you are ready.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {transformationItems.map((item) => (
                  <div key={item.id} className="rounded-xl border border-border/50 bg-background px-4 py-3">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="mt-1 leading-6">{item.shortSummary}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-muted-foreground">Ready to go deeper? Explore the full programs and start your reset today.</p>
            <div className="mt-5 flex justify-center gap-3 flex-wrap">
              <a href={readyNow[0].checkoutUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full">
                  Explore programs
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link href="/work-with-askdogood">
                <Button size="lg" variant="outline" className="gap-2 rounded-full">
                  View reset services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="ready-now" className="space-y-10">
            <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
              <TabsTrigger value="ready-now" className="rounded-full border px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Ready now
              </TabsTrigger>
              <TabsTrigger value="resources" className="rounded-full border px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Download className="mr-2 h-4 w-4" />
                Free resources
              </TabsTrigger>
              <TabsTrigger value="services" className="rounded-full border px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BriefcaseBusiness className="mr-2 h-4 w-4" />
                Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ready-now" className="space-y-10">
              <div className="grid gap-8 lg:grid-cols-3">
                {readyNow.map((item) => (
                  <CatalogCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-10">
              <div className="grid gap-8 lg:grid-cols-3">
                {leadMagnets.map((item) => (
                  <CatalogCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-10">
              <div className="grid gap-8 lg:grid-cols-3">
                {serviceCatalog.map((item) => (
                  <CatalogCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="border-y border-border/40 bg-secondary/20 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full px-4 py-1 uppercase tracking-[0.22em]">
              Why this storefront works
            </Badge>
            <h2 className="text-3xl font-bold md:text-4xl">Everything is organized so you can find the right next step faster.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you need a reset, a guide, a resource, or deeper support, the shop is now built to move you from interest to action without confusion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-border/50 bg-card/70 p-8 shadow-sm backdrop-blur sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <Badge variant="outline" className="mb-4 rounded-full px-4 py-1 uppercase tracking-[0.22em]">
                  Membership and community
                </Badge>
                <h2 className="text-3xl font-bold md:text-4xl">The DoGood Wellness Circle stays visible as the retention offer.</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  If you want ongoing support instead of one-time information, the Wellness Circle is the bridge between a single download and a more consistent transformation process.
                </p>
              </div>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {membershipOffers[0].name}
                  </CardTitle>
                  <CardDescription>{membershipOffers[0].shortSummary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{membershipOffers[0].description}</p>
                  <div className="text-lg font-semibold text-primary">{membershipOffers[0].priceLabel}</div>
                  <CatalogAction item={membershipOffers[0]} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
