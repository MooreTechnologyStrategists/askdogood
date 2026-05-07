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
    <div
      className="relative"
      style={{
        background: "linear-gradient(90deg, oklch(0.33 0.13 138) 0%, oklch(0.38 0.12 138) 50%, oklch(0.33 0.13 138) 100%)",
        color: "oklch(0.98 0.012 82)",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium">
          <span
            className="hidden sm:inline-flex items-center gap-1.5"
            style={{ color: "oklch(0.98 0.012 82 / 0.95)" }}
          >
            <span
              className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wide mr-1"
              style={{ background: "oklch(0.57 0.15 45)", color: "oklch(0.98 0.012 82)" }}
            >
              Now Live
            </span>
            Thyroid Health Mastery — $97. Free herb dictionary available now.
          </span>
          <span
            className="inline sm:hidden"
            style={{ color: "oklch(0.98 0.012 82 / 0.95)" }}
          >
            Thyroid course + free herb dictionary live now.
          </span>
          <div className="ml-2 flex gap-1.5 shrink-0">
            <Link href="/shop">
              <Button
                size="sm"
                className="h-7 gap-1 text-xs rounded-lg font-semibold"
                style={{
                  background: "oklch(0.57 0.15 45)",
                  color: "oklch(0.98 0.012 82)",
                }}
              >
                Shop <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
            <Link href="/herbs">
              <Button
                size="sm"
                variant="outline"
                className="h-7 gap-1 text-xs rounded-lg font-medium"
                style={{
                  borderColor: "oklch(0.98 0.012 82 / 0.35)",
                  background: "oklch(0.98 0.012 82 / 0.10)",
                  color: "oklch(0.98 0.012 82)",
                }}
              >
                Herbs <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors"
            style={{ color: "oklch(0.98 0.012 82 / 0.70)" }}
            aria-label="Close announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
