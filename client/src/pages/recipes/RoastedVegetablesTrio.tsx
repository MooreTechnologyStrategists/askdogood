import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Users, Flame, Printer } from "lucide-react";

export default function RoastedVegetablesTrio() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-8">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="outline" className="mb-4">← Back Home</Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
            Roasted Carrots, Onions & Peppers
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A vibrant, nutrient-dense side dish perfect for thyroid health
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Prep: 15 min | Cook: 25 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Servings: 4</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-primary" />
              <span>120 calories per serving</span>
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
                <li>🥕 3 large carrots, cut into 1-inch pieces</li>
                <li>🧅 2 large onions, cut into wedges</li>
                <li>🫑 2 bell peppers (any color), cut into chunks</li>
                <li>🫒 3 tablespoons extra virgin olive oil</li>
                <li>🧂 1 teaspoon sea salt</li>
                <li>⚫ ½ teaspoon black pepper</li>
                <li>🌿 1 teaspoon dried thyme</li>
                <li>🧄 2 cloves garlic, minced</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif">Instructions</h2>
              <ol className="space-y-3 text-lg">
                <li><strong>1. Prepare:</strong> Preheat oven to 425°F (220°C). Line a baking sheet with parchment paper.</li>
                <li><strong>2. Cut vegetables:</strong> Cut carrots, onions, and peppers into uniform 1-inch pieces for even cooking.</li>
                <li><strong>3. Toss:</strong> In a large bowl, combine vegetables with olive oil, salt, pepper, thyme, and garlic. Mix until evenly coated.</li>
                <li><strong>4. Spread:</strong> Spread vegetables in a single layer on the prepared baking sheet.</li>
                <li><strong>5. Roast:</strong> Roast for 25-30 minutes, stirring halfway through, until vegetables are tender and lightly caramelized.</li>
                <li><strong>6. Serve:</strong> Serve warm as a side dish or add to grain bowls.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif">Nutrition Facts</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Calories</p>
                  <p className="text-2xl font-bold">120</p>
                </div>
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Protein</p>
                  <p className="text-2xl font-bold">2g</p>
                </div>
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Carbs</p>
                  <p className="text-2xl font-bold">15g</p>
                </div>
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Fat</p>
                  <p className="text-2xl font-bold">7g</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif">Health Benefits</h2>
              <p className="text-lg leading-relaxed mb-4">
                This vibrant trio delivers powerful antioxidants including beta-carotene, vitamin C, and quercetin. Roasting enhances their natural sweetness while preserving nutrients that support thyroid function, reduce inflammation, and boost immune health. The fiber content aids digestion, making this an excellent side dish for thyroid patients.
              </p>
            </section>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-4 bg-card rounded-xl p-6 shadow-lg">
              <img 
                src="https://askdogoodassets.blob.core.windows.net/images/personal/food/muhammad-dishes-1.jpg"
                alt="Roasted Vegetables"
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
