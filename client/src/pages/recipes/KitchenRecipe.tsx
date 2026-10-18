import RecipeDietStripe from "@/components/RecipeDietStripe";
import { useState } from "react";
import { useParams } from "wouter";
import { Action, PageIntro, Section } from "@/components/Experience";
import recipes from "@/data/newKitchenRecipes.json";
export default function KitchenRecipe() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find(item => item.id === slug);
  const [message, setMessage] = useState("");
  if (!recipe) return <Section title="Recipe not found"><Action href="/clinical-recipes">Browse recipes</Action></Section>;
  const download = () => {
    const text = `${recipe.title}\n${recipe.dietLabel || ""}\n${recipe.minutes} minutes (estimated) · ${recipe.servings} servings\n\nIngredients\n${recipe.ingredients.map(x => `- ${x}`).join("\n")}\n\nInstructions\n${recipe.instructions.map((x,i) => `${i+1}. ${x}`).join("\n")}\n\n${recipe.note}\n\nAskDoGood · New recipe idea; kitchen testing is pending.\n`;
    const url=URL.createObjectURL(new Blob([text],{type:"text/plain;charset=utf-8"})); const a=document.createElement("a"); a.href=url; a.download=`askdogood-${recipe.id}.txt`;a.click();URL.revokeObjectURL(url);setMessage("Recipe downloaded.");
  };
  return <div className="adg-page"><PageIntro eyebrow="AskDoGood kitchen · New recipe idea" title={recipe.title} text={recipe.description} image={recipe.image} alt={recipe.imageAlt || recipe.title}><RecipeDietStripe recipe={recipe} /><p>{recipe.minutes} minutes, estimated · {recipe.servings} servings</p><p className="adg-small">Kitchen testing is pending. Timings and yields are estimates.</p></PageIntro>
    <Section><div className="adg-grid adg-grid-two"><article className="adg-card"><h2>Ingredients</h2><ul>{recipe.ingredients.map(x=><li key={x}>{x}</li>)}</ul></article><article className="adg-card"><h2>Make it</h2><ol>{recipe.instructions.map(x=><li key={x}>{x}</li>)}</ol><p>{recipe.note}</p></article></div><div className="adg-actions"><button className="adg-button" onClick={()=>window.print()}>Print recipe</button><button className="adg-button adg-button-secondary" onClick={download}>Download recipe</button><Action href="/whats-good-to-eat" secondary>Add to my meal plan</Action></div><p role="status">{message}</p></Section>
    <Section tone title="Like a little rhythm with your recipes?"><p>Discover Beats, Plants &amp; Plates—RoSeé’s cookbook in development, inspired by her love for hip-hop, food, and everyday self-care.</p><Action href="/cookbook">Explore the cookbook &amp; free preview</Action></Section>
  </div>;
}
