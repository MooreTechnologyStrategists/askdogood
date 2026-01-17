// client/src/components/Header.tsx
import * as React from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type SimpleLink = { type: "link"; path: string; label: string };
type GroupLink = {
  type: "group";
  label: string;
  items: { path: string; label: string }[];
};
type NavItem = SimpleLink | GroupLink;

type HeaderProps = {
  isAuthenticated?: boolean;
};

function isActivePath(currentPath: string, itemPath: string) {
  // Exact match for root; prefix match for others
  if (itemPath === "/") return currentPath === "/";
  return currentPath === itemPath || currentPath.startsWith(itemPath + "/");
}

export default function Header({ isAuthenticated = false }: HeaderProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navItems = React.useMemo<NavItem[]>(
    () => [
      { type: "link", path: "/", label: "Home" },
      { type: "link", path: "/about", label: "About" },

      // Blog hub (Garden is under Blog)
      {
        type: "group",
        label: "Blog",
        items: [
          { path: "/blog", label: "All Posts" },
          // If you later move garden under blog routes, keep this as /blog/garden
          // If your garden page is currently /garden, change this path to "/garden"
          { path: "/blog/garden", label: "Garden" },
          { path: "/journey", label: "My Journey" },
          { path: "/interests", label: "Interests" },
        ],
      },

      { type: "link", path: "/resources", label: "Resources" },

      // Merch becomes your single store page (Shop merged into Merch)
      { type: "link", path: "/merch", label: "Merch" },

      ...(isAuthenticated ? [{ type: "link", path: "/dashboard", label: "Dashboard" } as const] : []),

      { type: "link", path: "/contact", label: "Contact" },
    ],
    [isAuthenticated]
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <a className="inline-flex items-center gap-2 font-semibold tracking-tight">
              <span className="text-lg">AskDoGood</span>
            </a>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">
              {navItems.map((item) => {
                if (item.type === "link") {
                  const active = isActivePath(location, item.path);
                  return (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuLink asChild>
                        <Link href={item.path}>
                          <a
                            className={[
                              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                              "hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                              active ? "bg-accent text-accent-foreground" : "text-foreground/80",
                            ].join(" ")}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.label}
                          </a>
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }

                // Group dropdown
                const anyActive = item.items.some((i) => isActivePath(location, i.path));
                return (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      className={[
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        anyActive ? "bg-accent text-accent-foreground" : "text-foreground/80",
                      ].join(" ")}
                      aria-current={anyActive ? "page" : undefined}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-2">
                      <ul className="grid w-[240px] gap-1">
                        {item.items.map((sub) => {
                          const active = isActivePath(location, sub.path);
                          return (
                            <li key={sub.path}>
                              <NavigationMenuLink asChild>
                                <Link href={sub.path}>
                                  <a
                                    className={[
                                      "block rounded-md px-3 py-2 text-sm transition-colors",
                                      "hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                                      active ? "bg-accent text-accent-foreground" : "text-foreground/80",
                                    ].join(" ")}
                                    aria-current={active ? "page" : undefined}
                                  >
                                    {sub.label}
                                  </a>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] sm:w-[360px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <nav aria-label="Mobile Primary" className="mt-6 space-y-2">
                {navItems.map((item) => {
                  if (item.type === "link") {
                    const active = isActivePath(location, item.path);
                    return (
                      <Link key={item.path} href={item.path}>
                        <a
                          className={[
                            "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                            "hover:bg-accent hover:text-accent-foreground",
                            active ? "bg-accent text-accent-foreground" : "text-foreground/80",
                          ].join(" ")}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </a>
                      </Link>
                    );
                  }

                  // Group section in mobile
                  const anyActive = item.items.some((i) => isActivePath(location, i.path));
                  return (
                    <div key={item.label} className="rounded-lg border p-2">
                      <div
                        className={[
                          "px-1 pb-1 text-xs font-semibold uppercase tracking-wide",
                          anyActive ? "text-foreground" : "text-muted-foreground",
                        ].join(" ")}
                      >
                        {item.label}
                      </div>
                      <div className="space-y-1">
                        {item.items.map((sub) => {
                          const active = isActivePath(location, sub.path);
                          return (
                            <Link key={sub.path} href={sub.path}>
                              <a
                                className={[
                                  "block rounded-md px-3 py-2 text-sm transition-colors",
                                  "hover:bg-accent hover:text-accent-foreground",
                                  active ? "bg-accent text-accent-foreground" : "text-foreground/80",
                                ].join(" ")}
                                aria-current={active ? "page" : undefined}
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </a>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
