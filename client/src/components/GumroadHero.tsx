import { useState } from "react";
import { ArrowRight, ShoppingBag, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GUMROAD_URLS } from "@/config/gumroad";
import { catalogById } from "@/data/catalog";

// Terracotta accent color used for price badges and CTA emphasis
const TERRACOTTA = "#c0522e";

// How long (ms) the success message shows before resetting to idle
const SUCCESS_MESSAGE_DURATION_MS = 5000;

interface ProductCardProps {
  id: string;
  badge?: string;
}

function ProductCard({ id, badge }: ProductCardProps) {
  const product = catalogById[id];
  if (!product) return null;

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-[#e8d9c8] bg-white shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
      {/* Product image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#f5ede2]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/images/products/gumroad_cover.png";
          }}
        />
        {badge && (
          <span
            className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow"
            style={{ backgroundColor: TERRACOTTA }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7a9e7e] mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-serif font-bold text-[#2c2c2c] leading-snug">
            {product.name}
          </h3>
        </div>
        <p className="text-sm text-[#5a5a5a] leading-relaxed flex-1">
          {product.shortSummary}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <span
            className="text-2xl font-bold font-serif"
            style={{ color: TERRACOTTA }}
          >
            {product.priceLabel}
          </span>
          {product.checkoutUrl ? (
            <a
              href={product.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: TERRACOTTA }}
            >
              Get it
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// Inline Beehiiv newsletter sign-up strip
function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      // Persist lead to internal API first
      const leadRes = await fetch("/api/newsletter-signups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "gumroad-hero", magnetType: "none" }),
      });
      const leadBody = await leadRes.json().catch(() => null);
      if (!leadRes.ok || !leadBody?.success) {
        throw new Error(
          `Newsletter signup failed (HTTP ${leadRes.status}): ${leadBody?.message ?? "unknown error"}`
        );
      }

      // Submit to Beehiiv (no-cors — response unreadable, assume success)
      const form = new FormData();
      form.append("email", email);
      form.append("ref", "");
      form.append("bhba", "");
      form.append("visit_token", "");
      form.append("premium_offer_id", "");
      form.append("fallback_path", "/");
      form.append("subscribe_success_message", "Subscribed!");
      form.append("subscribe_error_message", "Oops, something went wrong.");
      await fetch("https://rosees-newsletter-9d5fac.beehiiv.com/create", {
        method: "POST",
        body: form,
        mode: "no-cors",
      });

      setStatus("success");
      setMessage("🎉 Welcome! Check your inbox to confirm your subscription.");
      setEmail("");
      setTimeout(() => { setStatus("idle"); setMessage(""); }, SUCCESS_MESSAGE_DURATION_MS);
    } catch (err) {
      console.error("GumroadHero newsletter signup error:", err);
      setStatus("error");
      setMessage("Signup failed. Please try again or email askdogood@gmail.com.");
    }
  };

  return (
    <div className="bg-[#1a2e1a] py-10 px-6 text-white">
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7aab7a]">
          Free weekly guidance
        </p>
        <h2 className="text-2xl md:text-3xl font-serif font-bold">
          Join the AskDoGood Newsletter
        </h2>
        <p className="text-sm text-white/70 max-w-xl mx-auto">
          Practical thyroid tips, healing recipes, and real-life wellness structure — delivered every week.
          No spam. Unsubscribe anytime.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#7aab7a]"
          />
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="rounded-full font-semibold px-6 text-white"
            style={{ backgroundColor: TERRACOTTA }}
          >
            {status === "loading" ? "..." : status === "success" ? "✓ Subscribed!" : "Subscribe"}
          </Button>
        </form>
        {message && (
          <div
            className={`flex items-center justify-center gap-2 text-sm ${
              status === "error" ? "text-red-400" : "text-[#7aab7a]"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * GumroadHero — warm editorial product showcase designed to convert above the fold.
 *
 * Design language:
 *  • Background: warm cream (#fdf6ee)
 *  • Accents: terracotta (#c0522e) — price tags, CTAs, badges
 *  • Typography: Playfair Display (font-serif) for headings
 *  • Sage green (#7a9e7e / primary) for category labels and newsletter highlights
 *
 * Place this component directly after the site-level <Hero> on the home page so
 * the three product cards appear above the fold and are immediately actionable.
 */
export default function GumroadHero() {
  return (
    <section aria-label="Featured products" className="bg-[#fdf6ee]">
      {/* ── Header ── */}
      <div className="container pt-14 pb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7a9e7e] mb-3">
          Tools for real healing
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2c2c2c] leading-tight max-w-3xl mx-auto">
          Start your wellness journey today
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#5a5a5a] max-w-2xl mx-auto leading-relaxed">
          Practical guides, trackers, and courses built from lived experience — not empty theory.
          Immediate digital downloads from our Gumroad store.
        </p>
      </div>

      {/* ── Three product cards ── */}
      <div className="container pb-10 pt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <ProductCard id="thyroid-health-mastery" badge="Best seller" />
          <ProductCard id="21-day-plant-based-reset" badge="Popular" />
          <ProductCard id="thyroid-symptom-tracker" badge="Quick win" />
        </div>

        {/* "Browse all" link */}
        <div className="mt-8 text-center">
          <a
            href={GUMROAD_URLS.storefront}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3 text-sm font-semibold transition-colors hover:bg-[#c0522e] hover:text-white hover:border-[#c0522e]"
            style={{ borderColor: TERRACOTTA, color: TERRACOTTA }}
          >
            <ShoppingBag className="h-4 w-4" />
            Browse all products on Gumroad
          </a>
        </div>
      </div>

      {/* ── Beehiiv newsletter strip ── */}
      <NewsletterStrip />
    </section>
  );
}
