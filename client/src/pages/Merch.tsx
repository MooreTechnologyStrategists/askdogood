import { useEffect, useState } from "react";
import { Filter, Music2, ShoppingCart } from "lucide-react";
import { hasValidCheckoutUrl, merchCategories, merchProducts, type MerchProduct } from "@/data/merch-products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GUMROAD_URLS } from "@/config/gumroad";
import { GA_EVENTS } from "@/config/analytics";
import { trackEvent, trackProductClick } from "@/lib/analytics";

export default function Merch() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? merchProducts
      : merchProducts.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product: MerchProduct) => {
    const checkoutSource = hasValidCheckoutUrl(product.checkoutUrl)
      ? "checkout_url"
      : hasValidCheckoutUrl(product.stripeLink)
      ? "stripe_link"
      : "storefront_fallback";

    const purchaseUrl =
      checkoutSource === "checkout_url"
        ? product.checkoutUrl!
        : checkoutSource === "stripe_link"
        ? product.stripeLink!
        : GUMROAD_URLS.storefront;

    trackProductClick(product.name, product.price, product.category);
    trackEvent(GA_EVENTS.MERCH_CTA_CLICK, {
      product_id: product.id,
      product_name: product.name,
      product_brand: product.brand,
      product_category: product.category,
      product_price: product.price,
      cta_location: "merch_grid",
      checkout_source: checkoutSource,
      purchase_url: purchaseUrl,
    });

    window.open(purchaseUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex rounded-full border bg-background/80 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            AskDoGood merch
          </div>
          <h1 className="mt-6 text-5xl font-bold md:text-6xl">Wear what moves you.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            Pieces for joy, healing, and showing up for your community. Explore the collection and find the message that feels like yours.
          </p>
        </div>
      </section>

      <section aria-labelledby="music-collection-heading" className="bg-[#173c32] text-[#fff8e9]">
        <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:items-center md:py-16">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#fff8e9]/40 px-4 py-2 text-sm font-semibold uppercase tracking-widest">
              <Music2 aria-hidden="true" className="h-4 w-4" /> The music lane
            </span>
            <h2 id="music-collection-heading" className="text-4xl font-bold leading-tight md:text-5xl">
              Old school soul. Hip-hop heart. Good in every beat.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-[#f4e6d4]">
              Music carries our stories, gets us moving, and brings us together. We’re building an AskDoGood music collection inspired by that feeling: expressive pieces with a purpose, made for the people who know every word when the right song comes on.
            </p>
            <a href="/#newsletter" className="inline-flex min-h-11 items-center rounded-full bg-[#efb88e] px-6 py-3 font-semibold text-[#173c32] transition hover:bg-[#ffd4ae] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff8e9]">
              Hear about the first drop
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#fff8e9]/20 bg-[#274c40]">
            <img src="https://askdogoodassets.blob.core.windows.net/images/personal/Music.webp" alt="Music and creative expression at AskDoGood" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="grid gap-3 p-5 sm:grid-cols-3">
              {['Music moves me', 'Good vibes, real healing', 'Community is the chorus'].map((idea) => (
                <span key={idea} className="rounded-xl border border-[#fff8e9]/25 p-3 text-center text-sm font-medium">{idea}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
            {merchCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {!product.inStock ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                      <Badge variant="secondary" className="px-4 py-2 text-lg">
                        Unavailable
                      </Badge>
                    </div>
                  ) : null}
                  {product.featured ? <Badge className="absolute left-4 top-4 bg-primary">Featured</Badge> : null}
                  <Badge
                    variant="outline"
                    className="absolute right-4 top-4 bg-background/90 text-xs capitalize backdrop-blur-sm"
                  >
                    {product.designStyle}
                  </Badge>
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
                  </div>

                  <div>
                    <Badge variant="secondary" className="text-xs uppercase tracking-wide">
                      {product.brand === "dct" ? "The Dope Cloud Teacher" : "AskDoGood"}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Badge variant="outline" className="text-xs capitalize">
                      {product.category}
                    </Badge>
                  </div>

                  {product.sizes ? (
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.slice(0, 4).map((size) => (
                        <Badge key={size} variant="secondary" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                      {product.sizes.length > 4 ? (
                        <Badge variant="secondary" className="text-xs">
                          +{product.sizes.length - 4}
                        </Badge>
                      ) : null}
                    </div>
                  ) : null}

                  {product.colors ? (
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <Badge key={color} variant="secondary" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  ) : null}

                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="w-full"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.inStock ? "Shop storefront" : "Unavailable"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-xl text-muted-foreground">No products found in this category.</p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold">Made to mean something</h2>
            <p className="text-lg text-muted-foreground">
              Every collection starts with a message worth carrying. Browse what’s here, and join the list for the music-inspired drop.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 p-12 text-center">
            <h2 className="text-3xl font-bold">Get early access to new drops</h2>
            <p className="mt-4 text-muted-foreground">
              Join the AskDoGood newsletter for first access to future merch releases, new products, and wellness updates.
            </p>
            <Button size="lg" asChild className="mt-6">
              <a href="/#newsletter">Subscribe now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
