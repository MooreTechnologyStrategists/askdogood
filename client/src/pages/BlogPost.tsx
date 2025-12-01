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

I've had my own journey with both substances, from many different angles and I'm not here to preach or judge. Instead, I want to share what I've learned through research, personal experience, and conversations with healthcare professionals.
It may surprise you that when I say I have had my own journeys with these substances, I am not even speaking
of my direct consumption; but rather about how those close to me have been affected by them, and how I have had to navigate relationships and social situations involving both alcohol and marijuana.  Both my parents have struggled with
the realities of alcoholism.  Just the same, most all of my ex boyfriends have had a more complex life due to the influence of alcohol.
I have watched alcohol abuse and consumption tear families apart.  

Just the same, my distain for marijuana in my young adult life is why I ended up divorcing my children's father; only to find myself later using this same coping mechanism to numb my own pain.  It was not until I got sober that I realized 
how much both substances had negatively impacted my life and health.  

In the hood, we tend to want to believe that weed somehow helps us to be more creative, more relaxed, and more in tune with ourselves.  
But the reality is that it can also lead to dependency, lack of motivation, and mental health issues.

Then we say things like "at least weed isn't as bad as alcohol," but is that really true?  We furthermore allow and accept how our children pick up the same bad habits that we ourselves have struggled with.  We fail to see how our own actions 
and choices impact the next generation.

## The Science on Alcohol

Alcohol is one of the most widely consumed substances globally, yet it's also one of the most harmful. According to the World Health Organization, alcohol contributes to over 3 million deaths worldwide each year. The fact that it is legal and 
socially accepted does not negate its risks.  And the peer pressure to drink in social settings can be overwhelming, leading many to consume more than they should.

And while yes we know that our children will explore as they become teenagers and young adults, we must also teach them the importance of moderation and responsible consumption.  We must also teach them the dangers of addiction and how to seek 
help if they need it.  As you read my many writings, you will learn that one of my biggest advocacies is communication and education.  We must educate our youth on the realities of substance use and abuse.

Stop turning a blind eye to the realities of alcohol consumption.  It is not glamorous, it is not fun, and it is not worth the risk to your health and well-being.  Just because you are not the parent or you feel the kid will not listen to you, does not
validate your choice to ignore the situation.  Be the change you want to see in the world.

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
