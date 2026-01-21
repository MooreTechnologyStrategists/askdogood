import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, RefreshCw } from 'lucide-react';
import { Link } from 'wouter';

interface FunFact {
  category: string;
  title: string;
  content: string;
  icon: string;
  color: string;
}

export default function SpicyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const funFacts: FunFact[] = [
    {
      category: "Yoni Health 🌺",
      title: "Foods That Keep Your Yoni Happy",
      content: "Pineapple, cranberries, yogurt with probiotics, and plenty of water keep your pH balanced and everything smelling fresh. Skip the sugar—it feeds bad bacteria!",
      icon: "🍍",
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "Quick Recipe 🍳",
      title: "5-Minute Mango Lassi",
      content: "Blend: 1 ripe mango, 1 cup yogurt, ½ cup milk, cardamom, honey. Boom—exotic breakfast in minutes that'll make your taste buds sing!",
      icon: "🥭",
      color: "from-orange-500 to-amber-500"
    },
    {
      category: "Health Tea ☕",
      title: "Why Black Women Need More Vitamin D",
      content: "Melanin blocks vitamin D absorption from the sun. We need 2-3x more sun exposure OR supplements (2000+ IU daily). Low D = fatigue, mood issues, weak immunity.",
      icon: "☀️",
      color: "from-yellow-500 to-orange-500"
    },
    {
      category: "Relationship Real Talk 💕",
      title: "The 2-2-2 Rule for Couples",
      content: "Every 2 weeks: date night. Every 2 months: weekend away. Every 2 years: vacation. Keep the spark alive with intentional time together!",
      icon: "💑",
      color: "from-red-500 to-pink-500"
    },
    {
      category: "Money Moves 💰",
      title: "Save $500/Month Without Trying",
      content: "Automate it! Set up auto-transfer of $125/week on payday. You won't miss what you don't see. In 1 year = $6,000 emergency fund. You're welcome.",
      icon: "💵",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "DMV Job Alert 💼",
      title: "Free Tech Training in Maryland",
      content: "Per Scholas offers FREE coding bootcamps in Maryland. No prior experience needed. They place 85% of grads in tech jobs averaging $65K+. Google it!",
      icon: "💻",
      color: "from-blue-500 to-indigo-500"
    },
    {
      category: "Gossip Corner 🍵",
      title: "What's Trending This Week",
      content: "Self-care isn't selfish. Boundaries aren't rude. Therapy is for everyone. Your mental health matters more than their opinion of you. Period.",
      icon: "👑",
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Thyroid Truth 🦋",
      title: "Why You're Still Tired on Medication",
      content: "Your doctor only tests TSH. You need Free T3, Free T4, Reverse T3, and antibodies. Most docs miss this. Advocate for the full panel!",
      icon: "🔬",
      color: "from-teal-500 to-cyan-500"
    },
    {
      category: "Beauty Hack 💅",
      title: "Glow Up for Under $20",
      content: "Castor oil ($8) on lashes at night = thick lashes in 4 weeks. Gua sha tool ($10) daily = sculpted face. No botox needed, sis.",
      icon: "✨",
      color: "from-pink-400 to-purple-400"
    },
    {
      category: "Quick Flex 🔥",
      title: "Did You Know?",
      content: "Black women start more businesses than any other demographic but get less than 1% of VC funding. We're out here building empires anyway. That's power.",
      icon: "👊🏾",
      color: "from-red-600 to-orange-600"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % funFacts.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, funFacts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % funFacts.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + funFacts.length) % funFacts.length);
    setIsAutoPlay(false);
  };

  const currentFact = funFacts[currentSlide];

  return (
    <section className="py-12 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <h2 className="text-3xl font-bold">Daily Dose of Realness</h2>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <p className="text-muted-foreground">
              Random facts, tips, and tea you actually need to know
            </p>
          </div>

          {/* Carousel */}
          <Card className="relative overflow-hidden border-2 shadow-xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentFact.color} opacity-10`}></div>
            
            <CardContent className="relative z-10 p-8 md:p-12">
              <div className="text-center">
                {/* Icon */}
                <div className="text-6xl mb-4 animate-bounce">
                  {currentFact.icon}
                </div>

                {/* Category Badge */}
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${currentFact.color} text-white font-semibold text-sm mb-4`}>
                  {currentFact.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {currentFact.title}
                </h3>

                {/* Content */}
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                  {currentFact.content}
                </p>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mb-6">
                  {funFacts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        setIsAutoPlay(false);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'w-8 bg-primary'
                          : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                  >
                    ← Prev
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="gap-2"
                  >
                    <RefreshCw className={`w-4 h-4 ${isAutoPlay ? 'animate-spin' : ''}`} />
                    {isAutoPlay ? 'Pause' : 'Auto Play'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextSlide}
                    aria-label="Next slide"
                  >
                    Next →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground mb-3">
              Want more tips like this? Subscribe to our newsletter!
            </p>
            <Button asChild>
              <Link href="/blog">
                Read More on the Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
