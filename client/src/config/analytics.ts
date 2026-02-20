// Google Analytics Configuration

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-7K8N2DFHDP';

// Microsoft Clarity Configuration
export const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || 'clarity_placeholder';

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
  
  // Lead Magnets (High Priority)
  LEAD_MAGNET_VIEW: 'lead_magnet_view',
  LEAD_MAGNET_DOWNLOAD: 'lead_magnet_download',
  LAB_GUIDE_VIEW: 'lab_guide_page_view',
  LAB_GUIDE_DOWNLOAD: 'lab_guide_download',
  MEAL_PLAN_VIEW: 'meal_plan_page_view',
  MEAL_PLAN_DOWNLOAD: 'meal_plan_download',
  SYMPTOM_TRACKER_VIEW: 'symptom_tracker_page_view',
  SYMPTOM_TRACKER_DOWNLOAD: 'symptom_tracker_download',
  SUPPLEMENT_GUIDE_VIEW: 'supplement_guide_page_view',
  SUPPLEMENT_GUIDE_DOWNLOAD: 'supplement_guide_download',
  DOCTOR_CHECKLIST_VIEW: 'doctor_checklist_page_view',
  DOCTOR_CHECKLIST_DOWNLOAD: 'doctor_checklist_download',
  
  // Coaching (High Value Conversions)
  COACHING_PAGE_VIEW: 'coaching_page_view',
  COACHING_INQUIRY: 'coaching_inquiry',
  DISCOVERY_CALL_CLICK: 'discovery_call_click',
  TRANSFORMATION_PACKAGE_CLICK: 'transformation_package_click',
  VIP_INTENSIVE_CLICK: 'vip_intensive_click',
  
  // Course & Products
  COURSE_PAGE_VIEW: 'course_page_view',
  COURSE_CTA_CLICK: 'course_cta_click',
  COURSE_PURCHASE_INTENT: 'course_purchase_intent',
  SHOP_PAGE_VIEW: 'shop_page_view',
  PRODUCT_CLICK: 'product_click',
  
  // Affiliate tracking
  AFFILIATE_CLICK: 'affiliate_click',
  PRODUCT_VIEW: 'product_view',
  
  // Email & Newsletter
  NEWSLETTER_SIGNUP: 'newsletter_signup',
  NEWSLETTER_SIGNUP_SUCCESS: 'newsletter_signup_success',
  EMAIL_SIGNUP: 'email_signup',
  BEEHIIV_SUBSCRIBE: 'beehiiv_subscribe',
  
  // Conversions
  SUBSCRIPTION_START: 'subscription_start',
  PAYMENT_COMPLETE: 'payment_complete',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  
  // Social
  SHARE: 'share',
  SOCIAL_CLICK: 'social_click',
  SOCIAL_FOLLOW: 'social_follow',
  
  // Engagement
  SCROLL_DEPTH_25: 'scroll_25',
  SCROLL_DEPTH_50: 'scroll_50',
  SCROLL_DEPTH_75: 'scroll_75',
  SCROLL_DEPTH_100: 'scroll_100',
  TIME_ON_PAGE: 'time_on_page',
  VIDEO_PLAY: 'video_play',
  VIDEO_COMPLETE: 'video_complete',
} as const;

// Conversion Goals (for easy reference)
export const CONVERSION_GOALS = {
  // Lead Magnet Downloads - Each counts as a lead
  LEAD_GENERATED: 'lead_generated',
  
  // Email List Building
  EMAIL_CAPTURED: 'email_captured',
  
  // Revenue Events
  COACHING_INQUIRY_SUBMITTED: 'coaching_inquiry_submitted',
  COURSE_PURCHASE: 'course_purchase',
  PRODUCT_PURCHASE: 'product_purchase',
  
  // Engagement Milestones
  ENGAGED_VISITOR: 'engaged_visitor', // 2+ pages, 2+ min
  RETURN_VISITOR: 'return_visitor',
} as const;
