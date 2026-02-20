import { useEffect } from "react";
import { CheckCircle2, Download, FileText, Stethoscope, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import SEO from "@/components/SEO";
import { trackLeadMagnetView } from "@/lib/analytics";
import { useScrollDepthTracking } from "@/hooks/useScrollDepthTracking";

export default function DoctorChecklist() {
  useEffect(() => {
    trackLeadMagnetView('doctor-checklist', '/doctor-checklist');
  }, []);

  useScrollDepthTracking('Lead Magnet: Doctor Checklist');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <SEO
        title="Free Doctor Appointment Prep Checklist"
        description="Download your free checklist for thyroid doctor appointments. Get the questions to ask, tests to request, and how to advocate for better treatment."
        keywords={['doctor appointment checklist', 'thyroid doctor questions', 'healthcare advocacy', 'thyroid appointment prep']}
        url="/doctor-checklist"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Download className="h-4 w-4" />
              <span>FREE CHECKLIST</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Doctor Appointment Prep Checklist
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop leaving doctor appointments feeling unheard. Get the exact checklist I use to 
              prepare for appointments, ask the right questions, and get the tests and treatment I need.
            </p>

            {/* Preview Image */}
            <div className="mb-12 relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                <Stethoscope className="h-24 w-24 text-primary/40" />
              </div>
              <div className="absolute -top-4 -right-4 bg-teal-400 text-teal-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg rotate-12">
                ADVOCATE BETTER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's on the Checklist</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                    <h3 className="font-bold text-lg">Before Your Appointment</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Review your symptom tracker
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      List current medications & supplements
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Note any new symptoms or changes
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Bring previous lab results
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Write down your top 3 concerns
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MessageSquare className="h-6 w-6 text-primary flex-shrink-0" />
                    <h3 className="font-bold text-lg">Questions to Ask</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      "What are my exact lab numbers?"
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      "Can we test Free T3 and Free T4?"
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      "What's my antibody level?"
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      "Could we try adjusting my dose?"
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      "What lifestyle changes would help?"
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Stethoscope className="h-6 w-6 text-primary flex-shrink-0" />
                    <h3 className="font-bold text-lg">Tests to Request</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      TSH (if not recently tested)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Free T3 and Free T4
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      TPO and TG antibodies
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Reverse T3 (if symptoms persist)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Vitamin D, B12, Ferritin, Iron
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                    <h3 className="font-bold text-lg">After Your Appointment</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Request copy of all lab results
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Get clear next steps in writing
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Schedule follow-up appointment
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Note any medication changes
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      Update your symptom tracker
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Scripts */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Bonus: Communication Scripts</h2>
            
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">When your doctor dismisses your symptoms:</h3>
                  <p className="text-sm text-muted-foreground italic">
                    "I understand the labs look normal, but I'm still experiencing [specific symptoms]. 
                    I've been tracking them daily and they're significantly impacting my quality of life. 
                    Can we explore what else might be causing this or consider adjusting my treatment?"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">When requesting additional tests:</h3>
                  <p className="text-sm text-muted-foreground italic">
                    "I've read that TSH alone doesn't always show the full picture. Would you be willing 
                    to order Free T3, Free T4, and antibody tests so we can see more detail? I'm 
                    committed to managing this actively."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">When considering a medication change:</h3>
                  <p className="text-sm text-muted-foreground italic">
                    "I've been on this dose for [X months] and still experiencing [symptoms]. Could we 
                    try a small adjustment and retest in 6-8 weeks to see if it helps? I'm tracking my 
                    symptoms daily so we'll have clear data."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Why This Checklist Matters</h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground">
                I wasted years in appointments where I left feeling dismissed, confused, or worse - 
                with no clear plan. I'd forget to mention important symptoms, fail to ask for the 
                tests I needed, and accept "normal" results when I felt terrible.
              </p>
              <p className="text-muted-foreground">
                This checklist is what I created after countless frustrating appointments. It helps 
                you show up prepared, advocate clearly, and leave with actionable next steps. 
                Your doctor works for YOU - this helps you work together effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opt-in Form */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Checklist</h2>
              <p className="text-muted-foreground">
                Enter your email and I'll send it straight to your inbox. You'll also get 
                weekly tips on advocating for better thyroid care.
              </p>
            </div>

            <BeehiivSubscribe 
              variant="card"
              title="Download Your Free Doctor Appointment Checklist"
              description="Get instant access + advocacy tips"
              buttonText="Send Me The Checklist"
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
