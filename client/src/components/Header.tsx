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

      // Blog hub (Garden is shown under Blog, but route is /garden)
      {
        type: "group",
        label: "Blog",
        items: [
          { path: "/blog", label: "All Posts" },
          { path: "/garden", label: "Garden" }, // ✅ matches your Switch
          { path: "/journey", label: "My Journey" },
          { path: "/interests", label: "Interests" },
        ],
      },

      { type: "link", path: "/resources", label: "Resources" },

      // Merch is the single store hub (Shop removed)
      { type: "link", path: "/merch", label: "Merch" },

      ...(isAuthenticated
        ? [{ type: "link", path: "/dashboard", label: "Dashboard" } as const]
        : []),

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
                              "hover:bg-accent hover:text-accent-foreground focu
