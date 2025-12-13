import { useParams, Link, useLocation } from "wouter";
import { getPostBySlug } from "@/content/blogData";
import { blogImages } from "@/data/blogImages";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

type BlogRouteParams = {
  slug?: string;
};

const BLOG_DEFAULT_HERO = "/assets/img/blog/library/blog-list-hero.jpg"; // change if your default is different

export default function BlogPost() {
  const params = (useParams() as BlogRouteParams) ?? {};
  const slug = params.slug ?? "";
  const [, setLocation] = useLocation();

  // Get post data
  const post = getPostBySlug(slug);

  // ✅ Pick hero image by slug (fallback to post.image, then fallback default)
  const heroSrc =
    blogImages?.[slug] ??
    post?.image ??
    BLOG_DEFAULT_HERO;

  // Update page title and meta tags
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Ask DoGood`;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt);
      }
    }
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Featured Image */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroSrc})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link href="/blog">
              <Button variant="ghost" className="text-white mb-6 hover:bg-white/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-4">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
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
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-lg prose-p:leading-relaxed prose-a:text-primary prose-img:rounded-lg prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

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

            {/* Call to Action */}
            <div className="mt-16 text-center p-8 bg-primary/10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Join the DoGood Wellness Circle</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Get exclusive wellness content, recipes, and community support delivered to your inbox.
              </p>
              <Button size="lg" onClick={() => setLocation("/signup")}>
                Get Started Free
              </Button>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link href="/blog">
                <Button variant="outline" size="lg">
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
