import { useEffect, useMemo, useState } from "react";
import { Action, PageIntro, Section } from "@/components/Experience";
import recipes from "@/data/kitchenRecipes.json";
import { pantryItems, recipeMatch } from "@/lib/kitchenMatch";
import { trackEvent } from "@/lib/analytics";
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const key = "adg-kitchen-v1";
function load() {
  try { const data = JSON.parse(localStorage.getItem(key) || "{}"); return {
    favorites: Array.isArray(data.favorites) ? data.favorites.filter((id: unknown) => recipes.some(recipe => recipe.id === id)) as string[] : [],
    week: Array.isArray(data.week) ? days.map((_, i) => recipes.some(recipe => recipe.id === data.week[i]) ? data.week[i] as string : "") : days.map(() => ""),
  }; } catch { return { favorites: [] as string[], week: days.map(() => "") }; }
}
export default function PantryKitchen() {
  const [saved] = useState(load);
  const [favorites, setFavorites] = useState<string[]>(saved.favorites);
  const [week, setWeek] = useState<string[]>(saved.week);
  const [ingredients, setIngredients] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [quick, setQuick] = useState(false);
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const [surprise, setSurprise] = useState("");
  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [storageMessage, setStorageMessage] = useState("");
  const pantry = pantryItems(submitted);
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify({ favorites, week })); setStorageMessage("Saved on this browser. No account needed."); } catch { setStorageMessage("Browser storage is unavailable. Your choices last for this visit; download the plan to keep it."); } }, [favorites, week]);
  const results = useMemo(() => recipes.filter(recipe => (!quick || recipe.minutes <= 20) && (!favoriteOnly || favorites.includes(recipe.id))).map(recipe => ({ ...recipe, ...recipeMatch(recipe.ingredients, pantry) })).sort((a,b) => b.have.length - a.have.length || a.missing.length - b.missing.length), [submitted, quick, favoriteOnly, favorites]);
  const displayed = surprise ? results.filter(recipe => recipe.id === surprise) : results;
  const selected = week.map(id => recipes.find(recipe => recipe.id === id));
  const shopping = [...new Set(selected.flatMap(recipe => recipe ? recipeMatch(recipe.ingredients, pantry).missing : []))];
  function download() {
    const text = "AskDoGood weekly meal plan\n\n" + days.map((day,i) => `${day}: ${selected[i]?.title || "Not planned"}`).join("\n") + "\n\nIngredients to check / buy\n" + shopping.map(item => `- ${item}`).join("\n") + (budget ? `\n\nMy shopping budget: $${budget}` : "") + "\n\nCheck each full recipe for quantities, optional ingredients and substitutions. Shopping entries can overlap across recipes; combine quantities yourself. No live prices or allergy screening.\n";
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" })); const a = document.createElement("a"); a.href = url; a.download = "askdogood-weekly-meal-plan.txt"; a.click(); URL.revokeObjectURL(url); trackEvent("meal_plan_download", { planned_days: selected.filter(Boolean).length });
  }
  return <div className="adg-page">
    <PageIntro eyebrow="Free kitchen tools · Real food, real life" title="What’s good to eat?" text="Start with what’s in your kitchen. Explore a recipe, save your favorites, and put a few good meals on the calendar." image="/images/personal/food/rosee-home-meal.webp" alt="A home-prepared meal from RoSeé’s photo archive">
      <div className="adg-actions"><Action href="#build-my-meal">Build my meal</Action><Action href="#my-week" secondary>Plan my week</Action></div>
    </PageIntro>
    <Section id="build-my-meal" title="1. What do you have?" eyebrow="Kitchen companion">
      <div className="adg-split"><form className="adg-card adg-kitchen-form" onSubmit={event => { event.preventDefault(); setSubmitted(ingredients); setSurprise(""); trackEvent("recipe_match", { ingredient_count: pantryItems(ingredients).length }); }}>
        <label htmlFor="pantry-ingredients">Ingredients, separated by commas</label><textarea id="pantry-ingredients" value={ingredients} onChange={event => setIngredients(event.target.value)} placeholder="chickpeas, oats, onion, garlic, lemon" rows={4} maxLength={1000} />
        <p className="adg-small">Use ingredient names rather than quantities. Matching is a starting point; check the full recipe, amounts, allergies and any substitutions.</p>
        <div className="adg-actions"><button className="adg-button" type="submit">Build my meal</button><button className="adg-button adg-button-secondary" type="button" onClick={() => { setIngredients("chickpeas, oats, onion, garlic, lemon"); setSubmitted("chickpeas, oats, onion, garlic, lemon"); setSurprise(""); }}>Try an example</button></div>
        <label className="adg-kitchen-check"><input type="checkbox" checked={quick} onChange={event => { setQuick(event.target.checked); setSurprise(""); }} /> Quick recipes · 20 minutes or less</label>
        <label className="adg-kitchen-check"><input type="checkbox" checked={favoriteOnly} onChange={event => { setFavoriteOnly(event.target.checked); setSurprise(""); }} /> My favorites only</label>
      </form><div className="adg-card adg-kitchen-form"><h3>Take a look at your kitchen.</h3><p>A photo can help you remember what’s there. Choose one from your device, then type the ingredients you can identify.</p><label htmlFor="kitchen-photo">Optional kitchen photo</label><input id="kitchen-photo" type="file" accept="image/*" onChange={event => { const file = event.target.files?.[0]; setPhoto(""); if (!file) return; if (!file.type.startsWith("image/") || file.size > 8 * 1024 * 1024) { setMessage("Choose an image smaller than 8 MB."); return; } const reader = new FileReader(); reader.onload = () => { setPhoto(String(reader.result)); setMessage("Photo stays on this device. Review it and enter your ingredients."); }; reader.onerror = () => setMessage("That photo could not be opened. You can still type your ingredients."); reader.readAsDataURL(file); }} />{photo && <img src={photo} className="adg-kitchen-photo" alt="Your selected kitchen photo for reviewing ingredients" />}<p className="adg-small" role="status">{message || "Private photo reference; automatic ingredient scanning is not connected yet."}</p></div></div>
    </Section>
    <Section tone title="2. Pick something that works today.">
      <div className="adg-actions"><button className="adg-button adg-button-secondary" disabled={!results.length} onClick={() => { setSurprise(results[Math.floor(Math.random() * results.length)].id); trackEvent("recipe_surprise"); }}>Surprise me</button>{surprise && <button className="adg-button adg-button-secondary" onClick={() => setSurprise("")}>Show all matches</button>}</div>
      <p className="adg-small" aria-live="polite">{displayed.length} recipe{displayed.length === 1 ? "" : "s"} to explore{pantry.length ? " · best ingredient matches first" : " · add ingredients to see what you have and what’s missing"}.</p>
      {!displayed.length && <p>No recipes match these filters. Turn off “favorites only” or the quick filter to see more.</p>}
      <div className="adg-grid adg-grid-three">{displayed.map(recipe => <article className="adg-card" key={recipe.id}><p className="adg-eyebrow">{recipe.minutes} minutes · recipe library</p><h3>{recipe.title}</h3>{pantry.length > 0 && <p><strong>{recipe.have.length} listed ingredients matched</strong><br />{recipe.missing.length} to check or buy</p>}<details><summary>Ingredients to check</summary><ul>{(pantry.length ? recipe.missing : recipe.ingredients).map(item => <li key={item}>{item}</li>)}</ul></details><div className="adg-actions"><Action href={`/recipe/${recipe.id}`} secondary>Recipe & instructions</Action><button className="adg-button adg-button-secondary" aria-pressed={favorites.includes(recipe.id)} onClick={() => setFavorites(items => items.includes(recipe.id) ? items.filter(id => id !== recipe.id) : [...items, recipe.id])}>{favorites.includes(recipe.id) ? "Saved favorite" : "Save favorite"}</button></div></article>)}</div>
    </Section>
    <Section id="my-week" title="3. Give your week a little structure." eyebrow="Weekly meal planner">
      <p>Choose one recipe per day. Use this as a flexible plan, not a rule for your life.</p><div className="adg-grid adg-grid-three">{days.map((day,i) => <div className="adg-card adg-kitchen-form" key={day}><label htmlFor={`meal-${i}`}>{day}</label><select id={`meal-${i}`} value={week[i]} onChange={event => setWeek(items => items.map((id,index) => index === i ? event.target.value : id))}><option value="">Leave open</option>{recipes.map(recipe => <option key={recipe.id} value={recipe.id}>{recipe.title}</option>)}</select></div>)}</div>
      <p className="adg-small" role="status">{storageMessage}</p><div className="adg-card adg-kitchen-form"><h3>Your ingredient check</h3><p>This combines the listed ingredients from your planned recipes, excluding pantry matches. Review quantities and optional ingredients in each full recipe.</p>{shopping.length ? <ul>{shopping.map(item => <li key={item}>{item}</li>)}</ul> : <p>Choose meals above to build your ingredient list.</p>}<label htmlFor="meal-budget">My shopping budget · optional</label><input id="meal-budget" type="number" min="0" max="10000" step="1" value={budget} onChange={event => setBudget(event.target.value)} placeholder="Your target in USD" /><p className="adg-small">A personal target, not a price estimate. Live store prices and automatic cost calculations are not connected.</p><div className="adg-actions"><button className="adg-button" onClick={download} disabled={!selected.some(Boolean)}>Download plan & ingredient list</button><button className="adg-button adg-button-secondary" onClick={() => { if (window.confirm("Clear all seven days from this browser’s plan?")) setWeek(days.map(() => "")); }}>Clear my week</button></div></div>
    </Section>
    <Section tone title="Want a little more support?"><p>These tools are free. Explore the 7-Day Reset for a simple routine, or read what a personalized wellness plan includes before deciding.</p><div className="adg-actions"><Action href="/product/7-day-reset">Preview the $17 reset</Action><Action href="/product/custom-wellness-plan" secondary>Explore the $97 plan</Action><Action href="/clinical-recipes" secondary>Browse the full recipe library</Action></div></Section>
  </div>;
}
