import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

// Sample blog posts - will be replaced with actual content
const blogPosts = [
  {
    slug: "alcohol-vs-weed-health-impact",
    title: "Alcohol vs. Weed: Which Is More Harmful to Your Health?",
    excerpt: "An honest, research-backed look at the health impacts of alcohol versus marijuana. My personal experience and what the science actually says.",
    date: "2024-11-15",
    readTime: "8 min read",
    category: "Hot Topics",
    image: "/blog-discussion.png"
  },
  {
    slug: "my-restoration-journey-one-year",
    title: "One Year Cancer-Free: Reflections on My Restoration Journey",
    excerpt: "Celebrating one year of being cancer-free and reflecting on the challenges, victories, and unexpected lessons I've learned along the way.",
    date: "2024-11-10",
    readTime: "10 min read",
    category: "Restoration",
    image: "/recovery-strength.png"
  },
  {
    slug: "fitness-transformation-2-year",
    title: "My 2-Year Fitness Transformation: What Worked and What Didn't",
    excerpt: "A transparent look at my fitness journey, including the workouts, nutrition changes, and mindset shifts that made the biggest difference.",
    date: "2024-11-05",
    readTime: "12 min read",
    category: "Health & Wellness",
    image: "/health-wellness.png"
  },
  {
    slug: "mental-health-stigma-real-talk",
    title: "Breaking the Mental Health Stigma: Why We Need to Talk More",
    excerpt: "Mental health struggles are real, and they're nothing to be ashamed of. Here's why I'm choosing to speak openly about my own challenges.",
    date: "2024-10-28",
    readTime: "7 min read",
    category: "Mental Health",
    image: "/transparency-authenticity.png"
  },
  {
    slug: "nutrition-myths-debunked",
    title: "5 Nutrition Myths I Believed (And Why They're Wrong)",
    excerpt: "From carbs to fats to meal timing—I'm breaking down the nutrition myths that held me back and sharing what actually works.",
    date: "2024-10-20",
    readTime: "9 min read",
    category: "Health & Wellness",
    image: "/health-wellness.png"
  },
  {
    slug: "transparency-in-business",
    title: "Why Transparency Makes Me a Better Professional",
    excerpt: "How being open about my struggles and journey has actually strengthened my professional relationships and credibility.",
    date: "2024-10-12",
    readTime: "6 min read",
    category: "Personal Growth",
    image: "/transparency-authenticity.png"
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real conversations about health, recovery, and living authentically
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
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow flex flex-col">
                <div 
                  className="w-full h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span className="text-primary font-medium">{post.category}</span>
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
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full mt-4">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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
