import { useEffect } from "react";
import { useLocation } from "wouter";
import { useUser } from "@/hooks/useUser";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse, BookOpen, Utensils } from "lucide-react";

export default function Dashboard() {
  const user = useUser();
  const [, setLocation] = useLocation();

  // Redirect unauthenticated users
  useEffect(() => {
    if (user === null) {
      setLocation("/login");
    }
  }, [user, setLocation]);

  // While auth state is resolving, render nothing
  if (!user) return null;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container space-y-10">
        {/* Welcome */}
        <header className="space-y-2">
          <h1 className="text-4xl font-bold">
            Welcome back{user.name ? `, ${user.name}` : ""}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            This is your personal wellness dashboard — a place to reflect, reset,
            and take intentional steps forward.
          </p>
        </header>

        {/* Quick Actions */}
        <section className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-primary" />
                My Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Track your healing journey, reflections, and personal wins.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setLocation("/journey")}
              >
                Go to Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Blog & Guides
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Read curated wellness insights, mindset resets, and real stories.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setLocation("/blog")}
              >
                Explore Blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                Meal Prep & Recipes
              </CardTitle>
            </CardHeader>
            <CardContent classNa
