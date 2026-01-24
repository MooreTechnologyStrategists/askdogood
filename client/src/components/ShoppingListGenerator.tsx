import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingCart, Printer, Download } from 'lucide-react';

interface Recipe {
  id: number;
  title: string;
  ingredients: string;
  servings: number | null;
}

interface ShoppingListGeneratorProps {
  selectedRecipes: Recipe[];
}

interface GroupedIngredients {
  [category: string]: { ingredient: string; checked: boolean }[];
}

export default function ShoppingListGenerator({ selectedRecipes }: ShoppingListGeneratorProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const groupedIngredients = useMemo(() => {
    const allIngredients: string[] = [];
    
    selectedRecipes.forEach(recipe => {
      const ingredients = recipe.ingredients.split('\n').filter(i => i.trim());
      allIngredients.push(...ingredients);
    });

    // Group by category (simple keyword matching)
    const grouped: GroupedIngredients = {
      'Produce': [],
      'Proteins': [],
      'Dairy & Eggs': [],
      'Grains & Pasta': [],
      'Spices & Seasonings': [],
      'Canned & Jarred': [],
      'Other': []
    };

    const produceKeywords = ['tomato', 'lettuce', 'spinach', 'kale', 'carrot', 'onion', 'garlic', 'pepper', 'cucumber', 'avocado', 'lemon', 'lime', 'apple', 'banana', 'berry', 'fruit', 'vegetable', 'broccoli', 'cauliflower', 'cabbage'];
    const proteinKeywords = ['chicken', 'beef', 'pork', 'fish', 'salmon', 'tuna', 'shrimp', 'tofu', 'tempeh', 'beans', 'lentils', 'chickpea', 'quinoa'];
    const dairyKeywords = ['milk', 'cheese', 'yogurt', 'butter', 'cream', 'egg'];
    const grainKeywords = ['rice', 'pasta', 'bread', 'flour', 'oats', 'cereal'];
    const spiceKeywords = ['salt', 'pepper', 'cumin', 'paprika', 'oregano', 'basil', 'thyme', 'cinnamon', 'ginger', 'turmeric', 'cayenne'];
    const cannedKeywords = ['can', 'jar', 'bottle', 'sauce', 'paste', 'stock', 'broth'];

    allIngredients.forEach(ingredient => {
      const lower = ingredient.toLowerCase();
      let categorized = false;

      if (produceKeywords.some(kw => lower.includes(kw))) {
        grouped['Produce'].push({ ingredient, checked: false });
        categorized = true;
      } else if (proteinKeywords.some(kw => lower.includes(kw))) {
        grouped['Proteins'].push({ ingredient, checked: false });
        categorized = true;
      } else if (dairyKeywords.some(kw => lower.includes(kw))) {
        grouped['Dairy & Eggs'].push({ ingredient, checked: false });
        categorized = true;
      } else if (grainKeywords.some(kw => lower.includes(kw))) {
        grouped['Grains & Pasta'].push({ ingredient, checked: false });
        categorized = true;
      } else if (spiceKeywords.some(kw => lower.includes(kw))) {
        grouped['Spices & Seasonings'].push({ ingredient, checked: false });
        categorized = true;
      } else if (cannedKeywords.some(kw => lower.includes(kw))) {
        grouped['Canned & Jarred'].push({ ingredient, checked: false });
        categorized = true;
      }

      if (!categorized) {
        grouped['Other'].push({ ingredient, checked: false });
      }
    });

    // Remove empty categories
    Object.keys(grouped).forEach(key => {
      if (grouped[key].length === 0) {
        delete grouped[key];
      }
    });

    return grouped;
  }, [selectedRecipes]);

  const toggleItem = (ingredient: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(ingredient)) {
        newSet.delete(ingredient);
      } else {
        newSet.add(ingredient);
      }
      return newSet;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    let text = '🛒 SHOPPING LIST\\n\\n';
    text += `Generated from ${selectedRecipes.length} recipes\\n`;
    text += `Date: ${new Date().toLocaleDateString()}\\n\\n`;
    
    Object.entries(groupedIngredients).forEach(([category, items]) => {
      text += `\\n${category.toUpperCase()}:\\n`;
      items.forEach(item => {
        text += `  ${checkedItems.has(item.ingredient) ? '✓' : '☐'} ${item.ingredient}\\n`;
      });
    });

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shopping-list-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (selectedRecipes.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping List Generator
          </CardTitle>
          <CardDescription>Add recipes to generate your shopping list</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            No recipes selected. Browse recipes and add them to generate a shopping list.
          </p>
        </CardContent>
      </Card>
    );
  }

  const totalItems = Object.values(groupedIngredients).reduce((sum, items) => sum + items.length, 0);
  const checkedCount = checkedItems.size;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Shopping List
              </CardTitle>
              <CardDescription>
                {selectedRecipes.length} recipes • {totalItems} items • {checkedCount} checked
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {Object.entries(groupedIngredients).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-3 text-primary">{category}</h3>
              <div className="space-y-2">
                {items.map((item, idx) => (
                  <div key={`${category}-${idx}`} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${category}-${idx}`}
                      checked={checkedItems.has(item.ingredient)}
                      onCheckedChange={() => toggleItem(item.ingredient)}
                    />
                    <label
                      htmlFor={`${category}-${idx}`}
                      className={`text-sm flex-1 cursor-pointer ${
                        checkedItems.has(item.ingredient) ? 'line-through text-muted-foreground' : ''
                      }`}
                    >
                      {item.ingredient}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-base">Selected Recipes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1">
            {selectedRecipes.map(recipe => (
              <li key={recipe.id} className="text-sm">
                • {recipe.title}
                {recipe.servings && <span className="text-muted-foreground ml-2">({recipe.servings} servings)</span>}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
