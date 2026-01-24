// Enhanced API client for Clinical Recipes with local storage fallback
// This provides full functionality even without a backend

interface Recipe {
  id: number;
  title: string;
  description: string | null;
  ingredients: string;
  instructions: string;
  prepTime: number | null;
  cookTime: number | null;
  servings: number | null;
  calories: number | null;
  protein: number | null;
  carbs: number | null;
  fat: number | null;
  fiber: number | null;
  sodium: number | null;
  imageUrl: string | null;
  category: string | null;
  tags: string | null;
  isPremium: boolean;
  isFavorite?: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ApiClient {
  recipes: {
    list: () => Promise<Recipe[]>;
    create: (data: any) => Promise<Recipe>;
    update: (id: number, data: any) => Promise<Recipe>;
    delete: (id: number) => Promise<void>;
    toggleFavorite: (id: number) => Promise<Recipe>;
  };
}

// Local storage key
const RECIPES_STORAGE_KEY = 'clinicalRecipes';

// Helper functions for local storage
const getRecipesFromStorage = (): Recipe[] => {
  try {
    const stored = localStorage.getItem(RECIPES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : getSampleRecipes();
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return getSampleRecipes();
  }
};

const saveRecipesToStorage = (recipes: Recipe[]): void => {
  try {
    localStorage.setItem(RECIPES_STORAGE_KEY, JSON.stringify(recipes));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Sample recipes with real data
const getSampleRecipes = (): Recipe[] => {
  return [
    {
      id: 1,
      title: "Green Goddess Thyroid Smoothie",
      description: "A nutrient-dense smoothie packed with selenium and zinc to support thyroid function",
      ingredients: "1 cup spinach\n1/2 avocado\n1 banana\n2 Brazil nuts (selenium)\n1 tbsp hemp seeds\n1 cup almond milk\n1/2 tsp spirulina\n1 tsp honey (optional)",
      instructions: "1. Add all ingredients to blender\n2. Blend until smooth and creamy\n3. Serve immediately\n4. Best consumed in the morning for sustained energy",
      prepTime: 5,
      cookTime: 0,
      servings: 1,
      calories: 320,
      protein: 8,
      carbs: 42,
      fat: 15,
      fiber: 10,
      sodium: 120,
      imageUrl: null,
      category: "Smoothies",
      tags: "thyroid-friendly,high-fiber,anti-inflammatory,quick",
      isPremium: false,
      isFavorite: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Black Bean & Quinoa Power Burgers",
      description: "Protein-rich, low-sodium burgers perfect for autoimmune support",
      ingredients: "1 can black beans, drained\n1 cup cooked quinoa\n1/2 cup oat flour\n1/4 cup red onion, diced\n2 cloves garlic, minced\n1 tsp cumin\n1 tsp smoked paprika\n1/4 tsp black pepper\n2 tbsp ground flaxseed + 6 tbsp water",
      instructions: "1. Mix flaxseed with water, let sit 5 minutes\n2. Mash black beans in bowl\n3. Add quinoa, oat flour, onion, garlic, spices\n4. Mix in flax 'egg'\n5. Form into patties\n6. Cook on griddle 5 minutes per side until golden\n7. Serve with lettuce wrap or whole grain bun",
      prepTime: 15,
      cookTime: 10,
      servings: 4,
      calories: 220,
      protein: 12,
      carbs: 35,
      fat: 4,
      fiber: 9,
      sodium: 180,
      imageUrl: null,
      category: "Main Dishes",
      tags: "plant-based,high-protein,low-sodium,meal-prep",
      isPremium: false,
      isFavorite: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Roasted Purple Cabbage & Broccoli Bowl",
      description: "Anti-inflammatory cruciferous vegetables with gut-healing properties",
      ingredients: "2 cups purple cabbage, chopped\n2 cups broccoli florets\n2 tbsp olive oil\n1 tsp turmeric\n1/2 tsp garlic powder\n1/4 tsp black pepper\nPinch of pink Himalayan salt\nLemon wedges for serving",
      instructions: "1. Preheat oven to 425°F\n2. Toss vegetables with olive oil and spices\n3. Spread on parchment-lined baking sheet\n4. Roast 20-25 minutes, stirring halfway\n5. Vegetables should be tender and slightly crispy\n6. Squeeze fresh lemon juice before serving",
      prepTime: 10,
      cookTime: 25,
      servings: 4,
      calories: 95,
      protein: 3,
      carbs: 10,
      fat: 7,
      fiber: 4,
      sodium: 85,
      imageUrl: null,
      category: "Sides",
      tags: "anti-inflammatory,cruciferous,low-calorie,vegan",
      isPremium: false,
      isFavorite: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
};

export const apiClient: ApiClient = {
  recipes: {
    list: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return getRecipesFromStorage();
    },
    
    create: async (data: any) => {
      await new Promise(resolve => setTimeout(resolve, 300));
      const recipes = getRecipesFromStorage();
      const newRecipe: Recipe = {
        ...data,
        id: Math.max(...recipes.map(r => r.id), 0) + 1,
        prepTime: data.prepTime ? parseInt(data.prepTime) : null,
        cookTime: data.cookTime ? parseInt(data.cookTime) : null,
        servings: data.servings ? parseInt(data.servings) : null,
        calories: data.calories ? parseInt(data.calories) : null,
        protein: data.protein ? parseInt(data.protein) : null,
        carbs: data.carbs ? parseInt(data.carbs) : null,
        fat: data.fat ? parseInt(data.fat) : null,
        fiber: data.fiber ? parseInt(data.fiber) : null,
        sodium: data.sodium ? parseInt(data.sodium) : null,
        isPremium: false,
        isFavorite: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const updatedRecipes = [...recipes, newRecipe];
      saveRecipesToStorage(updatedRecipes);
      return newRecipe;
    },
    
    update: async (id: number, data: any) => {
      await new Promise(resolve => setTimeout(resolve, 300));
      const recipes = getRecipesFromStorage();
      const index = recipes.findIndex(r => r.id === id);
      if (index === -1) throw new Error('Recipe not found');
      
      const updatedRecipe: Recipe = {
        ...recipes[index],
        ...data,
        id,
        prepTime: data.prepTime ? parseInt(data.prepTime) : recipes[index].prepTime,
        cookTime: data.cookTime ? parseInt(data.cookTime) : recipes[index].cookTime,
        servings: data.servings ? parseInt(data.servings) : recipes[index].servings,
        calories: data.calories ? parseInt(data.calories) : recipes[index].calories,
        protein: data.protein ? parseInt(data.protein) : recipes[index].protein,
        carbs: data.carbs ? parseInt(data.carbs) : recipes[index].carbs,
        fat: data.fat ? parseInt(data.fat) : recipes[index].fat,
        fiber: data.fiber ? parseInt(data.fiber) : recipes[index].fiber,
        sodium: data.sodium ? parseInt(data.sodium) : recipes[index].sodium,
        updatedAt: new Date().toISOString(),
      };
      
      const updatedRecipes = [...recipes];
      updatedRecipes[index] = updatedRecipe;
      saveRecipesToStorage(updatedRecipes);
      return updatedRecipe;
    },
    
    delete: async (id: number) => {
      await new Promise(resolve => setTimeout(resolve, 300));
      const recipes = getRecipesFromStorage();
      const filtered = recipes.filter(r => r.id !== id);
      saveRecipesToStorage(filtered);
    },
    
    toggleFavorite: async (id: number) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      const recipes = getRecipesFromStorage();
      const index = recipes.findIndex(r => r.id === id);
      if (index === -1) throw new Error('Recipe not found');
      
      const updatedRecipe = {
        ...recipes[index],
        isFavorite: !recipes[index].isFavorite,
        updatedAt: new Date().toISOString(),
      };
      
      const updatedRecipes = [...recipes];
      updatedRecipes[index] = updatedRecipe;
      saveRecipesToStorage(updatedRecipes);
      return updatedRecipe;
    },
  },
};
