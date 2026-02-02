import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Users, Flame } from "lucide-react";

export default function HomemadePizza() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/80 to-black text-white relative">
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      
      <div className="relative z-10 bg-black/80 backdrop-blur border-b border-red-700/40 py-8">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="outline" className="mb-4 text-red-300 hover:text-white border-red-700/40">← Back Home</Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 text-red-200">
            Homemade Pizza
          </h1>
          <p className="text-xl text-red-100/80 mb-8">
            Whole grain crust loaded with vegetables and flavor
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-red-100">
              <Clock className="h-5 w-5 text-red-400" />
              <span>Prep: 90 min | Cook: 15 min</span>
            </div>
            <div className="flex items-center gap-2 text-red-100">
              <Users className="h-5 w-5 text-red-400" />
              <span>Serves: 4</span>
            </div>
            <div className="flex items-center gap-2 text-red-100">
              <Flame className="h-5 w-5 text-red-400" />
              <span>280 calories per slice</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-12 relative z-10">
        <div className="mb-8">
          <img 
            src="https://askdogoodassets.blob.core.windows.net/images/foods/homemade%20pizza.JPEG"
            alt="Homemade Pizza"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Ingredients</h2>
              <h3 className="text-xl font-semibold mb-2 text-red-300">For the Dough:</h3>
              <ul className="space-y-2 text-lg text-red-50/90 mb-4">
                <li>✓ 2 cups whole wheat flour</li>
                <li>✓ 1 packet active dry yeast</li>
                <li>✓ ¾ cup warm water</li>
                <li>✓ 1 tablespoon olive oil</li>
                <li>✓ 1 teaspoon honey</li>
                <li>✓ ½ teaspoon sea salt</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2 text-red-300">Toppings:</h3>
              <ul className="space-y-2 text-lg text-red-50/90">
                <li>✓ ½ cup marinara sauce</li>
                <li>✓ 1 cup shredded mozzarella (or vegan cheese)</li>
                <li>✓ Bell peppers, sliced</li>
                <li>✓ Mushrooms, sliced</li>
                <li>✓ Red onion, thinly sliced</li>
                <li>✓ Fresh basil leaves</li>
                <li>✓ Nutritional yeast for garnish</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Instructions</h2>
              <ol className="space-y-3 text-lg text-red-50/90">
                <li><strong>1. Make dough:</strong> Mix yeast, warm water, and honey. Let sit 5 minutes until foamy.</li>
                <li><strong>2. Combine:</strong> Add flour, oil, and salt. Knead 5-7 minutes until smooth.</li>
                <li><strong>3. Rise:</strong> Place in oiled bowl, cover, and let rise 60 minutes.</li>
                <li><strong>4. Preheat:</strong> Heat oven to 450°F. Prepare baking sheet.</li>
                <li><strong>5. Shape:</strong> Roll dough into 12-inch circle on floured surface.</li>
                <li><strong>6. Top:</strong> Spread sauce, add cheese and vegetables.</li>
                <li><strong>7. Bake:</strong> Cook 12-15 minutes until crust is golden and cheese is melted.</li>
                <li><strong>8. Finish:</strong> Top with fresh basil and nutritional yeast. Slice and serve!</li>
              </ol>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-red-900/20 border border-red-700/40 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-red-200">Thyroid Benefits</h3>
              <p className="text-red-100/80">Whole wheat flour provides selenium and B vitamins. Load with vegetables for extra nutrients and fiber.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
