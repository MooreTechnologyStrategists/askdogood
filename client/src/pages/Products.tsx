import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Download,
  ExternalLink,
  Gift,
  Heart,
  Leaf,
  Shirt,
  ShoppingBag,
  Sparkles,
  Star,
  Users,
  Video,
} from "lucide-react";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import { useEffect } from "react";

const ASSET_BASE_URL = "https://askdogoodassets.blob.core.windows.net/images";

// ─── Data ─────────────────────────────────────────────────────────────────────

const digitalProducts = [
  {
    id: "thyroid-mastery",
    name: "Thyroid Health Mastery Course",
    tagline: "Everything you need to understand, manage & optimise your thyroid—built by someone who's lived it.",
    price: 97,
    regularPrice: 197,
    badge: "Best Seller",
    badgeVariant: "default" as const,
    category: "Online Course",
    icon: Video,
    image: `${ASSET_BASE_URL}/products/Thyroid_Health_Mastery_Cover.png`,
    highlights: [
      "6 video modules (3+ hours)",
      "Lab interpretation guide",
      "30-day money-back guarantee",
      "Private community + live Q&As",
    ],
    cta: "Enrol Now",
    href: "https://askdogood.gumroad.com/l/thyroid-health-mastery",
    external: true,
  },
  {
    id: "plant-reset",
    name: "21-Day Plant-Based Reset",
    tagline: "Transform inflammation, digestion & energy in three weeks with delicious, science-backed meals.",
    price: 47,
    badge: "Popular",
    badgeVariant: "secondary" as const,
    category: "Transformation Program",
    icon: Leaf,
    image: `${ASSET_BASE_URL}/products/Clinical_Food_RX_Cover.png`,
    highlights: [
      "21-day meal plan",
      "Weekly grocery lists",
      "Anti-inflammatory recipes",
      "Thyroid & gut-friendly",
    ],
    cta: "Get Instant Access",
    href: "https://askdogood.gumroad.com/l/clinical-food-rx",
    external: true,
  },
  {
    id: "lab-guide",
    name: "Thyroid Lab Interpretation Guide",
    tagline: "Decode your labs with confidence—TSH, Free T3, Free T4, antibodies & more explained in plain language.",
    price: 27,
    badge: "Quick Win",
    badgeVariant: "outline" as const,
    category: "Digital Guide",
    icon: BookOpen,
    image: `${ASSET_BASE_URL}/products/Lab_Interpretation_Guide_Cover.png`,
    highlights: [
      "Optimal vs. 'normal' ranges",
      "Questions to ask your doctor",
      "Printable reference guide",
      "Comprehensive lab breakdown",
    ],
    cta: "Download Now",
    href: "https://askdogood.gumroad.com/l/thyroid-lab-guide",
    external: true,
  },
  {
    id: "supplement-templates",
    name: "Thyroid Supplement Protocol Templates",
    tagline: "Personalise your supplement plan with ready-to-use templates, dosage guidance & tracking sheets.",
    price: 17,
    badge: "Starter Pack",
    badgeVariant: "outline" as const,
    category: "Digital Templates",
    icon: Download,
    image: `${ASSET_BASE_URL}/products/Thyroid_Health_Mastery_Cover.png`,
    highlights: [
      "Customisable protocol templates",
      "Dosage & timing guidance",
      "Symptom tracking sheets",
      "Doctor-friendly format",
    ],
    cta: "Download Now",
    href: "https://askdogood.gumroad.com/l/adioal",
    external: true,
  },
];

const coachingPackages = [
  {
    name: "Discovery Call",
    price: 297,
    unit: "session",
    description: "One powerful 60-minute video call to map out your personalised thyroid health plan.",
    features: [
      "Lab review & interpretation",
      "Personalised action plan",
      "Resource recommendations",
      "48-hour follow-up support",
    ],
    cta: "Book a Discovery Call",
    href: "/contact?subject=discovery-call",
    highlight: false,
  },
  {
    name: "Monthly Transformation",
    price: 497,
    unit: "month",
    description: "Deep-dive ongoing coaching for women ready to reclaim their energy, clarity & wellbeing.",
    features: [
      "4 x 60-min video sessions",
      "Custom protocol & meal plan",
      "Unlimited email support",
      "Lab & medication review",
      "Priority scheduling",
    ],
    cta: "Start Your Transformation",
    href: "/contact?subject=transformation-package",
    highlight: true,
  },
  {
    name: "VIP Intensive Day",
    price: 997,
    unit: "day",
    description: "A full-day deep-dive—labs, protocols, nutrition, lifestyle—completely personalised.",
    features: [
      "Full-day 1:1 session (6 hrs)",
      "Comprehensive lab analysis",
      "Complete wellness protocol",
      "30-day follow-up support",
      "Lifetime access to recordings",
    ],
    cta: "Apply for VIP Day",
    href: "/contact?subject=vip-intensive",
    highlight: false,
  },
];

const freeResources = [
  {
    name: "Free Thyroid Lab Guide",
    description: "Understand your lab results and know exactly what to ask your doctor—free.",
    icon: BookOpen,
    href: "/free-thyroid-lab-guide",
    badge: "1,000+ Downloads",
  },
  {
    name: "7-Day Thyroid Meal Plan",
    description: "A week of delicious, anti-inflammatory, thyroid-friendly meals—completely free.",
    icon: Leaf,
    href: "/free-meal-plan",
    badge: "Instant Access",
  },
  {
    name: "Symptom Tracker",
    description: "Track patterns, identify triggers, and build a clear picture to share with your doctor.",
    icon: Heart,
    href: "/symptom-tracker",
    badge: "Interactive Tool",
  },
  {
    name: "Doctor Appointment Checklist",
    description: "Never leave an appointment without answers again. Prepare like a pro.",
    icon: Download,
    href: "/doctor-checklist",
    badge: "Printable PDF",
  },
];

const comingSoonProducts = [
  {
    name: "Autoimmune Recovery Guide",
    description: "The exact protocol used to reach remission from 5 autoimmune conditions—naturally.",
    price: 37,
    eta: "Spring 2025",
    icon: BookOpen,
  },
  {
    name: "Garden to Table Wellness Bundle",
    description: "Grow your own healing foods and transform them into 50+ therapeutic meals.",
    price: 67,
    eta: "Summer 2025",
    icon: Leaf,
  },
  {
    name: "Wellness Circle Membership",
    description: "Monthly deep-dives, live Q&As, community support & exclusive content—all in one place.",
    price: null,
    priceNote: "Founding member pricing",
    eta: "Coming Soon",
    icon: Users,
  },
  {
    name: "AskDoGood Merch Collection",
    description: "Wear your healing journey. Mugs, tees, hoodies & totes celebrating real-life wellness.",
    price: null,
    priceNote: "From $18",
    eta: "Launching Soon",
    icon: Shirt,
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-24">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border text-sm font-medium">
            <ShoppingBag className="h-4 w-4 text-primary" />
            Everything you need to heal, thrive & live well
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Courses, Guides &{" "}
            <span className="text-primary">Coaching</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Science-backed, lived-experience-tested resources for women navigating thyroid disease,
            autoimmune conditions & holistic wellness. Real talk. Real results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> 4.9/5 average rating</span>
            <span>·</span>
            <span>500+ students & clients</span>
            <span>·</span>
            <span>30-day money-back guarantee</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <a href="#digital-products">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/coaching">Work with Me 1:1</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Digital Products ────────────────────────────────────────────── */}
      <section id="digital-products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>Digital Products</SectionLabel>
            <h2 className="text-4xl font-bold mb-4">Self-Paced Learning & Guides</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Instant access. Lifetime ownership. Real results. These resources
              meet you exactly where you are—no medical background required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {digitalProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.id}
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/40"
                >
                  {/* Image */}
                  <div className="relative h-52 bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <Badge
                      variant={product.badgeVariant}
                      className="absolute top-3 left-3 shadow"
                    >
                      {product.badge}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm"
                    >
                      <Icon className="h-3 w-3 mr-1" />
                      {product.category}
                    </Badge>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.tagline}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-1.5">
                      {product.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-bold mt-0.5">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold">${product.price}</span>
                      {product.regularPrice && (
                        <span className="text-muted-foreground line-through text-base">
                          ${product.regularPrice}
                        </span>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button className="w-full" size="lg" asChild>
                      <a href={product.href} target="_blank" rel="noopener noreferrer">
                        {product.cta}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Coaching ────────────────────────────────────────────────────── */}
      <section id="coaching" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>1-on-1 Coaching</SectionLabel>
            <h2 className="text-4xl font-bold mb-4">Personalised Thyroid Health Coaching</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Work directly with RoSeé to get a fully personalised plan—labs, nutrition,
              supplements, lifestyle & advocacy—built around YOUR body and YOUR goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coachingPackages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative flex flex-col ${pkg.highlight ? "border-2 border-primary shadow-xl" : ""}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1 shadow-md">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2 pt-6">
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                    {pkg.name}
                  </p>
                  <div className="flex items-baseline justify-center gap-1 mt-2">
                    <span className="text-4xl font-extrabold">${pkg.price}</span>
                    <span className="text-muted-foreground text-sm">/{pkg.unit}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={pkg.highlight ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href={pkg.href}>{pkg.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="ghost" asChild>
              <Link href="/coaching">
                View full coaching details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Free Resources ────────────────────────────────────────────── */}
      <section id="free-resources" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>Free Resources</SectionLabel>
            <h2 className="text-4xl font-bold mb-4">Start Here—100% Free</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Not ready to invest yet? These free resources give you a real taste of
              what's possible when you have the right information.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {freeResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link key={resource.name} href={resource.href}>
                  <Card className="h-full hover:shadow-lg hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {resource.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{resource.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {resource.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <span className="text-primary text-sm font-semibold flex items-center gap-1">
                        Get it free <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Coming Soon ────────────────────────────────────────────────── */}
      <section id="coming-soon" className="py-20 bg-gradient-to-br from-secondary/20 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>Coming Soon</SectionLabel>
            <h2 className="text-4xl font-bold mb-4">Products in Development</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Big things are in the works. Join the waitlist to get early-bird access
              and exclusive launch discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
            {comingSoonProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.name}
                  className="relative overflow-hidden border-dashed border-2 bg-background/60 backdrop-blur-sm"
                >
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      {product.eta}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2 pt-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base leading-snug">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <div className="text-sm font-semibold text-primary">
                      {product.price ? `$${product.price}` : product.priceNote}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Waitlist CTA */}
          <div className="max-w-xl mx-auto">
            <BeehiivSubscribe
              variant="card"
              title="Join the Early Access List"
              description="Be first to know when new products drop—and get exclusive launch pricing."
              buttonText="Get Early Access"
              source="products-page-coming-soon"
            />
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip ──────────────────────────────────────────── */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Students & Clients" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "87%", label: "Course Completion" },
              { value: "30-Day", label: "Money-Back Guarantee" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-extrabold">{value}</div>
                <div className="text-primary-foreground/80 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl space-y-6">
          <Gift className="h-12 w-12 text-primary mx-auto" />
          <h2 className="text-4xl font-bold">Not sure where to start?</h2>
          <p className="text-muted-foreground text-lg">
            The free Thyroid Lab Guide is the perfect first step. Thousands of women have
            used it to walk into their next doctor's appointment with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/free-thyroid-lab-guide">
                Get the Free Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/shop">Browse the Full Shop</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
