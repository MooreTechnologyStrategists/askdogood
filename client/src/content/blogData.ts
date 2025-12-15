// blogPosts.ts
// Source of truth for Blog index + Blog post rendering.
//
// Notes:
// - "image" should be a full URL (Azure Blob) or a local path.
// - If an image is missing, UI should fall back to DEFAULT_BLOG_IMAGE.

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // currently WordPress HTML block markup
  category: string;
  date: string; // YYYY-MM-DD
  readTime: string;
  image: string; // URL or local path

  // Optional future-friendly fields (safe to ignore in UI)
  tags?: string[];
  featured?: boolean;
  imageAlt?: string;
}

export const DEFAULT_BLOG_IMAGE =
  "https://askdogoodassets.blob.core.windows.net/images/blog_fallback.webp";

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
    image: "https://askdogoodassets.blob.core.windows.net/images/pro-tips-for-giving-tuesday.webp",
    imageAlt: "Hands offering support and generosity",
    tags: ["Community", "Wellness", "Giving"],
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
    image: "https://askdogoodassets.blob.core.windows.net/images/the-superpower-of-sea-moss-the-oceans-secret-weapon-for-everyday-wellness.webp",
    imageAlt: "Sea moss / ocean plant wellness concept",
    tags: ["Nutrition", "Thyroid", "Minerals"],
  },

  {
    id: "1775",
    slug: "how-collagen-saved-my-skin-my-dads-mobility-and-maybe-even-my-life",
    title: "How Collagen Saved My Skin, My Dad's Mobility, and Maybe Even My Life",
    excerpt:
      "Collagen is one of those wellness buzzwords you hear everywhere, but for me, it's been nothing short of life-changing. From healing my skin after cancer to helping my dad regain mobility, collagen has proven itself to be a true powerhouse. Let me share why...",
    content: `...`,
    category: "Thyroid & Autoimmune",
    date: "2024-11-21",
    readTime: "4 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/how-collagen-saved-my-skin-my-dads-mobility-and-maybe-even-my-life.webp",
    imageAlt: "Collagen wellness supplement concept",
    tags: ["Thyroid", "Autoimmune", "Skin", "Mobility"],
    featured: true,
  },

  {
    id: "1773",
    slug: "superfoods-the-superfood-that-helped-sustain-me-for-7-years",
    title: "SuperBeets: The Superfood That Helped Sustain Me for 7 Years",
    excerpt:
      "When I was first diagnosed with thyroid cancer, my world turned upside down. I had to rethink everything—what I ate, how I moved, and how I approached my health. One discovery that became a cornerstone of my wellness journey was beets, specifically SuperBeets...",
    content: `...`,
    category: "Thyroid & Autoimmune",
    date: "2024-11-19",
    readTime: "4 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/superfoods-the-superfood-that-helped-sustain-me-for-7-years.webp",
    imageAlt: "Beets / superfood wellness concept",
    tags: ["Thyroid", "Energy", "Heart Health"],
    featured: true,
  },

  {
    id: "1771",
    slug: "finding-peace-in-the-chaos-mindfulness-for-black-women",
    title: "Finding Peace in the Chaos: Mindfulness for Black Women",
    excerpt:
      "Let's be real—life as a Black woman can feel like you're constantly juggling a million things while trying to keep it all together. Between work, family, societal expectations, and the weight of simply existing in a world that doesn't always value us, finding...",
    content: `...`,
    category: "Mental Health",
    date: "2024-11-17",
    readTime: "5 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/finding-peace-in-the-chaos-mindfulness-for-black-women.webp",
    imageAlt: "Mindfulness and calm reflection",
    tags: ["Mental Health", "Mindfulness", "Black Women"],
    featured: true,
  },

  {
    id: "1769",
    slug: "the-beautiful-big-bill-americas-reckoning",
    title: "The Beautiful Big Bill: America's Reckoning",
    excerpt:
      `There's a phrase that's been making the rounds lately: "the beautiful big bill." It's not about money, though. It's about the reckoning America is finally starting to face—a reckoning with its history, its systems, and its treatment of Black people...`,
    content: `...`,
    category: "Black Women's Health",
    date: "2024-11-15",
    readTime: "4 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/the-beautiful-big-bill-americas-reckoning.webp",
    imageAlt: "Justice and reflection concept",
    tags: ["Community", "Equity", "Black Women"],
  },

  {
    id: "1767",
    slug: "understanding-panic-attacks-a-story-of-inner-conflict",
    title: "Understanding Panic Attacks: A Story of Inner Conflict",
    excerpt:
      "Panic attacks are terrifying. Your heart races, your chest tightens, and it feels like the world is closing in on you. If you've ever experienced one, you know how overwhelming they can be. But what if I told you that panic attacks are often your body's way of...",
    content: `...`,
    category: "Mental Health",
    date: "2024-11-13",
    readTime: "4 min read",
    image: "https://askdogoodassets.blob.core.windows.net/images/understanding-panic-attacks-a-story-of-inner-conflict.webp",
    imageAlt: "Anxiety support and calm coping concept",
    tags: ["Mental Health", "Anxiety", "Mindfulness"],
  },


  // === WordPress Batch 1 (Posts 1-20) ===
  {
    id: 'pro-tips-for-giving-your-partner-a-massage',
    title: 'Pro Tips for Giving Your Partner a Massage',
    excerpt: 'You don’t have to be a professional masseuse to give your partner a high-quality massage.',
    content: `You don’t have to be a professional masseuse to give your partner a high-quality massage. However, giving a good massage is probably more challenging than you think. You can’t just pull a bottle of moisturizer out of the bathroom closet and start slathering it on your partner. There’s some skill and technique involved.

Learn how to give a great massage and your partner will be impressed and grateful.

A great massage is something your partner won’t soon forget!

Try these techniques:

1. Consid...`,
    date: '2022-12-12',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: '10-tips-to-boost-your-emotional-wellness',
    title: '10 Tips to Boost Your Emotional Wellness',
    excerpt: 'Work, family, financial challenges, Covid-19, and all the other stressors in the world can really take a toll on one’s emotional wellness.',
    content: `Work, family, financial challenges, Covid-19, and all the other stressors in the world can really take a toll on one’s emotional wellness. It’s not easy to be happy and enjoy life if your emotional health isn’t at a high level. While many of life’s ups and downs are beyond our control, there are a lot of things that are within our control.

 

There are several things you can do to increase your emotional wellness that won’t cost a penny or require a lot of time. Practice these strategies and po...`,
    date: '2022-12-12',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: '5-foods-you-need-to-include-in-a-vegan-diet',
    title: '5 Foods You Need to Include in a Vegan Diet!',
    excerpt: 'A vegan diet is one of the healthiest diets you could engage in when it\'s done properly.',
    content: `A vegan diet is one of the healthiest diets you could engage in when it's done properly. On the other hand, some people struggle to find foods that are not only healthy but also tasty and calorie rich to support their busy lives.
 

Blogging from the Dashboard


Remember that the bulk of calories for most people’s diet will come from meat.
When these meats are removed from your diet, it’s crucial to fill your calorie needs with foods that are rich in protein and healthy fats.
 



Here are 5 foo...`,
    date: '2022-12-19',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: '7-ways-to-boost-focus-and-productivity-while-working-from-home',
    title: '7 Ways to Boost Focus and Productivity While Working From Home',
    excerpt: 'Many businesses have allowed or forced employees to work from home.',
    content: `Many businesses have allowed or forced employees to work from home. While this is a welcome development for many people, it’s not always easy to be productive from home.

 

It can be easy to sleep late, watch a little TV, spend too much time on social media, or just waste time in general. Having children at home makes everything even more challenging.



There are many distractions that can make working from home especially difficult. It’s also easy to be unproductive without a boss or coworker...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'a-sober-living-guide-for-the-holidays',
    title: 'A Sober Living Guide for the Holidays',
    excerpt: 'The winter holidays are supposed to be a magical time of year.',
    content: `The winter holidays are supposed to be a magical time of year. However, they can pose extra challenges if you’re trying to live sober.
 

You may look forward to decorating the tree and baking sugar cookies. Then, you remember crowded shopping malls and family dinners with distant relatives asking you about your childbearing plans.



You may also wonder how you’ll handle annual rituals that usually involve rum punch and champagne.



Learn how to celebrate the holidays without risking your reco...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'an-introverts-guide-to-dating',
    title: 'An Introvert’s Guide to Dating',
    excerpt: 'Have you ever felt misunderstood or overwhelmed by conventional dating advice?\nAre you tired of hearing about how “dating is just a numbers game”?\n \n\nMuch of conventional relationship advice doesn',
    content: `Have you ever felt misunderstood or overwhelmed by conventional dating advice?
Are you tired of hearing about how “dating is just a numbers game”?
 

Much of conventional relationship advice doesn’t take introversion into account.



Introverts are people who focus inward and tend to be more in touch with their thoughts and feelings. They are best known for needing alone time to recharge their energy. Sometimes, people mistake that fact to mean introverts are shy - but that is not always the cas...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'healthy-tips-for-daily-workouts',
    title: 'Healthy Tips for Daily Workouts',
    excerpt: 'Do you want to make working out a part of your daily routine? Exercising has\n\ncompounding benefits.',
    content: `Do you want to make working out a part of your daily routine? Exercising has

compounding benefits. Working out regularly can uplift your mood, reduce your risk of illness, and help you get better sleep.

In the long run, working out every day can help keep you mobile, agile, and moving. It can also help you live longer.

To receive the most benefits from working out each day, it’s beneficial to change up the exercises in your routine. Doing different types of exercises can also help to

reduce ...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'say-goodbye-to-muscle-cramps',
    title: 'Say Goodbye to Muscle Cramps',
    excerpt: 'Muscle cramps are rarely serious.',
    content: `Muscle cramps are rarely serious. However, they can make it difficult to enjoy your

morning run or get a restful night’s sleep.

Most adults experience cramps at least occasionally. They occur when muscle fibers contract involuntarily. The areas most frequently affected include your legs, back, hands, feet, and abdomen.

You’re probably familiar with the sudden tightness and pain. You may also notice a lump or twitching under your skin. The sensation can be mild or severe. It may last a few sec...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'setting-healthy-boundaries-for-lasting-love',
    title: 'Setting Healthy Boundaries for Lasting Love',
    excerpt: 'Have you ever felt angry or hurt because of something your partner said or did? Setting healthy boundaries can help you protect your emotional energy and deepen the connection within your...',
    content: `Have you ever felt angry or hurt because of something your partner said or did? Setting healthy boundaries can help you protect your emotional energy and deepen the connection within your relationship.

 

Boundaries are the guidelines we set about our expectations, availability, and energy. Because boundaries communicate how we feel, they prevent us from

over committing or feeling resentful. They also help give others guidelines with how to treat you.

They do not have to be hard, aggressive r...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'take-charge-of-your-health-and-well-being-with-naturopathy',
    title: 'Take Charge of Your Health and Well Being With Naturopathy',
    excerpt: 'Naturopathy is a holistic approach to medicine that treats the entire person with the intention of allowing and stimulating the body to heal itself.',
    content: `Naturopathy is a holistic approach to medicine that treats the entire person with the intention of allowing and stimulating the body to heal itself. Treatment methods commonly include diet, exercise, stress reduction, homeopathy, herbs, massage, acupuncture, and physical manipulations.

Naturopathy might sound like voodoo to the uninformed, but its popularity is

increasing.

There are studies underway in the US and Canada to assess its efficacy and cost-effectiveness for treating many medical c...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'the-tremendous-health-benefits-of-a-vegan-diet',
    title: 'The Tremendous Health Benefits of a Vegan Diet',
    excerpt: 'You’ve heard about the vegan diet.',
    content: `You’ve heard about the vegan diet. Maybe you’re not convinced that it’s for you. All

you know is that it sounds extreme and boring. Still, you might consider it if there

were sufficient benefits.

Could you be one of those “vegan people”? Maybe you could! It might be the best

decision you could make for your health and longevity.

First, let’s define what a vegan diet actually is. Essentially, it’s a diet that is free of

animal products. So, that means no meat of any kind, including fish and...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'how-to-solve-trust-issues-in-a-relationship',
    title: 'How to Solve Trust Issues in a Relationship',
    excerpt: 'At some point or another, you\'re likely to experience trust issues in your relationship.',
    content: `At some point or another, you're likely to experience trust issues in your relationship. Whether it's brought about by infidelity, a decrease in your own self esteem, your partner's newly hired young assistant, or a simple change in your partner's behavior, your relationship can weather this storm and rise above feelings of uncertainty.

Follow these tips to solve the trust issues you face so you can experience the thriving relationship you deserve:

1. Work on your self-esteem. Many trust issue...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'top-10-benefits-of-adopting-a-vegan-lifestyle',
    title: 'Top 10 Benefits of Adopting a Vegan Lifestyle',
    excerpt: 'A vegan diet doesn’t sound too appetizing to most meat, cheese, and egg lovers.',
    content: `A vegan diet doesn’t sound too appetizing to most meat, cheese, and egg lovers. However, a vegan diet can be kind to your health and your wallet. You also gain the benefit of knowing that you’re being kinder to animals and the environment. Making the switch isn’t easy, but you might find it a little easier if you know more about the benefits that veganism provides.

It’s not necessary to make a complete change overnight. Make the change slowly over time. Note how you feel and then decide how you...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'what-you-need-to-know-about-serotonin-and-weight-loss',
    title: 'What You Need to Know About Serotonin and Weight Loss',
    excerpt: 'Do you diet and exercise, but stay the same size? A serotonin imbalance could be the reason that you find it difficult to lose weight.\n\nSerotonin may be best known as a neurotransmitter that fights.',
    content: `Do you diet and exercise, but stay the same size? A serotonin imbalance could be the reason that you find it difficult to lose weight.

Serotonin may be best known as a neurotransmitter that fights anxiety and depression. However, it also plays a major role in digestive health. In fact, most of the serotonin in your body is in your gut, rather than in your brain.

Put this natural appetite suppressant to work for you. Learn more about how serotonin affects weight loss and lifestyle choices you c...`,
    date: '2022-12-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'natural-cures-for-black-women-living-with-arthritis',
    title: 'Natural Cures for Black Women Living with Arthritis',
    excerpt: 'Dear AskDoGood Community,\n\nWe’re here to talk about a topic we believe is very important: natural remedies for arthritis in black women.\n\nRecent studies show that arthritis disproportionately affe',
    content: `Dear AskDoGood Community,

We’re here to talk about a topic we believe is very important: natural remedies for arthritis in black women.

Recent studies show that arthritis disproportionately affects black women. It affects approximately 23 percent of black women over the age of 65, and studies show this is likely due to a combination of lifestyle, genetics, and environment.

Arthritis is a very painful and debilitating condition that affects many aspects of your life, so it’s essential to find ...`,
    date: '2023-02-17',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'step-up-and-seize-the-moment-empowering-young-women-to-embrace-their-independence',
    title: 'Step Up and Seize the Moment: Empowering Young Women to Embrace Their Independence!',
    excerpt: 'As a young woman, it can be hard to find the confidence to go out in the world and make something of yourself.\n\nYou are probably questioning whether or not you are capable and strong enough to take.',
    content: `As a young woman, it can be hard to find the confidence to go out in the world and make something of yourself.

You are probably questioning whether or not you are capable and strong enough to take the necessary steps towards financial independence and building a future for yourself. But, young sister, rest assured that you have the ability to become a powerful and independent woman.

Financial independence is crucial for your personal development as a young woman and it’s something you should s...`,
    date: '2023-02-21',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'i-mean-really-what-is-a-landing-zone-in-microsoft-azure-cloud-technologies',
    title: 'I mean, really... What is a Landing Zone in Microsoft Azure Cloud Technologies?',
    excerpt: 'A landing zone is a foundational environment that is set up in a cloud platform such as Microsoft Azure.',
    content: `A landing zone is a foundational environment that is set up in a cloud platform such as Microsoft Azure. It is designed to provide a secure, reliable, and scalable foundation that can be used as a starting point for deploying workloads and applications to the cloud.

The purpose of a landing zone is to provide a set of guidelines and best practices for configuring and managing the cloud environment. It is intended to be a well-architected, standardized, and repeatable environment that can be eas...`,
    date: '2023-02-21',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'black-men-want-to-lead-in-their-relationship-household-profession-but-are-they-up-for-the-task',
    title: 'Black Men want to Lead in their Relationship, Household & Profession but are they up for the task?',
    excerpt: 'Now more than ever, black men are in a unique position to lead in relationships.',
    content: `Now more than ever, black men are in a unique position to lead in relationships. The winds of the 21st century have brought on increased visibility and influence for black males and collective strides in leadership. This is a valuable opportunity for a group generations in the past were less encouraged to assume any type of leadership.

However, with this newfound authority over relationships comes great responsibility. As a black man, you must be willing to take ownership of your own journey an...`,
    date: '2023-02-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'manifestation-says-i-got-the-power-if-you-want-it-just-ask',
    title: 'Manifestation says “I Got The Power” : If You Want It, Just Ask',
    excerpt: 'We all have the power to manifest what we want from within, yet far too often we let that power go untapped.',
    content: `We all have the power to manifest what we want from within, yet far too often we let that power go untapped. As spiritual beings we can learn to use our spiritual power to manifest what we want in our lives. When we align our thoughts and feelings with the power of the Universe, we have the capacity to move mountains and create mountains of abundance.

One way to use our spiritual power to manifest what we desire is by feeling what we need. When we take the time to get in touch with what we need...`,
    date: '2023-02-22',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },
  {
    id: 'claim-what-you-want-own-your-life',
    title: 'Claim What You Want — Own Your Life',
    excerpt: 'We have the power to claim what we want when we feel what we need From self-love to self-efficacy, we have the power to take control of our lives and have what we want.',
    content: `We have the power to claim what we want when we feel what we need From self-love to self-efficacy, we have the power to take control of our lives and have what we want. No longer do we have to wait in the wings, hoping to find some kind of secret key that unlocks an easier life.

Instead, we can seek what we need, claim what we want, and carve out a life that is personally fulfilling for each of us. No matter what walks of life we come from, we each have the power to claim what we want and feel ...`,
    date: '2023-05-08',
    author: 'Rosee Moore',
    image: 'https://askdogoodassets.blob.core.windows.net/images/blog/blog_fallback.webp',
    tags: ['Wellness', 'Health'],
    featured: false,
  },

  // ✅ Paste the rest of your posts here...
];

/* -------------------------------------------------------------------------- */
/*                                  SANITIZER                                 */
/* -------------------------------------------------------------------------- */

type AnyPost = any;

function normalizePost(p: AnyPost): BlogPost | null {
  const id = typeof p?.id === "string" ? p.id.trim() : String(p?.id ?? "").trim();
  const slug =
    typeof p?.slug === "string" ? p.slug.trim() : String(p?.slug ?? "").trim();
  const title =
    typeof p?.title === "string" ? p.title.trim() : String(p?.title ?? "").trim();
  const excerpt =
    typeof p?.excerpt === "string"
      ? p.excerpt.trim()
      : String(p?.excerpt ?? "").trim();
  const content =
    typeof p?.content === "string"
      ? p.content
      : String(p?.content ?? "").trim();
  const category =
    typeof p?.category === "string"
      ? p.category.trim()
      : String(p?.category ?? "General").trim();
  const date =
    typeof p?.date === "string" ? p.date.trim() : String(p?.date ?? "").trim();
  const readTime =
    typeof p?.readTime === "string"
      ? p.readTime.trim()
      : String(p?.readTime ?? "5 min read").trim();

  const imageRaw = typeof p?.image === "string" ? p.image.trim() : "";
  const image = imageRaw.length ? imageRaw : DEFAULT_BLOG_IMAGE;

  const tags = Array.isArray(p?.tags) ? p.tags.filter(Boolean) : undefined;
  const featured = typeof p?.featured === "boolean" ? p.featured : undefined;
  const imageAlt =
    typeof p?.imageAlt === "string" ? p.imageAlt.trim() : undefined;

  // Required fields check — if these are missing, we drop the post.
  const requiredOk = Boolean(id && slug && title && excerpt && content && date);

  if (!requiredOk) return null;

  return {
    id,
    slug,
    title,
    excerpt,
    content,
    category: category || "General",
    date,
    readTime: readTime || "5 min read",
    image,
    tags,
    featured,
    imageAlt,
  };
}

/**
 * Use this everywhere in the UI (BlogIndex, home "latest posts", etc.)
 * so a single malformed post can't crash the app.
 */
export const safeBlogPosts: BlogPost[] = (blogPosts as AnyPost[])
  .map(normalizePost)
  .filter(Boolean) as BlogPost[];

/* -------------------------------------------------------------------------- */
/*                                   HELPERS                                  */
/* -------------------------------------------------------------------------- */

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

export function getPostsNewestFirst(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

// Convenience: ensures UI always has an image (useful if you forget one)
export function getPostImage(post: BlogPost): string {
  return post.image?.trim() ? post.image : DEFAULT_BLOG_IMAGE;
}
