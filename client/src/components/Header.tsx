import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, User as UserIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const user = useUser();
  const displayName = user?.name || user?.email || "Account";

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
            <span
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer text-2xl font-bold text-primary"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Ask Do Good
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    isActive(item.path) ? "text-primary" : "text-foreground/60"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}

            {user ? (
              <div className="flex items-center gap-3">
                <Link href="/profile">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <UserIcon className="h-4 w-4" />
                    {displayName}
                  </Button>
                </Link>

                {/* SWA managed logout */}
                <Button variant="outline" size="sm" asChild>
                  <a href="/.auth/logout?post_logout_redirect_uri=/">Logout</a>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/signup">Join</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
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
                    isActive(item.path) ? "text-primary" : "text-foreground/60"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              {user ? (
                <>
                  <Link href="/profile">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 w-full justify-start"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserIcon className="h-4 w-4" />
                      {displayName}
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full justify-center"
                  >
                    <a href="/.auth/logout?post_logout_redirect_uri=/">Logout</a>
                  </Button>
                </>
              ) : (
                <>
                  <Button size="sm" asChild className="w-full">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="/signup">Join</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
