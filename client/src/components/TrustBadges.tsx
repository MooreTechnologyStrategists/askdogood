const trustElements = [
  {
    photo: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=200&h=200&fit=crop",
    alt: "30-Day Money Back Guarantee — Risk Free",
    title: "30-Day Guarantee",
    description: "100% satisfaction — no questions asked",
  },
  {
    photo: "https://images.unsplash.com/photo-1580281657702-257584239a55?w=200&h=200&fit=crop",
    alt: "Johns Hopkins University — Certified Training",
    title: "Johns Hopkins Certified",
    description: "Agentic AI & health technology",
  },
  {
    photo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=200&fit=crop",
    alt: "1000 plus thyroid wellness students worldwide",
    title: "1,000+ Students",
    description: "Thyroid warriors worldwide",
  },
  {
    photo: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=200&h=200&fit=crop",
    alt: "7 plus years of thyroid recovery and lived experience",
    title: "Lived Experience",
    description: "7+ years of real thyroid recovery",
  },
  {
    photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop",
    alt: "Thyroid friendly real food nutrition and meal prep",
    title: "Real Food. Real Results.",
    description: "Thyroid-friendly meals that heal",
  },
  {
    photo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop",
    alt: "Microsoft UMGC and PG Parks expert partnerships",
    title: "Expert Partnerships",
    description: "Microsoft · UMGC · PG Parks",
  },
];

export default function TrustBadges() {
  return (
    <div className="py-14 border-y border-border/40 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
          Why thousands choose AskDoGood
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustElements.map((el, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 ring-2 ring-primary/20 group-hover:ring-primary/60 transition-all duration-300 shadow-md">
                <img
                  src={el.photo}
                  alt={el.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width="64"
                  height="64"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors" />
              </div>
              <h3 className="font-semibold text-sm mb-1 leading-tight">{el.title}</h3>
              <p className="text-xs text-muted-foreground leading-snug">{el.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
