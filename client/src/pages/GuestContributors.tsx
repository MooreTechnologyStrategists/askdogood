import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, PenSquare, Sparkles, Users } from "lucide-react";

export default function GuestContributors() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    proposedTitle: "",
    audience: "",
    links: "",
    pitch: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Guest Contributor Pitch - ${formData.name || "Ask DoGood"}`,
    );

    const body = encodeURIComponent(
      [
        "Ask DoGood guest contributor submission",
        "",
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Expertise: ${formData.expertise}`,
        `Proposed Title: ${formData.proposedTitle}`,
        `Audience / Why it fits: ${formData.audience}`,
        `Sample links / social: ${formData.links || "None provided"}`,
        "",
        "Pitch / outline:",
        formData.pitch,
      ].join("\n"),
    );

    window.location.href = `mailto:askdogood@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client for the guest pitch...");

    setFormData({
      name: "",
      email: "",
      expertise: "",
      proposedTitle: "",
      audience: "",
      links: "",
      pitch: "",
    });
  };

  const topics = [
    "Holistic health and DERS living",
    "Clean eating, meal prep, and practical nutrition",
    "Movement, fitness, and recovery",
    "Rest, burnout recovery, and mental wellness",
    "Spirituality, faith-forward growth, and healing",
    "Employment, education, and life-betterment strategy",
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container relative py-14 md:py-20">
          <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <Badge className="w-fit px-4 py-2 text-sm">
                <PenSquare className="mr-2 h-4 w-4" />
                Guest contributors welcome
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Write for <span className="text-primary">Ask DoGood</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you have wisdom, lived experience, or practical expertise that helps people eat
                better, rest deeper, heal smarter, grow spiritually, or build a more stable life,
                we want to hear your pitch.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border bg-background/70 p-4">
                  <p className="text-sm font-semibold">What we love</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Helpful, honest, beautifully written pieces with real-life application.
                  </p>
                </div>
                <div className="rounded-2xl border bg-background/70 p-4">
                  <p className="text-sm font-semibold">Best length</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Usually 800–1,600 words, original, clear, and community-minded.
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-2 border-primary/20 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl">Topics we are actively seeking</CardTitle>
                <CardDescription>
                  Think helpful, practical, and aligned with the Ask DoGood mission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Users className="h-5 w-5 text-primary" />
                    Before you pitch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>We prioritize voices that are:</p>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>community-centered and respectful</li>
                    <li>clear, useful, and well-structured</li>
                    <li>original and not published elsewhere first</li>
                    <li>aligned with DERS, wellness, education, or upward mobility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-3xl bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Fast lane options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="mailto:askdogood@gmail.com?subject=Guest%20Contributor%20Question">
                      <Mail className="mr-2 h-4 w-4" /> Email the editor directly
                    </a>
                  </Button>
                  <Button className="w-full bg-transparent border border-border text-foreground hover:bg-accent" asChild>
                    <Link href="/contact">General contact page</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-3xl border-2 border-primary/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Submit your guest post pitch</CardTitle>
                <CardDescription>
                  Send your idea, links, and angle. We will review and follow up by email.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expertise">Expertise or lived experience</Label>
                    <Input
                      id="expertise"
                      name="expertise"
                      value={formData.expertise}
                      onChange={handleChange}
                      placeholder="Example: thyroid advocacy, meal prep, career coaching"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="proposedTitle">Proposed article title</Label>
                    <Input
                      id="proposedTitle"
                      name="proposedTitle"
                      value={formData.proposedTitle}
                      onChange={handleChange}
                      placeholder="Working title for your article"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="audience">Why this topic fits the Ask DoGood audience</Label>
                    <Textarea
                      id="audience"
                      name="audience"
                      value={formData.audience}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us why readers would care and what outcome the piece helps create."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="links">Portfolio, social, or writing samples</Label>
                    <Input
                      id="links"
                      name="links"
                      value={formData.links}
                      onChange={handleChange}
                      placeholder="Paste one or two links"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pitch">Pitch or outline</Label>
                    <Textarea
                      id="pitch"
                      name="pitch"
                      value={formData.pitch}
                      onChange={handleChange}
                      rows={7}
                      placeholder="Share the angle, main takeaways, and any relevant experience."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full py-3 text-base">
                    Submit Guest Pitch <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
