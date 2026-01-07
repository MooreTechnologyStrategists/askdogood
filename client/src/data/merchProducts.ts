export interface MerchProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
  stripeLink?: string;
}

export const merchCategories = [
  { id: "all", name: "All Products", count: 16 },
  { id: "apparel", name: "Apparel", count: 9 },
  { id: "wellness", name: "Wellness", count: 4 },
  { id: "home", name: "Home", count: 3 },
];

export const merchProducts: MerchProduct[] = [
  // PEACE COLLECTION
  {
    id: 1,
    name: "Peace Is Non-Negotiable",
    category: "apparel",
    price: 38,
    description: "Center chest placement with distressed texture. Your signature piece for boundary-setting.",
    image: "/mockups/tshirt-peace-non-negotiable.png",
    badge: "Bestseller",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Black", "White", "Sage Green", "Stone"],
    inStock: true,
    featured: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 2,
    name: "If It Costs Peace - Back Print",
    category: "apparel",
    price: 58,
    description: "Large back placement for maximum impact. Statement hoodie for the unbothered.",
    image: "/mockups/hoodie-costs-peace.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Black", "Charcoal", "Forest Green"],
    inStock: true,
    featured: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 3,
    name: "Protect Peace Symbol",
    category: "apparel",
    price: 52,
    description: "Executive-level design with broken circle symbol. Sophisticated and grown.",
    image: "/mockups/sweatshirt-protect-peace.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Black", "Cream", "Sage"],
    inStock: true,
    featured: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 4,
    name: "Peace First - Sleeve Detail",
    category: "apparel",
    price: 42,
    description: "Vertical sleeve placement adds custom, non-mass-produced details.",
    image: "/mockups/longsleeve-peace-first.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Black", "White", "Olive"],
    inStock: true,
    stripeLink: "PLACEHOLDER"
  },

  // DMV ENERGY COLLECTION
  {
    id: 5,
    name: "Calculated. Calm. DMV.",
    category: "apparel",
    price: 58,
    description: "Three-word statement with grown DMV pride. Not loud, just certain.",
    image: "/mockups/hoodie-calculated-calm-dmv.png",
    badge: "DMV Pride",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Black", "Navy", "Forest"],
    inStock: true,
    featured: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 6,
    name: "Not Loud. Just Certain.",
    category: "apparel",
    price: 38,
    description: "Understated confidence. Perfect DMV energy for everyday wear.",
    image: "/mockups/tshirt-not-loud.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Black", "White", "Charcoal"],
    inStock: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 7,
    name: "DMV Raised My Discernment",
    category: "apparel",
    price: 38,
    description: "Intellectual regional pride with sophisticated messaging.",
    image: "/mockups/tshirt-dmv-discernment.png",
    badge: "Local Pride",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Black", "White", "Stone"],
    inStock: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 8,
    name: "DMV Energy Cap",
    category: "apparel",
    price: 32,
    description: "Low-key regional rep on premium structured cap.",
    image: "/mockups/cap-dmv-energy.png",
    sizes: ["One Size"],
    colors: ["Black", "Navy", "Olive"],
    inStock: true,
    stripeLink: "PLACEHOLDER"
  },

  // WELLNESS ESSENTIALS
  {
    id: 9,
    name: "Return to Yourself Yoga Mat",
    category: "wellness",
    price: 68,
    description: "Top-of-mat placement for grounding practice. Cork-backed, eco-friendly.",
    image: "/mockups/yoga-mat-return-to-yourself.png",
    badge: "Premium",
    sizes: ["Standard (72\" x 24\")"],
    colors: ["Black", "Sage"],
    inStock: true,
    featured: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 10,
    name: "Alignment Over Approval",
    category: "wellness",
    price: 68,
    description: "Core AskDoGood philosophy on premium neoprene mat.",
    image: "/mockups/yoga-mat-alignment.png",
    sizes: ["Standard (72\" x 24\")"],
    colors: ["Black", "Deep Purple"],
    inStock: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 11,
    name: "Protect Your Peace Bottle",
    category: "wellness",
    price: 32,
    description: "32oz insulated bottle with vertical stack design. BPA-free, leak-proof.",
    image: "/mockups/water-bottle-protect-peace.png",
    sizes: ["32oz"],
    colors: ["Black", "White", "Sage"],
    inStock: true,
    featured: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 12,
    name: "Hydrate + Mind Your Business",
    category: "wellness",
    price: 28,
    description: "20oz tumbler with signature AskDoGood humor and boundaries.",
    image: "/mockups/tumbler-hydrate.png",
    badge: "Fan Favorite",
    sizes: ["20oz"],
    colors: ["Black", "Rose Gold", "Silver"],
    inStock: true,
    stripeLink: "PLACEHOLDER"
  },

  // REST & RESTORATION
  {
    id: 13,
    name: "Peace Lives Here",
    category: "home",
    price: 24,
    description: "Elegant bedtime affirmation on premium cotton blend.",
    image: "/mockups/pillowcase-peace-lives.png",
    sizes: ["Standard (20\" x 26\")"],
    colors: ["White", "Cream", "Sage"],
    inStock: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 14,
    name: "Rest Without Guilt",
    category: "home",
    price: 24,
    description: "Grown-woman wellness permission statement for deep sleep.",
    image: "/mockups/pillowcase-rest.png",
    badge: "New",
    sizes: ["Standard (20\" x 26\")"],
    colors: ["White", "Cream", "Lavender"],
    inStock: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 15,
    name: "Safe. Still. Whole.",
    category: "home",
    price: 24,
    description: "Three-word affirmation mantra for calming bedtime rituals.",
    image: "/mockups/pillowcase-safe.png",
    sizes: ["Standard (20\" x 26\")"],
    colors: ["White", "Cream", "Stone"],
    inStock: true,
    stripeLink: "PLACEHOLDER"
  },
  {
    id: 16,
    name: "Unavailable for Nonsense",
    category: "apparel",
    price: 58,
    description: "Sleeve detail with confident boundary-setting energy.",
    image: "/mockups/hoodie-unavailable.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["Black", "Charcoal", "Navy"],
    inStock: true,
    stripeLink: "PLACEHOLDER"
  },
];
