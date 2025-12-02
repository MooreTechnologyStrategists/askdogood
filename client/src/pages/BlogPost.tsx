// src/pages/BlogPost.tsx
import { useParams, Link } from "wouter";

type BlogRouteParams = {
  slug?: string;
};

export default function BlogPost() {
  // wouter v3 has useParams; if you're on v2, you’d swap this to useRoute instead.
  const params = (useParams() as BlogRouteParams) ?? {};
  const slug = params.slug ?? "";

  // You can wire this up to a real data source later
  const readableTitle =
    slug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ") || "Blog Post";

  return (
    <main className="container py-16">
      <div className="mb-6">
        <Link href="/blog">
          <a className="text-sm text-muted-foreground hover:text-primary">
            ← Back to all posts
          </a>
        </Link>
      </div>

      <article className="max-w-3xl space-y-6">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">
            Ask DoGood • Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {readableTitle}
          </h1>
          <p className="text-sm text-muted-foreground">
            This is a placeholder view for the blog post with slug:
            <span className="ml-1 font-mono text-xs bg-secondary px-1.5 py-0.5 rounded">
              {slug || "(none)"}
            </span>
          </p>
        </header>

        <section className="prose prose-neutral max-w-none">
          <p>
            The detailed article content for this post hasn’t been wired up
            yet. Once your CMS or markdown files are connected, this page will
            render the full story for each slug.
          </p>
          <p>
            For now, you can use this route to verify navigation and styling
            are working correctly. Try changing the URL after
            <code>/blog/</code> to see the slug update.
          </p>
        </section>
      </article>
    </main>
  );
}
