import { X, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground">
      <div className="container">
        <div className="flex items-center justify-center gap-3 py-2.5 px-4 text-sm font-medium">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span className="hidden sm:inline">
            <strong>🌿 APRIL WELLNESS LAUNCH:</strong> Thyroid Course $97
            <span className="ml-1 line-through opacity-75">$197</span>
            {" · "}
            <strong>Free Herb Dictionary is LIVE</strong>
          </span>
          <span className="inline sm:hidden">
            <strong>🌿 April Launch</strong> — Course + Free Herbs!
          </span>
          <div className="flex gap-1.5 ml-2">
            <Link href="/shop">
              <Button size="sm" variant="secondary" className="gap-1 h-7 text-xs">
                Shop <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
            <Link href="/herbs">
              <Button size="sm" variant="outline" className="gap-1 h-7 text-xs bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                Herbs <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-primary-foreground/10 transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
