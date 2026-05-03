import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  Leaf,
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
import { blogImages } from "@/data/blogImages";
import { gardenSeasons } from "@/content/gardenSeasons";
import { siteCopy } from "@/content/siteCopy";
import { GUMROAD_URLS } from "@/config/gumroad";
import { catalogById, hasLiveCheckout, homepageFeaturedProductIds } from "@/data/catalog";
import { featuredWalkResource, walkResources } from "@/content/walks";
import PromoBanner from '../components/PromoBanner';
import RecommendedReads from '../components/RecommendedReads';

// Constants
const ASSET_BASE_URL = "https://askdogoodassets.blob.core.windows.net/images";
const FALLBACK_IMAGE = "/assets/img/blog/_fallback/blog.webp";

// Utility function for image error handling
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallback?: string) => {
  const img = e.currentTarget;
  const nextSrc = fallback || FALLBACK_IMAGE;

  if (img.dataset.fallbackApplied === "true" || img.src.endsWith(nextSrc)) {
    img.onerror = null;
    return;
  }

  img.dataset.fallbackApplied = "true";
  img.onerror = null;
  img.src = nextSrc;
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

interface SpotlightItem {
  src: string;
  alt: string;
  title: string;
  detail: string;
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
        onError={(e) => handleImageError(e)}
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
      <CardDescription className="text-muted-foreground text-sm leading-7 line-clamp-4">{description}</CardDescription>
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

  const [spotlight, setSpotlight] = useState<SpotlightItem | null>(null);

  const openSpotlight = (item: SpotlightItem) => {
    setSpotlight(item);
  };

  const closeSpotlight = () => {
    setSpotlight(null);
  };

  const renderPillarArt = (title: string) => {
    switch (title) {
      case "Nutrition":
        return (
          <svg viewBox="0 0 220 180" className="h-full w-full">
            <g fill="none" strokeWidth="3">
              <path d="M55 145 C25 125, 35 80, 75 65 C88 103, 86 132, 55 145 Z" stroke="#3f8f53" fill="#6dbb73" fillOpacity="0.35" />
              <path d="M105 138 C82 120, 90 82, 125 70 C136 102, 132 124, 105 138 Z" stroke="#4d9f5f" fill="#84c98a" fillOpacity="0.35" />
              <circle cx="155" cy="120" r="22" stroke="#b23d62" fill="#d26a8b" fillOpacity="0.35" />
              <circle cx="155" cy="120" r="11" stroke="#9b2f54" />
              <ellipse cx="185" cy="72" rx="26" ry="18" stroke="#a5784d" fill="#d7bb96" fillOpacity="0.35" />
              <line x1="168" y1="72" x2="202" y2="72" stroke="#8f6640" />
            </g>
          </svg>
        );
      case "Movement":
        return (
          <svg viewBox="0 0 220 180" className="h-full w-full">
            <g fill="#8e5a3a" fillOpacity="0.35" stroke="#6f4328" strokeWidth="3">
              <ellipse cx="142" cy="56" rx="18" ry="14" />
              <path d="M132 72 L116 104 L137 118 L155 88 Z" />
              <path d="M155 88 L186 109 L175 122 L148 103 Z" />
              <path d="M137 118 L110 145 L95 136 L122 108 Z" />
            </g>
            <g stroke="#b57b55" strokeWidth="3" strokeLinecap="round" opacity="0.55">
              <line x1="62" y1="80" x2="82" y2="75" />
              <line x1="55" y1="100" x2="82" y2="92" />
              <line x1="60" y1="120" x2="84" y2="114" />
            </g>
          </svg>
        );
      case "Income":
        return (
          <svg viewBox="0 0 220 180" className="h-full w-full">
            <g fill="#59b36f" fillOpacity="0.2" stroke="#2f8a48" strokeWidth="2">
              <rect x="32" y="72" width="150" height="78" rx="12" />
              <rect x="48" y="54" width="150" height="78" rx="12" />
            </g>
            <g fill="#2f8a48" fillOpacity="0.55" fontSize="34" fontWeight="700" fontFamily="Arial, sans-serif">
              <text x="70" y="106">$</text>
              <text x="106" y="100">$</text>
              <text x="140" y="106">$</text>
            </g>
          </svg>
        );
      case "Mindset":
        return (
          <svg viewBox="0 0 220 180" className="h-full w-full">
            <g fill="none" stroke="#6f6ac7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M92 131 C68 118, 63 82, 90 65 C117 49, 151 64, 156 92 C160 114, 143 133, 122 136 L108 153 L103 135 C99 134, 95 133, 92 131 Z" fill="#908be2" fillOpacity="0.2" />
              <path d="M105 90 C110 83, 121 83, 126 90" />
              <path d="M102 106 C109 113, 121 113, 128 106" />
              <line x1="70" y1="54" x2="82" y2="44" />
              <line x1="86" y1="42" x2="91" y2="28" />
              <line x1="151" y1="54" x2="165" y2="47" />
            </g>
          </svg>
        );
      case "Environment":
        return (
          <svg viewBox="0 0 220 180" className="h-full w-full">
            <g fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M110 54 L152 88 V144 H68 V88 Z" stroke="#4a8f63" fill="#7cc58f" fillOpacity="0.2" />
              <path d="M95 144 V112 H125 V144" stroke="#4a8f63" />
              <circle cx="176" cy="54" r="16" stroke="#d5b24f" fill="#f4dc8b" fillOpacity="0.35" />
              <path d="M40 132 C35 112, 52 94, 72 99 C80 80, 106 80, 114 99 C132 96, 146 110, 142 127" stroke="#4a8f63" fill="#7cc58f" fillOpacity="0.2" />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

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
      imagePath: blogImages[post.id] || post.image || FALLBACK_IMAGE,
    }));

  const featuredProducts = homepageFeaturedProductIds
    .map((id) => catalogById[id])
    .filter((item) => Boolean(item)) as Array<(typeof catalogById)[string]>;

  const quickCashOffer = catalogById["thyroid-health-mastery"];

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
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      title: "Digital Library & Flipbooks",
      description: "Visual guides that are already live on the site.",
      content:
        "Open the AskDoGood digital library to browse flipbooks like Indian Creek Trail and Keep Moving without hunting through the footer.",
      href: "/keep-moving",
    },
    {
      icon: <BriefcaseBusiness className="h-5 w-5 text-primary" />,
                  {/* Meal Prep Banner Section */}
                  <section className="mx-auto mb-10 max-w-3xl rounded-[2rem] border border-pink-300 bg-gradient-to-br from-pink-50 via-pink-100 to-white p-6 shadow-xl flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                      <img
                        src="/images/personal/food/meal-prep.jpg"
                        alt="Meal Prep Menu Preview"
                        className="rounded-2xl border-2 border-pink-200 shadow-lg object-cover w-44 h-44 md:w-36 md:h-36"
                        loading="lazy"
                        onError={(e) => handleImageError(e)}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-2">New: DMV Meal Prep Menu</h3>
                      <p className="text-base md:text-lg text-muted-foreground mb-3">Order chef-prepped, anti-inflammatory meals for the week. Choose your menu, pickup or delivery, and get real food that heals.</p>
                      <Link href="/meal-prep">
                        <Button className="rounded-3xl px-7 py-4 text-base font-bold bg-pink-600 text-white shadow-lg hover:bg-pink-700">
                          Explore Meal Prep Menu
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </section>
      title: "Work With AskDoGood",
      description: "Programs, workshops, and strategic collaboration.",
      content:
        "A partner-ready offer for community centers, churches, schools, government programs, and wellness organizations.",
      href: "/work-with-askdogood",
    },
  ];

  const featuredNatureWalk = featuredWalkResource;
  const dersPillars = [
    {
      title: "Nutrition",
      description: "Eat to heal, not just survive.",
      icon: <UtensilsCrossed className="h-5 w-5 text-primary" />,
      context: "Nutrition here is practical: real meals, anti-inflammatory choices, and routines people can repeat without burnout.",
    },
    {
      title: "Movement",
      description: "Restore energy and circulation through practical movement.",
      icon: <HeartPulse className="h-5 w-5 text-primary" />,
      context: "Movement is framed as consistency over intensity: walks, training, and mobility that support recovery and stamina.",
    },
    {
      title: "Mindset",
      description: "Reduce stress, gain clarity, and support emotional reset.",
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      context: "Mindset means emotional regulation, faith, and disciplined self-talk so progress survives hard days.",
    },
    {
      title: "Income",
      description: "Learn skills that increase opportunity and long-term stability.",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      context: "Income is health strategy too: stronger cash flow lowers chronic stress and protects people from crisis cycling.",
    },
    {
      title: "Environment",
      description: "Build a life, home, and routine that support your growth.",
      icon: <Users className="h-5 w-5 text-primary" />,
      context: "Environment includes your space, social circle, and daily systems. Your surroundings either support healing or sabotage it.",
    },
  ];

  const missionStandards = [
    {
      title: "Break Harmful Vices",
      detail: "We teach replacement habits, accountability, and structure so people can permanently break destructive cycles — smoking, sugar, alcohol, and more.",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    },
    {
      title: "Reduce Toxin Load",
      detail: "People get practical guidance on cleaner food, herbs, movement, and stress reduction before more damage accumulates.",
      icon: <Leaf className="h-5 w-5 text-primary" />,
    },
    {
      title: "Eat To Live",
      detail: "As Elijah Muhammad taught in How to Eat to Live — food discipline is the foundation. We frame eating right as freedom and long-term quality of life, never restriction.",
      icon: <UtensilsCrossed className="h-5 w-5 text-primary" />,
    },
    {
      title: "Build Real Structure",
      detail: "Routines, accountability, and doable plans that don't collapse when life gets loud. Stability is built one good decision at a time.",
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

            <h2 className="text-5xl md:text-7xl font-bold leading-tight font-serif">
              Real Health.
              <br />
              <span className="text-primary">Real Discipline. Real Life.</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {siteCopy.home.subtext}
            </p>

            <p className="text-sm md:text-base font-medium text-primary/80 max-w-3xl mx-auto">
              {siteCopy.cta}
            </p>

            {/* Trust Indicators - Professional */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {trustIndicators.map((indicator, index) => (
                <TrustIndicator key={`trust-${index}`} {...indicator} />
              ))}
            </div>

            <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-primary/20 bg-white/80 p-4 shadow-xl backdrop-blur-sm md:p-6">
              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                <div className="rounded-3xl border border-border/70 bg-background/85 p-5 text-left md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">Founder in real life</p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight font-serif text-foreground">
                    Not stock photos. Real moments from my actual journey.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    These are snapshots from the same life that shaped AskDoGood: healing routines, kitchen discipline, and staying consistent in every season.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Link href="/journey">
                      <a className="rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:bg-primary/12">Founder Journey</a>
                    </Link>
                    <Link href="/behind-the-scenes/in-my-kitchen">
                      <a className="rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:bg-primary/12">In My Kitchen</a>
                    </Link>
                    <Link href="/behind-the-scenes">
                      <a className="rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:bg-primary/12">Behind The Scenes</a>
                    </Link>
                  </div>
                </div>

                {/* Founder/hero images removed for credibility and clean design */}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/free-meal-plan">
                <Button className="group rounded-3xl px-9 py-8 text-lg font-extrabold tracking-wide border-2 border-primary/20 bg-gradient-to-r from-primary via-primary to-secondary text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(0,0,0,0.28)] transition-all">
                  Start Your Reset
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" className="rounded-3xl px-8 py-8 text-lg font-bold border-2 border-primary/35 bg-background/90 shadow-lg hover:bg-primary/5">
                  Explore Resources
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-sm text-muted-foreground font-medium">
                Free meal plan + practical health guidance for thyroid, blood pressure, blood sugar, and gut recovery
              </p>
              <Link href="/free-meal-plan">
                <Button variant="outline" className="rounded-3xl px-6 py-5 text-sm font-semibold border-2 border-primary/45 bg-background text-foreground shadow-lg hover:bg-primary/5">
                  Get the Free 3-Day Plan
                </Button>
              </Link>
            </div>

            {quickCashOffer && hasLiveCheckout(quickCashOffer) ? (
              <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-primary/30 bg-[linear-gradient(140deg,rgba(16,185,129,0.14),rgba(255,255,255,0.95))] p-6 shadow-lg md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/90">Fast support for AskDoGood</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">Need a quick win today? Start with the live flagship course.</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  This is the most direct way to support AskDoGood right now while getting a complete, structured system for thyroid and holistic healing habits.
                </p>
                <div className="mt-5 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-white/85 px-4 py-4 sm:flex-row">
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">{quickCashOffer.name}</p>
                    <p className="text-sm text-muted-foreground">Immediate access after checkout</p>
                  </div>
                  <a href={quickCashOffer.checkoutUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button className="w-full rounded-3xl px-7 py-5 text-base font-bold sm:w-auto">
                      Buy now {quickCashOffer.priceLabel}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ) : null}

            <div className="max-w-4xl mx-auto pt-4 text-left">
              <div className="rounded-[2rem] border border-border/70 bg-background/85 backdrop-blur-sm p-6 md:p-8 shadow-lg">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">What This Is</p>
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground leading-tight">
                  This isn&apos;t about trends or perfection. This is about building habits that actually work in real life.
                </h3>
                <p className="mt-4 text-base md:text-lg leading-8 text-muted-foreground">
                  You don&apos;t need a complete overhaul, you need consistency. You need awareness. You need a system that helps you make better decisions daily without thinking about it too hard.
                </p>
                <p className="mt-4 text-base md:text-lg leading-8 text-muted-foreground">
                  That&apos;s why I built AskDoGood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 bg-[linear-gradient(165deg,rgba(248,255,250,1)_0%,rgba(242,249,245,1)_38%,rgba(255,255,255,1)_100%)] overflow-hidden">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" aria-hidden="true" />

        <div className="container relative">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-primary/15 bg-white/95 p-7 shadow-[0_22px_70px_rgba(20,45,30,0.10)] md:p-10">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Mission in one sentence</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-5xl font-serif">
                  AskDoGood exists to help people build wholesome lives and pay that healing forward to their communities.
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                  We close the missing gaps that keep people stuck: health literacy, food discipline, vice interruption, employment stability, and everyday structure.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-primary/20 bg-[linear-gradient(160deg,rgba(14,49,33,0.95),rgba(26,99,66,0.92))] p-6 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.24em] text-white/75">Founder standard</p>
                <p className="mt-3 text-2xl font-bold leading-tight font-serif">Eat to live. Never live to eat.</p>
                <p className="mt-3 text-sm leading-7 text-white/85">
                  Discipline is not punishment. It is the bridge between intention and a life your body can actually sustain.
                </p>
                <p className="mt-3 text-xs text-white/60 italic">
                  Inspired by <em>How to Eat to Live</em> by Elijah Muhammad
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {missionStandards.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border/70 bg-background/90 p-5 shadow-sm">
                  <div className="mb-3 inline-flex rounded-2xl bg-primary/10 p-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Link href="/free-meal-plan">
                <Button className="h-full w-full rounded-3xl px-6 py-6 text-base font-bold shadow-lg">
                  Start free with a plan
                </Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline" className="h-full w-full rounded-3xl border-2 border-primary/30 px-6 py-6 text-base font-bold">
                  Explore paid tools
                </Button>
              </Link>
              <Link href="/work-with-askdogood">
                <Button variant="secondary" className="h-full w-full rounded-3xl px-6 py-6 text-base font-bold">
                  Partner for community impact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_32%),linear-gradient(180deg,_rgba(244,250,246,1)_0%,_rgba(255,255,255,1)_100%)]">
        <div className="container">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-primary/15 bg-white shadow-[0_24px_80px_rgba(22,45,33,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative p-8 md:p-10 lg:p-12">
                <div className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block" aria-hidden="true" />
                <span className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Nature Remedy
                </span>
                <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-foreground md:text-5xl font-serif">
                  DoGood&apos;s Nature Remedy to Lower Cortisol
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  Movement, breath, food, awareness... this is where we begin lowering stress at the root instead of reacting to it. I don&apos;t believe in cutting doctors out, we need them, but we need a different relationship. One where you come informed, aware, and ready to have real conversations about your health. Nobody will care about your body more than you. In a world that&apos;s changing fast, we have to learn how to take care of ourselves beyond systems that may not always be there. AskDoGood is built on self-awareness, early adjustments, and real healing, not masking symptoms. Doctors can be wrong, they&apos;re human, and that&apos;s why your voice matters. I believe healing starts and ends with nature. If access changed tomorrow, what would you rely on? This is about building real health, better habits, and generational change.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-border/70 bg-secondary/20 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Regulate</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Walking outdoors can interrupt stress loops and support lower cortisol patterns.</p>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-secondary/20 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Restore</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Fresh air, steady pace, and visual quiet can help settle blood pressure and mental noise.</p>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-secondary/20 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Reconnect</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Nature heightens awareness. That often opens the door to gratitude, prayer, and spiritual clarity.</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/keep-moving">
                    <Button className="rounded-3xl px-7 py-6 text-base font-bold shadow-lg">
                      Explore the flipbooks
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href={featuredNatureWalk.href} className="inline-flex items-center justify-center rounded-3xl border-2 border-primary/25 px-7 py-6 text-base font-bold text-foreground transition-colors hover:bg-primary/5">
                    Open {featuredNatureWalk.title}
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden bg-[linear-gradient(160deg,_rgba(12,43,29,0.96),_rgba(22,78,52,0.9))] p-8 md:p-10 lg:p-12 text-white">
                <iframe
                  src={featuredNatureWalk.href}
                  title={`${featuredNatureWalk.title} background preview`}
                  className="pointer-events-none absolute inset-0 h-full w-full scale-[1.04] opacity-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,_rgba(12,43,29,0.62),_rgba(22,78,52,0.56))]" aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.1),_transparent_34%)]" aria-hidden="true" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Featured walk</p>
                  <h3 className="mt-4 text-3xl font-bold md:text-4xl">{featuredNatureWalk.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/80">{featuredNatureWalk.description}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {featuredNatureWalk.stats.slice(0, 4).map((stat) => (
                      <div key={stat.label} className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/65">{stat.label}</p>
                        <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-sm uppercase tracking-[0.22em] text-white/60">Why it works</p>
                    <p className="mt-3 text-base leading-7 text-white/85">
                      {featuredNatureWalk.highlights[0]} {featuredNatureWalk.highlights[3]}
                    </p>
                  </div>
                </div>
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
                <button
                  key={pillar.title}
                  type="button"
                  className="relative overflow-hidden rounded-3xl border border-border/70 bg-background/85 p-5 text-left shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                  onClick={() =>
                    openSpotlight({
                      src: "",
                      alt: pillar.title,
                      title: pillar.title,
                      detail: pillar.context,
                    })
                  }
                >
                  <div className="pointer-events-none absolute -right-8 -bottom-8 h-36 w-36 opacity-80">
                    {renderPillarArt(pillar.title)}
                  </div>
                  <div className="mb-3 inline-flex rounded-2xl bg-primary/10 p-3">{pillar.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/shop">
                <Button className="rounded-3xl px-6 bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl">Explore the catalog</Button>
              </Link>
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

      {/* FOOD SLIDESHOW - Healing Meals */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-serif">
              Real Food. <span className="text-primary">Real Healing.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discipline-based meals that support healing across thyroid, gut, blood pressure, and blood sugar goals
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-[2rem] border border-primary/20 bg-card p-6 shadow-xl md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">My health journey</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight font-serif text-foreground md:text-3xl">
                From survival mode to steady healing
              </h3>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-border/70 bg-background/85 p-4">
                  <p className="text-base leading-7 text-muted-foreground">
                    For <strong>seven years</strong>, I could barely eat. I survived on Italian ice, water, and Pepto Bismol while severe GERD and IBS symptoms controlled my days.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/85 p-4">
                  <p className="text-base leading-7 text-muted-foreground">
                    Pantoprazole at max dose still wasn&apos;t enough. Then dicyclomine finally gave me a measurable shift, and I used that moment to rebuild everything else with structure.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/85 p-4">
                  <p className="text-base leading-7 text-muted-foreground">
                    I moved into <strong>plant-based meals, daily movement, and faith-driven discipline</strong>. I went from dicyclomine four times a day to <strong>none</strong>, and got back to eating real food.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/8 p-5">
                <p className="text-base font-semibold leading-7 text-foreground">
                  That journey is why every AskDoGood recipe is tested in real life, not just written for likes.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 text-center">
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                  <p className="text-2xl font-bold text-primary">7 Years</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Chronic GERD + IBS</p>
                </div>
                <div className="rounded-2xl border border-secondary/25 bg-secondary/10 p-4">
                  <p className="text-2xl font-bold text-secondary">Daily Movement</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">P90X, gym, running</p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                  <p className="text-2xl font-bold text-primary">Real Recovery</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Back to thriving</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card p-4 shadow-lg">
                <FoodSlideshow />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-md">
                  <img
                    src="/images/personal/food/meal-complete.jpg"
                    alt="Complete healing meal prepared by RoSee Murphy"
                    className="h-44 w-full object-cover"
                    loading="lazy"
                    onError={(e) => handleImageError(e)}
                  />
                  <p className="px-4 py-3 text-sm font-medium text-foreground">Balanced meals with intention</p>
                </div>
                <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-md">
                  <img
                    src="/images/personal/food/smoothie-green-goddess.jpg"
                    alt="Green smoothie for gut and inflammation support"
                    className="h-44 w-full object-cover"
                    loading="lazy"
                    onError={(e) => handleImageError(e)}
                  />
                  <p className="px-4 py-3 text-sm font-medium text-foreground">Simple prep that supports healing</p>
                </div>
              </div>

              <div className="rounded-3xl border border-primary/25 bg-[linear-gradient(150deg,rgba(16,185,129,0.14),rgba(255,255,255,0.95))] p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">Why this section matters</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Food is not just fuel. It&apos;s information to your hormones, your gut, your blood sugar, and your stress response. This is where discipline becomes healing.
                </p>
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
                className="relative w-full max-w-sm rounded-[2rem] object-cover border border-white/70 shadow-2xl cursor-zoom-in"
                loading="lazy"
                width="420"
                height="520"
                onError={(e) => handleImageError(e, "/images/personal/rosee-hero-1.jpg")}
                onClick={() =>
                  openSpotlight({
                    src: founderPhotoSecondary,
                    alt: "RoSeé Murphy portrait for Ask DoGood wellness brand",
                    title: "Founder portrait",
                    detail:
                      "This is the visual anchor for AskDoGood. It links the mission to a real person with lived health and rebuilding experience.",
                  })
                }
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
              A stronger look at the real moments, outreach, and personal standards behind the work.
            </p>
            <p className="text-md text-primary/80 italic font-medium">
              Cultural memories, community service, healing with style, and the routines that stayed consistent.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <PersonalSlideshow />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[linear-gradient(160deg,rgba(255,250,244,0.95),rgba(255,255,255,1))] border-y border-border/50">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-primary font-semibold">Founder gallery</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold font-serif">More of the real person behind AskDoGood</h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
                Strong information builds trust, and seeing the founder builds connection. These moments keep the brand human while the business stays polished.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {founderGallery.map((item) => (
                <Card
                  key={item.src}
                  className="overflow-hidden border-border/60 bg-card/95 shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                  onClick={() =>
                    openSpotlight({
                      src: item.src,
                      alt: item.alt,
                      title: item.label,
                      detail: item.context,
                    })
                  }
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width="500"
                      height="620"
                      onError={(e) => handleImageError(e, founderPhotoSecondary)}
                    />
                    <div className="absolute left-4 top-4">
                      <Badge className="rounded-full bg-black/45 text-white border border-white/30">{item.label}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-sm leading-7 text-muted-foreground">{item.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOP SECTION - Core Toolkit */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 mb-6">
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                Live Offers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Start with four <span className="text-primary">core tools</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with practical products built for real-life healing, food discipline, and stable routines that support long-term health.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border border-border/70 bg-background/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg"
              >
                <div className="relative border-b border-border/70 bg-[linear-gradient(180deg,rgba(250,245,240,0.9),rgba(255,255,255,0.95))] px-6 py-5">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <Badge variant="outline" className="border-primary/20 bg-background/70 text-primary">
                      {product.category}
                    </Badge>
                    <Badge className="bg-primary text-white font-bold shadow-sm">
                      {product.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center rounded-2xl bg-white/70 p-4 shadow-[inset_0_0_0_1px_rgba(120,96,80,0.08)]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-36 w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                      width="400"
                      height="180"
                      onError={(e) => handleImageError(e)}
                    />
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl leading-tight">{product.name}</CardTitle>
                  <CardDescription className="text-sm leading-6">{product.shortSummary}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{product.cta}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Price</p>
                      <span className="text-2xl font-bold text-primary">{product.priceLabel}</span>
                    </div>
                    <p className="max-w-[12rem] text-right text-xs leading-5 text-muted-foreground">
                      Direct checkout for the live version of this offer.
                    </p>
                  </div>
                  {hasLiveCheckout(product) ? (
                    <a href={product.checkoutUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full rounded-full text-base font-semibold py-3 shadow-sm hover:shadow-md transition-all">
                        View offer
                      </Button>
                    </a>
                  ) : (
                    <Link href={product.internalPath || "/shop"}>
                      <Button variant="outline" className="w-full rounded-full text-base font-semibold py-3 shadow-sm hover:shadow-md transition-all">
                        Learn more
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground font-medium">
              These are the four homepage offers with active pricing and current checkout paths.
            </p>
            <Link href="/shop">
              <Button className="rounded-full text-base md:text-lg font-semibold py-3 px-6">
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
                Practical writing on holistic health, blood pressure, blood sugar, meal prep, gut recovery, systems, culture, and the everyday work of rebuilding well.
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
                      Chyna White Is Here
                    </h2>
                    <p className="text-xl text-muted-foreground mb-4">
                      Fierce, current fiction with a lead built to hold attention.
                    </p>
                  </div>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p className="leading-relaxed">
                      Meet <strong className="text-primary">Chyna White</strong> - a woman with
                      leverage, style, and the kind of presence that makes every room recalculate.
                    </p>
                    <p className="leading-relaxed">
                      This series leads with pressure, taste, and strategy instead of cliches.
                      Chyna reads as fierce, new, and fully capable of becoming the story readers
                      talk about first.
                    </p>
                    <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                      <p className="text-foreground font-medium">
                        Fiction with cultural heat
                        <br />
                        Boardroom tension meets street memory
                        <br />A lead who moves like the headline
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link href="/stories/chyna-white/episode-1">
                      <Button className="gap-2 rounded-3xl py-3 px-8 w-full sm:w-auto">
                        Read Episode 1 <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/stories/chyna-white">
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
          <div className="mx-auto mb-8 max-w-2xl overflow-hidden rounded-3xl border border-primary/20 bg-background/70 shadow-xl">
            <img
              src="/images/personal/food/meal-prep.jpg"
              alt="Free Thyroid Symptom Checklist and 3-Day Meal Plan preview"
              className="h-64 w-full object-cover"
              loading="lazy"
              width="1200"
              height="640"
              onError={(e) => handleImageError(e, "/images/products/gumroad_thumbnail.png")}
            />
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full mb-4 shadow-lg">
              <span className="text-sm font-bold text-white">Free resource</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
              Start with a practical holistic resource.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a free 3-day healing meal plan and practical guidance. Clear value, no clutter.
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

      <Dialog open={Boolean(spotlight)} onOpenChange={(open) => !open && closeSpotlight()}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          <div className="bg-gradient-to-b from-background to-secondary/10">
            {spotlight?.src ? (
              <div className="max-h-[65vh] overflow-hidden bg-muted">
                <img
                  src={spotlight.src}
                  alt={spotlight.alt}
                  className="h-full w-full object-contain"
                  loading="eager"
                  onError={(e) => handleImageError(e, heroMainFallback)}
                />
              </div>
            ) : null}
            <div className="p-6 md:p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif">{spotlight?.title}</DialogTitle>
              </DialogHeader>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{spotlight?.detail}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}