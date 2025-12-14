import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Rewards from "./pages/Rewards";
import Challenges from "./pages/Challenges";
import MealPrep from "./pages/MealPrep";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Journey from "./pages/Journey";
import Contact from "./pages/Contact";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { GA_MEASUREMENT_ID } from "./config/analytics";

const CLINICAL_RECIPE_APP_URL: string =
  import.meta.env.VITE_CLINICAL_RECIPE_APP_URL ??
  "https://clinical-food-rx.preview.emergentagent.com/";



/**
 * Clinical Recipe System page
 *
 * This keeps the AskDoGood dashboard look and simply embeds
 * the external Clinical Recipe System frontend.
 *
 * 1. Deploy the Clinical Recipe System (frontend) somewhere
 *    (e.g. recipes.askdogood.com or an Azure Static Web App).
 * 2. Set VITE_CLINICAL_RECIPE_APP_URL in your .env to that URL.
 * 3. Redeploy this app – /clinical-recipes will then “just work”.
 */
function ClinicalRecipesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <header className="space-y-2">
          <h1
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Clinical Recipe System
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            AI-powered nutritional recipes tailored to real health conditions.
            Use this tool to turn your labs, symptoms, and goals into practical,
            everyday meals that actually fit your lifestyle.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Embedded app */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recipe App Preview</CardTitle>
              <CardDescription>
                Use the full-screen button if the embedded view feels cramped.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-xl overflow-hidden border bg-muted">
                <iframe
                  src={CLINICAL_RECIPE_APP_URL}
                  title="Clinical Recipe System"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  sandbox="allow-forms allow-scripts allow-same-origin allow-downloads"
                />

              </div>
            </CardContent>
          </Card>

          {/* Explainer / strategy card */}
          <Card>
            <CardHeader>
              <CardTitle>How this fits AskDoGood</CardTitle>
              <CardDescription>
                Keep your healing journey, dashboard, and recipes in one ecosystem.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Use your existing AskDoGood challenges to pick weekly focus
                  areas.
                </li>
                <li>
                  Translate those goals into meals using the Clinical Recipe
                  System.
                </li>
                <li>
                  Save favorites in the recipe app, track wins & reflections here.
                </li>
              </ul>
              <Button asChild className="w-full mt-2">
                <a
                  href={CLINICAL_RECIPE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Full Recipe App
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/login"} component={Login} />
      <Route path={"/signup"} component={Signup} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/rewards"} component={Rewards} />
      <Route path={"/challenges"} component={Challenges} />
      <Route path={"/meal-prep"} component={MealPrep} />
      <Route path={"/profile"} component={Profile} />
      <Route path={"/about"} component={About} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route path={"/journey"} component={Journey} />
      <Route path={"/contact"} component={Contact} />
      {/* NEW: Clinical Recipe System route */}
      <Route path={"/clinical-recipes"} component={ClinicalRecipesPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
