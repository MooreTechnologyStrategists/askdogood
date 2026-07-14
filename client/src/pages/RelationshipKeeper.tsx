import { useEffect, useMemo, useState } from "react";
import { useUser } from "@/hooks/useUser";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { relationshipCategories, relationshipExperiences, relationshipHabitOptions, relationshipMonthlyGoals, relationshipProfileDefaults, relationshipStatuses, relationshipCheckInQuestions, dmvRecommendations } from "@shared/relationship-keeper";
import { ArrowRight, CalendarDays, Clock3, Download, Heart, ImagePlus, MapPinned, Music4, NotebookPen, Plus, Save, Sparkles, Star, Trash2, UserRound, Users, X } from "lucide-react";

type Bootstrap = {
  user: { id: number; name?: string | null; email?: string | null; role?: string | null };
  profile: any;
  experiences: typeof relationshipExperiences;
  progress: Array<any>;
  memories: Array<any>;
  media: Array<any>;
  checkIns: Array<any>;
  plannedDates: Array<any>;
  categories: typeof relationshipCategories;
  relationshipStatuses: typeof relationshipStatuses;
  relationshipMonthlyGoals: typeof relationshipMonthlyGoals;
  relationshipHabitOptions: typeof relationshipHabitOptions;
  relationshipCheckInQuestions: typeof relationshipCheckInQuestions;
  dmvRecommendations: typeof dmvRecommendations;
  recommendedNextExperience: (typeof relationshipExperiences)[number] | null;
  recommendedLocalExperience: (typeof dmvRecommendations)[number] | null;
  summary: {
    completedCount: number;
    totalCount: number;
    percentComplete: number;
    currentStreak: number;
    recentMemory: any;
    upcomingDate: any;
    savedFavorites: Array<any>;
    categoryProgress: Array<{ categoryId: string; category: string; completed: number; total: number }>;
    lastActivityAt: string | null;
  };
};

type TabKey = "overview" | "experiences" | "planner" | "memories" | "checkins" | "dmv" | "admin";

const STORAGE_KEYS = {
  planDraft: "relationship-keeper-plan-draft",
  memoryDraft: "relationship-keeper-memory-draft",
  checkInDraft: "relationship-keeper-checkin-draft",
};

function parseArray(value: string[] | null | undefined) {
  return Array.isArray(value) ? value : [];
}

function joinList(values: string[]) {
  return values.join(", ");
}

function splitList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function todayValue() {
  return new Date().toISOString().slice(0, 10);
}

function emptyPlanner() {
  return {
    plannedDateId: undefined as number | undefined,
    experienceId: relationshipExperiences[0]?.experienceId ?? "",
    date: todayValue(),
    time: "",
    location: "",
    estimatedBudget: "",
    reservationUrl: "",
    transportationNotes: "",
    foodPlan: "",
    notes: "",
    reminderPreference: "Email",
    status: "draft" as const,
  };
}

function emptyMemory() {
  return {
    memoryId: undefined as number | undefined,
    experienceId: relationshipExperiences[0]?.experienceId ?? "",
    title: "",
    dateCompleted: todayValue(),
    location: "",
    overallRating: 5,
    connectionRating: 5,
    funRating: 5,
    foodRating: 5,
    valueRating: 5,
    activityLevel: "Moderate",
    enjoyedMost: "",
    surprisedUs: "",
    learnedAboutEachOther: "",
    bestMoment: "",
    wouldRepeat: true,
    privateNote: "",
    sharedReflection: "",
    song: "",
    quote: "",
    tags: [] as string[],
  };
}

function emptyCheckIn() {
  return {
    checkInDate: todayValue(),
    connectionScore: 8,
    communicationScore: 8,
    funScore: 8,
    affectionScore: 8,
    supportScore: 8,
    stressScore: 3,
    gratitude: "",
    needs: "",
    discussionNotes: "",
    nextGoal: "",
  };
}

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(path, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    const message = payload?.error ? JSON.stringify(payload.error) : response.statusText;
    throw new Error(message || "Request failed");
  }

  return (await response.json()) as T;
}

async function fileToDataUrl(file: File): Promise<string> {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("Unable to read file"));
    reader.readAsDataURL(file);
  });
}

function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function buildIcs(plan: any, experienceTitle: string) {
  const date = `${plan.date.replace(/-/g, "")}${plan.time ? `T${plan.time.replace(/:/g, "")}` : ""}`;
  const end = plan.time ? `${plan.date.replace(/-/g, "")}T${String(Number(plan.time.slice(0, 2)) + 2).padStart(2, "0")}${plan.time.slice(2).replace(":", "")}` : `${plan.date.replace(/-/g, "")}T190000`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//AskDoGood//Relationship Keeper//EN",
    "BEGIN:VEVENT",
    `UID:${plan.plannedDateId ?? `${Date.now()}@askdogood`}`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z")}`,
    `DTSTART:${date}`,
    `DTEND:${end}`,
    `SUMMARY:${experienceTitle}`,
    `LOCATION:${plan.location || ""}`,
    `DESCRIPTION:${plan.notes || "Relationship Keeper planned date"}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export default function RelationshipKeeper() {
  const { user, isLoading } = useUser();
  const [bootstrap, setBootstrap] = useState<Bootstrap | null>(null);
  const [loadingData, setLoadingData] = useState(false);
  const [saving, setSaving] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [tagFilter, setTagFilter] = useState<string>("all");
  const [selectedExperienceId, setSelectedExperienceId] = useState<string>(relationshipExperiences[0]?.experienceId ?? "");
  const [planForm, setPlanForm] = useState(emptyPlanner);
  const [memoryForm, setMemoryForm] = useState(emptyMemory);
  const [checkInForm, setCheckInForm] = useState(emptyCheckIn);
  const [profileForm, setProfileForm] = useState({
    ...relationshipProfileDefaults,
    interests: [] as string[],
    dietaryPreferences: [] as string[],
    favoriteMusicGenres: [] as string[],
    favoriteBooksOrAuthors: [] as string[],
    favoriteOutings: [] as string[],
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedMediaId, setSelectedMediaId] = useState<number | null>(null);

  const selectedExperience = useMemo(
    () => bootstrap?.experiences.find((experience) => experience.experienceId === selectedExperienceId) ?? relationshipExperiences[0],
    [bootstrap, selectedExperienceId]
  );

  const progressByExperience = useMemo(() => {
    const map = new Map<string, any>();
    bootstrap?.progress.forEach((item) => map.set(item.experienceId, item));
    return map;
  }, [bootstrap]);

  const progressByMemory = useMemo(() => {
    const map = new Map<number, any>();
    bootstrap?.memories.forEach((item) => map.set(item.memoryId, item));
    return map;
  }, [bootstrap]);

  const filteredExperiences = useMemo(() => {
    const experiences = bootstrap?.experiences ?? relationshipExperiences;
    return experiences.filter((experience) => {
      const categoryMatch = categoryFilter === "all" || experience.categoryId === categoryFilter;
      const progress = progressByExperience.get(experience.experienceId);
      const statusMatch = tagFilter === "all" || progress?.status === tagFilter;
      return categoryMatch && statusMatch;
    });
  }, [bootstrap, categoryFilter, progressByExperience, tagFilter]);

  const regionOptions = ["all", ...new Set(dmvRecommendations.map((item) => item.region))];
  const tagOptions = ["all", ...new Set(dmvRecommendations.flatMap((item) => item.tags))];

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    setLoadingData(true);
    apiFetch<Bootstrap>("/api/relationship-keeper/bootstrap")
      .then((data) => {
        if (cancelled) return;
        setBootstrap(data);
        const profile = data.profile;
        if (profile) {
          setProfileForm({
            ...relationshipProfileDefaults,
            ...profile,
            interests: parseArray(profile.interests),
            dietaryPreferences: parseArray(profile.dietaryPreferences),
            favoriteMusicGenres: parseArray(profile.favoriteMusicGenres),
            favoriteBooksOrAuthors: parseArray(profile.favoriteBooksOrAuthors),
            favoriteOutings: parseArray(profile.favoriteOutings),
          });
        }
        if (data.recommendedNextExperience) {
          setSelectedExperienceId(data.recommendedNextExperience.experienceId);
        }
        if (data.plannedDates[0]) {
          setPlanForm({
            ...emptyPlanner(),
            ...data.plannedDates[0],
          });
        }
        if (data.memories[0]) {
          const memory = data.memories[0];
          setMemoryForm({
            memoryId: memory.memoryId,
            experienceId: memory.experienceId,
            title: memory.title,
            dateCompleted: memory.dateCompleted,
            location: memory.location || "",
            overallRating: memory.overallRating || 5,
            connectionRating: memory.connectionRating || 5,
            funRating: memory.funRating || 5,
            foodRating: memory.foodRating || 5,
            valueRating: memory.valueRating || 5,
            activityLevel: memory.activityLevel || "Moderate",
            enjoyedMost: memory.enjoyedMost || "",
            surprisedUs: memory.surprisedUs || "",
            learnedAboutEachOther: memory.learnedAboutEachOther || "",
            bestMoment: memory.bestMoment || "",
            wouldRepeat: Boolean(memory.wouldRepeat),
            privateNote: memory.privateNote || "",
            sharedReflection: memory.sharedReflection || "",
            song: memory.song || "",
            quote: memory.quote || "",
            tags: parseArray(memory.tags),
          });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setBootstrap(null);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoadingData(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  useEffect(() => {
    const draftPlan = window.localStorage.getItem(STORAGE_KEYS.planDraft);
    if (draftPlan) {
      try {
        setPlanForm((current) => ({ ...current, ...JSON.parse(draftPlan) }));
      } catch {
        window.localStorage.removeItem(STORAGE_KEYS.planDraft);
      }
    }

    const draftMemory = window.localStorage.getItem(STORAGE_KEYS.memoryDraft);
    if (draftMemory) {
      try {
        setMemoryForm((current) => ({ ...current, ...JSON.parse(draftMemory) }));
      } catch {
        window.localStorage.removeItem(STORAGE_KEYS.memoryDraft);
      }
    }

    const draftCheckIn = window.localStorage.getItem(STORAGE_KEYS.checkInDraft);
    if (draftCheckIn) {
      try {
        setCheckInForm((current) => ({ ...current, ...JSON.parse(draftCheckIn) }));
      } catch {
        window.localStorage.removeItem(STORAGE_KEYS.checkInDraft);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.planDraft, JSON.stringify(planForm));
  }, [planForm]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.memoryDraft, JSON.stringify(memoryForm));
  }, [memoryForm]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.checkInDraft, JSON.stringify(checkInForm));
  }, [checkInForm]);

  useEffect(() => {
    const warning = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    if (selectedFiles.length > 0 || planForm.notes || memoryForm.title || checkInForm.gratitude) {
      window.addEventListener("beforeunload", warning);
      return () => window.removeEventListener("beforeunload", warning);
    }

    return undefined;
  }, [checkInForm.gratitude, memoryForm.title, planForm.notes, selectedFiles.length]);

  const statusLabel = (experienceId: string) => {
    const item = progressByExperience.get(experienceId);
    const status = item?.status ?? "not_started";
    return relationshipStatuses.find((entry) => entry.value === status)?.label ?? "Not Started";
  };

  const saveProfile = async () => {
    setSaving("profile");
    try {
      const result = await apiFetch<{ profile: any }>("/api/relationship-keeper/profile", {
        method: "POST",
        body: JSON.stringify({
          ...profileForm,
          interests: profileForm.interests,
          dietaryPreferences: profileForm.dietaryPreferences,
          favoriteMusicGenres: profileForm.favoriteMusicGenres,
          favoriteBooksOrAuthors: profileForm.favoriteBooksOrAuthors,
          favoriteOutings: profileForm.favoriteOutings,
        }),
      });
      setBootstrap((current) => (current ? { ...current, profile: result.profile } : current));
    } finally {
      setSaving(null);
    }
  };

  const saveProgress = async (experienceId: string, status: any, extras?: Partial<any>) => {
    setSaving(`progress-${experienceId}`);
    try {
      const response = await apiFetch<{ progress: any }>("/api/relationship-keeper/progress", {
        method: "POST",
        body: JSON.stringify({
          experienceId,
          status,
          plannedDate: extras?.plannedDate ?? null,
          completedDate: extras?.completedDate ?? null,
          rating: extras?.rating ?? null,
          favorite: extras?.favorite ?? false,
          repeatRequested: extras?.repeatRequested ?? false,
          notes: extras?.notes ?? "",
        }),
      });
      setBootstrap((current) => {
        if (!current) return current;
        const nextProgress = current.progress.filter((item) => item.experienceId !== experienceId).concat(response.progress);
        return { ...current, progress: nextProgress };
      });
    } finally {
      setSaving(null);
    }
  };

  const savePlan = async (draft = false, statusOverride?: "draft" | "planned" | "completed" | "cancelled") => {
    setSaving("plan");
    try {
      const response = await apiFetch<{ plannedDate: any; plannedDates: any[] }>("/api/relationship-keeper/plans", {
        method: "POST",
        body: JSON.stringify({
          ...planForm,
          status: statusOverride ?? (draft ? "draft" : planForm.status),
        }),
      });
      setBootstrap((current) => (current ? { ...current, plannedDates: response.plannedDates } : current));
      if (!draft) {
        window.localStorage.removeItem(STORAGE_KEYS.planDraft);
      }
      if (response.plannedDate?.plannedDateId) {
        setPlanForm((current) => ({ ...current, plannedDateId: response.plannedDate.plannedDateId }));
      }
    } finally {
      setSaving(null);
    }
  };

  const saveMemory = async () => {
    setSaving("memory");
    try {
      const response = await apiFetch<{ memory: any; memories: any[] }>("/api/relationship-keeper/memories", {
        method: "POST",
        body: JSON.stringify({
          ...memoryForm,
          tags: memoryForm.tags,
        }),
      });
      const savedMemory = response.memory;
      setBootstrap((current) => (current ? { ...current, memories: response.memories } : current));
      if (savedMemory?.memoryId && selectedFiles.length > 0) {
        let latestMediaItems: any[] | null = null;
        if (selectedMediaId !== null) {
          const deletionResponse = await apiFetch<{ media: any[] }>(`/api/relationship-keeper/media/${selectedMediaId}`, {
            method: "DELETE",
          });
          setBootstrap((current) => (current ? { ...current, media: deletionResponse.media } : current));
        }
        const filePayloads = await Promise.all(
          selectedFiles.map(async (file) => ({
            fileData: await fileToDataUrl(file),
            fileType: file.type || "application/octet-stream",
            caption: file.name,
            location: memoryForm.location,
            mediaDate: memoryForm.dateCompleted,
            memoryId: savedMemory.memoryId,
            isCoverPhoto: selectedMediaId === null,
            privacySetting: "private" as const,
          }))
        );
        for (const payload of filePayloads) {
          const mediaResponse = await apiFetch<{ media: any; mediaItems: any[] }>("/api/relationship-keeper/media", {
            method: "POST",
            body: JSON.stringify(payload),
          });
          latestMediaItems = mediaResponse.mediaItems;
        }
        if (latestMediaItems) {
          setBootstrap((current) => (current ? { ...current, media: latestMediaItems } : current));
        }
      }
      setSelectedFiles([]);
      setSelectedMediaId(null);
      window.localStorage.removeItem(STORAGE_KEYS.memoryDraft);
    } finally {
      setSaving(null);
    }
  };

  const saveCheckIn = async () => {
    setSaving("checkin");
    try {
      const response = await apiFetch<{ checkIns: any[] }>("/api/relationship-keeper/checkins", {
        method: "POST",
        body: JSON.stringify(checkInForm),
      });
      setBootstrap((current) => (current ? { ...current, checkIns: response.checkIns } : current));
      window.localStorage.removeItem(STORAGE_KEYS.checkInDraft);
    } finally {
      setSaving(null);
    }
  };

  const deleteMemory = async (memoryId: number) => {
    setSaving(`delete-memory-${memoryId}`);
    try {
      const response = await apiFetch<{ memories: any[] }>(`/api/relationship-keeper/memories/${memoryId}`, { method: "DELETE" });
      setBootstrap((current) =>
        current
          ? {
              ...current,
              memories: response.memories,
              media: current.media.filter((item) => item.memoryId !== memoryId),
            }
          : current
      );
    } finally {
      setSaving(null);
    }
  };

  const deleteMedia = async (mediaId: number) => {
    setSaving(`delete-media-${mediaId}`);
    try {
      const response = await apiFetch<{ media: any[] }>(`/api/relationship-keeper/media/${mediaId}`, { method: "DELETE" });
      setBootstrap((current) => (current ? { ...current, media: response.media } : current));
    } finally {
      setSaving(null);
    }
  };

  const deletePlan = async (plannedDateId: number) => {
    setSaving(`delete-plan-${plannedDateId}`);
    try {
      const response = await apiFetch<{ plannedDates: any[] }>(`/api/relationship-keeper/plans/${plannedDateId}`, { method: "DELETE" });
      setBootstrap((current) => (current ? { ...current, plannedDates: response.plannedDates } : current));
    } finally {
      setSaving(null);
    }
  };

  const exportData = async () => {
    const data = await apiFetch<any>("/api/relationship-keeper/export");
    downloadJson("relationship-keeper-export.json", data);
  };

  const deleteAccount = async () => {
    if (!window.confirm("Delete your Relationship Keeper data? This removes your couple profile, memories, plans, check-ins, and uploads.")) {
      return;
    }
    await apiFetch("/api/relationship-keeper/account", { method: "DELETE" });
    setBootstrap(null);
    setProfileForm({
      ...relationshipProfileDefaults,
      interests: [],
      dietaryPreferences: [],
      favoriteMusicGenres: [],
      favoriteBooksOrAuthors: [],
      favoriteOutings: [],
    });
    setPlanForm(emptyPlanner());
    setMemoryForm(emptyMemory());
    setCheckInForm(emptyCheckIn());
  };

  const saveAdminExperience = async () => {
    if (!selectedExperience) return;
    setSaving("admin");
    try {
      const response = await apiFetch<{ experiences: any[] }>("/api/relationship-keeper/admin/experiences", {
        method: "POST",
        body: JSON.stringify({
          experienceId: selectedExperience.experienceId,
          title: selectedExperience.title,
          description: selectedExperience.description,
          estimatedCost: selectedExperience.estimatedCost,
          duration: selectedExperience.duration,
          activityLevel: selectedExperience.activityLevel,
          indoorOutdoor: selectedExperience.indoorOutdoor,
          bestSeason: selectedExperience.bestSeason,
          suggestedPreparation: selectedExperience.suggestedPreparation,
          optionalFoodPairing: selectedExperience.optionalFoodPairing,
          conversationPrompt: selectedExperience.conversationPrompt,
          reflectionQuestion: selectedExperience.reflectionQuestion,
          isActive: selectedExperience.isActive,
          featured: true,
        }),
      });
      setBootstrap((current) => (current ? { ...current, experiences: response.experiences } : current));
    } finally {
      setSaving(null);
    }
  };

  const openGoogleCalendar = () => {
    if (!selectedExperience) return;
    const title = encodeURIComponent(selectedExperience.title);
    const details = encodeURIComponent(selectedExperience.description);
    const location = encodeURIComponent(planForm.location || selectedExperience.category);
    const start = `${planForm.date.replace(/-/g, "")}${planForm.time ? `T${planForm.time.replace(":", "")}` : ""}`;
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${start}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const downloadIcs = () => {
    if (!selectedExperience) return;
    const blob = new Blob([buildIcs(planForm, selectedExperience.title)], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "relationship-keeper-plan.ics";
    link.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading || loadingData) {
    return (
      <div className="container py-12">
        <Card className="border-border/60">
          <CardContent className="p-8 text-center text-muted-foreground">Loading Relationship Keeper...</CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container py-16">
        <SEO title="Relationship Keeper" description="A private couple journal, planner, and memory keeper for intentional dates and shared growth." url="/relationship-keeper" />
        <Card className="mx-auto max-w-3xl border-border/60 bg-card/95 shadow-xl">
          <CardHeader>
            <Badge className="w-fit bg-primary/10 text-primary">Private couple experience</Badge>
            <CardTitle className="text-4xl md:text-5xl">The Relationship Keeper</CardTitle>
            <CardDescription className="text-base md:text-lg">
              Sign in to create your private couple profile, save experiences, plan dates, and return later exactly where you left off.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 md:grid-cols-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border p-4">100 intentional experiences</div>
              <div className="rounded-2xl border p-4">Private memories and uploads</div>
              <div className="rounded-2xl border p-4">Personalized DMV recommendations</div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="gap-2">
                <a href="/login">Start Your Journey <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="/signup">Create Account</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const summary = bootstrap?.summary;
  const profile = bootstrap?.profile;
  const nextAction = bootstrap?.summary.upcomingDate ? "Your next date is coming up." : "Continue your journey with a planned experience or a new memory.";

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(192,132,252,0.09),transparent_30%),radial-gradient(circle_at_top_right,rgba(214,179,146,0.12),transparent_25%)]">
      <SEO
        title="The Relationship Keeper"
        description="A private couple journal, date planner, and memory keeper for intentional, healthy, culturally grounded relationship experiences."
        url="/relationship-keeper"
      />
      <section className="container py-8 md:py-12 space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Card className="border-border/70 shadow-xl shadow-primary/5 overflow-hidden">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge className="bg-primary/10 text-primary">Private couple dashboard</Badge>
                <Badge variant="outline">{profile?.accountTier ?? "free"} tier</Badge>
              </div>
              <CardTitle className="text-4xl md:text-5xl leading-tight">Build a relationship full of memories, not just routines.</CardTitle>
              <CardDescription className="text-base md:text-lg max-w-3xl">
                The Relationship Keeper helps couples intentionally connect through meaningful dates, conversations, wellness goals, cultural experiences, music, books, adventure, and reflection.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Complete", value: `${summary?.percentComplete ?? 0}%`, icon: Sparkles },
                { label: "Finished", value: String(summary?.completedCount ?? 0), icon: Star },
                { label: "Current streak", value: `${summary?.currentStreak ?? 0} days`, icon: Heart },
                { label: "Last activity", value: summary?.lastActivityAt ? new Date(summary.lastActivityAt).toLocaleDateString() : "None yet", icon: Clock3 },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-3xl border bg-background/80 p-4">
                    <div className="mb-3 h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xl font-semibold">{stat.value}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="border-border/70 shadow-xl shadow-amber-900/5">
            <CardHeader>
              <CardTitle>Welcome back</CardTitle>
              <CardDescription>
                {profile?.coupleDisplayName || `${profile?.primaryUserFirstName || "You"} and ${profile?.partnerFirstName || "your partner"}`}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-3xl bg-secondary/40 p-4">
                <p className="text-sm text-muted-foreground">Next recommended action</p>
                <p className="mt-1 text-lg font-semibold">{nextAction}</p>
              </div>
              <div className="rounded-3xl border p-4 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span>Monthly goal</span>
                  <Badge variant="outline">{relationshipMonthlyGoals.find((goal) => goal.id === profile?.monthlyGoalId)?.title || relationshipMonthlyGoals[0].title}</Badge>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Recommended experience</span>
                  <span className="font-medium text-right">{bootstrap?.recommendedNextExperience?.title || "Browse the catalog"}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Local idea</span>
                  <span className="font-medium text-right">{bootstrap?.recommendedLocalExperience?.title || "Add your location"}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap gap-2">
          {([
            ["overview", "Your Progress"],
            ["experiences", "100 Experiences"],
            ["planner", "Date Planner"],
            ["memories", "Memory Keeper"],
            ["checkins", "Check-Ins"],
            ["dmv", "DMV Guide"],
            ["admin", "Admin"]
          ] as Array<[TabKey, string]>).map(([key, label]) => (
            <Button key={key} variant={activeTab === key ? "default" : "outline"} onClick={() => setActiveTab(key)} className="rounded-full">
              {label}
            </Button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Couple profile</CardTitle>
                <CardDescription>Update the couple context that powers recommendations and planning.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <Field label="Primary user first name" value={profileForm.primaryUserFirstName} onChange={(value) => setProfileForm((current) => ({ ...current, primaryUserFirstName: value }))} />
                <Field label="Partner first name" value={profileForm.partnerFirstName} onChange={(value) => setProfileForm((current) => ({ ...current, partnerFirstName: value }))} />
                <Field label="Couple display name" value={profileForm.coupleDisplayName} onChange={(value) => setProfileForm((current) => ({ ...current, coupleDisplayName: value }))} />
                <Field label="City or region" value={profileForm.cityOrRegion} onChange={(value) => setProfileForm((current) => ({ ...current, cityOrRegion: value }))} />
                <Field label="Relationship start date" type="date" value={profileForm.relationshipStartDate} onChange={(value) => setProfileForm((current) => ({ ...current, relationshipStartDate: value }))} />
                <Field label="Anniversary date" type="date" value={profileForm.anniversaryDate} onChange={(value) => setProfileForm((current) => ({ ...current, anniversaryDate: value }))} />
                <Field label="Typical date budget" value={profileForm.typicalDateBudget} onChange={(value) => setProfileForm((current) => ({ ...current, typicalDateBudget: value }))} />
                <Field label="Preferred activity level" value={profileForm.preferredActivityLevel} onChange={(value) => setProfileForm((current) => ({ ...current, preferredActivityLevel: value }))} />
                <Field label="Adventure comfort" value={profileForm.adventureComfort} onChange={(value) => setProfileForm((current) => ({ ...current, adventureComfort: value }))} />
                <Field label="Accessibility needs" value={profileForm.accessibilityNeeds} onChange={(value) => setProfileForm((current) => ({ ...current, accessibilityNeeds: value }))} />
                <ListField label="Interests" value={joinList(profileForm.interests)} onChange={(value) => setProfileForm((current) => ({ ...current, interests: splitList(value) }))} />
                <ListField label="Dietary preferences" value={joinList(profileForm.dietaryPreferences)} onChange={(value) => setProfileForm((current) => ({ ...current, dietaryPreferences: splitList(value) }))} />
                <ListField label="Favorite music genres" value={joinList(profileForm.favoriteMusicGenres)} onChange={(value) => setProfileForm((current) => ({ ...current, favoriteMusicGenres: splitList(value) }))} />
                <ListField label="Favorite books or authors" value={joinList(profileForm.favoriteBooksOrAuthors)} onChange={(value) => setProfileForm((current) => ({ ...current, favoriteBooksOrAuthors: splitList(value) }))} />
                <ListField label="Favorite outings" value={joinList(profileForm.favoriteOutings)} onChange={(value) => setProfileForm((current) => ({ ...current, favoriteOutings: splitList(value) }))} />
                <Field label="Monthly goal id" value={profileForm.monthlyGoalId} onChange={(value) => setProfileForm((current) => ({ ...current, monthlyGoalId: value }))} />
                <div className="space-y-2 md:col-span-2">
                  <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={profileForm.wantsDmvRecommendations} onChange={(event) => setProfileForm((current) => ({ ...current, wantsDmvRecommendations: event.target.checked }))} />
                    <span>Show DMV recommendations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={profileForm.wantsWeeklySuggestions} onChange={(event) => setProfileForm((current) => ({ ...current, wantsWeeklySuggestions: event.target.checked }))} />
                    <span>Show weekly date suggestions</span>
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row">
                  <Button onClick={saveProfile} disabled={saving === "profile"} className="gap-2">
                    <Save className="h-4 w-4" /> Save profile
                  </Button>
                  <Button variant="outline" onClick={() => downloadJson("relationship-keeper-profile-draft.json", profileForm)} className="gap-2">
                    <Download className="h-4 w-4" /> Export draft
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your progress</CardTitle>
                  <CardDescription>{summary?.percentComplete ?? 0}% of the full collection complete</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${summary?.percentComplete ?? 0}%` }} />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {bootstrap?.summary.categoryProgress.map((item) => (
                      <div key={item.categoryId} className="rounded-2xl border p-3 text-sm">
                        <p className="font-medium">{item.category}</p>
                        <p className="text-muted-foreground">{item.completed}/{item.total} complete</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent memory</CardTitle>
                </CardHeader>
                <CardContent>
                  {summary?.recentMemory ? (
                    <div className="space-y-2">
                      <p className="font-semibold">{summary.recentMemory.title}</p>
                      <p className="text-sm text-muted-foreground">{summary.recentMemory.sharedReflection || summary.recentMemory.bestMoment || "A saved memory will appear here."}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">No memory saved yet. Complete an experience to start your journal.</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming date</CardTitle>
                </CardHeader>
                <CardContent>
                  {summary?.upcomingDate ? (
                    <div className="space-y-2">
                      <p className="font-semibold">{bootstrap?.experiences.find((experience) => experience.experienceId === summary.upcomingDate.experienceId)?.title}</p>
                      <p className="text-sm text-muted-foreground">{summary.upcomingDate.date} · {summary.upcomingDate.location || "No location yet"}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Plan your next date from the experiences tab.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "experiences" && (
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Browse the 100 experiences</CardTitle>
                <CardDescription>Choose a category, then pick an experience to save, plan, or mark complete.</CardDescription>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  <select className="h-11 rounded-2xl border bg-background px-3 text-sm" value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
                    <option value="all">All categories</option>
                    {relationshipCategories.map((category) => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                  <select className="h-11 rounded-2xl border bg-background px-3 text-sm" value={tagFilter} onChange={(event) => setTagFilter(event.target.value)}>
                    <option value="all">All statuses</option>
                    {relationshipStatuses.map((item) => (
                      <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                  </select>
                  <select className="h-11 rounded-2xl border bg-background px-3 text-sm" value={selectedExperienceId} onChange={(event) => setSelectedExperienceId(event.target.value)}>
                    {filteredExperiences.map((experience) => (
                      <option key={experience.experienceId} value={experience.experienceId}>{experience.title}</option>
                    ))}
                  </select>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                {filteredExperiences.map((experience) => {
                  const progress = progressByExperience.get(experience.experienceId);
                  return (
                    <button key={experience.experienceId} className={`text-left rounded-3xl border p-4 transition-all ${selectedExperienceId === experience.experienceId ? "border-primary bg-primary/5" : "hover:border-primary/40"}`} onClick={() => setSelectedExperienceId(experience.experienceId)}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Badge variant="outline" className="mb-2">{experience.category}</Badge>
                          <h3 className="text-lg font-semibold">{experience.title}</h3>
                        </div>
                        <Badge>{relationshipStatuses.find((item) => item.value === progress?.status)?.label || "Not Started"}</Badge>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{experience.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span>{experience.estimatedCost}</span>
                        <span>{experience.duration}</span>
                        <span>{experience.indoorOutdoor}</span>
                      </div>
                    </button>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="h-fit sticky top-6">
              <CardHeader>
                <CardTitle>{selectedExperience?.title}</CardTitle>
                <CardDescription>{selectedExperience?.category}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-muted-foreground">{selectedExperience?.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  <Meta label="Cost" value={selectedExperience?.estimatedCost} />
                  <Meta label="Duration" value={selectedExperience?.duration} />
                  <Meta label="Activity" value={selectedExperience?.activityLevel} />
                  <Meta label="Season" value={selectedExperience?.bestSeason} />
                </div>
                <div className="rounded-2xl border p-4 space-y-2">
                  <p className="font-medium">Suggested preparation</p>
                  <p className="text-muted-foreground">{selectedExperience?.suggestedPreparation}</p>
                </div>
                <div className="rounded-2xl border p-4 space-y-2">
                  <p className="font-medium">Conversation prompt</p>
                  <p className="text-muted-foreground">{selectedExperience?.conversationPrompt}</p>
                  <p className="font-medium mt-3">Reflection question</p>
                  <p className="text-muted-foreground">{selectedExperience?.reflectionQuestion}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button className="gap-2" onClick={() => {
                    setPlanForm((current) => ({ ...current, experienceId: selectedExperience?.experienceId ?? "" }));
                    setActiveTab("planner");
                  }}><Plus className="h-4 w-4" /> Add to Our Plans</Button>
                  <Button variant="outline" className="gap-2" onClick={() => saveProgress(selectedExperience?.experienceId ?? "", "completed", { completedDate: todayValue(), rating: 5 })}><CheckCircleIcon /> Mark Complete</Button>
                  <Button variant="outline" className="gap-2" onClick={() => saveProgress(selectedExperience?.experienceId ?? "", "interested")}>Save for Later</Button>
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <select className="h-11 w-full rounded-2xl border bg-background px-3 text-sm" value={progressByExperience.get(selectedExperience?.experienceId ?? "")?.status ?? "not_started"} onChange={(event) => saveProgress(selectedExperience?.experienceId ?? "", event.target.value)}>
                    {relationshipStatuses.map((item) => (
                      <option key={item.value} value={item.value}>{item.label}</option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "planner" && (
          <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Date planner</CardTitle>
                <CardDescription>Save a draft, add to calendar, edit later, or cancel a plan without losing the record.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <Field label="Experience" value={planForm.experienceId} onChange={(value) => setPlanForm((current) => ({ ...current, experienceId: value }))} type="select" options={relationshipExperiences.map((experience) => ({ value: experience.experienceId, label: experience.title }))} />
                <Field label="Date" type="date" value={planForm.date} onChange={(value) => setPlanForm((current) => ({ ...current, date: value }))} />
                <Field label="Start time" type="time" value={planForm.time} onChange={(value) => setPlanForm((current) => ({ ...current, time: value }))} />
                <Field label="Estimated budget" value={planForm.estimatedBudget} onChange={(value) => setPlanForm((current) => ({ ...current, estimatedBudget: value }))} />
                <Field label="Location" value={planForm.location} onChange={(value) => setPlanForm((current) => ({ ...current, location: value }))} />
                <Field label="Reservation link" value={planForm.reservationUrl} onChange={(value) => setPlanForm((current) => ({ ...current, reservationUrl: value }))} />
                <Field label="Transportation notes" value={planForm.transportationNotes} onChange={(value) => setPlanForm((current) => ({ ...current, transportationNotes: value }))} />
                <Field label="Food plan" value={planForm.foodPlan} onChange={(value) => setPlanForm((current) => ({ ...current, foodPlan: value }))} />
                <Field label="Reminder preference" value={planForm.reminderPreference} onChange={(value) => setPlanForm((current) => ({ ...current, reminderPreference: value }))} />
                <div className="md:col-span-2">
                  <Label className="mb-2 block">Notes</Label>
                  <Textarea value={planForm.notes} onChange={(event) => setPlanForm((current) => ({ ...current, notes: event.target.value }))} rows={4} />
                </div>
                <div className="md:col-span-2 flex flex-wrap gap-2">
                  <Button onClick={() => savePlan(false)} disabled={saving === "plan"} className="gap-2"><Save className="h-4 w-4" /> Save plan</Button>
                  <Button variant="outline" onClick={openGoogleCalendar}>Add to Calendar</Button>
                  <Button variant="outline" onClick={downloadIcs}>Download calendar file</Button>
                  <Button variant="ghost" onClick={() => savePlan(true)}>Save as draft</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming and saved plans</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {bootstrap?.plannedDates.length ? bootstrap.plannedDates.map((plan) => {
                  const experience = bootstrap.experiences.find((item) => item.experienceId === plan.experienceId);
                  return (
                    <div key={plan.plannedDateId} className="rounded-3xl border p-4 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold">{experience?.title || "Planned experience"}</p>
                          <p className="text-sm text-muted-foreground">{plan.date} · {plan.location || "No location yet"}</p>
                        </div>
                        <Badge variant="outline">{plan.status}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" onClick={() => {
                          setPlanForm(plan);
                          setActiveTab("planner");
                        }}>Edit plan</Button>
                        <Button size="sm" variant="outline" onClick={() => savePlan(false, "completed")}>Mark completed</Button>
                        <Button size="sm" variant="ghost" onClick={() => deletePlan(plan.plannedDateId)}>Cancel plan</Button>
                      </div>
                    </div>
                  );
                }) : <p className="text-sm text-muted-foreground">No planned dates yet.</p>}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "memories" && (
          <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
            <Card>
              <CardHeader>
                <CardTitle>Memory entry</CardTitle>
                <CardDescription>Record the details, upload photos, and edit the memory later when you want to add more.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <Field label="Experience" value={memoryForm.experienceId} onChange={(value) => setMemoryForm((current) => ({ ...current, experienceId: value }))} type="select" options={relationshipExperiences.map((experience) => ({ value: experience.experienceId, label: experience.title }))} />
                <Field label="Date completed" type="date" value={memoryForm.dateCompleted} onChange={(value) => setMemoryForm((current) => ({ ...current, dateCompleted: value }))} />
                <Field label="Title" value={memoryForm.title} onChange={(value) => setMemoryForm((current) => ({ ...current, title: value }))} />
                <Field label="Location" value={memoryForm.location} onChange={(value) => setMemoryForm((current) => ({ ...current, location: value }))} />
                <RangeField label="Overall rating" value={memoryForm.overallRating} onChange={(value) => setMemoryForm((current) => ({ ...current, overallRating: value }))} />
                <RangeField label="Connection rating" value={memoryForm.connectionRating} onChange={(value) => setMemoryForm((current) => ({ ...current, connectionRating: value }))} />
                <RangeField label="Fun rating" value={memoryForm.funRating} onChange={(value) => setMemoryForm((current) => ({ ...current, funRating: value }))} />
                <RangeField label="Food rating" value={memoryForm.foodRating} onChange={(value) => setMemoryForm((current) => ({ ...current, foodRating: value }))} />
                <RangeField label="Value rating" value={memoryForm.valueRating} onChange={(value) => setMemoryForm((current) => ({ ...current, valueRating: value }))} />
                <Field label="Activity level" value={memoryForm.activityLevel} onChange={(value) => setMemoryForm((current) => ({ ...current, activityLevel: value }))} />
                <Field label="Song" value={memoryForm.song} onChange={(value) => setMemoryForm((current) => ({ ...current, song: value }))} />
                <Field label="Quote" value={memoryForm.quote} onChange={(value) => setMemoryForm((current) => ({ ...current, quote: value }))} />
                <ListField label="Tags" value={joinList(memoryForm.tags)} onChange={(value) => setMemoryForm((current) => ({ ...current, tags: splitList(value) }))} />
                <div className="md:col-span-2 grid gap-4">
                  <TextField label="What we enjoyed most" value={memoryForm.enjoyedMost} onChange={(value) => setMemoryForm((current) => ({ ...current, enjoyedMost: value }))} />
                  <TextField label="What surprised us" value={memoryForm.surprisedUs} onChange={(value) => setMemoryForm((current) => ({ ...current, surprisedUs: value }))} />
                  <TextField label="What we learned about each other" value={memoryForm.learnedAboutEachOther} onChange={(value) => setMemoryForm((current) => ({ ...current, learnedAboutEachOther: value }))} />
                  <TextField label="Best moment" value={memoryForm.bestMoment} onChange={(value) => setMemoryForm((current) => ({ ...current, bestMoment: value }))} />
                  <TextField label="Shared reflection" value={memoryForm.sharedReflection} onChange={(value) => setMemoryForm((current) => ({ ...current, sharedReflection: value }))} />
                  <TextField label="Private note" value={memoryForm.privateNote} onChange={(value) => setMemoryForm((current) => ({ ...current, privateNote: value }))} />
                </div>
                <div className="md:col-span-2 flex items-center gap-2">
                  <input id="wouldRepeat" type="checkbox" checked={memoryForm.wouldRepeat} onChange={(event) => setMemoryForm((current) => ({ ...current, wouldRepeat: event.target.checked }))} />
                  <Label htmlFor="wouldRepeat">Would we do it again?</Label>
                </div>
                <div className="md:col-span-2 rounded-3xl border p-4 space-y-3">
                  <Label htmlFor="mediaUpload">Upload photos or keepsakes</Label>
                  <Input id="mediaUpload" type="file" accept="image/png,image/jpeg,image/heic,application/pdf" multiple onChange={(event) => setSelectedFiles(Array.from(event.target.files ?? []))} />
                  <p className="text-xs text-muted-foreground">JPG, PNG, HEIC, and PDF files are stored privately for your couple account.</p>
                  {selectedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedFiles.map((file) => (
                        <Badge key={file.name} variant="outline">{file.name}</Badge>
                      ))}
                    </div>
                  )}
                </div>
                <div className="md:col-span-2 flex flex-wrap gap-2">
                  <Button onClick={saveMemory} disabled={saving === "memory"} className="gap-2"><Save className="h-4 w-4" /> Save memory</Button>
                  <Button variant="outline" onClick={() => downloadJson("relationship-keeper-memory-draft.json", memoryForm)}>Save draft</Button>
                  <Button variant="ghost" onClick={() => setMemoryForm(emptyMemory())}>Clear form</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Saved memories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {bootstrap?.memories.length ? bootstrap.memories.map((memory) => (
                  <div key={memory.memoryId} className="rounded-3xl border p-4 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold">{memory.title}</p>
                        <p className="text-sm text-muted-foreground">{memory.dateCompleted} · {memory.location || "No location"}</p>
                      </div>
                      <Badge variant="outline">{memory.overallRating || 0}/5</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{memory.sharedReflection || memory.bestMoment || "Add your reflection when you are ready."}</p>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" onClick={() => {
                        setMemoryForm({
                          memoryId: memory.memoryId,
                          experienceId: memory.experienceId,
                          title: memory.title,
                          dateCompleted: memory.dateCompleted,
                          location: memory.location || "",
                          overallRating: memory.overallRating || 5,
                          connectionRating: memory.connectionRating || 5,
                          funRating: memory.funRating || 5,
                          foodRating: memory.foodRating || 5,
                          valueRating: memory.valueRating || 5,
                          activityLevel: memory.activityLevel || "Moderate",
                          enjoyedMost: memory.enjoyedMost || "",
                          surprisedUs: memory.surprisedUs || "",
                          learnedAboutEachOther: memory.learnedAboutEachOther || "",
                          bestMoment: memory.bestMoment || "",
                          wouldRepeat: Boolean(memory.wouldRepeat),
                          privateNote: memory.privateNote || "",
                          sharedReflection: memory.sharedReflection || "",
                          song: memory.song || "",
                          quote: memory.quote || "",
                          tags: parseArray(memory.tags),
                        });
                        setActiveTab("memories");
                      }}>Edit</Button>
                      <Button size="sm" variant="ghost" onClick={() => deleteMemory(memory.memoryId)}>Delete</Button>
                    </div>
                    {bootstrap.media.filter((item) => item.memoryId === memory.memoryId).length > 0 && (
                      <div className="grid gap-2 sm:grid-cols-2">
                        {bootstrap.media.filter((item) => item.memoryId === memory.memoryId).map((item) => (
                          <div key={item.mediaId} className="rounded-2xl border p-3 space-y-2">
                            {item.fileType.startsWith("image/") ? (
                              <img src={item.fileUrl} alt={item.caption || memory.title} className="h-32 w-full rounded-2xl object-cover" />
                            ) : (
                              <div className="h-32 rounded-2xl bg-secondary/40 flex items-center justify-center text-sm text-muted-foreground">Keepsake file</div>
                            )}
                            <p className="text-sm font-medium">{item.caption || "Private upload"}</p>
                            <div className="flex items-center justify-between gap-2">
                              <Button size="sm" variant="outline" onClick={() => {
                                setSelectedFiles([]);
                                setSelectedMediaId(item.mediaId);
                              }}>Replace</Button>
                              <Button size="sm" variant="ghost" onClick={() => deleteMedia(item.mediaId)}>Delete</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )) : <p className="text-sm text-muted-foreground">No memories yet. Save your first date here.</p>}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "checkins" && (
          <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Relationship check-in</CardTitle>
                <CardDescription>A private weekly or monthly reflection that tracks connection without turning this into therapy.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <Field label="Check-in date" type="date" value={checkInForm.checkInDate} onChange={(value) => setCheckInForm((current) => ({ ...current, checkInDate: value }))} />
                <RangeField label="Connection" value={checkInForm.connectionScore} onChange={(value) => setCheckInForm((current) => ({ ...current, connectionScore: value }))} max={10} />
                <RangeField label="Communication" value={checkInForm.communicationScore} onChange={(value) => setCheckInForm((current) => ({ ...current, communicationScore: value }))} max={10} />
                <RangeField label="Fun" value={checkInForm.funScore} onChange={(value) => setCheckInForm((current) => ({ ...current, funScore: value }))} max={10} />
                <RangeField label="Affection" value={checkInForm.affectionScore} onChange={(value) => setCheckInForm((current) => ({ ...current, affectionScore: value }))} max={10} />
                <RangeField label="Support" value={checkInForm.supportScore} onChange={(value) => setCheckInForm((current) => ({ ...current, supportScore: value }))} max={10} />
                <RangeField label="Stress" value={checkInForm.stressScore} onChange={(value) => setCheckInForm((current) => ({ ...current, stressScore: value }))} max={10} />
                <TextField label="What are we grateful for?" value={checkInForm.gratitude} onChange={(value) => setCheckInForm((current) => ({ ...current, gratitude: value }))} />
                <TextField label="What do we need more of?" value={checkInForm.needs} onChange={(value) => setCheckInForm((current) => ({ ...current, needs: value }))} />
                <TextField label="What felt difficult?" value={checkInForm.discussionNotes} onChange={(value) => setCheckInForm((current) => ({ ...current, discussionNotes: value }))} />
                <TextField label="What should we plan next?" value={checkInForm.nextGoal} onChange={(value) => setCheckInForm((current) => ({ ...current, nextGoal: value }))} />
                <div className="md:col-span-2 flex flex-wrap gap-2">
                  <Button onClick={saveCheckIn} disabled={saving === "checkin"} className="gap-2"><Save className="h-4 w-4" /> Save check-in</Button>
                  <Button variant="outline" onClick={() => downloadJson("relationship-keeper-checkin-draft.json", checkInForm)}>Save draft</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Check-in history</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {bootstrap?.checkIns.length ? bootstrap.checkIns.map((checkIn) => (
                  <div key={checkIn.checkInId} className="rounded-3xl border p-4 space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold">{checkIn.checkInDate}</p>
                      <Badge variant="outline">Stress {checkIn.stressScore || 0}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">Connection {checkIn.connectionScore || 0} · Communication {checkIn.communicationScore || 0} · Fun {checkIn.funScore || 0}</div>
                    <p className="text-sm">{checkIn.gratitude || "No gratitude note yet."}</p>
                  </div>
                )) : <p className="text-sm text-muted-foreground">No check-ins yet.</p>}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "dmv" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>DMV local experience layer</CardTitle>
                <CardDescription>Structured recommendations for Washington, DC, Prince George's County, Montgomery County, Northern Virginia, Baltimore, Annapolis, National Harbor, and Harpers Ferry.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 md:grid-cols-3">
                <select className="h-11 rounded-2xl border bg-background px-3 text-sm" value={regionFilter} onChange={(event) => setRegionFilter(event.target.value)}>
                  {regionOptions.map((region) => <option key={region} value={region}>{region === "all" ? "All regions" : region}</option>)}
                </select>
                <select className="h-11 rounded-2xl border bg-background px-3 text-sm" value={tagFilter} onChange={(event) => setTagFilter(event.target.value)}>
                  {tagOptions.map((tag) => <option key={tag} value={tag}>{tag === "all" ? "All tags" : tag}</option>)}
                </select>
                <Button variant="outline" onClick={() => setRegionFilter("all")}>Reset filters</Button>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {dmvRecommendations.filter((item) => (regionFilter === "all" || item.region === regionFilter) && (tagFilter === "all" || item.tags.includes(tagFilter))).map((item) => (
                <Card key={item.id} className="border-border/70">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Badge variant="outline" className="mb-2">{item.region}</Badge>
                        <CardTitle>{item.title}</CardTitle>
                      </div>
                      <Badge>{item.priceLabel}</Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>{item.accessibility}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "admin" && (
          <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
            <Card>
              <CardHeader>
                <CardTitle>Admin tools</CardTitle>
                <CardDescription>Manage featured activities and monitor aggregate usage without browsing private journals.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  <div className="rounded-2xl border p-4">
                    <p className="text-sm text-muted-foreground">Progress updates</p>
                    <p className="text-2xl font-semibold">{summary?.completedCount ?? 0}</p>
                  </div>
                  <div className="rounded-2xl border p-4">
                    <p className="text-sm text-muted-foreground">Top categories</p>
                    <p className="text-2xl font-semibold">{bootstrap?.summary.categoryProgress[0]?.category || "All"}</p>
                  </div>
                  <div className="rounded-2xl border p-4">
                    <p className="text-sm text-muted-foreground">Aggregate reach</p>
                    <p className="text-2xl font-semibold">{summary?.totalCount ?? relationshipExperiences.length}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button onClick={saveAdminExperience}>Save selected experience</Button>
                  <Button variant="outline" onClick={exportData}>Export user data</Button>
                </div>
                <Button variant="ghost" className="text-destructive justify-start px-0" onClick={deleteAccount}>
                  Delete personal data
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Selected experience editor</CardTitle>
                <CardDescription>Update the current catalog record and re-flag featured entries.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <Field label="Experience" value={selectedExperienceId} onChange={setSelectedExperienceId} type="select" options={relationshipExperiences.map((experience) => ({ value: experience.experienceId, label: experience.title }))} />
                <TextField label="Title" value={selectedExperience?.title ?? ""} onChange={() => {}} readOnly />
                <TextField label="Description" value={selectedExperience?.description ?? ""} onChange={() => {}} readOnly />
                <p className="text-muted-foreground">This view is intentionally limited so staff do not casually browse private couple journal data.</p>
              </CardContent>
            </Card>
          </div>
        )}
      </section>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", options }: { label: string; value: string; onChange: (value: string) => void; type?: string; options?: Array<{ value: string; label: string }> }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {type === "select" && options ? (
        <select className="h-11 w-full rounded-2xl border bg-background px-3 text-sm" value={value} onChange={(event) => onChange(event.target.value)}>
          {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      ) : (
        <Input type={type} value={value} onChange={(event) => onChange(event.target.value)} />
      )}
    </div>
  );
}

function TextField({ label, value, onChange, readOnly = false }: { label: string; value: string; onChange: (value: string) => void; readOnly?: boolean }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Textarea value={value} onChange={(event) => onChange(event.target.value)} readOnly={readOnly} rows={3} />
    </div>
  );
}

function ListField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Separate items with commas" />
    </div>
  );
}

function RangeField({ label, value, onChange, max = 5 }: { label: string; value: number; onChange: (value: number) => void; max?: number }) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center justify-between gap-2"><span>{label}</span><span className="text-muted-foreground">{value}/{max}</span></Label>
      <input type="range" min="1" max={String(max)} value={String(value)} onChange={(event) => onChange(Number(event.target.value))} className="w-full" />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string | undefined }) {
  return (
    <div className="rounded-2xl border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium">{value || "—"}</p>
    </div>
  );
}

function CheckCircleIcon() {
  return <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-current text-[10px] leading-none">✓</span>;
}
