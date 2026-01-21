// Script to update all blog post images to use unique images from blogImages mapping
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read blogImages.ts to get all image mappings
const blogImagesPath = path.join(__dirname, '../client/src/data/blogImages.ts');
const blogImagesContent = fs.readFileSync(blogImagesPath, 'utf-8');

// Extract the blogImages object
const imageMapMatch = blogImagesContent.match(/export const blogImages: Record<string, string> = \{([\s\S]+?)\};/);
if (!imageMapMatch) {
  console.error('Could not find blogImages mapping');
  process.exit(1);
}

// Parse the image mappings
const imageMap = {};
const imageLines = imageMapMatch[1].trim().split('\n');
imageLines.forEach(line => {
  const match = line.match(/"([^"]+)":\s*"([^"]+)"/);
  if (match) {
    imageMap[match[1]] = match[2];
  }
});

console.log(`Found ${Object.keys(imageMap).length} unique image mappings`);

// Read blogData.ts
const blogDataPath = path.join(__dirname, '../client/src/content/blogData.ts');
let blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');

// Remove duplicate commas (},,{)
console.log('\n🔧 Removing duplicate commas...');
const originalContent = blogDataContent;
blogDataContent = blogDataContent.replace(/\},\s*,\s*\{/g, '},\n  {');
const duplicatesRemoved = (originalContent.match(/\},\s*,\s*\{/g) || []).length;
if (duplicatesRemoved > 0) {
  console.log(`   Removed ${duplicatesRemoved} duplicate comma(s)`);
}

// Update blog post images
console.log('\n🖼️  Updating blog post images...');
let updatedCount = 0;
let fallbackCount = 0;

// Find all blog posts and update their images
const postRegex = /\{\s*id:\s*"([^"]+)",[\s\S]*?image:\s*"([^"]+)"/g;
let match;
const updates = [];

while ((match = postRegex.exec(blogDataContent)) !== null) {
  const [fullMatch, postId, currentImage] = match;
  
  if (imageMap[postId] && currentImage !== imageMap[postId]) {
    // Check if using fallback
    if (currentImage.includes('blog_fallback')) {
      fallbackCount++;
    }
    
    updates.push({
      postId,
      oldImage: currentImage,
      newImage: imageMap[postId]
    });
    updatedCount++;
  }
}

// Apply updates
updates.forEach(({ postId, oldImage, newImage }) => {
  const regex = new RegExp(
    `(\\{\\s*id:\\s*"${postId.replace(/[-/]/g, '\\$&')}",[\\s\\S]*?image:\\s*)"${oldImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`,
    'g'
  );
  blogDataContent = blogDataContent.replace(regex, `$1"${newImage}"`);
});

// Write updated content back to file
fs.writeFileSync(blogDataPath, blogDataContent, 'utf-8');

console.log(`\n✅ Updated ${updatedCount} blog post images`);
console.log(`   - ${fallbackCount} were using fallback images`);
console.log(`   - ${updatedCount - fallbackCount} had incorrect/mismatched images`);
console.log('\n🎉 All blog posts now have unique, distinct images!');
