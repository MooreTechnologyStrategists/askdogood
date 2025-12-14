import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Sparkles, BookOpen } from "lucide-react";

// If you already have posts coming from somewhere, keep that logic.
// This file is mainly adding the hero/intro section at the top.

const BLOG_ICON_URL =
  "https://askdogoodassets.blob.core.windows.net/images/blog_icon.png";

export default function Blog() {
  // TODO: Replace with your real posts data if you already have it.
  const posts: Array<{
    slug: string;
    title: string;
    excerpt?: string;
    date?: string;
  }> = [];

  return (
    <main className="min-h-screen bg-background">
      {/* BLOG HERO */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container relative py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-[120px_1fr] md:items-center">
            {/* Icon */}
            <div className="flex md:block justify-center">
              <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-2xl border bg-background/70 shadow-sm overflow-hidden">
                <img
                  src={BLOG_ICON_URL}
                  alt="Ask DoGood blog icon"
                  className="h-full w-full object-contain p-3"
                  loading="lazy"
                />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              </div>
            </div>

            {/* Copy */}
            <div className="text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground mx-auto md:mx-0">
                <Sparkles className="h-4 w-4 text-primary" />
                Truth. Strategy. Encouragement.
              </div>

              <h1
                className="text-3xl md:text-5xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                The Ask DoGood Blog
                <span className="block text-primary">Healing isn’t pretty — but it’s worth it.</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
                Real-life wellness, mindset, thyroid recovery, routines, and rebuilding your life with
                structure — not shame. If it’s honest, practical, and helps you move forward, it belongs here.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
                <Link href="/journey">
                  <Button size="lg" className="gap-2 shadow-md hover:shadow-lg transition-shadow">
                    Start Here <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="#posts">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 shadow-sm hover:shadow-md transition-shadow"
                  >
                    Browse Posts <BookOpen className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section id="posts" className="container py-10 md:py-14">
        {posts.length === 0 ? (
          <div className="rounded-2xl border bg-background/70 p-8 text-center">
            <div className="mx-auto max-w-xl space-y-3">
              <h2 className="text-2xl font-semibold">Posts loading soon</h2>
              <p className="text-muted-foreground">
                Your blog layout is ready — now we just need to plug in your posts feed (or your markdown/DB).
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link href="/contact">
                  <Button variant="outline">Contact</Button>
                </Link>
                <Link href="/clinical-recipes">
                  <Button>Clinical Food RX</Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="leading-tight">{p.title}</CardTitle>
                    {p.date ? <CardDescription>{p.date}</CardDescription> : null}
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground leading-relaxed">
                    {p.excerpt ?? "Read more…"}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
