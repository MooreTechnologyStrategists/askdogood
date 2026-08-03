import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type GenerateResponse = {
  success: boolean;
  image?: {
    id: string;
    url: string;
    key: string;
    mimeType: string;
  };
  seo?: {
    filenameStem: string;
    imageTitle: string;
    altText: string;
    caption: string;
    metaDescription: string;
    focusKeyword: string;
    jsonLd: Record<string, unknown>;
  };
  canva?: {
    format: string;
    dimensions: string;
    title: string;
    subtitle: string;
    overlayText: string;
    safeMargin: string;
  } | null;
  usage?: {
    html: string;
    openGraph: Record<string, string>;
    twitter: Record<string, string>;
  };
  error?: string;
  message?: string;
};

const defaultPrompt =
  "Create an uplifting editorial wellness scene with a confident Black woman in a calm kitchen setting, fresh produce visible, warm natural morning light, and subtle depth for hero-page crop flexibility.";

export default function ImageStudio() {
  const [intent, setIntent] = useState("blog-hero");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [title, setTitle] = useState("AskDoGood Wellness Hero");
  const [pagePath, setPagePath] = useState("/blog");
  const [targetKeyword, setTargetKeyword] = useState("thyroid wellness support");
  const [styleDirection, setStyleDirection] = useState(
    "Documentary editorial, warm earthy colors, realistic skin tones, hopeful and practical mood"
  );
  const [tags, setTags] = useState("wellness, thyroid, anti-inflammatory, lifestyle");
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [includeCanvaBrief, setIncludeCanvaBrief] = useState(true);

  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<GenerateResponse | null>(null);

  const tagsArray = useMemo(
    () =>
      tags
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
        .slice(0, 12),
    [tags]
  );

  async function handleGenerate() {
    setIsGenerating(true);
    setResult(null);

    try {
      const response = await fetch("/api/image-automation/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          intent,
          prompt,
          title,
          pagePath,
          targetKeyword,
          styleDirection,
          aspectRatio,
          tags: tagsArray,
          includeCanvaBrief,
        }),
      });

      const data = (await response.json()) as GenerateResponse;
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        error: "Network request failed",
        message: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container max-w-6xl space-y-8">
        <div className="space-y-3">
          <Badge className="bg-primary/10 text-primary border-primary/20">Image Automation Studio</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Generate Brand Images With SEO Metadata</h1>
          <p className="text-muted-foreground max-w-3xl">
            This studio generates visuals for AskDoGood and automatically returns SEO fields, social tags,
            and Canva-ready production notes.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Generation Request</CardTitle>
            <CardDescription>
              The API enforces SEO metadata generation for every image request.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1 text-sm">
                <span className="font-medium">Intent</span>
                <select
                  className="w-full rounded-md border bg-background px-3 py-2"
                  value={intent}
                  onChange={(e) => setIntent(e.currentTarget.value)}
                >
                  <option value="blog-hero">Blog Hero</option>
                  <option value="homepage-banner">Homepage Banner</option>
                  <option value="product-cover">Product Cover</option>
                  <option value="email-graphic">Email Graphic</option>
                  <option value="social-square">Social Square</option>
                  <option value="custom">Custom</option>
                </select>
              </label>

              <label className="space-y-1 text-sm">
                <span className="font-medium">Aspect Ratio</span>
                <select
                  className="w-full rounded-md border bg-background px-3 py-2"
                  value={aspectRatio}
                  onChange={(e) => setAspectRatio(e.currentTarget.value)}
                >
                  <option value="16:9">16:9</option>
                  <option value="3:2">3:2</option>
                  <option value="4:3">4:3</option>
                  <option value="1:1">1:1</option>
                  <option value="9:16">9:16</option>
                </select>
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1 text-sm">
                <span className="font-medium">Page Title</span>
                <input
                  className="w-full rounded-md border bg-background px-3 py-2"
                  value={title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
                />
              </label>

              <label className="space-y-1 text-sm">
                <span className="font-medium">Page Path</span>
                <input
                  className="w-full rounded-md border bg-background px-3 py-2"
                  value={pagePath}
                  onChange={(e) => setPagePath(e.currentTarget.value)}
                  placeholder="/blog"
                />
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1 text-sm">
                <span className="font-medium">Target Keyword</span>
                <input
                  className="w-full rounded-md border bg-background px-3 py-2"
                  value={targetKeyword}
                  onChange={(e) => setTargetKeyword(e.currentTarget.value)}
                />
              </label>

              <label className="space-y-1 text-sm">
                <span className="font-medium">Tags (comma-separated)</span>
                <input
                  className="w-full rounded-md border bg-background px-3 py-2"
                  value={tags}
                  onChange={(e) => setTags(e.currentTarget.value)}
                />
              </label>
            </div>

            <label className="space-y-1 text-sm block">
              <span className="font-medium">Style Direction</span>
              <input
                className="w-full rounded-md border bg-background px-3 py-2"
                value={styleDirection}
                onChange={(e) => setStyleDirection(e.currentTarget.value)}
              />
            </label>

            <label className="space-y-1 text-sm block">
              <span className="font-medium">Prompt</span>
              <textarea
                className="w-full min-h-40 rounded-md border bg-background px-3 py-2"
                value={prompt}
                onChange={(e) => setPrompt(e.currentTarget.value)}
              />
            </label>

            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={includeCanvaBrief}
                onChange={(e) => setIncludeCanvaBrief(e.currentTarget.checked)}
              />
              Include Canva brief output
            </label>

            <Button onClick={handleGenerate} disabled={isGenerating} className="rounded-3xl px-6">
              {isGenerating ? "Generating..." : "Generate SEO-Optimized Image"}
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader>
              <CardTitle>Result</CardTitle>
              <CardDescription>
                {result.success
                  ? "Image generated with SEO metadata and integration snippets."
                  : "Generation failed. Review the error below."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!result.success && (
                <p className="text-sm text-destructive">
                  {result.error || "Failed to generate image"}
                  {result.message ? `: ${result.message}` : ""}
                </p>
              )}

              {result.success && result.image && (
                <div className="space-y-4">
                  <img
                    src={result.image.url}
                    alt={result.seo?.altText || "Generated AskDoGood image"}
                    className="w-full max-h-[500px] object-cover rounded-xl border"
                  />

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="rounded-lg border p-4 space-y-2">
                      <p><strong>Image Key:</strong> {result.image.key}</p>
                      <p><strong>Mime Type:</strong> {result.image.mimeType}</p>
                      <p><strong>Focus Keyword:</strong> {result.seo?.focusKeyword}</p>
                    </div>
                    <div className="rounded-lg border p-4 space-y-2">
                      <p><strong>Title:</strong> {result.seo?.imageTitle}</p>
                      <p><strong>Alt Text:</strong> {result.seo?.altText}</p>
                      <p><strong>Meta Description:</strong> {result.seo?.metaDescription}</p>
                    </div>
                  </div>

                  {result.canva && (
                    <div className="rounded-lg border p-4 text-sm space-y-2">
                      <p className="font-semibold">Canva Brief</p>
                      <p><strong>Format:</strong> {result.canva.format}</p>
                      <p><strong>Dimensions:</strong> {result.canva.dimensions}</p>
                      <p><strong>Overlay Text:</strong> {result.canva.overlayText}</p>
                    </div>
                  )}

                  {result.usage && (
                    <div className="rounded-lg border p-4 space-y-3 text-sm">
                      <p className="font-semibold">Usage Snippets</p>
                      <textarea readOnly className="w-full min-h-20 rounded-md border bg-background px-3 py-2" value={result.usage.html} />
                      <textarea
                        readOnly
                        className="w-full min-h-20 rounded-md border bg-background px-3 py-2"
                        value={JSON.stringify({ openGraph: result.usage.openGraph, twitter: result.usage.twitter }, null, 2)}
                      />
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
