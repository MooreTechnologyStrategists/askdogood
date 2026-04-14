import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle2, Handshake, Mail, PenSquare, Sparkles, Users } from "lucide-react";

export default function GuestContributors() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collaborationType: "Guest post",
    expertise: "",
    website: "",
    proposedTitle: "",
    audience: "",
    links: "",
    pitch: "",
  });
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      collaborationType: "Guest post",
      expertise: "",
      website: "",
      proposedTitle: "",
      audience: "",
      links: "",
      pitch: "",
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const buildEmailBody = () => {
    const collaborationLabel = formData.collaborationType || "General collaboration";

    return {
      collaborationLabel,
      emailBody: [
        "Ask DoGood collaboration submission",
        "",
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Best fit: ${collaborationLabel}`,
        `Expertise / lived experience: ${formData.expertise}`,
        `Website or brand home: ${formData.website || "Not provided"}`,
        `Working title / idea: ${formData.proposedTitle}`,
        `Why this fits the Ask DoGood audience: ${formData.audience}`,
        `Links / socials / samples: ${formData.links || "None provided"}`,
        "",
        "Pitch / story / outline:",
        formData.pitch,
      ].join("\n"),
    };
  };

  const openEmailFallback = async () => {
    const { collaborationLabel, emailBody } = buildEmailBody();

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(emailBody).catch(() => undefined);
    }

    const subject = encodeURIComponent(
      `${collaborationLabel} - ${formData.name || "Ask DoGood"}`,
    );
    const body = encodeURIComponent(emailBody);

    window.location.href = `mailto:askdogood@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitState("loading");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/collaboration-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourcePage: typeof window !== "undefined" ? window.location.href : "/guest-contributors",
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Submission failed");
      }

      setSubmitState("success");
      setSubmitMessage("Thanks — your collaboration idea was saved. We will review it and follow up by email.");
      toast.success("Your collaboration idea was submitted successfully.");
      resetForm();
    } catch (error) {
      console.error("Collaboration submission error:", error);
      setSubmitState("error");
      setSubmitMessage("Auto-save hit a snag, so we opened a backup email draft for you.");
      toast.error("Auto-save hit a snag. Opening a backup email draft now.");
      await openEmailFallback();
    }
  };

  const topics = [
    "Holistic health, DERS living, and practical healing routines",
    "Clean eating, meal prep, herbs, and thyroid-friendly nutrition",
    "Movement, recovery, burnout repair, and nervous-system support",
    "Spirituality, faith-forward growth, and real-life stability",
    "Employment, education, entrepreneurship, and upward mobility",
    "Current events, community care, and culturally relevant wellness conversations",
  ];

  const collaborationFormats = [
    "Guest posts and personal essays",
    "Podcast, live, or interview swaps",
    "Newsletter features and cross-promotions",
    "Brand partnerships and affiliate collaborations",
  ];

  const creatorBenefits = [
    "a mission-led platform rooted in wellness, truth, and style",
    "a chance to be featured alongside RoSeé's story and community impact",
    "room for backlinks, audience crossover, and long-term collaboration",
    "a respectful editorial process focused on clarity, usefulness, and beauty",
  ];

  const nextSteps = [
    "Pitch your story, lesson, or collaboration idea below",
    "We review for audience fit, usefulness, and alignment",
    "Strong submissions get a follow-up by email for next steps and timing",
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="container relative py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <Badge className="w-fit px-4 py-2 text-sm">
                <PenSquare className="mr-2 h-4 w-4" />
                Guest bloggers + collaborators welcome
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Tell your story. <span className="text-primary">Build with Ask DoGood.</span>
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ask DoGood is where healing, structure, culture, and real-life growth meet. If you
                have wisdom, lived experience, or a brand that genuinely serves the community, this
                is a place to create something beautiful together.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border bg-background/70 p-4">
                  <p className="text-sm font-semibold">Founder-led</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Built by RoSeé's lived journey through thyroid healing, recovery, and growth.
                  </p>
                </div>
                <div className="rounded-2xl border bg-background/70 p-4">
                  <p className="text-sm font-semibold">Community-first</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Practical content for Black and Brown wellness journeys and real everyday life.
                  </p>
                </div>
                <div className="rounded-2xl border bg-background/70 p-4">
                  <p className="text-sm font-semibold">Built to share</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Great fits can turn into guest posts, swaps, features, events, and referrals.
                  </p>
                </div>
              </div>
            </div>

            <Card className="rounded-3xl border-2 border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Handshake className="h-5 w-5 text-primary" />
                  Why collaborators say yes
                </CardTitle>
                <CardDescription>
                  This is more than a generic guest post page. It is a place to share lived wisdom,
                  grow your reach, and build with a founder who leads with substance and heart.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {creatorBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl border p-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <p className="text-sm text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            <Card className="rounded-3xl lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">What we are actively looking for</CardTitle>
                <CardDescription>
                  Helpful, honest, original ideas that help people heal smarter and live better.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  {topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 rounded-2xl border p-3">
                      <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl bg-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Users className="h-5 w-5 text-primary" />
                  Ways we can work together
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {collaborationFormats.map((format) => (
                  <div key={format} className="rounded-2xl border bg-background/80 p-3 font-medium text-foreground">
                    {format}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-xl">Good fit? Start here.</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    We prioritize voices that are community-centered, useful, well-structured, and
                    aligned with wellness, education, or upward mobility.
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>original and not published elsewhere first</li>
                    <li>clear on the takeaway for the audience</li>
                    <li>rooted in lived experience, expertise, or real service</li>
                    <li>open to cross-promotion, backlinks, and deeper collaboration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-xl">What happens next</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  {nextSteps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {index + 1}
                      </div>
                      <p>{step}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-3xl bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Fast lane options</CardTitle>
                  <CardDescription>
                    Prefer a direct intro first? Start here and we can take it from there.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="mailto:askdogood@gmail.com?subject=Collaboration%20Question">
                      <Mail className="mr-2 h-4 w-4" /> Email RoSeé directly
                    </a>
                  </Button>
                  <Button className="w-full border border-border bg-transparent text-foreground hover:bg-accent" asChild>
                    <Link href="/contact">General contact page</Link>
                  </Button>
                </CardContent>
              </Card>

              <BeehiivSubscribe
                variant="card"
                source="guest_contributors"
                title="Not ready to pitch yet?"
                description="Join the list for guest feature invites, partnership openings, and community updates first."
                placeholder="Enter your email"
                buttonText="Keep Me Posted"
              />
            </div>

            <Card className="rounded-3xl border-2 border-primary/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Pitch your story or collaboration idea</CardTitle>
                <CardDescription>
                  Share your angle, your links, and why the Ask DoGood audience would care. Your
                  pitch is saved directly to the site so we can review and follow up by email.
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
                    <Label htmlFor="collaborationType">Best collaboration type</Label>
                    <select
                      id="collaborationType"
                      name="collaborationType"
                      value={formData.collaborationType}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option>Guest post</option>
                      <option>Newsletter swap</option>
                      <option>Podcast or interview</option>
                      <option>Brand partnership</option>
                      <option>Community event or workshop</option>
                      <option>Other collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expertise">Expertise or lived experience</Label>
                    <Input
                      id="expertise"
                      name="expertise"
                      value={formData.expertise}
                      onChange={handleChange}
                      placeholder="Example: thyroid advocacy, meal prep, burnout recovery, community leadership"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website, brand, or project home</Label>
                    <Input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://your-site.com or your brand name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="proposedTitle">Working title or collaboration idea</Label>
                    <Input
                      id="proposedTitle"
                      name="proposedTitle"
                      value={formData.proposedTitle}
                      onChange={handleChange}
                      placeholder="What should we build, write, or talk about together?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="audience">Why this fits the Ask DoGood audience</Label>
                    <Textarea
                      id="audience"
                      name="audience"
                      value={formData.audience}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us the outcome, audience overlap, and why this matters right now."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="links">Portfolio, socials, writing samples, or media links</Label>
                    <Input
                      id="links"
                      name="links"
                      value={formData.links}
                      onChange={handleChange}
                      placeholder="Instagram, LinkedIn, Substack, website, or sample links"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pitch">Your story, pitch, or outline</Label>
                    <Textarea
                      id="pitch"
                      name="pitch"
                      value={formData.pitch}
                      onChange={handleChange}
                      rows={7}
                      placeholder="Share the angle, the story, the win for readers, and anything cool we should know about you."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full py-3 text-base" disabled={submitState === "loading"}>
                    {submitState === "loading" ? "Sending your pitch..." : "Start the Collaboration"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  {submitMessage && (
                    <div className={`rounded-2xl border px-3 py-3 text-sm ${submitState === "success" ? "border-primary/30 bg-primary/5 text-primary" : "border-destructive/30 bg-destructive/5 text-destructive"}`}>
                      {submitMessage}
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Your pitch is saved automatically. If anything goes wrong, a backup email draft
                    opens so nothing gets lost.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
