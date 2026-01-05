import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";

interface ConvertKitSubscribeProps {
  variant?: "inline" | "card" | "minimal";
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  formId?: string; // ConvertKit form ID
}

export default function ConvertKitSubscribe({
  variant = "card",
  title = "Join the AskDoGood Newsletter",
  description = "Get weekly insights on healing, structure, and real-life growth delivered to your inbox.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  className = "",
  formId = "8918501", // Default to your ConvertKit form ID
}: ConvertKitSubscribeProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
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

    try {
      // ConvertKit public form submission endpoint
      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          first_name: firstName || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok && data.subscription) {
        setStatus("success");
        setMessage("🎉 Welcome! Check your email to confirm your subscription.");
        setEmail("");
        setFirstName("");

        // Track with Google Analytics
        if (window.gtag) {
          window.gtag("event", "newsletter_subscribe", {
            event_category: "engagement",
            event_label: "convertkit_newsletter",
          });
        }

        // Reset after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        throw new Error(data.message || "Subscription failed");
      }

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
            <form onSubmit={handleSubmit} className="space-y-2">
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
                >
                  {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : buttonText}
                </Button>
              </div>
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
