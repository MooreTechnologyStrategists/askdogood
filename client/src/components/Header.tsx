import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Sparkles,
  HeartPulse,
  UtensilsCrossed,
  BookOpen,
  Users,
  ShoppingBag,
  Library,
  Mail,
  User,
  Home,
  Menu,
  X,
  Scan,
  Heart,
  Leaf,
  ChevronDown,
} from "lucide-react";

// Inline SVG logo mark — forest green leaf + terracotta circle + wordmark
function AskDoGoodLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Icon mark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer warm cream circle */}
        <circle cx="16" cy="16" r="15.5" fill="oklch(0.98 0.012 82)" stroke="oklch(0.90 0.018 80)" strokeWidth="1" />
        {/* Forest green leaf shape */}
        <path
          d="M16 6 C10 6, 7 10, 7 16 C7 20.5, 9.5 24, 13 25.5 C13 22, 14 18, 16 15 C18 18, 19 22, 19 25.5 C22.5 24, 25 20.5, 25 16 C25 10, 22 6, 16 6 Z"
          fill="oklch(0.33 0.13 138)"
          opacity="0.92"
        />
        {/* Terracotta accent dot */}
        <circle cx="22" cy="10" r="3.5" fill="oklch(0.57 0.15 45)" />
        {/* Stem line */}
        <line x1="16" y1="25.5" x2="16" y2="28" stroke="oklch(0.33 0.13 138)" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className="text-[0.72rem] font-semibold uppercase tracking-[0.20em] text-[oklch(0.57_0.15_45)]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Ask
        </span>
        <span
          className="text-[1.05rem] font-bold tracking-tight text-[oklch(0.33_0.13_138)]"
          style={{ fontFamily: "var(--font-serif)", lineHeight: 1 }}
        >
          DoGood
        </span>
      </span>
    </span>
  );
}

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Elevate header shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/journey", label: "Journey", icon: Sparkles },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/resources", label: "Resources", icon: Library },
    { href: "/herbs", label: "Herbs", icon: Leaf },
    {
      label: "Tools",
      icon: Heart,
      submenu: [
        { href: "/label-scanner", label: "Label Scanner", icon: Scan },
        { href: "/meal-prep", label: "Meal Prep Concierge", icon: UtensilsCrossed },
        { href: "/clinical-recipes", label: "Clinical Recipes", icon: HeartPulse },
        { href: "/keep-moving", label: "Digital Library", icon: BookOpen },
        { href: "/stories", label: "Stories", icon: BookOpen },
      ],
    },
    { href: "/dashboard", label: "Dashboard", icon: Users },
    { href: "/shop", label: "Shop", icon: ShoppingBag, highlight: true },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const headerClass = [
    "sticky top-0 z-50 w-full border-b transition-all duration-200",
    "bg-[oklch(0.99_0.010_82)]/95 backdrop-blur-md",
    scrolled
      ? "border-[oklch(0.90_0.018_80)] shadow-[0_2px_16px_oklch(0.33_0.13_138/0.08)]"
      : "border-transparent shadow-none",
  ].join(" ");

  return (
    <header className={headerClass}>
      <div className="container flex h-[60px] items-center justify-between gap-4">
        {/* LEFT: Logo / Brand */}
        <Link href="/" className="shrink-0 cursor-pointer" aria-label="Ask DoGood home">
          <AskDoGoodLogo />
        </Link>

        {/* CENTER: Nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" aria-label="Main navigation">
          {navItems.map((item) => {
            if (item.submenu) {
              return (
                <div key={item.label} className="relative group">
                  <button
                    className={[
                      "flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-150",
                      "text-[oklch(0.52_0.025_58)] hover:text-[oklch(0.33_0.13_138)]",
                      "hover:bg-[oklch(0.95_0.020_100)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.33_0.13_138)]",
                    ].join(" ")}
                    aria-haspopup="true"
                  >
                    <item.icon className="h-3.5 w-3.5 shrink-0" />
                    {item.label}
                    <ChevronDown className="h-3 w-3 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute left-0 top-full mt-1.5 w-52 rounded-2xl shadow-[0_8px_28px_oklch(0.14_0.002_0/0.12)] bg-[oklch(1.00_0.005_82)] border border-[oklch(0.90_0.018_80)] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-150 scale-95 group-hover:scale-100 origin-top-left z-20">
                    <div className="p-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-[oklch(0.52_0.025_58)] hover:bg-[oklch(0.95_0.020_100)] hover:text-[oklch(0.33_0.13_138)] rounded-xl transition-all duration-150 font-medium"
                        >
                          <sub.icon className="h-4 w-4 shrink-0 text-[oklch(0.63_0.10_140)]" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            } else {
              const isActive = location === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={[
                    "flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-150",
                    "hover:bg-[oklch(0.95_0.020_100)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.33_0.13_138)]",
                    isActive
                      ? "text-[oklch(0.33_0.13_138)] font-semibold bg-[oklch(0.95_0.020_100)]"
                      : "text-[oklch(0.52_0.025_58)] hover:text-[oklch(0.33_0.13_138)]",
                    item.highlight &&
                      "bg-[oklch(0.33_0.13_138)] text-[oklch(0.98_0.012_82)] hover:bg-[oklch(0.40_0.14_138)] hover:text-[oklch(0.98_0.012_82)] font-semibold rounded-xl shadow-sm px-4",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {item.label}
                </Link>
              );
            }
          })}
        </nav>

        {/* RIGHT: CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex text-[oklch(0.52_0.025_58)] hover:text-[oklch(0.33_0.13_138)] hover:bg-[oklch(0.95_0.020_100)] font-medium rounded-xl"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="sm"
              className="hidden md:flex font-semibold px-4 rounded-xl bg-[oklch(0.57_0.15_45)] text-[oklch(0.98_0.012_82)] hover:bg-[oklch(0.50_0.14_45)] shadow-sm transition-all"
            >
              Join Free
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-[oklch(0.95_0.020_100)] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-site-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-[oklch(0.33_0.13_138)]" />
            ) : (
              <Menu className="h-5 w-5 text-[oklch(0.52_0.025_58)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-site-menu"
          className="lg:hidden border-t border-[oklch(0.90_0.018_80)] bg-[oklch(0.99_0.010_82)]/98 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="container py-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <span className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold text-[oklch(0.52_0.025_58)] uppercase tracking-wide">
                      <item.icon className="h-4 w-4 text-[oklch(0.63_0.10_140)]" />
                      {item.label}
                    </span>
                    <div className="pl-5 flex flex-col gap-0.5">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium text-[oklch(0.52_0.025_58)] hover:bg-[oklch(0.95_0.020_100)] hover:text-[oklch(0.33_0.13_138)] transition-colors"
                        >
                          <sub.icon className="h-4 w-4 shrink-0" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              } else {
                const isActive = location === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className={[
                      "flex items-center gap-3 rounded-xl px-4 py-2.5 text-base font-medium transition-all",
                      isActive
                        ? "bg-[oklch(0.95_0.020_100)] text-[oklch(0.33_0.13_138)] font-semibold"
                        : "text-[oklch(0.52_0.025_58)] hover:bg-[oklch(0.95_0.020_100)] hover:text-[oklch(0.33_0.13_138)]",
                      item.highlight && "bg-[oklch(0.33_0.13_138)] text-[oklch(0.98_0.012_82)] hover:bg-[oklch(0.40_0.14_138)] hover:text-[oklch(0.98_0.012_82)] font-semibold",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    {item.label}
                  </Link>
                );
              }
            })}
          </nav>

          <div className="container pb-4 pt-2 flex flex-col gap-2 border-t border-[oklch(0.90_0.018_80)] mt-1">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-transparent border border-[oklch(0.90_0.018_80)] text-[oklch(0.33_0.13_138)] hover:bg-[oklch(0.95_0.020_100)] rounded-xl">
                Sign In
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-[oklch(0.57_0.15_45)] text-[oklch(0.98_0.012_82)] hover:bg-[oklch(0.50_0.14_45)] rounded-xl font-semibold">
                Join Free
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}