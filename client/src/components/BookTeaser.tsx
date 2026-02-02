import BeehiivSubscribe from "@/components/BeehiivSubscribe";

export default function BookTeaser() {
  return (
    <section className="border-t bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container py-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-primary/20 bg-card/80 p-8 shadow-xl">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Fall 2026 Book Preview
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
                Starting from Scratch in the Basement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A raw, honest story about rebuilding after loss, anxiety, and burnout—
                and discovering an irreversible kind of peace. If you’ve ever felt like
                growth only brought more worry, this book is for you.
              </p>
              <div className="rounded-2xl bg-primary/5 p-4 text-sm text-foreground">
                <strong className="text-primary">Founders price:</strong> $9 for subscribers
                <span className="text-muted-foreground"> (regular trade price $23.50)</span>
              </div>
            </div>
            <div className="space-y-4">
              <BeehiivSubscribe
                variant="inline"
                title="Get launch updates + founders pricing"
                description="Join the list for early chapters, behind-the-scenes writing updates, and a guaranteed $9 launch price."
                placeholder="Enter your email"
                buttonText="Lock in $9 pricing"
              />
              <p className="text-xs text-muted-foreground text-center">
                No spam. Unsubscribe anytime. Your early-reader perks are locked in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
