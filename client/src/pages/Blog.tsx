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
import {
  Search,
} from "lucide-react";

import { safeBlogPosts } from "@/content/blogData";
import { siteCopy, splitCopy } from "@/content/siteCopy";
import { blogImages } from "@/data/blogImages";
import PromoBanner from '../components/PromoBanner';
import RecommendedReads from '../components/RecommendedReads';

const BLOG_ICON_URL =
  "https://askdogoodassets.blob.core.windows.net/images/blog_icon.png";

// ✅ Local fallback asset (must exist at: client/public/assets/img/blog/_fallback/blog.webp)
const BLOG_FALLBACK = "/assets/img/blog/_fallback/blog.webp";

function getPostImage(post: any): string {
  // ✅ Check blogImages mapping first (by post.id or post.slug)
  const slug = post?.id || post?.slug;
  if (slug && blogImages?.[slug]) {
    return blogImages[slug];
  }
  
  // Then check post properties
  if (post?.image && post.image.trim()) return post.image;
  if (post?.imageUrl && post.imageUrl.trim()) return post.imageUrl;

  // Finally fallback to default
  return BLOG_FALLBACK;
}

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

  // ✅ One reusable, TS-safe fallback handler
  const handleImgError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = e.currentTarget;

    // prevent infinite loop if fallback missing too
    if (img.dataset.fallbackApplied === "true") return;

    img.dataset.fallbackApplied = "true";
    img.src = BLOG_FALLBACK;
  };

  // ConvertKit script removed - now using Beehiiv

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
              <div className="inline-flex items-center rounded-full border bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground">
                Ask DoGood Journal
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {siteCopy.blog.headline}
              </h1>

              <div className="max-w-xl space-y-4 text-lg text-muted-foreground leading-relaxed">
                {splitCopy(siteCopy.blog.content).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="text-sm font-medium text-primary/80">{siteCopy.cta}</p>

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
                  <Button className="shadow-sm hover:shadow-md transition-shadow">
                    Read the Journey
                  </Button>
                </Link>
                
                <Link href="/rss">
                  <Button variant="outline">
                    RSS Feed
                  </Button>
                </Link>

                <Link href="/guest-contributors">
                  <Button variant="outline">
                    Pitch a Guest Post
                  </Button>
                </Link>
              </div>

              {/* Tag chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {allTags.slice(0, 10).map((tag) => {
                  const active = tag === activeTag;
                  return (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                        active
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background hover:bg-secondary/50"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>

              <div className="text-sm text-muted-foreground">
                Start with a topic, then narrow the archive by tag.
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
                    decoding="async"
                    onError={handleImgError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  <div className="absolute -top-16 -right-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
                </div>

                <div className="mt-4 text-center text-xs text-muted-foreground">
                  A practical archive for health, healing, and personal structure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THYROID RESET TOOLKIT CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container max-w-4xl">
          <div id="thyroid-toolkit-signup"></div>
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
                  Featured Articles
                </h2>
                <p className="text-muted-foreground mt-1">
                  Editor-selected starting points across the archive.
                </p>
              </div>

              <div className="inline-flex items-center text-sm text-muted-foreground bg-primary/10 px-3 py-2 rounded-full">
                Curated selection
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featured.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                <Card
                  className="hover:shadow-lg hover:shadow-primary/10 transition-all hover:-translate-y-1 overflow-hidden cursor-pointer"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={getPostImage(post)}
                      alt={post.imageAlt ?? `${post.title} cover image`}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={handleImgError}
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="leading-tight">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3 leading-7">
                      {post.excerpt ??
                        "A grounded, real-life breakdown with tools you can apply."}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {(post.tags ?? []).slice(0, 3).map((t) => (
                        <Badge key={t} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>

                      <Button className="w-full border border-border/70 bg-background/60">
                        Read article
                      </Button>
                  </CardContent>
                </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL POSTS */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                All posts
              </h2>
              <p className="text-muted-foreground mt-1">
                Browse by topic, pillar, or pure curiosity.
              </p>
            </div>

            <div className="text-sm text-muted-foreground">
              {filtered.length} post{filtered.length === 1 ? "" : "s"}
              {activeTag !== "All" ? ` • Tag: ${activeTag}` : ""}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
              <Card
                className="hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={getPostImage(post)}
                    alt={post.imageAlt || post.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={handleImgError}
                  />
                </div>

                <CardHeader>
                  <CardTitle className="leading-tight">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-4 leading-7">
                    {post.excerpt ??
                      "Practical, honest guidance — built for real people with real lives."}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {(post.tags ?? []).slice(0, 4).map((t) => (
                      <Badge key={t} variant="secondary">
                        {t}
                      </Badge>
                    ))}
                  </div>

                    <Button className="w-full shadow-sm hover:shadow-md transition-shadow">
                      Read article
                    </Button>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-2xl border bg-secondary/20 p-8 text-center">
              <div className="text-lg font-semibold">No matches found.</div>
              <div className="text-muted-foreground mt-2">
                Try a different keyword or switch tags.
              </div>
              <div className="mt-4 flex justify-center gap-3">
                <Button
                  onClick={() => setQuery("")}
                  className="border border-border/70 bg-background/60"
                >
                  Clear search
                </Button>
                <Button
                  onClick={() => setActiveTag("All")}
                  className="border border-border/70 bg-background/60"
                >
                  Reset tags
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      <PromoBanner />
      <RecommendedReads count={3} />
    </main>
  );
}
