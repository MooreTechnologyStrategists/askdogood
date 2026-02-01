import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Users, Flame, Printer } from "lucide-react";

export default function PurpleCabbageBroccoliSlaw() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 py-8">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="outline" className="mb-4">← Back Home</Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
            Purple Cabbage & Broccoli Slaw
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A crisp, colorful cruciferous vegetable side that supports thyroid health
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Prep: 15 min | No Cook</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Servings: 4</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-primary" />
              <span>95 calories per serving</span>
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
                <li>🥬 3 cups shredded purple cabbage</li>
                <li>🥦 2 cups chopped broccoli florets (small)</li>
                <li>🥕 1 large carrot, shredded or julienned</li>
                <li>🍋 3 tablespoons fresh lemon juice</li>
                <li>🫒 2 tablespoons extra virgin olive oil</li>
                <li>🧄 2 cloves garlic, minced</li>
                <li>🫒 1 tablespoon apple cider vinegar</li>
                <li>🧂 ½ teaspoon sea salt</li>
                <li>⚫ ¼ teaspoon black pepper</li>
                <li>🌱 2 tablespoons fresh parsley, chopped</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif">Instructions</h2>
              <ol className="space-y-3 text-lg">
                <li><strong>1. Prep vegetables:</strong> Shred the purple cabbage finely. Chop broccoli into bite-sized pieces. Shred or julienne the carrot.</li>
                <li><strong>2. Make dressing:</strong> In a small bowl, whisk together lemon juice, olive oil, minced garlic, and apple cider vinegar.</li>
                <li><strong>3. Combine:</strong> In a large bowl, toss together cabbage, broccoli, and carrot.</li>
                <li><strong>4. Dress:</strong> Pour dressing over vegetables and toss well. Season with salt and pepper.</li>
                <li><strong>5. Let sit:</strong> Allow to sit for 10 minutes to allow flavors to meld and vegetables to soften slightly.</li>
                <li><strong>6. Top and serve:</strong> Garnish with fresh parsley and serve cold or at room temperature.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif">Nutrition Facts</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Calories</p>
                  <p className="text-2xl font-bold">95</p>
                </div>
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Protein</p>
                  <p className="text-2xl font-bold">3g</p>
                </div>
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Carbs</p>
                  <p className="text-2xl font-bold">10g</p>
                </div>
                <div className="p-3 bg-primary/5 rounded">
                  <p className="text-sm text-muted-foreground">Fat</p>
                  <p className="text-2xl font-bold">6g</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif">Health Benefits</h2>
              <p className="text-lg leading-relaxed mb-4">
                Packed with cruciferous vegetables rich in sulforaphane and anthocyanins, this colorful slaw supports detoxification pathways and provides essential vitamins K and C. The fiber content aids digestion while the phytonutrients help regulate hormone balance—critical for thyroid patients. The purple cabbage provides powerful antioxidants that fight inflammation.
              </p>
            </section>
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-4 bg-card rounded-xl p-6 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop"
                alt="Purple Cabbage Slaw"
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
