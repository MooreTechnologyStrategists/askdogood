import {
  BookOpen,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Rss,
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
  const officialLogo = "/images/branding/the-dope-cloud-teacher-logo.png";

  return (
    <footer className="w-full border-t border-border/50 bg-[linear-gradient(180deg,rgba(245,251,247,0.92),rgba(255,255,255,1))]">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={officialLogo}
                alt="AskDoGood official logo"
                className="h-10 w-auto rounded-md object-contain"
                loading="lazy"
                width="180"
                height="40"
              />
              <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
                AskDoGood
              </h3>
            </div>
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              Practical, faith-rooted, culturally grounded wellness education for real life.
            </p>
            <div>
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
                    className={`rounded-full border border-border/60 p-2 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 ${social.color}`}
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/85">Start here</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/start" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Where to begin
                </Link>
              </li>
              <li>
                <Link href="/resources/library" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Resource library
                </Link>
              </li>
              <li>
                <Link href="/clinical-recipes" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Recipes and food education
                </Link>
              </li>
              <li>
                <Link href="/work-with-askdogood" className="block cursor-pointer text-sm font-medium text-primary transition-colors hover:text-primary/80">
                  Partner with AskDoGood
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/85">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/journey" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  Founder story
                </Link>
              </li>
              <li>
                <Link href="/about" className="block cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary">
                  About AskDoGood
                </Link>
              </li>
              <li>
                <Link href="/blog" className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <BookOpen className="h-3 w-3" />
                  Blog and articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-3 w-3" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/rss" className="flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Rss className="h-3 w-3" />
                  RSS feed
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© {currentYear} AskDoGood. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">
              AskDoGood is a wellness education platform, not a healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
