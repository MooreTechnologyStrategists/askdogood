import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft, ShoppingBag, Clock, Download } from "lucide-react";
import { catalogById } from "@/data/catalog";
import { productDetailsById } from "@/data/productDetails";

type ProductRouteParams = {
  slug?: string;
};

export default function ProductDetail() {
  const params = useParams<ProductRouteParams>();
  const slug = params.slug ?? "";

  const product = catalogById[slug];
  const detail = productDetailsById[slug];

  if (!product || !detail) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
        <ShoppingBag className="w-12 h-12 text-muted-foreground" />
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="text-muted-foreground">
          This product may have moved or isn't available yet.
        </p>
        <Link href="/shop">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
          </Button>
        </Link>
      </div>
    );
  }

  const isLive = product.checkoutState === "live" && !!product.checkoutUrl;
  const isMembership = product.kind === "membership";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container max-w-6xl mx-auto px-4">
          <Link href="/shop">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Shop
            </button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/products/gumroad_cover.png";
                  }}
                />
              </div>
              {isLive && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  AVAILABLE NOW
                </div>
              )}
            </div>

            {/* Product info */}
            <div className="flex flex-col gap-5">
              <div>
                <Badge variant="outline" className="mb-3 text-xs">
                  {product.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {detail.subheadline}
                </p>
              </div>

              {/* Price + CTA */}
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl font-bold">{product.priceLabel}</span>
                    {isMembership && (
                      <span className="text-sm text-muted-foreground">/ month</span>
                    )}
                  </div>

                  {isLive ? (
                    <a
                      href={product.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="w-full text-base rounded-xl gap-2">
                        <ShoppingBag className="w-5 h-5" />
                        {isMembership ? "Join Now" : "Buy Now — Instant Access"}
                      </Button>
                    </a>
                  ) : (
                    <div>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full text-base rounded-xl gap-2 cursor-not-allowed opacity-70"
                        disabled
                      >
                        <Clock className="w-5 h-5" />
                        Coming Soon — Launching Shortly
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-3">
                        Join the waitlist →{" "}
                        <a
                          href="https://askdogood.beehiiv.com/subscribe"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-foreground"
                        >
                          Subscribe for launch updates
                        </a>
                      </p>
                    </div>
                  )}

                  <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1">
                    <Download className="w-3 h-3" />
                    {detail.deliveryNote}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">What's Included</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {detail.includes.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
              >
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* This is for you if */}
      <section className="py-14 bg-secondary/5">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">This is for you if…</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {detail.bestFor.map((item, i) => (
              <Card key={i} className="border border-primary/10">
                <CardContent className="p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-14 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">What You'll Walk Away With</h2>
          <div className="flex flex-col gap-4">
            {detail.outcomes.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border bg-card"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">{i + 1}</span>
                </div>
                <span className="text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-primary/5 border-t">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{detail.headline}</h2>
          <p className="text-muted-foreground mb-8">{detail.subheadline}</p>
          <div className="text-3xl font-bold mb-6">{product.priceLabel}</div>

          {isLive ? (
            <a
              href={product.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="rounded-xl gap-2 px-10 text-base">
                <ShoppingBag className="w-5 h-5" />
                {isMembership ? "Join the Circle" : "Get Instant Access"}
              </Button>
            </a>
          ) : (
            <a
              href="https://askdogood.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="rounded-xl gap-2 px-10 text-base">
                Notify Me at Launch
              </Button>
            </a>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            Questions? <Link href="/contact" className="underline hover:text-foreground">Get in touch</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
