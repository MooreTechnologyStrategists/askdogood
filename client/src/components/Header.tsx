import { Link, useLocation } from "wouter";
import { useEffect, useState, type ComponentPropsWithoutRef } from "react";
import { Menu, X } from "lucide-react";
const nav = [
  ["Find Your Next Step", "/#find-your-next-step"],
  ["Wellness Guides", "/#pathways"],
  ["Our Story", "/about"],
  ["Community Workshops", "/work-with-askdogood"],
  ["Shop", "/shop"],
];
function NavLink({
  href,
  children,
  ...props
}: ComponentPropsWithoutRef<"a"> & { href: string }) {
  if (href.includes("#"))
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
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
            <NavLink
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={location === href ? "page" : undefined}
            >
              {name}
            </NavLink>
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
            <NavLink
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={location === href ? "page" : undefined}
            >
              {name}
            </NavLink>
          ))}
          <Link href="/contact">Contact</Link>
          <Link href="/login">Member sign in</Link>
        </nav>
      )}
    </header>
  );
}
