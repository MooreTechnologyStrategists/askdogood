import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maya T.",
    location: "Washington, DC",
    condition: "Hypothyroidism",
    image: "/images/testimonials/maya.jpg",
    text: "This course changed everything. I finally understand my body and how to advocate for myself. Within 3 months, my energy returned and I feel like ME again.",
    rating: 5,
  },
  {
    name: "Keisha M.",
    location: "Baltimore, MD",
    condition: "Post-Thyroidectomy",
    image: "/images/testimonials/keisha.jpg",
    text: "I've spent thousands on doctors who didn't listen. This $97 course gave me more practical information than years of appointments. RoSeé just GETS it.",
    rating: 5,
  },
  {
    name: "Simone W.",
    location: "Arlington, VA",
    condition: "Hashimoto's Thyroiditis",
    image: "/images/testimonials/simone.jpg",
    text: "As a newly diagnosed Hashimoto's patient, I was overwhelmed. This course broke everything down in a way that made sense. The community support alone is worth it!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 bg-secondary/10">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 1,000+ Thyroid Warriors</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Real People, Real Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of people who've taken control of their thyroid health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-sm mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.condition}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
