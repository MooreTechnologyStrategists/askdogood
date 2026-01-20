import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, X, Gift, Star, Users, Clock, Download, Video, BookOpen, Heart, TrendingUp, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function ThyroidCourse() {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  
  const regularPrice = 197;
  const launchPrice = 97;
  const promoPrice = 48.50;

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'MLKLEGACY') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code');
      setPromoApplied(false);
    }
  };

  const finalPrice = promoApplied ? promoPrice : launchPrice;
  const gumroadUrl = `https://gumroad.com/l/thyroid-health-mastery${promoApplied ? '?wanted=true&code=MLKLEGACY' : ''}`;

  const modules = [
    {
      title: 'Module 1: Understanding Your Thyroid',
      lessons: [
        'The Thyroid-Gut-Brain Connection',
        'Common Thyroid Dysfunctions Explained',
        'Reading Your Lab Results',
        'What Your Doctor Isn\'t Telling You'
      ],
      duration: '45 min'
    },
    {
      title: 'Module 2: Nutrition for Thyroid Health',
      lessons: [
        'Anti-Inflammatory Foods That Heal',
        'Foods to Avoid (And Why)',
        'Meal Planning for Hormone Balance',
        'Supplements That Actually Work'
      ],
      duration: '60 min'
    },
    {
      title: 'Module 3: Lifestyle Optimization',
      lessons: [
        'Stress Management Techniques',
        'Sleep Optimization for Hormones',
        'Exercise Without Burning Out',
        'Toxin Reduction in Your Home'
      ],
      duration: '50 min'
    },
    {
      title: 'Module 4: The Clinical Approach',
      lessons: [
        'Working With Your Healthcare Team',
        'Medication Myths Debunked',
        'Natural Remedies That Complement Treatment',
        'Tracking Your Progress'
      ],
      duration: '40 min'
    },
    {
      title: 'Module 5: Long-Term Success',
      lessons: [
        'Creating Your Personal Protocol',
        'Navigating Flare-Ups',
        'Maintaining Remission',
        'When to Adjust Your Approach'
      ],
      duration: '35 min'
    }
  ];

  const bonuses = [
    {
      icon: BookOpen,
      title: '70-Page Thyroid Recovery Workbook',
      value: '$47'
    },
    {
      icon: Download,
      title: 'Anti-Inflammatory Recipe Collection',
      value: '$27'
    },
    {
      icon: Heart,
      title: 'Supplement Protocol Guide',
      value: '$37'
    },
    {
      icon: TrendingUp,
      title: 'Lab Results Tracking Templates',
      value: '$17'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      result: 'TSH normalized in 3 months',
      quote: 'After years of fatigue and weight gain, this course gave me the exact roadmap I needed. My doctor was shocked at my progress!',
      rating: 5
    },
    {
      name: 'Jennifer L.',
      result: 'Energy levels restored',
      quote: 'I finally understand WHY my thyroid wasn\'t healing. The clinical recipes alone were worth the investment.',
      rating: 5
    },
    {
      name: 'Michelle K.',
      result: 'Lost 23 pounds naturally',
      quote: 'The anti-inflammatory protocol changed my life. I\'m off medication and feeling better than ever.',
      rating: 5
    }
  ];

  const faqs = [
    {
      q: 'How long do I have access to the course?',
      a: 'Lifetime access! Watch at your own pace and revisit anytime.'
    },
    {
      q: 'Is this a substitute for medical treatment?',
      a: 'No, this course complements medical care and helps you make informed decisions with your healthcare team.'
    },
    {
      q: 'What if I don\'t have a thyroid diagnosis yet?',
      a: 'This course is perfect for anyone experiencing symptoms or wanting to prevent thyroid issues proactively.'
    },
    {
      q: 'Do I need any special equipment or supplements?',
      a: 'No! The course teaches you what works best for YOUR body. Supplement recommendations are optional.'
    },
    {
      q: 'What if it doesn\'t work for me?',
      a: 'If you implement the strategies and don\'t see improvement within 60 days, email us for a full refund.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-background py-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 text-lg px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Limited Time Launch Offer
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thyroid Health Mastery
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              The Clinical Approach to Healing Your Thyroid Naturally
            </p>
            
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              7+ years of recovery research, clinical testing, and real results distilled into a step-by-step system you can start TODAY.
            </p>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl line-through text-muted-foreground">${regularPrice}</span>
                {promoApplied ? (
                  <>
                    <span className="text-3xl line-through text-muted-foreground">${launchPrice}</span>
                    <span className="text-5xl font-bold text-primary">${promoPrice}</span>
                  </>
                ) : (
                  <span className="text-5xl font-bold text-primary">${launchPrice}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {promoApplied ? '50% OFF with MLK Legacy Code!' : 'Launch Price - Save $100'}
              </p>
            </div>

            {/* Promo Code */}
            {!promoApplied && (
              <div className="max-w-md mx-auto mb-8">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg"
                  />
                  <Button onClick={applyPromoCode}>
                    <Gift className="w-4 h-4 mr-2" />
                    Apply
                  </Button>
                </div>
                {promoError && (
                  <p className="text-sm text-red-500 mt-2">{promoError}</p>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                asChild
              >
                <a href={gumroadUrl} target="_blank" rel="noopener noreferrer">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Enroll Now - ${finalPrice}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#curriculum">View Curriculum</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>4+ hours of content</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>500+ students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Real Results from Real People</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-semibold text-primary mb-2">{testimonial.result}</p>
                <p className="text-sm mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-muted-foreground">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Complete Course Curriculum</h2>
          <p className="text-center text-muted-foreground mb-12">
            5 comprehensive modules + bonus resources
          </p>

          <div className="space-y-6">
            {modules.map((module, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{module.title}</h3>
                  <Badge variant="secondary">
                    <Clock className="w-3 h-3 mr-1" />
                    {module.duration}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {module.lessons.map((lesson, lessonIdx) => (
                    <li key={lessonIdx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Exclusive Bonuses Included</h2>
          <p className="text-center text-muted-foreground mb-12">
            Worth over $128 - yours FREE with enrollment
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {bonuses.map((bonus, idx) => (
              <Card key={idx} className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <bonus.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{bonus.title}</h3>
                  <p className="text-sm text-primary font-semibold">Value: {bonus.value}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Control of Your Thyroid Health?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of women who've transformed their health with this proven system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              asChild
            >
              <a href={gumroadUrl} target="_blank" rel="noopener noreferrer">
                <Sparkles className="w-5 h-5 mr-2" />
                Enroll Now - ${finalPrice}
              </a>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ 60-Day Money-Back Guarantee ✓ Lifetime Access ✓ Instant Delivery
          </p>
        </div>
      </section>
    </div>
  );
}
