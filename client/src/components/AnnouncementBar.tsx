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
            <strong>LIMITED TIME:</strong> Get the Thyroid Health Mastery Course for $97 
            <span className="ml-1 line-through opacity-75">$197</span>
          </span>
          <span className="inline sm:hidden">
            <strong>50% OFF</strong> Thyroid Course!
          </span>
          <Link href="/shop">
            <Button 
              size="sm" 
              variant="secondary" 
              className="ml-2 gap-1 h-7 text-xs"
            >
              Shop Now <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
          
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
