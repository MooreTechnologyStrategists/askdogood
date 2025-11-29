import { eq, desc, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users, 
  userProfiles, 
  UserProfile, 
  InsertUserProfile,
  pointsTransactions,
  InsertPointsTransaction,
  rewards,
  redemptions,
  InsertRedemption,
  challenges,
  challengeCompletions,
  InsertChallengeCompletion,
  achievements,
  userAchievements,
  InsertUserAchievement,
  recipes,
  mealPlans
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// User Profile Functions
export async function getUserProfile(userId: number): Promise<UserProfile | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(userProfiles).where(eq(userProfiles.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createUserProfile(profile: InsertUserProfile): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db.insert(userProfiles).values(profile);
}

export async function updateUserProfile(userId: number, updates: Partial<InsertUserProfile>): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db.update(userProfiles).set(updates).where(eq(userProfiles.userId, userId));
}

// Points Functions
export async function addPoints(userId: number, amount: number, reason: string, metadata?: string): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db.insert(pointsTransactions).values({
    userId,
    amount,
    type: 'earn',
    reason,
    metadata,
  });

  const profile = await getUserProfile(userId);
  if (profile) {
    await updateUserProfile(userId, {
      points: profile.points + amount,
    });
  }
}

export async function spendPoints(userId: number, amount: number, reason: string, metadata?: string): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  const profile = await getUserProfile(userId);
  if (!profile || profile.points < amount) {
    return false;
  }

  await db.insert(pointsTransactions).values({
    userId,
    amount: -amount,
    type: 'spend',
    reason,
    metadata,
  });

  await updateUserProfile(userId, {
    points: profile.points - amount,
  });

  return true;
}

export async function getPointsHistory(userId: number, limit: number = 50) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(pointsTransactions)
    .where(eq(pointsTransactions.userId, userId))
    .orderBy(desc(pointsTransactions.createdAt))
    .limit(limit);
}

// Rewards Functions
export async function getAllRewards() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(rewards).where(eq(rewards.isActive, true));
}

export async function redeemReward(userId: number, rewardId: number): Promise<{ success: boolean; message: string }> {
  const db = await getDb();
  if (!db) return { success: false, message: "Database unavailable" };

  const reward = await db.select().from(rewards).where(eq(rewards.id, rewardId)).limit(1);
  if (reward.length === 0) {
    return { success: false, message: "Reward not found" };
  }

  const rewardItem = reward[0];
  if (!rewardItem.isActive) {
    return { success: false, message: "Reward is no longer available" };
  }

  if (rewardItem.stock !== null && rewardItem.stock <= 0) {
    return { success: false, message: "Reward is out of stock" };
  }

  const success = await spendPoints(userId, rewardItem.pointsCost, `Redeemed: ${rewardItem.name}`);
  if (!success) {
    return { success: false, message: "Insufficient points" };
  }

  await db.insert(redemptions).values({
    userId,
    rewardId,
    status: 'pending',
  });

  if (rewardItem.stock !== null) {
    await db.update(rewards).set({ stock: rewardItem.stock - 1 }).where(eq(rewards.id, rewardId));
  }

  return { success: true, message: "Reward redeemed successfully" };
}

export async function getUserRedemptions(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(redemptions)
    .where(eq(redemptions.userId, userId))
    .orderBy(desc(redemptions.redeemedAt));
}

// Challenge Functions
export async function getActiveChallenges() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(challenges).where(eq(challenges.isActive, true));
}

export async function completeChallenge(userId: number, challengeId: number): Promise<{ success: boolean; pointsEarned: number }> {
  const db = await getDb();
  if (!db) return { success: false, pointsEarned: 0 };

  const existing = await db
    .select()
    .from(challengeCompletions)
    .where(and(eq(challengeCompletions.userId, userId), eq(challengeCompletions.challengeId, challengeId)))
    .limit(1);

  if (existing.length > 0) {
    return { success: false, pointsEarned: 0 };
  }

  const challenge = await db.select().from(challenges).where(eq(challenges.id, challengeId)).limit(1);
  if (challenge.length === 0) {
    return { success: false, pointsEarned: 0 };
  }

  const challengeItem = challenge[0];

  await db.insert(challengeCompletions).values({
    userId,
    challengeId,
  });

  await addPoints(userId, challengeItem.pointsReward, `Completed challenge: ${challengeItem.title}`);

  return { success: true, pointsEarned: challengeItem.pointsReward };
}

export async function getUserChallengeCompletions(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(challengeCompletions)
    .where(eq(challengeCompletions.userId, userId));
}

// Achievement Functions
export async function getAllAchievements() {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(achievements);
}

export async function unlockAchievement(userId: number, achievementId: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  const existing = await db
    .select()
    .from(userAchievements)
    .where(and(eq(userAchievements.userId, userId), eq(userAchievements.achievementId, achievementId)))
    .limit(1);

  if (existing.length > 0) {
    return false;
  }

  await db.insert(userAchievements).values({
    userId,
    achievementId,
  });

  return true;
}

export async function getUserAchievements(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(userAchievements)
    .where(eq(userAchievements.userId, userId));
}

// Recipe Functions
export async function getAllRecipes(includePremium: boolean = false) {
  const db = await getDb();
  if (!db) return [];

  if (includePremium) {
    return await db.select().from(recipes);
  } else {
    return await db.select().from(recipes).where(eq(recipes.isPremium, false));
  }
}

export async function getRecipeById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(recipes).where(eq(recipes.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Meal Plan Functions
export async function getAllMealPlans(includePremium: boolean = false) {
  const db = await getDb();
  if (!db) return [];

  if (includePremium) {
    return await db.select().from(mealPlans);
  } else {
    return await db.select().from(mealPlans).where(eq(mealPlans.isPremium, false));
  }
}

export async function getMealPlanById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(mealPlans).where(eq(mealPlans.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Daily Check-in
export async function performDailyCheckIn(userId: number): Promise<{ success: boolean; pointsEarned: number; newStreak: number }> {
  const db = await getDb();
  if (!db) return { success: false, pointsEarned: 0, newStreak: 0 };

  const profile = await getUserProfile(userId);
  if (!profile) {
    return { success: false, pointsEarned: 0, newStreak: 0 };
  }

  const now = new Date();
  const lastCheckIn = profile.lastCheckIn;

  if (lastCheckIn) {
    const lastCheckInDate = new Date(lastCheckIn);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const lastDate = new Date(lastCheckInDate.getFullYear(), lastCheckInDate.getMonth(), lastCheckInDate.getDate());

    if (today.getTime() === lastDate.getTime()) {
      return { success: false, pointsEarned: 0, newStreak: profile.streakDays };
    }
  }

  let newStreak = 1;
  if (lastCheckIn) {
    const lastCheckInDate = new Date(lastCheckIn);
    const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const lastDate = new Date(lastCheckInDate.getFullYear(), lastCheckInDate.getMonth(), lastCheckInDate.getDate());

    if (yesterday.getTime() === lastDate.getTime()) {
      newStreak = profile.streakDays + 1;
    }
  }

  const pointsEarned = 10 + Math.floor(newStreak / 7) * 5;

  await addPoints(userId, pointsEarned, "Daily check-in");
  await updateUserProfile(userId, {
    lastCheckIn: now,
    streakDays: newStreak,
  });

  return { success: true, pointsEarned, newStreak };
}
