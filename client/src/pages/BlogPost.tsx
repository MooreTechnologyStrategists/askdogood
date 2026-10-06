import { useParams, Link, useLocation } from "wouter";
import { useMemo } from "react";
import { marked } from "marked";
import { getPostBySlug } from "@/content/blogData";
import { Action, Section } from "@/components/Experience";
import { blogImages, articleImageAlt, BLOG_DEFAULT_HERO } from "@/data/blogImages";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react";
import ProductRecommendations from "@/components/ProductRecommendations";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import SEO from "@/components/SEO";
import { SITE_AUTHOR, SITE_NAME, truncateDescription } from "@/lib/seo";

type BlogRouteParams = {
  slug?: string;
};



function normalizeBlogMarkdown(content: string): string {
  const decoded = content
    .replace(/\\r\\n/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\r\n/g, "\n")
    .replace(/\t/g, "  ");

  const withParagraphBreaks = decoded.replace(
    /([^\n])\n(?!\n|[#>*\-]|\d+\.)/g,
    "$1\n\n"
  );

  return withParagraphBreaks.replace(/\n{3,}/g, "\n\n").trim();
}

// Map blog post slugs to recommended product IDs
function getProductRecommendations(slug: string): string[] | null {
  const recommendations: Record<string, string[]> = {
    "the-superpower-of-sea-moss-the-ocean-s-secret-weapon-for-everyday-wellness":
      ["hairGrowth", "skinSnapback", "seaMoss"],
    "how-collagen-saved-my-skin-my-dad-s-mobility-and-maybe-even-my-life": [
      "skinSnapback",
      "hairGrowth",
      "collagen",
    ],
    "superfoods-the-superfood-that-helped-sustain-me-for-7-years": [
      "weightLoss",
      "hairGrowth",
      "superBeets",
    ],
  };
  return recommendations[slug] ?? null;
}

function safeDateLabel(dateStr: unknown) {
  if (typeof dateStr !== "string" || !dateStr.trim()) return "—";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPost() {
  const params = (useParams() as BlogRouteParams) ?? {};
  const slug = (params.slug ?? "").trim();
  const [, setLocation] = useLocation();

  // Get post data (can be null/undefined)
  const post = getPostBySlug(slug);

  // Compute recommendations once
  const recommendedProductIds = useMemo(() => {
    if (!slug) return null;
    return getProductRecommendations(slug);
  }, [slug]);

  // ✅ Pick hero image by slug (fallback to post.image, then fallback default)
  const heroSrc =
    (slug && blogImages?.[slug]) ||
    (typeof post?.image === "string" && post.image.trim() ? post.image : "") ||
    BLOG_DEFAULT_HERO;

  if (!post) {
    return (
      <div className="container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <SEO
            title="Blog Post Not Found"
            description="The blog post you requested could not be found."
            url={slug ? `/blog/${slug}` : "/blog"}
            noindex
          />
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button onClick={() => setLocation("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const safeTitle =
    typeof post.title === "string" && post.title.trim()
      ? post.title.trim()
      : "Untitled Post";

  const safeCategory =
    typeof (post as any).category === "string" && (post as any).category.trim()
      ? (post as any).category.trim()
      : "General";

  const safeReadTime =
    typeof post.readTime === "string" && post.readTime.trim()
      ? post.readTime.trim()
      : "5 min";

  const safeDescription =
    typeof post.excerpt === "string" && post.excerpt.trim()
      ? truncateDescription(post.excerpt)
      : `Read ${safeTitle} on ${SITE_NAME}.`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: safeTitle,
    description: safeDescription,
    image: heroSrc,
    author: {
      "@type": "Person",
      name: post.author?.trim() || SITE_AUTHOR,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    mainEntityOfPage: `https://askdogood.com/blog/${slug}`,
    keywords: post.tags,
    articleSection: safeCategory,
  };

  const safeHtml = useMemo(() => {
    if (typeof post.content === "string" && post.content.trim()) {
      // Normalize imported content and convert Markdown to HTML.
      return marked.parse(normalizeBlogMarkdown(post.content));
    }
    return "<p>This article is temporarily offline while it is being updated.</p>";
  }, [post.content]);

  const handleShare = async () => {
    try {
      const url = window.location.href;
      const text =
        typeof post.excerpt === "string" ? post.excerpt : "Check this out.";

      if (navigator.share) {
        await navigator.share({
          title: safeTitle,
          text,
          url,
        });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      } else {
        // last resort fallback
        window.prompt("Copy this link:", url);
      }
    } catch {
      // user canceled share or permissions; do nothing
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={safeTitle}
        description={safeDescription}
        keywords={
          post.tags.length ? post.tags : [safeCategory, "Ask DoGood blog"]
        }
        image={heroSrc}
        imageAlt={slug ? articleImageAlt(slug) : safeTitle}
        url={`/blog/${slug}`}
        type="article"
        author={post.author?.trim() || SITE_AUTHOR}
        publishedTime={post.date || undefined}
        modifiedTime={post.date || undefined}
        section={safeCategory}
        tags={post.tags}
        schema={articleSchema}
      />
      {/* A readable introduction lets the article and its image each have room. */}
      <section className="bg-[#fff8ed] py-12 md:py-20">
        <div className="container grid gap-9 lg:grid-cols-2 lg:items-center">
          <div className="max-w-3xl text-foreground">
            <Link href="/blog">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-4">
              {safeCategory}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {safeTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{safeDateLabel(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{safeReadTime}</span>
              </div>
            </div>
          </div>
          <img
            src={heroSrc}
            alt={articleImageAlt(slug)}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"
            onError={event => {
              if (event.currentTarget.getAttribute("src") !== BLOG_DEFAULT_HERO) event.currentTarget.src = BLOG_DEFAULT_HERO;
            }}
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Share Button */}
            <div className="flex justify-end mb-8">
              <Button onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:mt-12 prose-h2:text-3xl prose-h3:mt-8 prose-h3:text-2xl prose-p:my-7 prose-p:text-lg prose-p:leading-8 prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-a:text-primary prose-img:rounded-lg prose-img:shadow-lg blog-content-dropcap"
              dangerouslySetInnerHTML={{ __html: safeHtml }}
            />

            {/* Product Recommendations */}
            {recommendedProductIds?.length ? (
              <ProductRecommendations
                productIds={recommendedProductIds}
                title="Products I Recommend"
                variant="card"
              />
            ) : null}

            {/* Author Section */}
            <div className="mt-16 p-8 bg-secondary/30 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  R
                </div>
                <div>
                  <h3 className="font-bold text-xl">RoSeé "DoGood" Murphy</h3>
                  <p className="text-muted-foreground">
                    Thyroid cancer survivor, wellness advocate, and founder of
                    Ask DoGood
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16">
              <BeehiivSubscribe
                variant="inline"
                title="Love this content? Get more like it."
                description="Join the AskDoGood Newsletter for weekly insights on healing, wellness, and real-life strategies."
              />
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link href="/blog">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Read More Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Section tone title="Put a good idea into practice.">
        <p>Explore practical guides, wellness plans, and ongoing support.</p>
        <div className="adg-actions">
          <Action href="/shop">See offers & prices</Action>
          <Action href="/resources/start" secondary>
            Find my path
          </Action>
        </div>
      </Section>
    </div>
  );
}
