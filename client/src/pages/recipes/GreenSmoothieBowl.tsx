import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Users, Flame } from "lucide-react";

export default function GreenSmoothieBowl() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background text-foreground relative">
      <div className="relative z-10 bg-background/80 backdrop-blur border-b border-primary/20 py-8">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="outline" className="mb-4">← Back Home</Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 text-primary">
            Green Smoothie with Avocado & Oatmeal
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Creamy, nutrient-dense breakfast that fuels your thyroid
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span>Prep: 5 min</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span>Serves: 1</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Flame className="h-5 w-5 text-primary" />
              <span>320 calories</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-12 relative z-10">
        <div className="mb-8">
          <img 
            src="https://askdogoodassets.blob.core.windows.net/images/foods/green-smoothie-avocado-oatmeal.JPG"
            alt="Green Smoothie with Avocado and Oatmeal"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-primary">Ingredients</h2>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li>✓ 1 cup fresh spinach</li>
                <li>✓ ½ ripe avocado</li>
                <li>✓ ¼ cup rolled oats</li>
                <li>✓ 1 frozen banana</li>
                <li>✓ 1 cup unsweetened almond milk</li>
                <li>✓ 1 tablespoon almond butter</li>
                <li>✓ 1 teaspoon chia seeds</li>
                <li>✓ ½ teaspoon cinnamon</li>
                <li>✓ Optional: 1 scoop vanilla protein powder</li>
                <li>✓ Ice cubes as needed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-primary">Instructions</h2>
              <ol className="space-y-3 text-lg text-muted-foreground">
                <li><strong>1. Blend:</strong> Add all ingredients to blender in order listed.</li>
                <li><strong>2. Process:</strong> Blend on high until smooth and creamy, about 60 seconds.</li>
                <li><strong>3. Adjust:</strong> Add more almond milk if too thick, or ice if too thin.</li>
                <li><strong>4. Serve:</strong> Pour into bowl or glass and enjoy immediately.</li>
                <li><strong>5. Optional toppings:</strong> Add granola, fresh berries, hemp seeds, or coconut flakes.</li>
              </ol>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-primary">Thyroid Benefits</h3>
              <p className="text-muted-foreground">Packed with healthy fats from avocado, fiber from oats, and iron from spinach—all essential for optimal thyroid function.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
