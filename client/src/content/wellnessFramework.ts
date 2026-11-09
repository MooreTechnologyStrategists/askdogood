export const wellnessMission = "Empowering everyday people to reclaim their health, self-worth, and vitality through practical wellness education, affordable food habits, and culturally grounded community support.";
export const wellnessVision = "A future where whole-person health is accessible, affordable, and actionable for every community—starting on your porch, in your kitchen, and in your daily choices.";
export const dersPillars = [
  { key: "diet", name: "Diet", description: "Food you enjoy, a grocery budget you can work with, and a meal plan that fits your week.", prompt: "One food or shopping step I can repeat", example: "Example: plan two dinners around ingredients I already have." },
  { key: "exercise", name: "Exercise", description: "Everyday movement adapted to your ability, preferences, and available time.", prompt: "One movement step that fits my ability", example: "Example: choose a comfortable movement break during my day." },
  { key: "rest", name: "Rest", description: "Make room to recharge and build a realistic wind-down routine.", prompt: "One way I will make room for rest", example: "Example: put tomorrow’s essentials together before winding down." },
  { key: "spiritual", name: "Spiritual practice", description: "Faith, reflection, purpose, or a meaningful pause. All beliefs are welcome.", prompt: "One practice that helps ground me", example: "Example: prayer, music, journaling, or a quiet moment outdoors." },
] as const;
export const communityPriorities = [
  { name: "Healthy Living", area: "Chronic disease", contribution: "Practical food education, affordable eating, accessible movement, everyday routines, and chronic disease awareness.", boundary: "General education; personal treatment plans remain with qualified clinicians." },
  { name: "Healthy Minds", area: "Behavioral health", contribution: "Everyday stress-management education, reflection, social connection, and supportive routines during life transitions.", boundary: "Wellness education and resource navigation; clinical mental health care requires qualified providers." },
  { name: "Healthy Start", area: "Maternal and infant health", contribution: "Caregiver wellness, healthy household routines, food planning, and navigation to family resources.", boundary: "Specialist pregnancy and infant-health education is developed with appropriately qualified partners." },
  { name: "Healthy Connections", area: "Access to care and social determinants of health", contribution: "Health and digital literacy, care-conversation preparation, and help identifying resource and financial barriers.", boundary: "Eligibility, availability, and fees are confirmed with the resource provider; access is not guaranteed." },
] as const;
