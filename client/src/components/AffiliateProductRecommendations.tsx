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
    name: "Hair Growth Formula - Biotin & Collagen",
    description: "My go-to for stress thinning spots! Helps hair get fuller, thicker, and longer fast. Only downside - you'll have to shave everywhere more often! 💁‍♀️",
    image: "https://m.media-amazon.com/images/I/71xR5gQYdPL._AC_SL1500_.jpg",
    affiliateLink: "https://amzn.to/49HJmhu",
    price: "$24.99",
    rating: 5,
    category: "Hair Care",
  },
  {
    name: "Quick Weight Loss Supplement",
    description: "When I seriously need to lose a few pounds quick, this is my secret weapon. Fast results you can actually see! 🔥",
    image: "https://m.media-amazon.com/images/I/71JtZqZ8YxL._AC_SL1500_.jpg",
    affiliateLink: "https://amzn.to/4b5H0LN",
    price: "$34.99",
    rating: 5,
    category: "Weight Management",
  },
  {
    name: "Youthful Skin Complex - The Snapback",
    description: "I call this my 'snapback' - take this for a few days and see the results in glowy, youthful skin. Absolutely love it! ✨",
    image: "https://m.media-amazon.com/images/I/61oqvGH7zVL._AC_SL1500_.jpg",
    affiliateLink: "https://amzn.to/3YMbdIr",
    price: "$29.99",
    rating: 5,
    category: "Skin Care",
  },
  {
    name: "Premium Thermal Fleece Lined Leggings",
    description: "I love these SO much I bought 4 pairs! Amazing price, feel, length, and quality. Perfect as main pants or layered for cold weather. 🖤",
    image: "https://m.media-amazon.com/images/I/61z8M+kDe9L._AC_SL1500_.jpg",
    affiliateLink: "https://amzn.to/4pIJGm1",
    price: "$19.99",
    rating: 5,
    category: "Apparel",
  },
];

export default function AffiliateProductRecommendations() {
  return (
    <div className="py-12 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
            Rosee's Personal Favorites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are the products I actually use and swear by - no BS, just real results from things that work for me. 
            From hair growth to glowing skin, these are my everyday essentials. 💯
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
                      // Use Amazon logo as fallback for better brand consistency
                      e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg';
                      e.currentTarget.className = 'w-1/2 h-1/2 object-contain mx-auto my-auto';
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
