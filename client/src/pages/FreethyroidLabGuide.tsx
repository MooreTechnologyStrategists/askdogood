import { useEffect } from "react";
import { CheckCircle2, Download, FileText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import SEO from "@/components/SEO";
import { trackLeadMagnetView } from "@/lib/analytics";
import { useScrollDepthTracking } from "@/hooks/useScrollDepthTracking";

export default function FreeThyroidLabGuide() {
  // Track page view on mount
  useEffect(() => {
    trackLeadMagnetView('thyroid-lab-guide', '/free-thyroid-lab-guide');
  }, []);

  // Track scroll depth
  useScrollDepthTracking('Lead Magnet: Thyroid Lab Guide');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <SEO
        title="Free Thyroid Lab Interpretation Guide"
        description="Get your free comprehensive guide to understanding thyroid labs - TSH, Free T3, Free T4, antibodies and more. Learn optimal ranges and what your numbers really mean."
        keywords={['thyroid labs', 'TSH interpretation', 'thyroid test results', 'free T3', 'free T4', 'thyroid antibodies', 'lab guide']}
        url="/free-thyroid-lab-guide"
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
              The Ultimate Thyroid Lab Interpretation Guide
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop guessing what your thyroid labs mean. Get instant access to my comprehensive guide 
              that breaks down every test, explains optimal vs. "normal" ranges, and shows you exactly 
              what to discuss with your doctor.
            </p>

            {/* Preview Image */}
            <div className="mb-12 relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                <FileText className="h-24 w-24 text-primary/40" />
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg rotate-12">
                100% FREE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Inside This Guide</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "TSH Explained",
                  description: "Learn what TSH really measures, why the 'normal' range is too broad, and what your optimal TSH should be."
                },
                {
                  title: "Free T3 & Free T4",
                  description: "Understand the difference between bound and free hormones and why these numbers matter more than TSH alone."
                },
                {
                  title: "Thyroid Antibodies",
                  description: "Discover TPO and TG antibodies, what high levels mean, and how to track autoimmune progression."
                },
                {
                  title: "Reverse T3",
                  description: "Learn about the often-missed test that can reveal why you're still exhausted despite 'normal' labs."
                },
                {
                  title: "Optimal vs. Normal",
                  description: "See the chart comparing standard ranges to functional medicine optimal ranges for each marker."
                },
                {
                  title: "Questions to Ask",
                  description: "Get the exact questions to ask your doctor to get the tests you need and treatment you deserve."
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg italic mb-4">
              "This guide helped me understand my labs better than my doctor ever explained them. 
              I finally knew what questions to ask and what changes to request. Game changer!"
            </blockquote>
            <p className="font-semibold">— Sarah K., Hashimoto's Patient</p>
          </div>
        </div>
      </section>

      {/* Opt-in Form */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Guide Now</h2>
              <p className="text-muted-foreground">
                Enter your email below and I'll send it straight to your inbox. Plus, you'll get weekly 
                thyroid health tips and exclusive content I only share with subscribers.
              </p>
            </div>

            <BeehiivSubscribe 
              variant="card"
              title="Download Your Free Thyroid Lab Guide"
              description="Get instant access + weekly wellness tips"
              buttonText="Send Me The Guide"
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
              <p className="text-xs text-muted-foreground">
                Over 1,000+ thyroid warriors have downloaded this guide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Created This */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Why I Created This Guide</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground">
                For years, I was told my thyroid labs were "normal" while I felt anything but normal. 
                I was exhausted, gaining weight, losing hair, and struggling through every day.
              </p>
              <p className="text-muted-foreground">
                It wasn't until I learned to read my labs myself and understand what "optimal" really 
                meant that I could advocate for better treatment. That knowledge changed everything.
              </p>
              <p className="text-muted-foreground">
                I created this guide so you don't have to spend years figuring it out like I did. 
                You deserve to understand your own body and feel empowered in doctor's appointments.
              </p>
              <p className="font-semibold text-center mt-6">
                — RoSeé Murphy, Thyroid Health Advocate & Microsoft Engineer
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
