import { useUser } from "@/hooks/useUser";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ShareButton from "@/components/ShareButton";
import { User, Star, Award, Flame, Calendar } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Profile() {
  const { user } = useUser();
  const { data: profile } = trpc.profile.get.useQuery();
  const { data: pointsBalance } = trpc.points.getBalance.useQuery();
  const { data: achievements } = trpc.achievements.getMy.useQuery();

  const [bio, setBio] = useState(profile?.bio || "");
  const [avatarColor, setAvatarColor] = useState(profile?.avatarColor || "blue");

  const updateProfileMutation = trpc.profile.update.useMutation({
    onSuccess: () => {
      toast.success("Profile updated successfully!");
      window.location.reload();
    },
    onError: () => {
      toast.error("Failed to update profile. Please try again.");
    },
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
            <CardDescription>Please log in to view your profile.</CardDescription>
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

  const handleSave = () => {
    updateProfileMutation.mutate({
      bio,
      avatarColor,
    });
  };

  const avatarColors = [
    { value: "blue", label: "Ocean Blue", class: "bg-blue-500" },
    { value: "green", label: "Forest Green", class: "bg-green-500" },
    { value: "purple", label: "Royal Purple", class: "bg-purple-500" },
    { value: "orange", label: "Sunset Orange", class: "bg-orange-500" },
    { value: "pink", label: "Rose Pink", class: "bg-pink-500" },
    { value: "teal", label: "Teal", class: "bg-teal-500" },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarClass = (color: string) => {
    const colorObj = avatarColors.find((c) => c.value === color);
    return colorObj?.class || "bg-blue-500";
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            My Profile
          </h1>
          <p className="text-xl text-muted-foreground">
            Customize your profile and track your wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Avatar & Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Preview */}
                <div className="flex items-center gap-6">
                  <Avatar className={`h-24 w-24 ${getAvatarClass(avatarColor)}`}>
                    <AvatarFallback className="text-white text-2xl font-bold">
                      {profile?.name ? getInitials(profile.name) : <User />}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{profile?.name || "User"}</h3>
                    <p className="text-sm text-muted-foreground">Member</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">
                        Level {profile?.level || 1}
                      </Badge>
                      <ShareButton
                        title="Check out my AskDoGood profile!"
                        text={`I'm on my wellness journey with AskDoGood! 🌟 Level ${profile?.level || 1} | ${pointsBalance?.points || 0} points | ${profile?.streakDays || 0} day streak. Join me! #AskDoGood #WellnessJourney #HealthTransformation`}
                        variant="ghost"
                        size="sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Avatar Color Picker */}
                <div className="space-y-3">
                  <Label>Avatar Color</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {avatarColors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setAvatarColor(color.value)}
                        className={`flex items-center gap-3 p-3 border-2 rounded-lg transition-all ${
                          avatarColor === color.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full ${color.class}`} />
                        <span className="text-sm font-medium">{color.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself and your wellness journey..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    Share your story, goals, and what motivates you.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleSave}
                  disabled={updateProfileMutation.isPending}
                  className="w-full"
                >
                  {updateProfileMutation.isPending ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Achievements
                </CardTitle>
                <CardDescription>Badges you've earned on your journey</CardDescription>
              </CardHeader>
              <CardContent>
                {achievements && achievements.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement: any) => (
                      <div
                        key={achievement.id}
                        className="flex items-center gap-3 p-4 border rounded-lg"
                      >
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{achievement.achievement?.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(achievement.earnedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    No achievements yet. Complete challenges to earn badges!
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            {/* Points Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary">{pointsBalance?.points || 0}</p>
                <p className="text-sm text-muted-foreground mt-1">Total points earned</p>
              </CardContent>
            </Card>

            {/* Streak Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-orange-500">{profile?.streakDays || 0}</p>
                <p className="text-sm text-muted-foreground mt-1">Days in a row</p>
              </CardContent>
            </Card>

            {/* Level Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  Level
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-purple-500">{profile?.level || 1}</p>
                <p className="text-sm text-muted-foreground mt-1">Current level</p>
              </CardContent>
            </Card>

            {/* Member Since */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Member Since
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  {profile?.createdAt
                    ? new Date(profile.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })
                    : "Recently"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
