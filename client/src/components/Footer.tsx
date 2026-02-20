import { Heart, Mail, ShoppingBag, BookOpen, Shield, Rss, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { trackSocialClick } from "@/lib/analytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/askdogood", color: "hover:text-pink-600" },
    { name: "TikTok", icon: "🎵", url: "https://tiktok.com/@askdogood", color: "hover:text-gray-900" },
    { name: "Pinterest", icon: "📌", url: "https://pinterest.com/askdogood", color: "hover:text-red-600" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@askdogood", color: "hover:text-red-600" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/askdogood", color: "hover:text-blue-600" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/rosee-murphy", color: "hover:text-blue-700" },
  ];

  const handleSocialClick = (platform: string) => {
    trackSocialClick(platform.toLowerCase(), 'footer');
  };

  return (
    <footer className="w-full border-t border-border/40 bg-secondary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Ask Do Good
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Healing. Structure. Real-life growth for thyroid warriors and wellness seekers.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-primary/10 px-3 py-2 rounded-lg mb-4">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-medium">30-Day Money-Back Guarantee</span>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-4">
              <h4 className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Connect With Me</h4>
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors ${social.color}`}
                    aria-label={social.name}
                    title={social.name}
                    onClick={() => handleSocialClick(social.name)}
                  >
                    {typeof social.icon === 'string' ? (
                      <span className="text-xl">{social.icon}</span>
                    ) : (
                      <social.icon className="h-5 w-5" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Get Started</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/journey" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  Start Your Journey
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-primary hover:text-primary/80 font-medium transition-colors cursor-pointer flex items-center gap-1">
                  <ShoppingBag className="h-3 w-3" />
                  Shop Courses & Products
                </Link>
              </li>
              <li>
                <Link href="/clinical-recipes" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  Clinical Food RX
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  Free Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer block">
                  About RoSeé
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/rss" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                  <Rss className="h-3 w-3" />
                  RSS Feed
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  Contact & Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics & Expertise */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Wellness Topics</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/wellness/thyroid-health" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer block">🦋 Thyroid Health</Link>
              </li>
              <li>
                <Link href="/wellness/chronic-illness" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer block">💪 Chronic Illness Recovery</Link>
              </li>
              <li>
                <Link href="/wellness/nutrition" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer block">🥗 Nutrition & Superfoods</Link>
              </li>
              <li>
                <Link href="/wellness/mental" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer block">🧘‍♀️ Mental Wellness</Link>
              </li>
              <li>
                <a href="https://thedopecloudteacher.org" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer block">☁️ Tech & Azure Career</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ask Do Good. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-primary fill-primary" /> and transparency
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
