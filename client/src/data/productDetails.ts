export interface ProductDetailContent {
  headline: string;
  subheadline: string;
  includes: string[];
  bestFor: string[];
  outcomes: string[];
  deliveryNote: string;
}

export const productDetailsById: Record<string, ProductDetailContent> = {
  "7-day-reset": {
    headline: "Seven days. One realistic reset. No perfection required.",
    subheadline:
      "A warm, practical reset to help you rebuild food, movement, rest, and everyday wellness habits one manageable day at a time.",
    includes: [
      "A clear seven-day wellness rhythm",
      "Simple daily food, movement, rest, and reflection prompts",
      "Practical guidance that works with a real schedule",
      "A continuation plan for keeping your momentum",
    ],
    bestFor: [
      "People who feel overwhelmed and need a gentle place to restart",
      "Anyone tired of all-or-nothing wellness plans",
      "People who want useful structure without crash dieting",
    ],
    outcomes: [
      "A calmer, clearer daily wellness routine",
      "More confidence about what to do next",
      "Seven days of momentum you can continue building on",
    ],
    deliveryNote: "Digital reset materials and next steps are provided after checkout.",
  },
  "custom-wellness-plan": {
    headline: "Get practical wellness guidance shaped around your real life.",
    subheadline:
      "A personalized plan for your goals, routines, barriers, and next steps—not another generic checklist that ignores how you actually live.",
    includes: [
      "A focused review of your goals and current routine",
      "Personalized food, movement, rest, and consistency recommendations",
      "Clear priorities so you know where to begin",
      "A practical written plan you can follow and revisit",
    ],
    bestFor: [
      "People who need direction beyond general wellness content",
      "Anyone managing competing health, schedule, or energy demands",
      "People ready to make realistic changes with a clear plan",
    ],
    outcomes: [
      "A clearer picture of your highest-value next steps",
      "A realistic wellness structure built around your life",
      "Less confusion and more confidence about where to focus",
    ],
    deliveryNote:
      "After checkout, you will receive instructions for providing the information needed to prepare your personalized plan. This service is wellness education, not medical care.",
  },
  "21-day-plant-based-reset": {
    headline: "Reset your routine with real food that supports healing.",
    subheadline:
      "A practical 21-day framework for people who want less inflammation, better energy, and consistent meals without extreme dieting.",
    includes: [
      "21-day structure with simple daily focus",
      "Grocery planning guidance and prep flow",
      "Meal ideas designed for real schedules",
      "Accountability prompts to keep momentum",
    ],
    bestFor: [
      "People restarting healthy habits after burnout",
      "Anyone who wants anti-inflammatory structure",
      "Women balancing thyroid, blood sugar, and stress concerns",
    ],
    outcomes: [
      "Lower decision fatigue around food",
      "Improved consistency and confidence in meal choices",
      "A reusable reset rhythm you can run again",
    ],
    deliveryNote: "Digital access with instant download after checkout.",
  },
  "thyroid-lab-interpretation-guide": {
    headline: "Understand your thyroid numbers without confusion.",
    subheadline:
      "A plain-language lab guide so you can ask better questions, track trends, and advocate with clarity in appointments.",
    includes: [
      "TSH, Free T3, Free T4 breakdown",
      "Antibodies and reverse T3 context",
      "What to document before each appointment",
      "Provider conversation prompts",
    ],
    bestFor: [
      "People who get labs but still feel uncertain",
      "Thyroid patients preparing for next provider visit",
      "Anyone who wants practical lab literacy",
    ],
    outcomes: [
      "Clearer interpretation of common thyroid markers",
      "Better communication with healthcare providers",
      "More confidence in follow-up decisions",
    ],
    deliveryNote: "Digital guide delivered immediately after purchase.",
  },
  "thyroid-supplement-protocol-templates": {
    headline: "Organize supplements and symptom response in one place.",
    subheadline:
      "Templates that help you track what you are taking, how your body responds, and what to adjust with your care team.",
    includes: [
      "Daily supplement tracker template",
      "Symptom and trigger logging pages",
      "Weekly reflection and adjustment sheet",
      "Simple protocol-planning framework",
    ],
    bestFor: [
      "People testing supplement consistency",
      "Anyone who wants cleaner symptom tracking",
      "Women managing overlapping thyroid and gut symptoms",
    ],
    outcomes: [
      "Cleaner records for provider conversations",
      "Faster pattern recognition",
      "Less guesswork in your routine",
    ],
    deliveryNote: "Downloadable templates for immediate use.",
  },
  "garden-to-table-wellness-bundle": {
    headline: "Bring your healing habits from garden to kitchen.",
    subheadline:
      "A bundle built around herbs, food prep, and simple lifestyle rhythms that make healthy living more practical and enjoyable.",
    includes: [
      "Garden-focused wellness education",
      "Recipe and meal ideas from real use",
      "Herb-forward guidance for everyday routines",
      "Actionable workflow from sourcing to prep",
    ],
    bestFor: [
      "People who want to reconnect with real food",
      "Families building healthier home routines",
      "Anyone who loves practical wellness and cooking",
    ],
    outcomes: [
      "More confidence with herb and food choices",
      "Reduced reliance on ultra-processed meals",
      "A repeatable wellness system at home",
    ],
    deliveryNote: "Digital bundle with immediate post-checkout access.",
  },
  "autoimmune-recovery-guide": {
    headline: "Support your body with steady, anti-inflammatory habits.",
    subheadline:
      "A practical guide for reducing overload and building routines that support recovery, comfort, and day-to-day stability.",
    includes: [
      "Lifestyle support framework for flare cycles",
      "Food and routine guidance",
      "Stress and sleep stabilization tools",
      "Tracking prompts for symptom awareness",
    ],
    bestFor: [
      "People navigating autoimmune fatigue and inflammation",
      "Women balancing multiple chronic symptoms",
      "Anyone who needs a simpler healing system",
    ],
    outcomes: [
      "Greater consistency with recovery habits",
      "Better symptom awareness and pattern tracking",
      "A sustainable baseline routine",
    ],
    deliveryNote: "Delivered as a downloadable digital guide.",
  },
  "black-womens-health-advocacy-toolkit": {
    headline: "Walk into appointments prepared, clear, and heard.",
    subheadline:
      "A practical toolkit designed to help Black women advocate for safer, stronger healthcare conversations and follow-through.",
    includes: [
      "Appointment prep checklists",
      "Communication scripts for common scenarios",
      "Follow-up and documentation templates",
      "Decision-support planning pages",
    ],
    bestFor: [
      "Black women seeking stronger medical advocacy tools",
      "Patients who feel dismissed in care settings",
      "Families supporting loved ones through complex care",
    ],
    outcomes: [
      "More confident provider conversations",
      "Stronger continuity between visits",
      "Clearer personal health records",
    ],
    deliveryNote: "Launching with priority access while final checkout is being completed.",
  },
  "thyroid-symptom-tracker": {
    headline: "Track the pattern so your next step is clearer.",
    subheadline:
      "A simple, practical tracker for symptoms, supplements, medication timing, and daily response patterns.",
    includes: [
      "Daily symptom severity log",
      "Medication and supplement timing fields",
      "Trigger and food correlation notes",
      "Weekly pattern summary template",
    ],
    bestFor: [
      "People preparing for provider follow-ups",
      "Anyone trying to identify symptom triggers",
      "Women managing thyroid symptom variability",
    ],
    outcomes: [
      "Cleaner symptom data over time",
      "Improved communication in appointments",
      "Faster pattern recognition for routine changes",
    ],
    deliveryNote: "Instant access digital tracker download.",
  },
  "30-day-thyroid-meal-plan": {
    headline: "Take 30 days to simplify your food decisions.",
    subheadline:
      "A month of thyroid-conscious meal structure to reduce stress, save time, and support consistency.",
    includes: [
      "30-day meal structure framework",
      "Practical recipe and prep guidance",
      "Simple grocery planning support",
      "Repeatable weekly implementation flow",
    ],
    bestFor: [
      "People tired of daily meal decision fatigue",
      "Women rebuilding consistency after diagnosis",
      "Anyone wanting practical, non-extreme nutrition support",
    ],
    outcomes: [
      "More stable weekly food rhythm",
      "Lower overwhelm around meal planning",
      "Stronger adherence to healing goals",
    ],
    deliveryNote: "Digital meal-plan package with immediate access.",
  },
  "dogood-wellness-circle": {
    headline: "Heal in community with practical monthly support.",
    subheadline:
      "One simple membership for women who want structure, accountability, and community while building healthier routines.",
    includes: [
      "Monthly support-focused guidance",
      "Community-centered wellness accountability",
      "Exclusive tools and resources",
      "Simple monthly access",
    ],
    bestFor: [
      "Women who do better with community support",
      "People rebuilding discipline and consistency",
      "Anyone who wants practical ongoing guidance",
    ],
    outcomes: [
      "Stronger follow-through on wellness goals",
      "Less isolation in healing journey",
      "Consistent monthly momentum",
    ],
    deliveryNote: "Monthly membership access with ongoing support.",
  },
};
