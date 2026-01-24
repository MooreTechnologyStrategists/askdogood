import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Sparkles,
  HeartPulse,
  BookOpen,
  UtensilsCrossed,
  ShieldCheck,
  Users,
  Star,
  Quote,
  Gift,
  TrendingUp,
  Zap,
} from "lucide-react";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import GardenSeasonsSection from "@/components/GardenSeasonsSection";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import AffiliateProductRecommendations from "@/components/AffiliateProductRecommendations";
import SpicyCarousel from "@/components/SpicyCarousel";
import ExternalNewsFeeds from "@/components/ExternalNewsFeeds";
import { gardenSeasons } from "@/content/gardenSeasons";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* LOGO HEADER - Clean and Professional */}
      <section className="py-8 border-b bg-gradient-to-r from-background via-primary/5 to-background">
        <div className="container">
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://askdogoodassets.blob.core.windows.net/images/brand/logo-flower-circle.webp"
              alt="Ask DoGood"
              className="h-24 w-24 object-contain drop-shadow-lg"
              loading="eager"
            />
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Ask DoGood
              </h1>
              <p className="text-sm md:text-base text-primary font-medium mt-1">
                Healing. Structure. Real-life growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECTION - Main Value Proposition */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Images Grid */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 opacity-20">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop" alt="" className="w-full h-48 object-cover rounded-lg" />
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop" alt="" className="w-full h-48 object-cover rounded-lg" />
          <img src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop" alt="" className="w-full h-48 object-cover rounded-lg" />
          <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop" alt="" className="w-full h-48 object-cover rounded-lg" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Healing.Structure.<br />
              <span className="text-primary">Real-life Growth.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join 1,000+ thyroid warriors who've taken control of their health with real food, real talk, and real results. No BS, just healing.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">1,000+ Warriors</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="font-semibold">7+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-primary" />
                <span className="font-semibold">100% Real Talk</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BeehiivSubscribe variant="inline" />
            </div>
            
            <p className="text-sm text-muted-foreground">
              📧 Free Thyroid Symptom Checklist + 3-Day Meal Plan
            </p>
          </div>
        </div>
      </section>

      {/* MUHAMMAD FAMILY QUOTE - Simple & Impactful */}
      <section className="py-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-primary/30 mx-auto mb-4" />
            <blockquote className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              "Miss RoSeé's food isn't salty, but it's SO tasty!"
            </blockquote>
            <p className="text-muted-foreground">— Muhammad Family</p>
          </div>
        </div>
      </section>

      {/* 4-CARD FEATURE GRID - Everything You Need */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Everything You Need to <span className="text-primary">Heal & Thrive</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical tools + real talk — designed to help you stabilize, rebuild, and level up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Thyroid-Healing Recipes */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800" 
                  alt="Thyroid-friendly recipes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Thyroid-Healing Recipes</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Curated meals designed for real conditions. Low sodium, allergen-friendly, and actually delicious.
                </p>
                <Link href="/clinical-recipes">
                  <Button className="w-full gap-2 group/btn">
                    Explore Recipes
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Card 2: Warrior Community */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800" 
                  alt="Diverse warrior community"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Warrior Community</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Connect with 1,000+ thyroid warriors. Share wins, ask questions, find your tribe.
                </p>
                <Link href="/contact">
                  <Button className="w-full gap-2 group/btn">
                    Join the Tribe
                    <Users className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Card 3: Book a Session */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800" 
                  alt="One-on-one consultation with diverse clients"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Book a Session</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  1:1 consultations for meal planning, health coaching, or custom meal prep services.
                </p>
                <Link href="/contact">
                  <Button className="w-full gap-2 group/btn">
                    Schedule Now
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Card 4: Wellness Challenges */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30">
                <img 
                  src="https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?w=800" 
                  alt="Diverse people wellness challenges"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Wellness Challenges</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Small wins that compound. Weekly challenges to build structure and track progress.
                </p>
                <Link href="/shop">
                  <Button className="w-full gap-2 group/btn">
                    Start a Challenge
                    <TrendingUp className="h-4 w-4 group-hover/btn:translate-y-[-2px] transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground font-medium">
              Trusted by 1,000+ Warriors
            </p>
          </div>
        </div>
      </section>

      {/* MUHAMMAD FAMILY TESTIMONIAL - FULL STORY */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-bold text-white">DMV METRO AREA SUCCESS STORY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              The Muhammad Family: <span className="text-primary">5 Months of Transformation</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Upper Marlboro, MD • Found via Nextdoor App • May-September 2025
            </p>
          </div>

          <Card className="overflow-hidden border-2 border-primary/30 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side - Meal Prep Dishes */}
              <div className="relative h-[400px] md:h-auto bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="grid grid-cols-2 gap-2 p-4 h-full">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://askdogoodassets.blob.core.windows.net/images/testimonials/muhammad-dish-1.webp" 
                      alt="Lentil and chickpea burgers" 
                      className="w-full h-full object-cover" 
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"; }} 
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://askdogoodassets.blob.core.windows.net/images/testimonials/muhammad-dish-2.webp" 
                      alt="Quinoa and rice varieties" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400"; }} 
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://askdogoodassets.blob.core.windows.net/images/testimonials/muhammad-dish-3.webp" 
                      alt="Fresh vegetables and salad jars" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400"; }} 
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://askdogoodassets.blob.core.windows.net/images/testimonials/muhammad-dish-4.webp" 
                      alt="Salmon and vegan chili" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400"; }} 
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur p-3 rounded-lg">
                  <p className="text-white text-sm font-semibold">
                    📦 Weekly Meal Prep • 🚫 No Pork • 🌽 Corn Allergy-Friendly • 🧂 Low Sodium
                  </p>
                </div>
              </div>

              {/* Content Side */}
              <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-background to-primary/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                
                <blockquote className="text-xl md:text-2xl font-bold mb-6 leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                  "My 11-year-old son said it best: 'Miss RoSeé's food isn't salty, but it's SO tasty — even my baby sister loves it!'"
                </blockquote>

                <div className="space-y-4 text-muted-foreground mb-6">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">The Muhammad family of 6</strong> — two government employees working sedentary desk jobs, 
                    4 beautiful, disciplined children, and a Muslim household committed to healthy living — reached out via <strong className="text-foreground">Nextdoor</strong> with 
                    one goal: <em>learn to cook healthier meals for their family</em>.
                  </p>

                  <p className="leading-relaxed">
                    <strong className="text-foreground">The challenge:</strong> One child with a yellow corn allergy. No pork (perfect match for my lifestyle). 
                    Parents wanted weight loss. Dad's a chef himself — so the food had to be GOOD.
                  </p>

                  <p className="leading-relaxed">
                    <strong className="text-foreground">My solution:</strong> Weekly meal prep service featuring lentil burgers, chickpea burgers, 21-bean burgers, 
                    quinoa, couscous, 5 varieties of rice, white corn only, zucchini medleys, salad jars, salmon fillets, vegan chili, navy bean burgers, 
                    and perfectly seasoned veggies — all low sodium, minimal bad fats, maximum flavor.
                  </p>

                  <p className="leading-relaxed font-semibold text-foreground">
                    <strong>The sweetest moment?</strong> One weekend delivery felt like an award ceremony. The kids lined up to tell me how much they loved the food. 
                    The oldest said, "It's not salty but tasty, and pure enough for my baby sister to eat!" I was touched to my core. 💯
                  </p>

                  <p className="leading-relaxed text-lg text-foreground font-bold">
                    📍 5 months of service (May-Sept 2025)<br />
                    ✅ Family lost weight<br />
                    ✅ Learned to cook these meals themselves<br />
                    ✅ Mission accomplished — helping a beautiful family thrive
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/clinical-recipes">
                    <Button size="lg" className="gap-2 w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 group">
                      Get Custom Meal Plans 
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 group">
                      Book Consultation 
                      <Users className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* SPECIAL OFFERS & QUICK WINS */}
      <section className="py-16 bg-gradient-to-r from-amber-500/10 via-pink-500/10 to-purple-500/10 relative overflow-hidden">
        {/* 3D Background Effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-64 h-64 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500 px-4 py-2 rounded-full mb-4 animate-pulse shadow-xl">
              <span className="text-sm font-bold text-white">LIMITED TIME OFFERS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Start Healing <span className="text-primary">Today</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Grab these resources and start seeing results immediately
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Offer 1 */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all group border-2 border-primary/30">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg z-10">
                50% OFF
              </div>
              {/* Hero Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                <img 
                  src="https://askdogoodassets.blob.core.windows.net/images/courses/thyroid-course-hero.webp" 
                  alt="Thyroid Health Mastery Course"
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <div className="text-4xl mb-3">🎓</div>
                <CardTitle className="text-2xl">Thyroid Course</CardTitle>
                <CardDescription>Master your thyroid health in 6 modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">$48.50</span>
                    <span className="text-xl text-muted-foreground line-through">$97</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Code: <span className="font-mono bg-primary/10 px-2 py-1 rounded">MLKLEGACY</span>
                  </p>
                  <Link href="/shop">
                    <Button className="w-full gap-2 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-primary to-pink-600 group">
                      Enroll Now 
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Offer 2 */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all group border-2 border-green-500/30">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg z-10">
                FREE
              </div>
              {/* Hero Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                <img 
                  src="https://askdogoodassets.blob.core.windows.net/images/apps/clinical-food-rx-hero.webp" 
                  alt="Clinical Food RX App"
                  className="w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Clinical Food RX</CardTitle>
                <CardDescription>Personalized meal plans for YOUR symptoms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="text-sm text-green-600 font-medium">Always Free</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Input your conditions, get instant meal recommendations
                  </p>
                  <Link href="/clinical-recipes">
                    <Button variant="outline" className="w-full gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-green-500/50 hover:border-green-500 group">
                      Try It Now 
                      <TrendingUp className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Offer 3 */}
            <Card className="relative overflow-hidden hover:shadow-2xl transition-all group border-2 border-purple-500/30 transform hover:scale-105 duration-300">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg shadow-lg">
                NEW
              </div>
              {/* Chyna White Cover Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                <img 
                  src="https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-cover.webp" 
                  alt="Chyna White Series Cover"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Chyna White Series</CardTitle>
                <CardDescription>Fiction with attitude & real talk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">Free</span>
                    <span className="text-sm text-muted-foreground">18+ content</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    BB girl meets corporate boss. Unapologetically Black.
                  </p>
                  <Link href="/stories">
                    <Button variant="outline" className="w-full gap-2 group-hover:scale-105 transition-transform bg-gradient-to-r from-purple-600/10 to-pink-600/10">
                      Read Episode 1 <BookOpen className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* THYROID RESET TOOLKIT CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container max-w-4xl">
          <div id="thyroid-toolkit-signup"></div>
        </div>
      </section>

      {/* MY STORY / PERSONAL SECTION */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT: Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src="https://askdogoodassets.blob.core.windows.net/images/personal/outdoor-photoshoot.webp"
                    alt="Rosee Murphy - Thyroid Cancer Survivor & Wellness Advocate"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://askdogoodassets.blob.core.windows.net/images/personal/rosee-story.webp";
                    }}
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-6 shadow-2xl max-w-[240px] transform hover:scale-105 transition-transform">
                  <p className="text-sm font-semibold leading-snug">7+ years of thyroid recovery, countless lessons learned</p>
                </div>
                {/* Decorative Element */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/30 rounded-full blur-2xl" />
              </div>

              {/* RIGHT: Story */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-2">
                  <span className="text-sm font-medium text-primary">My Story</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
                  From Misdiagnosed to Mission-Driven
                </h2>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I spent years being told my thyroid symptoms were "just stress" or "in my head." 
                    The fatigue, brain fog, weight struggles—all dismissed. Until I couldn't ignore it anymore.
                  </p>
                  <p>
                    After finally getting diagnosed and having my thyroid removed, I realized the medical system 
                    wasn't designed to help people like us truly <em>heal</em>—just manage symptoms. So I became 
                    my own advocate, my own researcher, my own healer.
                  </p>
                  <p>
                    <strong>Seven years later,</strong> I've built a life I love despite chronic illness. 
                    I've learned that healing isn't linear, that structure creates freedom, and that 
                    you can thrive while being transparent about the struggle.
                  </p>
                  <p className="text-foreground font-medium">
                    AskDoGood is everything I wish someone had given me on day one. 
                    Real guidance. Real empathy. Real results.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link href="/about">
                    <Button size="lg" className="gap-2 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 group">
                      Read My Full Story 
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/journey">
                    <Button size="lg" variant="outline" className="gap-2 shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                      Start Your Journey
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARDEN SECTION - Seasons of Growth */}
      <section className="py-20 border-t">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Finding Peace in Growth</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Seasons of Growth: My Garden Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Gardening saved me. It taught me patience, faith, and the beauty of slow growth. 
                Each season mirrors life—planting, tending, harvesting, and letting go.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {gardenSeasons.map((season) => (
                <Link key={season.slug} href={`/garden/${season.slug}`}>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={season.heroImg}
                        alt={season.heroAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = '/assets/img/blog/_fallback/blog.webp';
                        }}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {season.title}
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>
                        {season.subtitle}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                "I try to find joy in everything. Even when it's draining or thankless, 
                the real reward is the wisdom you pick up along the way."
              </p>
              <Link href="/garden">
                <Button size="lg" variant="outline" className="gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
                  Explore All Seasons 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* REAL PEOPLE, REAL RESULTS - Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Real People, <span className="text-primary">Real Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands who've taken control of their thyroid health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-bold">Maya T.</p>
                    <p className="text-sm text-muted-foreground">Washington, DC</p>
                    <div className="inline-block mt-1 px-2 py-1 bg-primary/10 rounded text-xs font-medium text-primary">
                      Hypothyroidism
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "This course changed everything. I finally understand my body and how to advocate for myself. Within 3 months, my energy returned and I feel like ME again."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold">
                    K
                  </div>
                  <div>
                    <p className="font-bold">Keisha M.</p>
                    <p className="text-sm text-muted-foreground">Baltimore, MD</p>
                    <div className="inline-block mt-1 px-2 py-1 bg-green-500/10 rounded text-xs font-medium text-green-600 dark:text-green-400">
                      Post-Thyroidectomy
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "I've spent thousands on doctors who didn't listen. This $97 course gave me more practical information than years of appointments. RoSeé just GETS it."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
                    S
                  </div>
                  <div>
                    <p className="font-bold">Simone W.</p>
                    <p className="text-sm text-muted-foreground">Arlington, VA</p>
                    <div className="inline-block mt-1 px-2 py-1 bg-purple-500/10 rounded text-xs font-medium text-purple-600 dark:text-purple-400">
                      Hashimoto's Thyroiditis
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "As a newly diagnosed Hashimoto's patient, I was overwhelmed. This course broke everything down in a way that made sense. The community support alone is worth it!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* READ LABELS - Education Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-950/20 dark:via-pink-950/20 dark:to-purple-950/20 border-y">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Real Talk</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                I Teach My Clients to <span className="text-primary">READ LABELS!</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Because labels tell you everything—and hide just as much. Let's break down what you need to know.
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* The Organic Trap */}
              <Card className="border-l-4 border-l-orange-500 bg-white/70 dark:bg-zinc-900/70 backdrop-blur relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 dark:opacity-10">
                  <img 
                    src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400" 
                    alt="Organic label background"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400";
                    }}
                  />
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span>🏷️</span> The "Organic" Trap
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground relative z-10">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Here's what they don't tell you:</strong> If a product has <em>one</em> organic ingredient, 
                    they can slap "organic" on the label and charge you double. Read that again. ONE. INGREDIENT.
                  </p>
                  <p className="leading-relaxed">
                    So when you see "organic coconut water," check if it's actually coconut—or mostly water with a splash of coconut. 
                    The first ingredient listed is what the product <strong className="text-foreground">mainly consists of</strong>. 
                    If water's first, you're paying premium prices for diluted product.
                  </p>
                </CardContent>
              </Card>

              {/* Sodium Reality Check */}
              <Card className="border-l-4 border-l-pink-500 bg-white/70 dark:bg-zinc-900/70 backdrop-blur relative overflow-hidden">
                {/* Background Image - Salt Shaker on Fries */}
                <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 dark:opacity-10">
                  <img 
                    src="https://images.unsplash.com/photo-1526346698789-22d93a86419f?w=400" 
                    alt="Salt shaker on food background"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=400";
                    }}
                  />
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span>🧂</span> Sodium: The Silent Saboteur
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground relative z-10">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">For my high blood pressure warriors:</strong> This is critical. 
                    Processed foods are LOADED with sodium. And that "small" bag of chips? Check the servings.
                  </p>
                  <div className="bg-pink-50 dark:bg-pink-950/30 p-6 rounded-lg space-y-3">
                    <p className="text-foreground font-semibold">Let's do the math:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li><strong>Bag says:</strong> 150mg sodium per serving</li>
                      <li><strong>Servings per bag:</strong> 6</li>
                      <li><strong>You eat the whole bag:</strong> 150mg × 6 = <span className="text-pink-700 dark:text-pink-400 font-bold">900mg sodium</span></li>
                      <li><strong>That was just a SNACK.</strong></li>
                    </ul>
                  </div>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Pro tip:</strong> If you're managing high blood pressure, aim for around <strong>1,200mg of sodium daily</strong>. 
                    Yes, that means more veggies, more fruits, less processed everything. And please—<em>stop adding salt after your food is already prepared</em>. 
                    The damage is done before it hits your plate.
                  </p>
                </CardContent>
              </Card>

              {/* Change Your Taste Buds */}
              <Card className="border-l-4 border-l-purple-500 bg-white/70 dark:bg-zinc-900/70 backdrop-blur relative overflow-hidden">
                {/* Side-by-side Vegetable Images */}
                <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 dark:opacity-10 flex">
                  <div className="w-1/3 h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=200" 
                      alt="Fresh kale"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/3 h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=200" 
                      alt="Fresh beets"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/3 h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=200" 
                      alt="Fresh broccoli"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span>🌱</span> Change Your Taste Buds, Change Your Life
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground relative z-10">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Real talk:</strong> I get it. You don't like certain foods. They don't taste good to you. 
                    But here's the thing—<em>your taste buds can change</em>. And they will, if you give them a chance.
                  </p>
                  <p className="leading-relaxed">
                    The smarter choice isn't to turn your nose up at foods that can <strong className="text-foreground">actually benefit your health</strong>. 
                    The smarter choice is to <strong className="text-foreground">retrain your palate</strong>.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-3">Get out of that poverty mindset:</p>
                    <p className="leading-relaxed">
                      Even if you're living in poverty financially—and I see you, I've been there—<em>you don't have to eat like it</em>. 
                      Read those labels. Make the smartest decisions you can with what you have. Small changes compound.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What Else Labels Reveal */}
              <Card className="border-l-4 border-l-teal-500 bg-gradient-to-br from-teal-50/50 to-white dark:from-teal-950/20 dark:to-zinc-900">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span>🔍</span> What Else Labels Tell You
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 font-bold shrink-0">→</span>
                      <span><strong className="text-foreground">Ingredient order matters:</strong> First ingredient = highest quantity. If sugar's second, you're eating candy disguised as health food.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 font-bold shrink-0">→</span>
                      <span><strong className="text-foreground">Check serving sizes:</strong> Companies love to split products into tiny servings to make numbers look better.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 font-bold shrink-0">→</span>
                      <span><strong className="text-foreground">Extra ingredients = extra risk:</strong> If you can't pronounce it, your body probably doesn't want it.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-600 dark:text-teal-400 font-bold shrink-0">→</span>
                      <span><strong className="text-foreground">Hidden sugars:</strong> They go by 50+ names. Dextrose, maltose, corn syrup—it's all sugar, baby.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA - Enhanced with Visual Elements */}
            <div className="mt-12 bg-gradient-to-br from-primary/20 via-pink-500/20 to-purple-500/20 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl relative">
              {/* 3D Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
                {/* Image Side */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://askdogoodassets.blob.core.windows.net/images/education/nutrition-meal-planning.webp" 
                    alt="Healthy nutrition and meal planning"
                    className="w-full h-full object-cover min-h-[300px]"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600";
                    }}
                  />
                  {/* Overlay Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    <span className="text-sm">Expert Guidance</span>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                    Want to Master Your Nutrition?
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    My <strong className="text-foreground">Thyroid Health Mastery Course</strong> teaches you exactly how to read labels, 
                    choose the right foods for YOUR body, and build a sustainable wellness routine—no BS, just results.
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                    <span className="bg-white/80 dark:bg-zinc-800/80 px-3 py-1 rounded-full text-sm font-medium">
                      ✅ Label Reading Mastery
                    </span>
                    <span className="bg-white/80 dark:bg-zinc-800/80 px-3 py-1 rounded-full text-sm font-medium">
                      ✅ Thyroid Optimization
                    </span>
                    <span className="bg-white/80 dark:bg-zinc-800/80 px-3 py-1 rounded-full text-sm font-medium">
                      ✅ Lifetime Access
                    </span>
                  </div>
                  
                  <Link href="/shop">
                    <Button size="lg" className="gap-2 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 w-full md:w-auto group">
                      Learn More About the Course 
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHYNA WHITE STORY SERIES - NEW! */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-background" />
        <div className="container relative">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-2 border-purple-500/30 bg-gradient-to-br from-purple-950/40 via-pink-950/30 to-zinc-900/40 backdrop-blur">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Gallery Side */}
                <div className="relative h-[500px] lg:h-auto">
                  <div className="absolute inset-0 grid grid-cols-2 gap-1 p-2">
                    <div 
                      className="relative rounded-lg overflow-hidden"
                      style={{ backgroundImage: "url(https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent" />
                    </div>
                    <div 
                      className="relative rounded-lg overflow-hidden"
                      style={{ backgroundImage: "url(https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-2.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-transparent" />
                    </div>
                    <div 
                      className="relative rounded-lg overflow-hidden col-span-2"
                      style={{ backgroundImage: "url(https://askdogoodassets.blob.core.windows.net/images/stories/chyna-white-3.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30" />
                    </div>
                  </div>
                  
                  {/* New Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-bold text-white shadow-lg animate-pulse">
                      NEW SERIES
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-zinc-900/60 to-purple-950/40">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Chyna White
                      </h2>
                      <p className="text-xl text-purple-300 font-semibold tracking-wide">
                        A Story Series
                      </p>
                    </div>

                    <div className="space-y-4 text-lg text-gray-200">
                      <p className="leading-relaxed">
                        Meet <strong className="text-purple-300">Chyna White</strong>—a brown-skinned powerhouse navigating 
                        corporate America, street politics, and her own truth in a world that wants her to choose sides.
                      </p>
                      <p className="leading-relaxed">
                        She's professional AF with that <em className="text-pink-300">perfectly undone</em> edge. 
                        BB girl energy meets boardroom boss. Golden locs, sharp mind, and a story that's raw, real, and unapologetic.
                      </p>
                      <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
                        <p className="text-purple-200 font-medium">
                          🔥 Fiction that feels like real life<br />
                          💼 Corporate drama meets street wisdom<br />
                          👑 A heroine who plays by her own rules
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Link href="/stories">
                        <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg w-full sm:w-auto">
                          Read Episode 1 <ArrowRight className="h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/stories">
                        <Button size="lg" className="gap-2 border-2 border-purple-500/50 bg-transparent hover:bg-purple-900/30 text-purple-200 w-full sm:w-auto">
                          Explore the Series
                        </Button>
                      </Link>
                    </div>

                    <p className="text-sm text-gray-400 italic pt-2">
                      ⚠️ 18+ Content | Mature themes, language, and real talk
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14 md:py-20 relative overflow-hidden">
        {/* 3D Floating Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl mb-10">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What you'll find here
            </h2>
            <p className="mt-2 text-muted-foreground text-lg">
              Practical tools + real talk — designed to help you stabilize, rebuild, and level up.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-primary" />
                  Healing Paths
                </CardTitle>
                <CardDescription>
                  Mind, body, and soul support that actually applies.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Guided focus areas (thyroid, stress, habits) that help you build momentum without burnout.
              </CardContent>
            </Card>

            <Link href="/clinical-recipes">
              <Card className="hover:shadow-2xl transition-all cursor-pointer hover:border-primary/50 transform hover:scale-105 hover:-translate-y-2 duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UtensilsCrossed className="h-5 w-5 text-primary" />
                    Clinical Food RX
                  </CardTitle>
                  <CardDescription>Meals tailored to real conditions.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed">
                  Turn symptoms, goals, and reality into meals you can actually stick to.
                  <div className="mt-3 flex items-center gap-1 text-primary font-medium text-sm group">
                    Try it now <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Card className="hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Challenges
                </CardTitle>
                <CardDescription>Small wins that compound.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Weekly challenges to create structure and track your progress without shame.
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2 duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Blog
                </CardTitle>
                <CardDescription>Truth, strategy, and encouragement.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                The honest conversations people avoid — delivered with compassion and receipts.
              </CardContent>
            </Card>
          </div>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/about">
              <Button className="gap-2 border border-border/70 bg-background/60 shadow-md hover:shadow-xl transition-all transform hover:scale-105 group">
                Meet RoSeé 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button className="gap-2 border border-border/70 bg-background/60 shadow-md hover:shadow-xl transition-all transform hover:scale-105 group">
                Read the Blog 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="gap-2 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                Contact <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ASKDOGOOD SHOW TEASER */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-[400px] md:h-auto">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(https://askdogoodassets.blob.core.windows.net/images/personal/askdogood-show-teaser.webp)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 w-fit">
                    Coming Soon
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-4">The AskDoGood Show</h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    Real conversations about health, healing, and thriving in Black & Brown communities.
                  </p>
                  
                  <div className="space-y-3 text-muted-foreground mb-8">
                    <p>
                      From thyroid health to mental wellness, from navigating healthcare to building resilience—this is where we talk about what matters.
                    </p>
                    <p className="font-medium text-foreground">
                      Podcast. Radio. Real talk. No filters.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="gap-2 px-6 py-3 text-lg">
                      Get Notified <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button className="gap-2 border border-border/70 bg-background/60 px-6 py-3 text-lg">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SPICY CAROUSEL - Daily Dose of Realness */}
      <SpicyCarousel />

      {/* EXTERNAL NEWS FEEDS */}
      <ExternalNewsFeeds />

      {/* NEWSLETTER SIGNUP - Lead Magnet CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container max-w-4xl relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full mb-4">
              <Gift className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">FREE RESOURCE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Ready to Start Your <span className="text-primary">Healing Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a free 3-day thyroid-friendly meal plan + symptom tracker. No spam, just real talk and real food.
            </p>
          </div>
          
          <BeehiivSubscribe
            variant="card"
            title=""
            description=""
          />
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            Join 1,000+ warriors already healing
          </p>
        </div>
      </section>

      {/* AFFILIATE PRODUCT RECOMMENDATIONS */}
      <AffiliateProductRecommendations />
    </div>
  );
}
