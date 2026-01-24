import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, X, Plus } from 'lucide-react';

interface Recipe {
  id: number;
  title: string;
  category: string | null;
  calories: number | null;
}

interface MealSlot {
  day: string;
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  recipe: Recipe | null;
}

interface MealPlanningCalendarProps {
  recipes: Recipe[];
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MEALS = [
  { key: 'breakfast', label: 'Breakfast', color: 'bg-amber-100 dark:bg-amber-900/30' },
  { key: 'lunch', label: 'Lunch', color: 'bg-emerald-100 dark:bg-emerald-900/30' },
  { key: 'dinner', label: 'Dinner', color: 'bg-purple-100 dark:bg-purple-900/30' },
  { key: 'snack', label: 'Snack', color: 'bg-pink-100 dark:bg-pink-900/30' },
];

export default function MealPlanningCalendar({ recipes }: MealPlanningCalendarProps) {
  const [mealPlan, setMealPlan] = useState<MealSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; meal: string } | null>(null);

  const addRecipeToSlot = (day: string, meal: string, recipe: Recipe) => {
    const newSlot: MealSlot = { day, meal: meal as any, recipe };
    setMealPlan(prev => [...prev.filter(s => !(s.day === day && s.meal === meal)), newSlot]);
    setSelectedSlot(null);
  };

  const removeRecipeFromSlot = (day: string, meal: string) => {
    setMealPlan(prev => prev.filter(s => !(s.day === day && s.meal === meal)));
  };

  const getRecipeForSlot = (day: string, meal: string) => {
    return mealPlan.find(s => s.day === day && s.meal === meal)?.recipe;
  };

  const getTotalCalories = (day: string) => {
    return mealPlan
      .filter(s => s.day === day && s.recipe?.calories)
      .reduce((sum, s) => sum + (s.recipe?.calories || 0), 0);
  };

  const getWeeklyCalories = () => {
    return mealPlan.reduce((sum, s) => sum + (s.recipe?.calories || 0), 0);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Weekly Meal Plan
              </CardTitle>
              <CardDescription>Drag recipes to plan your week</CardDescription>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Weekly Total</p>
              <p className="text-2xl font-bold text-primary">{getWeeklyCalories().toLocaleString()} cal</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 bg-muted/50 text-left font-semibold">Meal</th>
                  {DAYS.map(day => (
                    <th key={day} className="border p-2 bg-muted/50 text-center font-semibold">
                      <div>{day}</div>
                      <div className="text-xs font-normal text-muted-foreground mt-1">
                        {getTotalCalories(day)} cal
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MEALS.map(meal => (
                  <tr key={meal.key}>
                    <td className="border p-2 font-medium">{meal.label}</td>
                    {DAYS.map(day => {
                      const recipe = getRecipeForSlot(day, meal.key);
                      return (
                        <td key={`${day}-${meal.key}`} className={`border p-2 ${meal.color}`}>
                          {recipe ? (
                            <div className="relative group">
                              <div className="text-sm font-medium">{recipe.title}</div>
                              {recipe.calories && (
                                <div className="text-xs text-muted-foreground">{recipe.calories} cal</div>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                className="absolute -top-1 -right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => removeRecipeFromSlot(day, meal.key)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                              onClick={() => setSelectedSlot({ day, meal: meal.key })}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Recipe Selector Modal */}
      {selectedSlot && (
        <Card className="fixed inset-4 z-50 max-w-2xl mx-auto my-auto h-fit max-h-[80vh] overflow-auto shadow-2xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Select Recipe for {selectedSlot.day} {selectedSlot.meal}</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setSelectedSlot(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {recipes.map(recipe => (
                <div
                  key={recipe.id}
                  className="p-3 border rounded-lg hover:border-primary cursor-pointer transition-colors"
                  onClick={() => addRecipeToSlot(selectedSlot.day, selectedSlot.meal, recipe)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{recipe.title}</p>
                      {recipe.category && (
                        <Badge variant="secondary" className="mt-1">{recipe.category}</Badge>
                      )}
                    </div>
                    {recipe.calories && (
                      <p className="text-sm text-muted-foreground">{recipe.calories} cal</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      {selectedSlot && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSelectedSlot(null)} />}
    </div>
  );
}
