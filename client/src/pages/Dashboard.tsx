import { useUser } from "@/hooks/useUser";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Calendar, Flame, Gift, Star, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

export default function Dashboard() {
  const { user } = useUser();
  const { data: profile } = trpc.profile.get.useQuery();
  const { data: pointsBalance } = trpc.points.getBalance.useQuery();
  const { data: challenges } = trpc.challenges.getActive.useQuery();
  const { data: myCompletions } = trpc.challenges.getMyCompletions.useQuery();
  const { data: achievements } = trpc.achievements.getMy.useQuery();
  
  const dailyCheckInMutation = trpc.points.dailyCheckIn.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        toast.success(`Check-in successful! +${data.pointsEarned} points. ${data.newStreak} day streak! 🔥`);
        window.location.reload();
      } else {
        toast.info("You've already checked in today!");
      }
    },
    onError: () => {
      toast.error("Failed to check in. Please try again.");
    },
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
            <CardDescription>Please log in to view your dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href="/api/auth/login">Log In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const completedChallengeIds = new Set(myCompletions?.map(c => c.challengeId) || []);
  const availableChallenges = challenges?.filter(c => !completedChallengeIds.has(c.id)) || [];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            Welcome back, {user.name || 'Friend'}!
          </h1>
          <p className="text-xl text-muted-foreground">
            Keep up the great work on your health journey.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Points</p>
                  <p className="text-3xl font-bold text-primary">{pointsBalance?.points || 0}</p>
                </div>
                <Star className="h-10 w-10 text-primary opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Level</p>
                  <p className="text-3xl font-bold text-primary">{pointsBalance?.level || 1}</p>
                </div>
                <TrendingUp className="h-10 w-10 text-primary opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Streak</p>
                  <p className="text-3xl font-bold text-primary">{profile?.streakDays || 0} days</p>
                </div>
                <Flame className="h-10 w-10 text-orange-500 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                  <p className="text-3xl font-bold text-primary">{achievements?.length || 0}</p>
                </div>
                <Award className="h-10 w-10 text-primary opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Daily Check-in */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Calendar className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Daily Check-In</h3>
                  <p className="text-sm text-muted-foreground">
                    Earn points by checking in every day!
                  </p>
                </div>
              </div>
              <Button 
                onClick={() => dailyCheckInMutation.mutate()}
                disabled={dailyCheckInMutation.isPending}
              >
                {dailyCheckInMutation.isPending ? "Checking in..." : "Check In"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Active Challenges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Active Challenges
              </CardTitle>
              <CardDescription>
                Complete challenges to earn points and level up!
              </CardDescription>
            </CardHeader>
            <CardContent>
              {availableChallenges.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No active challenges right now. Check back soon!
                </p>
              ) : (
                <div className="space-y-4">
                  {availableChallenges.slice(0, 3).map((challenge) => (
                    <div key={challenge.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{challenge.title}</h4>
                        <span className="text-sm font-bold text-primary">
                          +{challenge.pointsReward} pts
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {challenge.description}
                      </p>
                      <Link href="/challenges">
                        <Button variant="outline" size="sm" className="w-full">
                          View Challenge
                        </Button>
                      </Link>
                    </div>
                  ))}
                  {availableChallenges.length > 3 && (
                    <Link href="/challenges">
                      <Button variant="ghost" className="w-full">
                        View All Challenges →
                      </Button>
                    </Link>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Explore features and resources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/rewards">
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Gift className="h-5 w-5 mr-2" />
                  Browse Rewards Store
                </Button>
              </Link>
              <Link href="/meal-prep">
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Meal Prep Resources
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Edit Profile & Avatar
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Read Blog Articles
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Level Progress */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Level Progress</CardTitle>
            <CardDescription>
              Keep earning points to level up and unlock more rewards!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Level {pointsBalance?.level || 1}</span>
                <span>Level {(pointsBalance?.level || 1) + 1}</span>
              </div>
              <Progress value={((pointsBalance?.points || 0) % 1000) / 10} className="h-3" />
              <p className="text-sm text-muted-foreground text-center">
                {1000 - ((pointsBalance?.points || 0) % 1000)} points until next level
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
