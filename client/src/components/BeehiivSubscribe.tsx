import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { trackNewsletterSignup, trackNewsletterSignupSuccess, trackLeadMagnetDownload } from "@/lib/analytics";

interface BeehiivSubscribeProps {
  variant?: "inline" | "card" | "minimal";
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  source?: string; // Track where the signup came from
  magnetType?: string; // Track which lead magnet triggered signup
}

export default function BeehiivSubscribe({
  variant = "card",
  title = "Join the AskDoGood Newsletter",
  description = "Get weekly insights on healing, structure, and real-life growth delivered to your inbox.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  className = "",
  source = "generic",
  magnetType,
}: BeehiivSubscribeProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // Track the signup attempt
    trackNewsletterSignup(source, magnetType);

    try {
      // Submit to Beehiiv
      const formData = new FormData();
      formData.append("email", email);
      formData.append("ref", "");
      formData.append("bhba", "");
      formData.append("visit_token", "");
      formData.append("premium_offer_id", "");
      formData.append("fallback_path", "/");
      formData.append("subscribe_success_message", "Subscribed!");
      formData.append("subscribe_error_message", "Oops, something went wrong.");

      const response = await fetch("https://rosees-newsletter-9d5fac.beehiiv.com/create", {
        method: "POST",
        body: formData,
        mode: "no-cors", // Beehiiv doesn't support CORS, so we use no-cors
      });

      // With no-cors, we can't read the response, so assume success
      setStatus("success");
      setMessage("🎉 Welcome! Check your email to confirm your subscription.");
      setEmail("");

      // Track successful signup
      trackNewsletterSignupSuccess(source, magnetType);

      // If this was for a lead magnet, track the download
      if (magnetType) {
        trackLeadMagnetDownload(magnetType, source);
      }

      // Track with Google Analytics (legacy)
      if (window.gtag) {
        window.gtag("event", "newsletter_subscribe", {
          event_category: "engagement",
          event_label: "beehiiv_newsletter",
          source: source,
          magnet_type: magnetType || 'none',
        });
      }

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);

    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      console.error("Newsletter subscription error:", error);
    }
  };

  // Minimal variant (for footer, sidebar)
  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className={`space-y-2 ${className}`}>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            size="sm"
          >
            {status === "loading" ? "..." : status === "success" ? "✓" : buttonText}
          </Button>
        </div>
        {message && (
          <p className={`text-xs ${status === "error" ? "text-destructive" : "text-primary"}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  // Inline variant (for within content)
  if (variant === "inline") {
    return (
      <div className={`rounded-lg border bg-secondary/30 p-6 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : buttonText}
              </Button>
            </form>
            {message && (
              <div className={`flex items-center gap-2 text-sm ${status === "error" ? "text-destructive" : "text-primary"}`}>
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
      </div>
    );
  }

  // Card variant (default - for dedicated sections)
  return (
    <div className={`rounded-2xl border bg-gradient-to-br from-primary/5 to-secondary/30 p-8 text-center ${className}`}>
      <div className="mx-auto max-w-md space-y-4">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            className="text-center"
          />
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full"
            size="lg"
          >
            {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed! ✓" : buttonText}
          </Button>
        </form>
        {message && (
          <div className={`flex items-center justify-center gap-2 text-sm ${status === "error" ? "text-destructive" : "text-primary"}`}>
            {status === "success" ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            {message}
          </div>
        )}
        <p className="text-xs text-muted-foreground">
          No spam. Unsubscribe anytime. Your email is safe with us.
        </p>
      </div>
    </div>
  );
}
