import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust if your path differs
const blogDataPath = path.resolve(__dirname, "../client/src/content/blogData");

// IMPORTANT:
// This assumes blogData exports `safeBlogPosts` exactly like your Blog.tsx imports.
const mod = await import(blogDataPath);

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
