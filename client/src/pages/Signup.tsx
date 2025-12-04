import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Mail, Lock, User, AlertCircle, CheckCircle, Eye, EyeOff } from "lucide-react";
import { useUser } from "@/hooks/use-user";

export default function Signup() {
  const [, setLocation] = useLocation();
  const { register } = useUser();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) return "Password must be at least 8 characters long";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("Please fill in all fields");
        setIsLoading(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address");
        setIsLoading(false);
        return;
      }

      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        setError(passwordError);
        setIsLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        setIsLoading(false);
        return;
      }

      if (!agreedToTerms) {
        setError("Please agree to the Terms of Service and Privacy Policy");
        setIsLoading(false);
        return;
      }

      const result = await register({
        username: formData.email,
        password: formData.password,
      });

      if (result.ok) {
        setSuccess("Account created successfully! Redirecting to dashboard...");
        setTimeout(() => {
          setLocation("/dashboard");
        }, 2000);
      } else {
        setError(result.message || "Failed to create account. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = (password: string): { strength: string; color: string; width: string } => {
    if (password.length === 0) return { strength: "", color: "", width: "0%" };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return { strength: "Weak", color: "bg-destructive", width: "33%" };
    if (strength <= 4) return { strength: "Medium", color: "bg-secondary", width: "66%" };
    return { strength: "Strong", color: "bg-primary", width: "100%" };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
            Create Your Account
          </h1>
          <p className="text-muted-foreground font-sans">
            Join the DoGood Wellness community
          </p>
        </div>

        <Card className="border-border">
          <CardHeader className="space-y-1">
            <CardTitle className="font-serif text-2xl">Sign Up</CardTitle>
            <CardDescription className="font-sans">
              Create your account to access courses, the wellness circle, and more
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-sans text-sm">
                    First Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="pl-10 border-input bg-background"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-sans text-sm">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-input bg-background"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-sans text-sm">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 border-input bg-background"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-sans text-sm">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10 border-input bg-background"
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                
                {formData.password && (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="text-muted-foreground">Password Strength:</span>
                      <span className={`font-semibold ${
                        passwordStrength.strength === "Weak" ? "text-destructive" :
                        passwordStrength.strength === "Medium" ? "text-secondary" :
                        "text-primary"
                      }`}>
                        {passwordStrength.strength}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${passwordStrength.color} transition-all duration-300`}
                        style={{ width: passwordStrength.width }}
                      />
                    </div>
                  </div>
                )}
                
                <p className="text-xs text-muted-foreground font-sans">
                  Must be at least 8 characters with uppercase, lowercase, and number
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="font-sans text-sm">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 pr-10 border-input bg-background"
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-xs text-destructive font-sans">Passwords do not match</p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground leading-tight font-sans"
                >
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => window.open("/terms", "_blank")}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() => window.open("/privacy", "_blank")}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Privacy Policy
                  </button>
                </label>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans"
                size="lg"
                disabled={isLoading || !agreedToTerms}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground font-sans">
                    Already have an account?
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full border-border hover:bg-accent hover:text-accent-foreground font-sans"
                onClick={() => setLocation("/login")}
              >
                Sign In
              </Button>
            </CardFooter>
          </form>
        </Card>

        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <h3 className="font-serif font-semibold mb-3 text-center text-foreground">
              What You Get:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-sans">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                Access to exclusive wellness content
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                Track your health journey
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                Join the DoGood Wellness Circle
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                Early access to new courses
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}