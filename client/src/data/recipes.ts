export interface Recipe {
  id: string;
  name: string;
  prepTime: string;
  servings: number;
  cost: string;
  image: string;
  tags: string[];
  description: string;
  macros: {
    protein: string;
    carbs: string;
    fat: string;
    calories: string;
  };
  ingredients: string[];
  instructions: string[];
}

export const recipes: Recipe[] = [
  {
    id: "rainbow-quinoa-bowl",
    name: "Rainbow Quinoa Power Bowl",
    prepTime: "15 min",
    servings: 4,
    cost: "$12",
    image: "/recipe-quinoa-bowl.png",
    tags: ["Anti-Inflammatory", "High Protein", "Meal Prep Friendly"],
    description: "Nutrient-dense bowl with quinoa, roasted veggies, chickpeas, and tahini dressing",
    macros: { protein: "18g", carbs: "45g", fat: "14g", calories: "380" },
    ingredients: [
      "1 cup quinoa (dry)",
      "1 can (15 oz) chickpeas, drained and roasted",
      "1 red bell pepper, sliced",
      "1 cup purple cabbage, shredded",
      "2 carrots, julienned",
      "1 cup broccoli florets",
      "3 tbsp tahini",
      "2 tbsp lemon juice",
      "1 tbsp olive oil",
      "Salt, pepper, and garlic powder to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Cook quinoa according to package directions. Set aside.",
      "Preheat oven to 400°F. Toss chickpeas with olive oil, salt, and pepper. Roast for 20 minutes.",
      "Roast bell pepper, broccoli, and carrots at 400°F for 15 minutes.",
      "Make tahini dressing: whisk tahini, lemon juice, water, salt, and garlic powder.",
      "Assemble bowls: divide quinoa among 4 bowls, top with roasted veggies, chickpeas, and cabbage.",
      "Drizzle with tahini dressing and garnish with fresh parsley.",
      "Store in airtight containers for up to 4 days."
    ]
  },
  {
    id: "sweet-potato-tacos",
    name: "Sweet Potato & Black Bean Tacos",
    prepTime: "25 min",
    servings: 6,
    cost: "$10",
    image: "/recipe-sweet-potato-tacos.png",
    tags: ["Budget-Friendly", "Kid-Friendly", "Batch Cook"],
    description: "Flavorful plant-based tacos with cumin-spiced sweet potatoes and black beans",
    macros: { protein: "12g", carbs: "52g", fat: "8g", calories: "320" },
    ingredients: [
      "2 large sweet potatoes, diced",
      "1 can (15 oz) black beans, drained",
      "2 tsp cumin",
      "1 tsp chili powder",
      "12 corn tortillas",
      "1 red onion, diced",
      "Fresh cilantro",
      "2 limes",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 425°F.",
      "Toss diced sweet potatoes with olive oil, cumin, chili powder, salt, and pepper.",
      "Spread on baking sheet and roast for 20-25 minutes until tender and slightly crispy.",
      "Warm black beans in a pot with a pinch of cumin.",
      "Warm tortillas in a dry skillet or microwave.",
      "Assemble tacos: fill each tortilla with sweet potatoes, black beans, diced onion, and cilantro.",
      "Squeeze fresh lime juice over tacos before serving.",
      "Store components separately for meal prep."
    ]
  },
  {
    id: "green-smoothie",
    name: "Garden Fresh Green Smoothie",
    prepTime: "5 min",
    servings: 2,
    cost: "$5",
    image: "/recipe-green-smoothie.png",
    tags: ["Quick", "Thyroid Support", "Breakfast"],
    description: "Kale, banana, mango, coconut water, and chia seeds for morning energy",
    macros: { protein: "6g", carbs: "35g", fat: "4g", calories: "200" },
    ingredients: [
      "2 cups fresh kale, stems removed",
      "1 ripe banana",
      "1 cup frozen mango chunks",
      "1.5 cups coconut water",
      "2 tbsp chia seeds",
      "1 tbsp hemp seeds (optional)",
      "Ice cubes as needed"
    ],
    instructions: [
      "Add coconut water to blender first.",
      "Add kale, banana, and mango.",
      "Add chia seeds and hemp seeds.",
      "Blend on high for 60-90 seconds until completely smooth.",
      "Add ice if you prefer a colder, thicker consistency.",
      "Pour into glasses and top with extra chia seeds.",
      "Drink immediately for best nutrition and texture."
    ]
  },
  {
    id: "lentil-curry",
    name: "Lentil & Vegetable Curry",
    prepTime: "40 min",
    servings: 8,
    cost: "$15",
    image: "/recipe-lentil-curry.png",
    tags: ["Freezer-Friendly", "High Fiber", "Autoimmune Protocol"],
    description: "Warming curry with red lentils, spinach, and anti-inflammatory spices",
    macros: { protein: "16g", carbs: "42g", fat: "6g", calories: "290" },
    ingredients: [
      "2 cups red lentils, rinsed",
      "1 can (14 oz) coconut milk",
      "4 cups vegetable broth",
      "3 cups fresh spinach",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tbsp curry powder",
      "1 tsp turmeric",
      "1 tsp ginger, grated",
      "1 can (14 oz) diced tomatoes",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Heat olive oil in large pot over medium heat.",
      "Sauté onion for 5 minutes, then add garlic and ginger for 1 minute.",
      "Add curry powder and turmeric, stir for 30 seconds until fragrant.",
      "Add lentils, vegetable broth, coconut milk, and diced tomatoes.",
      "Bring to boil, then reduce heat and simmer for 25-30 minutes until lentils are tender.",
      "Stir in fresh spinach and cook until wilted (2-3 minutes).",
      "Season with salt and pepper to taste.",
      "Serve over rice or with naan bread. Garnish with fresh cilantro.",
      "Freezes beautifully for up to 3 months."
    ]
  },
  {
    id: "chickpea-salad",
    name: "Mediterranean Chickpea Salad",
    prepTime: "10 min",
    servings: 4,
    cost: "$8",
    image: "/recipe-chickpea-salad.png",
    tags: ["No Cook", "Portable", "High Protein"],
    description: "Chickpeas, cucumbers, tomatoes, red onion with lemon-herb dressing",
    macros: { protein: "14g", carbs: "38g", fat: "10g", calories: "300" },
    ingredients: [
      "2 cans (15 oz each) chickpeas, drained and rinsed",
      "2 cucumbers, diced",
      "2 cups cherry tomatoes, halved",
      "1 red onion, finely diced",
      "1/2 cup fresh parsley, chopped",
      "1/4 cup olive oil",
      "3 tbsp lemon juice",
      "2 tsp dried oregano",
      "1 tsp garlic powder",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a large bowl, combine chickpeas, cucumbers, tomatoes, red onion, and parsley.",
      "In a small bowl, whisk together olive oil, lemon juice, oregano, garlic powder, salt, and pepper.",
      "Pour dressing over salad and toss well to combine.",
      "Let sit for 10 minutes to allow flavors to meld.",
      "Taste and adjust seasoning as needed.",
      "Serve immediately or refrigerate for up to 3 days.",
      "Perfect for meal prep - pack in individual containers for grab-and-go lunches."
    ]
  },
  {
    id: "turmeric-rice",
    name: "Healing Turmeric Rice & Veggies",
    prepTime: "30 min",
    servings: 6,
    cost: "$12",
    image: "/recipe-turmeric-rice.png",
    tags: ["Anti-Inflammatory", "Gluten-Free", "Meal Prep"],
    description: "Golden rice with roasted cauliflower, carrots, and anti-inflammatory spices",
    macros: { protein: "8g", carbs: "48g", fat: "7g", calories: "280" },
    ingredients: [
      "2 cups basmati rice",
      "4 cups vegetable broth",
      "2 tsp turmeric powder",
      "1 tsp cumin",
      "1 head cauliflower, cut into florets",
      "3 large carrots, sliced",
      "3 tbsp olive oil",
      "1 tsp black pepper",
      "1/2 tsp cinnamon",
      "Fresh cilantro for garnish",
      "Salt to taste"
    ],
    instructions: [
      "Preheat oven to 425°F.",
      "Toss cauliflower and carrots with 2 tbsp olive oil, salt, and pepper. Roast for 25 minutes.",
      "Meanwhile, heat 1 tbsp olive oil in a pot over medium heat.",
      "Add rice and toast for 2 minutes, stirring frequently.",
      "Add turmeric, cumin, cinnamon, and black pepper. Stir for 30 seconds.",
      "Add vegetable broth and bring to boil.",
      "Reduce heat to low, cover, and simmer for 15-18 minutes until rice is tender.",
      "Fluff rice with fork and serve topped with roasted vegetables.",
      "Garnish with fresh cilantro. Store in airtight containers for up to 5 days."
    ]
  }
];
