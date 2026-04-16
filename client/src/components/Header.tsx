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
} from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/journey", label: "Journey", icon: Sparkles },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/stories", label: "Stories", icon: BookOpen },
    { href: "/resources", label: "Resources", icon: Library },
    { href: "/herbs", label: "Herbs", icon: Leaf },
    {
      label: "Health Apps",
      icon: Heart,
      submenu: [
        { href: "/label-scanner", label: "Label Scanner", icon: Scan },
        { href: "/meal-prep", label: "Meal Prep Concierge", icon: UtensilsCrossed },
        { href: "/clinical-recipes", label: "Clinical Recipes", icon: HeartPulse },
      ],
    },
    { href: "/dashboard", label: "Dashboard", icon: Users },
    { href: "/shop", label: "Shop", icon: ShoppingBag, highlight: true },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md shadow-sm">
      <div className="container flex h-14 items-center justify-between">
        {/* LEFT: Logo / Brand */}
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight cursor-pointer">
          <img
            src="https://askdogoodassets.blob.core.windows.net/images/brand/logo-flower-circle.webp"
            alt="Ask DoGood"
            className="h-7 w-7 object-contain"
          />
          <span className="hidden sm:inline text-base font-bold tracking-tight">Ask DoGood</span>
        </Link>

        {/* CENTER: Nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => {
            if (item.submenu) {
              return (
                <div key={item.label} className="relative group">
                  <button className={["flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all cursor-pointer","hover:bg-accent hover:text-accent-foreground hover:shadow-sm","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2","text-muted-foreground"].join(" ")}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                    <div className="py-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-all"
                        >
                          <sub.icon className="h-4 w-4" />
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
                  href={item.href}
                  className={["flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all cursor-pointer","hover:bg-accent/50 hover:text-foreground","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",isActive? "text-primary font-semibold border-b-2 border-primary rounded-none pb-[6px]": "text-muted-foreground",item.highlight && "bg-primary/10 text-primary hover:bg-primary/20 font-semibold rounded-md",].join(" ")}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              );
            }
          })}
        </nav>

        {/* RIGHT: CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm" className="hidden md:flex text-muted-foreground hover:text-foreground font-medium">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-4">
              Join Free
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-site-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-site-menu" className="lg:hidden border-t bg-background/95 backdrop-blur animate-in slide-in-from-top-2 duration-200">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.label} className="flex flex-col">
                    <span className="flex items-center gap-3 rounded-md px-4 py-3 text-base font-medium text-muted-foreground">
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </span>
                    <div className="pl-6 flex flex-col gap-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 rounded-md px-4 py-2 text-base text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          <sub.icon className="h-4 w-4" />
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
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={["flex items-center gap-3 rounded-md px-4 py-3 text-base font-medium transition-all cursor-pointer","hover:bg-accent hover:text-accent-foreground",isActive? "bg-accent text-accent-foreground": "text-muted-foreground",item.highlight && "bg-primary/10 text-primary hover:bg-primary/20 font-semibold",].join(" ")}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              }
            })}
          </nav>
          <div className="container pb-4 flex flex-col gap-2">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-transparent border border-border text-foreground hover:bg-accent">
                Sign In
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Join
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}