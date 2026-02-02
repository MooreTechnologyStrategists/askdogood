import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Star, Download, Video, BookOpen, Users, Award, Shield, Clock, TrendingUp, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const products = [
  // Add your real product URLs here (Gumroad, Stripe, or internal detail pages)
  // Example: productUrl: "https://gumroad.com/l/thyroid-health-mastery"
  {
    id: 1,
    name: "Thyroid Health Mastery Course",
    productUrl: "https://roosecraft.gumroad.com/l/thyroid-health-mastery",
    price: 97,
    image: "https://askdogoodassets.blob.core.windows.net/images/products/Thyroid_Health_Mastery_Cover.png",
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
    productUrl: "https://roosecraft.gumroad.com/l/clinical-food-rx",
    price: 47,
    image: "https://askdogoodassets.blob.core.windows.net/images/products/Clinical_Food_RX_Cover.png",
    category: "Transformation Program",
    icon: BookOpen,
    tagline: "Transform your health in 3 weeks with delicious plant-based meals",
    shortDescription: "A complete 21-day program with meal plans, recipes, shopping lists, and daily support to help you lose weight, reduce inflammation, and feel amazing.",
    fullDescription: `Ready to feel better in just 3 weeks? This isn't a restrictive diet—it's a delicious, nourishing reset that reduces inflammation, supports weight loss, boosts energy, and helps manage autoimmune conditions.`,
  },
  {
    name: "Thyroid Lab Interpretation Guide",
    productUrl: "https://roosecraft.gumroad.com/l/thyroid-lab-guide",
    price: 27,
    image: "https://askdogoodassets.blob.core.windows.net/images/products/Lab_Interpretation_Guide_Cover.png",
    features: [
      "Comprehensive lab interpretation for thyroid health",
      "Understand your results and what they mean",
      "Optimal ranges and what to ask your doctor"
    ]
  },
  {
    name: "Thyroid Supplement Protocol Templates",
    productUrl: "https://roosecraft.gumroad.com/l/adioal",
    price: 17,
    image: "https://askdogoodassets.blob.core.windows.net/images/products/Thyroid_Health_Mastery_Cover.png",
    features: [
      "Downloadable supplement protocol templates",
      "Personalize your thyroid support plan",
      "Easy to use and doctor-friendly"
    ]
  },
  
  {
    id: 3,
    name: "Garden to Table Wellness Bundle",
    productUrl: "https://gumroad.com/l/garden-to-table-bundle", // Example URL
    price: 37,
    image: "/images/branding/askdogood-logo-aqua.png",
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
    productUrl: "https://gumroad.com/l/autoimmune-recovery-guide", // Example URL
    price: 27,
    image: "/images/branding/askdogood-logo-navy.png",
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
    image: "/images/branding/askdogood-logo-orange.png",
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
    image: "/images/branding/askdogood-logo-navy.png",
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
  },

  // MERCHANDISE COLLECTION
  {
    id: 7,
    name: "\"Thyroid Thriver\" Premium Tee",
    price: 32,
    image: "/images/branding/askdogood-logo-aqua.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "Wear your victory. Rep your resilience.",
    shortDescription: "Ultra-soft premium cotton tee featuring bold, empowering design celebrating thyroid warriors. Available in 6 vibrant colorways.",
    fullDescription: `This isn't just a shirt—it's a statement. The "Thyroid Thriver" tee features a stunning anatomical thyroid butterfly graphic with the words "I Don't Just Survive, I THRIVE" in bold, holographic-effect lettering.

Premium ring-spun cotton, ethically sourced, designed to last through countless washes while maintaining its vivid colors and soft feel. Each purchase supports thyroid health education in underserved communities.`,
    
    features: [
      "100% premium ring-spun cotton (pre-shrunk)",
      "Unisex fit, true to size",
      "Vibrant DTG (Direct-to-Garment) printing",
      "Holographic foil accent on key text",
      "Available in 6 colors: Black, Navy, Forest Green, Burgundy, Charcoal, Vintage White",
      "Sizes: XS - 4XL (inclusive sizing)",
      "Machine washable, colors won't fade",
      "Ethically manufactured",
      "Proceeds support thyroid health education"
    ],
    
    colors: ["Black", "Navy", "Forest Green", "Burgundy", "Charcoal", "Vintage White"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"]
  },

  {
    id: 8,
    name: "\"Ask DoGood\" Vintage Washed Hoodie",
    price: 58,
    image: "/images/branding/askdogood-logo-orange.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "Cozy vibes. Bold mission. Maximum comfort.",
    shortDescription: "Oversized vintage-washed hoodie with embroidered 'Ask DoGood' logo and powerful back graphic. Perfect for healing season energy.",
    fullDescription: `The ultimate comfort piece for your wellness journey. This vintage-washed hoodie features our signature "Ask DoGood" embroidered logo on the chest, with a massive back graphic showing a radiant Black woman surrounded by healing herbs, vegetables, and the phrase "Healing is My Birthright."

Intentionally oversized for maximum coziness. The vintage wash gives each hoodie a unique, lived-in feel. Hood drawstrings feature custom wooden bead details with the DoGood logo.`,
    
    features: [
      "80% cotton / 20% recycled polyester blend",
      "Vintage enzyme wash for soft, worn-in feel",
      "Oversized fit (order true to size for oversized, size down for fitted)",
      "Embroidered chest logo (won't crack or peel)",
      "Full-color back graphic (13\" x 17\")",
      "Kangaroo pocket with reinforced stitching",
      "Custom wooden bead drawstring details",
      "Double-lined hood for extra warmth",
      "Available in 4 colors: Vintage Black, Sage Green, Dusty Rose, Oatmeal",
      "Sizes: S - 3XL"
    ],
    
    colors: ["Vintage Black", "Sage Green", "Dusty Rose", "Oatmeal"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"]
  },

  {
    id: 9,
    name: "\"Real Food, Real Healing\" Dad Cap",
    price: 28,
    image: "/images/branding/askdogood-logo-navy.png",
    category: "Accessories",
    icon: ShoppingBag,
    tagline: "Low-profile style. High-vibration energy.",
    shortDescription: "Classic dad cap with embroidered slogan and adjustable strap. Perfect for market runs, garden days, and casual healing vibes.",
    fullDescription: `Your go-to cap for farmer's market Saturdays, garden workdays, and everywhere in between. Features the iconic "Real Food, Real Healing" embroidered on the front in a custom serif font, with a tiny vegetable medley embroidered on the side.

Unstructured crown, curved brim, vintage brass buckle closure. This cap molds to your head for that perfect broken-in feel from day one.`,
    
    features: [
      "100% organic cotton twill",
      "Unstructured 6-panel design",
      "Pre-curved brim",
      "Embroidered front text and side graphic",
      "Adjustable brass buckle closure",
      "Moisture-wicking sweatband",
      "Low-profile fit",
      "Available in 5 colors: Olive, Black, Tan, Navy, Terracotta",
      "One size fits most (adjustable)",
      "Breathable and lightweight"
    ],
    
    colors: ["Olive", "Black", "Tan", "Navy", "Terracotta"]
  },

  {
    id: 10,
    name: "\"Autoimmune Warrior\" Crewneck Sweatshirt",
    price: 48,
    image: "/images/branding/askdogood-logo-aqua.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "Soft armor for your healing journey.",
    shortDescription: "Premium heavyweight crewneck with bold typography and warrior-inspired design. Cozy enough for rest days, powerful enough to remind you of your strength.",
    fullDescription: `This sweatshirt is your soft armor. Featuring striking typography that reads "Autoimmune WARRIOR: Fighting Battles You Can't See, Winning Wars You Can't Imagine" alongside a powerful graphic of raised fists surrounded by healing plants and immune cells.

The heavyweight fleece keeps you warm during those days when autoimmune flares make you cold. The reminder keeps you strong when you need it most.`,
    
    features: [
      "12 oz heavyweight fleece (extra thick and cozy)",
      "80% cotton / 20% polyester blend",
      "Ribbed collar, cuffs, and waistband (holds shape)",
      "Full-color screen print graphic (chest and sleeve)",
      "Oversized fit for maximum comfort",
      "Pre-shrunk fabric",
      "Available in 5 colors: Ash Grey, Brick Red, Forest, Black, Cream",
      "Sizes: S - 3XL",
      "Perfect for chronic illness rest days",
      "$5 from each purchase supports autoimmune research"
    ],
    
    colors: ["Ash Grey", "Brick Red", "Forest", "Black", "Cream"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"]
  },

  {
    id: 11,
    name: "\"Garden to Table\" Organic Tote Bag",
    price: 24,
    image: "/images/branding/askdogood-logo-orange.png",
    category: "Accessories",
    icon: ShoppingBag,
    tagline: "Sustainable. Spacious. Statement-making.",
    shortDescription: "Heavy-duty organic canvas tote with vibrant veggie illustration. Perfect for farmer's market hauls, groceries, or everyday use.",
    fullDescription: `Ditch the plastic and carry your healing foods in style. This oversized tote features a gorgeous hand-drawn illustration of heirloom vegetables, herbs, and fruits in vivid colors wrapping around the entire bag.

The phrase "Garden to Table, Seed to Soul" is printed on both sides. Interior pocket keeps your phone and keys secure while you shop.`,
    
    features: [
      "100% organic cotton canvas (GOTS certified)",
      "Extra-large capacity (16\" W x 16\" H x 6\" D)",
      "Reinforced bottom and stress points",
      "Long handles (10\" drop) for shoulder carry",
      "Interior zippered pocket",
      "Full-color wrap-around illustration",
      "Double-sided printing",
      "Holds 30+ lbs comfortably",
      "Machine washable",
      "Plastic-free, reusable, sustainable"
    ],
    
    colors: ["Natural Canvas"]
  },

  {
    id: 12,
    name: "\"Black Girl Magic Healing\" Crop Hoodie",
    price: 52,
    image: "/images/branding/askdogood-logo-navy.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "Cropped comfort meets unapologetic power.",
    shortDescription: "Trendy cropped hoodie celebrating Black women's healing journey. Soft French terry with celestial-inspired graphics.",
    fullDescription: `A celebration of Black Girl Magic in healing spaces. This cropped hoodie features a stunning celestial design: a melanated goddess with a crown of stars, surrounded by medicinal herbs, crystals, and the words "My Ancestors Survived So I Could THRIVE."

French terry fabric is breathable yet warm. The cropped length hits right at the waist—perfect with high-waisted jeans or leggings. Pairs perfectly with confidence.`,
    
    features: [
      "Premium French terry (soft inside, smooth outside)",
      "Cropped length (hits at natural waist)",
      "Drawstring hood with metal eyelets",
      "Dropped shoulder for relaxed fit",
      "Full-color chest graphic with metallic gold accents",
      "Ribbed hem and cuffs",
      "Available in 4 colors: Black, Lavender, Sage, Ivory",
      "Sizes: XS - 2XL",
      "Designed by Black female artist",
      "Portion of proceeds supports Black women's health initiatives"
    ],
    
    colors: ["Black", "Lavender", "Sage", "Ivory"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"]
  },

  {
    id: 13,
    name: "\"Normalize Rest\" Oversized Sleep Tee",
    price: 38,
    image: "/images/branding/askdogood-logo-aqua.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "Sleep is productive. Rest is revolutionary.",
    shortDescription: "Ultra-soft oversized sleep shirt with dreamy cloud typography. Because chronic illness warriors deserve luxury rest.",
    fullDescription: `Chronic illness means rest isn't lazy—it's necessary. This oversized sleep tee celebrates that truth with gorgeous cloud-style lettering that reads "Normalize Rest" across the front, with "My Body is Healing While I Sleep" in smaller text underneath.

Made from the softest modal blend you've ever felt. Long enough to be a dress, cozy enough to never want to take off. Perfect for flare days, recovery days, and every day in between.`,
    
    features: [
      "95% modal / 5% spandex (incredibly soft and stretchy)",
      "Oversized boyfriend fit (very roomy)",
      "Dropped shoulders and curved hem",
      "Length: 32\" (dress-length on most)",
      "Cloud-style puff print text",
      "Breathable and moisture-wicking",
      "Available in 4 colors: Soft Pink, Sky Blue, Lavender, Mint",
      "Sizes: One Size (fits XS-2XL) & Plus Size (fits 2XL-5XL)",
      "Machine washable, gets softer with every wash",
      "Perfect for chronic illness rest days"
    ],
    
    colors: ["Soft Pink", "Sky Blue", "Lavender", "Mint"],
    sizes: ["One Size", "Plus Size"]
  },

  {
    id: 14,
    name: "\"Good Energy Only\" Tie-Dye Sweatpants",
    price: 44,
    image: "/images/branding/askdogood-logo-orange.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "Manifestation meets maximum comfort.",
    shortDescription: "Hand-dyed fleece sweatpants with embroidered mantra. Each pair is one-of-a-kind with healing color therapy in mind.",
    fullDescription: `Wellness meets streetwear. These aren't your average sweatpants. Each pair is hand-dyed using healing color therapy principles (warm tones for grounding, cool tones for calming) and features "Good Energy Only" embroidered down the left leg.

High-waisted with a drawstring tie and deep pockets (phone-friendly). The tie-dye pattern is unique to each pair—no two are exactly alike. Matching set available with our tie-dye hoodie.`,
    
    features: [
      "Hand-dyed using non-toxic, eco-friendly dyes",
      "80% cotton / 20% polyester fleece",
      "High-waisted fit with drawstring waistband",
      "Embroidered text down left leg",
      "Deep side pockets (fits smartphone)",
      "Relaxed tapered leg",
      "Elastic ankle cuffs",
      "Each piece is unique (no two identical)",
      "Available in 3 color themes: Sunset (warm tones), Ocean (cool tones), Earth (neutral tones)",
      "Sizes: XS - 3XL",
      "Matching hoodie available"
    ],
    
    colorThemes: ["Sunset", "Ocean", "Earth"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"]
  },

  {
    id: 15,
    name: "\"Plant-Powered\" Mesh Snapback",
    price: 32,
    image: "/images/branding/askdogood-logo-navy.png",
    category: "Accessories",
    icon: ShoppingBag,
    tagline: "Breathable. Bold. Unapologetically plant-based.",
    shortDescription: "Trucker-style mesh snapback with 3D embroidered logo. Perfect for workouts, outdoor adventures, and summer vibes.",
    fullDescription: `Rep the plant-based lifestyle in style. This mesh snapback features bold 3D puff embroidery that reads "Plant-Powered" on the front, with a small vegetable medley embroidered on the side. The back mesh panels keep you cool during workouts, garden work, or hot summer days.

Structured front panels give the cap shape while the mesh back provides breathability. Snapback closure ensures perfect fit every time.`,
    
    features: [
      "65% cotton / 35% polyester front panels",
      "100% polyester mesh back panels",
      "Structured 6-panel design",
      "3D puff embroidery (raised, textured)",
      "Flat brim (can be curved to preference)",
      "Snapback closure (adjustable)",
      "Moisture-wicking sweatband",
      "Available in 5 colorways: Black/White, Navy/Gold, Forest/Tan, Pink/White, Charcoal/Neon",
      "One size fits most",
      "Perfect for active lifestyles"
    ],
    
    colors: ["Black/White", "Navy/Gold", "Forest/Tan", "Pink/White", "Charcoal/Neon"]
  },

  {
    id: 16,
    name: "\"Healing Happens Here\" Embroidered Joggers",
    price: 54,
    image: "/images/branding/askdogood-logo-aqua.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "Luxury loungewear for your wellness journey.",
    shortDescription: "Premium fleece joggers with subtle embroidered mantra. Where comfort meets intentional healing.",
    fullDescription: `These aren't just joggers—they're a gentle reminder that healing is happening in every moment of rest. "Healing Happens Here" is subtly embroidered near the ankle, alongside a small lotus flower symbol.

Premium heavyweight fleece with a buttery-soft interior. High-waisted with a flattering tapered leg. Deep pockets hold everything. These joggers are so comfortable, you'll want to live in them.`,
    
    features: [
      "Premium heavyweight fleece (400 GSM)",
      "85% cotton / 15% polyester blend",
      "High-waisted with wide elastic waistband and drawstring",
      "Tapered leg with ribbed ankle cuffs",
      "Deep side pockets + back pocket",
      "Subtle ankle embroidery",
      "Flattering fit (not baggy)",
      "Pre-shrunk fabric",
      "Available in 5 colors: Black, Charcoal, Mauve, Sage, Oatmeal",
      "Sizes: XS - 3XL",
      "Pairs perfectly with our hoodies"
    ],
    
    colors: ["Black", "Charcoal", "Mauve", "Sage", "Oatmeal"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"]
  },

  {
    id: 17,
    name: "\"Bloom Where You're Planted\" Bucket Hat",
    price: 30,
    image: "/images/branding/askdogood-logo-orange.png",
    category: "Accessories",
    icon: ShoppingBag,
    tagline: "Garden vibes. Festival ready. Sun protected.",
    shortDescription: "Reversible bucket hat with floral embroidery and sun protection. Two looks in one versatile piece.",
    fullDescription: `Your garden-to-festival essential. This reversible bucket hat features an embroidered wildflower design on one side with "Bloom Where You're Planted" text, and a solid color on the reverse—giving you two complete looks in one hat.

Wide brim provides UPF 50+ sun protection. Interior moisture-wicking band keeps you cool. Packable and travel-friendly—stuffs into its own pocket.`,
    
    features: [
      "100% cotton canvas with UPF 50+ protection",
      "Reversible design (2 hats in 1)",
      "Wide brim for maximum sun coverage (2.75\")",
      "Embroidered floral design on printed side",
      "Solid color on reverse side",
      "Moisture-wicking interior sweatband",
      "Unisex fit",
      "Packable (includes stuff pocket)",
      "Available in 4 colorways: Floral/Black, Floral/Cream, Floral/Sage, Floral/Terracotta",
      "One size fits most (23\" circumference)",
      "Perfect for gardening, festivals, beach days"
    ],
    
    colors: ["Floral/Black", "Floral/Cream", "Floral/Sage", "Floral/Terracotta"]
  },

  {
    id: 18,
    name: "\"Wellness Warrior\" Ringer Tee",
    price: 34,
    image: "/images/branding/askdogood-logo-navy.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "Vintage vibes. Modern mission. Timeless message.",
    shortDescription: "Classic ringer tee with retro-inspired typography celebrating your wellness journey. Soft, lightweight, and effortlessly cool.",
    fullDescription: `Channel vintage athletic vibes with a wellness twist. This ringer tee features retro-inspired typography reading "Wellness Warrior Since [Year]" (customizable to your wellness journey start year) with a vintage sunset graphic and silhouette of a woman in a yoga pose.

The contrasting ringer trim on the collar and sleeves adds that perfect throwback touch. Lightweight and breathable—perfect for workouts, casual days, or layering.`,
    
    features: [
      "100% combed ring-spun cotton",
      "Lightweight and breathable (4.3 oz)",
      "Contrasting ringer trim on collar and sleeves",
      "Vintage-inspired screen print graphic",
      "Customizable year option (specify at checkout)",
      "Relaxed unisex fit",
      "Available in 5 colorways: White/Black, White/Burgundy, Heather/Navy, Cream/Forest, Pink/Black",
      "Sizes: XS - 2XL",
      "Perfect for layering or wearing solo",
      "Retro-athletic aesthetic"
    ],
    
    colors: ["White/Black", "White/Burgundy", "Heather/Navy", "Cream/Forest", "Pink/Black"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"]
  },

  // NEW PRODUCTS - PENDING IMAGE EDITING
  {
    id: 17,
    name: "DMV Discernment T-Shirt",
    price: 32,
    image: "/mockups/tshirt-dmv-discernment.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "DMV energy, refined palate, elevated standards",
    shortDescription: "Bold statement tee celebrating the DMV's unique culture of knowing what's real.",
    fullDescription: `The DMV knows quality when we see it—in food, in style, in people. This tee celebrates that refined discernment with bold typography and unapologetic energy.`,
    features: [
      "100% premium ring-spun cotton",
      "Unisex fit, true to size",
      "Screen-printed graphic",
      "Ask DoGood logo on left sleeve",
      "Available in Black, White, Charcoal",
      "Sizes: S - 3XL"
    ],
    colors: ["Black", "White", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"]
  },

  {
    id: 18,
    name: "NC Version DMV Tee",
    price: 32,
    image: "/mockups/tshirt-nc-version.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "NC vibes with that same energy",
    shortDescription: "A playful North Carolina take on discernment culture.",
    fullDescription: `Because NC has its own flavor of knowing what's good. This variation celebrates the Carolinas with style.`,
    features: [
      "100% premium ring-spun cotton",
      "Unisex fit, true to size",
      "Screen-printed graphic",
      "Ask DoGood logo on left sleeve",
      "Available in Black, White, Heather Grey",
      "Sizes: S - 3XL"
    ],
    colors: ["Black", "White", "Heather Grey"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"]
  },

  {
    id: 19,
    name: "\"Not Loud, Just Heard\" Tee",
    price: 32,
    image: "/mockups/tshirt-not-loud.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "Quiet confidence, undeniable presence",
    shortDescription: "Statement tee for those who command attention without raising their voice.",
    fullDescription: `You don't need volume to have impact. This tee celebrates quiet power and intentional presence.`,
    features: [
      "100% premium ring-spun cotton",
      "Unisex fit, true to size",
      "Screen-printed graphic",
      "Ask DoGood logo placement",
      "Available in Black, White, Sage Green",
      "Sizes: S - 3XL"
    ],
    colors: ["Black", "White", "Sage Green"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"]
  },

  {
    id: 20,
    name: "\"Peace is Non-Negotiable\" Tee",
    price: 32,
    image: "/mockups/tshirt-peace-non-negotiable.png",
    category: "Apparel",
    icon: ShoppingBag,
    tagline: "Boundaries. Healing. Non-negotiable peace.",
    shortDescription: "Bold reminder that your peace comes first—always.",
    fullDescription: `Set the boundary. Protect your energy. This tee is a daily reminder that peace isn't optional—it's essential.`,
    features: [
      "100% premium ring-spun cotton",
      "Unisex fit, true to size",
      "Screen-printed graphic",
      "Ask DoGood logo on left sleeve",
      "Available in Black, White, Navy",
      "Sizes: S - 3XL"
    ],
    colors: ["Black", "White", "Navy"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"]
  },

  {
    id: 21,
    name: "Hydrate & Heal Tumbler",
    price: 28,
    image: "/mockups/tumbler-hydrate.png",
    category: "Accessories",
    icon: ShoppingBag,
    tagline: "Stay hydrated, stay healing, stay thriving",
    shortDescription: "Insulated 20oz tumbler with motivational hydration reminders.",
    fullDescription: `Because hydration is healing. This tumbler keeps your water cold for 24 hours and features the Ask DoGood logo with "Mind ya business" slogan.`,
    features: [
      "20oz stainless steel tumbler",
      "Double-wall vacuum insulation",
      "Keeps cold 24 hours / hot 12 hours",
      "Leak-proof sliding lid",
      "Ask DoGood logo and slogan",
      "Available in 4 colors: Black, Rose Gold, Mint, Navy",
      "BPA-free, dishwasher safe"
    ],
    colors: ["Black", "Rose Gold", "Mint", "Navy"]
  },

  {
    id: 22,
    name: "Protect Your Peace Water Bottle",
    price: 32,
    image: "/mockups/water-bottle-protect-peace.png",
    category: "Accessories",
    icon: ShoppingBag,
    tagline: "Hydration meets intention-setting",
    shortDescription: "32oz motivational water bottle with time markers and affirmations.",
    fullDescription: `Track your hydration while protecting your energy. Features hourly markers and affirmations down the side, with the Ask DoGood logo.`,
    features: [
      "32oz BPA-free Tritan plastic",
      "Time markers for hydration tracking",
      "Motivational quotes down the side",
      "Wide-mouth opening (ice cube friendly)",
      "Leakproof flip-top lid",
      "Ask DoGood logo",
      "Available in 3 colors: Clear, Smoke, Blush",
      "Dishwasher safe (top rack)"
    ],
    colors: ["Clear", "Smoke", "Blush"]
  },

  {
    id: 23,
    name: "Alignment Yoga Mat",
    price: 68,
    image: "/mockups/yoga-mat-alignment.png",
    category: "Wellness",
    icon: ShoppingBag,
    tagline: "Find your center, honor your alignment",
    shortDescription: "Premium eco-friendly yoga mat with alignment guides and Ask DoGood branding.",
    fullDescription: `More than a mat—it's your sacred space. Features subtle alignment markers, beautiful design, and the Ask DoGood logo for daily inspiration.`,
    features: [
      "Premium TPE eco-friendly material",
      "6mm thickness (cushioned but stable)",
      "72\" x 24\" (standard size)",
      "Non-slip textured surface",
      "Alignment markers for proper form",
      "Ask DoGood logo placement",
      "Available in 3 designs: Mandala, Gradient, Minimalist",
      "Includes carrying strap",
      "Latex-free, odor-free"
    ],
    designs: ["Mandala", "Gradient", "Minimalist"]
  },

  {
    id: 24,
    name: "Return to Yourself Yoga Mat",
    price: 68,
    image: "/mockups/yoga-mat-return-to-yourself.png",
    category: "Wellness",
    icon: ShoppingBag,
    tagline: "Every practice is a homecoming",
    shortDescription: "Inspirational yoga mat featuring 'Return to Yourself' mantra and Ask DoGood logo.",
    fullDescription: `Your mat is where you return to yourself. This design features the powerful reminder "Return to Yourself" with the Ask DoGood logo.`,
    features: [
      "Premium TPE eco-friendly material",
      "6mm thickness (cushioned but stable)",
      "72\" x 24\" (standard size)",
      "Non-slip textured surface",
      "Inspirational text and logo",
      "Ask DoGood branding",
      "Available in 3 colorways: Sage, Lavender, Ocean",
      "Includes carrying strap",
      "Latex-free, odor-free"
    ],
    colors: ["Sage", "Lavender", "Ocean"]
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
                  <div className="w-full h-56 rounded-t-lg relative overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
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
                    <Button 
                      size="lg" 
                      className="w-full rounded-3xl text-lg font-semibold group-hover:scale-105 transition-transform"
                      asChild
                    >
                      {product.productUrl ? (
                        <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
                          {product.recurring ? 'Start Membership' : 'Get Instant Access'}
                          <TrendingUp className="ml-2 h-5 w-5" />
                        </a>
                      ) : (
                        <Link href={`/contact?product=${encodeURIComponent(product.name)}&price=${product.foundingPrice || product.price}`}>
                          {product.recurring ? 'Start Membership' : 'Get Instant Access'}
                          <TrendingUp className="ml-2 h-5 w-5" />
                        </Link>
                      )}
                    </Button>
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
                  purchase, email me at askdogood@gmail.com for a full refund—no questions asked, no hard feelings.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-2 text-lg">Can I purchase multiple products?</h3>
                <p className="text-muted-foreground">
                  Absolutely! Wellness Circle members automatically get 20% off all digital products. We also offer custom 
                  bundles—email askdogood@gmail.com to tell me your health goals and I'll recommend the best combination 
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
                  askdogood@gmail.com to set this up. The Wellness Circle membership is already affordable at $19-27/month 
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
              <Link href="/contact?product=DoGood%20Wellness%20Circle&price=19">
                <Button size="lg" variant="outline" className="rounded-3xl text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                  Join Wellness Circle - $19/mo
                </Button>
              </Link>
            </div>
            <p className="text-sm mt-6 opacity-75">
              Questions? Email askdogood@gmail.com • 30-Day Money-Back Guarantee on All Products
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}