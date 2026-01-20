import { Shield, Award, Users, Heart, TrendingUp, CheckCircle2 } from "lucide-react";

const trustElements = [
  {
    icon: Shield,
    title: "30-Day Money-Back",
    description: "100% satisfaction guaranteed",
  },
  {
    icon: Award,
    title: "Johns Hopkins Certified",
    description: "Agentic AI specialized training",
  },
  {
    icon: Users,
    title: "1,000+ Students",
    description: "Thyroid warriors worldwide",
  },
  {
    icon: Heart,
    title: "Lived Experience",
    description: "7+ years thyroid recovery",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Thousands of success stories",
  },
  {
    icon: CheckCircle2,
    title: "Expert Partnerships",
    description: "Microsoft, UMGC, PG Parks",
  },
];

export default function TrustBadges() {
  return (
    <div className="py-12 border-y border-border/40">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustElements.map((element, index) => {
            const Icon = element.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{element.title}</h3>
                <p className="text-xs text-muted-foreground">{element.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
