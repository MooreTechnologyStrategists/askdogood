import { useMemo, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, User, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/useUser";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const { user, isAuthenticated } = useUser();

  const displayName = user?.userDetails ?? "Account";

  const navItems = useMemo(
    () => [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/blog", label: "Blog" },
      { path: "/journey", label: "My Journey" },
      { path: "/interests", label: "Interests" },
      { path: "/resources", label: "Resources" },
      { path: "/clinical-recipes", label: "Clinical Recipes" },
      { path: "/meal-prep", label: "Meal Prep" },
      { path: "/shop", label: "Shop" },
      { path: "/merch", label: "Merch" },
      ...(isAuthenticated ? [{ path: "/dashboard", label: "Dashboard" }] : []),
      { path: "/contact", label: "Contact" },
    ],
    [isAuthenticated]
  );

  const isActive = (path: string) => location === path;

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogin = () => {
    // Azure Static Web Apps auth (Microsoft Entra ID / AAD)
    window.location.href = "/.auth/login/aad?post_login_redirect_uri=/dashboard";
  };

  const handleLogout = () => {
    window.location.href = "/.auth/logout?post_logout_redirect_uri=/";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer text-2xl font-bold text-primary"
              style={{ fontFamily: "var(--font-serif)" }}
              onClick={closeMenu}
            >
              Ask DoGood
            </span>
          </Link>

          {/* Desktop Nav */}
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

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link href="/profile">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    {displayName}
                  </Button>
                </Link>

                <Button variant="outline" size="sm" className="gap-2" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                  Sign out
                </Button>
              </div>
            ) : (
              <Button size="sm" onClick={handleLogin}>
                Login
              </Button>
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

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    isActive(item.path) ? "text-primary" : "text-foreground/60"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </span>
              </Link>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <Link href="/profile">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 w-full justify-start"
                      onClick={closeMenu}
                    >
                      <User className="h-4 w-4" />
                      {displayName}
                    </Button>
                  </Link>

                  <Button variant="outline" size="sm" className="gap-2 w-full" onClick={handleLogout}>
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </Button>
                </>
              ) : (
                <Button size="sm" className="w-full" onClick={handleLogin}>
                  Login
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
