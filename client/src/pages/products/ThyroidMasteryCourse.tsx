import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Video, Clock, Users, Award } from "lucide-react";
import { Link } from "wouter";

export default function ThyroidMasteryCourse() {
  // Gumroad product link
  const gumroadLink = "https://askdogood.gumroad.com/l/thyroid-mastery";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200"
                    alt="Thyroid Health Mastery Course"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-full shadow-xl">
                  <p className="text-sm font-bold">BESTSELLER</p>
                </div>
              </div>

              {/* Right: Info */}
              <div>
                <Badge className="mb-4">ONLINE COURSE</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Thyroid Health Mastery Course
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Master your thyroid health with expert guidance and proven protocols. Everything you need to understand, manage, and optimize your thyroid health.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">1,500+ Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">6 Video Modules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">3+ Hours Content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Lifetime Access</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg border-2 border-primary/20 mb-6">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl font-bold">$97</span>
                    <span className="text-muted-foreground line-through">$197</span>
                    <Badge variant="secondary">50% OFF</Badge>
                  </div>
                  <a href={gumroadLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full gap-2 rounded-xl text-lg">
                      Enroll Now - Start Learning Today
                    </Button>
                  </a>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    30-Day Money-Back Guarantee • Instant Access
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">4.9/5.0 (312 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
            
            <div className="space-y-6">
              {/* Module 1 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Module 1: Understanding Your Thyroid</CardTitle>
                      <CardDescription>35 minutes</CardDescription>
                    </div>
                    <Badge>Video</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Thyroid anatomy and function explained simply</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Common thyroid conditions (Hashimoto's, Hypothyroidism, Hyperthyroidism)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>How thyroid affects every body system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Why Black women are at higher risk</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Module 2 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Module 2: Lab Work Mastery</CardTitle>
                      <CardDescription>40 minutes</CardDescription>
                    </div>
                    <Badge>Video</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>TSH, Free T3, Free T4 explained in plain language</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Understanding thyroid antibodies and Reverse T3</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>Optimal vs. "normal" lab ranges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>When to request additional testing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Additional modules preview */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Module 3: Medication Deep Dive</CardTitle>
                    <CardDescription>30 min</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Module 4: Nutrition for Thyroid Health</CardTitle>
                    <CardDescription>45 min</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Module 5: Lifestyle Optimization</CardTitle>
                    <CardDescription>35 min</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Module 6: Healthcare Advocacy</CardTitle>
                    <CardDescription>25 min</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "This course changed everything. I finally understand my body and how to advocate for myself. Within 3 months, my energy returned and I feel like ME again."
                  </p>
                  <p className="font-semibold">Maya T.</p>
                  <p className="text-sm text-muted-foreground">Washington, DC</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "I've spent thousands on doctors who didn't listen. This $97 course gave me more practical information than years of appointments. RoSeé just GETS it."
                  </p>
                  <p className="font-semibold">Keisha M.</p>
                  <p className="text-sm text-muted-foreground">Baltimore, MD</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Master Your Thyroid Health?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 1,500+ students who've transformed their health with this comprehensive course.
            </p>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 text-foreground mb-6">
              <div className="flex items-baseline justify-center gap-3 mb-6">
                <span className="text-5xl font-bold">$97</span>
                <span className="text-muted-foreground line-through text-2xl">$197</span>
              </div>
              <a href={gumroadLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full gap-2 rounded-xl text-lg">
                  Enroll Now - Get Instant Access
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                30-Day Money-Back Guarantee • Secure Payment via Gumroad
              </p>
            </div>
            <p className="text-sm opacity-75">
              Questions? Email askdogood@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
