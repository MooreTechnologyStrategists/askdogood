import { useState, useEffect } from "react";
import { merchProducts, merchCategories, type MerchProduct } from "@/data/merch-products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Filter, Sparkles } from "lucide-react";
import { products as shopProducts } from "@/data/products";
import SEO from "@/components/SEO";

export default function Merch() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<MerchProduct | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = selectedCategory === "all" 
    ? merchProducts 
    : merchProducts.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: MerchProduct) => {
    if (product.stripeLink && !product.stripeLink.includes("PLACEHOLDER")) {
      window.open(product.stripeLink, "_blank");
    } else {
      alert(`Coming soon! ${product.name} will be available for purchase shortly.`);
    }
  };

  return (
    <>
      <SEO
        title="Merch Store | Ask DoGood"
        description="Wear your healing journey with pride. Motivational, inspirational wellness merchandise celebrating holistic health, self-care, and authentic growth."
        keywords={['wellness merch', 'healing apparel', 'motivational clothing', 'holistic health merchandise', 'self-care products']}
        url="/merch"
      />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Real talk. Real healing. Real merch.</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The AskDoGood Shop
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Wear your healing journey with pride. Our collection features motivational, inspirational, 
            and real-talk designs that celebrate your commitment to growth, wellness, and showing up 
            for yourself—every damn day.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
            <span>✓ Holistic Healing Vibes</span>
            <span>✓ Culturally Authentic</span>
            <span>✓ Premium Quality</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
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

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  {product.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                  )}
                  <Badge 
                    variant="outline" 
                    className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm capitalize text-xs"
                  >
                    {product.designStyle}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Badge variant="outline" className="text-xs capitalize">
                      {product.category}
                    </Badge>
                  </div>

                  {product.sizes && (
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.slice(0, 4).map((size) => (
                        <Badge key={size} variant="secondary" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                      {product.sizes.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.sizes.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}

                  {product.colors && (
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <Badge key={color} variant="secondary" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="w-full"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.inStock ? "Add to Cart" : "Notify Me"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Healing. Structure. Real-Life Growth.</h2>
            <p className="text-lg text-muted-foreground">
              Every piece celebrates holistic healing, ancestral wisdom, and authentic wellness. 
              We believe in therapy, plant-based healing, community support, and the power of 
              choosing yourself. No toxic positivity—just real talk and real healing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold">{merchProducts.length}</div>
                <div className="text-sm text-muted-foreground">Unique Designs</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">Design Styles</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Holistic Vibes</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">Premium</div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Styles Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Diverse Design Styles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From clean minimalist to playful cartoon, artsy abstract to bold statements—
              we've got something for every vibe.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-semibold mb-1">Minimalist</div>
              <div className="text-xs text-muted-foreground">Clean & Simple</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-semibold mb-1">Artsy</div>
              <div className="text-xs text-muted-foreground">Abstract & Creative</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="text-3xl mb-2">💫</div>
              <div className="font-semibold mb-1">Cartoon</div>
              <div className="text-xs text-muted-foreground">Playful & Fun</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="text-3xl mb-2">💪</div>
              <div className="font-semibold mb-1">Bold</div>
              <div className="text-xs text-muted-foreground">Strong Statements</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="text-3xl mb-2">🌿</div>
              <div className="font-semibold mb-1">Holistic</div>
              <div className="text-xs text-muted-foreground">Earth & Healing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold">Get Early Access to New Drops</h2>
            <p className="text-muted-foreground">
              Join the AskDoGood Newsletter for exclusive first looks, limited editions, and wellness insights.
            </p>
            <Button size="lg" asChild>
              <a href="/#newsletter">Subscribe Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
