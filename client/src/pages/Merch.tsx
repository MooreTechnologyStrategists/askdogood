import { useState } from "react";
import { products, categories, type Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Filter } from "lucide-react";

export default function Merch() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    if (product.stripeLink && !product.stripeLink.includes("PLACEHOLDER")) {
      window.open(product.stripeLink, "_blank");
    } else {
      alert(`Coming soon! ${product.name} will be available for purchase shortly.`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AskDoGood Merch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Wear your peace. Rep your boundaries. DMV intellectual energy meets wellness culture.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
            <span>✓ Premium Quality</span>
            <span>✓ DTF Printing</span>
            <span>✓ Designed for Grown Women</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
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
            <h2 className="text-3xl font-bold">You're Not Selling Pain. You're Selling Arrival.</h2>
            <p className="text-lg text-muted-foreground">
              Every piece aligns with AskDoGood's core philosophy: Peace is non-negotiable. 
              Boundaries as self-respect. Alignment over approval. DMV intellectual energy. 
              Grown-woman wellness. Arrival, not pain.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold">20</div>
                <div className="text-sm text-muted-foreground">Unique Designs</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">DTF</div>
                <div className="text-sm text-muted-foreground">Premium Printing</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Quality Guarantee</div>
              </div>
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
  );
}
