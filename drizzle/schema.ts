import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * User profiles with extended information and avatar customization
 */
export const userProfiles = mysqlTable("user_profiles", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  bio: text("bio"),
  avatarUrl: varchar("avatarUrl", { length: 500 }),
  avatarStyle: varchar("avatarStyle", { length: 50 }).default("default"),
  avatarColor: varchar("avatarColor", { length: 50 }).default("blue"),
  points: int("points").default(0).notNull(),
  level: int("level").default(1).notNull(),
  streakDays: int("streakDays").default(0).notNull(),
  lastCheckIn: timestamp("lastCheckIn"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserProfile = typeof userProfiles.$inferSelect;
export type InsertUserProfile = typeof userProfiles.$inferInsert;

/**
 * Points transactions for tracking how users earn and spend points
 */
export const pointsTransactions = mysqlTable("points_transactions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  amount: int("amount").notNull(),
  type: mysqlEnum("type", ["earn", "spend"]).notNull(),
  reason: varchar("reason", { length: 255 }).notNull(),
  metadata: text("metadata"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PointsTransaction = typeof pointsTransactions.$inferSelect;
export type InsertPointsTransaction = typeof pointsTransactions.$inferInsert;

/**
 * Rewards catalog
 */
export const rewards = mysqlTable("rewards", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  pointsCost: int("pointsCost").notNull(),
  category: mysqlEnum("category", ["content", "meal_plan", "consultation", "discount", "merchandise"]).notNull(),
  imageUrl: varchar("imageUrl", { length: 500 }),
  isActive: boolean("isActive").default(true).notNull(),
  stock: int("stock"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Reward = typeof rewards.$inferSelect;
export type InsertReward = typeof rewards.$inferInsert;

/**
 * User reward redemptions
 */
export const redemptions = mysqlTable("redemptions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  rewardId: int("rewardId").notNull(),
  status: mysqlEnum("status", ["pending", "fulfilled", "cancelled"]).default("pending").notNull(),
  notes: text("notes"),
  redeemedAt: timestamp("redeemedAt").defaultNow().notNull(),
  fulfilledAt: timestamp("fulfilledAt"),
});

export type Redemption = typeof redemptions.$inferSelect;
export type InsertRedemption = typeof redemptions.$inferInsert;

/**
 * Health challenges
 */
export const challenges = mysqlTable("challenges", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  pointsReward: int("pointsReward").notNull(),
  type: mysqlEnum("type", ["daily", "weekly", "monthly", "one_time"]).notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Challenge = typeof challenges.$inferSelect;
export type InsertChallenge = typeof challenges.$inferInsert;

/**
 * User challenge completions
 */
export const challengeCompletions = mysqlTable("challenge_completions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  challengeId: int("challengeId").notNull(),
  completedAt: timestamp("completedAt").defaultNow().notNull(),
});

export type ChallengeCompletion = typeof challengeCompletions.$inferSelect;
export type InsertChallengeCompletion = typeof challengeCompletions.$inferInsert;

/**
 * User achievements/badges
 */
export const achievements = mysqlTable("achievements", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  iconUrl: varchar("iconUrl", { length: 500 }),
  requirement: text("requirement"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Achievement = typeof achievements.$inferSelect;
export type InsertAchievement = typeof achievements.$inferInsert;

/**
 * User achievement unlocks
 */
export const userAchievements = mysqlTable("user_achievements", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  achievementId: int("achievementId").notNull(),
  unlockedAt: timestamp("unlockedAt").defaultNow().notNull(),
});

export type UserAchievement = typeof userAchievements.$inferSelect;
export type InsertUserAchievement = typeof userAchievements.$inferInsert;

/**
 * Guest blogger, partner, and collaboration submissions
 */
export const collaborationSubmissions = mysqlTable("collaboration_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  collaborationType: varchar("collaborationType", { length: 100 }).notNull(),
  expertise: text("expertise").notNull(),
  website: varchar("website", { length: 500 }),
  proposedTitle: varchar("proposedTitle", { length: 255 }).notNull(),
  audience: text("audience").notNull(),
  links: text("links"),
  pitch: text("pitch").notNull(),
  sourcePage: varchar("sourcePage", { length: 500 }),
  status: mysqlEnum("status", ["new", "reviewing", "contacted", "closed"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type CollaborationSubmission = typeof collaborationSubmissions.$inferSelect;
export type InsertCollaborationSubmission = typeof collaborationSubmissions.$inferInsert;

/**
 * Meal prep recipes
 */
export const recipes = mysqlTable("recipes", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  ingredients: text("ingredients").notNull(),
  instructions: text("instructions").notNull(),
  prepTime: int("prepTime"),
  cookTime: int("cookTime"),
  servings: int("servings"),
  calories: int("calories"),
  imageUrl: varchar("imageUrl", { length: 500 }),
  category: varchar("category", { length: 100 }),
  tags: text("tags"),
  isPremium: boolean("isPremium").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Recipe = typeof recipes.$inferSelect;
export type InsertRecipe = typeof recipes.$inferInsert;

/**
 * Meal plans
 */
export const mealPlans = mysqlTable("meal_plans", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  duration: int("duration").notNull(),
  meals: text("meals").notNull(),
  shoppingList: text("shoppingList"),
  isPremium: boolean("isPremium").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type MealPlan = typeof mealPlans.$inferSelect;
export type InsertMealPlan = typeof mealPlans.$inferInsert;

/**
 * Relationship Keeper couple profile.
 */
export const relationshipCoupleProfiles = mysqlTable("relationship_couple_profiles", {
  coupleId: int("coupleId").autoincrement().primaryKey(),
  ownerUserId: int("ownerUserId").notNull().unique(),
  primaryUserFirstName: varchar("primaryUserFirstName", { length: 120 }),
  partnerFirstName: varchar("partnerFirstName", { length: 120 }),
  coupleDisplayName: varchar("coupleDisplayName", { length: 200 }),
  relationshipStartDate: varchar("relationshipStartDate", { length: 32 }),
  anniversaryDate: varchar("anniversaryDate", { length: 32 }),
  cityOrRegion: varchar("cityOrRegion", { length: 160 }),
  interests: text("interests"),
  preferredActivityLevel: varchar("preferredActivityLevel", { length: 64 }),
  dietaryPreferences: text("dietaryPreferences"),
  accessibilityNeeds: text("accessibilityNeeds"),
  typicalDateBudget: varchar("typicalDateBudget", { length: 64 }),
  favoriteMusicGenres: text("favoriteMusicGenres"),
  favoriteBooksOrAuthors: text("favoriteBooksOrAuthors"),
  favoriteOutings: text("favoriteOutings"),
  adventureComfort: varchar("adventureComfort", { length: 64 }),
  wantsDmvRecommendations: boolean("wantsDmvRecommendations").default(true).notNull(),
  wantsWeeklySuggestions: boolean("wantsWeeklySuggestions").default(true).notNull(),
  monthlyGoalId: varchar("monthlyGoalId", { length: 64 }),
  accountTier: mysqlEnum("accountTier", ["free", "premium"]).default("free").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type RelationshipCoupleProfile = typeof relationshipCoupleProfiles.$inferSelect;
export type InsertRelationshipCoupleProfile = typeof relationshipCoupleProfiles.$inferInsert;

/**
 * Canonical relationship experience catalog.
 */
export const relationshipExperiences = mysqlTable("relationship_experiences", {
  id: int("id").autoincrement().primaryKey(),
  experienceId: varchar("experienceId", { length: 120 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  categoryId: varchar("categoryId", { length: 80 }).notNull(),
  category: varchar("category", { length: 160 }).notNull(),
  description: text("description").notNull(),
  estimatedCost: varchar("estimatedCost", { length: 64 }).notNull(),
  duration: varchar("duration", { length: 64 }).notNull(),
  activityLevel: varchar("activityLevel", { length: 32 }).notNull(),
  indoorOutdoor: varchar("indoorOutdoor", { length: 32 }).notNull(),
  bestSeason: varchar("bestSeason", { length: 32 }).notNull(),
  suggestedPreparation: text("suggestedPreparation").notNull(),
  optionalFoodPairing: text("optionalFoodPairing").notNull(),
  conversationPrompt: text("conversationPrompt").notNull(),
  reflectionQuestion: text("reflectionQuestion").notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  featured: boolean("featured").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type RelationshipExperience = typeof relationshipExperiences.$inferSelect;
export type InsertRelationshipExperience = typeof relationshipExperiences.$inferInsert;

/**
 * Saved progress for each couple and experience.
 */
export const relationshipExperienceProgress = mysqlTable("relationship_experience_progress", {
  progressId: int("progressId").autoincrement().primaryKey(),
  coupleId: int("coupleId").notNull(),
  experienceId: varchar("experienceId", { length: 120 }).notNull(),
  status: mysqlEnum("status", ["not_started", "interested", "planned", "completed", "skipped", "favorite", "want_to_repeat"]).default("not_started").notNull(),
  plannedDate: varchar("plannedDate", { length: 32 }),
  completedDate: varchar("completedDate", { length: 32 }),
  rating: int("rating"),
  favorite: boolean("favorite").default(false).notNull(),
  repeatRequested: boolean("repeatRequested").default(false).notNull(),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type RelationshipExperienceProgress = typeof relationshipExperienceProgress.$inferSelect;
export type InsertRelationshipExperienceProgress = typeof relationshipExperienceProgress.$inferInsert;

/**
 * Memory entries tied to a couple experience.
 */
export const relationshipMemories = mysqlTable("relationship_memories", {
  memoryId: int("memoryId").autoincrement().primaryKey(),
  coupleId: int("coupleId").notNull(),
  experienceId: varchar("experienceId", { length: 120 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  dateCompleted: varchar("dateCompleted", { length: 32 }).notNull(),
  location: varchar("location", { length: 255 }),
  overallRating: int("overallRating"),
  connectionRating: int("connectionRating"),
  funRating: int("funRating"),
  foodRating: int("foodRating"),
  valueRating: int("valueRating"),
  activityLevel: varchar("activityLevel", { length: 32 }),
  enjoyedMost: text("enjoyedMost"),
  surprisedUs: text("surprisedUs"),
  learnedAboutEachOther: text("learnedAboutEachOther"),
  bestMoment: text("bestMoment"),
  wouldRepeat: boolean("wouldRepeat").default(false).notNull(),
  privateNote: text("privateNote"),
  sharedReflection: text("sharedReflection"),
  song: varchar("song", { length: 255 }),
  quote: text("quote"),
  tags: text("tags"),
  privacySetting: varchar("privacySetting", { length: 32 }).default("private").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type RelationshipMemory = typeof relationshipMemories.$inferSelect;
export type InsertRelationshipMemory = typeof relationshipMemories.$inferInsert;

/**
 * Uploaded keepsakes and photos.
 */
export const relationshipMedia = mysqlTable("relationship_media", {
  mediaId: int("mediaId").autoincrement().primaryKey(),
  memoryId: int("memoryId"),
  coupleId: int("coupleId").notNull(),
  fileUrl: text("fileUrl").notNull(),
  fileType: varchar("fileType", { length: 120 }).notNull(),
  caption: varchar("caption", { length: 255 }),
  location: varchar("location", { length: 255 }),
  mediaDate: varchar("mediaDate", { length: 32 }),
  isCoverPhoto: boolean("isCoverPhoto").default(false).notNull(),
  privacySetting: varchar("privacySetting", { length: 32 }).default("private").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type RelationshipMedia = typeof relationshipMedia.$inferSelect;
export type InsertRelationshipMedia = typeof relationshipMedia.$inferInsert;

/**
 * Weekly or monthly relationship check-ins.
 */
export const relationshipCheckIns = mysqlTable("relationship_check_ins", {
  checkInId: int("checkInId").autoincrement().primaryKey(),
  coupleId: int("coupleId").notNull(),
  checkInDate: varchar("checkInDate", { length: 32 }).notNull(),
  connectionScore: int("connectionScore"),
  communicationScore: int("communicationScore"),
  funScore: int("funScore"),
  affectionScore: int("affectionScore"),
  supportScore: int("supportScore"),
  stressScore: int("stressScore"),
  gratitude: text("gratitude"),
  needs: text("needs"),
  discussionNotes: text("discussionNotes"),
  nextGoal: text("nextGoal"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type RelationshipCheckIn = typeof relationshipCheckIns.$inferSelect;
export type InsertRelationshipCheckIn = typeof relationshipCheckIns.$inferInsert;

/**
 * Planned future dates.
 */
export const relationshipPlannedDates = mysqlTable("relationship_planned_dates", {
  plannedDateId: int("plannedDateId").autoincrement().primaryKey(),
  coupleId: int("coupleId").notNull(),
  experienceId: varchar("experienceId", { length: 120 }).notNull(),
  date: varchar("date", { length: 32 }).notNull(),
  time: varchar("time", { length: 32 }),
  location: varchar("location", { length: 255 }),
  estimatedBudget: varchar("estimatedBudget", { length: 64 }),
  reservationUrl: text("reservationUrl"),
  transportationNotes: text("transportationNotes"),
  foodPlan: text("foodPlan"),
  notes: text("notes"),
  reminderPreference: varchar("reminderPreference", { length: 64 }),
  status: mysqlEnum("status", ["draft", "planned", "completed", "cancelled"]).default("draft").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type RelationshipPlannedDate = typeof relationshipPlannedDates.$inferSelect;
export type InsertRelationshipPlannedDate = typeof relationshipPlannedDates.$inferInsert;