import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Timer, Users, Flame } from 'lucide-react';

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
}

interface CookingModeProps {
  recipe: Recipe;
  onClose: () => void;
}

export default function CookingMode({ recipe, onClose }: CookingModeProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const ingredients = recipe.ingredients.split('\n').filter(i => i.trim());
  const steps = recipe.instructions.split('\n').filter(s => s.trim());

  const toggleStep = (index: number) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      toggleStep(currentStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-auto">
      <div className="container max-w-4xl py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">{recipe.title}</h1>
            <div className="flex items-center gap-4 mt-2 text-muted-foreground">
              {recipe.prepTime && (
                <div className="flex items-center gap-1">
                  <Timer className="h-4 w-4" />
                  <span className="text-sm">{recipe.prepTime + (recipe.cookTime || 0)} min</span>
                </div>
              )}
              {recipe.servings && (
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{recipe.servings} servings</span>
                </div>
              )}
              {recipe.calories && (
                <div className="flex items-center gap-1">
                  <Flame className="h-4 w-4" />
                  <span className="text-sm">{recipe.calories} cal</span>
                </div>
              )}
            </div>
          </div>
          <Button variant="ghost" size="lg" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Ingredients Sidebar */}
          <Card className="md:col-span-1">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {ingredients.map((ingredient, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Current Step */}
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-4">
                  <span className="text-sm font-medium text-primary">Step {currentStep + 1}</span>
                </div>
                <p className="text-2xl leading-relaxed">{steps[currentStep]}</p>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="lg"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Previous
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button size="lg" onClick={nextStep}>
                  Next Step
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              ) : (
                <Button size="lg" onClick={onClose} className="bg-green-600 hover:bg-green-700">
                  Done Cooking! 🎉
                </Button>
              )}
            </div>

            {/* All Steps Overview */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">All Steps</h3>
                <div className="space-y-3">
                  {steps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        idx === currentStep
                          ? 'border-primary bg-primary/5'
                          : completedSteps.has(idx)
                          ? 'border-green-500/50 bg-green-500/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setCurrentStep(idx)}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                            completedSteps.has(idx)
                              ? 'bg-green-500 text-white'
                              : idx === currentStep
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {completedSteps.has(idx) ? '✓' : idx + 1}
                        </div>
                        <p className="text-sm flex-1">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
