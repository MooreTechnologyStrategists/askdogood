import { X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground">
      <div className="container">
        <div className="flex items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium">
          <span className="hidden sm:inline">
            <strong>Current focus:</strong> Thyroid Health Mastery is live at $97 and the free herb dictionary is available now.
          </span>
          <span className="inline sm:hidden">
            <strong>Now live:</strong> Thyroid course and herb dictionary.
          </span>
          <div className="ml-2 flex gap-1.5">
            <Link href="/shop">
              <Button size="sm" variant="secondary" className="h-7 gap-1 text-xs">
                Shop <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
            <Link href="/herbs">
              <Button
                size="sm"
                variant="outline"
                className="h-7 gap-1 border-primary-foreground/30 bg-primary-foreground/10 text-xs text-primary-foreground hover:bg-primary-foreground/20"
              >
                Herbs <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-primary-foreground/10"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
