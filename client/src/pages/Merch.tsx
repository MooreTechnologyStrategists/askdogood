import { useEffect, useState } from "react";
import { Filter, ShoppingCart } from "lucide-react";
import { merchCategories, merchProducts, type MerchProduct } from "@/data/merch-products";
import { comingSoonMerchItems } from "@/data/catalog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GUMROAD_URLS } from "@/config/gumroad";

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
    const purchaseUrl =
      product.stripeLink && !product.stripeLink.includes("PLACEHOLDER")
        ? product.stripeLink
        : GUMROAD_URLS.storefront;

    window.open(purchaseUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex rounded-full border bg-background/80 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            AskDoGood merch
          </div>
          <h1 className="mt-6 text-5xl font-bold md:text-6xl">Merch that supports the brand without cheapening it.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
            The merch experience now separates live products from concept inventory so the site can look cleaner and more intentional.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>Direct product previews</span>
            <span>Cleaner category filters</span>
            <span>Future drops clearly labeled</span>
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
                        Coming soon
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
                    {product.inStock ? "View product" : "Join waitlist"}
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
            <h2 className="text-3xl font-bold">A stronger merch standard</h2>
            <p className="text-lg text-muted-foreground">
              Merch should extend the brand, not make it look unfinished. That means removing filler copy, keeping the presentation cleaner, and separating live items from concepts that still need real assets.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-8 md:grid-cols-4">
              <div className="space-y-2">
                <div className="text-2xl font-bold">{merchProducts.length}</div>
                <div className="text-sm text-muted-foreground">Live products</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">{comingSoonMerchItems.length}</div>
                <div className="text-sm text-muted-foreground">Future drops</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">Core categories</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">Clean</div>
                <div className="text-sm text-muted-foreground">Presentation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Upcoming drops</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These items are now tracked centrally and clearly marked as future launches until production assets and checkout are ready.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {comingSoonMerchItems.slice(1, 7).map((item) => (
              <div key={item.id} className="rounded-2xl border bg-card p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{item.category}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.shortSummary}</p>
                <Badge variant="outline" className="mt-4">
                  {item.status}
                </Badge>
              </div>
            ))}
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