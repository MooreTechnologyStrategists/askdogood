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
  BriefcaseBusiness,
  HeartPulse,
  BookOpen,
  Sparkles,
  UtensilsCrossed,
  ShieldCheck,
  Users,
  Star,
  Quote,
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
import { safeBlogPosts } from "@/content/blogData";
import { gardenSeasons } from "@/content/gardenSeasons";
import { GUMROAD_URLS } from "@/config/gumroad";
import { catalogById, homepageFeaturedProductIds } from "@/data/catalog";

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
        <span className="inline-flex rounded-full bg-background/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground shadow-lg backdrop-blur">
          {category}
        </span>
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

  const blogPosts: BlogCardProps[] = safeBlogPosts
    .slice()
    .sort((left, right) => Number(Boolean(right.featured)) - Number(Boolean(left.featured)))
    .slice(0, 4)
    .map((post) => ({
      title: post.title,
      description: post.excerpt,
      category: post.category || post.tags[0] || "Journal",
      readTime: post.readTime,
      slug: post.id,
      imagePath: post.image || FALLBACK_IMAGE,
    }));

  const featuredProducts = homepageFeaturedProductIds
    .map((id) => catalogById[id])
    .filter((item) => Boolean(item)) as Array<(typeof catalogById)[string]>;

  const features: FeatureCardProps[] = [
    {
      icon: <HeartPulse className="h-5 w-5 text-primary" />,
      title: "The AskDoGood Framework",
      description: "Five pillars working together in one system.",
      content:
        "Health, routines, mindset, income, and environment are treated as connected problems instead of separate topics.",
    },
    {
      icon: <UtensilsCrossed className="h-5 w-5 text-primary" />,
      title: "Meal Prep Concierge",
      description: "DMV-friendly orders, menus, and healing meal support.",
      content: "Book sample Monday-Friday menus, choose pickup or delivery, and move straight into a Gumroad-backed offer.",
      href: "/meal-prep",
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Label Scanner App",
      description: "Make smarter shopping decisions in seconds.",
      content: "A more competitive wellness tool experience for visitors who want practical help, not fluff.",
      href: "/label-scanner",
    },
    {
      icon: <BriefcaseBusiness className="h-5 w-5 text-primary" />,
      title: "Work With AskDoGood",
      description: "Programs, workshops, and strategic collaboration.",
      content:
        "A partner-ready offer for community centers, churches, schools, government programs, and wellness organizations.",
      href: "/work-with-askdogood",
    },
  ];

  const founderPhotoPrimary = "/images/personal/professional/rosee-professional-suit.jpg";
  const founderPhotoSecondary = "/images/personal/rosee-hero-1.jpg";
  const dersPillars = [
    {
      title: "Nutrition",
      description: "Eat to heal, not just survive.",
      icon: <UtensilsCrossed className="h-5 w-5 text-primary" />,
    },
    {
      title: "Movement",
      description: "Restore energy and circulation through practical movement.",
      icon: <HeartPulse className="h-5 w-5 text-primary" />,
    },
    {
      title: "Mindset",
      description: "Reduce stress, gain clarity, and support emotional reset.",
      icon: <Sparkles className="h-5 w-5 text-primary" />,
    },
    {
      title: "Income",
      description: "Learn skills that increase opportunity and long-term stability.",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
    },
    {
      title: "Environment",
      description: "Build a life, home, and routine that support your growth.",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION - Main Value Proposition */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Clean gradient background — no clutter */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/5"
          aria-hidden="true"
        />
        {/* Subtle decorative circles */}
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/6 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-accent/8 rounded-full blur-3xl" aria-hidden="true" />
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Hero Image - Rosee Murphy */}
            <div className="flex justify-center mb-8">
              <div className="relative w-[16rem] h-[20rem] md:w-[22rem] md:h-[28rem]">
                {/* Soft glow behind photo */}
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 blur-2xl scale-110"
                  aria-hidden="true"
                />
                {/* Photo frame */}
                <div className="absolute -inset-1 rounded-3xl border border-primary/20 bg-white/60 backdrop-blur-sm shadow-2xl" />
                <img
                  src={founderPhotoPrimary}
                  alt="RoSeé Murphy of Ask DoGood, wellness educator and community advocate"
                  className="relative w-full h-full rounded-3xl object-cover border-2 border-white/90 shadow-2xl"
                  loading="eager"
                  fetchPriority="high"
                  width="352"
                  height="448"
                  onError={(e) =>
                    handleImageError(
                      e,
                      "/images/personal/rosee-hero-1.jpg",
                    )
                  }
                />
                {/* Professional credential badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white text-foreground px-5 py-2.5 rounded-full shadow-xl border border-primary/25 whitespace-nowrap">
                  <span className="text-sm font-semibold tracking-tight">Thyroid Wellness Educator</span>
                </div>
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight font-serif">
              Heal Better.
              <br />
              <span className="text-primary">Live Smarter. Earn Stronger.</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Take control of your health, your income, and your future without depending on broken systems.
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
              <Link href="/shop">
                <Button className="group rounded-3xl px-9 py-8 text-lg font-extrabold tracking-wide border-2 border-primary/20 bg-gradient-to-r from-primary via-primary to-secondary text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(0,0,0,0.28)] transition-all">
                  Explore the catalog
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/work-with-askdogood">
                <Button variant="outline" className="rounded-3xl px-8 py-8 text-lg font-bold border-2 border-primary/35 bg-background/90 shadow-lg hover:bg-primary/5">
                  Explore services
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-sm text-muted-foreground font-medium">
                Free Thyroid Symptom Checklist + 3-Day Meal Plan
              </p>
              <a href={GUMROAD_URLS.freeChecklistMealPlan} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-3xl px-6 py-5 text-sm font-semibold border-2 border-primary/45 bg-background text-foreground shadow-lg hover:bg-primary/5">
                  Get the Free Checklist + 3-Day Plan
                </Button>
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto pt-4 text-left">
              <div className="rounded-3xl border border-border/70 bg-background/85 backdrop-blur-sm p-5 shadow-lg">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">The problem</p>
                <p className="font-semibold text-lg mb-2">Too many people are tired, sick, and stuck</p>
                <p className="text-sm text-muted-foreground">Healthcare is expensive, information is fragmented, and most platforms never connect health, lifestyle, and income in one place.</p>
              </div>
              <div className="rounded-3xl border border-border/70 bg-background/85 backdrop-blur-sm p-5 shadow-lg">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">The solution</p>
                <p className="font-semibold text-lg mb-2">A holistic platform for rebuilding life from the inside out</p>
                <p className="text-sm text-muted-foreground">AskDoGood focuses on natural healing, movement, emotional recovery, financial growth through education, and more stable daily environments.</p>
              </div>
              <div className="rounded-3xl border border-border/70 bg-background/85 backdrop-blur-sm p-5 shadow-lg">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">The differentiator</p>
                <p className="font-semibold text-lg mb-2">We do not just talk about healing</p>
                <p className="text-sm text-muted-foreground">AskDoGood also connects health with skills, opportunity, and stability so people can rebuild more than symptoms alone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                The 5 pillars
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-3">
                The AskDoGood system for healing and stability
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                AskDoGood is a holistic platform designed to help people rebuild their lives through food, movement, emotional alignment, financial growth, and healthier environments.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {dersPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-3xl border border-border/70 bg-background/85 p-5 shadow-lg backdrop-blur-sm">
                  <div className="mb-3 inline-flex rounded-2xl bg-primary/10 p-3">{pillar.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={GUMROAD_URLS.storefront} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-3xl px-6 bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl">Shop on Gumroad</Button>
              </a>
              <Link href="/work-with-askdogood">
                <Button variant="outline" className="rounded-3xl px-6 border-2 border-primary/50 bg-white text-foreground font-semibold shadow-sm">
                  Work With AskDoGood
                </Button>
              </Link>
              <Link href="/guest-contributors">
                <Button variant="secondary" className="rounded-3xl px-6 font-semibold shadow-sm">
                  Invite Guest Bloggers or Partners
                </Button>
              </Link>
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
                Then one day, my doctor introduced me to <strong>dicyclomine</strong>, and it
                made a measurable difference. But I did not stop there. I rebuilt my routine with
                clean, <strong>plant-based eating</strong>, daily structure, workouts (P90X, gym,
                running), and <strong>faith in God</strong>. I went from taking dicyclomine four
                times a day to <strong>none</strong>, and eventually started <em>eating real food again</em>.
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
          <div className="max-w-5xl mx-auto rounded-[2rem] border border-border/60 bg-card/90 backdrop-blur-sm shadow-2xl overflow-hidden md:grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.28em] text-primary mb-4 font-semibold">
                The Face Behind Ask DoGood
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
                Real-life experience, clearer mission, stronger public trust.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                AskDoGood was created from lived experience, not theory. After navigating serious health
                challenges, career shifts, and life transitions, RoSeé built a framework that treats healing
                as physical, emotional, practical, and economic work all at once.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about">
                  <Button className="rounded-3xl px-6">Meet RoSeé</Button>
                </Link>
                <Link href="/shop">
                  <Button variant="outline" className="rounded-3xl px-6 border-2 border-primary/30">
                    See Signature Tools
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative min-h-[22rem] bg-gradient-to-br from-primary/10 via-background to-secondary/15 p-8 flex items-center justify-center">
              <div
                className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-primary/15 to-secondary/20 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={founderPhotoSecondary}
                alt="RoSeé Murphy portrait for Ask DoGood wellness brand"
                className="relative w-full max-w-sm rounded-[2rem] object-cover border border-white/70 shadow-2xl"
                loading="lazy"
                width="420"
                height="520"
                onError={(e) => handleImageError(e, `${ASSET_BASE_URL}/hero-home.webp`)}
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
              A personal view of the seasons behind the work.
            </p>
            <p className="text-md text-primary/80 italic font-medium">
              Before, during, and after the rebuilding process.
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
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Shop Tools
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Core wellness <span className="text-primary">offers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured products with clearer checkout paths and stronger presentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="400"
                    height="256"
                    onError={(e) => handleImageError(e)}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-white font-bold shadow-lg">
                      {product.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.shortSummary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{product.cta}</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{product.priceLabel}</span>
                  </div>
                  <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full rounded-3xl text-lg font-semibold py-3 shadow-lg hover:shadow-xl transition-all">
                      View offer
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground font-medium">
              Structured offers, direct checkout, and cleaner customer paths.
            </p>
            <Link href="/shop">
              <Button className="rounded-3xl text-base md:text-lg font-semibold py-3 px-6">
                View the full catalog
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
                  From the journal
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif drop-shadow-lg">
                Reporting from the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                  AskDoGood desk.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 font-semibold">
                Practical writing on thyroid health, meal prep, systems, culture, and the everyday work of rebuilding well.
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
                  Visit the journal
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
                    AskDoGood is what I wish someone had given me on day one: clear guidance,
                    real empathy, and practical results.
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
                      View the founder journey
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
                Gardening taught me patience, faith, and the discipline of slow growth.
                Each season mirrors life: planting, tending, harvesting, and letting go.
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
                "I try to find joy in the work, even when it is draining or thankless, because the deeper reward is the wisdom you gain along the way."
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
                <div className="relative h-[500px] lg:h-auto bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                    alt="Chyna White - Fiction Series Hero"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="600"
                    height="500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600';
                    }}
                  />
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
                      She carries polished ambition with a disruptive edge. Sharp instincts,
                      layered motives, and a story that refuses to flatten her into something easy
                      to read.
                    </p>
                    <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                      <p className="text-foreground font-medium">
                        Fiction with real-world pressure
                        <br />
                        Corporate drama meets street wisdom
                        <br />A heroine who operates by her own rules
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
                    Mature themes, language, and adult subject matter.
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
              Practical tools and clear guidance designed to help you stabilize, rebuild, and move forward.
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
              <span className="text-sm font-bold text-white">Free resource</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
              Start with a practical thyroid resource.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a free 3-day thyroid-friendly meal plan and symptom tracker. Clear value, no clutter.
            </p>
          </div>

          <BeehiivSubscribe variant="card" title="" description="" />

          <p className="text-center text-sm text-muted-foreground mt-6">
            Join the readers already using AskDoGood for practical guidance and product updates.
          </p>
        </div>
      </section>

      {/* AFFILIATE PRODUCT RECOMMENDATIONS */}
      <AffiliateProductRecommendations />
    </div>
  );
}