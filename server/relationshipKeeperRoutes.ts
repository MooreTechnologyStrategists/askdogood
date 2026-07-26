import type { Express, Request, Response } from "express";
import { and, desc, eq } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "./db";
import { sdk } from "./_core/sdk";
import {
  relationshipCategories,
  relationshipCheckInQuestions,
  relationshipExperiences as sharedRelationshipExperiences,
  relationshipHabitOptions,
  relationshipMonthlyGoals,
  relationshipProfileDefaults,
  relationshipStatuses,
  dmvRecommendations,
} from "../shared/relationship-keeper";
import {
  relationshipCoupleProfiles,
  relationshipExperiences,
  relationshipExperienceProgress,
  relationshipMemories,
  relationshipMedia,
  relationshipCheckIns,
  relationshipPlannedDates,
} from "../drizzle/schema";

const profileSchema = z.object({
  primaryUserFirstName: z.string().optional().default(""),
  partnerFirstName: z.string().optional().default(""),
  coupleDisplayName: z.string().optional().default(""),
  relationshipStartDate: z.string().optional().default(""),
  anniversaryDate: z.string().optional().default(""),
  cityOrRegion: z.string().optional().default(""),
  interests: z.array(z.string()).optional().default([]),
  preferredActivityLevel: z.string().optional().default("Moderate"),
  dietaryPreferences: z.array(z.string()).optional().default([]),
  accessibilityNeeds: z.string().optional().default(""),
  typicalDateBudget: z.string().optional().default("$25-$50"),
  favoriteMusicGenres: z.array(z.string()).optional().default([]),
  favoriteBooksOrAuthors: z.array(z.string()).optional().default([]),
  favoriteOutings: z.array(z.string()).optional().default([]),
  adventureComfort: z.string().optional().default("Balanced"),
  wantsDmvRecommendations: z.boolean().optional().default(true),
  wantsWeeklySuggestions: z.boolean().optional().default(true),
  monthlyGoalId: z.string().optional().default("walking-dates"),
  accountTier: z.enum(["free", "premium"]).optional().default("free"),
});

const progressSchema = z.object({
  experienceId: z.string(),
  status: z.enum([
    "not_started",
    "interested",
    "planned",
    "completed",
    "skipped",
    "favorite",
    "want_to_repeat",
  ]),
  plannedDate: z.string().optional().nullable(),
  completedDate: z.string().optional().nullable(),
  rating: z.number().int().min(1).max(5).optional().nullable(),
  favorite: z.boolean().optional().default(false),
  repeatRequested: z.boolean().optional().default(false),
  notes: z.string().optional().default(""),
});

const plannedDateSchema = z.object({
  plannedDateId: z.number().int().optional(),
  experienceId: z.string(),
  date: z.string(),
  time: z.string().optional().default(""),
  location: z.string().optional().default(""),
  estimatedBudget: z.string().optional().default(""),
  reservationUrl: z.string().optional().default(""),
  transportationNotes: z.string().optional().default(""),
  foodPlan: z.string().optional().default(""),
  notes: z.string().optional().default(""),
  reminderPreference: z.string().optional().default("Email"),
  status: z.enum(["draft", "planned", "completed", "cancelled"]).optional().default("draft"),
});

const memorySchema = z.object({
  memoryId: z.number().int().optional(),
  experienceId: z.string(),
  title: z.string(),
  dateCompleted: z.string(),
  location: z.string().optional().default(""),
  overallRating: z.number().int().min(1).max(5).optional().nullable(),
  connectionRating: z.number().int().min(1).max(5).optional().nullable(),
  funRating: z.number().int().min(1).max(5).optional().nullable(),
  foodRating: z.number().int().min(1).max(5).optional().nullable(),
  valueRating: z.number().int().min(1).max(5).optional().nullable(),
  activityLevel: z.string().optional().default("Moderate"),
  enjoyedMost: z.string().optional().default(""),
  surprisedUs: z.string().optional().default(""),
  learnedAboutEachOther: z.string().optional().default(""),
  bestMoment: z.string().optional().default(""),
  wouldRepeat: z.boolean().optional().default(false),
  privateNote: z.string().optional().default(""),
  sharedReflection: z.string().optional().default(""),
  song: z.string().optional().default(""),
  quote: z.string().optional().default(""),
  tags: z.array(z.string()).optional().default([]),
});

const mediaSchema = z.object({
  mediaId: z.number().int().optional(),
  memoryId: z.number().int().optional().nullable(),
  fileData: z.string(),
  fileType: z.string(),
  caption: z.string().optional().default(""),
  location: z.string().optional().default(""),
  mediaDate: z.string().optional().default(""),
  isCoverPhoto: z.boolean().optional().default(false),
  privacySetting: z.enum(["private", "shared"]).optional().default("private"),
});

const checkInSchema = z.object({
  checkInDate: z.string(),
  connectionScore: z.number().int().min(1).max(10).optional().nullable(),
  communicationScore: z.number().int().min(1).max(10).optional().nullable(),
  funScore: z.number().int().min(1).max(10).optional().nullable(),
  affectionScore: z.number().int().min(1).max(10).optional().nullable(),
  supportScore: z.number().int().min(1).max(10).optional().nullable(),
  stressScore: z.number().int().min(1).max(10).optional().nullable(),
  gratitude: z.string().optional().default(""),
  needs: z.string().optional().default(""),
  discussionNotes: z.string().optional().default(""),
  nextGoal: z.string().optional().default(""),
});

const adminExperienceSchema = z.object({
  experienceId: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  estimatedCost: z.string().optional(),
  duration: z.string().optional(),
  activityLevel: z.string().optional(),
  indoorOutdoor: z.string().optional(),
  bestSeason: z.string().optional(),
  suggestedPreparation: z.string().optional(),
  optionalFoodPairing: z.string().optional(),
  conversationPrompt: z.string().optional(),
  reflectionQuestion: z.string().optional(),
  isActive: z.boolean().optional(),
  featured: z.boolean().optional(),
});

function parseList(value: string | null | undefined): string[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
}

function toListText(value: string[]): string {
  return JSON.stringify(value);
}

function toProfileResponse(profile: typeof relationshipCoupleProfiles.$inferSelect | null | undefined) {
  if (!profile) {
    return null;
  }

  return {
    ...profile,
    interests: parseList(profile.interests),
    dietaryPreferences: parseList(profile.dietaryPreferences),
    favoriteMusicGenres: parseList(profile.favoriteMusicGenres),
    favoriteBooksOrAuthors: parseList(profile.favoriteBooksOrAuthors),
    favoriteOutings: parseList(profile.favoriteOutings),
  };
}

function selectRecommendation(profile: ReturnType<typeof toProfileResponse>) {
  if (!profile) {
    return dmvRecommendations[0] ?? null;
  }

  const interests = new Set(
    [
      ...profile.interests,
      ...profile.favoriteOutings,
      ...profile.favoriteMusicGenres,
      ...profile.favoriteBooksOrAuthors,
    ].map((value) => value.toLowerCase())
  );

  const region = (profile.cityOrRegion || "").toLowerCase();
  const preferred = dmvRecommendations.filter((item) => {
    const regionMatch = region ? item.region.toLowerCase().includes(region) || region.includes(item.region.toLowerCase()) : true;
    const interestMatch = item.tags.some((tag) => interests.has(tag.toLowerCase()));
    return regionMatch || interestMatch;
  });

  return preferred[0] ?? dmvRecommendations[0] ?? null;
}

function getCurrentStreak(dates: string[]): number {
  const uniqueDates = Array.from(new Set(dates.filter(Boolean))).sort((a, b) => b.localeCompare(a));
  if (uniqueDates.length === 0) return 0;

  let streak = 1;
  let previous = new Date(`${uniqueDates[0]}T00:00:00`);

  for (let index = 1; index < uniqueDates.length; index += 1) {
    const current = new Date(`${uniqueDates[index]}T00:00:00`);
    const diff = Math.round((previous.getTime() - current.getTime()) / (1000 * 60 * 60 * 24));
    if (diff === 1) {
      streak += 1;
      previous = current;
    } else {
      break;
    }
  }

  return streak;
}

async function authenticate(req: Request, res: Response) {
  try {
    return await sdk.authenticateRequest(req);
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
    return null;
  }
}

async function ensureExperiencesSeeded() {
  const connection = await getDb();
  if (!connection) {
    throw new Error("Database unavailable");
  }

  const existing = await connection.select({ id: relationshipExperiences.id }).from(relationshipExperiences).limit(1);
  if (existing.length > 0) {
    return connection;
  }

  await connection.insert(relationshipExperiences).values(
    sharedRelationshipExperiences.map((experience, index) => ({
      experienceId: experience.experienceId,
      title: experience.title,
      categoryId: experience.categoryId,
      category: experience.category,
      description: experience.description,
      estimatedCost: experience.estimatedCost,
      duration: experience.duration,
      activityLevel: experience.activityLevel,
      indoorOutdoor: experience.indoorOutdoor,
      bestSeason: experience.bestSeason,
      suggestedPreparation: experience.suggestedPreparation,
      optionalFoodPairing: experience.optionalFoodPairing,
      conversationPrompt: experience.conversationPrompt,
      reflectionQuestion: experience.reflectionQuestion,
      isActive: experience.isActive,
      featured: index < 10,
    }))
  );

  return connection;
}

async function getCoupleProfile(connection: Awaited<ReturnType<typeof getDb>>, ownerUserId: number) {
  const rows = await connection
    .select()
    .from(relationshipCoupleProfiles)
    .where(eq(relationshipCoupleProfiles.ownerUserId, ownerUserId))
    .limit(1);

  return rows[0] ?? null;
}

function coerceMaybeNumber(value: number | null | undefined) {
  if (value === null || value === undefined) return null;
  return Number.isFinite(value) ? value : null;
}

export function registerRelationshipKeeperRoutes(app: Express) {
  app.get("/api/relationship-keeper/bootstrap", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      const progress = await connection.select().from(relationshipExperienceProgress).where(eq(relationshipExperienceProgress.coupleId, profile?.coupleId ?? 0));
      const memories = await connection.select().from(relationshipMemories).where(eq(relationshipMemories.coupleId, profile?.coupleId ?? 0)).orderBy(desc(relationshipMemories.updatedAt));
      const media = await connection.select().from(relationshipMedia).where(eq(relationshipMedia.coupleId, profile?.coupleId ?? 0)).orderBy(desc(relationshipMedia.createdAt));
      const checkIns = await connection.select().from(relationshipCheckIns).where(eq(relationshipCheckIns.coupleId, profile?.coupleId ?? 0)).orderBy(desc(relationshipCheckIns.checkInDate));
      const plannedDates = await connection.select().from(relationshipPlannedDates).where(eq(relationshipPlannedDates.coupleId, profile?.coupleId ?? 0)).orderBy(desc(relationshipPlannedDates.updatedAt));

      const completedDates = progress
        .filter((item) => item.status === "completed")
        .map((item) => item.completedDate ?? item.plannedDate ?? "")
        .filter(Boolean);

      const completedCount = progress.filter((item) => item.status === "completed").length;
      const totalCount = sharedRelationshipExperiences.length;
      const percentComplete = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
      const currentStreak = getCurrentStreak(completedDates);
      const recentMemory = memories[0] ?? null;
      const upcomingDate = plannedDates.find((item) => item.status !== "cancelled" && item.status !== "completed") ?? null;
      const savedFavorites = progress.filter((item) => item.favorite || item.status === "favorite");
      const nextExperience = sharedRelationshipExperiences.find((experience) => !progress.some((item) => item.experienceId === experience.experienceId && item.status === "completed")) ?? sharedRelationshipExperiences[0] ?? null;
      const categoryProgress = relationshipCategories.map((category) => {
        const categoryExperiences = sharedRelationshipExperiences.filter((experience) => experience.categoryId === category.id);
        const categoryCompleted = progress.filter((item) => categoryExperiences.some((experience) => experience.experienceId === item.experienceId && item.status === "completed")).length;
        return {
          categoryId: category.id,
          category: category.name,
          completed: categoryCompleted,
          total: categoryExperiences.length,
        };
      });

      res.json({
        user,
        profile: toProfileResponse(profile),
        experiences: sharedRelationshipExperiences,
        progress,
        memories,
        media,
        checkIns,
        plannedDates,
        categories: relationshipCategories,
        relationshipStatuses,
        relationshipMonthlyGoals,
        relationshipHabitOptions,
        relationshipCheckInQuestions,
        dmvRecommendations: profile?.wantsDmvRecommendations === false ? [] : dmvRecommendations,
        recommendedNextExperience: nextExperience,
        recommendedLocalExperience: selectRecommendation(toProfileResponse(profile)),
        summary: {
          completedCount,
          totalCount,
          percentComplete,
          currentStreak,
          recentMemory,
          upcomingDate,
          savedFavorites,
          categoryProgress,
          lastActivityAt: memories[0]?.updatedAt ?? plannedDates[0]?.updatedAt ?? checkIns[0]?.updatedAt ?? progress[0]?.updatedAt ?? null,
        },
      });
    } catch (error) {
      console.error("[Relationship Keeper] bootstrap failed", error);
      res.status(500).json({ error: "Unable to load relationship keeper data" });
    }
  });

  app.post("/api/relationship-keeper/profile", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const parsed = profileSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    try {
      const connection = await ensureExperiencesSeeded();
      const existing = await getCoupleProfile(connection, user.id);
      const payload = parsed.data;
      const values = {
        ownerUserId: user.id,
        primaryUserFirstName: payload.primaryUserFirstName || null,
        partnerFirstName: payload.partnerFirstName || null,
        coupleDisplayName: payload.coupleDisplayName || null,
        relationshipStartDate: payload.relationshipStartDate || null,
        anniversaryDate: payload.anniversaryDate || null,
        cityOrRegion: payload.cityOrRegion || null,
        interests: toListText(payload.interests),
        preferredActivityLevel: payload.preferredActivityLevel || null,
        dietaryPreferences: toListText(payload.dietaryPreferences),
        accessibilityNeeds: payload.accessibilityNeeds || null,
        typicalDateBudget: payload.typicalDateBudget || null,
        favoriteMusicGenres: toListText(payload.favoriteMusicGenres),
        favoriteBooksOrAuthors: toListText(payload.favoriteBooksOrAuthors),
        favoriteOutings: toListText(payload.favoriteOutings),
        adventureComfort: payload.adventureComfort || null,
        wantsDmvRecommendations: payload.wantsDmvRecommendations,
        wantsWeeklySuggestions: payload.wantsWeeklySuggestions,
        monthlyGoalId: payload.monthlyGoalId || null,
        accountTier: payload.accountTier,
      };

      if (existing) {
        await connection.update(relationshipCoupleProfiles).set(values).where(eq(relationshipCoupleProfiles.coupleId, existing.coupleId));
      } else {
        await connection.insert(relationshipCoupleProfiles).values(values);
      }

      const profile = await getCoupleProfile(connection, user.id);
      res.json({ success: true, profile: toProfileResponse(profile) });
    } catch (error) {
      console.error("[Relationship Keeper] profile save failed", error);
      res.status(500).json({ error: "Unable to save profile" });
    }
  });

  app.post("/api/relationship-keeper/progress", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const parsed = progressSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      if (!profile) {
        res.status(400).json({ error: "Complete your couple profile first" });
        return;
      }

      const existing = await connection
        .select()
        .from(relationshipExperienceProgress)
        .where(
          and(
            eq(relationshipExperienceProgress.coupleId, profile.coupleId),
            eq(relationshipExperienceProgress.experienceId, parsed.data.experienceId)
          )
        )
        .limit(1);

      const values = {
        coupleId: profile.coupleId,
        experienceId: parsed.data.experienceId,
        status: parsed.data.status,
        plannedDate: parsed.data.plannedDate || null,
        completedDate: parsed.data.completedDate || null,
        rating: coerceMaybeNumber(parsed.data.rating),
        favorite: parsed.data.favorite,
        repeatRequested: parsed.data.repeatRequested,
        notes: parsed.data.notes || null,
      };

      if (existing.length > 0) {
        await connection.update(relationshipExperienceProgress).set(values).where(eq(relationshipExperienceProgress.progressId, existing[0].progressId));
      } else {
        await connection.insert(relationshipExperienceProgress).values(values);
      }

      const updated = await connection
        .select()
        .from(relationshipExperienceProgress)
        .where(
          and(
            eq(relationshipExperienceProgress.coupleId, profile.coupleId),
            eq(relationshipExperienceProgress.experienceId, parsed.data.experienceId)
          )
        )
        .limit(1);

      res.json({ success: true, progress: updated[0] ?? null });
    } catch (error) {
      console.error("[Relationship Keeper] progress save failed", error);
      res.status(500).json({ error: "Unable to save progress" });
    }
  });

  app.post("/api/relationship-keeper/plans", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const parsed = plannedDateSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      if (!profile) {
        res.status(400).json({ error: "Complete your couple profile first" });
        return;
      }

      const values = {
        coupleId: profile.coupleId,
        experienceId: parsed.data.experienceId,
        date: parsed.data.date,
        time: parsed.data.time || null,
        location: parsed.data.location || null,
        estimatedBudget: parsed.data.estimatedBudget || null,
        reservationUrl: parsed.data.reservationUrl || null,
        transportationNotes: parsed.data.transportationNotes || null,
        foodPlan: parsed.data.foodPlan || null,
        notes: parsed.data.notes || null,
        reminderPreference: parsed.data.reminderPreference || null,
        status: parsed.data.status,
      };

      if (parsed.data.plannedDateId) {
        await connection.update(relationshipPlannedDates).set(values).where(eq(relationshipPlannedDates.plannedDateId, parsed.data.plannedDateId));
      } else {
        const result = await connection.insert(relationshipPlannedDates).values(values);
        const insertId = Number((result as { insertId?: number }).insertId ?? 0);
        parsed.data.plannedDateId = Number.isFinite(insertId) && insertId > 0 ? insertId : undefined;
      }

      const plannedDates = await connection.select().from(relationshipPlannedDates).where(eq(relationshipPlannedDates.coupleId, profile.coupleId)).orderBy(desc(relationshipPlannedDates.updatedAt));
      const savedPlan = parsed.data.plannedDateId
        ? plannedDates.find((item) => item.plannedDateId === parsed.data.plannedDateId) ?? null
        : plannedDates[0] ?? null;
      res.json({ success: true, plannedDate: savedPlan, plannedDates });
    } catch (error) {
      console.error("[Relationship Keeper] plan save failed", error);
      res.status(500).json({ error: "Unable to save plan" });
    }
  });

  app.post("/api/relationship-keeper/memories", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const parsed = memorySchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      if (!profile) {
        res.status(400).json({ error: "Complete your couple profile first" });
        return;
      }

      const values = {
        coupleId: profile.coupleId,
        experienceId: parsed.data.experienceId,
        title: parsed.data.title,
        dateCompleted: parsed.data.dateCompleted,
        location: parsed.data.location || null,
        overallRating: coerceMaybeNumber(parsed.data.overallRating),
        connectionRating: coerceMaybeNumber(parsed.data.connectionRating),
        funRating: coerceMaybeNumber(parsed.data.funRating),
        foodRating: coerceMaybeNumber(parsed.data.foodRating),
        valueRating: coerceMaybeNumber(parsed.data.valueRating),
        activityLevel: parsed.data.activityLevel || null,
        enjoyedMost: parsed.data.enjoyedMost || null,
        surprisedUs: parsed.data.surprisedUs || null,
        learnedAboutEachOther: parsed.data.learnedAboutEachOther || null,
        bestMoment: parsed.data.bestMoment || null,
        wouldRepeat: parsed.data.wouldRepeat,
        privateNote: parsed.data.privateNote || null,
        sharedReflection: parsed.data.sharedReflection || null,
        song: parsed.data.song || null,
        quote: parsed.data.quote || null,
        tags: toListText(parsed.data.tags),
      };

      if (parsed.data.memoryId) {
        await connection.update(relationshipMemories).set(values).where(eq(relationshipMemories.memoryId, parsed.data.memoryId));
      } else {
        const result = await connection.insert(relationshipMemories).values(values);
        const insertId = Number((result as { insertId?: number }).insertId ?? 0);
        parsed.data.memoryId = Number.isFinite(insertId) && insertId > 0 ? insertId : undefined;
      }

      const memories = await connection.select().from(relationshipMemories).where(eq(relationshipMemories.coupleId, profile.coupleId)).orderBy(desc(relationshipMemories.updatedAt));
      const savedMemory = parsed.data.memoryId
        ? memories.find((item) => item.memoryId === parsed.data.memoryId) ?? null
        : memories[0] ?? null;
      res.json({ success: true, memory: savedMemory, memories });
    } catch (error) {
      console.error("[Relationship Keeper] memory save failed", error);
      res.status(500).json({ error: "Unable to save memory" });
    }
  });

  app.post("/api/relationship-keeper/media", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const parsed = mediaSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      if (!profile) {
        res.status(400).json({ error: "Complete your couple profile first" });
        return;
      }

      const values = {
        memoryId: parsed.data.memoryId ?? null,
        coupleId: profile.coupleId,
        fileUrl: parsed.data.fileData,
        fileType: parsed.data.fileType,
        caption: parsed.data.caption || null,
        location: parsed.data.location || null,
        mediaDate: parsed.data.mediaDate || null,
        isCoverPhoto: parsed.data.isCoverPhoto,
        privacySetting: parsed.data.privacySetting,
      };

      if (parsed.data.mediaId) {
        await connection.update(relationshipMedia).set(values).where(eq(relationshipMedia.mediaId, parsed.data.mediaId));
      } else {
        const result = await connection.insert(relationshipMedia).values(values);
        const insertId = Number((result as { insertId?: number }).insertId ?? 0);
        parsed.data.mediaId = Number.isFinite(insertId) && insertId > 0 ? insertId : undefined;
      }

      const media = await connection.select().from(relationshipMedia).where(eq(relationshipMedia.coupleId, profile.coupleId)).orderBy(desc(relationshipMedia.createdAt));
      const savedMedia = parsed.data.mediaId
        ? media.find((item) => item.mediaId === parsed.data.mediaId) ?? null
        : media[0] ?? null;
      res.json({ success: true, media: savedMedia, mediaItems: media });
    } catch (error) {
      console.error("[Relationship Keeper] media save failed", error);
      res.status(500).json({ error: "Unable to save media" });
    }
  });

  app.post("/api/relationship-keeper/checkins", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const parsed = checkInSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      if (!profile) {
        res.status(400).json({ error: "Complete your couple profile first" });
        return;
      }

      await connection.insert(relationshipCheckIns).values({
        coupleId: profile.coupleId,
        checkInDate: parsed.data.checkInDate,
        connectionScore: coerceMaybeNumber(parsed.data.connectionScore),
        communicationScore: coerceMaybeNumber(parsed.data.communicationScore),
        funScore: coerceMaybeNumber(parsed.data.funScore),
        affectionScore: coerceMaybeNumber(parsed.data.affectionScore),
        supportScore: coerceMaybeNumber(parsed.data.supportScore),
        stressScore: coerceMaybeNumber(parsed.data.stressScore),
        gratitude: parsed.data.gratitude || null,
        needs: parsed.data.needs || null,
        discussionNotes: parsed.data.discussionNotes || null,
        nextGoal: parsed.data.nextGoal || null,
      });

      const checkIns = await connection.select().from(relationshipCheckIns).where(eq(relationshipCheckIns.coupleId, profile.coupleId)).orderBy(desc(relationshipCheckIns.createdAt));
      res.json({ success: true, checkIns });
    } catch (error) {
      console.error("[Relationship Keeper] check-in save failed", error);
      res.status(500).json({ error: "Unable to save check-in" });
    }
  });

  app.post("/api/relationship-keeper/admin/experiences", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;
    if (user.role !== "admin") {
      res.status(403).json({ error: "Admin access required" });
      return;
    }

    const parsed = adminExperienceSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    try {
      const connection = await ensureExperiencesSeeded();
      await connection.update(relationshipExperiences).set({
        title: parsed.data.title,
        description: parsed.data.description,
        estimatedCost: parsed.data.estimatedCost,
        duration: parsed.data.duration,
        activityLevel: parsed.data.activityLevel,
        indoorOutdoor: parsed.data.indoorOutdoor,
        bestSeason: parsed.data.bestSeason,
        suggestedPreparation: parsed.data.suggestedPreparation,
        optionalFoodPairing: parsed.data.optionalFoodPairing,
        conversationPrompt: parsed.data.conversationPrompt,
        reflectionQuestion: parsed.data.reflectionQuestion,
        isActive: parsed.data.isActive,
        featured: parsed.data.featured,
      }).where(eq(relationshipExperiences.experienceId, parsed.data.experienceId));

      const experiences = await connection.select().from(relationshipExperiences).orderBy(desc(relationshipExperiences.updatedAt));
      res.json({ success: true, experiences });
    } catch (error) {
      console.error("[Relationship Keeper] admin experience save failed", error);
      res.status(500).json({ error: "Unable to save experience" });
    }
  });

  app.get("/api/relationship-keeper/export", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      if (!profile) {
        res.status(400).json({ error: "Complete your couple profile first" });
        return;
      }

      const progress = await connection.select().from(relationshipExperienceProgress).where(eq(relationshipExperienceProgress.coupleId, profile.coupleId));
      const memories = await connection.select().from(relationshipMemories).where(eq(relationshipMemories.coupleId, profile.coupleId));
      const media = await connection.select().from(relationshipMedia).where(eq(relationshipMedia.coupleId, profile.coupleId));
      const checkIns = await connection.select().from(relationshipCheckIns).where(eq(relationshipCheckIns.coupleId, profile.coupleId));
      const plannedDates = await connection.select().from(relationshipPlannedDates).where(eq(relationshipPlannedDates.coupleId, profile.coupleId));

      res.json({
        profile: toProfileResponse(profile),
        progress,
        memories,
        media,
        checkIns,
        plannedDates,
      });
    } catch (error) {
      console.error("[Relationship Keeper] export failed", error);
      res.status(500).json({ error: "Unable to export data" });
    }
  });

  app.delete("/api/relationship-keeper/account", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      if (!profile) {
        res.json({ success: true });
        return;
      }

      await connection.delete(relationshipMedia).where(eq(relationshipMedia.coupleId, profile.coupleId));
      await connection.delete(relationshipMemories).where(eq(relationshipMemories.coupleId, profile.coupleId));
      await connection.delete(relationshipCheckIns).where(eq(relationshipCheckIns.coupleId, profile.coupleId));
      await connection.delete(relationshipPlannedDates).where(eq(relationshipPlannedDates.coupleId, profile.coupleId));
      await connection.delete(relationshipExperienceProgress).where(eq(relationshipExperienceProgress.coupleId, profile.coupleId));
      await connection.delete(relationshipCoupleProfiles).where(eq(relationshipCoupleProfiles.coupleId, profile.coupleId));

      res.json({ success: true });
    } catch (error) {
      console.error("[Relationship Keeper] account delete failed", error);
      res.status(500).json({ error: "Unable to delete account data" });
    }
  });

  app.delete("/api/relationship-keeper/media/:mediaId", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const mediaId = Number(req.params.mediaId);
    if (!Number.isFinite(mediaId)) {
      res.status(400).json({ error: "Invalid media id" });
      return;
    }

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      if (!profile) {
        res.status(400).json({ error: "Complete your couple profile first" });
        return;
      }

      await connection.delete(relationshipMedia).where(and(eq(relationshipMedia.mediaId, mediaId), eq(relationshipMedia.coupleId, profile.coupleId)));
      const media = await connection.select().from(relationshipMedia).where(eq(relationshipMedia.coupleId, profile.coupleId)).orderBy(desc(relationshipMedia.createdAt));
      res.json({ success: true, media });
    } catch (error) {
      console.error("[Relationship Keeper] media delete failed", error);
      res.status(500).json({ error: "Unable to delete media" });
    }
  });

  app.delete("/api/relationship-keeper/memories/:memoryId", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const memoryId = Number(req.params.memoryId);
    if (!Number.isFinite(memoryId)) {
      res.status(400).json({ error: "Invalid memory id" });
      return;
    }

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      if (!profile) {
        res.status(400).json({ error: "Complete your couple profile first" });
        return;
      }

      await connection.delete(relationshipMedia).where(and(eq(relationshipMedia.memoryId, memoryId), eq(relationshipMedia.coupleId, profile.coupleId)));
      await connection.delete(relationshipMemories).where(and(eq(relationshipMemories.memoryId, memoryId), eq(relationshipMemories.coupleId, profile.coupleId)));
      const memories = await connection.select().from(relationshipMemories).where(eq(relationshipMemories.coupleId, profile.coupleId)).orderBy(desc(relationshipMemories.updatedAt));
      res.json({ success: true, memories });
    } catch (error) {
      console.error("[Relationship Keeper] memory delete failed", error);
      res.status(500).json({ error: "Unable to delete memory" });
    }
  });

  app.delete("/api/relationship-keeper/plans/:plannedDateId", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const plannedDateId = Number(req.params.plannedDateId);
    if (!Number.isFinite(plannedDateId)) {
      res.status(400).json({ error: "Invalid planned date id" });
      return;
    }

    try {
      const connection = await ensureExperiencesSeeded();
      const profile = await getCoupleProfile(connection, user.id);
      if (!profile) {
        res.status(400).json({ error: "Complete your couple profile first" });
        return;
      }

      await connection.delete(relationshipPlannedDates).where(and(eq(relationshipPlannedDates.plannedDateId, plannedDateId), eq(relationshipPlannedDates.coupleId, profile.coupleId)));
      const plannedDates = await connection.select().from(relationshipPlannedDates).where(eq(relationshipPlannedDates.coupleId, profile.coupleId)).orderBy(desc(relationshipPlannedDates.updatedAt));
      res.json({ success: true, plannedDates });
    } catch (error) {
      console.error("[Relationship Keeper] plan delete failed", error);
      res.status(500).json({ error: "Unable to delete planned date" });
    }
  });
}
