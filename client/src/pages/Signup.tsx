import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import SEO from "@/components/SEO";

export default function Signup() {
  const [, setLocation] = useLocation();

  // Azure Static Web Apps managed auth endpoints
  const AAD_LOGIN = "/.auth/login/aad";
  // Optional if you enable Google later:
  // const GOOGLE_LOGIN = "/.auth/login/google";

  return (
    <>
      <SEO
        title="Sign Up | Ask DoGood"
        description="Join Ask DoGood - A healing ecosystem for habits, mindset, meals, and momentum. Start your wellness journey today."
        url="/signup"
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
            Join Ask DoGood
          </h1>
          <p className="text-muted-foreground font-sans text-lg">
            A healing ecosystem for habits, mindset, meals, and momentum — built for real life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Benefits */}
          <Card className="border-border bg-card">
            <CardHeader className="space-y-1">
              <CardTitle className="font-serif text-2xl">What you get</CardTitle>
              <CardDescription className="font-sans">
                Simple tools that help you stay consistent — not perfect.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-sm text-muted-foreground font-sans">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p>
                  A guided wellness journey: reflections, wins, and weekly focus areas.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p>
                  Challenges that turn healing goals into doable actions (no overwhelm).
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p>
                  Meal prep + the Clinical Recipe System to support real health needs.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p>
                  A growing library of blogs, guides, and mindset resets.
                </p>
              </div>

              <div className="mt-5 flex items-start gap-2 rounded-xl border p-3">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">
                  Secure sign-in handled by Microsoft/Azure. No passwords stored by Ask DoGood.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right: Join / CTA */}
          <Card className="border-border">
            <CardHeader className="space-y-1">
              <CardTitle className="font-serif text-2xl">Start free</CardTitle>
              <CardDescription className="font-sans">
                Create your account in seconds.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <a href={AAD_LOGIN} className="block">
                <Button className="w-full" size="lg">
                  Continue with Microsoft
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              {/* Optional if/when you enable Google provider in SWA
              <a href={GOOGLE_LOGIN} className="block">
                <Button variant="outline" className="w-full" size="lg">
                  Continue with Google
                </Button>
              </a>
              */}

              <div className="text-xs text-muted-foreground font-sans leading-relaxed">
                By continuing, you agree to our Terms and Privacy Policy.
                (We’ll link these properly next.)
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-3">
              <div className="text-sm text-muted-foreground font-sans">
                Already have an account?
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setLocation("/login")}
              >
                Sign In
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Optional: Small secondary CTA */}
        <div className="text-center text-sm text-muted-foreground font-sans">
          Want to browse first?{" "}
          <button
            className="text-primary hover:underline"
            onClick={() => setLocation("/blog")}
          >
            Read the blog
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
