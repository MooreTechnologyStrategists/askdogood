// blogPosts.ts
// NOTE: I can only “complete” what you pasted here. This file is syntactically correct
// with the posts you included. Paste the remaining posts into the array where indicated.

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string; // YYYY-MM-DD
  readTime: string;
  image: string; // URL or local path
}

export const blogPosts: BlogPost[] = [
  {
    id: "1779",
    slug: "pro-tips-for-giving-tuesday",
    title: "Pro Tips for Giving Tuesday",
    excerpt:
      "Giving Tuesday is a global day of generosity celebrated on the Tuesday following Thanksgiving. It encourages people to give back to their communities and support causes they care about. Here are some pro tips to make the most of Giving Tuesday: Plan Ahead: Research...",
    content: `<!-- wp:paragraph -->
<p>Giving Tuesday is a global day of generosity celebrated on the Tuesday following Thanksgiving. It encourages people to give back to their communities and support causes they care about. Here are some pro tips to make the most of Giving Tuesday:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Plan Ahead</strong>: Research organizations and causes you want to support. Make a list of charities or nonprofits that align with your values.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Set a Budget</strong>: Determine how much you can afford to donate. Even small contributions can make a big difference.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Spread the Word</strong>: Use social media to promote Giving Tuesday. Share information about the causes you're supporting and encourage others to participate.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Volunteer Your Time</strong>: If you can't donate money, consider volunteering. Many organizations need help with events, programs, and services.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Match Donations</strong>: If you're able, offer to match donations made by friends or family. This can double the impact of their contributions.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Thank Donors</strong>: If you're part of an organization, make sure to thank those who donate. A simple thank-you note or social media shoutout can go a long way.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Think Long-Term</strong>: Consider setting up recurring donations to support your favorite causes throughout the year, not just on Giving Tuesday.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>By following these tips, you can make a meaningful impact on Giving Tuesday and beyond!</p>
<!-- /wp:paragraph -->`,
    category: "Health & Lifestyle",
    date: "2024-11-26",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1635367216109-aa3353c0c22e",
  },
  {
    id: "1777",
    slug: "the-superpower-of-sea-moss-the-oceans-secret-weapon-for-everyday-wellness",
    title: "The Superpower of Sea Moss: The Ocean's Secret Weapon for Everyday Wellness",
    excerpt:
      "If you're looking for a natural way to boost your health, sea moss might just be your new best friend. This humble ocean plant is packed with 92 of the 102 minerals your body needs to function at its best. Let's dive into why sea moss deserves a spot in your...",
    content: `<!-- wp:paragraph -->
<p>If you're looking for a natural way to boost your health, sea moss might just be your new best friend. This humble ocean plant is packed with 92 of the 102 minerals your body needs to function at its best. Let's dive into why sea moss deserves a spot in your wellness routine.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Makes Sea Moss So Special?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sea moss is loaded with essential nutrients like iodine, calcium, potassium, and magnesium. These minerals support everything from your thyroid to your bones, making it a true multitasker for your health.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Key Benefits of Sea Moss</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Boosts Immunity</strong>: With its high vitamin C content, sea moss helps your body fight off infections and stay resilient.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Supports Thyroid Health</strong>: The iodine in sea moss is a game-changer for regulating thyroid function, which controls your metabolism and energy levels.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Improves Digestion</strong>: Sea moss acts as a natural prebiotic, feeding the good bacteria in your gut and promoting a healthy digestive system.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Glowing Skin</strong>: Thanks to its collagen-boosting properties, sea moss can help keep your skin hydrated and youthful.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Energy Boost</strong>: Feeling sluggish? Sea moss provides a natural energy lift without the crash of caffeine.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Use Sea Moss</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Sea moss gel is the most popular form. You can blend it into smoothies, mix it into soups, or even add it to your morning tea. If you're not a fan of the taste, capsules are a convenient alternative.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">A Word of Caution</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>While sea moss is generally safe, it's high in iodine, so if you have thyroid issues, check with your doctor before adding it to your routine. Also, make sure you're buying high-quality, wildcrafted sea moss to avoid contaminants.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Sea moss is a simple, natural way to give your body the nutrients it craves. Whether you're looking to boost your immunity, support your thyroid, or just feel better overall, this ocean superfood is worth a try!</p>
<!-- /wp:paragraph -->`,
    category: "Nutrition & Diet",
    date: "2024-11-23",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1728636945305-67a629484ff7",
  },
  {
    id: "1775",
    slug: "how-collagen-saved-my-skin-my-dads-mobility-and-maybe-even-my-life",
    title: "How Collagen Saved My Skin, My Dad's Mobility, and Maybe Even My Life",
    excerpt:
      "Collagen is one of those wellness buzzwords you hear everywhere, but for me, it's been nothing short of life-changing. From healing my skin after cancer to helping my dad regain mobility, collagen has proven itself to be a true powerhouse. Let me share why...",
    content: `<!-- wp:paragraph -->
<p>Collagen is one of those wellness buzzwords you hear everywhere, but for me, it's been nothing short of life-changing. From healing my skin after cancer to helping my dad regain mobility, collagen has proven itself to be a true powerhouse. Let me share why this protein deserves all the hype.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Is Collagen?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Collagen is the most abundant protein in your body. It's the building block for your skin, bones, muscles, and connective tissues. Think of it as the glue that holds everything together.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">My Personal Collagen Story</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>After my thyroid cancer diagnosis and treatment, my skin took a beating. Radiation left it dry, dull, and fragile. I started taking collagen supplements daily, and within weeks, I noticed a difference. My skin felt softer, more hydrated, and even my scars started to fade.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But the real miracle? My dad. He struggled with joint pain and limited mobility for years. After I introduced him to collagen, he regained so much strength and flexibility. Watching him move with ease again was one of the most rewarding moments of my life.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Benefits of Collagen</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Skin Health</strong>: Collagen improves elasticity, reduces wrinkles, and keeps your skin hydrated.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Joint Support</strong>: It strengthens cartilage, reducing pain and improving mobility.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Bone Strength</strong>: Collagen helps maintain bone density, reducing the risk of fractures.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Hair and Nails</strong>: It promotes growth and strength, making your hair shinier and your nails less brittle.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Gut Health</strong>: Collagen supports the lining of your digestive tract, which is crucial for overall wellness.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Add Collagen to Your Routine</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Collagen is easy to incorporate into your daily life. I love adding collagen powder to my morning coffee or smoothies. It's flavorless, so it blends seamlessly into anything. You can also find collagen in bone broth or take it in capsule form.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Final Thoughts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Collagen isn't just a supplement—it's a tool for healing and thriving. Whether you're recovering from illness, dealing with aging, or just want to feel your best, collagen can make a real difference. It certainly did for me and my family.</p>
<!-- /wp:paragraph -->`,
    category: "Thyroid & Autoimmune",
    date: "2024-11-21",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1740582421304-7e94e718042b",
  },
  {
    id: "1773",
    slug: "superfoods-the-superfood-that-helped-sustain-me-for-7-years",
    title: "SuperBeets: The Superfood That Helped Sustain Me for 7 Years",
    excerpt:
      "When I was first diagnosed with thyroid cancer, my world turned upside down. I had to rethink everything—what I ate, how I moved, and how I approached my health. One discovery that became a cornerstone of my wellness journey was beets, specifically SuperBeets...",
    content: `<!-- wp:paragraph -->
<p>When I was first diagnosed with thyroid cancer, my world turned upside down. I had to rethink everything—what I ate, how I moved, and how I approached my health. One discovery that became a cornerstone of my wellness journey was beets, specifically SuperBeets supplements. For seven years, this humble root vegetable has been my go-to for energy, vitality, and overall well-being.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Beets?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Beets are nutritional powerhouses. They're packed with nitrates, which your body converts into nitric oxide—a compound that improves blood flow, lowers blood pressure, and boosts energy. For someone recovering from cancer and navigating the challenges of autoimmune health, these benefits were game-changers.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How SuperBeets Helped Me</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Energy Without the Crash</strong>: Unlike caffeine, SuperBeets gave me a steady, natural energy boost that lasted throughout the day.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Heart Health</strong>: With my health history, keeping my cardiovascular system strong was a priority. The nitric oxide from beets supported healthy blood pressure and circulation.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Workout Recovery</strong>: Beets helped reduce muscle soreness and improved my stamina during workouts, which was crucial as I rebuilt my strength.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Brain Clarity</strong>: Better blood flow meant better focus and mental clarity—something I desperately needed while managing my health and career.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why SuperBeets Over Fresh Beets?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Don't get me wrong—I love fresh beets. But let's be real: they're messy, time-consuming, and not always convenient. SuperBeets supplements gave me all the benefits in a quick, easy-to-use powder form. I could mix it into water, smoothies, or even juice, and I was good to go.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">My Routine</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>For the past seven years, I've taken SuperBeets almost every day. I mix a scoop into my morning smoothie or a glass of water before my workout. It's become as essential to my routine as brushing my teeth.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Final Thoughts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>SuperBeets isn't a magic pill, but it's been a consistent, reliable tool in my wellness arsenal. If you're looking for a natural way to support your energy, heart health, and overall vitality, I highly recommend giving beets—or SuperBeets—a try. They've sustained me for seven years, and I'm not stopping anytime soon.</p>
<!-- /wp:paragraph -->`,
    category: "Thyroid & Autoimmune",
    date: "2024-11-19",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff",
  },
  {
    id: "1771",
    slug: "finding-peace-in-the-chaos-mindfulness-for-black-women",
    title: "Finding Peace in the Chaos: Mindfulness for Black Women",
    excerpt:
      "Let's be real—life as a Black woman can feel like you're constantly juggling a million things while trying to keep it all together. Between work, family, societal expectations, and the weight of simply existing in a world that doesn't always value us, finding...",
    content: `<!-- wp:paragraph -->
<p>Let's be real—life as a Black woman can feel like you're constantly juggling a million things while trying to keep it all together. Between work, family, societal expectations, and the weight of simply existing in a world that doesn't always value us, finding peace can seem impossible. But here's the truth: mindfulness isn't a luxury—it's a necessity.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Is Mindfulness?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Mindfulness is the practice of being fully present in the moment. It's about noticing your thoughts, feelings, and surroundings without judgment. It's not about emptying your mind or achieving some zen-like state—it's about slowing down and reconnecting with yourself.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why Mindfulness Matters for Black Women</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Black women are some of the strongest people on the planet, but that strength often comes at a cost. We carry so much—our own burdens, our families', our communities'—and we rarely give ourselves permission to rest. Mindfulness is a way to reclaim that space and prioritize our well-being.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Reduces Stress</strong>: Mindfulness helps lower cortisol levels, which is crucial for managing stress-related health issues.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Improves Mental Health</strong>: It can reduce symptoms of anxiety and depression, giving you tools to cope with life's challenges.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Enhances Self-Awareness</strong>: By tuning into your thoughts and emotions, you can better understand what you need and set healthier boundaries.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Boosts Physical Health</strong>: Studies show that mindfulness can improve sleep, lower blood pressure, and even strengthen your immune system.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Simple Mindfulness Practices</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You don't need hours of free time or a fancy meditation app to practice mindfulness. Here are some simple ways to get started:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Breathe</strong>: Take five deep breaths. Inhale through your nose, hold for a few seconds, and exhale through your mouth. Focus on the sensation of the air moving in and out of your body.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Pause</strong>: Before reacting to something, pause for a moment. Ask yourself, "What do I need right now?"</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Body Scan</strong>: Lie down and mentally scan your body from head to toe. Notice any areas of tension and breathe into them.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Gratitude</strong>: Each day, write down three things you're grateful for. This shifts your focus from what's wrong to what's right.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Mindful Eating</strong>: Slow down during meals. Savor each bite and notice the flavors, textures, and smells.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">My Journey with Mindfulness</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>When I was diagnosed with thyroid cancer, I realized I couldn't keep running on empty. Mindfulness became my anchor. It helped me navigate the fear, the uncertainty, and the overwhelming emotions that came with my diagnosis. It taught me that it's okay to slow down and that taking care of myself isn't selfish—it's essential.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Final Thoughts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Finding peace in the chaos isn't about escaping reality—it's about creating space to breathe within it. For Black women, mindfulness is an act of resistance, a way to reclaim our time, our energy, and our joy. So, take a deep breath, sis. You deserve it.</p>
<!-- /wp:paragraph -->`,
    category: "Mental Health",
    date: "2024-11-17",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1758620942918-4990013421ad",
  },
  {
    id: "1769",
    slug: "the-beautiful-big-bill-americas-reckoning",
    title: "The Beautiful Big Bill: America's Reckoning",
    excerpt:
      `There's a phrase that's been making the rounds lately: "the beautiful big bill." It's not about money, though. It's about the reckoning America is finally starting to face—a reckoning with its history, its systems, and its treatment of Black people...`,
    content: `<!-- wp:paragraph -->
<p>There's a phrase that's been making the rounds lately: "the beautiful big bill." It's not about money, though. It's about the reckoning America is finally starting to face—a reckoning with its history, its systems, and its treatment of Black people. And while it's uncomfortable, it's also necessary and, in a strange way, beautiful.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Is the "Big Bill"?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The "big bill" is the debt America owes to Black Americans—not just in terms of reparations (though that's part of it), but in acknowledgment, accountability, and action. It's the bill for centuries of slavery, segregation, systemic racism, and ongoing injustice. And it's long overdue.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Why It's Beautiful</h2>
<!-- /wp:heading -->
<p>You might be wondering, "How can something so painful be beautiful?" Here's the thing: facing the truth is always beautiful, even when it's hard. The fact that more people are willing to confront America's history and its impact on Black communities today is a sign of progress. It's messy, it's uncomfortable, but it's also hopeful.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This reckoning is forcing conversations about equity, justice, and what it truly means to be a nation "for all." It's pushing people to look beyond performative allyship and demand real change. That's beautiful.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Needs to Happen</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Acknowledgment</strong>: America needs to fully acknowledge its history of racism and its ongoing impact.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Reparations</strong>: Whether financial, educational, or policy-based, reparations are a necessary step toward justice.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Systemic Change</strong>: Fixing broken systems—healthcare, education, criminal justice—is critical to creating a more equitable society.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Accountability</strong>: Individuals, institutions, and governments must be held accountable for perpetuating racism.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">My Perspective</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>As a Black woman, I've lived the reality of this "big bill" every day. I've experienced the microaggressions, the systemic barriers, and the exhaustion of simply existing in a world that wasn't built for me. But I've also seen the power of resilience, community, and hope. And that's what makes this reckoning so important—it's not just about what's broken; it's about what we can build.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Final Thoughts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The "beautiful big bill" is a reminder that change is possible, but it requires honesty, courage, and action. It's time for America to pay what it owes—not just in dollars, but in dignity, justice, and opportunity. And that's a bill worth paying.</p>
<!-- /wp:paragraph -->`,
    category: "Black Women's Health",
    date: "2024-11-15",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6",
  },
  {
    id: "1767",
    slug: "understanding-panic-attacks-a-story-of-inner-conflict",
    title: "Understanding Panic Attacks: A Story of Inner Conflict",
    excerpt:
      "Panic attacks are terrifying. Your heart races, your chest tightens, and it feels like the world is closing in on you. If you've ever experienced one, you know how overwhelming they can be. But what if I told you that panic attacks are often your body's way of...",
    content: `<!-- wp:paragraph -->
<p>Panic attacks are terrifying. Your heart races, your chest tightens, and it feels like the world is closing in on you. If you've ever experienced one, you know how overwhelming they can be. But what if I told you that panic attacks are often your body's way of telling you something important? Let me share a story that changed how I think about them.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Is a Panic Attack?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A panic attack is a sudden episode of intense fear or discomfort that triggers severe physical reactions. Symptoms can include a racing heart, shortness of breath, dizziness, and a feeling of impending doom. They can happen out of nowhere or be triggered by specific situations.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">The Story of Inner Conflict</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A few years ago, I was going through one of the most stressful periods of my life. I was juggling work, health challenges, and family responsibilities, all while trying to appear like I had it all together. One day, I had my first panic attack. I thought I was dying.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>After seeing a doctor and ruling out any physical issues, I realized what was happening: my body was screaming at me to slow down. I had been ignoring my stress, pushing through my exhaustion, and pretending everything was fine. The panic attack was my body's way of saying, "Enough."</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2 class="wp-block-heading">What Panic Attacks Teach Us</h2>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>You're Not Broken</strong>: Panic attacks don't mean something is wrong with you. They're your body's alarm system, alerting you to unresolved stress or trauma.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>You Can't Ignore Your Needs</strong>: Pushing through pain and exhaustion only makes things worse. Your body will force you to listen eventually.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>You Deserve Help</strong>: Panic attacks are a sign that you need support, whether that's therapy, lifestyle changes, or simply asking for help.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">How to Manage Panic Attacks</h2>
<!-- /wp:heading -->

<!-- wp:list {"ordered":true} -->
<ol class="wp-block-list"><!-- wp:list-item -->
<li><strong>Breathe</strong>: Deep, slow breathing can help calm your nervous system. Try the 4-7-8 technique: inhale for 4 seconds, hold for 7, and exhale for 8.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Ground Yourself</strong>: Use the 5-4-3-2-1 method to bring yourself back to the present. Name 5 things you see, 4 things you can touch, 3 things you hear, 2 things you smell, and 1 thing you taste.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Talk to Someone</strong>: Therapy, especially cognitive-behavioral therapy (CBT), can be incredibly effective in managing panic attacks.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Address the Root Cause</strong>: Panic attacks are often symptoms of deeper issues like chronic stress, trauma, or unresolved emotions. Work with a professional to address these.</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2 class="wp-block-heading">Final Thoughts</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Panic attacks are scary, but they're also a powerful reminder to take care of yourself. They taught me that I couldn't keep running on empty, and they pushed me to make real changes in my life. If you're struggling with panic attacks, know that you're not alone—and you're not broken. You're just human, and that's okay.</p>
<!-- /wp:paragraph -->`,
    category: "Mental Health",
    date: "2024-11-13",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1759873911661-d4cba84d2eff",
  },

  // ✅ Paste the rest of your posts here (the other ~90 posts you mentioned)
  // {
  //   id: "...",
  //   slug: "...",
  //   title: "...",
  //   excerpt: "...",
  //   content: `...`,
  //   category: "...",
  //   date: "YYYY-MM-DD",
  //   readTime: "...",
  //   image: "...",
  // },
];

// ---------- helpers ----------

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category))).sort((a, b) =>
    a.localeCompare(b)
  );
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return blogPosts.filter((post) => {
    const haystack = `${post.title} ${post.excerpt} ${post.category} ${post.content}`.toLowerCase();
    return haystack.includes(q);
  });
}


// Optional: newest-first (useful for blog index pages)
export function getPostsNewestFirst(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}