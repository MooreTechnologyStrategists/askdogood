import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Download,
  Star,
  ArrowRight,
  Brain,
  Activity,
  FileText,
  AlertCircle,
  Heart,
  XCircle,
  Calendar,
  Package,
  Wind,
  Moon,
  Home,
  Users,
  Pill,
  Leaf,
  TrendingUp,
  Clipboard,
  AlertTriangle,
  RefreshCw,
  PlayCircle,
} from "lucide-react";
import { thyroidHealthMasteryCourse } from "@/content/courses/thyroid-health-mastery";

const iconMap: Record<string, any> = {
  brain: Brain,
  activity: Activity,
  "file-text": FileText,
  "alert-circle": AlertCircle,
  heart: Heart,
  "x-circle": XCircle,
  calendar: Calendar,
  package: Package,
  wind: Wind,
  moon: Moon,
  home: Home,
  users: Users,
  pill: Pill,
  leaf: Leaf,
  "trending-up": TrendingUp,
  clipboard: Clipboard,
  "alert-triangle": AlertTriangle,
  "refresh-cw": RefreshCw,
  "check-circle": CheckCircle2,
};

export default function ThyroidHealthMasteryCourse() {
  const course = thyroidHealthMasteryCourse;
  const totalDuration = course.modules.reduce((acc, module) => {
    const duration = parseInt(module.duration);
    return acc + duration;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      {/* Hero Section with Cover Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${course.coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-bold">COMPREHENSIVE THYROID COURSE</span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Thyroid Health Mastery
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {course.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">{totalDuration} minutes total</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <PlayCircle className="h-5 w-5" />
                <span className="font-semibold">5 Comprehensive Modules</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Download className="h-5 w-5" />
                <span className="font-semibold">Lifetime Access</span>
              </div>
            </div>

            <Button
              size="lg"
              className="gap-3 rounded-3xl text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-2xl"
            >
              Enroll Now for ${course.price}
              <ArrowRight className="h-6 w-6" />
            </Button>

            <p className="text-sm text-gray-300 mt-4">
              ✓ 30-Day Money-Back Guarantee • ✓ Instant Access • ✓ Lifetime Updates
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What You'll Learn
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to take control of your thyroid health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, text: "Understand the thyroid-gut-brain connection" },
              { icon: FileText, text: "Read and interpret your lab results" },
              { icon: Heart, text: "Eat for thyroid healing and hormone balance" },
              { icon: Wind, text: "Manage stress without exhausting your adrenals" },
              { icon: Pill, text: "Navigate medications and natural remedies" },
              { icon: Clipboard, text: "Create your personalized healing protocol" },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-3xl"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Complete Course Curriculum
            </h2>
            <p className="text-xl text-muted-foreground">
              5 comprehensive modules + bonus resources
            </p>
          </div>

          <div className="space-y-8">
            {course.modules.map((module, index) => (
              <Card
                key={module.id}
                className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 rounded-3xl"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Module Image */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full font-bold">
                      Module {module.id}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {module.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/90">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">{module.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Module Lessons */}
                  <div className="md:col-span-2 p-6">
                    <div className="space-y-4">
                      {module.lessons.map((lesson, lessonIndex) => {
                        const IconComponent = iconMap[lesson.icon] || CheckCircle2;
                        return (
                          <div
                            key={lessonIndex}
                            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-bold text-lg">{lesson.title}</h4>
                                <span className="text-sm text-muted-foreground">
                                  {lesson.duration}
                                </span>
                              </div>
                              <p className="text-muted-foreground text-sm">
                                {lesson.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Resources */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-full mb-4">
              <Star className="h-4 w-4 fill-current text-white" />
              <span className="text-sm font-bold text-white">BONUS RESOURCES</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              You Also Get These Bonuses
            </h2>
            <p className="text-xl text-muted-foreground">
              Worth $150+ • Included Free
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {course.bonusResources.map((bonus, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-3xl overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                    BONUS
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{bonus.title}</h3>
                  <p className="text-muted-foreground">{bonus.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                    <Download className="h-4 w-4" />
                    <span className="text-sm">Downloadable PDF</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What Warriors Are Saying
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {course.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-3xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                        {testimonial.condition}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {course.faqs.map((faq, index) => (
              <Card key={index} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container max-w-4xl text-center">
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ready to Master Your Thyroid Health?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join 500+ warriors who've transformed their thyroid health with this course
          </p>
          <Button
            size="lg"
            className="gap-3 rounded-3xl text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100 shadow-2xl"
          >
            Enroll Now for ${course.price}
            <ArrowRight className="h-6 w-6" />
          </Button>
          <p className="text-sm text-white/80 mt-4">
            ✓ 30-Day Money-Back Guarantee • ✓ Instant Access • ✓ Lifetime Updates
          </p>
        </div>
      </section>
    </div>
  );
}
