import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";

type AuthMeResponse = {
  clientPrincipal: null | {
    userDetails: string;
    userId: string;
    identityProvider: string;
    userRoles: string[];
  };
};

async function getMe() {
  const res = await fetch("/.auth/me", { credentials: "include" });
  if (!res.ok) return null;
  return (await res.json()) as AuthMeResponse;
}

export default function Login() {
  const [, setLocation] = useLocation();
  const [checking, setChecking] = useState(true);
  const [isAuthed, setIsAuthed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getMe();
      if (data?.clientPrincipal) {
        setIsAuthed(true);
        setTimeout(() => setLocation("/dashboard"), 600);
      }
      setChecking(false);
    })();
  }, [setLocation]);

  const loginMicrosoft = () => {
    // SWA built-in provider route (works if provider is enabled)
    window.location.href = "/.auth/login/aad?post_login_redirect_uri=/dashboard";
  };

  const loginGoogle = () => {
    window.location.href = "/.auth/login/google?post_login_redirect_uri=/dashboard";
  };

  const loginFacebook = () => {
    window.location.href = "/.auth/login/facebook?post_login_redirect_uri=/dashboard";
  };

  return (
    <>
      <SEO
        title="Sign In | Ask DoGood"
        description="Sign in to your Ask DoGood account"
        url="/login"
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground font-sans">
            Sign in to access your wellness journey
          </p>
        </div>

        <Card className="border-border">
          <CardHeader className="space-y-1">
            <CardTitle className="font-serif text-2xl">Sign In</CardTitle>
            <CardDescription className="font-sans">
              Use a secure provider login.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive" className="border-destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {isAuthed && (
              <Alert className="border-primary bg-primary/5">
                <CheckCircle className="h-4 w-4 text-primary" />
                <AlertDescription className="text-primary">
                  You’re signed in. Redirecting…
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="button"
              className="w-full"
              size="lg"
              disabled={checking}
              onClick={loginMicrosoft}
            >
              Continue with Microsoft
            </Button>

            {/* These only work if you configure providers in staticwebapp.config.json */}
            <Button
              type="button"
              variant="outline"
              className="w-full"
              size="lg"
              disabled={checking}
              onClick={loginGoogle}
            >
              Continue with Google
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              size="lg"
              disabled={checking}
              onClick={loginFacebook}
            >
              Continue with Facebook
            </Button>

            <p className="text-xs text-muted-foreground">
              If Google/Facebook don’t work yet, that’s normal until we enable them
              in your Static Web Apps auth config.
            </p>
          </CardContent>

          <CardFooter className="flex flex-col space-y-3">
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => setLocation("/")}
            >
              Back to Home
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    </>
  );
}
