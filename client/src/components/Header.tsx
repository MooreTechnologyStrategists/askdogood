import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/journey", label: "Journey", icon: Sparkles },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/clinical-recipes", label: "Recipes", icon: UtensilsCrossed },
    { href: "/resources", label: "Resources", icon: Library },
    { href: "/shop", label: "Shop", icon: ShoppingBag, highlight: true },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        {/* LEFT: Logo / Brand */}
        <Link href="/">
          <a className="flex items-center gap-2 font-semibold tracking-tight">
            <img
              src="https://askdogoodassets.blob.core.windows.net/images/brand/logo-flower-circle.webp"
              alt="Ask DoGood"
              className="h-8 w-8 object-contain"
            />
            <span className="hidden sm:inline">Ask DoGood</span>
          </a>
        </Link>

        {/* CENTER: Nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = location === item.href;
            const Icon = item.icon;

            return (
              <Link key={item.href} href={item.href}>
                <a
                  className={[
                    "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all",
                    "hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    isActive
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground",
                    item.highlight && "bg-primary/10 text-primary hover:bg-primary/20 font-semibold",
                  ].join(" ")}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </a>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: CTA */}
        <div className="flex items-center gap-2">
          <Link href="/shop">
            <Button size="sm" className="gap-2 hidden md:flex">
              <ShoppingBag className="h-4 w-4" />
              Shop
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}