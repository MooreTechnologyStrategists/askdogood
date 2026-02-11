import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, HeartPulse, Sparkles, UtensilsCrossed } from "lucide-react";
import SEO from "@/components/SEO";

export default function Dashboard() {
  const quickLinks = [
    {
      title: "Clinical Recipe System",
      description: "Generate meals tailored to real health conditions.",
      icon: UtensilsCrossed,
      href: "/clinical-recipes",
      cta: "Open recipes",
    },
    {
      title: "Challenges",
      description: "Pick a weekly focus and stack small wins.",
      icon: Sparkles,
      href: "/challenges",
      cta: "View challenges",
    },
    {
      title: "Meal Prep",
      description: "Simple routines that make healthy automatic.",
      icon: HeartPulse,
      href: "/meal-prep",
      cta: "Plan meals",
    },
    {
      title: "Blog",
      description: "Real talk, real healing, real-life strategy.",
      icon: BookOpen,
      href: "/blog",
      cta: "Read posts",
    },
  ];

  return (
    <>
      <SEO
        title="Dashboard | Ask DoGood"
        description="Your personal wellness dashboard"
        url="/dashboard"
        noindex={true}
      />
      <div className="min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Your Dashboard
              </h1>
              <p className="mt-2 text-muted-foreground text-lg">
                Structure over struggle. Small wins over big promises. Let’s build your next 7 days with purpose.
              </p>
            </div>

            <div className="flex gap-2">
              <Link href="/journey">
                <Button variant="outline" className="gap-2">
                  My Journey <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="gap-2">
                  Work with me <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Today’s Focus</CardTitle>
                <CardDescription>
                  Pick one thing to win at. You don’t need motivation — you need a plan.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border bg-secondary/20 p-5">
                  <p className="text-sm text-muted-foreground">Suggested focus</p>
                  <p className="text-xl font-semibold mt-1">Hydration + a real breakfast</p>
                  <p className="text-muted-foreground mt-2">
                    Drink water first, then eat something that stabilizes you (protein + fiber). Energy follows.
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="/challenges">
                    <Button className="w-full sm:w-auto">Choose a challenge</Button>
                  </Link>
                  <Link href="/clinical-recipes">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Generate a meal plan
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Wins</CardTitle>
                <CardDescription>Micro-moves that compound.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-muted-foreground">
                    10-minute walk after one meal (blood sugar loves this).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-muted-foreground">
                    One “swap”: soda → sparkling water, fries → air-fried.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-muted-foreground">
                    Write one sentence in your Journey page tonight. One.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>
                Explore
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <HeartPulse className="h-4 w-4" />
                Built for consistency, not perfection.
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Link href={item.href}>
                        <Button variant="outline" className="w-full gap-2">
                          {item.cta} <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
