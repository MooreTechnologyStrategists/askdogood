import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
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
import ClinicalRecipesPageComponent from "./pages/ClinicalRecipesPage";
import Interests from "./pages/Interests";
import NoFluff from "./pages/NoFluff";
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
import { CLINICAL_RECIPE_APP_URL } from "./config/clinicalRecipes";



// Clinical Recipe System page - using standalone component from pages folder

function Router() {
  const [location] = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);
  
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
      <Route path={"/interests"} component={Interests} />
      <Route path={"/no-fluff"} component={NoFluff} />
      <Route path={"/contact"} component={Contact} />
      {/* NEW: Clinical Recipe System route */}
      <Route path={"/clinical-recipes"} component={ClinicalRecipesPageComponent} />
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
