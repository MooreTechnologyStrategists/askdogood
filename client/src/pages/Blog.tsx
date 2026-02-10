import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
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
  ArrowRight,
  Sparkles,
  Search,
  Bookmark,
  Flame,
  BookOpen,
  Rss,
} from "lucide-react";

import { safeBlogPosts } from "@/content/blogData";
import { blogImages } from "@/data/blogImages";

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
    <>
      <SEO
        title="Blog - Wellness & Thyroid Health Insights"
        description="Read the latest articles on thyroid health, holistic wellness, plant-based living, and personal growth. Real stories and expert guidance from RoSeé Murphy."
        keywords={['wellness blog', 'thyroid health articles', 'holistic living', 'plant-based recipes', 'health tips', 'personal growth']}
        url="/blog"
        image="https://askdogoodassets.blob.core.windows.net/images/blog_icon.png"
      />
    <main className="min-h-screen bg-background">
      {/* HERO / INTRO */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

        <div className="container relative py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="space-y-6 relative">
              {/* Floating decorative emojis */}
              <div className="absolute -top-10 -left-6 text-4xl animate-float">📖</div>
              <div className="absolute top-20 -right-8 text-3xl animate-float-slow">✨</div>
              
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground shadow-cartoon">
                <Sparkles className="h-4 w-4 text-primary" />
                The Ask DoGood Blog 🌟
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Real healing. Real structure.
                <span className="block text-primary">Real-life growth.</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                This isn't "just post and pray." It's a library of wellness,
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
                
                <Link href="/rss">
                  <Button variant="outline" className="gap-2">
                    <Rss className="h-4 w-4" />
                    RSS Feed
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
                Tip: Use the search box when you're in "I don't even know what I need" mode.
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

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Bookmark className="h-4 w-4 text-primary" />
                  Start with what applies today — save the rest for later.
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
                  Featured reads 🔥
                </h2>
                <p className="text-muted-foreground mt-1">
                  Strong starters if you're overwhelmed. 💪
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-primary/10 px-3 py-2 rounded-full shadow-cartoon animate-pulse">
                <Flame className="h-4 w-4 text-primary" />
                Curated ⭐
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featured.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1 overflow-hidden hover-wiggle"
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
                    <CardDescription className="line-clamp-2">
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

                    <Link href={`/blog/${post.id}`}>
                      <Button className="w-full gap-2 border border-border/70 bg-background/60">
                        Read now <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
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
              <Card
                key={post.id}
                className="hover:shadow-lg transition-shadow overflow-hidden"
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
                  <CardDescription className="line-clamp-3">
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

                  <Link href={`/blog/${post.id}`}>
                    <Button className="w-full gap-2 shadow-sm hover:shadow-md transition-shadow">
                      Read post <BookOpen className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
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
    </main>
    </>
  );
}
