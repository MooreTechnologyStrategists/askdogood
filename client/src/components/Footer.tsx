import { Heart } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-secondary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Ask Do Good
            </h3>
            <p className="text-sm text-muted-foreground">
              Sharing my journey of health, recovery, and authentic living. 
              Real stories, real struggles, real growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    About Me
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/journey">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    My Journey
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Topics</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Health & Wellness</li>
              <li className="text-sm text-muted-foreground">Recovery Journey</li>
              <li className="text-sm text-muted-foreground">Fitness & Nutrition</li>
              <li className="text-sm text-muted-foreground">Mental Health</li>
              <li className="text-sm text-muted-foreground">Life Transparency</li>
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
