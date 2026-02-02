import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Users, Flame } from "lucide-react";

export default function HomemadePizza() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background text-foreground relative">
      <div className="relative z-10 bg-background/80 backdrop-blur border-b border-primary/20 py-8">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="outline" className="mb-4">← Back Home</Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 text-primary">
            Homemade Pizza
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Whole grain crust loaded with vegetables and flavor
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span>Prep: 90 min | Cook: 15 min</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span>Serves: 4</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Flame className="h-5 w-5 text-primary" />
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
              <h2 className="text-3xl font-bold mb-4 font-serif text-primary">Ingredients</h2>
              <h3 className="text-xl font-semibold mb-2 text-primary">For the Dough:</h3>
              <ul className="space-y-2 text-lg text-muted-foreground mb-4">
                <li>✓ 2 cups whole wheat flour</li>
                <li>✓ 1 packet active dry yeast</li>
                <li>✓ ¾ cup warm water</li>
                <li>✓ 1 tablespoon olive oil</li>
                <li>✓ 1 teaspoon honey</li>
                <li>✓ ½ teaspoon sea salt</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-2 text-primary">Toppings:</h3>
              <ul className="space-y-2 text-lg text-muted-foreground">
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
              <h2 className="text-3xl font-bold mb-4 font-serif text-primary">Instructions</h2>
              <ol className="space-y-3 text-lg text-muted-foreground">
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
            <section className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-primary">Thyroid Benefits</h3>
              <p className="text-muted-foreground">Whole wheat flour provides selenium and B vitamins. Load with vegetables for extra nutrients and fiber.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
