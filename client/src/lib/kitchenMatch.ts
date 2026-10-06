export function pantryItems(text: string): string[] {
  return [...new Set(text.toLowerCase().split(/[,\n]/).map(item => item.trim()).filter(Boolean))];
}
const normalize = (value: string) => value.toLowerCase().replace(/tomatoes/g, "tomato").replace(/berries/g, "berry").replace(/\bbeans\b/g, "bean").replace(/\bchickpeas\b/g, "chickpea").replace(/\bcarrots\b/g, "carrot").replace(/\bonions\b/g, "onion").replace(/\bpeppers\b/g, "pepper").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
export function hasIngredient(ingredient: string, pantry: string[]): boolean {
  const target = ` ${normalize(ingredient)} `;
  return pantry.some(item => target.includes(` ${normalize(item)} `));
}
export function recipeMatch(ingredients: string[], pantry: string[]) {
  const required = ingredients.filter(item => !/optional|as needed/i.test(item));
  const have = required.filter(item => hasIngredient(item, pantry));
  return { have, missing: required.filter(item => !hasIngredient(item, pantry)) };
}
