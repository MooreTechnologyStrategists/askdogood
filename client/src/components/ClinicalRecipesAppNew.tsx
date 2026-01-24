import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus, 
  Heart, 
  Clock, 
  Users, 
  Flame, 
  Filter,
  ChefHat,
  Calendar,
  ShoppingCart,
  TrendingUp,
  X
} from "lucide-react";

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

const CATEGORIES = [
  "All",
  "Smoothies",
  "Main Dishes",
  "Sides",
  "Snacks",
  "Breakfast",
  "Desserts"
];

const DIETARY_FILTERS = [
  { id: "thyroid-friendly", label: "Thyroid Friendly" },
  { id: "anti-inflammatory", label: "Anti-Inflammatory" },
  { id: "plant-based", label: "Plant-Based" },
  { id: "high-protein", label: "High Protein" },
  { id: "low-sodium", label: "Low Sodium" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "dairy-free", label: "Dairy-Free" },
];

export default function ClinicalRecipesAppNew() {
  const queryClient = useQueryClient();
  
  // View states
  const [view, setView] = useState<"browse" | "create" | "detail" | "mealPlan" | "nutrition">("browse");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [calorieRange, setCalorieRange] = useState<[number, number]>([0, 1000]);
  
  // Form state
  const [formData, setFormData] = useState<Partial<Recipe>>({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    prepTime: null,
    cookTime: null,
    servings: null,
    calories: null,
    protein: null,
    carbs: null,
    fat: null,
    fiber: null,
    sodium: null,
    imageUrl: "",
    category: "",
    tags: "",
  });
  
  // Queries
  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => apiClient.recipes.list(),
  });
  
  // Mutations
  const createMutation = useMutation({
    mutationFn: (data: Partial<Recipe>) => apiClient.recipes.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      setView("browse");
      resetForm();
    },
  });
  
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Recipe> }) =>
      apiClient.recipes.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      setView("browse");
      setEditingRecipe(null);
      resetForm();
    },
  });
  
  const deleteMutation = useMutation({
    mutationFn: (id: number) => apiClient.recipes.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      setView("browse");
      setSelectedRecipe(null);
    },
  });
  
  const toggleFavoriteMutation = useMutation({
    mutationFn: (id: number) => apiClient.recipes.toggleFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
    },
  });
  
  // Filter and search logic
  const filteredRecipes = useMemo(() => {
    let filtered = [...recipes];
    
    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description?.toLowerCase().includes(query) ||
        recipe.ingredients.toLowerCase().includes(query) ||
        recipe.tags?.toLowerCase().includes(query)
      );
    }
    
    // Category
    if (categoryFilter !== "All") {
      filtered = filtered.filter(recipe => recipe.category === categoryFilter);
    }
    
    // Dietary filters
    if (dietaryFilters.length > 0) {
      filtered = filtered.filter(recipe => {
        const recipeTags = recipe.tags?.toLowerCase() || "";
        return dietaryFilters.every(filter =>
          recipeTags.includes(filter.toLowerCase())
        );
      });
    }
    
    // Favorites
    if (showFavoritesOnly) {
      filtered = filtered.filter(recipe => recipe.isFavorite);
    }
    
    // Calorie range
    filtered = filtered.filter(recipe => {
      if (!recipe.calories) return true;
      return recipe.calories >= calorieRange[0] && recipe.calories <= calorieRange[1];
    });
    
    return filtered;
  }, [recipes, searchQuery, categoryFilter, dietaryFilters, showFavoritesOnly, calorieRange]);
  
  // Nutrition stats
  const nutritionStats = useMemo(() => {
    const favoriteRecipes = recipes.filter(r => r.isFavorite);
    if (favoriteRecipes.length === 0) return null;
    
    const totalCalories = favoriteRecipes.reduce((sum, r) => sum + (r.calories || 0), 0);
    const totalProtein = favoriteRecipes.reduce((sum, r) => sum + (r.protein || 0), 0);
    const totalCarbs = favoriteRecipes.reduce((sum, r) => sum + (r.carbs || 0), 0);
    const totalFat = favoriteRecipes.reduce((sum, r) => sum + (r.fat || 0), 0);
    const totalFiber = favoriteRecipes.reduce((sum, r) => sum + (r.fiber || 0), 0);
    
    return {
      count: favoriteRecipes.length,
      avgCalories: Math.round(totalCalories / favoriteRecipes.length),
      totalProtein,
      totalCarbs,
      totalFat,
      totalFiber,
    };
  }, [recipes]);
  
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      ingredients: "",
      instructions: "",
      prepTime: null,
      cookTime: null,
      servings: null,
      calories: null,
      protein: null,
      carbs: null,
      fat: null,
      fiber: null,
      sodium: null,
      imageUrl: "",
      category: "",
      tags: "",
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingRecipe) {
      updateMutation.mutate({ id: editingRecipe.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };
  
  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setFormData(recipe);
    setView("create");
  };
  
  const toggleDietaryFilter = (filterId: string) => {
    setDietaryFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <ChefHat className="w-12 h-12 mx-auto text-green-600 animate-pulse" />
          <p className="text-gray-600">Loading your thyroid-friendly recipes...</p>
        </div>
      </div>
    );
  }
  
  // Browse View
  if (view === "browse") {
    return (
      <div className="space-y-6">
        {/* Header with Stats */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Clinical Recipe Library</h2>
            <p className="text-gray-600 mt-1">
              Thyroid-friendly recipes designed for optimal health
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={() => setView("nutrition")}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <TrendingUp className="w-4 h-4" />
              Nutrition Stats
            </Button>
            <Button 
              onClick={() => setView("mealPlan")}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Calendar className="w-4 h-4" />
              Meal Planner
            </Button>
            <Button 
              onClick={() => {
                setEditingRecipe(null);
                resetForm();
                setView("create");
              }}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Plus className="w-4 h-4" />
              Add Recipe
            </Button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-full">
                  <ChefHat className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{recipes.length}</p>
                  <p className="text-sm text-gray-600">Total Recipes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-100 rounded-full">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {recipes.filter(r => r.isFavorite).length}
                  </p>
                  <p className="text-sm text-gray-600">Favorites</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Flame className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {nutritionStats?.avgCalories || 0}
                  </p>
                  <p className="text-sm text-gray-600">Avg Calories</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <ShoppingCart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{filteredRecipes.length}</p>
                  <p className="text-sm text-gray-600">Filtered Results</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search recipes by title, ingredients, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setCategoryFilter(category)}
                    className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                      categoryFilter === category
                        ? "bg-green-600 text-white"
                        : "border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {/* Dietary Filters */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <Label className="text-sm font-medium">Dietary Preferences</Label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {DIETARY_FILTERS.map((filter) => (
                    <Badge
                      key={filter.id}
                      variant={dietaryFilters.includes(filter.id) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => toggleDietaryFilter(filter.id)}
                    >
                      {filter.label}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  className={`flex items-center gap-2 px-3 py-1 text-sm rounded-lg ${
                    showFavoritesOnly
                      ? "bg-pink-600 text-white"
                      : "border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <Heart className="w-4 h-4" />
                  Favorites Only
                </Button>
                
                <div className="flex items-center gap-2">
                  <Label className="text-sm">Max Calories:</Label>
                  <Input
                    type="number"
                    value={calorieRange[1]}
                    onChange={(e) => setCalorieRange([0, parseInt(e.target.value) || 1000])}
                    className="w-24"
                  />
                </div>
                
                {(searchQuery || categoryFilter !== "All" || dietaryFilters.length > 0 || showFavoritesOnly) && (
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setCategoryFilter("All");
                      setDietaryFilters([]);
                      setShowFavoritesOnly(false);
                      setCalorieRange([0, 1000]);
                    }}
                    className="flex items-center gap-2 px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 rounded-lgesOnly(false);
                      setCalorieRange([0, 1000]);
                    }}
                    className="gap-2"
                  >
                    <X className="w-4 h-4" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Recipe Grid */}
        {filteredRecipes.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <ChefHat className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No recipes found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or create a new recipe
              </p>
              <Button onClick={() => setView("create")}>
                <Plus className="w-4 h-4 mr-2" />
                Create Recipe
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <Card
                key={recipe.id}
                className="hover:shadow-lg transition-shadow cursor-pointer rounded-3xl overflow-hidden"
                onClick={() => {
                  setSelectedRecipe(recipe);
                  setView("detail");
                }}
              >
                {recipe.imageUrl && (
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <ChefHat className="w-16 h-16 text-green-600" />
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{recipe.title}</CardTitle>
                      <CardDescription className="mt-1 line-clamp-2">
                        {recipe.description}
                      </CardDescription>
                    </div>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavoriteMutation.mutate(recipe.id);
                      }}
                      className="ml-2 p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          recipe.isFavorite
                            ? "fill-pink-500 text-pink-500"
                            : "text-gray-400"
                        }`}
                      />
                    </Button>
                  </div>
                  
                  {recipe.category && (
                    <Badge variant="outline" className="w-fit mt-2">
                      {recipe.category}
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    {recipe.prepTime && (
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prepTime + (recipe.cookTime || 0)}m</span>
                      </div>
                    )}
                    {recipe.servings && (
                      <div className="flex items-center gap-1 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings}</span>
                      </div>
                    )}
                    {recipe.calories && (
                      <div className="flex items-center gap-1 text-gray-600">
                        <Flame className="w-4 h-4" />
                        <span>{recipe.calories}</span>
                      </div>
                    )}
                  </div>
                  
                  {recipe.tags && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {recipe.tags.split(",").slice(0, 3).map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag.trim()}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  // Create/Edit View
  if (view === "create") {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => setView("browse")}>
            ← Back
          <Button 
            onClick={() => setView("browse")}
            className="px-3 py-2 hover:bg-gray-100 rounded-lg"
          >ssName="text-3xl font-bold text-gray-900">
              {editingRecipe ? "Edit Recipe" : "Create New Recipe"}
            </h2>
            <p className="text-gray-600 mt-1">
              Add a thyroid-friendly recipe to your collection
            </p>
          </div>
        </div>
        
        <Card className="rounded-3xl">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="ingredients">Ingredients & Steps</TabsTrigger>
                  <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basic" className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="title">Recipe Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      required
                      placeholder="e.g., Green Goddess Smoothie"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Brief description of the recipe and its benefits"
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={formData.category || ""}
                        onValueChange={(value) =>
                          setFormData({ ...formData, category: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.filter(c => c !== "All").map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="imageUrl">Image URL (optional)</Label>
                      <Input
                        id="imageUrl"
                        value={formData.imageUrl || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, imageUrl: e.target.value })
                        }
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={formData.tags || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, tags: e.target.value })
                      }
                      placeholder="thyroid-friendly, anti-inflammatory, quick"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="prepTime">Prep Time (min)</Label>
                      <Input
                        id="prepTime"
                        type="number"
                        value={formData.prepTime || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            prepTime: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="cookTime">Cook Time (min)</Label>
                      <Input
                        id="cookTime"
                        type="number"
                        value={formData.cookTime || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cookTime: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="servings">Servings</Label>
                      <Input
                        id="servings"
                        type="number"
                        value={formData.servings || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            servings: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="ingredients" className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="ingredients">Ingredients *</Label>
                    <Textarea
                      id="ingredients"
                      value={formData.ingredients}
                      onChange={(e) =>
                        setFormData({ ...formData, ingredients: e.target.value })
                      }
                      required
                      placeholder="One ingredient per line&#10;1 cup spinach&#10;1/2 avocado&#10;1 banana"
                      rows={8}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="instructions">Instructions *</Label>
                    <Textarea
                      id="instructions"
                      value={formData.instructions}
                      onChange={(e) =>
                        setFormData({ ...formData, instructions: e.target.value })
                      }
                      required
                      placeholder="Step-by-step instructions&#10;1. Combine all ingredients in blender&#10;2. Blend until smooth&#10;3. Serve immediately"
                      rows={10}
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="nutrition" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="calories">Calories</Label>
                      <Input
                        id="calories"
                        type="number"
                        value={formData.calories || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            calories: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="protein">Protein (g)</Label>
                      <Input
                        id="protein"
                        type="number"
                        value={formData.protein || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            protein: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="carbs">Carbs (g)</Label>
                      <Input
                        id="carbs"
                        type="number"
                        value={formData.carbs || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            carbs: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="fat">Fat (g)</Label>
                      <Input
                        id="fat"
                        type="number"
                        value={formData.fat || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fat: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="fiber">Fiber (g)</Label>
                      <Input
                        id="fiber"
                        type="number"
                        value={formData.fiber || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fiber: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="sodium">Sodium (mg)</Label>
                      <Input
                        id="sodium"
                        type="number"
                        value={formData.sodium || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            sodium: e.target.value ? parseInt(e.target.value) : null,
                          })
                        }
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  disabled={createMupx-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={createMutation.isPending || updateMutation.isPending}
                >
                  {editingRecipe ? "Update Recipe" : "Create Recipe"}
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setView("browse");
                    setEditingRecipe(null);
                    resetForm();
                  }}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Detail View
  if (view === "detail" && selectedRecipe) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div class
            onClick={() => setView("browse")}
            className="px-3 py-2 hover:bg-gray-100 rounded-lg"
          >
            ← Back to Recipes
          </Button>
          <div className="flex gap-2">
            <Button
              onClick={() => toggleFavoriteMutation.mutate(selectedRecipe.id)}
              className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Heart
                className={`w-4 h-4 ${
                  selectedRecipe.isFavorite
                    ? "fill-pink-500 text-pink-500"
                    : "text-gray-400"
                }`}
              />
            </Button>
            <Button
              onClick={() => handleEdit(selectedRecipe)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                if (confirm("Delete this recipe?")) {
                  deleteMutation.mutate(selectedRecipe.id);
                }
              }}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"}
              }}
            >
              Delete
            </Button>
          </div>
        </div>
        
        <Card className="rounded-3xl">
          <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
            <ChefHat className="w-24 h-24 text-green-600" />
          </div>
          
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-3xl">{selectedRecipe.title}</CardTitle>
                {selectedRecipe.description && (
                  <CardDescription className="mt-2 text-base">
                    {selectedRecipe.description}
                  </CardDescription>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedRecipe.category && (
                <Badge variant="default">{selectedRecipe.category}</Badge>
              )}
              {selectedRecipe.tags?.split(",").map((tag, idx) => (
                <Badge key={idx} variant="secondary">
                  {tag.trim()}
                </Badge>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl">
              {selectedRecipe.prepTime && (
                <div className="text-center">
                  <Clock className="w-5 h-5 mx-auto text-gray-600 mb-1" />
                  <p className="text-sm font-medium">{selectedRecipe.prepTime}m prep</p>
                </div>
              )}
              {selectedRecipe.cookTime && (
                <div className="text-center">
                  <Flame className="w-5 h-5 mx-auto text-gray-600 mb-1" />
                  <p className="text-sm font-medium">{selectedRecipe.cookTime}m cook</p>
                </div>
              )}
              {selectedRecipe.servings && (
                <div className="text-center">
                  <Users className="w-5 h-5 mx-auto text-gray-600 mb-1" />
                  <p className="text-sm font-medium">{selectedRecipe.servings} servings</p>
                </div>
              )}
              {selectedRecipe.calories && (
                <div className="text-center">
                  <Flame className="w-5 h-5 mx-auto text-gray-600 mb-1" />
                  <p className="text-sm font-medium">{selectedRecipe.calories} cal</p>
                </div>
              )}
            </div>
            
            {/* Nutrition Facts */}
            {(selectedRecipe.protein || selectedRecipe.carbs || selectedRecipe.fat) && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Nutrition Facts</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {selectedRecipe.protein && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">
                        {selectedRecipe.protein}g
                      </p>
                      <p className="text-xs text-gray-600">Protein</p>
                    </div>
                  )}
                  {selectedRecipe.carbs && (
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <p className="text-2xl font-bold text-amber-600">
                        {selectedRecipe.carbs}g
                      </p>
                      <p className="text-xs text-gray-600">Carbs</p>
                    </div>
                  )}
                  {selectedRecipe.fat && (
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">
                        {selectedRecipe.fat}g
                      </p>
                      <p className="text-xs text-gray-600">Fat</p>
                    </div>
                  )}
                  {selectedRecipe.fiber && (
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">
                        {selectedRecipe.fiber}g
                      </p>
                      <p className="text-xs text-gray-600">Fiber</p>
                    </div>
                  )}
                  {selectedRecipe.sodium && (
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="text-2xl font-bold text-red-600">
                        {selectedRecipe.sodium}mg
                      </p>
                      <p className="text-xs text-gray-600">Sodium</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
              <div className="p-4 bg-gray-50 rounded-xl">
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.split("\n").map((ingredient, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Instructions */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Instructions</h3>
              <div className="space-y-3">
                {selectedRecipe.instructions.split("\n").map((instruction, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {idx + 1}
                    </div>
                    <p className="flex-1 pt-1">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  // Nutrition Stats View
  if (view === "nutrition") {
    const favoriteRecipes = recipes.filter(r => r.isFavorite);
    
    return (
      <div className="max-w-6xl mx-auto space-y-6">
        <div class
            onClick={() => setView("browse")}
            className="px-3 py-2 hover:bg-gray-100 rounded-lg"
          
          <Button variant="ghost" onClick={() => setView("browse")}>
            ← Back
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Nutrition Dashboard</h2>
            <p className="text-gray-600 mt-1">
              Track your nutrition from favorite recipes
            </p>
          </div>
        </div>
        
        {favoriteRecipes.length === 0 ? (
          <Card className="rounded-3xl">
            <CardContent className="py-12 text-center">
              <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No favorite recipes yet
              </h3>
              <p className="text-gray-600 mb-4">
                Mark recipes as favorites to track their nutrition
              </p>
              <Button onClick={() => setView("browse")}>
                Browse Recipes
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle>Total Favorites</CardTitle>
                  <CardDescription>Recipes you love</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-green-600">
                    {favoriteRecipes.length}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle>Average Calories</CardTitle>
                  <CardDescription>Per favorite recipe</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-blue-600">
                    {nutritionStats?.avgCalories || 0}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle>Total Protein</CardTitle>
                  <CardDescription>From all favorites</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-purple-600">
                    {nutritionStats?.totalProtein || 0}g
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Detailed Nutrition Table */}
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>Favorite Recipes Nutrition</CardTitle>
                <CardDescription>
                  Detailed nutrition information for your favorite recipes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Recipe</th>
                        <th className="text-right p-3">Calories</th>
                        <th className="text-right p-3">Protein</th>
                        <th className="text-right p-3">Carbs</th>
                        <th className="text-right p-3">Fat</th>
                        <th className="text-right p-3">Fiber</th>
                      </tr>
                    </thead>
                    <tbody>
                      {favoriteRecipes.map((recipe) => (
                        <tr key={recipe.id} className="border-b hover:bg-gray-50">
                          <td className="p-3">
                            <button
                              onClick={() => {
                                setSelectedRecipe(recipe);
                                setView("detail");
                              }}
                              className="text-left hover:text-green-600"
                            >
                              {recipe.title}
                            </button>
                          </td>
                          <td className="text-right p-3">{recipe.calories || "-"}</td>
                          <td className="text-right p-3">{recipe.protein || "-"}g</td>
                          <td className="text-right p-3">{recipe.carbs || "-"}g</td>
                          <td className="text-right p-3">{recipe.fat || "-"}g</td>
                          <td className="text-right p-3">{recipe.fiber || "-"}g</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 font-bold">
                        <td className="p-3">TOTALS</td>
                        <td className="text-right p-3">
                          {favoriteRecipes.reduce((sum, r) => sum + (r.calories || 0), 0)}
                        </td>
                        <td className="text-right p-3">
                          {nutritionStats?.totalProtein || 0}g
                        </td>
                        <td className="text-right p-3">
                          {nutritionStats?.totalCarbs || 0}g
                        </td>
                        <td className="text-right p-3">
                          {nutritionStats?.totalFat || 0}g
                        </td>
                        <td className="text-right p-3">
                          {nutritionStats?.totalFiber || 0}g
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }
  
  // Meal Plan View
  if (view === "mealPlan") {
    const favoriteRecipes = recipes.filter(r => r.isFavorite);
    
    return (
            onClick={() => setView("browse")}
            className="px-3 py-2 hover:bg-gray-100 rounded-lg"
          
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => setView("browse")}>
            ← Back
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Meal Planner</h2>
            <p className="text-gray-600 mt-1">
              Plan your week with favorite recipes
            </p>
          </div>
        </div>
        
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Weekly Meal Plan
            </CardTitle>
            <CardDescription>
              Drag and drop your favorite recipes to plan meals
            </CardDescription>
          </CardHeader>
          <CardContent>
            {favoriteRecipes.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-600 mb-4">
                  Mark some recipes as favorites to start meal planning
                </p>
                <Button onClick={() => setView("browse")}>
                  Browse Recipes
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Coming Soon:</strong> Interactive meal planning calendar with drag-and-drop,
                    shopping list generation, and nutrition tracking for each day.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Your Favorite Recipes ({favoriteRecipes.length})</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {favoriteRecipes.map((recipe) => (
                      <div
                        key={recipe.id}
                        className="flex items-center gap-3 p-3 bg-white border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => {
                          setSelectedRecipe(recipe);
                          setView("detail");
                        }}
                      >
                        <ChefHat className="w-8 h-8 text-green-600" />
                        <div className="flex-1">
                          <p className="font-medium">{recipe.title}</p>
                          <p className="text-sm text-gray-600">
                            {recipe.calories || "?"} cal • {recipe.prepTime || "?"}m
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return null;
}
