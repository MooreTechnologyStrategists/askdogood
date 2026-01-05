export interface Bundle {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  image: string;
  stripeLink: string;
}

export const gardenToTableBundle: Bundle = {
  id: "garden-to-table-bundle",
  name: "Garden to Table Bundle",
  description: "Complete collection of 50+ plant-based, anti-inflammatory recipes designed to help you heal from autoimmune conditions and thyroid issues. Each recipe includes detailed instructions, nutritional information, and meal prep tips.",
  price: 37,
  originalPrice: 97,
  features: [
    "50+ Anti-Inflammatory Recipes",
    "Complete Nutritional Information",
    "Meal Prep Instructions",
    "Shopping Lists Included",
    "Thyroid-Supportive Ingredients",
    "Budget-Friendly Options",
    "Freezer-Friendly Recipes",
    "Lifetime Access & Updates"
  ],
  image: "/bundle-garden-to-table-v2.png",
  stripeLink: "https://buy.stripe.com/6oUfZgbuId18g7N8Kk77O03"
};

export const bundles: Bundle[] = [gardenToTableBundle];
