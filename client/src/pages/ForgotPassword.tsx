import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Mail, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  const [, setLocation] = useLocation();
  
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsLoading(true);

    try {
      if (!email) {
        setError("Please enter your email address");
        setIsLoading(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        setIsLoading(false);
        return;
      }

      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const data = await response.json();
        setError(data.message || "Failed to send reset email. Please try again.");
      }
    } catch (err) {
      setSuccess(true);
      console.error("Password reset error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
            Reset Password
          </h1>
          <p className="text-muted-foreground font-sans">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        <Card className="border-border">
          {!success ? (
            <>
              <CardHeader className="space-y-1">
                <CardTitle className="font-serif text-2xl">Forgot Your Password?</CardTitle>
                <CardDescription className="font-sans">
                  No worries! Enter your email address and we'll send you instructions to reset your password.
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
                        autoFocus
                      />
                    </div>
                    <p className="text-xs text-muted-foreground font-sans">
                      We'll send password reset instructions to this email
                    </p>
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
                        Sending...
                      </>
                    ) : (
                      "Send Reset Link"
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full font-sans"
                    onClick={() => setLocation("/login")}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Login
                  </Button>
                </CardFooter>
              </form>
            </>
          ) : (
            <>
              <CardHeader className="space-y-4">
                <div className="flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <CheckCircle className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center font-serif text-2xl">
                  Check Your Email
                </CardTitle>
                <CardDescription className="text-center font-sans">
                  We've sent password reset instructions to <strong className="text-foreground">{email}</strong>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <Alert className="border-primary bg-primary/5">
                  <AlertDescription className="text-foreground text-sm font-sans">
                    <strong>What's next?</strong>
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      <li>Check your inbox (and spam folder)</li>
                      <li>Click the reset link in the email</li>
                      <li>Create a new password</li>
                      <li>Sign in with your new password</li>
                    </ol>
                  </AlertDescription>
                </Alert>

                <p className="text-sm text-muted-foreground text-center font-sans">
                  The reset link will expire in <strong className="text-foreground">1 hour</strong> for security.
                </p>
              </CardContent>

              <CardFooter className="flex flex-col space-y-3">
                <Button
                  type="button"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans"
                  onClick={() => setLocation("/login")}
                >
                  Back to Login
                </Button>

                <button
                  type="button"
                  onClick={() => {
                    setSuccess(false);
                    setEmail("");
                  }}
                  className="text-sm text-primary hover:text-primary/80 transition-colors font-sans"
                >
                  Didn't receive the email? Try again
                </button>
              </CardFooter>
            </>
          )}
        </Card>

        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <h3 className="font-serif font-semibold mb-2 text-center text-foreground">
              Still Having Trouble?
            </h3>
            <p className="text-sm text-muted-foreground mb-4 text-center font-sans">
              If you're not receiving the reset email or continue to have issues accessing your account, we're here to help.
            </p>
            <Button
              variant="outline"
              className="w-full border-border hover:bg-accent hover:text-accent-foreground font-sans"
              onClick={() => window.location.href = "mailto:support@askdogood.com?subject=Password Reset Help"}
            >
              Contact Support
            </Button>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground font-sans">
          <p>
            For security reasons, we don't reveal whether an email exists in our system.
            You'll receive instructions if the email is registered.
          </p>
        </div>
      </div>
    </div>
  );
}