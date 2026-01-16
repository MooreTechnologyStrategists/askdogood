import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, DollarSign } from "lucide-react";
import type { Recipe } from "@/data/recipes";

interface RecipeModalProps {
  recipe: Recipe | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RecipeModal({ recipe, open, onOpenChange }: RecipeModalProps) {
  if (!recipe) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{recipe.name}</DialogTitle>
        </DialogHeader>

        {/* Recipe Image */}
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 items-center">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {recipe.prepTime}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {recipe.servings} servings
          </Badge>
          <Badge className="flex items-center gap-1 bg-green-600">
            <DollarSign className="h-3 w-3" />
            {recipe.cost}
          </Badge>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground">{recipe.description}</p>

        {/* Macros */}
        <div className="grid grid-cols-4 gap-4 p-4 bg-secondary/20 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{recipe.macros.calories}</div>
            <div className="text-sm text-muted-foreground">calories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{recipe.macros.protein}</div>
            <div className="text-sm text-muted-foreground">protein</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{recipe.macros.carbs}</div>
            <div className="text-sm text-muted-foreground">carbs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{recipe.macros.fat}</div>
            <div className="text-sm text-muted-foreground">fat</div>
          </div>
        </div>

        {/* Ingredients */}
        <div>
          <h3 className="text-xl font-bold mb-3">Ingredients</h3>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h3 className="text-xl font-bold mb-3">Instructions</h3>
          <ol className="space-y-3">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="flex-1">{instruction}</span>
              </li>
            ))}
          </ol>
        </div>
      </DialogContent>
    </Dialog>
  );
}
