import { useParams, Link, useLocation } from "wouter";
import { useEffect, useMemo } from "react";
import { getPostBySlug } from "@/content/blogData";
import { blogImages } from "@/data/blogImages";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react";
import ProductRecommendations from "@/components/ProductRecommendations";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";

type BlogRouteParams = {
  slug?: string;
};

const BLOG_DEFAULT_HERO = "/assets/img/blog/library/blog-list-hero.jpg";

// Map blog post slugs to recommended product IDs
function getProductRecommendations(slug: string): string[] | null {
  const recommendations: Record<string, string[]> = {
    "the-superpower-of-sea-moss-the-ocean-s-secret-weapon-for-everyday-wellness": [
      "seaMoss",
      "vitaminD",
      "omega3",
    ],
    "how-collagen-saved-my-skin-my-dad-s-mobility-and-maybe-even-my-life": [
      "collagen",
      "vitaminD",
      "turmeric",
    ],
    "superfoods-the-superfood-that-helped-sustain-me-for-7-years": [
      "superBeets",
      "magnesium",
      "omega3",
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

  // Update page title and meta tags safely
  useEffect(() => {
    if (!post) return;

    const title =
      typeof post.title === "string" && post.title.trim()
        ? post.title.trim()
        : "Blog Post";

    document.title = `${title} | Ask DoGood`;

    // meta description can throw if excerpt is undefined/null
    const desc =
      typeof post.excerpt === "string" && post.excerpt.trim()
        ? post.excerpt.trim()
        : "Read the latest article from Ask DoGood.";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", desc);
  }, [post]);

  if (!post) {
    return (
      <div className="container py-16">
        <div className="max-w-3xl mx-auto text-center">
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

  const safeHtml =
    typeof post.content === "string" && post.content.trim()
      ? post.content
      : "<p>Content coming soon.</p>";

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
      {/* Hero Section with Featured Image */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroSrc})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link href="/blog">
              <Button className="text-white mb-6 hover:bg-white/20 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-4">
              {safeCategory}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {safeTitle}
            </h1>

            <div className="flex items-center justify-center gap-6 text-white/90">
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
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-lg prose-p:leading-relaxed prose-a:text-primary prose-img:rounded-lg prose-img:shadow-lg blog-content-dropcap"
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
                    Thyroid cancer survivor, wellness advocate, and founder of Ask DoGood
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
    </div>
  );
}