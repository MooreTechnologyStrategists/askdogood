import { Link } from "wouter";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import FoodSlideshow from "@/components/FoodSlideshow";
import PersonalSlideshow from "@/components/PersonalSlideshow";
import { gardenSeasons } from "@/content/gardenSeasons";

// Constants
const ASSET_BASE_URL = "https://askdogoodassets.blob.core.windows.net/images";
const FALLBACK_IMAGE = "/assets/img/blog/_fallback/blog.webp";

// Utility function for image error handling
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallback?: string) => {
  e.currentTarget.src = fallback || FALLBACK_IMAGE;
};

// Type definitions
interface TrustIndicatorProps {
  icon: React.ReactNode;
  text: string;
  colorClass: string;
}

interface TestimonialCardProps {
  initial: string;
  name: string;
  location: string;
  condition: string;
  quote: string;
  stars: number;
  gradientFrom: string;
  gradientTo: string;
}

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  slug: string;
  imagePath: string;
  icon: React.ReactNode;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
  href?: string;
}

// Reusable Components
const TrustIndicator = ({ icon, text, colorClass }: TrustIndicatorProps) => (
  <div className={`flex items-center gap-2 bg-gradient-to-r ${colorClass} px-4 py-2 rounded-full`}>
    {icon}
    <span className="font-semibold">{text}</span>
  </div>
);

const TestimonialCard = ({
  initial,
  name,
  location,
  condition,
  quote,
  stars,
  gradientFrom,
  gradientTo,
}: TestimonialCardProps) => (
  <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`h-16 w-16 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white text-2xl font-bold`}
        >
          {initial}
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
          <div className="inline-block mt-1 px-2 py-1 bg-primary/10 rounded text-xs font-medium text-primary">
            {condition}
          </div>
        </div>
      </div>
      <div className="flex gap-1 mb-3" role="img" aria-label={`${stars} out of 5 stars`}>
        {[...Array(stars)].map((_, i) => (
          <Star key={`star-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <Quote className="h-6 w-6 text-primary/30 mb-2" />
      <p className="text-muted-foreground leading-relaxed">{quote}</p>
    </CardContent>
  </Card>
);

const BlogCard = ({
  title,
  description,
  category,
  readTime,
  slug,
  imagePath,
  icon,
}: BlogCardProps) => (
  <Card className="group relative overflow-hidden border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 rounded-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative h-48 overflow-hidden rounded-t-2xl">
      <img
        src={imagePath}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
        width="400"
        height="192"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent rounded-t-2xl" />
      <div className="absolute top-4 left-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg">
          {icon}
        </div>
      </div>
    </div>
    <CardHeader className="relative z-10">
      <CardTitle className="text-foreground group-hover:text-primary transition-colors mb-2">
        {title}
      </CardTitle>
      <CardDescription className="text-muted-foreground text-sm">{description}</CardDescription>
    </CardHeader>
    <CardContent className="relative z-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
          {category}
        </span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      <Link href={`/blog/${slug}`}>
        <Button className="w-full group/btn rounded-3xl text-white font-bold shadow-lg hover:scale-105 transition-transform py-3 text-lg">
          Read Now
          <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </CardContent>
  </Card>
);

const FeatureCard = ({ icon, title, description, content, href }: FeatureCardProps) => {
  const cardContent = (
    <Card className="hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2 duration-300 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground leading-relaxed">
        {content}
        {href && (
          <div className="mt-3 flex items-center gap-1 text-primary font-medium text-sm group">
            Try it now{" "}
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </CardContent>
    </Card>
  );

  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
};

// Main Component
export default function Home() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trustIndicators: TrustIndicatorProps[] = [
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      text: "1,000+ Active Members",
      colorClass: "from-primary/10 to-transparent",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-secondary" />,
      text: "7+ Years Experience",
      colorClass: "from-secondary/10 to-transparent",
    },
    {
      icon: <HeartPulse className="h-5 w-5 text-primary" />,
      text: "Evidence-Based Approach",
      colorClass: "from-primary/10 to-transparent",
    },
  ];

  const testimonials: TestimonialCardProps[] = [
    {
      initial: "M",
      name: "Maya T.",
      location: "Washington, DC",
      condition: "Hypothyroidism",
      quote:
        "I finally have energy again. The meal plans are simple, realistic, and actually work. No more guessing what to eat.",
      stars: 5,
      gradientFrom: "from-primary",
      gradientTo: "to-secondary",
    },
    {
      initial: "J",
      name: "Jordan K.",
      location: "Atlanta, GA",
      condition: "Post-Thyroidectomy",
      quote:
        "RoSeé gets it. She's been through it. Her recipes helped me gain my life back after surgery.",
      stars: 5,
      gradientFrom: "from-primary",
      gradientTo: "to-secondary",
    },
    {
      initial: "T",
      name: "Tasha M.",
      location: "Houston, TX",
      condition: "Hashimoto's",
      quote:
        "This isn't just another wellness blog. It's a lifeline. Real food, real support, real results.",
      stars: 5,
      gradientFrom: "from-primary",
      gradientTo: "to-secondary",
    },
  ];

  const blogPosts: BlogCardProps[] = [
    {
      title: "World Peace Starts With Healthcare",
      description:
        "Why free healthcare isn't radical—it's necessary. Black and brown communities deserve better.",
      category: "Social Justice",
      readTime: "9 min read",
      slug: "world-peace-starts-with-healthcare",
      imagePath: "/images/personal/blog-graphics/world-peace-starts-with-healthcare.png",
      icon: <HeartPulse className="h-6 w-6 text-white" />,
    },
    {
      title: "Investing in Yourself",
      description:
        "Financial wellness isn't just about money—it's about building a life that supports your health and your future.",
      category: "Financial Wellness",
      readTime: "7 min read",
      slug: "investing-in-yourself",
      imagePath: "/images/personal/blog-graphics/investing-in-yourself.png",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
    },
    {
      title: "Community Over Competition",
      description:
        "Why building each other up is the only way forward. Real talk about collaboration, not clout.",
      category: "Community",
      readTime: "6 min read",
      slug: "community-over-competition",
      imagePath: "/images/personal/blog-graphics/community-over-competition.png",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "The Power of Saying No",
      description:
        "Boundaries aren't selfish—they're survival. How to protect your peace without guilt.",
      category: "Mental Health",
      readTime: "8 min read",
      slug: "the-power-of-saying-no",
      imagePath: "/images/personal/blog-graphics/the-power-of-saying-no.png",
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
    },
  ];

  const features: FeatureCardProps[] = [
    {
      icon: <HeartPulse className="h-5 w-5 text-primary" />,
      title: "Healing Paths",
      description: "Mind, body, and soul support that actually applies.",
      content:
        "Guided focus areas (thyroid, stress, habits) that help you build momentum without burnout.",
    },
    {
      icon: <UtensilsCrossed className="h-5 w-5 text-primary" />,
      title: "Clinical Food RX",
      description: "Meals tailored to real conditions.",
      content: "Turn symptoms, goals, and reality into meals you can actually stick to.",
      href: "/clinical-recipes",
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Challenges",
      description: "Small wins that compound.",
      content: "Weekly challenges to create structure and track your progress without shame.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: "Blog",
      description: "Truth, strategy, and encouragement.",
      content:
        "The honest conversations people avoid — delivered with compassion and receipts.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* LOGO HEADER - Clean and Professional */}
      <section className="py-8 border-b bg-gradient-to-r from-background via-primary/5 to-background">
        <div className="container">
          <div className="flex items-center justify-center gap-4">
            <img
              src={`${ASSET_BASE_URL}/brand/logo-flower-circle.webp`}
              alt="Ask DoGood Logo"
              className="h-24 w-24 object-contain drop-shadow-lg"
              loading="eager"
              width="96"
              height="96"
            />
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif">
                Ask DoGood
              </h1>
              <p className="text-sm md:text-base text-primary font-medium mt-1">
                Healing guides for Black women navigating health, food, and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECTION - Main Value Proposition */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Images Grid */}
        <div
          className="absolute inset-0 opacity-30 grid grid-cols-2 gap-4 p-8"
          aria-hidden="true"
        >
          {[1, 2, 3, 4].map((num) => (
            <img
              key={`bg-dish-${num}`}
              src={`${ASSET_BASE_URL}/foods/muhammad-dishes-${num}.jpg`}
              alt=""
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
              onError={(e) =>
                handleImageError(e, `/images/personal/food/muhammad-dishes-${num}.jpg`)
              }
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Hero Image - Rosee Murphy */}
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl"
                  aria-hidden="true"
                />
                <img
                  src="https://askdogoodassets.blob.core.windows.net/images/curlsAndSpecs.jpg?w=600&h=600&fit=crop"
                  alt="RoSeé 'DoGood' Murphy - Thyroid Health Specialist & Wellness Advocate"
                  className="relative w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                  loading="eager"
                  width="384"
                  height="384"
                />

                {/* Professional Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-zinc-900 text-foreground px-6 py-3 rounded-full shadow-xl border-2 border-primary/20">
                  <span className="text-sm font-semibold">7+ Years Experience</span>
                </div>
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight font-serif">
              Healing.Structure.
              <br />
              <span className="text-primary">Real-life Growth.</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Thyroid health. Weight loss. Healthy work-life balance. Join 1,000+ people who've
              transformed their health with real food, real talk, and real results. No BS, just
              healing.
            </p>

            {/* Trust Indicators - Professional */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {trustIndicators.map((indicator, index) => (
                <TrustIndicator key={`trust-${index}`} {...indicator} />
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BeehiivSubscribe variant="inline" />
            </div>

            <div className="flex items-center justify-center gap-2">
              <p className="text-sm text-muted-foreground font-medium">
                Free Thyroid Symptom Checklist + 3-Day Meal Plan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOD SLIDESHOW - Thyroid-Friendly Meals */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-serif">
              Real Food. <span className="text-primary">Real Healing.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Thyroid-friendly meals that support your health goals
            </p>
          </div>
          <div className="max-w-2xl mx-auto mb-8">
            <FoodSlideshow />
          </div>

          {/* Personal Health Journey Story */}
          <div className="max-w-4xl mx-auto mt-12 p-8 bg-card rounded-3xl shadow-xl border-2 border-primary/20">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-lg leading-relaxed mb-4">
                I don't just teach thyroid health—I've walked through my own fire. For{" "}
                <strong>seven years</strong>, I couldn't eat. I'm talking about surviving on
                Italian ice, water, and Pepto Bismol like it was my lifeline.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                They had me on <strong>pantoprazole</strong> (maxed out the dose) for my GERD, but
                nothing changed. The monstrous burps. The palpitations that became so normal I
                stopped noticing them. My IBS symptoms mirrored my husband's Crohn's disease—same
                meal, different day, completely different reaction. You never knew what would keep
                you doubled over in pain.
              </p>

              <p className="text-lg leading-relaxed mb-4">
                Then one day, my doctor introduced me to <strong>dicyclomine</strong>. Game.
                Changer. But I didn't stop there. I started taking pre and probiotics, digestive
                enzymes. I committed to working out for at least an hour every day—P90X, gym
                sessions, running. I went from taking dicyclomine 4 times a day to actually{" "}
                <em>eating real food again</em>.
              </p>

              <p className="text-lg leading-relaxed font-semibold text-primary">
                That journey from survival to thriving? That's why I cook the way I do. That's why
                every recipe I create is tested, real, and built for bodies that have been through
                it. Because I've been there. And I know the way out.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <p className="text-2xl font-bold text-primary mb-1">7 Years</p>
                <p className="text-sm text-muted-foreground">Of chronic GERD & IBS</p>
              </div>
              <div className="p-4 bg-secondary/10 rounded-2xl">
                <p className="text-2xl font-bold text-secondary mb-1">Daily Workouts</p>
                <p className="text-sm text-muted-foreground">P90X, gym, running</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-2xl">
                <p className="text-2xl font-bold text-primary mb-1">Real Recovery</p>
                <p className="text-sm text-muted-foreground">From barely eating to thriving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CENTRAL PERSONAL IMAGE */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={`${ASSET_BASE_URL}/hero-home.webp`}
                alt="RoSeé Murphy - Your Thyroid Chef"
                className="relative w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                loading="lazy"
                width="256"
                height="256"
                onError={(e) => handleImageError(e, "/images/personal/rosee-profile.webp")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL SLIDESHOW */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-serif">
              Behind the Scenes
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Before, during, and after finding peace—real moments from every chapter
            </p>
            <p className="text-md text-primary/80 italic font-medium">
              So many phases, so little time...
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <PersonalSlideshow />
          </div>
        </div>
      </section>

      {/* SHOP SECTION - Thyroid Toolkit */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-full mb-6 shadow-xl">
              <Gift className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Shop Tools
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Your Thyroid <span className="text-primary">Toolkit</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical resources designed to help you take control of your health journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Product 1: Thyroid Symptom Tracker */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`${ASSET_BASE_URL}/products/thyroid-symptom-tracker.webp`}
                  alt="Thyroid Symptom Tracker - Digital Download"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="256"
                  onError={(e) => handleImageError(e)}
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white font-bold shadow-lg">
                    Digital Download
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Thyroid Symptom Tracker</CardTitle>
                <CardDescription className="text-base">
                  Track your symptoms, identify patterns, and take control of your health
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Daily symptom logging with severity tracking
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Medication and supplement tracker
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Printable PDF format for easy use
                    </p>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">$9.99</span>
                  <span className="text-sm text-muted-foreground line-through">$19.99</span>
                </div>
                <a
                  href="https://askdogood.gumroad.com/l/thyroid-symptom-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full group/btn rounded-3xl text-lg font-semibold py-3 shadow-lg hover:shadow-xl transition-all">
                    Get Instant Access
                    <TrendingUp className="h-4 w-4 ml-2 group-hover/btn:translate-y-[-2px] transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Product 2: 30-Day Meal Plan */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`${ASSET_BASE_URL}/products/30-day-meal-plan.webp`}
                  alt="30-Day Thyroid-Friendly Meal Plan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="400"
                  height="256"
                  onError={(e) => handleImageError(e)}
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white font-bold shadow-lg">
                    Best Seller
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">30-Day Thyroid Meal Plan</CardTitle>
                <CardDescription className="text-base">
                  Complete meal plan with recipes, shopping lists, and prep guides
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      30 days of thyroid-friendly recipes
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Weekly shopping lists included
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Meal prep guides and tips
                    </p>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">$29.99</span>
                  <span className="text-sm text-muted-foreground line-through">$49.99</span>
                </div>
                <a
                  href="https://askdogood.gumroad.com/l/30-day-meal-plan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full group/btn rounded-3xl text-lg font-semibold py-3 shadow-lg hover:shadow-xl transition-all">
                    Start Your Journey
                    <TrendingUp className="h-4 w-4 ml-2 group-hover/btn:translate-y-[-2px] transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badge & Shop All CTA */}
          <div className="text-center mt-12 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground font-medium">
              Trusted by 1,000+ Warriors
            </p>
            <Link href="/shop">
              <Button className="rounded-3xl text-base md:text-lg font-semibold py-3 px-6">
                Shop All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW 2026 BLOG SERIES TEASER - 3D Style */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header with Badge */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-full mb-6 shadow-2xl">
                <Sparkles className="h-5 w-5 text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  NEW 2026 Series
                </span>
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif drop-shadow-lg">
                Real Talk.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                  Real Change.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 font-semibold">
                The conversations we need to have about health, wealth, and community in 2026
              </p>
              <p className="text-sm text-muted-foreground italic">
                Professional but hip-hop Black chic. No BS, just facts + receipts.
              </p>
            </div>

            {/* 4 Blog Cards in Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/blog">
                <Button className="gap-2 rounded-3xl font-bold text-lg px-8 py-4 shadow-2xl hover:scale-105 transition-all group">
                  Read All Posts
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <TrustBadges />

      {/* BEEHIIV NEWSLETTER EMBED */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container max-w-4xl">
          <div id="thyroid-toolkit-signup" />
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
                    src={`${ASSET_BASE_URL}/personal/outdoor-photoshoot.webp`}
                    alt="Rosee Murphy - Thyroid Cancer Survivor & Wellness Advocate"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="600"
                    height="450"
                    onError={(e) =>
                      handleImageError(e, `${ASSET_BASE_URL}/personal/rosee-story.webp`)
                    }
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-6 shadow-2xl max-w-[240px] transform hover:scale-105 transition-transform">
                  <p className="text-sm font-semibold leading-snug">
                    7+ years of thyroid recovery, countless lessons learned
                  </p>
                </div>
                {/* Decorative Element */}
                <div
                  className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/30 rounded-full blur-2xl"
                  aria-hidden="true"
                />
              </div>

              {/* RIGHT: Story */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-2">
                  <span className="text-sm font-medium text-primary">My Story</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold font-serif">
                  From Misdiagnosed to Mission-Driven
                </h2>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I spent years being told my thyroid symptoms were "just stress" or "in my
                    head." The fatigue, brain fog, weight struggles—all dismissed. Until I couldn't
                    ignore it anymore.
                  </p>
                  <p>
                    After finally getting diagnosed and having my thyroid removed, I realized the
                    medical system wasn't designed to help people like us truly <em>heal</em>—just
                    manage symptoms. So I became my own advocate, my own researcher, my own healer.
                  </p>
                  <p>
                    <strong>Seven years later,</strong> I've built a life I love despite chronic
                    illness. I've learned that healing isn't linear, that structure creates freedom,
                    and that you can thrive while being transparent about the struggle.
                  </p>
                  <p className="text-foreground font-medium">
                    AskDoGood is everything I wish someone had given me on day one. Real guidance.
                    Real empathy. Real results.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link href="/about">
                    <Button className="gap-2 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 group">
                      Read My Full Story
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/journey">
                    <Button
                      variant="outline"
                      className="gap-2 rounded-3xl shadow-md hover:shadow-xl transition-all transform hover:scale-105"
                    >
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
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
                  <Card className="group cursor-pointer hover:shadow-xl transition-all overflow-hidden h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={season.heroImg}
                        alt={season.heroAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        width="300"
                        height="225"
                        onError={(e) => handleImageError(e)}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {season.title}
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                      <CardDescription>{season.subtitle}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                "I try to find joy in everything. Even when it's draining or thankless, the real
                reward is the wisdom you pick up along the way."
              </p>
              <Link href="/garden">
                <Button className="gap-2 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
              Real People, <span className="text-primary">Real Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands who've taken control of their thyroid health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`testimonial-${index}`} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button className="gap-2 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
                Read More Success Stories
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CHYNA WHITE FICTION SERIES TEASER */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        {/* Glitter Effect Background */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/20 rounded-full blur-2xl animate-pulse" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden bg-card/80 backdrop-blur-lg border-2 border-primary/20 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-[500px] lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${ASSET_BASE_URL}/personal/chyna-white-hero.webp)`,
                    }}
                  >
                    <img
                      src={`${ASSET_BASE_URL}/personal/chyna-white-hero.webp`}
                      alt="Chyna White - Fiction Series Hero"
                      className="w-full h-full object-cover opacity-0"
                      loading="lazy"
                      width="600"
                      height="500"
                      onError={(e) => handleImageError(e)}
                    />
                  </div>
                  {/* Spice Level Indicator */}
                  <div className="absolute bottom-8 right-8 bg-background/80 backdrop-blur px-4 py-2 rounded-full border border-border">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-muted-foreground">SPICE</span>
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={`spice-${i}`}
                          className={`inline-block w-3 h-3 rounded-full ${
                            i < 4 ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Badge className="mb-4 text-base px-4 py-2 bg-primary/10 border border-primary/20 text-primary shadow-lg backdrop-blur">
                      <Star className="w-4 h-4 mr-2 text-primary" />
                      Featured Series
                    </Badge>
                    <h2 className="text-4xl font-bold mb-2 text-foreground">
                      Introducing: Chyna White
                    </h2>
                    <p className="text-xl text-muted-foreground mb-4">
                      The Chronicles of a Beautiful Contradiction
                    </p>
                  </div>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p className="leading-relaxed">
                      Meet <strong className="text-primary">Chyna White</strong>—a brown-skinned
                      powerhouse navigating corporate America, street politics, and her own truth in
                      a world that wants her to choose sides.
                    </p>
                    <p className="leading-relaxed">
                      She's professional AF with that{" "}
                      <em className="text-secondary">perfectly undone</em> edge. BB girl energy meets
                      boardroom boss. Golden locs, sharp mind, and a story that's raw, real, and
                      unapologetic.
                    </p>
                    <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                      <p className="text-foreground font-medium">
                        Fiction that feels like real life
                        <br />
                        Corporate drama meets street wisdom
                        <br />A heroine who plays by her own rules
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link href="/stories">
                      <Button className="gap-2 rounded-3xl py-3 px-8 w-full sm:w-auto">
                        Read Episode 1 <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/stories">
                      <Button
                        variant="outline"
                        className="gap-2 rounded-3xl w-full sm:w-auto"
                      >
                        Explore the Series
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground italic pt-2">
                    ⚠️ 18+ Content | Mature themes, language, and real talk
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-14 md:py-20 relative overflow-hidden">
        {/* 3D Floating Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/70 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">What you'll find here</h2>
            <p className="mt-2 text-muted-foreground text-lg">
              Practical tools + real talk — designed to help you stabilize, rebuild, and level up.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={`feature-${index}`} {...feature} />
            ))}
          </div>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/about">
              <Button
                variant="outline"
                className="gap-2 rounded-3xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 group"
              >
                Meet RoSeé
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                variant="outline"
                className="gap-2 rounded-3xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 group"
              >
                Read the Blog
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="gap-2 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
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
                    style={{
                      backgroundImage: `url(${ASSET_BASE_URL}/personal/askdogood-show-teaser.webp)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    <img
                      src={`${ASSET_BASE_URL}/personal/askdogood-show-teaser.webp`}
                      alt="The AskDoGood Show - Coming Soon"
                      className="w-full h-full object-cover opacity-0"
                      loading="lazy"
                      width="600"
                      height="400"
                      onError={(e) => handleImageError(e)}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 w-fit">
                    Coming Soon
                  </div>

                  <h2 className="text-4xl font-bold mb-4">🎧 The AskDoGood Show</h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    Real conversations about health, healing, and thriving in Black & Brown
                    communities. 🎉
                  </p>

                  <div className="space-y-3 text-muted-foreground mb-8">
                    <p>
                      From thyroid health to mental wellness, from navigating healthcare to building
                      resilience—this is where we talk about what matters. 💜
                    </p>
                    <p className="font-medium text-foreground">
                      Podcast. Radio. Real talk. No filters. 💯
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="gap-2 rounded-3xl px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all">
                      Get Notified 🔔 <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2 rounded-3xl px-6 py-3 text-lg hover:shadow-md transition-all"
                    >
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
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container max-w-4xl relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full mb-4 shadow-lg">
              <Gift className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">FREE RESOURCE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
              Ready to Start Your <span className="text-primary">Healing Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a free 3-day thyroid-friendly meal plan + symptom tracker. No spam, just real
              talk and real food.
            </p>
          </div>

          <BeehiivSubscribe variant="card" title="" description="" />

          <p className="text-center text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
            <span className="animate-pulse">💚</span>
            <span>Join 1,000+ warriors already healing</span>
            <span className="animate-pulse">💚</span>
          </p>
        </div>
      </section>

      {/* AFFILIATE PRODUCT RECOMMENDATIONS */}
      <AffiliateProductRecommendations />
    </div>
  );
}