import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Users, Flame, Printer } from "lucide-react";

export default function DoGoodLentilBurgers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/80 to-black text-white relative">
      {/* Dimmer overlay for better readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      
      <div className="relative z-10 bg-black/80 backdrop-blur border-b border-red-700/40 py-8">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="outline" className="mb-4 text-red-300 hover:text-white border-red-700/40">← Back Home</Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 text-red-200">
            DoGood's Famous Lentil Burgers
          </h1>
          <p className="text-xl text-red-100/80 mb-8">
            Protein-packed plant-based patties that taste amazing
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-red-100">
              <Clock className="h-5 w-5 text-red-400" />
              <span>Prep: 20 min | Cook: 25 min</span>
            </div>
            <div className="flex items-center gap-2 text-red-100">
              <Users className="h-5 w-5 text-red-400" />
              <span>Makes: 8 burgers</span>
            </div>
            <div className="flex items-center gap-2 text-red-100">
              <Flame className="h-5 w-5 text-red-400" />
              <span>220 calories per burger</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Ingredients</h2>
              <ul className="space-y-2 text-lg text-red-50/90">
                <li> 2 cups cooked lentils (red or green)</li>
                <li> ½ cup grated carrot</li>
                <li> ¼ cup finely diced onion</li>
                <li> 3 tablespoons olive oil</li>
                <li> 3 cloves garlic, minced</li>
                <li> 1 teaspoon dried thyme</li>
                <li> 1 teaspoon dried oregano</li>
                <li> ½ cup walnuts, finely chopped (optional)</li>
                <li> ½ cup almond flour or whole wheat breadcrumbs</li>
                <li> 1 teaspoon sea salt</li>
                <li> ½ teaspoon black pepper</li>
                <li> 1 tablespoon lemon juice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Instructions</h2>
              <ol className="space-y-3 text-lg text-red-50/90">
                <li><strong>1. Prepare lentils:</strong> If not already cooked, cook lentils according to package directions. Drain well and let cool slightly.</li>
                <li><strong>2. Sauté aromatics:</strong> Heat 1 tablespoon olive oil in a pan. Sauté onion and garlic until fragrant, about 2 minutes. Add carrot and cook for 2 more minutes.</li>
                <li><strong>3. Mash:</strong> In a large bowl, coarsely mash the cooked lentils with a fork (you want some texture, not a smooth paste).</li>
                <li><strong>4. Combine:</strong> Add the sautéed vegetables, walnuts (if using), thyme, oregano, almond flour, salt, pepper, and lemon juice to the lentils. Mix well.</li>
                <li><strong>5. Form patties:</strong> Form mixture into 8 patties about ½ inch thick. If mixture is too wet, add more almond flour.</li>
                <li><strong>6. Cook:</strong> Heat 2 tablespoons olive oil in a skillet over medium-high heat. Cook patties 5-7 minutes per side until golden brown.</li>
                <li><strong>7. Serve:</strong> Serve on whole grain buns with your favorite toppings or as a side dish.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Nutrition Facts (Per Burger)</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-red-900/30 border border-red-700/40 rounded">
                  <p className="text-sm text-red-300">Calories</p>
                  <p className="text-2xl font-bold text-red-100">220</p>
                </div>
                <div className="p-3 bg-red-900/30 border border-red-700/40 rounded">
                  <p className="text-sm text-red-300">Protein</p>
                  <p className="text-2xl font-bold text-red-100">12g</p>
                </div>
                <div className="p-3 bg-red-900/30 border border-red-700/40 rounded">
                  <p className="text-sm text-red-300">Carbs</p>
                  <p className="text-2xl font-bold text-red-100">18g</p>
                </div>
                <div className="p-3 bg-red-900/30 border border-red-700/40 rounded">
                  <p className="text-sm text-red-300">Fat</p>
                  <p className="text-2xl font-bold text-red-100">10g</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Health Benefits</h2>
              <p className="text-lg leading-relaxed mb-4 text-red-50/90">
                These protein-rich patties provide 18g of plant-based protein per serving plus iron, folate, and selenium—essential minerals for thyroid hormone production. The fiber keeps you satisfied while supporting gut health and digestion. The savory blend of herbs and spices makes them irresistible to both vegans and non-vegans alike. Perfect for meal prep!
              </p>
            </section>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-4 bg-black/80 border border-red-700/40 backdrop-blur rounded-xl p-6 shadow-lg">
              <img 
                src="https://askdogoodassets.blob.core.windows.net/images/foods/muhammad-dishes-4.jpg?w=400&h=400&fit=crop"
                alt="DoGood Lentil Burgers"
                className="w-full rounded-lg mb-4 object-cover h-48 border border-red-700/40"
              />
              <Button className="w-full mb-2 bg-red-700 hover:bg-red-600"><Printer className="h-4 w-4 mr-2" />Print Recipe</Button>
              <Button variant="outline" className="w-full text-red-300 border-red-700/40 hover:text-white"><span>Save Recipe</span></Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
