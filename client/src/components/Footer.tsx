import {
  BookOpen,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Rss,
  Shield,
  Youtube,
} from "lucide-react";
import { Link } from "wouter";
import { trackSocialClick } from "@/lib/analytics";

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    url: "https://instagram.com/the_real_dogood",
    color: "hover:text-pink-600",
  },
  {
    name: "TikTok",
    icon: (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-semibold">
        TT
      </span>
    ),
    url: "https://tiktok.com/@askdogood",
    color: "hover:text-gray-900",
  },
  {
    name: "Pinterest",
    icon: (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-semibold">
        P
      </span>
    ),
    url: "https://pinterest.com/askdogood",
    color: "hover:text-red-600",
  },
  {
    name: "YouTube",
    icon: <Youtube className="h-5 w-5" />,
    url: "https://youtube.com/@roseecm",
    color: "hover:text-red-600",
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-5 w-5" />,
    url: "https://facebook.com/askdogood",
    color: "hover:text-blue-600",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    url: "https://linkedin.com/in/askdogood",
    color: "hover:text-blue-700",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-secondary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
              Ask Do Good
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Evidence-based wellness, practical healing tools, and stronger systems for real life.
            </p>
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-medium">30-Day Money-Back Guarantee</span>
            </div>
            <div className="mt-4">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Connect
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors ${social.color}`}
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

          <div>
            <h4 className="mb-4 text-sm font-semibold">Start here</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/journey" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Founder journey
                </Link>
              </li>
              <li>
                <Link href="/shop" className="block cursor-pointer text-sm font-medium text-primary transition-colors hover:text-primary/80">
                  Shop courses and products
                </Link>
              </li>
              <li>
                <Link href="/clinical-recipes" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Clinical Food RX
                </Link>
              </li>
              <li>
                <Link href="/resources" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Free resources
                </Link>
              </li>
              <li>
                <Link href="/keep-moving" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Digital library and flipbooks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/herbs" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  A-Z herb dictionary
                </Link>
              </li>
              <li>
                <Link href="/work-with-askdogood" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Work with AskDoGood
                </Link>
              </li>
              <li>
                <Link href="/about" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  About Rosee
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <BookOpen className="h-3 w-3" />
                  Blog and articles
                </Link>
              </li>
              <li>
                <Link href="/keep-moving" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  AskDoGood digital library
                </Link>
              </li>
              <li>
                <Link href="/rss" className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Rss className="h-3 w-3" />
                  RSS feed
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-3 w-3" />
                  Contact and coaching
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Topics</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/course/thyroid-health-mastery" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Thyroid health
                </Link>
              </li>
              <li>
                <Link href="/journey" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Chronic illness recovery
                </Link>
              </li>
              <li>
                <Link href="/clinical-recipes" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Nutrition and superfoods
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Mental wellness
                </Link>
              </li>
              <li>
                <a href="https://thedopecloudteacher.org" target="_blank" rel="noopener noreferrer" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Tech and Azure career
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© {currentYear} Ask Do Good. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">Built with clarity and transparency.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
