import { useEffect } from "react";
import { Check, Star, Calendar, Video, FileText, MessageCircle, Shield, Clock, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { trackCoachingPageView, trackCoachingCTAClick } from "@/lib/analytics";
import { useScrollDepthTracking } from "@/hooks/useScrollDepthTracking";

export default function OneOnOneCoaching() {
  useEffect(() => {
    trackCoachingPageView();
  }, []);

  useScrollDepthTracking('Coaching Page');

  const handleCTAClick = (packageType: string, packageValue: number) => {
    trackCoachingCTAClick(packageType, packageValue);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="1-on-1 Thyroid Health Coaching | Work With RoSeé"
        description="Get personalized 1-on-1 thyroid health coaching with RoSeé Murphy. Lab review, supplement protocols, meal planning, and ongoing support for Hashimoto's and hypothyroidism."
        keywords={['thyroid coaching', '1-on-1 coaching', 'Hashimoto\'s coach', 'thyroid health consultant', 'personalized thyroid support']}
        url="/coaching"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Limited Spots Available</Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              1-on-1 Thyroid Health Coaching
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stop guessing. Get personalized support from someone who's been exactly where you are 
              and understands both the science and the struggle of living with thyroid disease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild className="rounded-full text-lg px-8">
                <a href="#pricing">View Packages</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full text-lg px-8">
                <a href="#how-it-works">How It Works</a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>50+ Clients Helped</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">This Coaching Is For You If...</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "You're newly diagnosed and overwhelmed with where to start",
                "Your doctor says your labs are 'normal' but you still feel terrible",
                "You're on medication but still struggling with symptoms",
                "You want to understand your labs and advocate for better treatment",
                "You're tired of one-size-fits-all advice that doesn't work for you",
                "You want personalized meal plans for YOUR specific situation",
                "You need help navigating supplements and what actually works",
                "You want accountability and support from someone who GETS it"
              ].map((item, idx) => (
                <Card key={idx} className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="font-medium">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section id="how-it-works" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">What's Included in Every Session</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Each 60-minute session is tailored specifically to YOU and where you are in your healing journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Lab Review & Interpretation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We'll review your labs together, identify patterns, and create a plan for optimal ranges - 
                    not just "normal" ones.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <Video className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Personalized Protocols</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get custom supplement protocols, meal plans, and lifestyle strategies designed 
                    for YOUR specific thyroid condition and symptoms.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <MessageCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Between sessions, email me your questions. I'll respond within 48 hours so you're 
                    never stuck waiting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Coaching Packages</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Single Session */}
              <Card className="border-2">
                <CardHeader>
                  <Badge className="w-fit mb-2">Single Session</Badge>
                  <CardTitle className="text-2xl">Discovery Call</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$297</span>
                    <span className="text-muted-foreground">/session</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Perfect if you need one-time guidance or want to try coaching before committing.</p>
                  
                  <ul className="space-y-3">
                    {[
                      "60-minute video call",
                      "Lab review & interpretation",
                      "Personalized action plan",
                      "Resource recommendations",
                      "48-hour email follow-up"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full rounded-full" asChild onClick={() => handleCTAClick('discovery-call', 297)}>
                    <Link href="/contact?subject=discovery-call">Book Discovery Call</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Monthly Package */}
              <Card className="border-2 border-primary relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="secondary">Monthly</Badge>
                  <CardTitle className="text-2xl">Transformation Package</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$997</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400">Save $191/month</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Best for creating lasting change with consistent support and accountability.</p>
                  
                  <ul className="space-y-3">
                    {[
                      "4 x 60-minute sessions/month",
                      "Complete lab analysis & tracking",
                      "Custom meal & supplement plans",
                      "Weekly email check-ins",
                      "Priority support (24hr response)",
                      "Progress tracking & adjustments",
                      "Private resource library access"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full rounded-full" size="lg" asChild onClick={() => handleCTAClick('transformation', 997)}>
                    <Link href="/contact?subject=transformation-package">Start Transformation</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* VIP Package */}
              <Card className="border-2 border-secondary">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">VIP</Badge>
                  <CardTitle className="text-2xl">VIP Intensive</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$1,997</span>
                    <span className="text-muted-foreground">one-time</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Full-day intensive for rapid transformation when you need answers NOW.</p>
                  
                  <ul className="space-y-3">
                    {[
                      "Full-day 1-on-1 intensive (4 hours)",
                      "Deep-dive lab analysis",
                      "Complete health history review",
                      "90-day personalized protocol",
                      "Custom meal plan & recipes",
                      "Supplement protocol & sourcing",
                      "30 days of email support",
                      "2 follow-up calls (30 min each)"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full rounded-full" variant="secondary" asChild onClick={() => handleCTAClick('vip', 1997)}>
                    <Link href="/contact?subject=vip-intensive">Apply for VIP Day</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">100% Satisfaction Guarantee</h3>
                  <p className="text-sm text-muted-foreground">
                    If after your first session you don't feel like this coaching is right for you, 
                    I'll refund you in full. No questions asked. Your healing journey matters more than anything.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Jessica T.",
                  condition: "Hashimoto's",
                  result: "TSH went from 4.5 to 1.8 in 3 months",
                  quote: "RoSeé helped me understand my labs better than any doctor ever did. She gave me a clear plan, supported me through medication adjustments, and celebrated every win with me. My energy is back and I finally feel like myself again."
                },
                {
                  name: "Danielle W.",
                  condition: "Hypothyroidism",
                  result: "Lost 25 lbs, energy restored",
                  quote: "After years of feeling dismissed by doctors, RoSeé actually listened and believed me. Her meal plans were practical and delicious, not restrictive. The accountability calls kept me going when I wanted to give up."
                },
                {
                  name: "Tamara M.",
                  condition: "Post-Thyroidectomy",
                  result: "Symptom-free for 6 months",
                  quote: "Managing life without a thyroid felt impossible until I started coaching with RoSeé. She understood the unique challenges and helped me optimize my medication and supplements. I haven't felt this good in years."
                },
                {
                  name: "Angela R.",
                  condition: "Graves' Disease",
                  result: "Antibodies decreased 60%",
                  quote: "The VIP intensive was worth every penny. RoSeé gave me a complete roadmap for healing. Her personal experience with autoimmune disease made all the difference - she gets it on a level doctors just don't."
                }
              ].map((testimonial, idx) => (
                <Card key={idx} className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                      <Badge className="mt-2" variant="secondary">{testimonial.result}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Work With Me</h2>
            
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground">
                I'm not just a coach - I'm someone who's lived through 7+ years of thyroid disease, 
                5 autoimmune diagnoses, countless doctor appointments, and the frustration of being 
                told "your labs are normal" while feeling anything but.
              </p>
              <p className="text-muted-foreground">
                I'm also a Microsoft engineer who approaches health with both heart and science. 
                I've spent thousands of hours researching, testing, and refining what works - not just 
                in theory, but in real life while managing a demanding career, relationships, and everything else.
              </p>
              <p className="text-muted-foreground">
                When you work with me, you get someone who understands the medical side AND the emotional 
                side. Someone who will celebrate your wins and support you through setbacks. Someone who 
                won't give up on you even when you want to give up on yourself.
              </p>
              <p className="font-semibold text-lg mt-6">
                You deserve to feel better. Let me help you get there.
              </p>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild className="rounded-full px-8">
                <Link href="/contact?subject=coaching-inquiry">Schedule Your Discovery Call</Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Limited spots available • Usually booked 2-3 weeks out
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Do you take insurance?",
                  a: "No, coaching is not covered by insurance. However, I can provide a receipt for FSA/HSA reimbursement if your plan covers health coaching."
                },
                {
                  q: "Are you a doctor?",
                  a: "No, I'm not a medical doctor. I'm a health coach with personal experience managing thyroid disease. I don't diagnose or prescribe - instead, I educate, support, and help you advocate for yourself with your medical team."
                },
                {
                  q: "Do I need to have lab work before we start?",
                  a: "Not required, but helpful! If you have recent labs (within 3 months), bring them. If not, I'll help you know what to request from your doctor."
                },
                {
                  q: "Can you work with me if I'm on medication?",
                  a: "Absolutely! Most of my clients are on thyroid medication. I help optimize everything around your medication to support better outcomes."
                },
                {
                  q: "What if I can't afford monthly coaching?",
                  a: "Start with a single Discovery Call, or check out my self-paced Thyroid Health Mastery Course ($97) which includes much of what we cover in coaching."
                },
                {
                  q: "How quickly will I see results?",
                  a: "Everyone's different, but most clients notice improved energy and reduced symptoms within 4-6 weeks of implementing changes. Lab improvements typically take 8-12 weeks."
                }
              ].map((faq, idx) => (
                <Card key={idx} className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Take Control of Your Thyroid Health?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Let's create your personalized path to healing together.
            </p>
            <Button size="lg" variant="secondary" asChild className="rounded-full px-8 text-lg">
              <Link href="/contact?subject=coaching">Book Your Discovery Call Today</Link>
            </Button>
            <p className="text-sm opacity-75 mt-4">
              ✓ 60-Day Money-Back Guarantee ✓ Flexible Scheduling ✓ Virtual Sessions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
