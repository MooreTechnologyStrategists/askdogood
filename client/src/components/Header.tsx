import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const nav = [
  ["Start here", "/resources/start"],
  ["Pockets of Peace", "/pockets-of-peace"],
  ["Offers & shop", "/shop"],
  ["Merch", "/merch"],
  ["Free resources", "/resources/library"],
  ["Workshops", "/work-with-askdogood"],
  ["Our story", "/about"],
];
export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [location]);
  return (
    <header className="adg-header">
      <div className="container adg-header-row">
        <Link href="/" aria-label="AskDoGood home">
          <img
            src="/images/branding/askdogood-logo.png"
            alt="AskDoGood official logo"
            className="adg-logo"
          />
        </Link>
        <nav aria-label="Main navigation" className="adg-desktop-nav">
          {nav.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={location === href ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="adg-header-contact">
          Let’s talk
        </Link>
        <button
          className="adg-menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-site-menu"
          aria-label="Mobile navigation"
          className="adg-mobile-nav container"
        >
          {nav.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={location === href ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
          <Link href="/login">Member sign in</Link>
        </nav>
      )}
    </header>
  );
}
