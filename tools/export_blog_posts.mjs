import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Point to your blogData file (no extension needed if it's blogData.ts)
const blogDataFsPath = path.resolve(__dirname, "../client/src/content/blogData");

// Convert Windows absolute path => file:// URL
const blogDataUrl = pathToFileURL(blogDataFsPath).href;

const mod = await import(blogDataUrl);

const posts = mod.safeBlogPosts ?? mod.blogPosts ?? mod.default ?? null;

if (!posts) {
  console.error(
    "Could not find safeBlogPosts/blogPosts/default export in blogData. Exports are:",
    Object.keys(mod)
  );
  process.exit(1);
}

const outPath = path.resolve(__dirname, "./blog_posts_export.json");
fs.writeFileSync(outPath, JSON.stringify(posts, null, 2), "utf-8");

console.log("✅ Exported posts to:", outPath);
console.log("Posts count:", posts.length);
