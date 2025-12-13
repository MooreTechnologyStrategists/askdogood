import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation();

  const AAD_LOGIN = "/.auth/login/aad";
  // Optional later:
  // const GOOGLE_LOGIN = "/.auth/login/google";

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground font-sans">
            Sign in securely to access your wellness journey.
          </p>
        </div>

        <Card className="border-border">
          <CardHeader className="space-y-1">
            <CardTitle className="font-serif text-2xl">Sign In</CardTitle>
            <CardDescription className="font-sans">
              We use secure Microsoft sign-in. No passwords stored by Ask DoGood.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <a href={AAD_LOGIN} className="block">
              <Button className="w-full" size="lg">
                Continue with Microsoft
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            {/* Optional later
            <a href={GOOGLE_LOGIN} className="block">
              <Button variant="outline" className="w-full" size="lg">
                Continue with Google
              </Button>
            </a>
            */}

            <div className="flex items-start gap-2 rounded-xl border p-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p>
                Your identity is handled by Azure Static Web Apps authentication.
                Ask DoGood does not store your password.
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-3">
            <div className="text-sm text-muted-foreground font-sans">
              New here?
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => setLocation("/signup")}
            >
              See membership benefits
            </Button>
          </CardFooter>
        </Card>

        <div className="text-center text-sm text-muted-foreground font-sans">
          <p>
            By continuing, you agree to our{" "}
            <button
              onClick={() => setLocation("/terms")}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Terms
            </button>{" "}
            and{" "}
            <button
              onClick={() => setLocation("/privacy")}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
