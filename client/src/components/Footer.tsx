import {
  BookOpen,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Rss,
  Shield,
  Youtube,
  Leaf,
} from "lucide-react";
import { Link } from "wouter";
import { trackSocialClick } from "@/lib/analytics";

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram className="h-4 w-4" />,
    url: "https://instagram.com/the_real_dogood",
    color: "hover:text-pink-500",
  },
  {
    name: "TikTok",
    icon: (
      <span className="inline-flex h-4 w-4 items-center justify-center text-[9px] font-bold">
        TT
      </span>
    ),
    url: "https://tiktok.com/@askdogood",
    color: "hover:text-foreground",
  },
  {
    name: "Pinterest",
    icon: (
      <span className="inline-flex h-4 w-4 items-center justify-center text-[9px] font-bold">
        P
      </span>
    ),
    url: "https://pinterest.com/askdogood",
    color: "hover:text-red-500",
  },
  {
    name: "YouTube",
    icon: <Youtube className="h-4 w-4" />,
    url: "https://youtube.com/@roseecm",
    color: "hover:text-red-500",
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-4 w-4" />,
    url: "https://facebook.com/askdogood",
    color: "hover:text-blue-500",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-4 w-4" />,
    url: "https://linkedin.com/in/askdogood",
    color: "hover:text-blue-600",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t"
      style={{
        borderColor: "oklch(0.90 0.018 80)",
        background: "linear-gradient(160deg, oklch(0.97 0.012 82) 0%, oklch(0.95 0.020 80) 100%)",
      }}
    >
      <div className="container py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div>
            {/* Logo mark */}
            <div className="mb-4 flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="16" cy="16" r="15.5" fill="oklch(0.98 0.012 82)" stroke="oklch(0.90 0.018 80)" strokeWidth="1" />
                <path d="M16 6 C10 6, 7 10, 7 16 C7 20.5, 9.5 24, 13 25.5 C13 22, 14 18, 16 15 C18 18, 19 22, 19 25.5 C22.5 24, 25 20.5, 25 16 C25 10, 22 6, 16 6 Z" fill="oklch(0.33 0.13 138)" opacity="0.92" />
                <circle cx="22" cy="10" r="3.5" fill="oklch(0.57 0.15 45)" />
                <line x1="16" y1="25.5" x2="16" y2="28" stroke="oklch(0.33 0.13 138)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.20em]" style={{ color: "oklch(0.57 0.15 45)" }}>Ask</span>
                <span className="text-[0.95rem] font-bold" style={{ fontFamily: "var(--font-serif)", color: "oklch(0.33 0.13 138)", lineHeight: 1 }}>DoGood</span>
              </div>
            </div>

            <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
              Evidence-based wellness, practical healing tools, and stronger systems for real life — rooted in lived experience.
            </p>

            {/* Trust badge */}
            <div className="mb-5 flex items-center gap-2 rounded-xl px-3 py-2 text-xs"
              style={{ background: "oklch(0.33 0.13 138 / 0.08)", color: "oklch(0.33 0.13 138)" }}>
              <Shield className="h-4 w-4 shrink-0" style={{ color: "oklch(0.33 0.13 138)" }} />
              <span className="font-semibold">30-Day Money-Back Guarantee</span>
            </div>

            {/* Social links */}
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Connect
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors duration-150 ${social.color}`}
                    aria-label={social.name}
                    title={social.name}
                    onClick={() => trackSocialClick(social.name.toLowerCase(), "footer")}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Start here */}
          <div>
            <h4 className="mb-4 text-sm font-semibold flex items-center gap-1.5" style={{ color: "oklch(0.33 0.13 138)" }}>
              <Leaf className="h-3.5 w-3.5" />
              Start here
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/journey", label: "Founder journey" },
                { href: "/shop", label: "Shop courses & products", highlight: true },
                { href: "/clinical-recipes", label: "Clinical Food RX" },
                { href: "/resources", label: "Free resources" },
                { href: "/keep-moving", label: "Digital library & flipbooks" },
              ].map(({ href, label, highlight }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block cursor-pointer text-sm transition-colors hover:text-primary ${
                      highlight ? "font-semibold text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-semibold" style={{ color: "oklch(0.33 0.13 138)" }}>Explore</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/herbs" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  A–Z herb dictionary
                </Link>
              </li>
              <li>
                <Link href="/work-with-askdogood" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Work with AskDoGood
                </Link>
              </li>
              <li>
                <Link href="/about" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  About RoSeé
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <BookOpen className="h-3 w-3" />
                  Blog & articles
                </Link>
              </li>
              <li>
                <Link href="/rss" className="flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Rss className="h-3 w-3" />
                  RSS feed
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-3 w-3" />
                  Contact & coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="mb-4 text-sm font-semibold" style={{ color: "oklch(0.33 0.13 138)" }}>Topics</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/course/thyroid-health-mastery", label: "Thyroid health" },
                { href: "/journey", label: "Chronic illness recovery" },
                { href: "/clinical-recipes", label: "Nutrition & superfoods" },
                { href: "/blog", label: "Mental wellness" },
                { href: "/guest-contributors", label: "Guest contributors" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://thedopecloudteacher.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Tech & Azure career ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 border-t pt-8"
          style={{ borderColor: "oklch(0.90 0.018 80)" }}
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ask Do Good. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with clarity, transparency, and lived experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
