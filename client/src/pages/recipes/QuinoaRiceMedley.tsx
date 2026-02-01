import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Users, Flame, Printer } from "lucide-react";

export default function QuinoaRiceMedley() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-8">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="outline" className="mb-4">← Back Home</Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
            Quinoa & Rice Medley
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A complete protein grain bowl packed with essential nutrients
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Prep: 10 min | Cook: 20 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Servings: 4</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-primary" />
              <span>250 calories per serving</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif">Ingredients</h2>
              <ul className="space-y-2 text-lg">
                <li>🍚 1 cup cooked quinoa</li>
                <li>🍙 1 cup cooked brown rice</li>
                <li>🥒 ½ cup diced cucumber</li>
                <li>🍅 ½ cup diced tomato</li>
                <li>🫒 3 tablespoons extra virgin olive oil</li>
                <li>🍋 2 tablespoons fresh lemon juice</li>
                <li>🧄 2 cloves garlic, minced</li>
                <li>🫑 ¼ cup chopped fresh herbs (parsley, cilantro)</li>
                <li>🧂 Salt and pepper to taste</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif">Instructions</h2>
              <ol className="space-y-3 text-lg">
                <li><strong>1. Cook grains:</strong> If not already cooked, prepare quinoa and brown rice according to package directions. Let cool slightly.</li>
                <li><strong>2. Make dressing:</strong> Whisk together olive oil, lemon juice, and minced garlic in a small bowl.</li>
                <li><strong>3. Combine:</strong> In a large bowl, mix cooked quinoa, brown rice, cucumber, and tomato.</li>
                <li><strong>4. Dress:</strong> Pour dressing over the grain mixture and toss well.</li>
                <li><strong>5. Herbs:</strong> Add fresh herbs and season with salt and pepper to taste.</li>
                <li><strong>6. Serve:</strong> Serve at room temperature or chilled as a complete meal or side dish.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif">Nutrition Facts</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Calories</p>
                  <p className="text-2xl font-bold">250</p>
                </div>
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Protein</p>
                  <p className="text-2xl font-bold">9g</p>
                </div>
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Carbs</p>
                  <p className="text-2xl font-bold">35g</p>
                </div>
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Fat</p>
                  <p className="text-2xl font-bold">10g</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif">Health Benefits</h2>
              <p className="text-lg leading-relaxed mb-4">
                Quinoa is a complete protein containing all nine essential amino acids, while brown rice provides selenium and B vitamins crucial for thyroid health. Together, they create a balanced grain bowl that supports energy, hormone production, and digestive health. Perfect for meal prep!
              </p>
            </section>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-4 bg-card rounded-xl p-6 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
                alt="Quinoa & Rice Medley"
                className="w-full rounded-lg mb-4 object-cover h-48"
              />
              <Button className="w-full mb-2"><Printer className="h-4 w-4 mr-2" />Print Recipe</Button>
              <Button variant="outline" className="w-full"><span>Save Recipe</span></Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
