import { useEffect } from "react";
import { CheckCircle2, Download, UtensilsCrossed, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import SEO from "@/components/SEO";
import { trackLeadMagnetView } from "@/lib/analytics";
import { useScrollDepthTracking } from "@/hooks/useScrollDepthTracking";

export default function FreeMealPlan() {
  const leadMagnetImage = "/images/personal/food/meal-complete.jpg";
  const leadMagnetFallback = "/images/products/gumroad_thumbnail.png";

  useEffect(() => {
    trackLeadMagnetView('thyroid-checklist-3day-plan', '/free-meal-plan');
  }, []);

  useScrollDepthTracking('Lead Magnet: Meal Plan');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <SEO
        title="Free Thyroid Symptom Checklist + 3-Day Meal Plan"
        description="Download your free thyroid symptom checklist and 3-day meal plan designed to help you track symptoms, eat cleaner, and build structure fast."
        keywords={['thyroid symptom checklist', '3-day thyroid meal plan', 'hypothyroidism support', 'anti-inflammatory meal plan', 'thyroid-friendly recipes']}
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
              Free Thyroid Symptom Checklist + 3-Day Meal Plan
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get a focused starter pack: the thyroid symptom checklist that helps you track what is
              happening in your body, plus a practical 3-day meal plan to help you eat clean right away.
            </p>

            {/* Preview Image */}
            <div className="mb-12 relative">
              <div className="aspect-video rounded-2xl overflow-hidden border-2 border-primary/20 bg-muted">
                <img
                  src={leadMagnetImage}
                  alt="Free Thyroid Symptom Checklist and 3-Day Meal Plan preview"
                  className="h-full w-full object-cover"
                  loading="eager"
                  width="1280"
                  height="720"
                  onError={(e) => {
                    e.currentTarget.src = leadMagnetFallback;
                  }}
                />
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
                  title: "3-Day Structured Plan",
                  description: "Breakfast, lunch, dinner, and snacks for 3 practical days"
                },
                {
                  icon: UtensilsCrossed,
                  title: "Easy Thyroid-Friendly Meals",
                  description: "Simple, delicious ideas you can actually repeat during busy weeks"
                },
                {
                  icon: CheckCircle2,
                  title: "Checklist + Shopping Guide",
                  description: "Track symptoms and shop with less stress and more structure"
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
            <h2 className="text-3xl font-bold text-center mb-12">Sample Day from the 3-Day Plan</h2>
            
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
              <h2 className="text-3xl font-bold mb-4">Get Your Free Checklist + 3-Day Plan Now</h2>
              <p className="text-muted-foreground">
                Enter your email and I will send it straight to your inbox. Then confirm your
                subscription email to unlock the free download.
              </p>
            </div>

            <BeehiivSubscribe 
              variant="card"
              title="Download Your Free Thyroid Starter Pack"
              description="Symptom checklist + 3-day meal plan + weekly support"
              buttonText="Send Me The Free Pack"
              source="free_meal_plan_page"
              magnetType="thyroid-checklist-3day-plan"
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
