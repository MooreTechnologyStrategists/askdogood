import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "wouter";
import { Streamdown } from 'streamdown';

// Sample blog post content - will be replaced with actual content
const blogPostsContent: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}> = {
  "alcohol-vs-weed-health-impact": {
    title: "Alcohol vs. Weed: Which Is More Harmful to Your Health?",
    date: "2024-11-15",
    readTime: "8 min read",
    category: "Hot Topics",
    image: "/blog-discussion.png",
    content: `
This is one of the most controversial questions in health and wellness today, and for good reason. Both alcohol and marijuana have been part of human culture for centuries, yet their health impacts are vastly different—and often misunderstood.

## My Personal Experience

I've had my own journey with both substances, and I'm not here to preach or judge. Instead, I want to share what I've learned through research, personal experience, and conversations with healthcare professionals.

## The Science on Alcohol

Alcohol is one of the most widely consumed substances globally, yet it's also one of the most harmful. According to the World Health Organization, alcohol contributes to over 3 million deaths worldwide each year.

**Key health impacts of alcohol:**
- Liver damage and cirrhosis
- Increased cancer risk (mouth, throat, liver, breast)
- Cardiovascular problems
- Mental health issues and dependency
- Impaired judgment and motor skills

## The Science on Marijuana

Marijuana, on the other hand, has a more complex profile. While it's not without risks, research suggests it's significantly less harmful than alcohol in many ways.

**Key health impacts of marijuana:**
- Respiratory issues (when smoked)
- Short-term memory impairment
- Potential for psychological dependency
- Anxiety or paranoia in some users
- Impaired coordination and reaction time

## The Bottom Line

From a purely health perspective, the research is clear: **alcohol is more harmful to your body than marijuana**. This doesn't mean marijuana is harmless, but the risks are considerably lower.

That said, the best choice for your health is neither. Sobriety has given me clarity, energy, and a sense of control I never had when I was using either substance.

## What's Right for You?

Everyone's journey is different. If you're struggling with either substance, I encourage you to:
- Talk to a healthcare professional
- Be honest with yourself about your relationship with substances
- Consider the long-term impact on your health and goals
- Seek support if you need it

Remember: there's no shame in asking for help. Your health and well-being are worth it.

---

*This article is based on my personal experience and research. It is not medical advice. Please consult with a healthcare professional for personalized guidance.*
    `
  },
  "my-recovery-journey-one-year": {
    title: "One Year Sober: Reflections on My Recovery Journey",
    date: "2024-11-10",
    readTime: "10 min read",
    category: "Recovery",
    image: "/recovery-strength.png",
    content: `
Today marks one year since I made the decision to get sober. It's been the hardest and most rewarding year of my life.

## The Decision

I didn't hit rock bottom in the dramatic way you see in movies. There was no single catastrophic event. Instead, it was a slow realization that I was living a life that didn't align with who I wanted to be.

I was tired of waking up with regret. Tired of the anxiety. Tired of feeling like I was just going through the motions.

## The First 30 Days

The first month was brutal. I won't sugarcoat it. The physical withdrawal was one thing, but the emotional and psychological challenges were even harder.

**What helped me:**
- Daily check-ins with a support group
- Journaling my thoughts and triggers
- Finding new routines to replace old habits
- Leaning on friends and family who supported my decision

## Months 3-6: Finding My Footing

By month three, the fog started to lift. I began to rediscover who I was without substances. I picked up old hobbies, started exercising regularly, and invested in my mental health.

This period wasn't without challenges. I had to navigate social situations, deal with cravings, and learn to sit with uncomfortable emotions instead of numbing them.

## Months 6-12: Building a New Life

The second half of the year has been about building. Building new habits, new relationships, new goals. I've accomplished more in the past six months than I did in the previous five years.

**Key milestones:**
- Completed my first 5K
- Improved my professional performance
- Rebuilt relationships with family
- Developed a consistent meditation practice
- Started this blog to share my journey

## What I've Learned

1. **Recovery isn't linear.** There are good days and hard days. That's okay.
2. **You can't do it alone.** Support is essential, whether it's from friends, family, or a formal program.
3. **Sobriety is a gift, not a punishment.** I'm not missing out—I'm gaining clarity, health, and purpose.
4. **It gets easier.** The first few months are the hardest, but it does get better.

## Looking Forward

I don't know what the next year will bring, but I'm excited to find out—sober, clear-headed, and ready for whatever comes my way.

If you're considering sobriety or struggling with your own recovery, know that you're not alone. It's possible, and it's worth it.

---

*If you're struggling with substance use, please reach out to a professional or support group. You don't have to do this alone.*
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug || "";
  const post = blogPostsContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">
            This blog post is coming soon or doesn't exist.
          </p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div 
        className="w-full h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* Article Content */}
      <article className="container max-w-4xl -mt-32 relative z-10">
        <div className="bg-background rounded-lg shadow-xl p-8 md:p-12">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Category */}
          <div className="text-primary font-medium mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <Streamdown>{post.content}</Streamdown>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-center text-muted-foreground mb-4">
              Found this helpful? Share your thoughts or reach out.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button>Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Spacing */}
      <div className="h-20" />
    </div>
  );
}
