import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";

export default function NoFluff() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              The Ask DoGood Promise
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              No Fluff. Just Real Talk + Real Tools.
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm not here to sell you dreams. I'm here to share what actually worked for me—through thyroid cancer, autoimmune struggles, career pivots, and building a life that feels sustainable. No gimmicks. No empty promises. Just honest guidance and tools that deliver.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT NO FLUFF MEANS */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What "No Fluff" Really Means</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Evidence-Based
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every recommendation is backed by research, personal experience, or expert consultation. I don't promote fads—I share what has scientific support and real-world results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Transparent Affiliates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    When I recommend products, I only share what I've personally used and benefited from. Yes, some links are affiliate links—but I'll never recommend something just for a commission.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Actionable Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No vague advice like "just be consistent." I give you step-by-step systems, templates, and frameworks you can actually implement today.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Real Lived Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Everything I share comes from my own journey—thyroid cancer survivor, Azure Solutions Architect, educator, and someone who's navigated the messy middle of recovery and growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED PRODUCTS */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Products I Actually Use</h2>
            <p className="text-center text-muted-foreground mb-12">
              These are the supplements and tools that have genuinely supported my healing journey. I only recommend what I've personally tested and benefited from.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Sea Moss */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Sea Moss Gel</CardTitle>
                  <CardDescription>92 essential minerals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Supports thyroid function, boosts immunity, and promotes gut health. I add it to my morning smoothie daily.
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=sea+moss+gel&tag=askdogood-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full gap-2" variant="outline">
                      View on Amazon <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Collagen */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Collagen Peptides</CardTitle>
                  <CardDescription>Skin, joints & mobility</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Helped heal my skin post-cancer and improved my dad's mobility. Mix into coffee or smoothies.
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=collagen+peptides&tag=askdogood-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full gap-2" variant="outline">
                      View on Amazon <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* SuperBeets */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">SuperBeets</CardTitle>
                  <CardDescription>Energy & heart health</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Sustained me for 7 years post-diagnosis. Supports nitric oxide production and cardiovascular health.
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=superbeets&tag=askdogood-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full gap-2" variant="outline">
                      View on Amazon <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Black Seed Oil */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Black Seed Oil</CardTitle>
                  <CardDescription>Anti-inflammatory powerhouse</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Known as "the remedy for everything but death." Supports immune function and reduces inflammation.
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=black+seed+oil&tag=askdogood-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full gap-2" variant="outline">
                      View on Amazon <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Vitamin D3 + K2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Vitamin D3 + K2</CardTitle>
                  <CardDescription>Bone & immune support</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Essential for thyroid health and calcium absorption. K2 ensures calcium goes to bones, not arteries.
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=vitamin+d3+k2&tag=askdogood-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full gap-2" variant="outline">
                      View on Amazon <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Magnesium Glycinate */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Magnesium Glycinate</CardTitle>
                  <CardDescription>Sleep & muscle recovery</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The most absorbable form of magnesium. Helps with sleep quality, anxiety, and muscle relaxation.
                  </p>
                  <a
                    href="https://www.amazon.com/s?k=magnesium+glycinate&tag=askdogood-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full gap-2" variant="outline">
                      View on Amazon <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg text-sm text-muted-foreground text-center">
              <strong>Disclosure:</strong> Some links above are Amazon affiliate links. If you purchase through them, I may earn a small commission at no extra cost to you. I only recommend products I've personally used and believe in.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground">
              Explore my blog for more honest insights, or dive into the Clinical Food RX app for personalized nutrition guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/blog">
                <Button size="lg" className="gap-2">
                  Read the Blog
                </Button>
              </Link>
              <Link href="/clinical-recipes">
                <Button size="lg" variant="outline" className="gap-2">
                  Try Clinical Food RX
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
