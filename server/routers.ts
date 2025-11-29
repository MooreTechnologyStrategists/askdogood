import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  profile: router({
    get: protectedProcedure.query(async ({ ctx }) => {
      let profile = await db.getUserProfile(ctx.user.id);
      
      if (!profile) {
        await db.createUserProfile({
          userId: ctx.user.id,
        });
        profile = await db.getUserProfile(ctx.user.id);
      }
      
      return profile;
    }),
    
    update: protectedProcedure
      .input(z.object({
        bio: z.string().optional(),
        avatarStyle: z.string().optional(),
        avatarColor: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        await db.updateUserProfile(ctx.user.id, input);
        return { success: true };
      }),
  }),

  points: router({
    getBalance: protectedProcedure.query(async ({ ctx }) => {
      const profile = await db.getUserProfile(ctx.user.id);
      return { points: profile?.points || 0, level: profile?.level || 1 };
    }),
    
    getHistory: protectedProcedure
      .input(z.object({
        limit: z.number().optional().default(50),
      }))
      .query(async ({ ctx, input }) => {
        return await db.getPointsHistory(ctx.user.id, input.limit);
      }),
    
    dailyCheckIn: protectedProcedure.mutation(async ({ ctx }) => {
      return await db.performDailyCheckIn(ctx.user.id);
    }),
  }),

  rewards: router({
    getAll: publicProcedure.query(async () => {
      return await db.getAllRewards();
    }),
    
    redeem: protectedProcedure
      .input(z.object({
        rewardId: z.number(),
      }))
      .mutation(async ({ ctx, input }) => {
        return await db.redeemReward(ctx.user.id, input.rewardId);
      }),
    
    getMyRedemptions: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserRedemptions(ctx.user.id);
    }),
  }),

  challenges: router({
    getActive: publicProcedure.query(async () => {
      return await db.getActiveChallenges();
    }),
    
    complete: protectedProcedure
      .input(z.object({
        challengeId: z.number(),
      }))
      .mutation(async ({ ctx, input }) => {
        return await db.completeChallenge(ctx.user.id, input.challengeId);
      }),
    
    getMyCompletions: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserChallengeCompletions(ctx.user.id);
    }),
  }),

  achievements: router({
    getAll: publicProcedure.query(async () => {
      return await db.getAllAchievements();
    }),
    
    getMy: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserAchievements(ctx.user.id);
    }),
  }),

  recipes: router({
    getAll: publicProcedure
      .input(z.object({
        includePremium: z.boolean().optional().default(false),
      }))
      .query(async ({ input }) => {
        return await db.getAllRecipes(input.includePremium);
      }),
    
    getById: publicProcedure
      .input(z.object({
        id: z.number(),
      }))
      .query(async ({ input }) => {
        return await db.getRecipeById(input.id);
      }),
  }),

  mealPlans: router({
    getAll: publicProcedure
      .input(z.object({
        includePremium: z.boolean().optional().default(false),
      }))
      .query(async ({ input }) => {
        return await db.getAllMealPlans(input.includePremium);
      }),
    
    getById: publicProcedure
      .input(z.object({
        id: z.number(),
      }))
      .query(async ({ input }) => {
        return await db.getMealPlanById(input.id);
      }),
  }),
});

export type AppRouter = typeof appRouter;
