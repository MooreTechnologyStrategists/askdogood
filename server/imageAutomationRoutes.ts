import type { Express, Request, Response } from "express";
import { randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";
import { ENV } from "./_core/env";
import { generateImage } from "./_core/imageGeneration";
import { invokeLLM } from "./_core/llm";
import { sdk } from "./_core/sdk";
import { storagePut } from "./storage";

const serverDir = path.dirname(fileURLToPath(import.meta.url));

const aspectRatioToDimensions: Record<string, string> = {
  "1:1": "1024x1024",
  "3:2": "1536x1024",
  "4:3": "1365x1024",
  "16:9": "1792x1024",
  "9:16": "1024x1792",
};

const imageRequestSchema = z.object({
  intent: z
    .enum([
      "blog-hero",
      "homepage-banner",
      "product-cover",
      "email-graphic",
      "social-square",
      "custom",
    ])
    .default("custom"),
  prompt: z.string().trim().min(20, "Prompt must be at least 20 characters").max(2500),
  title: z.string().trim().max(120).optional().default(""),
  pagePath: z.string().trim().max(300).optional().default(""),
  targetKeyword: z.string().trim().max(120).optional().default(""),
  styleDirection: z.string().trim().max(300).optional().default(""),
  aspectRatio: z.enum(["1:1", "3:2", "4:3", "16:9", "9:16"]).optional().default("16:9"),
  tags: z.array(z.string().trim().min(1).max(40)).max(12).optional().default([]),
  includeCanvaBrief: z.boolean().optional().default(true),
});

type ImageRequestInput = z.infer<typeof imageRequestSchema>;

const seoSchema = {
  name: "image_seo",
  strict: true,
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      filenameStem: { type: "string", minLength: 8, maxLength: 90 },
      imageTitle: { type: "string", minLength: 20, maxLength: 70 },
      altText: { type: "string", minLength: 50, maxLength: 125 },
      caption: { type: "string", minLength: 40, maxLength: 180 },
      metaDescription: { type: "string", minLength: 80, maxLength: 160 },
      focusKeyword: { type: "string", minLength: 3, maxLength: 80 },
      promptEnhancer: { type: "string", minLength: 40, maxLength: 600 },
    },
    required: [
      "filenameStem",
      "imageTitle",
      "altText",
      "caption",
      "metaDescription",
      "focusKeyword",
      "promptEnhancer",
    ],
  },
} as const;

type SeoMetadata = {
  filenameStem: string;
  imageTitle: string;
  altText: string;
  caption: string;
  metaDescription: string;
  focusKeyword: string;
  promptEnhancer: string;
};

type StoredImageRecord = {
  id: string;
  createdAt: string;
  generatedByUserId: number;
  intent: ImageRequestInput["intent"];
  pagePath: string;
  title: string;
  targetKeyword: string;
  styleDirection: string;
  aspectRatio: string;
  tags: string[];
  imageUrl: string;
  imageKey: string;
  imageMimeType: string;
  seo: Omit<SeoMetadata, "promptEnhancer">;
  canvaBrief: {
    format: string;
    dimensions: string;
    title: string;
    subtitle: string;
    overlayText: string;
    safeMargin: string;
  };
};

function sanitizeForSlug(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function clampText(text: string, maxLength: number): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return normalized.slice(0, maxLength - 1).trimEnd();
}

function fallbackSeo(input: ImageRequestInput): SeoMetadata {
  const basePhrase =
    input.targetKeyword ||
    input.title ||
    input.prompt.split(/[.!?]/)[0] ||
    "askdogood wellness image";

  const slugBase = sanitizeForSlug(basePhrase) || "askdogood-image";
  const filenameStem = clampText(slugBase, 75);

  const focusKeyword = clampText(input.targetKeyword || basePhrase, 70);
  const imageTitle = clampText(`AskDoGood ${focusKeyword} visual`, 70);
  const altText = clampText(
    `AskDoGood branded illustration for ${focusKeyword}, designed for ${input.intent.replace("-", " ")} with clean composition and readable contrast.`,
    125
  );
  const caption = clampText(
    `AskDoGood branded image supporting ${focusKeyword} with practical, grounded wellness storytelling.`,
    180
  );
  const metaDescription = clampText(
    `SEO-friendly AskDoGood image for ${focusKeyword}, optimized with descriptive alt text, metadata, and reusable page-ready creative direction.`,
    160
  );

  return {
    filenameStem,
    imageTitle,
    altText,
    caption,
    metaDescription,
    focusKeyword,
    promptEnhancer:
      "Natural daylight, warm earth tones, realistic textures, intentional composition, no text overlays, no logos, high detail, modern editorial aesthetic.",
  };
}

async function buildSeoMetadata(input: ImageRequestInput): Promise<SeoMetadata> {
  if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
    return fallbackSeo(input);
  }

  const intentLabel = input.intent.replace(/-/g, " ");
  const userPrompt = `\nIntent: ${intentLabel}\nPage path: ${input.pagePath || "n/a"}\nTitle: ${input.title || "n/a"}\nTarget keyword: ${input.targetKeyword || "n/a"}\nStyle direction: ${input.styleDirection || "n/a"}\nAspect ratio: ${input.aspectRatio}\nTags: ${input.tags.join(", ") || "n/a"}\nPrompt: ${input.prompt}`;

  try {
    const result = await invokeLLM({
      messages: [
        {
          role: "system",
          content:
            "You create SEO metadata for website images. Keep language specific, human, and compliant with search best practices. Do not use quotes in filename stem.",
        },
        {
          role: "user",
          content:
            `Generate SEO metadata for an AskDoGood image. Return compact JSON only.${userPrompt}`,
        },
      ],
      outputSchema: seoSchema,
    });

    const content = result.choices?.[0]?.message?.content;
    const rawText = Array.isArray(content)
      ? content
          .map((part) => (part.type === "text" ? part.text : ""))
          .join("\n")
      : content || "";

    const parsed = JSON.parse(rawText) as SeoMetadata;
    const clean: SeoMetadata = {
      filenameStem: sanitizeForSlug(parsed.filenameStem).slice(0, 75) || fallbackSeo(input).filenameStem,
      imageTitle: clampText(parsed.imageTitle, 70),
      altText: clampText(parsed.altText, 125),
      caption: clampText(parsed.caption, 180),
      metaDescription: clampText(parsed.metaDescription, 160),
      focusKeyword: clampText(parsed.focusKeyword, 80),
      promptEnhancer: clampText(parsed.promptEnhancer, 600),
    };

    if (!clean.filenameStem || clean.filenameStem.length < 8) {
      return fallbackSeo(input);
    }

    return clean;
  } catch {
    return fallbackSeo(input);
  }
}

function buildBrandPrompt(input: ImageRequestInput, seo: SeoMetadata): string {
  const style = input.styleDirection
    ? `Style direction: ${input.styleDirection}.`
    : "Style direction: grounded, modern, editorial wellness visuals with warmth and realism.";

  return [
    "Create a high-quality brand image for AskDoGood.",
    "Visual identity: warm earth tones, natural textures, confident and practical mood, inclusive representation, soft daylight.",
    "Composition: subject clarity, generous negative space for responsive crops, no text overlays, no watermarks, no logos.",
    `Aspect ratio target: ${input.aspectRatio}.`,
    style,
    `SEO focus keyword: ${seo.focusKeyword}.`,
    `Primary request: ${input.prompt}`,
    `Prompt enhancer: ${seo.promptEnhancer}`,
  ].join(" ");
}

function inferFormat(intent: ImageRequestInput["intent"], aspectRatio: string): string {
  if (intent === "social-square") return "Instagram post";
  if (intent === "email-graphic") return "Email header";
  if (intent === "product-cover") return "Product cover";
  if (aspectRatio === "16:9") return "Website hero";
  return "Website visual";
}

function buildCanvaBrief(input: ImageRequestInput, seo: SeoMetadata) {
  const dimensions = aspectRatioToDimensions[input.aspectRatio] || "1792x1024";
  return {
    format: inferFormat(input.intent, input.aspectRatio),
    dimensions,
    title: seo.imageTitle,
    subtitle: seo.focusKeyword,
    overlayText: clampText(seo.caption, 90),
    safeMargin: "Keep key subject and text-safe area within inner 80% of canvas",
  };
}

async function persistImageRecord(record: StoredImageRecord): Promise<{ localPath: string; cloudUrl: string | null }> {
  const dataDir = path.join(serverDir, "data");
  const localFilePath = path.join(dataDir, "generated-image-seo-manifest.jsonl");

  await mkdir(dataDir, { recursive: true });
  await appendFile(localFilePath, `${JSON.stringify(record)}\n`, "utf8");

  let cloudUrl: string | null = null;
  if (ENV.forgeApiUrl && ENV.forgeApiKey) {
    const datePrefix = record.createdAt.slice(0, 10);
    const { url } = await storagePut(
      `askdogood/image-seo-manifest/${datePrefix}/${record.id}.json`,
      JSON.stringify(record, null, 2),
      "application/json"
    );
    cloudUrl = url;
  }

  return { localPath: localFilePath, cloudUrl };
}

async function authenticate(req: Request, res: Response) {
  try {
    return await sdk.authenticateRequest(req);
  } catch {
    res.status(401).json({ success: false, error: "Unauthorized" });
    return null;
  }
}

export function registerImageAutomationRoutes(app: Express) {
  app.post("/api/image-automation/generate", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const parsed = imageRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        success: false,
        error: "Invalid image generation payload",
        details: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const input = parsed.data;
    const now = new Date();
    const id = randomUUID();

    try {
      const seo = await buildSeoMetadata(input);
      const storageKey = [
        "askdogood/images/generated",
        `${now.getUTCFullYear()}`,
        `${String(now.getUTCMonth() + 1).padStart(2, "0")}`,
        `${seo.filenameStem}-${now.getTime()}.png`,
      ].join("/");

      const generationPrompt = buildBrandPrompt(input, seo);
      const generated = await generateImage({
        prompt: generationPrompt,
        storageKey,
      });

      if (!generated.url) {
        throw new Error("Image generation returned no URL");
      }

      const canvaBrief = buildCanvaBrief(input, seo);
      const createdAt = now.toISOString();

      const record: StoredImageRecord = {
        id,
        createdAt,
        generatedByUserId: user.id,
        intent: input.intent,
        pagePath: input.pagePath,
        title: input.title,
        targetKeyword: input.targetKeyword,
        styleDirection: input.styleDirection,
        aspectRatio: input.aspectRatio,
        tags: input.tags,
        imageUrl: generated.url,
        imageKey: generated.key,
        imageMimeType: generated.mimeType,
        seo: {
          filenameStem: seo.filenameStem,
          imageTitle: seo.imageTitle,
          altText: seo.altText,
          caption: seo.caption,
          metaDescription: seo.metaDescription,
          focusKeyword: seo.focusKeyword,
        },
        canvaBrief,
      };

      const persistence = await persistImageRecord(record);

      res.status(201).json({
        success: true,
        image: {
          id,
          url: generated.url,
          key: generated.key,
          mimeType: generated.mimeType,
        },
        seo: {
          ...record.seo,
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            contentUrl: generated.url,
            description: record.seo.altText,
            caption: record.seo.caption,
            name: record.seo.imageTitle,
            keywords: [record.seo.focusKeyword, ...input.tags].filter(Boolean),
          },
        },
        canva: input.includeCanvaBrief ? canvaBrief : null,
        usage: {
          html: `<img src=\"${generated.url}\" alt=\"${record.seo.altText}\" loading=\"lazy\" decoding=\"async\" />`,
          openGraph: {
            "og:image": generated.url,
            "og:image:alt": record.seo.altText,
          },
          twitter: {
            "twitter:image": generated.url,
            "twitter:image:alt": record.seo.altText,
          },
        },
        persisted: {
          localManifestPath: persistence.localPath,
          cloudManifestUrl: persistence.cloudUrl,
        },
      });
    } catch (error) {
      console.error("[ImageAutomation] Generate failed:", error);
      res.status(500).json({
        success: false,
        error: "Image generation failed",
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  });

  app.get("/api/image-automation/manifest", async (req: Request, res: Response) => {
    const user = await authenticate(req, res);
    if (!user) return;

    const dataDir = path.join(serverDir, "data");
    const localFilePath = path.join(dataDir, "generated-image-seo-manifest.jsonl");

    res.json({
      success: true,
      message:
        "Manifest is stored as JSONL for downstream SEO indexing and CMS ingestion.",
      localManifestPath: localFilePath,
      note: "Read the JSONL file or cloud manifest objects to ingest records.",
    });
  });
}
