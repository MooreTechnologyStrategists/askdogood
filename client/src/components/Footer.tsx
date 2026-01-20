import { Heart, Mail, ShoppingBag, BookOpen, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-primary/10 px-3 py-2 rounded-lg">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-medium">30-Day Money-Back Guarantee</span>
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
              <li className="text-sm text-muted-foreground">🦋 Thyroid Health</li>
              <li className="text-sm text-muted-foreground">💪 Chronic Illness Recovery</li>
              <li className="text-sm text-muted-foreground">🥗 Nutrition & Superfoods</li>
              <li className="text-sm text-muted-foreground">🧘‍♀️ Mental Wellness</li>
              <li className="text-sm text-muted-foreground">☁️ Tech & Azure Career</li>
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
