import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  HeartPulse,
  UtensilsCrossed,
  BookOpen,
  Users,
} from "lucide-react";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { href: "/journey", label: "Start Here", icon: Sparkles },
    { href: "/clinical-recipes", label: "Clinical Food RX", icon: UtensilsCrossed },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/community", label: "Community", icon: Users },
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
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location === item.href;
            const Icon = item.icon;

            return (
              <Link key={item.href} href={item.href}>
                <a
                  className={[
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: CTA */}
        <div className="flex items-center gap-2">
          <Link href="/contact">
            <Button size="sm" className="gap-2">
              <HeartPulse className="h-4 w-4" />
              Connect
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}