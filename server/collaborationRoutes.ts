import type { Express, Request, Response } from "express";
import { randomUUID } from "node:crypto";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";
import { createCollaborationSubmission } from "./db";
import { ENV } from "./_core/env";
import { storagePut } from "./storage";

const serverDir = path.dirname(fileURLToPath(import.meta.url));

const collaborationSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(320),
  collaborationType: z.string().trim().min(2, "Collaboration type is required").max(100),
  expertise: z.string().trim().min(2, "Expertise is required").max(5000),
  website: z.string().trim().max(500).optional().default(""),
  proposedTitle: z.string().trim().min(2, "A title or idea is required").max(255),
  audience: z.string().trim().min(10, "Tell us why this fits the audience").max(5000),
  links: z.string().trim().max(2000).optional().default(""),
  pitch: z.string().trim().min(10, "A brief pitch is required").max(10000),
  sourcePage: z.string().trim().max(500).optional().default("/guest-contributors"),
});

type CollaborationSubmissionInput = z.infer<typeof collaborationSubmissionSchema>;

const newsletterSignupSchema = z.object({
  email: z.string().trim().email("A valid email is required").max(320),
  source: z.string().trim().max(120).optional().default("generic"),
  magnetType: z.string().trim().max(120).optional().default("none"),
});

type StoredSubmissionRecord = CollaborationSubmissionInput & {
  id: string;
  createdAt: string;
  status: "new";
  referrer: string;
  userAgent: string;
};

async function persistLocalBackup(record: StoredSubmissionRecord): Promise<string> {
  const dataDir = path.join(serverDir, "data");
  const filePath = path.join(dataDir, "collaboration-submissions.jsonl");

  await mkdir(dataDir, { recursive: true });
  await appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8");

  return filePath;
}

async function persistCloudBackup(record: StoredSubmissionRecord): Promise<string | null> {
  if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
    return null;
  }

  const key = `askdogood/collaboration-submissions/${record.createdAt.slice(0, 10)}/${record.id}.json`;
  const { url } = await storagePut(key, JSON.stringify(record, null, 2), "application/json");
  return url;
}

export function registerCollaborationRoutes(app: Express) {
  app.post("/api/newsletter-signups", async (req: Request, res: Response) => {
    const parsed = newsletterSignupSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: "Please enter a valid email.",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const payload = parsed.data;
    const record = {
      id: randomUUID(),
      email: payload.email,
      source: payload.source,
      magnetType: payload.magnetType,
      createdAt: new Date().toISOString(),
      status: "new",
      referrer: req.get("referer") ?? "",
      userAgent: req.get("user-agent") ?? "",
      ownerInbox: "newsletter@askdogood.com",
    };

    try {
      const dataDir = path.join(serverDir, "data");
      const filePath = path.join(dataDir, "newsletter-signups.jsonl");
      await mkdir(dataDir, { recursive: true });
      await appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8");

      res.status(201).json({
        success: true,
        message: "Signup received. Please check your email for confirmation.",
      });
    } catch (error) {
      console.error("[Newsletter] Signup persistence failed:", error);
      res.status(500).json({
        success: false,
        message: "We couldn't process signup right now. Please try again.",
      });
    }
  });

  app.post("/api/collaboration-submissions", async (req: Request, res: Response) => {
    const parsed = collaborationSubmissionSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: "Please complete the form and try again.",
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const payload = parsed.data;
    const record: StoredSubmissionRecord = {
      ...payload,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      status: "new",
      referrer: req.get("referer") ?? "",
      userAgent: req.get("user-agent") ?? "",
    };

    const savedTo: string[] = [];

    try {
      const dbResult = await createCollaborationSubmission({
        name: payload.name,
        email: payload.email,
        collaborationType: payload.collaborationType,
        expertise: payload.expertise,
        website: payload.website || null,
        proposedTitle: payload.proposedTitle,
        audience: payload.audience,
        links: payload.links || null,
        pitch: payload.pitch,
        sourcePage: payload.sourcePage || record.referrer || null,
        status: "new",
      });

      if (dbResult.id) {
        savedTo.push("database");
      }

      try {
        await persistLocalBackup(record);
        savedTo.push("server-backup");
      } catch (error) {
        console.warn("[Collaboration] Local backup failed:", error);
      }

      try {
        const cloudUrl = await persistCloudBackup(record);
        if (cloudUrl) {
          savedTo.push("cloud-backup");
        }
      } catch (error) {
        console.warn("[Collaboration] Cloud backup failed:", error);
      }

      if (savedTo.length === 0) {
        throw new Error("No persistence target was available for the submission");
      }

      res.status(201).json({
        success: true,
        message: "Thanks! Your collaboration idea is in. We will follow up by email.",
        submissionId: record.id,
        savedTo,
      });
    } catch (error) {
      console.error("[Collaboration] Submission failed:", error);
      res.status(500).json({
        success: false,
        message: "We couldn't save your submission just yet. Please email askdogood@gmail.com and we will take it from there.",
      });
    }
  });
}
