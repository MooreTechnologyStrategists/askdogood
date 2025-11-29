import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useUser } from "@/hooks/useUser";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const { user } = useUser();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/journey", label: "My Journey" },
    ...(user ? [{ path: "/dashboard", label: "Dashboard" }] : []),
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
              Ask Do Good
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground/60"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/profile">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    {user.name || 'Profile'}
                  </Button>
                </Link>
                <Button variant="outline" size="sm" asChild>
                  <a href="/api/auth/logout">Logout</a>
                </Button>
              </div>
            ) : (
              <Button size="sm" asChild>
                <a href="/api/auth/login">Login</a>
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground/60"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
