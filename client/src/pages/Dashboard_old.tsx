import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, HeartPulse, Sparkles, UtensilsCrossed, RefreshCw } from "lucide-react";

// Rotating motivational quotes
const QUOTES = [
  "Structure over struggle — small systems create big stability.",
  "Healing isn't linear, but showing up is.",
  "Your body's wisdom is louder than any diagnosis.",
  "Discipline is self-love in action.",
  "Rest is not a reward — it's a requirement.",
  "Faith doesn't require perfection.",
  "Consistency beats intensity every time.",
  "You're not behind — you're rebuilding.",
  "Small wins compound into lasting change.",
  "Your journey is valid, even on tired days.",
  "Healing takes time, but you're worth the wait.",
  "Progress isn't always visible, but it's happening.",
];

// Dynamic focus based on day of week
const getDailyFocus = () => {
  const day = new Date().getDay();
  const dayFocus = {
    0: { // Sunday
      title: "Planning & Intention-Setting",
      description: "Set 2-3 simple goals for the week. Prep ingredients, meal plan, and decide what wellness wins you're claiming this week.",
    },
    1: { // Monday
      title: "Meal Planning & Prep",
      description: "Prep 2-3 thyroid-friendly meals. Batch cook proteins, chop veggies, or prep smoothie bags. Make healthy eating automatic.",
    },
    2: { // Tuesday
      title: "Movement & Energy",
      description: "Move your body in a way that feels good. 10-minute walk, stretching, or gentle yoga. Blood flow = brain power.",
    },
    3: { // Wednesday
      title: "Midweek Check-In",
      description: "How's your energy? Sleep? Digestion? Adjust what's not working. Small pivots matter more than perfect plans.",
    },
    4: { // Thursday
      title: "Reflection & Journaling",
      description: "Write 3 wins from this week. Track symptoms if you're healing. Progress is in the patterns, not perfection.",
    },
    5: { // Friday
      title: "Week Review & Celebration",
      description: "Celebrate what you did — not what you didn't. Rest guilt-free tonight. You earned it.",
    },
    6: { // Saturday
      title: "Rest & Recovery",
      description: "Slow down. Sleep in. Do nothing productive. Your body heals when you rest, not when you push.",
    },
  };
  return dayFocus[day];
};

// Seasonal focus additions
const getSeasonalContext = () => {
  const month = new Date().getMonth();
  if (month === 1) return " (Black History Month — honor your roots while you heal)";
  if (month === 4) return " (Mental Health Awareness Month — your mind matters)";
  if (month >= 2 && month <= 4) return " (Spring renewal energy — fresh starts welcomed)";
  if (month >= 5 && month <= 7) return " (Summer energy — stay hydrated, move outdoors)";
  if (month >= 8 && month <= 10) return " (Fall grounding — slow down, reflect, prepare)";
  if (month === 11 || month === 0) return " (Winter rest season — your body needs more sleep)";
  return "";
};

// Expanded quick wins
const QUICK_WINS = [
  "10-minute walk after one meal (blood sugar loves this).",
  "One 'swap': soda → sparkling water, fries → air-fried.",
  "Write one sentence in your Journey page tonight. One.",
  "Drink 8oz water right now. Then drink another in an hour.",
  "Take your supplements with a full meal today.",
  "Stretch for 5 minutes before bed — release the day.",
  "Text someone you love and tell them one thing you're grateful for.",
  "Prep tomorrow's breakfast tonight (10 minutes = zero excuses).",
  "Turn off screens 30 minutes before bed. Read or rest instead.",
  "Check in with your body: What does it need right now?",
];

export default function Dashboard() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [quickWins, setQuickWins] = useState<string[]>([]);
  const dailyFocus = getDailyFocus();
  const seasonalContext = getSeasonalContext();

  useEffect(() => {
    // Set random quote on mount
    setCurrentQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    
    // Set 3 random quick wins
    const shuffled = [...QUICK_WINS].sort(() => 0.5 - Math.random());
    setQuickWins(shuffled.slice(0, 3));
  }, []);

  const refreshQuote = () => {
    let newQuote;
    do {
      newQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    } while (newQuote === currentQuote && QUOTES.length > 1);
    setCurrentQuote(newQuote);
  };

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
    <div className="min-h-screen">
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Your Dashboard
              </h1>
              <p className="mt-2 text-muted-foreground text-lg flex items-center gap-2 flex-wrap">
                {currentQuote}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={refreshQuote}
                  className="h-6 w-6 p-0 hover:bg-primary/10"
                  title="New quote"
                >
                  <RefreshCw className="h-3 w-3" />
                </Button>
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
                <CardTitle>{dailyFocus.title}{seasonalContext}</CardTitle>
                <CardDescription>
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} — today's recommended focus
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border bg-secondary/20 p-5">
                  <p className="text-sm text-muted-foreground">Suggested focus</p>
                  <p className="text-xl font-semibold mt-1">{dailyFocus.title}</p>
                  <p className="text-muted-foreground mt-2">
                    {dailyFocus.description}
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
  );
}
