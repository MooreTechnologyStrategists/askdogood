import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Users, Flame } from "lucide-react";

export default function ChickpeaBurgers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/80 to-black text-white relative">
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      
      <div className="relative z-10 bg-black/80 backdrop-blur border-b border-red-700/40 py-8">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="outline" className="mb-4 text-red-300 hover:text-white border-red-700/40">← Back Home</Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 text-red-200">
            Chickpea Burgers
          </h1>
          <p className="text-xl text-red-100/80 mb-8">
            Crispy, flavorful plant-based burgers packed with protein
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-red-100">
              <Clock className="h-5 w-5 text-red-400" />
              <span>Prep: 15 min | Cook: 20 min</span>
            </div>
            <div className="flex items-center gap-2 text-red-100">
              <Users className="h-5 w-5 text-red-400" />
              <span>Makes: 6 burgers</span>
            </div>
            <div className="flex items-center gap-2 text-red-100">
              <Flame className="h-5 w-5 text-red-400" />
              <span>180 calories per burger</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-12 relative z-10">
        <div className="mb-8">
          <img 
            src="https://askdogoodassets.blob.core.windows.net/images/foods/chickpea%20burgers.JPEG"
            alt="Chickpea Burgers"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Ingredients</h2>
              <ul className="space-y-2 text-lg text-red-50/90">
                <li>✓ 2 cans (15 oz each) chickpeas, drained and rinsed</li>
                <li>✓ ½ cup rolled oats</li>
                <li>✓ ⅓ cup diced onion</li>
                <li>✓ 2 cloves garlic, minced</li>
                <li>✓ 2 tablespoons tahini</li>
                <li>✓ 1 tablespoon lemon juice</li>
                <li>✓ 1 teaspoon cumin</li>
                <li>✓ 1 teaspoon paprika</li>
                <li>✓ ½ teaspoon sea salt</li>
                <li>✓ ¼ teaspoon black pepper</li>
                <li>✓ 2 tablespoons fresh parsley, chopped</li>
                <li>✓ Olive oil for cooking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Instructions</h2>
              <ol className="space-y-3 text-lg text-red-50/90">
                <li><strong>1. Prepare:</strong> Add chickpeas to food processor and pulse until coarsely chopped (not smooth).</li>
                <li><strong>2. Mix:</strong> Transfer to bowl and add oats, onion, garlic, tahini, lemon juice, and spices. Mix well.</li>
                <li><strong>3. Form patties:</strong> Shape mixture into 6 patties. Refrigerate for 15 minutes to firm up.</li>
                <li><strong>4. Cook:</strong> Heat oil in skillet over medium heat. Cook patties 5 minutes per side until golden.</li>
                <li><strong>5. Serve:</strong> Enjoy on buns with your favorite toppings or over salad.</li>
              </ol>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-red-900/20 border border-red-700/40 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-red-200">Thyroid Benefits</h3>
              <p className="text-red-100/80">High in protein and fiber, chickpeas support stable blood sugar and sustained energy—essential for thyroid health.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
