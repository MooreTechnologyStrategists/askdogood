import { useState, useRef, useEffect } from 'react';
import { X, Send, Leaf, ExternalLink } from 'lucide-react';
import { GUMROAD_URLS } from '@/config/gumroad';

// ─── Health Knowledge Base ─────────────────────────────────────────────────
// Each entry: [trigger keywords, response text]
const KB: [string[], string][] = [
  // THYROID
  [['thyroid', 'tsh', 't3', 't4', 'hypothyroid', 'hyperthyroid', 'hashimoto', 'graves', 'thyroidectomy', 'levothyroxine', 'synthroid'],
  `**Your Thyroid — The Body's Remote Control**

The thyroid gland (butterfly-shaped, in your neck) regulates metabolism, energy, weight, heart rate, temperature, mood, and hormones.

**Key labs to know:**
• TSH — optimal: 1.0–2.0 (not just "in range")
• Free T4 — measures hormone in storage
• Free T3 — the active hormone your cells actually use
• Reverse T3 — can block Free T3 even when levels look fine
• TPO & TG antibodies — diagnose Hashimoto's (autoimmune)

**Common symptoms of imbalance:**
Fatigue, hair loss, brain fog, weight changes, constipation or diarrhea, anxiety, depression, irregular periods, dry skin, cold/heat intolerance.

**Pro tip:** Always request your full thyroid panel, not just TSH. Many women are symptomatic with TSH "in range."

📖 [Thyroid Health Mastery Course →](/course/thyroid-health-mastery)
📋 [Free Thyroid Lab Guide →](/free-thyroid-lab-guide)`],

  // HASHIMOTO'S
  [['hashimoto', 'autoimmune thyroid', 'antibody', 'tpo', 'atrophic'],
  `**Hashimoto's Thyroiditis — What You Need to Know**

Hashimoto's is the #1 cause of hypothyroidism. It's an autoimmune condition where your immune system attacks thyroid tissue.

**Key facts:**
• Can cause swinging between hypo and hyper symptoms
• Gluten-free diet reduces antibodies in many people
• Selenium (200mcg/day) has been clinically shown to reduce TPO antibodies
• Stress and gut health are major triggers
• Iodine supplements can WORSEN Hashimoto's — use caution with sea moss/iodine
• Echinacea and other immune stimulants may trigger flares

**Lab work to request:**
TPO antibodies, TG antibodies, Free T3, Free T4, TSH, Vitamin D (deficiency linked to autoimmunity)

📖 Learn more → [Thyroid Health Mastery Course](/course/thyroid-health-mastery)`],

  // ADRENAL / CORTISOL / STRESS
  [['adrenal', 'cortisol', 'stress', 'burnout', 'hpa', 'adrenal fatigue'],
  `**Adrenal Health & Cortisol Reset**

Your adrenal glands produce cortisol, your stress hormone. Chronic stress dysregulates the HPA axis and affects thyroid, sleep, weight, and immunity.

**Signs of cortisol imbalance:**
• Morning fatigue (despite 8 hrs sleep)
• Energy crash at 2–4pm
• Craving salty foods
• Anxiety + irritability
• Stubborn belly fat
• Frequent illness

**Natural cortisol support:**
• **Ashwagandha** — clinically proven to reduce cortisol 27–30%
• **Holy Basil (Tulsi)** — adaptogen, anti-anxiety
• **Rhodiola** — anti-fatigue, HPA modulator
• **Magnesium glycinate** — calms nervous system
• **Phosphatidylserine** — reduces cortisol response
• Sleep 7–9 hrs, limit caffeine after noon
• Morning sunlight (15 min) resets cortisol rhythm

📖 [Blog: Mindfulness for Black Women →](/blog/finding-peace-in-the-chaos-mindfulness-for-black-women)`],

  // HERBS — GENERAL
  [['herb', 'herbal', 'natural remedy', 'plant medicine', 'botanical', 'dictionary'],
  `**Herbal Medicine — Your Natural Pharmacy**

Herbs have been used for thousands of years across African, Asian, Caribbean, and Indigenous traditions. Many have solid clinical research backing them up.

**Our A-Z Herb Dictionary covers:**
• Where each herb is grown
• Key benefits & active compounds
• How to use safely
• Drug interactions & cautions
• Thyroid-specific notes

🌿 [Explore the Full A-Z Herb Dictionary →](/herbs)

**Top herbs for Black women's health:**
• **Ashwagandha** — stress, energy, thyroid support
• **Turmeric** — inflammation, joints, brain health
• **Nettle** — iron, allergies, hormone balance
• **Dandelion** — liver detox, digestion
• **Holy Basil** — cortisol, blood sugar, immunity
• **Sea Moss** — 92 minerals, gut, thyroid (iodine — use caution!)`],

  // ASHWAGANDHA
  [['ashwagandha', 'withania', 'adaptogen'],
  `**Ashwagandha (Withania somnifera)**

One of the most researched adaptogens in Ayurvedic medicine.

**Benefits:**
• Reduces cortisol 27–30% (clinically proven)
• May increase T3/T4 in subclinical hypothyroidism
• Improves sleep quality and energy
• Anti-inflammatory, antioxidant
• Supports testosterone and reproductive health

**How to use:** 300–600mg standardized extract (KSM-66 or Sensoril), capsule or in warm milk (moon milk).

**⚠️ Cautions:**
• Avoid during pregnancy
• Use caution with autoimmune conditions (immune modulatory)
• Monitor thyroid labs — may change medication needs
• Avoid with immunosuppressants, thyroid drugs (spacing/monitoring needed), sedatives

🌿 [See full Herb Dictionary →](/herbs)`],

  // TURMERIC
  [['turmeric', 'curcumin', 'golden milk', 'anti-inflammatory'],
  `**Turmeric (Curcuma longa) — Nature's Anti-Inflammatory**

**Benefits:**
• Potent anti-inflammatory (joint pain, gut, brain)
• Antioxidant — protects against oxidative damage
• Supports liver function and detoxification
• Emerging research: neuroprotective, potential cancer-fighting properties
• Supports gut health and microbiome

**How to use:**
• Golden milk (turmeric + black pepper + warm milk) — black pepper increases absorption 2000%
• Capsule with piperine/bioperine
• Add to curries, soups, rice

**⚠️ Cautions:**
• Blood thinners (warfarin, aspirin) — antiplatelet effect
• High doses may worsen gallstones or acid reflux
• Take iron supplements separately (inhibits iron absorption)
• Stop 2 weeks before any surgery

🌿 [Full Herb Dictionary →](/herbs)`],

  // SEA MOSS / IRISH MOSS
  [['sea moss', 'irish moss', 'chondrus', 'seamoss'],
  `**Sea Moss (Irish Moss) — Chondrus crispus**

Sea moss has become popular in Caribbean and wellness communities and is absolutely packed with nutrients.

**Benefits:**
• 92 trace minerals + vitamins
• Supports gut lining (mucilaginous gel)
• Immune system support
• Skin collagen support
• Natural energy booster

**⚠️ IMPORTANT THYROID WARNING:**
Sea moss is HIGH in iodine. Iodine is a double-edged sword:
• Too little → hypothyroidism  
• Too much → can TRIGGER or WORSEN Hashimoto's flares and hyperthyroidism
• People with any thyroid condition should consult their doctor before taking sea moss daily

**How to use:** Sea moss gel in smoothies, soups, or capsules (lower iodine). Start with small amounts.

🌿 [Full Herb Dictionary →](/herbs)`],

  // NUTRITION & THYROID DIET
  [['eat', 'diet', 'food', 'nutrition', 'meal', 'thyroid food', 'anti-inflammatory food', 'goitrogen'],
  `**Eating for Your Thyroid**

Food is medicine. Here's the fundamentals of a thyroid-supportive, anti-inflammatory diet:

**✅ Best foods:**
• Brazil nuts (2/day = selenium for thyroid)
• Wild-caught fish (omega-3, iodine)
• Eggs (zinc, selenium, iodine)
• Leafy greens (magnesium, iron)
• Sweet potatoes (beta-carotene, gut health)
• Berries (antioxidants, anti-inflammatory)
• Fermented foods (gut → thyroid connection)
• Olive oil, avocado (healthy fats)

**⚠️ Use caution with:**
• Raw cruciferous veggies in large amounts (kale, broccoli, cabbage) — goitrogens that can interfere with thyroid. *Cooking deactivates them.*
• Soy in large amounts (affects hormone absorption)
• Gluten (inflammatory for Hashimoto's — test this yourself)

**🍳 Get real thyroid-friendly meal plans →**
[Free 3-Day Meal Plan →](/free-meal-plan)
[Clinical Food RX App →](/clinical-recipes)`],

  // WEIGHT / METABOLISM
  [['weight', 'lose weight', 'metabolism', 'belly fat', 'overweight', 'obesity', 'fat'],
  `**Thyroid, Weight & Metabolism**

Struggling with weight is one of the most frustrating parts of thyroid disease — and it's real, not in your head.

**Why thyroid affects weight:**
• T3 is the active hormone that controls metabolic rate
• Even "normal" TSH can mean low T3 → slowed metabolism
• Insulin resistance is common with thyroid disease
• Inflammation causes water retention that looks like fat gain

**What actually helps:**
• ✅ Get Free T3 + Reverse T3 checked (most doctors skip these)
• ✅ Prioritize sleep (cortisol/weight connection is real)
• ✅ Resistance training over cardio (builds metabolic muscle)
• ✅ Anti-inflammatory eating (cut processed foods, seed oils)
• ✅ Magnesium + Vitamin D (both affect insulin sensitivity)
• ✅ Address gut health (leaky gut → systemic inflammation → weight gain)

**❌ What doesn't work:**
Extreme caloric restriction — this LOWERS T3 and makes thyroid disease worse.

📋 [30-Day Meal Plan ($29.99) →](${GUMROAD_URLS.mealPlan})`],

  // SLEEP
  [['sleep', 'insomnia', 'rest', 'tired', 'fatigue', 'can\'t sleep', 'wake up tired'],
  `**Sleep & Your Health**

Sleep is when your body repairs thyroid receptors, regulates cortisol, and produces growth hormone. It is non-negotiable for healing.

**Natural sleep support:**
• **Valerian root** — 300–600mg, 30–60 min before bed
• **Magnesium glycinate** — 300–400mg before bed (also reduces anxiety)
• **Ashwagandha** — reduces cortisol, improves sleep quality
• **Passionflower** — best for anxiety-driven insomnia
• **Tart cherry** — natural melatonin source

**Sleep hygiene essentials:**
• No screens 60 min before bed (blue light kills melatonin)
• Keep room at 65–68°F
• Same bedtime/wake time every day (including weekends)
• Morning sunlight within 30 min of waking (sets circadian rhythm)
• Avoid caffeine after noon (half-life is 5–7 hours)

**When sleep is still bad:**
Consider: cortisol dysrhythmia, sleep apnea, or undertreated thyroid disease. Request a salivary cortisol test (4-point test throughout the day).`],

  // MENTAL HEALTH
  [['anxiety', 'depression', 'mental health', 'mood', 'sad', 'panic', 'nervous', 'worry'],
  `**Mental Health & Holistic Healing**

Mental health and physical health are not separate — especially with thyroid disease. Thyroid imbalance directly causes depression and anxiety.

**First, check these physical causes:**
• Low Free T3 → depression, brain fog
• High cortisol → anxiety, panic attacks
• Low Vitamin D → seasonal depression
• Low Iron/Ferritin → fatigue-driven depression
• Leaky gut → systemic inflammation → mood disorders

**Natural support:**
• **St. John's Wort** (mild-moderate depression) — ⚠️ major drug interactions, check with doctor
• **Ashwagandha** — anxiety, HPA regulation
• **Lemon Balm** — mild anxiety, sleep
• **Saffron** (30mg/day) — research shows similar effects to some antidepressants
• **Omega-3 EPA** (2–3g/day) — potent antidepressant effect
• **Magnesium glycinate** — calms nervous system

**Lifestyle:**
Movement (30 min/day), sunlight, community, journaling, and mindfulness all have evidence-based antidepressant effects.

📖 [Blog: Mindfulness for Black Women →](/blog/finding-peace-in-the-chaos-mindfulness-for-black-women)`],

  // GUT HEALTH
  [['gut', 'digestion', 'ibs', 'leaky gut', 'bloating', 'constipation', 'gerd', 'acid reflux', 'stomach'],
  `**Gut Health — Where Healing Begins**

70% of your immune system lives in your gut. Gut dysfunction is linked to thyroid disease, autoimmunity, mood disorders, and weight gain.

**The gut-thyroid connection:**
• Leaky gut triggers immune responses that attack the thyroid
• 20% of T4→T3 conversion happens in the gut
• Gut bacteria produce serotonin and regulate thyroid hormone

**Healing the gut naturally:**
• **L-Glutamine** — seals leaky gut (5g/day in powder)
• **Marshmallow root** — soothes gut lining
• **Slippery elm** — mucilaginous, protects gut wall
• **Aloe vera** — inner fillet gel (not latex form)
• **Bone broth** — collagen repairs gut lining
• **Probiotic foods** — kimchi, sauerkraut, kefir

**Remove gut irritants:**
• Gluten (especially with Hashimoto's)
• Processed seed oils
• Excess sugar
• Antibiotics (only when truly necessary)
• NSAIDs (ibuprofen damages gut lining)

🍳 [Anti-Inflammatory Recipes →](/clinical-recipes)`],

  // INFLAMMATION
  [['inflammation', 'inflammatory', 'anti-inflammatory', 'pain', 'joint', 'arthritis', 'autoimmune'],
  `**Reducing Chronic Inflammation**

Chronic inflammation is the root of most modern diseases — including thyroid disease, heart disease, diabetes, and depression.

**Most powerful anti-inflammatory lifestyle changes:**
1. Eliminate seed oils (soybean, canola, sunflower) — replace with olive oil, avocado oil, ghee
2. Remove refined sugar and ultra-processed foods
3. Add omega-3s (wild fish, walnuts, flaxseed)
4. Fix sleep (lack of sleep spikes IL-6 inflammatory markers)
5. Move your body daily — even 20-minute walks reduce CRP

**Top anti-inflammatory foods:**
Turmeric + black pepper, wild blueberries, leafy greens, beets, ginger, green tea, extra-virgin olive oil, fatty fish

**Anti-inflammatory herbs (evidence-based):**
• Turmeric/Curcumin — strongest plant anti-inflammatory
• Ginger — inhibits COX-2 (same as ibuprofen, naturally)
• Boswellia (frankincense) — powerful for joints and gut
• Nettle leaf — blocks histamine + inflammatory pathways

🌿 [A-Z Herb Dictionary →](/herbs)`],

  // SUPPLEMENTS
  [['supplement', 'vitamin', 'mineral', 'selenium', 'magnesium', 'vitamin d', 'zinc', 'b12', 'iron', 'ferritin'],
  `**Essential Supplements for Thyroid + Wellness**

Most thyroid patients are deficient in these key nutrients:

| Supplement | Why It Matters | Optimal Dose |
|---|---|---|
| Selenium | Makes T4→T3 conversion; reduces TPO antibodies | 200mcg/day |
| Vitamin D3 + K2 | Regulates immune function; deficiency = autoimmunity | 2000–5000 IU D3 |
| Magnesium Glycinate | 300+ enzyme reactions; sleep, anxiety, constipation | 300–400mg |
| Zinc | Critical for T4→T3 conversion | 15–30mg |
| Iron/Ferritin | Low ferritin = fatigue even with "normal" thyroid | Ferritin > 70 optimal |
| B12 | Fatigue, nerve health; common deficiency with thyroid | Methylcobalamin 1000mcg |
| Omega-3 (EPA/DHA) | Anti-inflammatory, mood, thyroid receptor sensitivity | 2–3g/day |

**⚠️ Test before supplementing:** High-dose iodine, selenium, and iron can be harmful if you're not deficient. Always get labs first.

📋 [Download the Supplement Shopping Guide →](/supplement-guide)`],

  // GARDENING / HERBS GROWING
  [['garden', 'grow', 'plant', 'herb garden', 'growing', 'seeds', 'soil', 'compost'],
  `**Grow Your Own Medicine Garden 🌱**

Growing your own herbs is one of the most empowering things you can do for your health AND your wallet.

**Easiest medicinal herbs to start with:**
• **Mint** — digestive, cooling, IBS relief; grows almost anywhere (contains it or it'll spread!)
• **Lemon Balm** — anti-anxiety, anti-viral; grows fast, great tea
• **Chamomile** — sleep, skin soothing; beautiful in the garden
• **Holy Basil (Tulsi)** — adaptogen, great for tea; loves heat
• **Rosemary** — memory, circulation; drought-tolerant once established
• **Lavender** — stress relief, antimicrobial; perennial beauty

**Beginner tips:**
• Start in containers you can move inside in winter
• Use quality organic compost
• Most herbs prefer 6+ hours of sun
• Harvest regularly — it encourages new growth

🌻 [Garden Journal & Seasons →](/garden)
🌿 [A-Z Herb Dictionary →](/herbs)`],

  // MEAL PREP
  [['meal prep', 'meal planning', 'prep', 'batch cook', 'cook ahead'],
  `**Meal Prep Like a Thyroid Warrior**

Meal prepping is one of the most powerful tools for healing because it removes the daily decision-fatigue and ensures you always have real food ready.

**My go-to weekly prep:**
1. **Grains** — cook a big batch of brown rice, quinoa, or millet
2. **Proteins** — roast or poach chicken, hard-boil eggs, cook lentils
3. **Roasted veggies** — sheet pan: sweet potato, broccoli, bell peppers (400°F, 25 min)
4. **Greens** — wash and dry, store in a salad spinner
5. **Sauces** — tahini-lemon, herb pesto, avocado crema

**Thyroid-friendly prep staples:**
• Selenium: Brazil nuts (portion and bag 2/day servings)
• Gut health: A jar of fermented veg (kimchi, sauerkraut)
• Anti-inflammatory: Ginger-turmeric shots or golden milk mix

🍳 [Clinical Food RX Recipes →](/clinical-recipes)
📋 [Free 3-Day Meal Plan →](/free-meal-plan)`],

  // PRODUCTS
  [['course', 'product', 'buy', 'purchase', 'price', 'cost', 'program', 'shop', 'offer'],
  `**AskDoGood Products**

Here's everything available right now:

**🎓 Thyroid Health Mastery Course — $97**
6 video modules, 3+ hours. Labs, medication, nutrition, stress, advocacy. Lifetime access + community.
→ [View Course](/course/thyroid-health-mastery)

**📊 Thyroid Symptom Tracker — $9.99**
Printable PDF to track symptoms, labs, and patterns over time.
→ [Get Instant Access](${GUMROAD_URLS.symptomTracker})

**🥗 30-Day Thyroid-Friendly Meal Plan — $29.99**
Thyroid-optimized, anti-inflammatory meals. Shopping lists included.
→ [Get the Meal Plan](${GUMROAD_URLS.mealPlan})

**🆓 Free Resources:**
• Free Thyroid Lab Guide → [/free-thyroid-lab-guide](/free-thyroid-lab-guide)
• Free 3-Day Meal Plan → [/free-meal-plan](/free-meal-plan)
• Doctor Appointment Checklist → [/doctor-checklist](/doctor-checklist)

💬 [Book a 1:1 Coaching Session →](/coaching)`],

  // COACHING
  [['coach', 'coaching', 'consult', 'session', 'appointment', 'work with you', '1:1', 'one on one'],
  `**1:1 Health Coaching with RoSeé**

Working directly with RoSeé gives you personalized guidance based on your specific labs, symptoms, and lifestyle.

**What you get:**
• Personalized thyroid action plan
• Lab work review and recommendations
• Supplement and nutrition protocol
• Lifestyle optimization for your specific situation
• Follow-up support and accountability

**Who it's for:**
• Newly diagnosed (thyroid, Hashimoto's, graves)
• Post-thyroidectomy patients finding their new normal
• Anyone who's tried "all the things" and still feels stuck
• Women wanting to optimize not just "manage" their thyroid

→ [Book a Coaching Session](/coaching)

*Limited spots available — RoSeé works with a small number of clients at a time to ensure quality attention.*`],

  // CHYNA WHITE / STORIES
  [['chyna white', 'story', 'stories', 'fiction', 'series', 'episode', 'book'],
  `**Chyna White — The Series 📚**

Chyna White is AskDoGood's original fiction series: *The Chronicles of a Beautiful Contradiction.*

Meet Chyna — a brown-skinned powerhouse navigating corporate America, street politics, and her own truth in a world that wants her to choose a side. Professional AF with that perfectly undone edge. BB girl energy meets boardroom boss.

**Why fiction?**
Because healing isn't just clinical — it's emotional and spiritual. Stories let us see ourselves, process trauma, and imagine freedom.

⚠️ 18+ Content | Mature themes, language, and real talk.

→ [Read Episode 1](/stories/chyna-white/episode-1)
→ [Explore the Full Series](/stories/chyna-white)`],

  // HUMAN SUPPORT / ESCALATION
  [['human', 'real person', 'agent', 'support', 'contact', 'email', 'phone', 'help me directly'],
  `**Need a real person?**

You can absolutely reach the Ask DoGood team directly.

**Fastest options:**
• [Open the Contact Page →](/contact)
• [Pitch a Guest Post →](/guest-contributors)
• Email: [askdogood@gmail.com](mailto:askdogood@gmail.com)
• Call/Text: [(202) 420-0682](tel:+12024200682)

If your question is about coaching, meal prep, collaboration, media, or a custom request, use the contact page or tap the **Email a Human** button below.`],

  // GUEST POSTS / COLLABORATION
  [['guest post', 'guest blogger', 'contribute', 'write for you', 'collab', 'collaborate', 'partnership'],
  `**Guest posts + partnerships are open.**

If you want to write for Ask DoGood or pitch a collaboration, use the contributor page here:

→ [Guest Contributors Page](/guest-contributors)

Great fits include holistic health, meal prep, rest, spirituality, movement, education, employment, and real-life growth content.`],

  // EMPLOYMENT / STABILITY
  [['employment', 'job', 'career', 'workforce', 'resume', 'interview', 'income', 'financial stability'],
  `**Employment and stability are part of healing.**

AskDoGood is not just food and herbs. We also focus on structure, income, and practical progress so people can build whole lives.

**Start here:**
• Build a weekly routine: sleep, meals, movement, job-search blocks
• Track applications and follow-ups consistently
• Practice interview answers and negotiation scripts
• Protect your energy so burnout does not derail your progress

If you want partnership support for workshops or workforce-centered programming:
→ [Work With AskDoGood](/work-with-askdogood)

For practical lifestyle structure and implementation:
→ [Resources](/resources)
→ [Blog](/blog)`],

  // VICE / HABIT CHANGE
  [['vice', 'addiction', 'smoking', 'alcohol', 'drinking', 'quit', 'habit', 'relapse', 'substance'],
  `**Breaking a vice takes structure, not shame.**

You are not weak. You need a replacement plan, accountability, and a safer daily rhythm.

**Practical first steps:**
• Identify your top triggers (time, place, emotions, people)
• Build a replacement action for each trigger (walk, tea, call, prayer, journaling)
• Remove easy access and reduce high-risk environments
• Use community support: trusted friend, sponsor, therapist, support group
• Track wins daily, even small ones

If cravings feel intense or relapse risk is high, please use same-day professional support and local resources.

Start with these AskDoGood resources:
→ [Blog](/blog)
→ [Contact AskDoGood](/contact)`],

  // DEFAULT
];

const URGENT_KEYWORDS = [
  'chest pain',
  'can\'t breathe',
  'cant breathe',
  'shortness of breath',
  'suicidal',
  'suicide',
  'kill myself',
  'overdose',
  'stroke',
  'fainting',
  'passed out',
  'seizure',
  'severe allergic reaction',
  'anaphylaxis',
];

const MEDICAL_DECISION_KEYWORDS = [
  'diagnose me',
  'diagnosis',
  'prescribe',
  'dosage',
  'dose',
  'how much medication',
  'stop my medication',
  'replace my medication',
  'can i stop levothyroxine',
  'is this cancer',
  'emergency',
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();

  if (URGENT_KEYWORDS.some((keyword) => lower.includes(keyword))) {
    return `**This could be urgent. Please get immediate in-person help now.**

If you are in the U.S., call **911** for emergency symptoms (chest pain, trouble breathing, stroke signs, severe allergic reaction, or overdose).

If this is a mental health crisis, call or text **988** right now.

After urgent care is handled, you can come back and I can help with follow-up questions and resources.`;
  }

  if (MEDICAL_DECISION_KEYWORDS.some((keyword) => lower.includes(keyword))) {
    return `I can help you prepare better questions, but I cannot diagnose, prescribe, or tell you to start/stop medications.

**Safer next step:**
• Contact your licensed clinician for treatment decisions
• Bring your symptom timeline and recent labs
• Use these prep tools before your appointment:

📋 [Doctor Checklist](/doctor-checklist)
📖 [Free Thyroid Lab Guide](/free-thyroid-lab-guide)`;
  }

  const rankedMatches = KB.map(([keys, answer]) => ({
    answer,
    score: keys.reduce((total, keyword) => total + (lower.includes(keyword) ? 1 : 0), 0),
  }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  if (rankedMatches.length > 0) {
    return rankedMatches[0].answer;
  }

  return `I'm the AskDoGood AI assistant. I can help you with:

• 🦋 **Thyroid health** — labs, Hashimoto's, medications, symptoms
• 🌿 **Herbs & natural remedies** — benefits, safety, interactions
• 🥗 **Nutrition & meal prep** — thyroid-friendly eating, recipes
• 🧠 **Mental health & stress** — cortisol, anxiety, burnout recovery
• 💊 **Supplements** — what to take, optimal levels, testing
• 🌱 **Gardening** — growing medicinal herbs, garden tips
• 😴 **Sleep** — natural support, circadian rhythm
• 🏋️ **Movement & fitness** — thyroid-safe exercise strategies

**Try asking:**
• "What are the best foods for thyroid health?"
• "Tell me about ashwagandha"
• "How can I reduce inflammation naturally?"
• "How do I talk to a real person?"

Need human help? Use [the contact page](/contact) or the **Email a Human** option below.

Or visit the **[A-Z Herb Dictionary →](/herbs)** for complete herb profiles.`;
}

// ─── Suggested Questions ──────────────────────────────────────────────────
const SUGGESTIONS = [
  'What are thyroid lab values I should know?',
  'Tell me about ashwagandha',
  'Best foods for inflammation?',
  'How to lose weight with thyroid disease?',
  'Natural sleep remedies',
  'How do I talk to a real person?',
  'How do I submit a guest post?',
];

// ─── Message Renderer (supports **bold**, bullet points, links) ────────────
function renderInline(text: string) {
  const tokens = text.split(/(\*\*.*?\*\*|\[[^\]]+\]\([^\)]+\))/g).filter(Boolean);

  return tokens.map((token, index) => {
    const boldMatch = token.match(/^\*\*(.*)\*\*$/);
    if (boldMatch) {
      return <strong key={index}>{boldMatch[1]}</strong>;
    }

    const linkMatch = token.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const external = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

      return (
        <a
          key={index}
          href={href}
          target={external && href.startsWith('http') ? '_blank' : undefined}
          rel={external && href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="underline text-primary hover:text-primary/80"
        >
          {label}
        </a>
      );
    }

    return <span key={index}>{token}</span>;
  });
}

function renderMessage(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    const cleanLine = line.replace(/^•\s|^\*\s/, '');
    const parts = renderInline(cleanLine);

    if (line.startsWith('• ') || line.startsWith('* ')) {
      return <li key={i} className="ml-4 list-disc">{parts}</li>;
    }
    if (line === '') return <br key={i} />;
    return <p key={i} className="leading-relaxed">{parts}</p>;
  });
}

// ─── Component ────────────────────────────────────────────────────────────
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: `Hey! I'm your AskDoGood AI. I can answer real questions about thyroid health, herbs, nutrition, mental wellness, supplements, and more.\n\n**Try one of these to start:**`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const openHumanSupport = () => {
    const transcript = messages
      .slice(-6)
      .map((message) => `${message.from === 'user' ? 'Visitor' : 'Bot'}: ${message.text}`)
      .join('\n\n');

    const subject = encodeURIComponent('Ask DoGood support request from chatbot');
    const body = encodeURIComponent(
      `Hi Ask DoGood,\n\nI would like help from a real person.\n\nRecent chatbot context:\n\n${transcript}`,
    );

    window.location.href = `mailto:askdogood@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSend = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { from: 'user', text: msg }]);
    setInput('');
    setLoading(true);
    // Simulate natural response delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: getResponse(msg) }]);
      setLoading(false);
    }, 600 + Math.random() * 500);
  };

  return (
    <>
      {/* Floating trigger */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-200 flex items-center gap-2 pr-5"
          onClick={() => setOpen(true)}
          aria-label="Open Health Assistant"
        >
          <Leaf className="w-5 h-5" />
          <span className="text-sm font-bold hidden sm:inline">Ask DoGood AI</span>
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 flex flex-col bg-card border border-border rounded-3xl shadow-2xl overflow-hidden"
          style={{ width: 'min(380px, calc(100vw - 2rem))', height: 'min(580px, calc(100vh - 6rem))' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground shrink-0">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              <div>
                <p className="font-bold text-sm leading-none">AskDoGood AI</p>
                <p className="text-xs opacity-80 mt-0.5">Thyroid · Herbs · Wellness</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-muted text-foreground rounded-bl-sm'
                  }`}
                >
                  {msg.from === 'bot' ? (
                    <div className="space-y-0.5">{renderMessage(msg.text)}</div>
                  ) : (
                    msg.text
                  )}
                  {/* Quick suggestion buttons on first bot message */}
                  {i === 0 && msg.from === 'bot' && (
                    <div className="mt-3 flex flex-col gap-1.5">
                      {SUGGESTIONS.slice(0, 4).map((q, qi) => (
                        <button
                          key={qi}
                          onClick={() => handleSend(q)}
                          className="text-left text-xs bg-background border border-border rounded-xl px-3 py-1.5 hover:bg-primary/10 hover:border-primary/50 transition-colors font-medium"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-2 text-sm text-muted-foreground flex items-center gap-1">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.15s' }}>●</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>●</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* More suggestions */}
          <div className="px-3 pt-2 flex gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
            {SUGGESTIONS.slice(4).map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="text-xs bg-secondary text-secondary-foreground rounded-full px-3 py-1 whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="px-3 pt-2 grid grid-cols-2 gap-2 shrink-0">
            <button
              onClick={openHumanSupport}
              className="text-xs border border-border rounded-xl px-3 py-2 hover:bg-secondary transition-colors font-medium"
            >
              Email a Human
            </button>
            <a
              href="/contact"
              className="text-xs border border-border rounded-xl px-3 py-2 hover:bg-secondary transition-colors font-medium text-center"
            >
              Contact Page
            </a>
          </div>

          {/* Input */}
          <div className="px-3 pt-2 pb-3 border-t border-border shrink-0">
            <div className="flex gap-2">
              <input
                className="flex-1 px-3 py-2 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Ask about thyroid, herbs, nutrition..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={loading}
              />
              <button
                className="bg-primary text-primary-foreground px-3 py-2 rounded-xl hover:opacity-90 transition-all disabled:opacity-40 flex items-center"
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-1.5 text-center">
              Not medical advice · Always consult your doctor ·{' '}
              <a href="/herbs" className="underline hover:text-primary inline-flex items-center gap-0.5">
                Herb Dictionary <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
