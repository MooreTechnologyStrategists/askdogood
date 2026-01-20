import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Star } from "lucide-react";
import { Link } from "wouter";

interface Product {
  name: string;
  description: string;
  image: string;
  affiliateLink: string;
  price: string;
  rating?: number;
  category: string;
}

const featuredProducts: Product[] = [
  {
    name: "SuperBeets Heart Chews",
    description: "The superfood that helped sustain me for 7+ years during my thyroid recovery. Supports healthy blood pressure and energy.",
    image: "/images/products/superbeets.jpg",
    affiliateLink: "https://amzn.to/superbeets",
    price: "$29.99",
    rating: 5,
    category: "Superfood",
  },
  {
    name: "Sea Moss Gel (Organic)",
    description: "92 of 102 minerals your body needs! Essential for thyroid function and immune support.",
    image: "/images/products/seamoss.jpg",
    affiliateLink: "https://amzn.to/seamoss",
    price: "$24.99",
    rating: 5,
    category: "Superfood",
  },
  {
    name: "Collagen Peptides",
    description: "Transformed my skin, joints, and overall wellness. The supplement that truly delivers results.",
    image: "/images/products/collagen.jpg",
    affiliateLink: "https://amzn.to/collagen",
    price: "$34.99",
    rating: 5,
    category: "Supplement",
  },
  {
    name: "Thyroid Support Supplement",
    description: "Comprehensive thyroid formula with selenium, zinc, and iodine. My go-to recommendation.",
    image: "/images/products/thyroid-support.jpg",
    affiliateLink: "https://amzn.to/thyroidsupport",
    price: "$27.99",
    rating: 4,
    category: "Supplement",
  },
];

export default function AffiliateProductRecommendations() {
  return (
    <div className="py-12 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
            Products I Actually Use & Recommend
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are the supplements and products that made a real difference in my thyroid recovery journey. 
            I only recommend what I personally use and trust.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            * As an Amazon Associate, I earn from qualifying purchases at no extra cost to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="aspect-square bg-secondary/50 rounded-lg mb-3 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/img/blog/_fallback/blog.webp';
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  {product.rating && (
                    <div className="flex items-center gap-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg mt-2">{product.name}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-0">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-primary">{product.price}</span>
                </div>
                <a 
                  href={product.affiliateLink} 
                  target="_blank" 
                  rel="noopener noreferrer nofollow sponsored"
                  className="w-full"
                >
                  <Button className="w-full gap-2" size="sm">
                    Shop Now <ExternalLink className="h-3 w-3" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/shop">
            <Button size="lg" variant="outline" className="gap-2">
              View All Recommendations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
