import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { blogPosts, searchPosts, getAllCategories } from "@/content/blogData";
import { blogImages } from "@/data/blogImages";

const FALLBACK_BLOG_HERO = "/assets/img/blog/library/blog-list-hero.jpg";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get all categories
  const categories = useMemo(() => ["All", ...getAllCategories()], []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    const base = searchQuery
      ? searchPosts(searchQuery)
      : selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

    return base;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>

            <p className="text-xl text-muted-foreground mb-8">
              Real conversations about health, recovery, and living authentically.{" "}
              {blogPosts.length} articles to explore.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="blog-search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchQuery("");
                }}
                size="sm"
                data-testid={`category-filter-${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const heroSrc =
                blogImages[post.slug] ?? post.image ?? FALLBACK_BLOG_HERO;

              return (
                <Card
                  key={post.id}
                  className="hover:shadow-lg transition-shadow flex flex-col"
                  data-testid={`blog-post-${post.slug}`}
                >
                  <div
                    className="w-full h-48 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${heroSrc})` }}
                    aria-label={`${post.title} cover image`}
                  />

                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="text-primary font-medium">
                        {post.category}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <CardTitle className="text-2xl mb-2 hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                    </Link>

                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full mt-4"
                        data-testid={`read-more-${post.slug}`}
                      >
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
