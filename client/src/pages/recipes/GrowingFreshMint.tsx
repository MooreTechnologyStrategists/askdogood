import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Clock, Sprout, Sun } from "lucide-react";

export default function GrowingFreshMint() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900/80 to-black text-white relative">
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      
      <div className="relative z-10 bg-black/80 backdrop-blur border-b border-red-700/40 py-8">
        <div className="container max-w-4xl">
          <Link href="/">
            <Button variant="outline" className="mb-4 text-red-300 hover:text-white border-red-700/40">← Back Home</Button>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 text-red-200">
            Growing Fresh Mint in Grow Bags
          </h1>
          <p className="text-xl text-red-100/80 mb-8">
            Easy herb gardening for fresh, healing ingredients
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-red-100">
              <Clock className="h-5 w-5 text-red-400" />
              <span>Setup: 30 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-red-100">
              <Sprout className="h-5 w-5 text-red-400" />
              <span>Harvest: 4-6 weeks</span>
            </div>
            <div className="flex items-center gap-2 text-red-100">
              <Sun className="h-5 w-5 text-red-400" />
              <span>Partial sun</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl py-12 relative z-10">
        <div className="mb-8">
          <img 
            src="https://askdogoodassets.blob.core.windows.net/images/foods/growingMintInGrowBags.JPEG"
            alt="Growing Fresh Mint in Grow Bags"
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">What You'll Need</h2>
              <ul className="space-y-2 text-lg text-red-50/90">
                <li>✓ 5-gallon grow bag with drainage holes</li>
                <li>✓ Organic potting soil</li>
                <li>✓ Mint starter plant or seeds</li>
                <li>✓ Compost or organic fertilizer</li>
                <li>✓ Watering can</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">How to Grow</h2>
              <ol className="space-y-3 text-lg text-red-50/90">
                <li><strong>1. Prepare bag:</strong> Fill grow bag with quality potting soil mixed with compost.</li>
                <li><strong>2. Plant:</strong> Plant mint starter 2-3 inches deep. Water thoroughly.</li>
                <li><strong>3. Location:</strong> Place in area with partial sun (4-6 hours daily).</li>
                <li><strong>4. Water:</strong> Keep soil consistently moist but not waterlogged.</li>
                <li><strong>5. Harvest:</strong> Snip leaves as needed once plant is established (6+ inches tall).</li>
                <li><strong>6. Maintain:</strong> Trim regularly to encourage bushy growth.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 font-serif text-red-200">Uses for Fresh Mint</h2>
              <ul className="space-y-2 text-lg text-red-50/90">
                <li>• Add to smoothies and teas</li>
                <li>• Make fresh mint water for hydration</li>
                <li>• Use in salads and grain bowls</li>
                <li>• Create homemade pesto</li>
                <li>• Garnish desserts and drinks</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-red-900/20 border border-red-700/40 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-red-200">Health Benefits</h3>
              <p className="text-red-100/80">Mint supports digestion, reduces inflammation, and adds refreshing flavor to thyroid-friendly meals and beverages.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
