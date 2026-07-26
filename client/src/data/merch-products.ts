export interface MerchProduct {
  id: string;
  brand: "askdogood" | "dct";
  name: string;
  category: "mugs" | "tshirts" | "hoodies" | "totes";
  price: number;
  description: string;
  image: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
  checkoutUrl?: string;
  stripeLink?: string;
  designStyle: "minimalist" | "artsy" | "cartoon" | "bold" | "holistic";
}

export const merchProducts: MerchProduct[] = [
  // FLAGSHIP DROPS (SUMMER 2026)
  {
    id: "tshirt-soft-life-discipline",
    brand: "askdogood",
    name: "Soft Life Is a Discipline Tee",
    category: "tshirts",
    price: 34,
    description: "AskDoGood flagship drop for the 7-day sprint. A premium identity statement centered on boundaries, healing, and intentional living.",
    image: "https://askdogoodassets.blob.core.windows.net/images/merch/mockup_tshirt_progress.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Vintage Black", "Cream"],
    inStock: true,
    featured: true,
    designStyle: "minimalist",
    checkoutUrl: "https://askdogood.gumroad.com/l/askdogood-soft-life-is-a-discipline-tee",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_SOFTLIFE"
  },
  {
    id: "tshirt-classroom-to-cloud",
    brand: "dct",
    name: "From Classroom to Cloud Tee",
    category: "tshirts",
    price: 36,
    description: "The Dope Cloud Teacher flagship drop for educators moving into cloud and AI careers. Built for conference floors and everyday wear.",
    image: "https://askdogoodassets.blob.core.windows.net/images/merch/mockup_tshirt_progress.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Charcoal", "Heather Gray"],
    inStock: true,
    featured: true,
    designStyle: "bold",
    checkoutUrl: "https://askdogood.gumroad.com/l/dope-cloud-teacher-from-classroom-to-cloud-tee",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_CLASSROOMCLOUD"
  },
  {
    id: "tshirt-protect-the-girls",
    brand: "askdogood",
    name: "Protect the Girls Tee",
    category: "tshirts",
    price: 36,
    description: "Movement-led advocacy design with purpose-first messaging. Designed to start conversation and convert mission into action.",
    image: "https://askdogoodassets.blob.core.windows.net/images/merch/mockup_tshirt_progress.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Black", "Cream"],
    inStock: true,
    featured: false,
    designStyle: "bold",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_PROTECTGIRLS"
  },
  {
    id: "tshirt-build-dont-scroll",
    brand: "dct",
    name: "Build. Don't Scroll. Tee",
    category: "tshirts",
    price: 34,
    description: "Minimal, high-signal tech statement for builders. Designed for social content, meetups, and fast conversion with clear audience fit.",
    image: "https://askdogoodassets.blob.core.windows.net/images/merch/mockup_tshirt_progress.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: ["Black", "Cream"],
    inStock: true,
    featured: false,
    designStyle: "minimalist",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_BUILDNOSCROLL"
  },

  // MUGS
  {
    id: "mug-gratitude",
    brand: "askdogood",
    name: "The \"Gratitude\" Mug",
    category: "mugs",
    price: 18,
    description: "Start your day with real talk. Less fuckin' attitude, more fuckin' gratitude. Bold minimalist design with gold accents.",
    image: "https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_gratitude.webp",
    colors: ["White"],
    inStock: true,
    featured: true,
    designStyle: "bold",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_MUG1"
  },
  {
    id: "mug-healing",
    brand: "askdogood",
    name: "The \"Healing Path\" Mug",
    category: "mugs",
    price: 18,
    description: "Healing isn't linear and that's okay. A gentle reminder with warm, earthy tones and elegant typography.",
    image: "https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_healing.webp",
    colors: ["Cream"],
    inStock: true,
    featured: false,
    designStyle: "minimalist",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_MUG2"
  },
  {
    id: "mug-thriving",
    brand: "askdogood",
    name: "The \"Thriving\" Mug",
    category: "mugs",
    price: 18,
    description: "Thriving not just surviving. Bold statement design for your morning motivation and empowerment.",
    image: "https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_thriving.webp",
    colors: ["White"],
    inStock: true,
    featured: false,
    designStyle: "bold",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_MUG3"
  },
  {
    id: "mug-small-wins",
    brand: "askdogood",
    name: "The \"Small Wins\" Mug",
    category: "mugs",
    price: 18,
    description: "Small wins compound. Beautiful botanical design with calming wellness aesthetic and elegant typography.",
    image: "https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_small_wins.webp",
    colors: ["Cream"],
    inStock: true,
    featured: false,
    designStyle: "holistic",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_MUG4"
  },
  {
    id: "mug-therapy",
    brand: "askdogood",
    name: "The \"Therapy\" Mug",
    category: "mugs",
    price: 18,
    description: "Therapy saved my life. Clean minimalist design celebrating mental health and healing through therapy.",
    image: "https://askdogoodassets.blob.core.windows.net/images/merch/mockup_mug_therapy.webp",
    colors: ["White"],
    inStock: true,
    featured: true,
    designStyle: "minimalist",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_MUG5"
  },

  // T-SHIRTS
  {
    id: "tshirt-progress",
    brand: "askdogood",
    name: "The \"Progress\" Tee",
    category: "tshirts",
    price: 28,
    description: "Progress over perfection every damn time. Comfortable oversized fit with vintage-inspired design.",
    image: "https://askdogoodassets.blob.core.windows.net/images/merch/mockup_tshirt_progress.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Cream"],
    inStock: true,
    featured: true,
    designStyle: "bold",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_TEE1"
  },
  {
    id: "tshirt-healing-loud",
    brand: "askdogood",
    name: "The \"Healing Out Loud\" Tee",
    category: "tshirts",
    price: 28,
    description: "Healing out loud. Community-focused design with modern mixed typography and cultural authenticity.",
    image: "/images/merch/mockup_tshirt_healing_loud.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["White"],
    inStock: true,
    featured: false,
    designStyle: "bold",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_TEE2"
  },
  {
    id: "tshirt-structure",
    brand: "askdogood",
    name: "The \"Structure\" Tee",
    category: "tshirts",
    price: 28,
    description: "Structure over motivation. Clean, empowering design in warm terracotta with bold typography.",
    image: "/images/merch/mockup_tshirt_structure.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Terracotta"],
    inStock: true,
    featured: true,
    designStyle: "minimalist",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_TEE3"
  },
  {
    id: "tshirt-chosen",
    brand: "askdogood",
    name: "The \"I Chose Me\" Tee",
    category: "tshirts",
    price: 28,
    description: "I chose me. Ultra-clean minimalist design with gold star accent. Powerful self-love statement.",
    image: "/images/merch/mockup_tshirt_chosen.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Black"],
    inStock: true,
    featured: true,
    designStyle: "minimalist",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_TEE4"
  },
  {
    id: "tshirt-no-apologies",
    brand: "askdogood",
    name: "The \"No Apologies\" Tee",
    category: "tshirts",
    price: 28,
    description: "No apologies. Bold artsy design with distressed brush strokes and paint splatter. Edgy street art aesthetic.",
    image: "/images/merch/mockup_tshirt_no_apologies.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["White"],
    inStock: true,
    featured: false,
    designStyle: "artsy",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_TEE5"
  },

  // HOODIES
  {
    id: "hoodie-boundaries",
    brand: "askdogood",
    name: "The \"Boundaries\" Hoodie",
    category: "hoodies",
    price: 48,
    description: "Boundaries are beautiful. Geometric design with gold accents. Streetwear meets wellness.",
    image: "/images/merch/mockup_hoodie_boundaries.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Black"],
    inStock: true,
    featured: true,
    designStyle: "minimalist",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_HOODIE1"
  },
  {
    id: "hoodie-rest",
    brand: "askdogood",
    name: "The \"Rest\" Hoodie",
    category: "hoodies",
    price: 48,
    description: "Rest is productive too. Cozy oversized fit with botanical moon design. Perfect for self-care days.",
    image: "/images/merch/mockup_hoodie_rest.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Sage Green"],
    inStock: true,
    featured: false,
    designStyle: "holistic",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_HOODIE2"
  },
  {
    id: "hoodie-magic",
    brand: "askdogood",
    name: "The \"Black Girl Magic\" Hoodie",
    category: "hoodies",
    price: 48,
    description: "Black girl magic. Cute cartoon design with crown and sparkles. Empowering and whimsical.",
    image: "/images/merch/mockup_hoodie_magic.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Purple"],
    inStock: true,
    featured: true,
    designStyle: "cartoon",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_HOODIE3"
  },
  {
    id: "hoodie-vibes",
    brand: "askdogood",
    name: "The \"Good Vibes\" Hoodie",
    category: "hoodies",
    price: 48,
    description: "Good vibes only. Artsy abstract design with paint splatters and flowing lines. Creative and expressive.",
    image: "/images/merch/mockup_hoodie_vibes.webp",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: ["Cream"],
    inStock: true,
    featured: false,
    designStyle: "artsy",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_HOODIE4"
  },

  // TOTE BAGS
  {
    id: "tote-ancestral",
    brand: "askdogood",
    name: "The \"Ancestral Strength\" Tote",
    category: "totes",
    price: 22,
    description: "Ancestral strength, modern healing. Vintage badge design with African-inspired patterns. Heavy-duty canvas.",
    image: "/images/merch/mockup_tote_ancestral.webp",
    colors: ["Natural Canvas"],
    inStock: true,
    featured: true,
    designStyle: "holistic",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_TOTE1"
  },
  {
    id: "tote-community",
    brand: "askdogood",
    name: "The \"Community\" Tote",
    category: "totes",
    price: 22,
    description: "We rise by lifting each other. Community-focused design with interconnected hands motif.",
    image: "/images/merch/mockup_tote_community.webp",
    colors: ["Black"],
    inStock: true,
    featured: false,
    designStyle: "minimalist",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_TOTE2"
  },
  {
    id: "tote-plant-powered",
    brand: "askdogood",
    name: "The \"Plant Powered\" Tote",
    category: "totes",
    price: 22,
    description: "Plant powered. Clean minimalist design celebrating plant-based healing and holistic wellness.",
    image: "/images/merch/mockup_tote_plant_powered.webp",
    colors: ["Natural Canvas"],
    inStock: true,
    featured: true,
    designStyle: "holistic",
    stripeLink: "https://buy.stripe.com/test_PLACEHOLDER_TOTE3"
  },
];

export const merchCategories = [
  { id: "all", name: "All Merch", count: merchProducts.length },
  { id: "mugs", name: "Mugs", count: merchProducts.filter(p => p.category === "mugs").length },
  { id: "tshirts", name: "T-Shirts", count: merchProducts.filter(p => p.category === "tshirts").length },
  { id: "hoodies", name: "Hoodies", count: merchProducts.filter(p => p.category === "hoodies").length },
  { id: "totes", name: "Tote Bags", count: merchProducts.filter(p => p.category === "totes").length },
];

export const featuredMerch = merchProducts.filter(p => p.featured);

export const hasValidCheckoutUrl = (url?: string): boolean => {
  if (!url) return false;
  const normalized = url.trim();
  if (!normalized) return false;

  const blockedTokens = ["PLACEHOLDER", "test_PLACEHOLDER", "TODO", "TBD"];
  return blockedTokens.every((token) => !normalized.includes(token));
};

export const merchProductsNeedingCheckoutUrls = merchProducts.filter(
  (product) => !hasValidCheckoutUrl(product.checkoutUrl) && !hasValidCheckoutUrl(product.stripeLink)
);
