import { Link } from "wouter";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Layers3,
  ShoppingBag,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  catalogById,
  comingSoonMerchItems,
  flagshipDigitalProducts,
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
  if (item.checkoutUrl) {
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
          Learn more
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
                A cleaner storefront for the products people actually need.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                This catalog centralizes the core offers, lead magnets, services, and upcoming merch so the site can present a stronger brand and a more professional buying path.
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
                <CardTitle className="text-xl">Current launch priorities</CardTitle>
                <CardDescription>
                  The catalog now reflects the live priority order instead of scattered page-level definitions.
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
              <TabsTrigger value="coming-soon" className="rounded-full border px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Layers3 className="mr-2 h-4 w-4" />
                Coming soon
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

            <TabsContent value="coming-soon" className="space-y-10">
              <div className="grid gap-8 lg:grid-cols-3">
                {comingSoonMerchItems.map((item) => (
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
              Why this change matters
            </Badge>
            <h2 className="text-3xl font-bold md:text-4xl">One source of truth is what makes the storefront look serious.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The site had too many duplicated product definitions, promo strings, and URLs living in separate pages. This new structure makes future launches cleaner, reduces checkout drift, and gives the brand a better editorial standard.
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
                  The membership should act as the bridge between one-time products and deeper support. It is now represented as a first-class offer in the catalog instead of getting buried under standalone promo blocks.
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
