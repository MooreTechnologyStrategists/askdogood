import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Mail, Lock, AlertCircle, CheckCircle } from "lucide-react";
import { useUser } from "@/hooks/use-user";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useUser();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      if (!email || !password) {
        setError("Please fill in all fields");
        setIsLoading(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        setIsLoading(false);
        return;
      }

      const result = await login({ username: email, password });

      if (result.ok) {
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          setLocation("/dashboard");
        }, 1000);
      } else {
        setError(result.message || "Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground font-sans">
            Log in to access your wellness journey
          </p>
        </div>

        <Card className="border-border">
          <CardHeader className="space-y-1">
            <CardTitle className="font-serif text-2xl">Sign In</CardTitle>
            <CardDescription className="font-sans">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <Alert variant="destructive" className="border-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-primary bg-primary/5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-primary">
                    {success}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="font-sans text-sm">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-input bg-background"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="font-sans text-sm">
                    Password
                  </Label>
                  <button
                    type="button"
                    onClick={() => setLocation("/forgot-password")}
                    className="text-sm text-primary hover:text-primary/80 transition-colors font-sans"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-input bg-background"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-muted-foreground font-sans"
                >
                  Remember me for 30 days
                </label>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground font-sans">
                    Don't have an account?
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full border-border hover:bg-accent hover:text-accent-foreground font-sans"
                onClick={() => setLocation("/signup")}
              >
                Create Account
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="text-center text-sm text-muted-foreground font-sans">
          <p>
            By signing in, you agree to our{" "}
            <button
              onClick={() => setLocation("/terms")}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              onClick={() => setLocation("/privacy")}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Privacy Policy
            </button>
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => setLocation("/help")}
            className="text-sm text-primary hover:text-primary/80 transition-colors font-sans"
          >
            Need help logging in?
          </button>
        </div>
      </div>
    </div>
  );
}