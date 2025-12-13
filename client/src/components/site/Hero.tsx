type HeroProps = {
  title: string;
  subtitle?: string;
  image: string; // /assets/img/...
  align?: "left" | "center";
};

export default function Hero({ title, subtitle, image, align = "left" }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="min-h-[420px] md:min-h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        <div className="relative container py-16 md:py-24 text-white">
          <div className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
            {subtitle ? (
              <p className="mt-5 text-lg md:text-2xl text-white/90 leading-relaxed">{subtitle}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
