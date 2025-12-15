// Google Analytics Configuration

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-7K8N2DFHDP';

// Set to true to enable debug logging
export const GA_DEBUG = import.meta.env.DEV;

// Events to track
export const GA_EVENTS = {
  // Page views (automatic)
  PAGE_VIEW: 'page_view',
  
  // User actions
  SIGNUP: 'sign_up',
  LOGIN: 'login',
  LOGOUT: 'logout',
  
  // Content engagement
  BLOG_READ: 'blog_read',
  RECIPE_GENERATE: 'recipe_generate',
  CHALLENGE_START: 'challenge_start',
  CHALLENGE_COMPLETE: 'challenge_complete',
  
  // Affiliate tracking
  AFFILIATE_CLICK: 'affiliate_click',
  PRODUCT_VIEW: 'product_view',
  
  // Conversions
  SUBSCRIPTION_START: 'subscription_start',
  PAYMENT_COMPLETE: 'payment_complete',
  EMAIL_SIGNUP: 'email_signup',
  
  // Social
  SHARE: 'share',
  SOCIAL_CLICK: 'social_click',
} as const;
