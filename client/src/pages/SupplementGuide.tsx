import { useEffect } from "react";
import { CheckCircle2, Download, Pill, ShoppingCart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import SEO from "@/components/SEO";
import { trackLeadMagnetView } from "@/lib/analytics";
import { useScrollDepthTracking } from "@/hooks/useScrollDepthTracking";

export default function SupplementGuide() {
  useEffect(() => {
    trackLeadMagnetView('supplement-guide', '/supplement-guide');
  }, []);

  useScrollDepthTracking('Lead Magnet: Supplement Guide');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <SEO
        title="Free Thyroid Supplement Guide"
        description="Get your free guide to thyroid-supporting supplements. Learn which supplements help, proper dosing, timing, and trusted brands."
        keywords={['thyroid supplements', 'selenium thyroid', 'zinc thyroid', 'vitamin D thyroid', 'supplement guide', 'thyroid support']}
        url="/supplement-guide"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Download className="h-4 w-4" />
              <span>FREE GUIDE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Thyroid Supplement Guide
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop wasting money on supplements that don't work. Get the complete guide to 
              thyroid-supporting supplements, including what to take, when to take it, and 
              which brands are actually worth buying.
            </p>

            {/* Preview Image */}
            <div className="mb-12 relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                <Pill className="h-24 w-24 text-primary/40" />
              </div>
              <div className="absolute -top-4 -right-4 bg-purple-400 text-purple-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg rotate-12">
                RESEARCH-BACKED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplements Covered */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Supplements Covered</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Selenium",
                  benefit: "Supports T4 to T3 conversion, reduces antibodies",
                  dose: "200mcg daily",
                  timing: "With food"
                },
                {
                  name: "Zinc",
                  benefit: "Essential for thyroid hormone production",
                  dose: "15-30mg daily",
                  timing: "Away from thyroid meds"
                },
                {
                  name: "Vitamin D",
                  benefit: "Reduces autoimmune activity, supports immunity",
                  dose: "2000-5000 IU daily",
                  timing: "With fatty meal"
                },
                {
                  name: "Magnesium",
                  benefit: "Helps convert T4 to T3, reduces stress",
                  dose: "300-400mg daily",
                  timing: "Before bed"
                },
                {
                  name: "Iron",
                  benefit: "Necessary for thyroid peroxidase enzyme",
                  dose: "If deficient only",
                  timing: "Away from thyroid meds"
                },
                {
                  name: "B-Complex",
                  benefit: "Supports energy, methylation, nervous system",
                  dose: "B-complex daily",
                  timing: "Morning with food"
                },
                {
                  name: "Omega-3",
                  benefit: "Reduces inflammation, supports brain health",
                  dose: "1000-2000mg EPA/DHA",
                  timing: "With meals"
                },
                {
                  name: "L-Tyrosine",
                  benefit: "Building block for thyroid hormones",
                  dose: "500-1000mg",
                  timing: "Empty stomach"
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.benefit}</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dose:</span>
                        <span className="font-medium">{item.dose}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Timing:</span>
                        <span className="font-medium">{item.timing}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Inside the Guide</h2>
            
            <div className="space-y-4">
              {[
                "Detailed overview of 12 essential thyroid-supporting supplements",
                "Optimal dosages based on research and clinical experience",
                "Best time to take each supplement for maximum absorption",
                "Which supplements interact with thyroid medication (critical!)",
                "Trusted brands I personally use and recommend",
                "Budget-friendly options that don't sacrifice quality",
                "Warning signs of deficiency for each nutrient",
                "When to test levels before supplementing",
                "Supplement stacking guide: what to combine for best results",
                "What NOT to take if you have Hashimoto's or hyperthyroidism"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
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
              "I was taking all the wrong supplements at the wrong times! This guide saved me 
              hundreds of dollars and actually helped me feel better. The brand recommendations 
              alone were worth it."
            </blockquote>
            <p className="font-semibold">— Jennifer M., Hashimoto's Patient</p>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-yellow-50 dark:bg-yellow-950/20 border-y border-yellow-200 dark:border-yellow-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              ⚠️ Important Note
            </h3>
            <p className="text-sm text-muted-foreground">
              Always consult with your healthcare provider before starting new supplements, 
              especially if you're taking thyroid medication. This guide is for educational purposes 
              and based on my personal research and experience. Individual needs vary.
            </p>
          </div>
        </div>
      </section>

      {/* Opt-in Form */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Supplement Guide</h2>
              <p className="text-muted-foreground">
                Enter your email and I'll send it straight to your inbox. Plus, you'll get 
                exclusive discounts on my recommended supplement brands.
              </p>
            </div>

            <BeehiivSubscribe 
              variant="card"
              title="Download Your Free Supplement Guide"
              description="Get instant access + supplement discounts"
              buttonText="Send Me The Guide"
            />

            <div className="mt-6 text-center space-y-2">
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Instant Access
                </span>
                <span className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                  Brand Discounts
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  No Spam Ever
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
