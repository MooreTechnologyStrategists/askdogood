import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useUser } from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Profile() {
  const { user, isLoading } = useUser();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const storageKey = user?.userId ? `askdogood-profile:${user.userId}` : null;

  useEffect(() => {
    if (!storageKey) return;
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      setName(saved.name || user?.userDetails || "");
      setBio(saved.bio || "");
    } catch {
      setName(user?.userDetails || "");
    }
  }, [storageKey, user?.userDetails]);

  if (isLoading) return <main className="container mx-auto min-h-[50vh] px-4 py-16"><p>Checking your account…</p></main>;
  if (!user) return (
    <main className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-16">
      <Card className="w-full max-w-lg"><CardHeader><CardTitle>Your AskDoGood profile</CardTitle><CardDescription>Sign in to create a personal space for your name and story.</CardDescription></CardHeader>
        <CardContent><Button asChild><Link href="/signup">Create an account or sign in</Link></Button></CardContent></Card>
    </main>
  );

  return (
    <main className="container mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-4xl font-bold">Your profile</h1>
      <p className="mt-3 text-muted-foreground">Welcome, {name || user.userDetails || "friend"}. Add a little about yourself.</p>
      <Card className="mt-8"><CardHeader><CardTitle>Your details</CardTitle><CardDescription>These notes are stored on this device. They do not sync across devices or grant membership access.</CardDescription></CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={(event) => {
            event.preventDefault();
            if (!storageKey) return;
            try { localStorage.setItem(storageKey, JSON.stringify({ name: name.trim(), bio: bio.trim() })); toast.success("Saved on this device"); }
            catch { toast.error("Could not save your profile on this device."); }
          }}>
            <div className="space-y-2"><Label htmlFor="profile-name">Display name</Label><Input id="profile-name" maxLength={80} value={name} onChange={event => setName(event.target.value)} /></div>
            <div className="space-y-2"><Label htmlFor="profile-bio">A little about you</Label><Textarea id="profile-bio" maxLength={500} value={bio} onChange={event => setBio(event.target.value)} /></div>
            <Button type="submit">Save profile</Button>
          </form>
        </CardContent>
      </Card>
      <p className="mt-6 text-sm text-muted-foreground">Looking for a paid purchase? Your download or subscription is managed through the checkout provider. <Link className="underline" href="/shop">Visit the shop</Link>.</p>
    </main>
  );
}
