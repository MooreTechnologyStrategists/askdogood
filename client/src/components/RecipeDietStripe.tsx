type DietInfo = { dietLabel?: string; dietColor?: string; dietTags?: string[] };
export default function RecipeDietStripe({ recipe }: { recipe: DietInfo }) {
  if (!recipe.dietLabel) return null;
  return <div style={{ marginBottom: "1rem" }}>
    <p style={{ background: recipe.dietColor || "#173F35", color: "#fff", padding: ".65rem 1rem", borderRadius: ".5rem", fontWeight: 700, margin: 0 }}>{recipe.dietLabel}</p>
    {recipe.dietTags?.map(tag => <p key={tag} className="adg-small" style={{ margin: ".5rem 0 0" }}>{tag}</p>)}
  </div>;
}
