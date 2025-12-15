import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Search, Bookmark, Flame, BookOpen } from "lucide-react";

import { safeBlogPosts, getPostImage } from "@/content/blogData";

const BLOG_ICON_URL =
  "https://askdogoodassets.blob.core.windows.net/images/blog_icon.png";

function normalize(str: string) {
  return (str || "").toLowerCase().trim();
}

function uniqueStrings(items: string[]) {
  return Array.from(new Set(items.filter(Boolean))).sort((a, b) =>
    a.localeCompare(b)
  );
}

export default function Blog() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");

  // ✅ Single source of truth (sanitized)
  const posts = safeBlogPosts;

  const allTags = useMemo(() => {
    const tags = posts.flatMap((p) => p.tags ?? []);
    return ["All", ...uniqueStrings(tags)];
  }, [posts]);

  const featured = useMemo(() => {
    return posts.filter((p) => !!p.featured).slice(0, 3);
  }, [posts]);

  const filtered = useMemo(() => {
    const q = normalize(query);

    return posts
      .filter((p) => {
        const matchesTag =
          activeTag === "All" || (p.tags ?? []).includes(activeTag);

        const matchesQuery =
          !q ||
          normalize(p.title).includes(q) ||
          normalize(p.excerpt ?? "").includes(q) ||
          (p.tags ?? []).some((t) => normalize(t).includes(q));

        return matchesTag && matchesQuery;
      })
      .sort((a, b) => {
        // Newer first; invalid/missing dates fall to bottom without crashing
        const ad = a.date ? Date.parse(a.date) : 0;
        const bd = b.date ? Date.parse(b.date) : 0;
        return bd - ad;
      });
  }, [posts, query, activeTag]);

  return (
    <main className="min-h-screen bg-background">
      {/* HERO / INTRO */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="container relative py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                The Ask DoGood Blog
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Real healing. Real structure.
                <span className="block text-primary">Real-life growth.</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                This isn’t “just post and pray.” It’s a library of wellness,
                mindset, and recovery guidance — written with compassion, strategy,
                and receipts. Pick a pillar, search a topic, and start where you are.
              </p>

              {/* Search */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search posts, topics, tags…"
                    className="pl-9"
                  />
                </div>

                <Link href="/journey">
                  <Button className="gap-2 shadow-sm hover:shadow-md transition-shadow">
                    Start With My Journey <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Tag / pillar chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {allTags.slice(0, 10).map((tag) => {
                  const active = tag === activeTag;
                  return (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`rounded-full border px-3 py-1 text-xs transition-colors
                        ${
                          active
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background hover:bg-secondary/50"
                        }
                      `}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>

              <div className="text-sm text-muted-foreground">
                Tip: Use the search box when you’re in “I don’t even know what I need” mode.
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <div className="relative w-full max-w-xl mx-auto">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border bg-secondary/20 shadow-sm">
                  <img
                    src={BLOG_ICON_URL}
                    alt="Ask DoGood Blog icon"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />

                  {/* elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  <div className="absolute -top-16 -right-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
                </div>

                {/* small caption row */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Bookmark className="h-4 w-4 text-primary" />
                  Start with what applies today — save the rest for later.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured.length > 0 && (
        <section className="py-10 md:py-12">
          <div className="container">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Featured reads
                </h2>
                <p className="text-muted-foreground mt-1">
                  Strong starters if you’re overwhelmed.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Flame className="h-4 w-4 text-primary" />
                Curated
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featured.map((post) => (
                <Card
                  key={post.slug}
                  className="hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={getPostImage(post)}
                      alt={post.imageAlt ?? `${post.title} cover image`}
                      className="h-full w-full object-cover tran
