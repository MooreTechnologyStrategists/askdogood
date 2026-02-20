import { useUser } from "@/hooks/useUser";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Calendar, CheckCircle2, Clock, Star, Trophy } from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { toast } from "sonner";
import { useState } from "react";

export default function Challenges() {
  const { user } = useUser();
  const { data: challenges, isLoading: challengesLoading, error: challengesError } = trpc.challenges?.getActive?.useQuery() ?? { data: undefined, isLoading: false, error: null };
  const { data: completions, isLoading: completionsLoading } = trpc.challenges?.getMyCompletions?.useQuery() ?? { data: undefined, isLoading: false };
  const { data: pointsBalance } = trpc.points?.getBalance?.useQuery() ?? { data: undefined };
  const [selectedType, setSelectedType] = useState<string>("all");

  const completeMutation = trpc.challenges?.complete?.useMutation({
    onSuccess: (data) => {
      toast.success(`Challenge completed! You earned ${data.pointsEarned} points! 🎉`);
      window.location.reload();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to complete challenge. Please try again.");
    },
  }) ?? { mutate: () => {}, isPending: false };

  // Handle tRPC not being available
  if (!trpc.challenges) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Challenges Unavailable</CardTitle>
            <CardDescription>The challenges system is currently being set up. Please check back soon!</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href="/">Return Home</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (challengesError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Error Loading Challenges</CardTitle>
            <CardDescription>{challengesError.message || "Failed to load challenges"}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href="/">Return Home</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
            <CardDescription>Please log in to view challenges.</CardDescription>
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

  const challengeTypes = [
    { value: "all", label: "All Challenges" },
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "one_time", label: "One-Time" },
  ];

  // Show loading state
  if (challengesLoading || completionsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Loading Challenges...</CardTitle>
            <CardDescription>Please wait while we load your challenges.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const completedChallengeIds = new Set(completions?.map((c) => c.challengeId) || []);

  const filteredChallenges = challenges?.filter(
    (challenge) => selectedType === "all" || challenge.type === selectedType
  );

  const availableChallenges = filteredChallenges?.filter(
    (c) => !completedChallengeIds.has(c.id)
  );

  const completedChallenges = filteredChallenges?.filter((c) =>
    completedChallengeIds.has(c.id)
  );

  const handleComplete = (challengeId: number) => {
    completeMutation.mutate({ challengeId });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "daily":
        return <Calendar className="h-5 w-5" />;
      case "weekly":
        return <Clock className="h-5 w-5" />;
      case "monthly":
        return <Trophy className="h-5 w-5" />;
      case "one_time":
        return <Star className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "daily":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "weekly":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "monthly":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-400";
      case "one_time":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-400";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            Health Challenges
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Complete challenges to earn points and level up your wellness journey
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Star className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Points</p>
                    <p className="text-2xl font-bold">{pointsBalance?.points || 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="text-2xl font-bold">{completions?.length || 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Trophy className="h-8 w-8 text-orange-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Available</p>
                    <p className="text-2xl font-bold">{availableChallenges?.length || 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Type Tabs */}
        <Tabs defaultValue="all" className="mb-8" onValueChange={setSelectedType}>
          <TabsList className="grid grid-cols-5 w-full">
            {challengeTypes.map((type) => (
              <TabsTrigger key={type.value} value={type.value}>
                {type.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Available Challenges */}
        {availableChallenges && availableChallenges.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Available Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableChallenges.map((challenge) => (
                <Card key={challenge.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-2 rounded-lg ${getTypeColor(challenge.type)}`}>
                        {getTypeIcon(challenge.type)}
                      </div>
                      <Badge variant="default">+{challenge.pointsReward} pts</Badge>
                    </div>
                    <CardTitle className="text-xl">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <Badge variant="outline" className="capitalize">
                      {challenge.type.replace("_", " ")}
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button
                      className="flex-1"
                      onClick={() => handleComplete(challenge.id)}
                      disabled={completeMutation.isPending}
                    >
                      {completeMutation.isPending ? "Completing..." : "Complete Challenge"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Completed Challenges */}
        {completedChallenges && completedChallenges.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Completed Challenges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedChallenges.map((challenge) => {
                const completion = completions?.find((c) => c.challengeId === challenge.id);
                return (
                  <Card key={challenge.id} className="opacity-75">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className={`p-2 rounded-lg ${getTypeColor(challenge.type)}`}>
                          {getTypeIcon(challenge.type)}
                        </div>
                        <Badge variant="secondary" className="gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Completed
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                      <CardDescription>{challenge.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Star className="h-4 w-4" />
                            <span>Earned {challenge.pointsReward} points</span>
                          </div>
                          {completion && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(completion.completedAt).toLocaleDateString()}
                              </span>
                            </div>
                          )}
                        </div>
                        <ShareButton
                          title="I completed a wellness challenge!"
                          text={`Just completed "${challenge.title}" on AskDoGood and earned ${challenge.pointsReward} points! 🏆 Join me on my wellness journey! #AskDoGood #HealthChallenge #WellnessWin`}
                          variant="outline"
                          size="sm"
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {(!availableChallenges || availableChallenges.length === 0) &&
          (!completedChallenges || completedChallenges.length === 0) && (
            <Card>
              <CardContent className="py-12 text-center">
                <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No Challenges Available</h3>
                <p className="text-muted-foreground mb-4">
                  Check back soon for new challenges!
                </p>
                <Button asChild>
                  <a href="/dashboard">Go to Dashboard</a>
                </Button>
              </CardContent>
            </Card>
          )}
      </div>
    </div>
  );
}
