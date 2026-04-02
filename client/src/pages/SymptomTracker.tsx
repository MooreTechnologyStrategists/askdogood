import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Download, ClipboardList, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BeehiivSubscribe from "@/components/BeehiivSubscribe";
import SEO from "@/components/SEO";
import { trackLeadMagnetView } from "@/lib/analytics";
import { useScrollDepthTracking } from "@/hooks/useScrollDepthTracking";

type SymptomEntry = {
  date: string;
  energy: number;
  mood: number;
  stress: number;
  sleepHours: number;
  notes: string;
};

export default function SymptomTracker() {
  const [entry, setEntry] = useState<SymptomEntry>({
    date: new Date().toISOString().slice(0, 10),
    energy: 5,
    mood: 5,
    stress: 5,
    sleepHours: 7,
    notes: "",
  });
  const [entries, setEntries] = useState<SymptomEntry[]>([]);

  useEffect(() => {
    trackLeadMagnetView('symptom-tracker', '/symptom-tracker');
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("adg-symptom-tracker-entries");
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as SymptomEntry[];
      if (Array.isArray(parsed)) {
        setEntries(parsed);
      }
    } catch {
      // Ignore malformed local data and keep the tracker usable.
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("adg-symptom-tracker-entries", JSON.stringify(entries));
  }, [entries]);

  const latestEntries = useMemo(() => entries.slice(0, 7), [entries]);

  const averages = useMemo(() => {
    if (entries.length === 0) {
      return { energy: 0, mood: 0, stress: 0, sleepHours: 0 };
    }

    const total = entries.reduce(
      (acc, item) => {
        acc.energy += item.energy;
        acc.mood += item.mood;
        acc.stress += item.stress;
        acc.sleepHours += item.sleepHours;
        return acc;
      },
      { energy: 0, mood: 0, stress: 0, sleepHours: 0 },
    );

    return {
      energy: total.energy / entries.length,
      mood: total.mood / entries.length,
      stress: total.stress / entries.length,
      sleepHours: total.sleepHours / entries.length,
    };
  }, [entries]);

  const saveEntry = () => {
    if (!entry.date) return;

    setEntries((prev) => {
      const withoutSameDay = prev.filter((item) => item.date !== entry.date);
      return [entry, ...withoutSameDay].sort((a, b) => b.date.localeCompare(a.date));
    });
  };

  useScrollDepthTracking('Lead Magnet: Symptom Tracker');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <SEO
        title="Free Thyroid Symptom Tracker"
        description="Download your free printable thyroid symptom tracker. Monitor your daily symptoms, energy levels, and progress to share with your doctor."
        keywords={['thyroid symptom tracker', 'hypothyroidism symptoms', 'health journal', 'symptom diary', 'thyroid tracking']}
        url="/symptom-tracker"
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Download className="h-4 w-4" />
              <span>FREE PRINTABLE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              Thyroid Symptom Tracker
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Track your symptoms, identify patterns, and have concrete data to share with your doctor. 
              This simple tracker helps you see what's working and what needs adjustment.
            </p>

            {/* Preview Image */}
            <div className="mb-12 relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border-2 border-primary/20">
                <ClipboardList className="h-24 w-24 text-primary/40" />
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg rotate-12">
                PRINTABLE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track These Symptoms */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Track</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: "Energy & Fatigue",
                  symptoms: ["Morning energy level", "Afternoon crashes", "Overall fatigue", "Need for naps"]
                },
                {
                  category: "Mental & Mood",
                  symptoms: ["Brain fog", "Memory issues", "Mood swings", "Anxiety or depression"]
                },
                {
                  category: "Physical Symptoms",
                  symptoms: ["Hair loss", "Dry skin", "Cold sensitivity", "Joint pain"]
                },
                {
                  category: "Digestive Health",
                  symptoms: ["Bloating", "Constipation", "Appetite changes", "Weight fluctuations"]
                },
                {
                  category: "Sleep Quality",
                  symptoms: ["Hours slept", "Sleep quality", "Nighttime waking", "Morning alertness"]
                },
                {
                  category: "Medication & Supplements",
                  symptoms: ["Dose taken", "Time taken", "Side effects", "Missed doses"]
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">{item.category}</h3>
                    <ul className="space-y-2">
                      {item.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Track Symptoms */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Tracking Matters</h2>
            
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Identify Patterns</h3>
                      <p className="text-muted-foreground">
                        See how your symptoms change with medication adjustments, diet changes, 
                        stress levels, or menstrual cycle. Patterns emerge that you'd otherwise miss.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <ClipboardList className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Better Doctor Visits</h3>
                      <p className="text-muted-foreground">
                        Instead of saying "I'm tired," you can say "My energy was 3/10 for 5 days 
                        after my medication increase." Concrete data gets better treatment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Measure Progress</h3>
                      <p className="text-muted-foreground">
                        When healing happens slowly, it's hard to see progress. Your tracker shows 
                        you how far you've come, even when it doesn't feel like it.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">How to Use Your Tracker</h2>
            
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Print or Save",
                  description: "Print weekly pages or use digitally on your tablet"
                },
                {
                  step: "2",
                  title: "Fill Daily",
                  description: "Takes just 2-3 minutes each evening before bed"
                },
                {
                  step: "3",
                  title: "Review Weekly",
                  description: "Look for patterns every Sunday - what improved? What got worse?"
                },
                {
                  step: "4",
                  title: "Share with Doctor",
                  description: "Bring to appointments to show objective symptom data"
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start p-4 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tracker */}
      <section className="py-16 bg-background border-y">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Track Inside the App</h2>
              <p className="text-muted-foreground">
                Save daily check-ins right in your browser. Your entries stay on your device.
              </p>
            </div>

            <Card className="border-primary/20 mb-8">
              <CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <label className="text-sm font-medium">
                    Date
                    <input
                      type="date"
                      value={entry.date}
                      onChange={(e) => setEntry((prev) => ({ ...prev, date: e.target.value }))}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </label>

                  <label className="text-sm font-medium">
                    Energy (1-10)
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={entry.energy}
                      onChange={(e) => setEntry((prev) => ({ ...prev, energy: Number(e.target.value) || 1 }))}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </label>

                  <label className="text-sm font-medium">
                    Mood (1-10)
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={entry.mood}
                      onChange={(e) => setEntry((prev) => ({ ...prev, mood: Number(e.target.value) || 1 }))}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </label>

                  <label className="text-sm font-medium">
                    Stress (1-10)
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={entry.stress}
                      onChange={(e) => setEntry((prev) => ({ ...prev, stress: Number(e.target.value) || 1 }))}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </label>

                  <label className="text-sm font-medium">
                    Sleep Hours
                    <input
                      type="number"
                      min={0}
                      max={14}
                      step={0.5}
                      value={entry.sleepHours}
                      onChange={(e) => setEntry((prev) => ({ ...prev, sleepHours: Number(e.target.value) || 0 }))}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </label>

                  <label className="text-sm font-medium md:col-span-2 lg:col-span-1">
                    Notes
                    <textarea
                      value={entry.notes}
                      onChange={(e) => setEntry((prev) => ({ ...prev, notes: e.target.value }))}
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 min-h-10"
                      placeholder="Medication changes, stressor, cycle day, foods, etc."
                    />
                  </label>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <Button onClick={saveEntry}>Save Today&apos;s Entry</Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEntries([]);
                      localStorage.removeItem("adg-symptom-tracker-entries");
                    }}
                  >
                    Clear Saved Data
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="border-primary/20"><CardContent className="p-4"><p className="text-xs text-muted-foreground">Avg Energy</p><p className="text-2xl font-bold">{averages.energy.toFixed(1)}</p></CardContent></Card>
              <Card className="border-primary/20"><CardContent className="p-4"><p className="text-xs text-muted-foreground">Avg Mood</p><p className="text-2xl font-bold">{averages.mood.toFixed(1)}</p></CardContent></Card>
              <Card className="border-primary/20"><CardContent className="p-4"><p className="text-xs text-muted-foreground">Avg Stress</p><p className="text-2xl font-bold">{averages.stress.toFixed(1)}</p></CardContent></Card>
              <Card className="border-primary/20"><CardContent className="p-4"><p className="text-xs text-muted-foreground">Avg Sleep</p><p className="text-2xl font-bold">{averages.sleepHours.toFixed(1)}h</p></CardContent></Card>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Recent Entries</h3>
                {latestEntries.length === 0 ? (
                  <p className="text-muted-foreground text-sm">No entries yet. Save your first daily check-in above.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left border-b">
                          <th className="py-2 pr-3">Date</th>
                          <th className="py-2 pr-3">Energy</th>
                          <th className="py-2 pr-3">Mood</th>
                          <th className="py-2 pr-3">Stress</th>
                          <th className="py-2 pr-3">Sleep</th>
                          <th className="py-2">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {latestEntries.map((item) => (
                          <tr key={item.date} className="border-b last:border-b-0">
                            <td className="py-2 pr-3 font-medium">{item.date}</td>
                            <td className="py-2 pr-3">{item.energy}</td>
                            <td className="py-2 pr-3">{item.mood}</td>
                            <td className="py-2 pr-3">{item.stress}</td>
                            <td className="py-2 pr-3">{item.sleepHours}h</td>
                            <td className="py-2">{item.notes || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Opt-in Form */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Symptom Tracker</h2>
              <p className="text-muted-foreground">
                Enter your email and I'll send it straight to your inbox. Plus weekly tips on 
                managing thyroid symptoms naturally.
              </p>
            </div>

            <BeehiivSubscribe 
              variant="card"
              title="Download Your Free Symptom Tracker"
              description="Get instant access + weekly wellness tips"
              buttonText="Send Me The Tracker"
            />

            <div className="mt-6 text-center space-y-2">
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Instant Access
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Printable PDF
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  No Spam Ever
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
