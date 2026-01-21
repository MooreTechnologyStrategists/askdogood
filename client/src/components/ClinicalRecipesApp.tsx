import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Clock, Users, Flame, Save, X, ChefHat, Edit, Trash2 } from 'lucide-react';
import { apiClient } from '@/lib/api';

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
  imageUrl: string | null;
  category: string | null;
  tags: string | null;
  isPremium: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function ClinicalRecipesApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showDetailView, setShowDetailView] = useState(false);
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
    category: '',
    tags: '',
    imageUrl: ''
  });

  // Fetch recipes
  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ['recipes'],
    queryFn: async () => {
      const response = await apiClient.recipes.getAll.query({ includePremium: true });
      return response as Recipe[];
    }
  });

  // Create/Update mutation
  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiClient.recipes.create.mutate(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
      resetForm();
      setShowCreateForm(false);
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...data }: any) => {
      return await apiClient.recipes.update.mutate({ id, ...data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
      resetForm();
      setShowCreateForm(false);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return await apiClient.recipes.delete.mutate({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
    }
  });

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
      category: '',
      tags: '',
      imageUrl: ''
    });
    setSelectedRecipe(null);
  };

  const handleEdit = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setFormData({
      title: recipe.title,
      description: recipe.description || '',
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      prepTime: recipe.prepTime?.toString() || '',
      cookTime: recipe.cookTime?.toString() || '',
      servings: recipe.servings?.toString() || '',
      calories: recipe.calories?.toString() || '',
      category: recipe.category || '',
      tags: recipe.tags || '',
      imageUrl: recipe.imageUrl || ''
    });
    setShowDetailView(false);
    setShowCreateForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipeData = {
      title: formData.title,
      description: formData.description || null,
      ingredients: formData.ingredients,
      instructions: formData.instructions,
      prepTime: formData.prepTime ? parseInt(formData.prepTime) : null,
      cookTime: formData.cookTime ? parseInt(formData.cookTime) : null,
      servings: formData.servings ? parseInt(formData.servings) : null,
      calories: formData.calories ? parseInt(formData.calories) : null,
      imageUrl: formData.imageUrl || null,
      category: formData.category || null,
      tags: formData.tags || null,
    };

    if (selectedRecipe) {
      updateMutation.mutate({ id: selectedRecipe.id, ...recipeData });
    } else {
      createMutation.mutate(recipeData);
    }
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ChefHat className="w-12 h-12 mx-auto mb-4 text-primary animate-bounce" />
          <p className="text-muted-foreground">Loading recipes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container py-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Clinical Food RX</h1>
              <p className="text-muted-foreground">
                Thyroid-supporting, anti-inflammatory recipes designed for healing
              </p>
            </div>
            <Button onClick={() => setShowCreateForm(true)} size="lg" className="gap-2">
              <Plus className="w-5 h-5" />
              Add Recipe
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Create/Edit Form Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
            <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{selectedRecipe ? 'Edit' : 'Create'} Recipe</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      setShowCreateForm(false);
                      resetForm();
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <CardDescription>
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
                    onClick={() => {
                      setShowCreateForm(false);
                      resetForm();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending} className="gap-2">
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
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">{selectedRecipe.title}</CardTitle>
                    {selectedRecipe.description && (
                      <CardDescription className="text-base">{selectedRecipe.description}</CardDescription>
                    )}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedRecipe.category && (
                        <Badge variant="outline">{selectedRecipe.category}</Badge>
                      )}
                      {selectedRecipe.isPremium && (
                        <Badge variant="secondary">Premium</Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleEdit(selectedRecipe)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
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
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}

              <CardContent className="space-y-6 mt-4">
                {/* Recipe Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-muted rounded-lg">
                  {selectedRecipe.prepTime && (
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-medium">Prep Time</p>
                      <p className="text-sm text-muted-foreground">{selectedRecipe.prepTime} min</p>
                    </div>
                  )}
                  {selectedRecipe.cookTime && (
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-medium">Cook Time</p>
                      <p className="text-sm text-muted-foreground">{selectedRecipe.cookTime} min</p>
                    </div>
                  )}
                  {selectedRecipe.servings && (
                    <div className="text-center">
                      <Users className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-medium">Servings</p>
                      <p className="text-sm text-muted-foreground">{selectedRecipe.servings}</p>
                    </div>
                  )}
                  {selectedRecipe.calories && (
                    <div className="text-center">
                      <Flame className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-medium">Calories</p>
                      <p className="text-sm text-muted-foreground">{selectedRecipe.calories}</p>
                    </div>
                  )}
                </div>

                {/* Ingredients */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.split('\n').filter(i => i.trim()).map((ingredient, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{ingredient.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Instructions</h3>
                  <ol className="space-y-3">
                    {selectedRecipe.instructions.split('\n').filter(i => i.trim()).map((instruction, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                          {idx + 1}
                        </span>
                        <span className="flex-1 pt-0.5">{instruction.replace(/^\d+\.\s*/, '').trim()}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tags */}
                {selectedRecipe.tags && (
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRecipe.tags.split(',').map((tag, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tag.trim()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleEdit(selectedRecipe)}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Recipe
                </Button>
                <Button 
                  variant="destructive"
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

        {/* Recipe Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <ChefHat className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm ? 'Try a different search term' : 'Get started by adding your first recipe!'}
              </p>
              {!searchTerm && (
                <Button onClick={() => setShowCreateForm(true)} className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Recipe
                </Button>
              )}
            </div>
          ) : (
            filteredRecipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                {recipe.imageUrl && (
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl">{recipe.title}</CardTitle>
                    {recipe.isPremium && (
                      <Badge variant="secondary" className="shrink-0">Premium</Badge>
                    )}
                  </div>
                  {recipe.category && (
                    <Badge variant="outline" className="w-fit">{recipe.category}</Badge>
                  )}
                  {recipe.description && (
                    <CardDescription className="line-clamp-2 mt-2">
                      {recipe.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    {recipe.prepTime && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prepTime + (recipe.cookTime || 0)} min</span>
                      </div>
                    )}
                    {recipe.servings && (
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings} servings</span>
                      </div>
                    )}
                    {recipe.calories && (
                      <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        <span>{recipe.calories} cal</span>
                      </div>
                    )}
                  </div>
                  {recipe.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {recipe.tags.split(',').map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag.trim()}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedRecipe(recipe);
                      setShowDetailView(true);
                    }}
                  >
                    View Recipe
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
