import fs from "fs";
import path from "path";
import { safeBlogPosts } from "../client/src/content/blogData";

const outPath = path.resolve(__dirname, "./blog_posts_export.json");
fs.writeFileSync(outPath, JSON.stringify(safeBlogPosts, null, 2), "utf-8");

console.log("✅ Exported posts:", outPath);
console.log("Posts count:", safeBlogPosts.length);
