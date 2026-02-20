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
    <section className="py-20 bg-gradient-to-br from-secondary/20 via-primary/5 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-full mb-6 shadow-xl">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Did You Know?
              </span>
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Daily Dose of <span className="text-primary">Realness</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Random facts, tips, and tea you actually need to know — served fresh daily
            </p>
          </div>

          {/* Carousel */}
          <Card className="relative overflow-hidden border-2 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentFact.color} opacity-10`}></div>
            
            <CardContent className="relative z-10 p-10 md:p-14">
              <div className="text-center">
                {/* Icon */}
                <div className="text-7xl mb-6 animate-bounce drop-shadow-lg">
                  {currentFact.icon}
                </div>

                {/* Category Badge */}
                <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${currentFact.color} text-white font-bold text-sm mb-6 shadow-lg`}>
                  {currentFact.category}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {currentFact.title}
                </h3>

                {/* Content */}
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  {currentFact.content}
                </p>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mb-8">
                  {funFacts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        setIsAutoPlay(false);
                      }}
                      className={`h-3 rounded-full transition-all ${
                        index === currentSlide
                          ? 'w-10 bg-primary shadow-lg'
                          : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={prevSlide}
                    className="rounded-3xl shadow-md hover:shadow-xl transition-all"
                    aria-label="Previous slide"
                  >
                    ← Previous
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="gap-2 rounded-3xl"
                  >
                    <RefreshCw className={`w-4 h-4 ${isAutoPlay ? 'animate-spin' : ''}`} />
                    {isAutoPlay ? 'Pause' : 'Auto Play'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={nextSlide}
                    className="rounded-3xl shadow-md hover:shadow-xl transition-all"
                    aria-label="Next slide"
                  >
                    Next →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-10">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-base text-muted-foreground mb-4">
                <strong className="text-foreground">💡 Want more tips like this?</strong> Get daily wellness wisdom, recipes, and real talk delivered to your inbox.
              </p>
              <Button asChild size="lg" className="rounded-3xl shadow-lg hover:shadow-xl transition-all">
                <Link href="/blog">
                  Explore All Tips & Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
