import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, Download, Video, BookOpen, Users, Award, Shield, Clock, TrendingUp, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const products = [
  {
    id: 1,
    name: "Thyroid Health Mastery Course",
    price: 97,
    image: "/products/thyroid-health-course.png",
    category: "Online Course",
    icon: Video,
    tagline: "Master your thyroid health with expert guidance and proven protocols",
    shortDescription: "Everything you need to understand, manage, and optimize your thyroid health—whether you have hypothyroidism, hyperthyroidism, Hashimoto's, or you're post-thyroidectomy.",
    fullDescription: `After years of misdiagnosis and struggling with thyroid disease, I created the comprehensive course I wish I'd had. This isn't just information—it's transformation.

You'll learn how to read your labs like a pro, advocate effectively with your doctors, optimize your medication, support your thyroid with nutrition, and finally feel like yourself again.

This course combines medical science with lived experience, giving you both the knowledge and confidence to take control of your thyroid health journey.`,
    
    features: [
      "6 comprehensive video modules (3+ hours of expert content)",
      "Complete thyroid lab interpretation guide with normal ranges",
      "Medication optimization strategies (Synthroid, Nature-Throid, Armour, and more)",
      "Thyroid-supporting nutrition protocols and meal plans",
      "Stress management techniques specific to thyroid patients",
      "Downloadable symptom trackers and health journals",
      "Private Facebook community access with 200+ members",
      "Monthly live Q&A sessions with RoSeé",
      "Email support for your questions",
      "Lifetime access with all future updates included",
      "30-day money-back guarantee, no questions asked"
    ],
    
    modules: [
      {
        title: "Module 1: Understanding Your Thyroid",
        duration: "35 min",
        topics: ["Thyroid anatomy & function", "Common thyroid conditions", "How thyroid affects every system", "Why Black women are at higher risk"]
      },
      {
        title: "Module 2: Lab Work Mastery",
        duration: "40 min",
        topics: ["TSH, Free T3, Free T4 explained", "Thyroid antibodies", "Reverse T3", "Optimal vs. 'normal' ranges", "When to request additional tests"]
      },
      {
        title: "Module 3: Medication Deep Dive",
        duration: "30 min",
        topics: ["Types of thyroid medication", "Finding your optimal dose", "Timing and absorption", "What affects medication efficacy", "Natural vs. synthetic options"]
      },
      {
        title: "Module 4: Nutrition for Thyroid Health",
        duration: "45 min",
        topics: ["Thyroid-supporting foods", "Foods to avoid/limit", "Supplement protocols", "Meal timing", "Anti-inflammatory eating"]
      },
      {
        title: "Module 5: Lifestyle Optimization",
        duration: "35 min",
        topics: ["Sleep and thyroid connection", "Exercise dos and don'ts", "Stress management", "Environmental toxins", "Building resilience"]
      },
      {
        title: "Module 6: Advocacy & Healthcare Navigation",
        duration: "25 min",
        topics: ["How to find the right doctor", "Preparing for appointments", "Communication strategies", "When to seek second opinions", "Insurance navigation"]
      }
    ],
    
    bonuses: [
      "Bonus #1: Thyroid-Supporting Recipe Collection (30+ recipes)",
      "Bonus #2: Lab Work Cheat Sheet (printable reference)",
      "Bonus #3: Doctor Appointment Prep Checklist",
      "Bonus #4: Supplement Shopping Guide with vetted brands",
      "Bonus #5: Meditation & Stress Relief Audio Tracks"
    ],
    
    bestseller: true,
    
    testimonials: [
      {
        text: "This course changed everything. I finally understand my body and how to advocate for myself. Within 3 months, my energy returned and I feel like ME again.",
        author: "Maya T.",
        location: "Washington, DC",
        condition: "Hypothyroidism",
        rating: 5
      },
      {
        text: "I've spent thousands on doctors who didn't listen. This $97 course gave me more practical information than years of appointments. RoSeé just GETS it.",
        author: "Keisha M.",
        location: "Baltimore, MD",
        condition: "Post-Thyroidectomy",
        rating: 5
      },
      {
        text: "As a newly diagnosed Hashimoto's patient, I was overwhelmed. This course broke everything down in a way that made sense. The community support alone is worth it!",
        author: "Simone W.",
        location: "Arlington, VA",
        condition: "Hashimoto's Thyroiditis",
        rating: 5
      }
    ],
    
    faqs: [
      {
        q: "Is this course only for people with thyroid disease?",
        a: "While it's designed for those with diagnosed thyroid conditions, it's also valuable for anyone experiencing symptoms and seeking answers, or those with a family history wanting to be proactive."
      },
      {
        q: "Do I need any medical background to understand this?",
        a: "Absolutely not! I break down complex medical concepts into plain language. If I can understand it after being dismissed for years, you can too."
      },
      {
        q: "How long do I have access?",
        a: "Forever! You get lifetime access, including all future updates and additions to the course."
      },
      {
        q: "What if I don't like it?",
        a: "I offer a 30-day money-back guarantee. If it's not what you expected, just email me for a full refund."
      }
    ],
    
    stats: {
      students: "500+",
      rating: "4.9/5.0",
      completion: "87%",
      satisfaction: "96%"
    }
  },
  
  {
    id: 2,
    name: "21-Day Plant-Based Reset",
    price: 47,
    image: "/products/21-day-reset.png",
    category: "Transformation Program",
    icon: BookOpen,
    tagline: "Transform your health in 3 weeks with delicious plant-based meals",
    shortDescription: "A complete 21-day program with meal plans, recipes, shopping lists, and daily support to help you lose weight, reduce inflammation, and feel amazing.",
    fullDescription: `Ready to feel better in just 3 weeks? This isn't a restrictive diet—it's a delicious, nourishing reset that reduces inflammation, supports weight loss, boosts energy, and helps manage autoimmune conditions.

I designed this program after my own plant-based transformation helped me heal from 5 autoimmune diseases and lose 40 pounds. Every meal is tested, approved, and loved by real people (including picky kids!).

No deprivation. No boring salads. Just real food that tastes amazing and makes you feel even better.`,
    
    features: [
      "21 complete days of meal plans (breakfast, lunch, dinner, snacks)",
      "60+ delicious plant-based recipes with photos",
      "Weekly shopping lists organized by store section",
      "Daily email check-ins and motivation",
      "Meal prep guides to save you time",
      "Before/after photo guide and body measurements tracker",
      "Anti-inflammatory food guide and substitution chart",
      "Restaurant dining guide for eating out",
      "Printable grocery lists and meal planners",
      "Access to private Facebook support group",
      "Bonus: 7-day post-reset maintenance plan"
    ],
    
    weekBreakdown: [
      {
        week: "Week 1: Foundation",
        focus: "Gentle transition & detox",
        meals: [
          "Green smoothies for easy digestion",
          "Simple Buddha bowls with whole grains",
          "Veggie-packed soups and stews",
          "Energy-boosting snacks"
        ],
        goal: "Reduce inflammation, increase energy"
      },
      {
        week: "Week 2: Transformation",
        focus: "Metabolism boost & healing",
        meals: [
          "Protein-rich lentil & bean dishes",
          "Colorful rainbow bowls",
          "Healing curry and stir-fries",
          "Satisfying plant-based tacos"
        ],
        goal: "See weight loss, reduced bloating"
      },
      {
        week: "Week 3: Optimization",
        focus: "Sustainable habits & results",
        meals: [
          "Gourmet plant-based entrees",
          "Family-favorite recipes",
          "Meal prep mastery",
          "Celebration meals that heal"
        ],
        goal: "Feel amazing, look radiant, establish habits"
      }
    ],
    
    results: [
      "Average weight loss: 8-12 pounds",
      "Reduced inflammation markers",
      "Increased energy levels",
      "Better digestion",
      "Clearer skin",
      "Improved sleep",
      "Reduced joint pain",
      "Better mood and mental clarity"
    ],
    
    popular: true,
    
    testimonials: [
      {
        text: "I lost 12 pounds and my inflammation markers dropped significantly. Plus the food is AMAZING! I don't even miss meat.",
        author: "Kenya P.",
        location: "Baltimore, MD",
        result: "12 lbs lost, reduced inflammation",
        rating: 5
      },
      {
        text: "My family actually loves these recipes! We're on our third round of the reset. It's become our lifestyle.",
        author: "Jasmine R.",
        location: "Silver Spring, MD",
        result: "Whole family transformed",
        rating: 5
      }
    ],
    
    faqs: [
      {
        q: "Is this program expensive to follow?",
        a: "Not at all! Plant-based eating is actually very budget-friendly. Most recipes use affordable staples like beans, grains, and seasonal produce. Average cost: $60-75/week for one person."
      },
      {
        q: "What if I don't like vegetables?",
        a: "These recipes will change your mind! They're flavorful, satisfying, and nothing like boring salads. Plus, I include strategies for 'vegetable skeptics.'"
      },
      {
        q: "Can I do this if I have food allergies?",
        a: "Yes! I include substitution charts for common allergens (soy, gluten, nuts). Every recipe has modification options."
      }
    ],
    
    stats: {
      participants: "1,200+",
      avgWeightLoss: "9.3 lbs",
      completion: "82%",
      wouldRecommend: "94%"
    }
  },
  
  {
    id: 3,
    name: "Garden to Table Wellness Bundle",
    price: 37,
    image: "/products/garden-to-table-bundle.png",
    category: "Digital Bundle",
    icon: Download,
    tagline: "Grow your own healing foods and transform your kitchen",
    shortDescription: "Everything you need to start growing healing herbs and vegetables, plus 50+ recipes to use them in delicious, therapeutic meals.",
    fullDescription: `Your windowsill can become a natural pharmacy. Your backyard can be a grocery store. This complete bundle teaches you how to grow healing foods and use them to transform your health—even if you've never gardened before.

I grew up watching my grandmother grow her own food, and it saved my life when I was healing from autoimmune disease. Fresh herbs and vegetables aren't just food—they're medicine.

This bundle combines gardening wisdom with culinary expertise, giving you everything you need to go from seed to plate with confidence.`,
    
    features: [
      "Complete seasonal planting guide for healing herbs and vegetables",
      "50+ garden-to-table recipes using fresh ingredients",
      "Container gardening setup guide (perfect for small spaces)",
      "Herb growing video tutorials (15+ videos)",
      "Budget-friendly shopping strategies for supplies",
      "Meal prep video series (6 videos, 2+ hours)",
      "Companion planting guide for maximum yield",
      "Pest control using natural methods",
      "Harvesting and preservation techniques",
      "Seed saving guide for self-sufficiency",
      "Printable garden planner and harvest tracker"
    ],
    
    herbsIncluded: [
      {
        name: "Basil",
        benefits: "Anti-inflammatory, digestive support, stress relief",
        difficulty: "Easy",
        uses: "Pesto, salads, teas, infused oils"
      },
      {
        name: "Rosemary",
        benefits: "Memory boost, circulation, hair health",
        difficulty: "Easy",
        uses: "Roasted vegetables, breads, teas, skincare"
      },
      {
        name: "Thyme",
        benefits: "Immune support, respiratory health, antimicrobial",
        difficulty: "Easy",
        uses: "Soups, roasted dishes, teas, throat remedies"
      },
      {
        name: "Mint",
        benefits: "Digestive aid, headache relief, cooling",
        difficulty: "Very Easy",
        uses: "Teas, smoothies, salads, desserts"
      },
      {
        name: "Cilantro",
        benefits: "Heavy metal detox, digestive support",
        difficulty: "Moderate",
        uses: "Salsas, curries, salads, garnish"
      },
      {
        name: "Parsley",
        benefits: "Kidney support, vitamin K, fresh breath",
        difficulty: "Easy",
        uses: "Salads, juices, tabouleh, garnish"
      }
    ],
    
    recipeCategories: [
      "Fresh Herb Pestos & Sauces",
      "Garden-Fresh Salads",
      "Herb-Infused Healing Teas",
      "Roasted Vegetable Medleys",
      "Herbal Remedies & Tinctures",
      "Fermented Foods from Your Garden",
      "Healing Soups & Stews",
      "Garden Smoothies & Juices"
    ],
    
    testimonials: [
      {
        text: "My windowsill is now a mini pharmacy! Saved so much money on herbs and feel more connected to my food.",
        author: "Tasha M.",
        location: "Silver Spring, MD",
        rating: 5
      },
      {
        text: "I've always wanted to garden but was intimidated. This made it so simple! Now I'm growing 10+ herbs and my meals taste restaurant-quality.",
        author: "Nicole B.",
        location: "Bowie, MD",
        rating: 5
      }
    ],
    
    faqs: [
      {
        q: "Do I need outdoor space to grow herbs?",
        a: "Not at all! Most of these herbs thrive indoors on a sunny windowsill or under a grow light. I include specific instructions for container gardening in apartments."
      },
      {
        q: "I've killed every plant I've owned. Will this work for me?",
        a: "Yes! I focus on the easiest, most forgiving herbs and give you troubleshooting guides for common problems. Plus, I've killed plenty of plants too—you'll learn from my mistakes!"
      },
      {
        q: "How much money can I actually save?",
        a: "A packet of fresh herbs costs $3-5 at the grocery store. A single basil plant gives you $50-100 worth of fresh basil over a season. The ROI is HUGE."
      }
    ],
    
    stats: {
      customers: "800+",
      avgSavings: "$300/year",
      successRate: "91%",
      rating: "4.8/5.0"
    }
  },
  
  {
    id: 4,
    name: "Autoimmune Recovery Guide",
    price: 27,
    image: "/products/autoimmune-recovery-guide.png",
    category: "Digital Guide",
    icon: BookOpen,
    tagline: "The exact protocol I used to heal 5 autoimmune diseases naturally",
    shortDescription: "Comprehensive guide with meal plans, stress management techniques, supplement recommendations, and weekly trackers—everything you need to start your healing journey.",
    fullDescription: `Five autoimmune diseases. Years of medications. Countless doctor visits. I was told I'd need pharmaceutical intervention for life.

Today, I'm in remission from all five conditions—naturally.

This guide is my complete protocol: the foods, supplements, stress management techniques, and lifestyle changes that gave me my life back. It's evidence-based, tested on my own body, and designed for real life (not perfection).

If you're exhausted from being exhausted, this is your starting point.`,
    
    features: [
      "Complete anti-inflammatory food list with scientific backing",
      "4-week meal plan with 30+ healing recipes",
      "Supplement protocol with dosages and recommended brands",
      "Stress management worksheets and techniques",
      "Weekly symptom tracker and health journal",
      "Sleep optimization guide",
      "Gut healing protocol",
      "Environmental toxin reduction checklist",
      "Exercise guidelines for autoimmune conditions",
      "Email support for questions",
      "Bonus: Autoimmune-friendly shopping list"
    ],
    
    conditions: [
      "Hashimoto's Thyroiditis",
      "Rheumatoid Arthritis",
      "Lupus",
      "Psoriasis/Psoriatic Arthritis",
      "Inflammatory Bowel Disease (Crohn's, UC)",
      "Celiac Disease",
      "Multiple Sclerosis",
      "Type 1 Diabetes",
      "And many others"
    ],
    
    protocol: [
      {
        phase: "Phase 1: Foundation (Weeks 1-2)",
        focus: "Remove inflammatory foods, stabilize gut",
        actions: ["Eliminate common triggers", "Add healing foods", "Start gentle movement", "Begin symptom tracking"]
      },
      {
        phase: "Phase 2: Healing (Weeks 3-4)",
        focus: "Gut repair, reduce inflammation",
        actions: ["Introduce gut-healing supplements", "Optimize sleep", "Add stress management", "Monitor improvements"]
      },
      {
        phase: "Phase 3: Optimization (Ongoing)",
        focus: "Fine-tune protocol, maintain results",
        actions: ["Personalize approach", "Identify triggers", "Build sustainable habits", "Track long-term progress"]
      }
    ],
    
    testimonials: [
      {
        text: "Finally, someone who gets it! This guide gave me hope and a real plan to follow. My joint pain is 80% better after 6 weeks.",
        author: "Simone W.",
        location: "Bowie, MD",
        condition: "Rheumatoid Arthritis",
        rating: 5
      },
      {
        text: "I've spent thousands on specialists. This $27 guide had more actionable info than all of them combined. In remission for 8 months now!",
        author: "Patricia K.",
        location: "DC",
        condition: "Hashimoto's & Lupus",
        rating: 5
      }
    ],
    
    faqs: [
      {
        q: "Will this work for my specific autoimmune condition?",
        a: "While everyone's journey is unique, these protocols address the root causes common to all autoimmune diseases: inflammation, gut health, and immune system dysregulation. Many have found success with various conditions."
      },
      {
        q: "Can I use this alongside my medications?",
        a: "Absolutely! This guide is designed to complement medical treatment, not replace it. Always work with your healthcare provider when making changes."
      },
      {
        q: "How long until I see results?",
        a: "Most people notice improvements within 2-4 weeks. Significant changes typically occur around 8-12 weeks. Full healing takes time—be patient with yourself."
      }
    ],
    
    stats: {
      users: "1,500+",
      avgImprovement: "65%",
      remissionRate: "42%",
      rating: "4.9/5.0"
    }
  },
  
  {
    id: 5,
    name: "Black Women's Health Advocacy Toolkit",
    price: 27,
    image: "/products/advocacy-toolkit.png",
    category: "Digital Toolkit",
    icon: Download,
    tagline: "Get the healthcare you deserve—advocate like a pro",
    shortDescription: "Essential tools and scripts for navigating the healthcare system as a Black woman, including doctor communication templates and insurance navigation guides.",
    fullDescription: `Black women's pain is systematically dismissed. Our symptoms are minimized. Our concerns are ignored. I know—because I lived it for years.

This toolkit arms you with the exact strategies, scripts, and documentation methods that helped me go from being dismissed to being heard, from misdiagnosis to proper treatment, from fighting for scraps to demanding excellence.

Your voice matters. Your health matters. You deserve better. This toolkit shows you how to get it.`,
    
    features: [
      "Doctor appointment preparation checklist",
      "Communication scripts for common scenarios",
      "Medical symptom journal templates",
      "Insurance navigation guide and appeals process",
      "How to request specific tests and referrals",
      "Legal rights documentation and resources",
      "Questions to ask potential doctors",
      "Red flags: When to find a new provider",
      "Telehealth appointment strategies",
      "Building your healthcare team guide",
      "Emergency preparedness checklist"
    ],
    
    scripts: [
      {
        scenario: "Doctor Dismissing Your Symptoms",
        script: "\"I understand your perspective, but I'm experiencing [specific symptoms] that are significantly impacting my daily life. I'd like these documented in my chart and I'd like us to discuss diagnostic options.\""
      },
      {
        scenario: "Requesting Specific Tests",
        script: "\"Based on my symptoms of [X, Y, Z], I've researched and would like to request [specific test]. If you don't think it's necessary, I'd appreciate if you could document your reasoning in my chart.\""
      },
      {
        scenario: "Denied Insurance Coverage",
        script: "\"I'm formally requesting the appeals process information and would like written documentation of why this was denied, including the specific policy clause and medical rationale.\""
      },
      {
        scenario: "Gaslighting About Pain",
        script: "\"My pain is real and measurable at [X/10]. I need us to develop a treatment plan. If you're unable to help, I'll need a referral to someone who specializes in [condition].\""
      }
    ],
    
    sections: [
      {
        title: "Preparing for Appointments",
        content: "Checklists, symptom tracking, what to bring, how to document"
      },
      {
        title: "Communication Strategies",
        content: "Scripts, assertive language, how to push back, getting things documented"
      },
      {
        title: "Insurance Navigation",
        content: "Understanding coverage, appeals process, fighting denials, financial assistance"
      },
      {
        title: "Finding the Right Doctor",
        content: "Questions to ask, red flags, building your team, second opinions"
      },
      {
        title: "Legal Rights",
        content: "Patient rights, HIPAA, discrimination, when to get legal help"
      }
    ],
    
    testimonials: [
      {
        text: "I used the scripts from this toolkit and finally got the referral I'd been asking for for 2 YEARS. Game changer.",
        author: "Nia J.",
        location: "Arlington, VA",
        rating: 5
      },
      {
        text: "Every Black woman needs this. I've been dismissed my whole life. Now I have the tools to advocate for myself effectively.",
        author: "Angela T.",
        location: "Baltimore, MD",
        rating: 5
      },
      {
        text: "This toolkit gave me my power back. I'm no longer afraid of doctor appointments. I go in prepared and leave heard.",
        author: "Zara L.",
        location: "DC",
        rating: 5
      }
    ],
    
    faqs: [
      {
        q: "What if using these scripts makes my doctor angry?",
        a: "If a doctor gets defensive when you advocate for yourself, that's a sign you need a new doctor. You deserve a provider who respects your agency."
      },
      {
        q: "Will this really help if I have Medicaid/limited insurance?",
        a: "Yes! The toolkit includes specific strategies for navigating different insurance types and finding affordable care options."
      },
      {
        q: "Is this legal advice?",
        a: "No, this is educational information about patient rights and advocacy strategies. For legal issues, consult an attorney."
      }
    ],
    
    stats: {
      downloads: "2,000+",
      successRate: "89%",
      avgUse: "4.2 appointments",
      rating: "4.9/5.0"
    }
  },
  
  {
    id: 6,
    name: "DoGood Wellness Circle",
    price: 27,
    recurring: "monthly",
    foundingPrice: 19,
    image: "/products/wellness-circle-membership.png",
    category: "Monthly Membership",
    icon: Users,
    tagline: "Your community for healing, growth, and sustainable wellness",
    shortDescription: "Monthly membership with live coaching, exclusive content, meal prep videos, and a supportive community of women on similar healing journeys.",
    fullDescription: `Healing alone is hard. Healing together changes everything.

The DoGood Wellness Circle is more than a membership—it's a sisterhood. A safe space where Black women support each other through thyroid journeys, autoimmune challenges, wellness transformations, and life's ups and downs.

Every month, you get live access to me, exclusive content you won't find anywhere else, and connection with women who truly understand what you're going through.

This is the community I wish I had when I was in the thick of it. Now it's here for you.`,
    
    features: [
      "Monthly live Q&A sessions with RoSeé (value: $97/month)",
      "Exclusive meal prep and cooking videos (2-3 new videos monthly)",
      "Private community forum for 24/7 support",
      "Early access to all new products and courses",
      "Member-only discounts (20% off all products)",
      "Monthly wellness challenges with prizes",
      "Expert guest trainings (nutritionists, therapists, coaches)",
      "Recipe archives (100+ exclusive recipes)",
      "Printable resources and worksheets",
      "Direct email access to RoSeé for questions",
      "Cancel anytime, no commitments"
    ],
    
    monthlyThemes: [
      {
        month: "January",
        theme: "New Year Reset",
        focus: "Goal setting, habit building, fresh starts"
      },
      {
        month: "February",
        theme: "Self-Love & Healing",
        focus: "Mental health, boundaries, self-care"
      },
      {
        month: "March",
        theme: "Nutrition Deep Dive",
        focus: "Macro balancing, meal planning, supplements"
      },
      {
        month: "April",
        theme: "Spring Renewal",
        focus: "Detox, energy, outdoor movement"
      },
      {
        month: "May",
        theme: "Stress Management",
        focus: "Burnout prevention, meditation, work-life balance"
      },
      {
        month: "June",
        theme: "Summer Wellness",
        focus: "Hydration, seasonal eating, staying consistent"
      }
    ],
    
    communityBenefits: [
      "Connect with 100+ women on similar journeys",
      "Share wins, struggles, and real talk",
      "Get accountability and motivation",
      "Learn from others' experiences",
      "Find your wellness tribe",
      "Never feel alone in your healing"
    ],
    
    special: "🎉 FOUNDING MEMBER SPECIAL: Join now for $19/month (normally $27/month). Lock in this rate for LIFE as long as you remain a member!",
    
    memberBenefit: true,
    
    testimonials: [
      {
        text: "The community alone is worth it. I finally found my people who understand what I'm going through. Plus RoSeé's live Q&As are gold!",
        author: "Zara L.",
        location: "DC Metro Area",
        memberSince: "6 months",
        rating: 5
      },
      {
        text: "Best $19 I spend every month. The exclusive recipes, the support, the education—all of it. I've tried to cancel to save money but I can't. It's too valuable.",
        author: "Maya T.",
        location: "Baltimore, MD",
        memberSince: "1 year",
        rating: 5
      },
      {
        text: "RoSeé answers my questions personally in the forum. I've never had that kind of access before. It's like having a wellness coach for $19/month!",
        author: "Jasmine R.",
        location: "Arlington, VA",
        memberSince: "8 months",
        rating: 5
      }
    ],
    
    faqs: [
      {
        q: "Can I cancel anytime?",
        a: "Yes! There are no commitments or cancellation fees. Cancel before your next billing date and you won't be charged again."
      },
      {
        q: "What if I can't make the live Q&As?",
        a: "All sessions are recorded and available in the member portal within 24 hours. Watch on your own schedule!"
      },
      {
        q: "Is the founding member price really locked in forever?",
        a: "Yes! As long as you remain an active member, your rate will never increase. But this founding rate is only available for the first 100 members."
      },
      {
        q: "What makes this different from other wellness communities?",
        a: "This is specifically for Black women navigating thyroid and autoimmune conditions. RoSeé is actively involved daily, not just collecting membership fees. It's authentic, raw, and REAL."
      }
    ],
    
    stats: {
      members: "100+",
      retention: "87%",
      avgEngagement: "4.3 logins/week",
      rating: "4.9/5.0"
    }
  }
];

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "MLKLEGACY") {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code");
      setPromoApplied(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* MLK Legacy Promo Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-white">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-wide mb-1">
                🕊️ Honoring Dr. King's Legacy
              </p>
              <p className="text-lg md:text-xl font-bold">
                50% OFF Thyroid Health Mastery Course This Week
              </p>
              <p className="text-sm opacity-90 mt-1">
                Use code <span className="font-mono bg-white/20 px-2 py-0.5 rounded">MLKLEGACY</span> at checkout • Valid through January 27, 2026
              </p>
            </div>
            <Button 
              size="lg"
              variant="secondary"
              className="rounded-3xl bg-white text-amber-700 hover:bg-gray-100 font-bold shrink-0"
              asChild
            >
              <Link href="/course/thyroid-health-mastery">
                Get Course Now →
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 text-lg px-6 py-2">
              <Shield className="h-5 w-5 mr-2 inline" />
              30-Day Money-Back Guarantee
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
              Your Healing Journey Starts Here
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Evidence-based programs and resources designed specifically for Black women
              navigating thyroid disease, autoimmune conditions, and wellness transformation.
              <br /><br />
              <strong className="text-foreground">Created by RoSeé</strong> — thyroid cancer survivor, healed from 5 autoimmune diseases, 
              and your guide to getting the healthcare you deserve.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">4.9/5 Average Rating</span>
              </div>
              <div>•</div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">3,500+ Students & Counting</span>
              </div>
              <div>•</div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-semibold">Evidence-Based & Tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={product.id} 
                  id={product.id === 1 ? "thyroid-course" : undefined}
                  className={`hover:shadow-2xl transition-all duration-300 flex flex-col relative group ${
                    product.bestseller || product.popular ? 'border-2 border-primary' : ''
                  }`}
                >
                  {/* Badge for bestseller/popular/special */}
                  {product.bestseller && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-yellow-500 text-black font-bold px-4 py-1.5 text-sm">
                        ⭐ BEST SELLER
                      </Badge>
                    </div>
                  )}
                  {product.popular && !product.bestseller && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-primary font-bold px-4 py-1.5 text-sm">
                        🔥 MOST POPULAR
                      </Badge>
                    </div>
                  )}
                  {product.special && !product.bestseller && !product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-green-600 text-white font-bold px-4 py-1.5 text-sm">
                        💚 SPECIAL OFFER
                      </Badge>
                    </div>
                  )}

                  {/* Product Image */}
                  <div 
                    className="w-full h-56 bg-cover bg-center rounded-t-lg relative overflow-hidden"
                    style={{ 
                      backgroundImage: `url(${product.image})`,
                      backgroundColor: '#f0f0f0' // fallback
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="mb-2 font-semibold">
                        {product.category}
                      </Badge>
                      <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-lg">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <IconComponent className="h-8 w-8 text-primary shrink-0" />
                      <div className="text-right">
                        {product.id === 1 && promoApplied ? (
                          <>
                            <div className="text-xl text-muted-foreground line-through">
                              ${product.price}
                            </div>
                            <div className="text-3xl font-bold text-green-600">
                              $48.50
                            </div>
                            <Badge className="mt-1 bg-green-600">MLK Legacy 50% OFF</Badge>
                          </>
                        ) : (
                          <>
                            {product.foundingPrice && (
                              <div className="text-xl text-muted-foreground line-through">
                                ${product.price}
                              </div>
                            )}
                            <div className="text-3xl font-bold text-primary">
                              ${product.foundingPrice || product.price}
                            </div>
                          </>
                        )}
                        {product.recurring && (
                          <div className="text-sm text-muted-foreground">
                            per {product.recurring}
                          </div>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight mb-2">
                      {product.tagline}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {product.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4">
                    {product.special && (
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-3 rounded-r text-sm">
                        <p className="font-semibold text-yellow-900">
                          {product.special}
                        </p>
                      </div>
                    )}

                    {/* Key Stats */}
                    {product.stats && (
                      <div className="grid grid-cols-2 gap-2 text-center text-xs bg-secondary/20 rounded-lg p-3">
                        {Object.entries(product.stats).slice(0, 4).map(([key, value]) => (
                          <div key={key}>
                            <div className="font-bold text-primary text-base">{value}</div>
                            <div className="text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Top Features */}
                    <div>
                      <p className="font-semibold text-sm mb-2">What's Included:</p>
                      <ul className="space-y-1.5">
                        {product.features.slice(0, 5).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {product.features.length > 5 && (
                        <p className="text-sm text-primary font-semibold mt-2">
                          + {product.features.length - 5} more features
                        </p>
                      )}
                    </div>

                    {/* Single Testimonial */}
                    {product.testimonials && product.testimonials[0] && (
                      <div className="bg-secondary/20 rounded-lg p-4">
                        <div className="flex gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <p className="text-sm italic mb-2 line-clamp-3">
                          "{product.testimonials[0].text}"
                        </p>
                        <p className="text-xs text-muted-foreground">
                          — {product.testimonials[0].author}, {product.testimonials[0].location}
                        </p>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="flex-col gap-2 pt-4">
                    {product.id === 1 ? (
                      <Button 
                        size="lg" 
                        className="w-full rounded-3xl text-lg font-semibold group-hover:scale-105 transition-transform"
                        asChild
                      >
                        <Link href="/course/thyroid-health-mastery">
                          {product.recurring ? 'Start Membership' : 'Get Instant Access'}
                          <TrendingUp className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    ) : (
                      <Button 
                        size="lg" 
                        className="w-full rounded-3xl text-lg font-semibold group-hover:scale-105 transition-transform"
                        onClick={() => setSelectedProduct(product)}
                      >
                        {product.recurring ? 'Start Membership' : 'Get Instant Access'}
                        <TrendingUp className="ml-2 h-5 w-5" />
                      </Button>
                    )}
                    <p className="text-xs text-center text-muted-foreground">
                      <Shield className="h-3 w-3 inline mr-1" />
                      30-day money-back guarantee • Instant access
                    </p>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Women Trust AskDoGood
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Lived Experience</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Created by someone who's been through it—thyroid cancer, 5 autoimmune diseases, 
                  healthcare dismissal, and complete healing. This isn't theory. It's survival.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Evidence-Based</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every recommendation backed by research, clinical evidence, and real results. 
                  No pseudoscience. No trendy wellness fads. Just what actually works.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Community First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Join 3,500+ women supporting each other through healing, growth, and transformation. 
                  You're not alone anymore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Results Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Real Women, Real Results
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              These are actual outcomes from women who've used these programs
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-700 mb-2">87%</div>
                <p className="text-sm text-muted-foreground">Report significant symptom improvement</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-700 mb-2">3,500+</div>
                <p className="text-sm text-muted-foreground">Women transformed their health</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-purple-700 mb-2">42%</div>
                <p className="text-sm text-muted-foreground">Achieved autoimmune remission</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-orange-700 mb-2">4.9/5</div>
                <p className="text-sm text-muted-foreground">Average satisfaction rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MERCH SECTION */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full mb-4">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-sm font-bold">OFFICIAL MERCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Healing Looks Good On You
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rep your wellness journey. Real talk merch that sparks conversations and celebrates healing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Featured Merch Items */}
            <Card className="hover:shadow-xl transition-all group">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-amber-100 to-orange-100">
                <img 
                  src="/images/merch/mockup_mug_gratitude.webp" 
                  alt="Gratitude Mug"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400"; }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">The "Gratitude" Mug</CardTitle>
                <CardDescription>Less f*ckin' attitude, more f*ckin' gratitude</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$18</span>
                  <Badge variant="secondary">Mugs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all group">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-cream-100 to-beige-100">
                <img 
                  src="/images/merch/mockup_tshirt_progress.webp" 
                  alt="Progress Tee"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"; }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">The "Progress" Tee</CardTitle>
                <CardDescription>Progress over perfection every damn time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$28</span>
                  <Badge variant="secondary">T-Shirts</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all group">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-100 to-slate-100">
                <img 
                  src="/images/merch/mockup_hoodie_healing.webp" 
                  alt="Healing Hoodie"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"; }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">The "Healing" Hoodie</CardTitle>
                <CardDescription>Healing isn't linear and that's okay</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$52</span>
                  <Badge variant="secondary">Hoodies</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all group">
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-green-100 to-teal-100">
                <img 
                  src="/images/merch/mockup_tote_thriving.webp" 
                  alt="Thriving Tote"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400"; }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">The "Thriving" Tote</CardTitle>
                <CardDescription>Carry your wellness essentials in style</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$22</span>
                  <Badge variant="secondary">Totes</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/merch">
              <Button size="lg" className="gap-2 rounded-3xl text-lg">
                Shop All Merch <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              20+ designs • Mugs, Tees, Hoodies & Totes • Fast shipping
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-2 text-lg">Are these programs for Black women only?</h3>
                <p className="text-muted-foreground">
                  While my content centers Black women's health experiences and addresses healthcare disparities we face,
                  anyone can benefit from these evidence-based programs. The medical science applies to everyone, and the 
                  advocacy tools help anyone who's been dismissed or marginalized in healthcare settings.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-2 text-lg">What if I don't have a thyroid diagnosis?</h3>
                <p className="text-muted-foreground">
                  Many programs focus on general wellness, autoimmune health, and plant-based nutrition that benefit
                  anyone looking to optimize their health. The advocacy toolkit is valuable for anyone navigating the 
                  healthcare system, regardless of diagnosis.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-2 text-lg">Is there a money-back guarantee?</h3>
                <p className="text-muted-foreground">
                  Yes! All digital products come with a 30-day money-back guarantee. If you're not satisfied with your 
                  purchase, email me at rosee@askdogood.com for a full refund—no questions asked, no hard feelings.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-2 text-lg">Can I purchase multiple products?</h3>
                <p className="text-muted-foreground">
                  Absolutely! Wellness Circle members automatically get 20% off all digital products. We also offer custom 
                  bundles—email rosee@askdogood.com to tell me your health goals and I'll recommend the best combination 
                  of resources for you.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-2 text-lg">How do I access the products after purchase?</h3>
                <p className="text-muted-foreground">
                  You'll receive instant access via email with login credentials to our secure member portal. All videos, 
                  PDFs, and resources are available immediately—no waiting, no shipping delays. You can access everything 
                  from any device, anywhere.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-2 text-lg">Do you offer payment plans?</h3>
                <p className="text-muted-foreground">
                  For the Thyroid Health Mastery Course ($97), I offer a 3-payment plan of $35/month. Email me at 
                  rosee@askdogood.com to set this up. The Wellness Circle membership is already affordable at $19-27/month 
                  with no long-term commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join thousands of women who've transformed their health with evidence-based programs
              designed for real life—not perfection. Your healing journey starts with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="rounded-3xl text-lg px-8 font-semibold">
                View All Products
              </Button>
              <Button size="lg" variant="outline" className="rounded-3xl text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                Join Wellness Circle - $19/mo
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              Questions? Email rosee@askdogood.com • 30-Day Money-Back Guarantee on All Products
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}