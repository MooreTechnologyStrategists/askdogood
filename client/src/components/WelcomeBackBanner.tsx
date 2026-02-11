import { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * Welcome Back Banner for WordPress Migrated Subscribers
 * 
 * Shows a dismissible banner welcoming returning subscribers to the new site.
 * Uses localStorage to track if user has dismissed the banner.
 * 
 * Display this banner by adding <WelcomeBackBanner /> to your layout/header.
 */
export default function WelcomeBackBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem("welcomeBackBannerDismissed");
    if (!dismissed) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
    }
  }, []);

  const handleDismiss = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("welcomeBackBannerDismissed", "true");
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-primary/90 to-secondary text-white shadow-lg transition-all duration-300 ${
        isAnimating ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Icon and Message */}
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0">
              <Sparkles className="h-6 w-6 text-yellow-300 animate-pulse" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">
                Welcome Back to AskDoGood! 🎉
              </h3>
              <p className="text-sm text-white/90">
                We've moved from WordPress with exciting new features: Label Scanner, Recipe App, and more!
              </p>
            </div>
          </div>

          {/* Right: CTA and Close */}
          <div className="flex items-center gap-3">
            <Link href="/welcome-back">
              <Button
                variant="secondary"
                size="sm"
                className="hidden sm:flex items-center gap-2 bg-white text-primary hover:bg-white/90"
              >
                Explore New Features
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-3">
          <Link href="/welcome-back">
            <Button
              variant="secondary"
              size="sm"
              className="w-full bg-white text-primary hover:bg-white/90"
            >
              Explore New Features
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
