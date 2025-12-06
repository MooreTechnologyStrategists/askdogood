import { useUser } from "@/hooks/useUser";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gift, Star, ShoppingBag, BookOpen, Calendar, Tag } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Rewards() {
  const { user } = useUser();
  const { data: rewards } = trpc.rewards.getAll.useQuery();
  const { data: pointsBalance } = trpc.points.getBalance.useQuery();
  const { data: redemptions } = trpc.rewards.getMyRedemptions.useQuery();
  
  // Get reward details for redemptions
  const getRewardName = (rewardId: number) => {
    const reward = rewards?.find(r => r.id === rewardId);
    return reward?.name || 'Unknown Reward';
  };
  
  const getRewardCost = (rewardId: number) => {
    const reward = rewards?.find(r => r.id === rewardId);
    return reward?.pointsCost || 0;
  };
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const redeemMutation = trpc.rewards.redeem.useMutation({
    onSuccess: () => {
      toast.success("Reward redeemed successfully! Check your email for details.");
      window.location.reload();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to redeem reward. Please try again.");
    },
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
            <CardDescription>Please log in to view the rewards store.</CardDescription>
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

  const categories = [
    { value: "all", label: "All Rewards", icon: Gift },
    { value: "content", label: "Content", icon: BookOpen },
    { value: "meal_plan", label: "Meal Plans", icon: Calendar },
    { value: "consultation", label: "Consultations", icon: Star },
    { value: "merchandise", label: "Merchandise", icon: ShoppingBag },
    { value: "discount", label: "Discounts", icon: Tag },
  ];

  const filteredRewards = rewards?.filter(
    (reward) => selectedCategory === "all" || reward.category === selectedCategory
  );

  const canAfford = (cost: number) => (pointsBalance?.points || 0) >= cost;

  const handleRedeem = (rewardId: number, cost: number) => {
    if (!canAfford(cost)) {
      toast.error("Not enough points to redeem this reward.");
      return;
    }
    redeemMutation.mutate({ rewardId });
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find((c) => c.value === category);
    const Icon = cat?.icon || Gift;
    return <Icon className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            Rewards Store
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Redeem your points for exclusive rewards and benefits
          </p>
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Star className="h-10 w-10 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Your Points Balance</p>
                    <p className="text-3xl font-bold text-primary">{pointsBalance?.points || 0}</p>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <a href="/dashboard">Earn More Points</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-8" onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-6 w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <TabsTrigger key={cat.value} value={cat.value} className="gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{cat.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRewards?.map((reward) => (
            <Card key={reward.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {getCategoryIcon(reward.category)}
                  </div>
                  <Badge variant={canAfford(reward.pointsCost) ? "default" : "secondary"}>
                    {reward.pointsCost} pts
                  </Badge>
                </div>
                <CardTitle className="text-xl">{reward.name}</CardTitle>
                <CardDescription>{reward.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Tag className="h-4 w-4" />
                    <span className="capitalize">{reward.category.replace('_', ' ')}</span>
                  </div>
                  {reward.stock !== null && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ShoppingBag className="h-4 w-4" />
                      <span>{reward.stock} available</span>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  disabled={!canAfford(reward.pointsCost) || redeemMutation.isPending || (reward.stock !== null && reward.stock <= 0)}
                  onClick={() => handleRedeem(reward.id, reward.pointsCost)}
                >
                  {!canAfford(reward.pointsCost)
                    ? "Not Enough Points"
                    : reward.stock !== null && reward.stock <= 0
                    ? "Out of Stock"
                    : redeemMutation.isPending
                    ? "Redeeming..."
                    : "Redeem Now"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Redemption History */}
        {redemptions && redemptions.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Your Redemption History</CardTitle>
              <CardDescription>Track your redeemed rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {redemptions.map((redemption) => (
                  <div
                    key={redemption.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <p className="font-semibold">{getRewardName(redemption.rewardId)}</p>
                      <p className="text-sm text-muted-foreground">
                        Redeemed on {new Date(redemption.redeemedAt).toLocaleDateString()}
                      </p>
                      <Badge variant="secondary" className="mt-1">
                        {redemption.status}
                      </Badge>
                    </div>
                    <Badge variant="outline">-{getRewardCost(redemption.rewardId)} pts</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
