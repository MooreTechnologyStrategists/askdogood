import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

type HeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  align?: "left" | "center";
  /** Optional primary CTA */
  ctaPrimary?: { label: string; href: string };
  /** Optional secondary CTA */
  ctaSecondary?: { label: string; href: string };
};

export default function Hero({
  title,
  subtitle,
  image,
  align = "left",
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  const centered = align === "center";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image with warm forest gradient overlay */}
      <div
        className="min-h-[480px] md:min-h-[580px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label="Hero background — AskDoGood wellness"
      >
        {/* Layered overlay: dark base + forest green tint at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.14 0.002 0 / 0.82) 0%, oklch(0.14 0.002 0 / 0.60) 50%, oklch(0.14 0.002 0 / 0.30) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.33 0.13 138 / 0.55) 0%, transparent 55%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className={`relative container py-20 md:py-28 text-white`}>
          <div className={centered ? "max-w-3xl mx-auto text-center" : "max-w-2xl"}>
            {/* Eyebrow label */}
            <div className={`flex items-center gap-2 mb-5 ${centered ? "justify-center" : ""}`}>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]"
                style={{
                  background: "oklch(0.57 0.15 45 / 0.92)",
                  color: "oklch(0.98 0.012 82)",
                }}
              >
                <Leaf className="h-3 w-3" />
                Real Healing. Real Life.
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.15]"
              style={{ fontFamily: "var(--font-serif)", textShadow: "0 2px 12px oklch(0.14 0.002 0 / 0.4)" }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className="mt-5 text-lg md:text-xl leading-relaxed max-w-xl"
                style={{
                  color: "oklch(0.98 0.012 82 / 0.90)",
                  ...(centered ? { marginLeft: "auto", marginRight: "auto" } : {}),
                }}
              >
                {subtitle}
              </p>
            )}

            {/* CTA buttons */}
            {(ctaPrimary || ctaSecondary) && (
              <div className={`mt-8 flex flex-col sm:flex-row gap-3 ${centered ? "justify-center" : ""}`}>
                {ctaPrimary && (
                  <Link href={ctaPrimary.href}>
                    <Button
                      size="lg"
                      className="rounded-2xl font-bold px-7 py-6 text-base shadow-xl transition-all hover:scale-[1.03]"
                      style={{
                        background: "oklch(0.57 0.15 45)",
                        color: "oklch(0.98 0.012 82)",
                        boxShadow: "0 6px 20px oklch(0.57 0.15 45 / 0.40)",
                      }}
                    >
                      {ctaPrimary.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
                {ctaSecondary && (
                  <Link href={ctaSecondary.href}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-2xl font-semibold px-7 py-6 text-base border-2 transition-all hover:scale-[1.02]"
                      style={{
                        borderColor: "oklch(0.98 0.012 82 / 0.55)",
                        background: "oklch(0.14 0.002 0 / 0.25)",
                        color: "oklch(0.98 0.012 82)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {ctaSecondary.label}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
