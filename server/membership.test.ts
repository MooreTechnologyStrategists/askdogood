import { describe, it, expect, beforeAll } from 'vitest';
import * as db from '../server/db';

describe('Membership Features', () => {
  let testUserId: number;

  beforeAll(async () => {
    // Create a test user profile
    testUserId = 1; // Assuming user ID 1 exists from OAuth
    
    // Ensure profile exists
    const existingProfile = await db.getUserProfile(testUserId);
    if (!existingProfile) {
      await db.createUserProfile({
        userId: testUserId,
      });
    }
  });

  describe('User Profile', () => {
    it('should create a user profile', async () => {
      const profile = await db.getUserProfile(testUserId);
      expect(profile).toBeDefined();
      expect(profile?.userId).toBe(testUserId);
      expect(profile?.points).toBeDefined();
      expect(profile?.level).toBeDefined();
    });

    it('should update user profile', async () => {
      await db.updateUserProfile(testUserId, {
        bio: 'Test bio',
        avatarStyle: 'modern',
        avatarColor: 'purple',
      });

      const profile = await db.getUserProfile(testUserId);
      expect(profile?.bio).toBe('Test bio');
      expect(profile?.avatarStyle).toBe('modern');
      expect(profile?.avatarColor).toBe('purple');
    });
  });

  describe('Points System', () => {
    it('should add points to user', async () => {
      const profileBefore = await db.getUserProfile(testUserId);
      const pointsBefore = profileBefore?.points || 0;

      await db.addPoints(testUserId, 50, 'Test points');

      const profileAfter = await db.getUserProfile(testUserId);
      const pointsAfter = profileAfter?.points || 0;

      expect(pointsAfter).toBe(pointsBefore + 50);
    });

    it('should record points transaction', async () => {
      await db.addPoints(testUserId, 25, 'Test transaction');

      const history = await db.getPointsHistory(testUserId, 10);
      expect(history.length).toBeGreaterThan(0);
      
      const latestTransaction = history[0];
      expect(latestTransaction.userId).toBe(testUserId);
      expect(latestTransaction.type).toBe('earn');
    });

    it('should spend points if user has enough', async () => {
      // First add some points
      await db.addPoints(testUserId, 100, 'Setup for spend test');

      const profileBefore = await db.getUserProfile(testUserId);
      const pointsBefore = profileBefore?.points || 0;

      const success = await db.spendPoints(testUserId, 30, 'Test spend');

      expect(success).toBe(true);

      const profileAfter = await db.getUserProfile(testUserId);
      const pointsAfter = profileAfter?.points || 0;

      expect(pointsAfter).toBe(pointsBefore - 30);
    });

    it('should not spend points if user does not have enough', async () => {
      const profile = await db.getUserProfile(testUserId);
      const currentPoints = profile?.points || 0;

      const success = await db.spendPoints(testUserId, currentPoints + 1000, 'Test insufficient');

      expect(success).toBe(false);
    });
  });

  describe('Daily Check-in', () => {
    it('should perform daily check-in and award points', async () => {
      const profileBefore = await db.getUserProfile(testUserId);
      const pointsBefore = profileBefore?.points || 0;

      const result = await db.performDailyCheckIn(testUserId);

      if (result.success) {
        expect(result.pointsEarned).toBeGreaterThan(0);
        expect(result.newStreak).toBeGreaterThan(0);

        const profileAfter = await db.getUserProfile(testUserId);
        const pointsAfter = profileAfter?.points || 0;

        expect(pointsAfter).toBeGreaterThan(pointsBefore);
      } else {
        // Already checked in today
        expect(result.pointsEarned).toBe(0);
      }
    });
  });

  describe('Challenges', () => {
    it('should get active challenges', async () => {
      const challenges = await db.getActiveChallenges();
      expect(Array.isArray(challenges)).toBe(true);
    });

    it('should get user challenge completions', async () => {
      const completions = await db.getUserChallengeCompletions(testUserId);
      expect(Array.isArray(completions)).toBe(true);
    });
  });

  describe('Achievements', () => {
    it('should get all achievements', async () => {
      const achievements = await db.getAllAchievements();
      expect(Array.isArray(achievements)).toBe(true);
    });

    it('should get user achievements', async () => {
      const userAchievements = await db.getUserAchievements(testUserId);
      expect(Array.isArray(userAchievements)).toBe(true);
    });
  });

  describe('Rewards', () => {
    it('should get all active rewards', async () => {
      const rewards = await db.getAllRewards();
      expect(Array.isArray(rewards)).toBe(true);
    });

    it('should get user redemptions', async () => {
      const redemptions = await db.getUserRedemptions(testUserId);
      expect(Array.isArray(redemptions)).toBe(true);
    });
  });

  describe('Recipes', () => {
    it('should get all recipes', async () => {
      const recipes = await db.getAllRecipes(false);
      expect(Array.isArray(recipes)).toBe(true);
    });

    it('should get all recipes including premium', async () => {
      const recipes = await db.getAllRecipes(true);
      expect(Array.isArray(recipes)).toBe(true);
    });
  });

  describe('Meal Plans', () => {
    it('should get all meal plans', async () => {
      const mealPlans = await db.getAllMealPlans(false);
      expect(Array.isArray(mealPlans)).toBe(true);
    });

    it('should get all meal plans including premium', async () => {
      const mealPlans = await db.getAllMealPlans(true);
      expect(Array.isArray(mealPlans)).toBe(true);
    });
  });
});
