import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import {
  ArrowRight,
  Sparkles,
  Scan,
  UtensilsCrossed,
  BookOpen,
  ShoppingBag,
  Heart,
  Zap,
  Users,
  CheckCircle,
} from "lucide-react";

/**
 * Welcome Back Landing Page for WordPress Migrated Subscribers
 * 
 * This page is specifically designed for the 1500+ subscribers who migrated
 * from WordPress. It highlights new features, explains the transition, and
 * guides them to explore the new AskDoGood site.
 * 
 * Route: /welcome-back
 */
export default function WelcomeBack() {
  const newFeatures = [
    {
      icon: Scan,
      title: "Smart Label Scanner",
      description: "AI-powered food label analysis with personalized health insights based on your conditions and goals.",
      link: "/label-scanner",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: UtensilsCrossed,
      title: "Clinical Recipe Database",
      description: "Thyroid-friendly, anti-inflammatory recipes with meal planning and shopping list features.",
      link: "/clinical-recipes",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: BookOpen,
      title: "Thyroid Health Mastery Course",
      description: "Comprehensive course on managing thyroid health, reading labs, and optimizing wellness.",
      link: "/shop",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: ShoppingBag,
      title: "Wellness Shop",
      description: "Access exclusive courses, meal plans, and resources designed for your healing journey.",
      link: "/shop",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const whatsNew = [
    "Modern, mobile-first design optimized for all devices",
    "Faster page loads and better performance",
    "Enhanced blog with better search and filtering",
    "Improved email newsletter experience with Beehiiv",
    "New interactive tools: Label Scanner and Recipe App",
    "Seamless shopping experience for courses and resources",
  ];

  return (
    <>
      <SEO
        title="Welcome Back! - AskDoGood Has Moved"
        description="Welcome back to AskDoGood! We've moved from WordPress with exciting new features including Label Scanner, Recipe App, and improved wellness resources."
        keywords={['welcome back', 'site migration', 'new features', 'askdogood', 'thyroid health']}
        url="/welcome-back"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-bounce">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold text-primary">We've Upgraded!</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Welcome Back to
                <span className="block text-primary">AskDoGood! 🎉</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Thank you for being part of our community! We've moved from WordPress to bring you
                a better experience with powerful new tools for your wellness journey.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/blog">
                  <Button size="lg" className="gap-2">
                    Read the Latest
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button size="lg" variant="outline" className="gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Browse Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What's New Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's New & Improved</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've rebuilt the site from the ground up with your experience in mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {whatsNew.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-secondary/20 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Features Grid */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Exciting New Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful tools designed to support your health and wellness goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {newFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={feature.link}>
                      <Button variant="outline" className="w-full gap-2">
                        Try It Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Your Data Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                  <CardTitle>Your Subscription Is Safe</CardTitle>
                </div>
                <CardDescription className="text-base">
                  We've migrated your email subscription to our new platform (Beehiiv). 
                  You'll continue receiving the same great content with an improved email experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    What This Means for You:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>No action needed - you're still subscribed!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Better email design and mobile experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Same trusted content, new platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Easy unsubscribe if needed (we hope you stay!)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Join 1,500+ Community Members</CardTitle>
                <CardDescription className="text-base">
                  You're part of a growing community of people committed to holistic health and wellness
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Share your journey, ask questions, and find support from others on similar paths.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/about">
                    <Button variant="outline">Learn About RoSeé</Button>
                  </Link>
                  <Link href="/journey">
                    <Button variant="outline">Read Her Story</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stay Connected */}
        <section className="py-16 bg-secondary/30">
          <div className="container max-w-4xl">
            <BeehiivSubscribe
              variant="card"
              title="Want Even More Content?"
              description="Make sure you're getting all our latest articles, recipes, and wellness tips delivered to your inbox."
            />
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quick Links to Get Started</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <BookOpen className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Read the Blog</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              
              <Link href="/label-scanner">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <Scan className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Label Scanner</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              
              <Link href="/clinical-recipes">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <UtensilsCrossed className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Recipe Database</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              
              <Link href="/shop">
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <ShoppingBag className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Browse Courses</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
