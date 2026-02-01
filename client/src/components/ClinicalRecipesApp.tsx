import { useState, useEffect, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Clock, Users, Flame, Save, X, ChefHat, Edit, Trash2, Heart, Filter, TrendingUp, Calendar, ShoppingCart } from 'lucide-react';
import { apiClient } from '@/lib/api';
import MealPlanningCalendar from './MealPlanningCalendar';
import ShoppingListGenerator from './ShoppingListGenerator';
import CookingMode from './CookingMode';

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

const CATEGORIES = ['All', 'Smoothies', 'Main Dishes', 'Sides', 'Snacks', 'Breakfast', 'Desserts'];
const DIETARY_FILTERS = [
  { id: 'thyroid-friendly', label: 'Thyroid Friendly' },
  { id: 'anti-inflammatory', label: 'Anti-Inflammatory' },
  { id: 'plant-based', label: 'Plant-Based' },
  { id: 'high-protein', label: 'High Protein' },
  { id: 'low-sodium', label: 'Low Sodium' },
];

export default function ClinicalRecipesApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showDetailView, setShowDetailView] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [viewMode, setViewMode] = useState<'browse' | 'nutrition' | 'meal-plan' | 'shopping'>('browse');
  const [cookingModeRecipe, setCookingModeRecipe] = useState<Recipe | null>(null);
  const [selectedForShopping, setSelectedForShopping] = useState<number[]>([]);
  const queryClient = useQueryClient();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    fiber: '',
    sodium: '',
    category: '',
    tags: '',
    imageUrl: ''
  });

  // Fetch recipes
  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ['recipes'],
    queryFn: () => apiClient.recipes.list()
  });

  // Mutations
  const createMutation = useMutation({
    mutationFn: (data: any) => apiClient.recipes.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
      resetForm();
      setShowCreateForm(false);
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, ...data }: any) => apiClient.recipes.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
      resetForm();
      setShowCreateForm(false);
      setEditingRecipe(null);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => apiClient.recipes.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
      setShowDetailView(false);
      setSelectedRecipe(null);
    }
  });

  const toggleFavoriteMutation = useMutation({
    mutationFn: (id: number) => apiClient.recipes.toggleFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
    }
  });

  // Filter and search logic
  const filteredRecipes = useMemo(() => {
    let filtered = [...recipes];
    
    // Search
    if (searchTerm) {
      const query = searchTerm.toLowerCase();
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description?.toLowerCase().includes(query) ||
        recipe.ingredients.toLowerCase().includes(query) ||
        recipe.tags?.toLowerCase().includes(query)
      );
    }
    
    // Category
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(recipe => recipe.category === categoryFilter);
    }
    
    // Dietary filters
    if (dietaryFilters.length > 0) {
      filtered = filtered.filter(recipe => {
        const recipeTags = recipe.tags?.toLowerCase() || '';
        return dietaryFilters.every(filter =>
          recipeTags.includes(filter.toLowerCase())
        );
      });
    }
    
    // Favorites
    if (showFavoritesOnly) {
      filtered = filtered.filter(recipe => recipe.isFavorite);
    }
    
    return filtered;
  }, [recipes, searchTerm, categoryFilter, dietaryFilters, showFavoritesOnly]);

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
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
      prepTime: '',
      cookTime: '',
      servings: '',
      calories: '',
      protein: '',
      carbs: '',
      fat: '',
      fiber: '',
      sodium: '',
      category: '',
      tags: '',
      imageUrl: ''
    });
    setEditingRecipe(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingRecipe) {
      updateMutation.mutate({ id: editingRecipe.id, ...formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setFormData({
      title: recipe.title,
      description: recipe.description || '',
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      prepTime: recipe.prepTime?.toString() || '',
      cookTime: recipe.cookTime?.toString() || '',
      servings: recipe.servings?.toString() || '',
      calories: recipe.calories?.toString() || '',
      protein: recipe.protein?.toString() || '',
      carbs: recipe.carbs?.toString() || '',
      fat: recipe.fat?.toString() || '',
      fiber: recipe.fiber?.toString() || '',
      sodium: recipe.sodium?.toString() || '',
      category: recipe.category || '',
      tags: recipe.tags || '',
      imageUrl: recipe.imageUrl || ''
    });
    setShowCreateForm(true);
    setShowDetailView(false);
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ChefHat className="w-12 h-12 mx-auto mb-4 text-amber-900 animate-bounce" />
          <p className="text-stone-600">Loading recipes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-gradient-to-br from-amber-900/20 via-orange-900/15 to-stone-800/20">
        <div className="container py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-amber-950 font-serif">Clinical Food RX</h1>
              <p className="text-stone-700">
                Thyroid-supporting, anti-inflammatory recipes designed for healing
              </p>
            </div>
            <Button 
              onClick={() => setShowCreateForm(true)} 
              size="lg" 
              className="gap-2 bg-amber-900 hover:bg-amber-950 text-amber-50"
            >
              <Plus className="w-5 h-5" />
              Add Recipe
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Tabs */}
        <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as any)} className="mb-8">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="browse" className="gap-2">
              <ChefHat className="h-4 w-4" />
              Browse
            </TabsTrigger>
            <TabsTrigger value="meal-plan" className="gap-2">
              <Calendar className="h-4 w-4" />
              Meal Plan
            </TabsTrigger>
            <TabsTrigger value="shopping" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              Shopping List
            </TabsTrigger>
            <TabsTrigger value="nutrition" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              Nutrition
            </TabsTrigger>
          </TabsList>

          {/* Browse Tab */}
          <TabsContent value="browse" className="space-y-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
            <Input
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-stone-300 focus:border-amber-900 focus:ring-amber-900"
            />
          </div>
        </div>

        {/* Create/Edit Form Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-sm flex items-center justify-center p-4">
            <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto border-stone-300 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-amber-950 font-serif">{selectedRecipe ? 'Edit' : 'Create'} Recipe</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:bg-amber-100"
                    onClick={() => {
                      setShowCreateForm(false);
                      resetForm();
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <CardDescription className="text-stone-700">
                  Add a new thyroid-supporting recipe to your collection
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Recipe Title *</label>
                    <Input
                      required
                      placeholder="e.g., Anti-Inflammatory Golden Milk"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <Textarea
                      placeholder="Brief description of this recipe..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Category</label>
                      <Input
                        placeholder="e.g., Breakfast, Smoothie, Dinner"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Tags (comma separated)</label>
                      <Input
                        placeholder="e.g., gluten-free, dairy-free, AIP"
                        value={formData.tags}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Prep (min)</label>
                      <Input
                        type="number"
                        placeholder="15"
                        value={formData.prepTime}
                        onChange={(e) => setFormData({ ...formData, prepTime: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Cook (min)</label>
                      <Input
                        type="number"
                        placeholder="30"
                        value={formData.cookTime}
                        onChange={(e) => setFormData({ ...formData, cookTime: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Servings</label>
                      <Input
                        type="number"
                        placeholder="4"
                        value={formData.servings}
                        onChange={(e) => setFormData({ ...formData, servings: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Calories</label>
                      <Input
                        type="number"
                        placeholder="350"
                        value={formData.calories}
                        onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Ingredients * (one per line)</label>
                    <Textarea
                      required
                      placeholder="1 cup coconut milk&#10;1 tsp turmeric&#10;1 tbsp honey&#10;1/2 tsp black pepper"
                      value={formData.ingredients}
                      onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                      rows={8}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Instructions * (numbered steps)</label>
                    <Textarea
                      required
                      placeholder="1. Heat coconut milk in a small pot&#10;2. Add turmeric and whisk until smooth&#10;3. Simmer for 5 minutes..."
                      value={formData.instructions}
                      onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                      rows={10}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Image URL (optional)</label>
                    <Input
                      type="url"
                      placeholder="https://..."
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 justify-end">
                  <Button 
                    type="button" 
                    variant="outline"
                    className="border-stone-300 hover:bg-stone-100"
                    onClick={() => {
                      setShowCreateForm(false);
                      resetForm();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={createMutation.isPending || updateMutation.isPending} 
                    className="gap-2 bg-amber-900 hover:bg-amber-950 text-amber-50"
                  >
                    <Save className="w-4 h-4" />
                    {(createMutation.isPending || updateMutation.isPending) ? 'Saving...' : 'Save Recipe'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        )}

        {/* Recipe Detail View Modal */}
        {showDetailView && selectedRecipe && (
          <div className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-sm flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto border-stone-300 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2 text-amber-950 font-serif">{selectedRecipe.title}</CardTitle>
                    {selectedRecipe.description && (
                      <CardDescription className="text-base text-stone-700">{selectedRecipe.description}</CardDescription>
                    )}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedRecipe.category && (
                        <Badge variant="outline" className="border-amber-900 text-amber-900">{selectedRecipe.category}</Badge>
                      )}
                      {selectedRecipe.isPremium && (
                        <Badge className="bg-amber-900 text-amber-50">Premium</Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-stone-300 hover:bg-amber-100"
                      onClick={() => handleEdit(selectedRecipe)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-amber-100"
                      onClick={() => {
                        setShowDetailView(false);
                        setSelectedRecipe(null);
                      }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {selectedRecipe.imageUrl && (
                <div className="px-6">
                  <img 
                    src={selectedRecipe.imageUrl} 
                    alt={selectedRecipe.title}
                    className="w-full h-64 object-cover rounded-lg border border-amber-200"
                  />
                </div>
              )}

              <CardContent className="space-y-6">
                {/* Recipe Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  {selectedRecipe.prepTime && (
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-amber-900" />
                      <p className="text-sm font-medium text-amber-950">Prep Time</p>
                      <p className="text-sm text-stone-600">{selectedRecipe.prepTime} min</p>
                    </div>
                  )}
                  {selectedRecipe.cookTime && (
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-amber-900" />
                      <p className="text-sm font-medium text-amber-950">Cook Time</p>
                      <p className="text-sm text-stone-600">{selectedRecipe.cookTime} min</p>
                    </div>
                  )}
                  {selectedRecipe.servings && (
                    <div className="text-center">
                      <Users className="w-5 h-5 mx-auto mb-1 text-amber-900" />
                      <p className="text-sm font-medium text-amber-950">Servings</p>
                      <p className="text-sm text-stone-600">{selectedRecipe.servings}</p>
                    </div>
                  )}
                  {selectedRecipe.calories && (
                    <div className="text-center">
                      <Flame className="w-5 h-5 mx-auto mb-1 text-amber-900" />
                      <p className="text-sm font-medium text-amber-950">Calories</p>
                      <p className="text-sm text-stone-600">{selectedRecipe.calories}</p>
                    </div>
                  )}
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-950 font-serif">Ingredients</h3>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.split('\n').filter(i => i.trim()).map((ingredient, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-900 mt-1">•</span>
                        <span className="text-stone-700">{ingredient.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-950 font-serif">Instructions</h3>
                  <ol className="space-y-3">
                    {selectedRecipe.instructions.split('\n').filter(i => i.trim()).map((instruction, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-900 text-amber-50 flex items-center justify-center text-sm font-semibold">
                          {idx + 1}
                        </span>
                        <span className="flex-1 pt-0.5 text-stone-700">{instruction.replace(/^\d+\.\s*/, '').trim()}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tags */}
                {selectedRecipe.tags && (
                  <div>
                    <h3 className="text-sm font-semibold mb-2 text-amber-950">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRecipe.tags.split(',').map((tag, idx) => (
                        <Badge key={idx} className="bg-stone-200 text-stone-700 hover:bg-stone-300">
                          {tag.trim()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex gap-2 bg-stone-50">
                <Button 
                  variant="outline"
                  className="flex-1 border-stone-300 hover:bg-amber-100"
                  onClick={() => handleEdit(selectedRecipe)}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Recipe
                </Button>
                <Button 
                  variant="destructive"
                  className="bg-red-800 hover:bg-red-900"
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this recipe?')) {
                      deleteMutation.mutate(selectedRecipe.id);
                      setShowDetailView(false);
                      setSelectedRecipe(null);
                    }
                  }}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Recipes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <ChefHat className="w-16 h-16 mx-auto mb-4 text-amber-900" />
              <h3 className="text-xl font-semibold mb-2 text-amber-950">No recipes found</h3>
              <p className="text-stone-600 mb-4">
                {searchTerm ? 'Try a different search term' : 'Get started by adding your first recipe!'}
              </p>
              {!searchTerm && (
                <Button 
                  onClick={() => setShowCreateForm(true)} 
                  className="gap-2 bg-amber-900 hover:bg-amber-950 text-amber-50"
                >
                  <Plus className="w-4 h-4" />
                  Add Recipe
                </Button>
              )}
            </div>
          ) : (
            filteredRecipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden shadow-xl transition-all hover:-translate-y-1 border-stone-300">
                {recipe.imageUrl && (
                  <div className="aspect-video overflow-hidden bg-stone-100">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl text-amber-950 font-serif">{recipe.title}</CardTitle>
                    {recipe.isPremium && (
                      <Badge className="shrink-0 bg-amber-900 text-amber-50">Premium</Badge>
                    )}
                  </div>
                  {recipe.category && (
                    <Badge variant="outline" className="w-fit border-amber-900 text-amber-900">{recipe.category}</Badge>
                  )}
                  {recipe.description && (
                    <CardDescription className="line-clamp-2 mt-2 text-stone-600">
                      {recipe.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-stone-600">
                    {recipe.prepTime && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-amber-900" />
                        <span>{recipe.prepTime + (recipe.cookTime || 0)} min</span>
                      </div>
                    )}
                    {recipe.servings && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-amber-900" />
                        <span>{recipe.servings} servings</span>
                      </div>
                    )}
                    {recipe.calories && (
                      <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4 text-amber-900" />
                        <span>{recipe.calories} cal</span>
                      </div>
                    )}
                  </div>
                  {recipe.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {recipe.tags.split(',').map((tag, idx) => (
                        <Badge key={idx} className="text-xs bg-stone-200 text-stone-700 hover:bg-stone-300">
                          {tag.trim()}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="bg-stone-50">
                  <div className="flex gap-2 w-full">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-amber-50 transition-colors"
                      onClick={() => {
                        setSelectedRecipe(recipe);
                        setShowDetailView(true);
                      }}
                    >
                      View Recipe
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCookingModeRecipe(recipe)}
                      title="Cooking Mode"
                    >
                      <ChefHat className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
          </TabsContent>

          {/* Meal Planning Tab */}
          <TabsContent value="meal-plan">
            <MealPlanningCalendar recipes={recipes} />
          </TabsContent>

          {/* Shopping List Tab */}
          <TabsContent value="shopping">
            <ShoppingListGenerator selectedRecipes={recipes.filter(r => selectedForShopping.includes(r.id))} />
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Select Recipes for Shopping List</CardTitle>
                <CardDescription>Choose recipes to generate your shopping list</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {recipes.map(recipe => (
                  <div key={recipe.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`shop-${recipe.id}`}
                      checked={selectedForShopping.includes(recipe.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedForShopping([...selectedForShopping, recipe.id]);
                        } else {
                          setSelectedForShopping(selectedForShopping.filter(id => id !== recipe.id));
                        }
                      }}
                      className="h-4 w-4"
                    />
                    <label htmlFor={`shop-${recipe.id}`} className="text-sm cursor-pointer flex-1">
                      {recipe.title}
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nutrition Tab */}
          <TabsContent value="nutrition">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Nutrition Dashboard
                </CardTitle>
                <CardDescription>Track your favorite recipes' nutrition stats</CardDescription>
              </CardHeader>
              <CardContent>
                {!nutritionStats || nutritionStats.count === 0 ? (
                  <p className="text-center py-8 text-muted-foreground">
                    Mark recipes as favorites to track their nutrition
                  </p>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Favorite Recipes</p>
                      <p className="text-3xl font-bold text-primary">{nutritionStats.count}</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Avg Calories</p>
                      <p className="text-3xl font-bold">{Math.round(nutritionStats.avgCalories)}</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Protein</p>
                      <p className="text-3xl font-bold">{nutritionStats.totalProtein}g</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Carbs</p>
                      <p className="text-3xl font-bold">{nutritionStats.totalCarbs}g</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Fat</p>
                      <p className="text-3xl font-bold">{nutritionStats.totalFat}g</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Fiber</p>
                      <p className="text-3xl font-bold">{nutritionStats.totalFiber}g</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Cooking Mode */}
        {cookingModeRecipe && (
          <CookingMode recipe={cookingModeRecipe} onClose={() => setCookingModeRecipe(null)} />
        )}
      </div>
    </div>
  );
}
