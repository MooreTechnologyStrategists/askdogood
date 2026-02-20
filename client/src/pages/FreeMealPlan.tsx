import { useEffect } from "react";
import { CheckCircle2, Download, UtensilsCrossed, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import SEO from "@/components/SEO";
import { trackLeadMagnetView } from "@/lib/analytics";
import { useScrollDepthTracking } from "@/hooks/useScrollDepthTracking";

export default function FreeMealPlan() {
  useEffect(() => {
    trackLeadMagnetView('thyroid-meal-plan', '/free-meal-plan');
  }, []);

  useScrollDepthTracking('Lead Magnet: Meal Plan');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <SEO
        title="Free 7-Day Thyroid-Friendly Meal Plan"
        description="Download your free 7-day meal plan designed for thyroid health. Includes recipes, shopping lists, and prep guides for Hashimoto's and hypothyroidism."
        keywords={['thyroid meal plan', 'Hashimoto\'s diet', 'hypothyroidism recipes', 'anti-inflammatory meal plan', 'thyroid-friendly recipes']}
        url="/free-meal-plan"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Download className="h-4 w-4" />
              <span>FREE DOWNLOAD</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              7-Day Thyroid-Friendly Meal Plan
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Take the guesswork out of eating for thyroid health. Get a complete week of delicious, 
              anti-inflammatory meals designed to support your thyroid, reduce symptoms, and boost energy.
            </p>

            {/* Preview Image */}
            <div className="mb-12 relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                <UtensilsCrossed className="h-24 w-24 text-primary/40" />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg rotate-12">
                100% FREE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Calendar,
                  title: "7 Days of Meals",
                  description: "Breakfast, lunch, dinner, and snacks - all planned for you"
                },
                {
                  icon: UtensilsCrossed,
                  title: "21 Recipes",
                  description: "Simple, delicious recipes you can make in 30 minutes or less"
                },
                {
                  icon: CheckCircle2,
                  title: "Shopping List",
                  description: "Organized list by category so you can shop quickly"
                }
              ].map((item, idx) => (
                <Card key={idx} className="text-center border-primary/20">
                  <CardContent className="p-6">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center mb-6">Perfect For:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Hashimoto's thyroiditis",
                  "Hypothyroidism",
                  "Thyroid resistance",
                  "Post-thyroidectomy recovery",
                  "Reducing inflammation",
                  "Supporting weight management",
                  "Boosting energy naturally",
                  "Anyone wanting to eat better"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Day */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Sample Day from the Plan</h2>
            
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">🌅 Breakfast</h3>
                  <p className="text-muted-foreground">Green Smoothie Bowl with berries, spinach, and almond butter</p>
                  <p className="text-sm text-primary mt-1">Prep time: 5 minutes</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">🥗 Lunch</h3>
                  <p className="text-muted-foreground">Mediterranean Quinoa Bowl with roasted vegetables and tahini dressing</p>
                  <p className="text-sm text-primary mt-1">Prep time: 15 minutes</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">🍽️ Dinner</h3>
                  <p className="text-muted-foreground">Baked Salmon with Sweet Potato and Steamed Broccoli</p>
                  <p className="text-sm text-primary mt-1">Prep time: 25 minutes</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">🍎 Snacks</h3>
                  <p className="text-muted-foreground">Apple slices with almond butter • Handful of walnuts</p>
                  <p className="text-sm text-primary mt-1">Grab and go</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg italic mb-4">
              "This meal plan took all the stress out of figuring out what to eat. The recipes are 
              actually delicious and my energy improved within days. Thank you!"
            </blockquote>
            <p className="font-semibold">— Michelle R., Hypothyroid Patient</p>
          </div>
        </div>
      </section>

      {/* Opt-in Form */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Meal Plan Now</h2>
              <p className="text-muted-foreground">
                Enter your email and I'll send it straight to your inbox. You'll also get weekly 
                thyroid-friendly recipes and wellness tips.
              </p>
            </div>

            <BeehiivSubscribe 
              variant="card"
              title="Download Your Free 7-Day Meal Plan"
              description="Get instant access + weekly recipes"
              buttonText="Send Me The Meal Plan"
            />

            <div className="mt-6 text-center space-y-2">
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Instant Access
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  No Spam Ever
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Unsubscribe Anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
