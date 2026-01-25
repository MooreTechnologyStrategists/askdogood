import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Upload, 
  Scan, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  TrendingUp,
  Leaf,
  Heart,
  Zap,
  AlertCircle,
  ArrowRight,
  ShieldAlert,
  Sparkles
} from "lucide-react";
import { Link } from "wouter";

interface HealthProfile {
  conditions: string[];
  goals: string[];
  restrictions: string[];
}

interface ScanResult {
  productName: string;
  ingredients: string[];
  nutritionFacts: {
    servingSize: string;
    calories: number;
    sodium: number;
    sugar: number;
    protein: number;
    fiber: number;
  };
  healthScore: number;
  warnings: string[];
  benefits: string[];
  recommendations: string[];
  pairsWith: string[];
  watchOut: string[];
  alternatives: string[];
  organicScore: number;
  additives: string[];
  vitamins: string[];
  minerals: string[];
}

export default function LabelScanner() {
  const [healthProfile, setHealthProfile] = useState<HealthProfile>({
    conditions: [],
    goals: [],
    restrictions: []
  });
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [manualInput, setManualInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const commonConditions = [
    "High Blood Pressure", "Diabetes", "Thyroid Issues", "Heart Disease",
    "Kidney Disease", "IBS", "Crohn's Disease", "GERD", "Arthritis"
  ];

  const commonGoals = [
    "Lose Weight", "Build Muscle", "Increase Energy", "Reduce Inflammation",
    "Improve Digestion", "Better Sleep", "Holistic Living", "Plant-Based Transition"
  ];

  const toggleCondition = (condition: string) => {
    setHealthProfile(prev => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter(c => c !== condition)
        : [...prev.conditions, condition]
    }));
  };

  const toggleGoal = (goal: string) => {
    setHealthProfile(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsScanning(true);
    // Simulate API call - in production, this would use OCR + AI analysis
    setTimeout(() => {
      simulateScan("Green Beans (Canned)");
      setIsScanning(false);
    }, 2000);
  };

  const handleManualScan = () => {
    if (!manualInput.trim()) return;
    setIsScanning(true);
    setTimeout(() => {
      simulateScan(manualInput);
      setIsScanning(false);
    }, 1500);
  };

  const simulateScan = (productName: string) => {
    // Demo data based on green beans example
    const result: ScanResult = {
      productName: productName,
      ingredients: [
        "Green Beans",
        "Water",
        "Salt",
        "Natural Flavoring",
        "Calcium Chloride"
      ],
      nutritionFacts: {
        servingSize: "1/2 cup (125g)",
        calories: 20,
        sodium: 380, // High sodium
        sugar: 2,
        protein: 1,
        fiber: 2
      },
      healthScore: 65,
      warnings: [
        "⚠️ HIGH SODIUM: 380mg per serving (16% daily value) - Concerning for high blood pressure",
        "🔴 Contains 3 servings per can = 1,140mg sodium if you eat the whole can",
        "⚠️ Processed food with added preservatives"
      ],
      benefits: [
        "✅ Low calorie (20 per serving)",
        "✅ Contains fiber (2g)",
        "✅ Source of vitamin C and vitamin A",
        "✅ No added sugars"
      ],
      recommendations: [
        "💡 BEST ACTION: Thoroughly rinse green beans under cold water for 30 seconds to remove up to 40% of the sodium",
        "🌱 BETTER CHOICE: Buy frozen green beans (no added salt) instead of canned",
        "🏆 BEST CHOICE: Use fresh green beans and season with herbs instead of salt"
      ],
      pairsWith: [
        "Lemon juice (adds flavor without sodium)",
        "Garlic and herbs (natural flavor boosters)",
        "Quinoa or brown rice (complete meal)"
      ],
      watchOut: [
        "Multiple servings per container - don't eat the whole can at once",
        "Calcium chloride is a firming agent (generally safe but processed)",
        "Natural flavoring is vague - could contain MSG derivatives"
      ],
      alternatives: [
        "Fresh green beans (0mg sodium per serving)",
        "Frozen green beans (5mg sodium per serving)",
        "Low-sodium canned green beans (140mg sodium per serving)"
      ],
      organicScore: 20,
      additives: ["Calcium Chloride", "Natural Flavoring"],
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin K"],
      minerals: ["Iron", "Calcium", "Magnesium"]
    };

    // Customize based on health profile
    if (healthProfile.conditions.includes("High Blood Pressure")) {
      result.warnings.unshift(
        "🚨 CRITICAL FOR YOU: Your blood pressure requires limiting sodium to 1,200-1,500mg per day. This product uses 25% of your daily limit in one serving!"
      );
    }

    if (healthProfile.conditions.includes("Diabetes")) {
      result.benefits.push("✅ Low carbohydrate content - good for blood sugar control");
    }

    if (healthProfile.goals.includes("Lose Weight")) {
      result.benefits.push("✅ Very low calorie - excellent for weight loss");
    }

    if (healthProfile.goals.includes("Plant-Based Transition")) {
      result.recommendations.push(
        "🌱 HOLISTIC TIP: Grow green beans in containers on your balcony - they're easy and rewarding!"
      );
    }

    setScanResult(result);
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getOrganicScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-fun">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-6 left-1/4 text-4xl animate-float">🔍</div>
          <div className="absolute -top-6 right-1/4 text-4xl animate-float-slow">🥗</div>
          
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 shadow-cartoon animate-bounce-fun">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary">AI-Powered Health Insights ✨</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Smart Label Scanner 🏷️
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scan any food label and get instant personalized health insights based on YOUR conditions, goals, and diet. 
            Make informed choices that support your holistic wellness journey! 💚
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Health Profile */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 rounded-3xl shadow-xl border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Your Health Profile
                </CardTitle>
                <CardDescription>
                  Tell us about yourself for personalized insights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Health Conditions */}
                <div>
                  <Label className="text-sm font-semibold mb-2 block">Health Conditions 🩺</Label>
                  <div className="flex flex-wrap gap-2">
                    {commonConditions.map(condition => (
                      <Badge
                        key={condition}
                        variant={healthProfile.conditions.includes(condition) ? "default" : "outline"}
                        className="cursor-pointer hover-wiggle"
                        onClick={() => toggleCondition(condition)}
                      >
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Health Goals */}
                <div>
                  <Label className="text-sm font-semibold mb-2 block">Health Goals 🎯</Label>
                  <div className="flex flex-wrap gap-2">
                    {commonGoals.map(goal => (
                      <Badge
                        key={goal}
                        variant={healthProfile.goals.includes(goal) ? "default" : "outline"}
                        className="cursor-pointer hover-wiggle bg-green-500 hover:bg-green-600"
                        onClick={() => toggleGoal(goal)}
                      >
                        {goal}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                {(healthProfile.conditions.length > 0 || healthProfile.goals.length > 0) && (
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <p className="text-sm font-medium mb-2">Profile Active ✅</p>
                    <p className="text-xs text-muted-foreground">
                      {healthProfile.conditions.length} conditions, {healthProfile.goals.length} goals tracked
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Scanner & Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Scanner Card */}
            <Card className="rounded-3xl shadow-xl border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scan className="h-5 w-5 text-primary" />
                  Scan Your Label
                </CardTitle>
                <CardDescription>
                  Upload a photo or enter ingredients manually
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Upload Button */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 gap-2 rounded-full hover-bounce"
                    disabled={isScanning}
                  >
                    <Camera className="h-4 w-4" />
                    Upload Photo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 gap-2 rounded-full hover-wiggle"
                    onClick={() => simulateScan("Sample Product")}
                    disabled={isScanning}
                  >
                    <Zap className="h-4 w-4" />
                    Try Demo Scan
                  </Button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                {/* Manual Input */}
                <div className="space-y-2">
                  <Label>Enter Product Name or Ingredients</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="e.g., Canned Green Beans, Granola Bar, etc."
                      value={manualInput}
                      onChange={(e) => setManualInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleManualScan()}
                      className="rounded-full"
                    />
                    <Button
                      onClick={handleManualScan}
                      disabled={isScanning || !manualInput.trim()}
                      className="rounded-full hover-bounce"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {isScanning && (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    <span className="ml-3 text-muted-foreground">Analyzing label...</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Results */}
            {scanResult && !isScanning && (
              <div className="space-y-6 animate-pop-in">
                {/* Product Header */}
                <Card className="rounded-3xl shadow-xl border-2 border-primary/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{scanResult.productName}</h3>
                        <p className="text-sm text-muted-foreground">Serving Size: {scanResult.nutritionFacts.servingSize}</p>
                      </div>
                      <div className="text-center">
                        <div className={`text-4xl font-bold ${getHealthScoreColor(scanResult.healthScore)}`}>
                          {scanResult.healthScore}
                        </div>
                        <p className="text-xs text-muted-foreground">Health Score</p>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="bg-secondary/20 p-3 rounded-2xl text-center">
                        <p className="text-2xl font-bold">{scanResult.nutritionFacts.calories}</p>
                        <p className="text-xs text-muted-foreground">Calories</p>
                      </div>
                      <div className="bg-red-500/10 p-3 rounded-2xl text-center">
                        <p className="text-2xl font-bold text-red-600">{scanResult.nutritionFacts.sodium}mg</p>
                        <p className="text-xs text-muted-foreground">Sodium</p>
                      </div>
                      <div className="bg-blue-500/10 p-3 rounded-2xl text-center">
                        <p className="text-2xl font-bold text-blue-600">{scanResult.nutritionFacts.protein}g</p>
                        <p className="text-xs text-muted-foreground">Protein</p>
                      </div>
                      <div className="bg-green-500/10 p-3 rounded-2xl text-center">
                        <p className="text-2xl font-bold text-green-600">{scanResult.nutritionFacts.fiber}g</p>
                        <p className="text-xs text-muted-foreground">Fiber</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Warnings */}
                {scanResult.warnings.length > 0 && (
                  <Card className="rounded-3xl shadow-xl border-2 border-red-500/50 bg-red-50/50 dark:bg-red-950/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-600">
                        <ShieldAlert className="h-5 w-5" />
                        Health Warnings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {scanResult.warnings.map((warning, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-zinc-900 rounded-2xl">
                          <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                          <p className="text-sm">{warning}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Benefits */}
                {scanResult.benefits.length > 0 && (
                  <Card className="rounded-3xl shadow-xl border-2 border-green-500/50 bg-green-50/50 dark:bg-green-950/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                        Health Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {scanResult.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-zinc-900 rounded-2xl">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <p className="text-sm">{benefit}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Recommendations */}
                <Card className="rounded-3xl shadow-xl border-2 border-blue-500/50 bg-blue-50/50 dark:bg-blue-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-600">
                      <TrendingUp className="h-5 w-5" />
                      Smart Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {scanResult.recommendations.map((rec, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-cartoon-lg hover-wiggle">
                        <Zap className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <p className="text-sm font-medium">{rec}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Additional Info Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pairs Well With */}
                  <Card className="rounded-3xl shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-green-600" />
                        Pairs Well With
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {scanResult.pairsWith.map((item, i) => (
                          <li key={i} className="text-sm flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Watch Out For */}
                  <Card className="rounded-3xl shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-orange-600" />
                        Watch Out For
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {scanResult.watchOut.map((item, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="text-orange-600 shrink-0">⚠</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Better Alternatives */}
                <Card className="rounded-3xl shadow-xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                      Better Alternatives
                    </CardTitle>
                    <CardDescription>
                      Upgrade your choice for better health outcomes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {scanResult.alternatives.map((alt, i) => (
                        <div key={i} className="p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-cartoon hover-bounce">
                          <p className="font-medium">{alt}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Analysis */}
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Organic Score */}
                  <Card className="rounded-3xl shadow-xl">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Organic Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold">{scanResult.organicScore}%</span>
                        <div className={`h-2 flex-1 rounded-full ${getOrganicScoreColor(scanResult.organicScore)}`}></div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additives */}
                  <Card className="rounded-3xl shadow-xl">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Additives</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold mb-2">{scanResult.additives.length}</p>
                      <p className="text-xs text-muted-foreground">{scanResult.additives.join(", ")}</p>
                    </CardContent>
                  </Card>

                  {/* Nutrients */}
                  <Card className="rounded-3xl shadow-xl">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Key Nutrients</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold mb-2">{scanResult.vitamins.length + scanResult.minerals.length}</p>
                      <p className="text-xs text-muted-foreground">Vitamins & Minerals</p>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA */}
                <Card className="rounded-3xl shadow-xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/50">
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-2xl font-bold mb-3">Want to Learn More? 📚</h3>
                    <p className="text-muted-foreground mb-6">
                      My Thyroid Health Mastery Course teaches you everything about reading labels, 
                      choosing the right foods, and transitioning to holistic living.
                    </p>
                    <Link href="/shop">
                      <Button size="lg" className="gap-2 rounded-full shadow-cartoon-primary hover-bounce">
                        Explore the Course ✨
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Empty State */}
            {!scanResult && !isScanning && (
              <Card className="rounded-3xl shadow-xl border-2 border-dashed">
                <CardContent className="py-16 text-center">
                  <Scan className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Ready to Scan</h3>
                  <p className="text-muted-foreground">
                    Upload a photo or try the demo to see how it works! 🎯
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
          <p className="mb-2">
            ℹ️ <strong>Note:</strong> This tool provides educational guidance based on general health principles. 
            Always consult with your healthcare provider for personalized medical advice.
          </p>
          <p>
            🌱 Part of the AskDoGood mission to empower you with knowledge for holistic wellness.
          </p>
        </div>
      </div>
    </div>
  );
}
