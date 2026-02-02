import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Users, Flame } from "lucide-react";

export default function MasonJarSalad() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/80 to-black text-white relative">
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      
      <div className="relative z-10 bg-black/80 backdrop-blur border-b border-red-700/40 py-8">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="outline" className="mb-4 text-red-300 hover:text-white border-red-700/40">← Back Home</Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 text-red-200">
            Mason Jar Salad
          </h1>
          <p className="text-xl text-red-100/80 mb-8">
            Meal prep made easy with layers of fresh, crisp vegetables
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-red-100">
              <Clock className="h-5 w-5 text-red-400" />
              <span>Prep: 15 min</span>
            </div>
            <div className="flex items-center gap-2 text-red-100">
              <Users className="h-5 w-5 text-red-400" />
              <span>Serves: 4 jars</span>
            </div>
            <div className="flex items-center gap-2 text-red-100">
              <Flame className="h-5 w-5 text-red-400" />
              <span>250 calories per jar</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-12 relative z-10">
        <div className="mb-8">
          <img 
            src="https://askdogoodassets.blob.core.windows.net/images/foods/jarSalads.JPEG"
            alt="Mason Jar Salads"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Ingredients (Per Jar)</h2>
              <ul className="space-y-2 text-lg text-red-50/90">
                <li>✓ 2 tablespoons dressing (bottom layer)</li>
                <li>✓ ½ cup cherry tomatoes, halved</li>
                <li>✓ ½ cup cucumber, diced</li>
                <li>✓ ¼ cup chickpeas or beans</li>
                <li>✓ ¼ cup shredded carrots</li>
                <li>✓ ¼ cup bell peppers, diced</li>
                <li>✓ ¼ cup quinoa or grains (optional)</li>
                <li>✓ 2 cups mixed greens (top layer)</li>
                <li>✓ 2 tablespoons pumpkin seeds or nuts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Layering Instructions</h2>
              <ol className="space-y-3 text-lg text-red-50/90">
                <li><strong>Layer 1 (Bottom):</strong> Pour dressing into clean quart-sized mason jar.</li>
                <li><strong>Layer 2:</strong> Add hard vegetables (tomatoes, cucumbers).</li>
                <li><strong>Layer 3:</strong> Add protein (chickpeas, beans, or tofu).</li>
                <li><strong>Layer 4:</strong> Add softer vegetables (carrots, peppers).</li>
                <li><strong>Layer 5:</strong> Add grains if using (quinoa, rice).</li>
                <li><strong>Layer 6 (Top):</strong> Pack greens tightly on top.</li>
                <li><strong>Layer 7:</strong> Add nuts/seeds on very top.</li>
                <li><strong>Seal & Store:</strong> Close lid tightly. Store upright in fridge up to 5 days.</li>
                <li><strong>To Eat:</strong> Shake jar or dump into bowl. Mix and enjoy!</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Dressing Ideas</h2>
              <ul className="space-y-2 text-lg text-red-50/90">
                <li>• Lemon Tahini: Tahini + lemon juice + garlic + water</li>
                <li>• Balsamic: Olive oil + balsamic vinegar + Dijon mustard</li>
                <li>• Ginger Sesame: Sesame oil + rice vinegar + ginger + tamari</li>
                <li>• Creamy Avocado: Avocado + lime + cilantro + water</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-red-900/20 border border-red-700/40 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-red-200">Meal Prep Benefits</h3>
              <p className="text-red-100/80 mb-3">Make 4-5 jars on Sunday for ready-to-eat lunches all week. Keeps fresh for up to 5 days!</p>
              <h4 className="font-semibold text-red-200 mb-2">Thyroid Benefits:</h4>
              <p className="text-red-100/80">Packed with vegetables, protein, and healthy fats. The variety ensures you get selenium, zinc, and vitamin A.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
