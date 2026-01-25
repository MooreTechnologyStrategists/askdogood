import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const testimonials = [
  {
    name: "Maya T.",
    location: "Washington, DC",
    condition: "Hypothyroidism",
    image: "/images/testimonials/maya.jpg",
    text: "This course changed everything. I finally understand my body and how to advocate for myself. Within 3 months, my energy returned and I feel like ME again.",
    rating: 5,
    link: "/journey#maya-story"
  },
  {
    name: "Keisha M.",
    location: "Baltimore, MD",
    condition: "Post-Thyroidectomy",
    image: "/images/testimonials/keisha.jpg",
    text: "I've spent thousands on doctors who didn't listen. This $97 course gave me more practical information than years of appointments. RoSeé just GETS it.",
    rating: 5,
    link: "/journey#keisha-story"
  },
  {
    name: "Simone W.",
    location: "Arlington, VA",
    condition: "Hashimoto's Thyroiditis",
    image: "/images/testimonials/simone.jpg",
    text: "As a newly diagnosed Hashimoto's patient, I was overwhelmed. This course broke everything down in a way that made sense. The community support alone is worth it!",
    rating: 5,
    link: "/journey#simone-story"
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 bg-gradient-fun relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 text-5xl opacity-20 animate-float">💬</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-20 animate-float-slow">⭐</div>
      
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 shadow-cartoon animate-bounce-fun">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 1,000+ Thyroid Warriors 💪</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Real People, Real Results ✨
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of people who've taken control of their thyroid health 🎯
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 rounded-3xl overflow-hidden group border-2 hover:border-primary/50">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4 animate-pulse-glow" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pop-in" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>

                <p className="text-base mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location} 📍</p>
                    <p className="text-xs text-primary font-medium">{testimonial.condition}</p>
                  </div>
                </div>

                <Link href={testimonial.link}>
                  <Button variant="outline" className="w-full gap-2 rounded-full hover-wiggle group/btn">
                    Read Full Story
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/journey">
            <Button size="lg" className="gap-2 rounded-full shadow-cartoon-primary hover-bounce">
              See More Success Stories 🎉
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
