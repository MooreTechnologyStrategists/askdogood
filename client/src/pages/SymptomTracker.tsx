import { useEffect } from "react";
import { CheckCircle2, Download, ClipboardList, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import SEO from "@/components/SEO";
import { trackLeadMagnetView } from "@/lib/analytics";
import { useScrollDepthTracking } from "@/hooks/useScrollDepthTracking";

export default function SymptomTracker() {
  useEffect(() => {
    trackLeadMagnetView('symptom-tracker', '/symptom-tracker');
  }, []);

  useScrollDepthTracking('Lead Magnet: Symptom Tracker');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <SEO
        title="Free Thyroid Symptom Tracker"
        description="Download your free printable thyroid symptom tracker. Monitor your daily symptoms, energy levels, and progress to share with your doctor."
        keywords={['thyroid symptom tracker', 'hypothyroidism symptoms', 'health journal', 'symptom diary', 'thyroid tracking']}
        url="/symptom-tracker"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Download className="h-4 w-4" />
              <span>FREE PRINTABLE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Thyroid Symptom Tracker
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Track your symptoms, identify patterns, and have concrete data to share with your doctor. 
              This simple tracker helps you see what's working and what needs adjustment.
            </p>

            {/* Preview Image */}
            <div className="mb-12 relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                <ClipboardList className="h-24 w-24 text-primary/40" />
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg rotate-12">
                PRINTABLE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track These Symptoms */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Track</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: "Energy & Fatigue",
                  symptoms: ["Morning energy level", "Afternoon crashes", "Overall fatigue", "Need for naps"]
                },
                {
                  category: "Mental & Mood",
                  symptoms: ["Brain fog", "Memory issues", "Mood swings", "Anxiety or depression"]
                },
                {
                  category: "Physical Symptoms",
                  symptoms: ["Hair loss", "Dry skin", "Cold sensitivity", "Joint pain"]
                },
                {
                  category: "Digestive Health",
                  symptoms: ["Bloating", "Constipation", "Appetite changes", "Weight fluctuations"]
                },
                {
                  category: "Sleep Quality",
                  symptoms: ["Hours slept", "Sleep quality", "Nighttime waking", "Morning alertness"]
                },
                {
                  category: "Medication & Supplements",
                  symptoms: ["Dose taken", "Time taken", "Side effects", "Missed doses"]
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">{item.category}</h3>
                    <ul className="space-y-2">
                      {item.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Track Symptoms */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Tracking Matters</h2>
            
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Identify Patterns</h3>
                      <p className="text-muted-foreground">
                        See how your symptoms change with medication adjustments, diet changes, 
                        stress levels, or menstrual cycle. Patterns emerge that you'd otherwise miss.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <ClipboardList className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Better Doctor Visits</h3>
                      <p className="text-muted-foreground">
                        Instead of saying "I'm tired," you can say "My energy was 3/10 for 5 days 
                        after my medication increase." Concrete data gets better treatment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Measure Progress</h3>
                      <p className="text-muted-foreground">
                        When healing happens slowly, it's hard to see progress. Your tracker shows 
                        you how far you've come, even when it doesn't feel like it.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">How to Use Your Tracker</h2>
            
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Print or Save",
                  description: "Print weekly pages or use digitally on your tablet"
                },
                {
                  step: "2",
                  title: "Fill Daily",
                  description: "Takes just 2-3 minutes each evening before bed"
                },
                {
                  step: "3",
                  title: "Review Weekly",
                  description: "Look for patterns every Sunday - what improved? What got worse?"
                },
                {
                  step: "4",
                  title: "Share with Doctor",
                  description: "Bring to appointments to show objective symptom data"
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start p-4 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opt-in Form */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Symptom Tracker</h2>
              <p className="text-muted-foreground">
                Enter your email and I'll send it straight to your inbox. Plus weekly tips on 
                managing thyroid symptoms naturally.
              </p>
            </div>

            <BeehiivSubscribe 
              variant="card"
              title="Download Your Free Symptom Tracker"
              description="Get instant access + weekly wellness tips"
              buttonText="Send Me The Tracker"
            />

            <div className="mt-6 text-center space-y-2">
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Instant Access
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Printable PDF
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
