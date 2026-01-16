export interface Product {
  id: string;
  name: string;
  category: "apparel" | "wellness" | "accessories" | "home";
  price: number;
  description: string;
  image: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
  stripeLink?: string;
}

export const products: Product[] = [
  // APPAREL - Featured
  {
    id: "tshirt-peace-non-negotiable",
    name: "Peace Is Non-Negotiable Tee",
    category: "apparel",
    price: 32,
    description: "Our signature statement piece. Bold distressed typography on premium cotton. This isn't just a shirt—it's a declaration.",
    image: "/mockups/tshirt-peace-non-negotiable.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Black"],
    inStock: true,
    featured: true,
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER1"
  },
  {
    id: "hoodie-calculated-calm-dmv",
    name: "Calculated. Calm. DMV. Hoodie",
    category: "apparel",
    price: 58,
    description: "DMV intellectual energy. Reserved confidence with 'Peace First.' sleeve detail. Premium heavyweight fleece.",
    image: "/mockups/hoodie-calculated-calm-dmv.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Black"],
    inStock: true,
    featured: true,
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER2"
  },
  {
    id: "sweatshirt-costs-peace",
    name: "If It Costs Peace Crewneck",
    category: "apparel",
    price: 52,
    description: "High-readability back statement. DMV-appropriate reserved energy. Perfect for setting boundaries in style.",
    image: "/mockups/sweatshirt-costs-peace.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Black"],
    inStock: true,
    featured: true,
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER3"
  },
  {
    id: "tank-protect-peace",
    name: "Protect Peace Tank Top",
    category: "apparel",
    price: 28,
    description: "Executive-level design with wabi-sabi symbol. Sophisticated and grown. Perfect for wellness spaces.",
    image: "/mockups/tank-protect-peace.png",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true,
    featured: false,
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER4"
  },

  // WELLNESS PRODUCTS - Featured
  {
    id: "yoga-mat-return-to-yourself",
    name: "Return to Yourself Yoga Mat",
    category: "wellness",
    price: 68,
    description: "Premium PU mat with elegant typography. Invitation to presence and self-connection. Non-slip, eco-friendly.",
    image: "/mockups/yoga-mat-return-to-yourself.png",
    sizes: ["Standard (68\" x 24\")"],
    colors: ["Black"],
    inStock: true,
    featured: true,
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER5"
  },
  {
    id: "water-bottle-protect-peace",
    name: "Protect Your Peace Water Bottle",
    category: "wellness",
    price: 38,
    description: "32oz stainless steel. Vertical stack design. Clean, modern, minimalist. Hydration with intention.",
    image: "/mockups/water-bottle-protect-peace.png",
    sizes: ["32oz"],
    colors: ["Matte Black"],
    inStock: true,
    featured: true,
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER6"
  },

  // ACCESSORIES
  {
    id: "cap-askdogood-logo",
    name: "AskDoGood™ Dad Cap",
    category: "accessories",
    price: 32,
    description: "Clean logo embroidery. Professional branding element. Pairs perfectly with statement pieces.",
    image: "/mockups/cap-askdogood-logo.png",
    sizes: ["One Size (Adjustable)"],
    colors: ["Black"],
    inStock: true,
    featured: false,
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER7"
  },

  // Additional products (mockups to be generated)
  {
    id: "longsleeve-unavailable-nonsense",
    name: "Unavailable for Nonsense Long Sleeve",
    category: "apparel",
    price: 42,
    description: "Signature AskDoGood energy with humor and boundaries. Horizontal sleeve placement.",
    image: "/mockups/longsleeve-unavailable-nonsense.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Black"],
    inStock: false,
    featured: false,
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER8"
  },
  {
    id: "crewneck-not-loud-certain",
    name: "Not Loud. Just Certain. Crewneck",
    category: "apparel",
    price: 52,
    description: "Understated confidence. Perfect DMV energy. Two-line bold statement.",
    image: "/mockups/crewneck-not-loud-certain.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Black"],
    inStock: false,
    featured: false,
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER9"
  },
  {
    id: "beanie-askdogood",
    name: "AskDoGood™ Beanie",
    category: "accessories",
    price: 28,
    description: "Cozy premium knit with embroidered logo. Perfect for DMV winters.",
    image: "/mockups/beanie-askdogood.png",
    sizes: ["One Size"],
    colors: ["Black"],
    inStock: false,
    featured: false,
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER10"
  }
];

export const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "apparel", name: "Apparel", count: products.filter(p => p.category === "apparel").length },
  { id: "wellness", name: "Wellness", count: products.filter(p => p.category === "wellness").length },
  { id: "accessories", name: "Accessories", count: products.filter(p => p.category === "accessories").length },
];

export const featuredProducts = products.filter(p => p.featured);
