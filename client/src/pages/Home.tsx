import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Lightbulb, Users } from "lucide-react";
import { Link } from "wouter";
import { getLoginUrl } from "@/const";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-black-woman-triumph.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Real Stories.<br />
              Real Growth.<br />
              Real Life.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Join me on my journey of health, recovery, and authentic living. No filters, no pretense—just honest conversations about what matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/journey">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore My Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Read the Blog
                </Button>
              </Link>
              {!isAuthenticated && (
                <a href={getLoginUrl()}>
                  <Button size="lg" variant="secondary">
                    Join the Community
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/thyroid-awareness-black-woman.png" 
                alt="Health Advocate"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                From Survivor to Advocate
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                I'm a disabled, veteran professional woman, thyroid cancer survivor, and health advocate. After a 22-year journey battling thyroid issues—through misdiagnoses, medical dismissals, and finally cancer—I learned that our health stories matter, especially when they're not always heard.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                This space is about sharing truth, building community, and empowering us to take control of our health. Because too often, our symptoms are overlooked, our pain is minimized, and our voices are silenced.
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Read My Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Topics That Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real talk about health, wellness, and the issues affecting our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Thyroid Health</CardTitle>
                <CardDescription className="text-base">
                  The silent epidemic affecting black women at higher rates—and why your symptoms deserve attention.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Recovery & Wellness</CardTitle>
                <CardDescription className="text-base">
                  Breaking free from addiction, building healthy habits, and reclaiming your life on your terms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Community Health</CardTitle>
                <CardDescription className="text-base">
                  Addressing tobacco use, substance impact on our youth, and health disparities in our community.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Latest from the Blog
            </h2>
            <p className="text-xl text-muted-foreground">
              No-BS conversations about health, healing, and everything in between.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/blog/thyroid-misdiagnosis-black-women">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <img 
                  src="/thyroid-awareness-black-woman.png" 
                  alt="Thyroid Awareness"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <div className="text-sm text-primary font-medium mb-2">Health Advocacy</div>
                  <CardTitle className="text-2xl hover:text-primary transition-colors">
                    When Your Thyroid Symptoms Get Dismissed: A Black Woman's Reality
                  </CardTitle>
                  <CardDescription className="text-base">
                    Why thyroid issues are often misdiagnosed as mental health problems in Black women, and what you need to know to advocate for yourself.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/blog/quitting-smoking-our-community">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <img 
                  src="/recovery-strength-black-woman.png" 
                  alt="Recovery and Strength"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <div className="text-sm text-primary font-medium mb-2">Recovery</div>
                  <CardTitle className="text-2xl hover:text-primary transition-colors">
                    The Real Talk About Quitting Smoking (And Blunts) in Our Community
                  </CardTitle>
                  <CardDescription className="text-base">
                    Why it's so hard to quit, the health risks we don't talk about enough, and how to actually break free.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Let's Connect
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Have a story to share? Questions about your own health journey? I'm here to listen and support.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
