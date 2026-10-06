import { Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
interface BeehiivSubscribeProps {
  variant?: "inline" | "card" | "minimal";
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  source?: string;
  magnetType?: string;
}
export default function BeehiivSubscribe({
  variant = "card",
  title = "Stay rooted. Stay informed. Keep moving.",
  description = "Real talk, useful resources, pockets of peace, and ways to take your next good step. Join the AskDoGood newsletter free.",
  buttonText = "Subscribe free",
  className = "",
  source = "generic",
  magnetType,
}: BeehiivSubscribeProps) {
  return (
    <div className={`adg-subscribe adg-subscribe-${variant} ${className}`}>
      {variant !== "minimal" && (
        <>
          <Mail aria-hidden="true" className="adg-subscribe-icon" />
          <h3>{title}</h3>
          <p>{description}</p>
        </>
      )}
      <a
        className="adg-button"
        href="https://rosees-newsletter-9d5fac.beehiiv.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("newsletter_signup_opened", {
            source,
            magnet_type: magnetType || "none",
          })
        }
      >
        {buttonText} ↗
      </a>
      <p className="adg-small">
        Opens our email signup in a new tab, so you can keep your place here.
        Enter your email there and check your inbox for any confirmation request.
        You can unsubscribe anytime.
      </p>
    </div>
  );
}
