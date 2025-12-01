// client/src/pages/Home.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Heart, Lightbulb, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b bg-gradient-to-b from-background to-muted/40">
        <div className="container py-12 md:py-20 lg:py-24">
          <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] md:items-center">
            {/* Left: Hero copy */}
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Ask Do Good · Mind · Body · Soul
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Healing isn’t a trend. It’s a lifestyle.
              </h1>

              <p className="max-w-xl text-base md:text-lg text-muted-foreground">
                Ask Do Good is your hub for real-world healing: practical
                wellness tips, thyroid + chronic illness support, and
                faith-filled encouragement for people who are tired of
                starting over from scratch.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/journey">
                  <Button className="inline-flex items-center gap-2">
                    Start Your Healing Journey
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/blog">
                  <Button className="border border-input bg-background text-foreground hover:bg-muted">
                    Read the Latest Posts
                  </Button>
                </Link>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground">
                No fluff. No fake perfection. Just honest conversations and
                tools to help you feel better in your body and your life.
              </p>
            </div>

            {/* Right: Feature cards */}
            <div className="grid gap-4">
              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      Thyroid & Chronic Illness Support
                    </CardTitle>
                    <CardDescription>
                      Learn from real experience—20+ years of fighting,
                      surviving, and rebuilding.
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      Practical Holistic Health
                    </CardTitle>
                    <CardDescription>
                      Food, movement, stress, and mindset—broken down so real
                      people can actually use it.
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      Community & Conversation
                    </CardTitle>
                    <CardDescription>
                      Join the stories, questions, and small wins from people
                      healing while life keeps lifing.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full justify-center text-xs"
                    >
                      Connect with Ask Do Good
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
