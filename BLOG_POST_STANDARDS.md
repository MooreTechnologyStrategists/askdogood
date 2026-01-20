# AskDoGood Blog Post Standards

## ✅ Standardized Structure

All blog posts now follow this consistent pattern:

### Required Fields
```typescript
{
  id: string;              // URL-friendly slug (lowercase, hyphens)
  title: string;           // Clear, descriptive title
  excerpt: string;         // Brief summary (1-2 sentences)
  content: string;         // Full markdown content
  date: string;            // Format: "YYYY-MM-DD"
  readTime: string;        // Format: "X min read"
  image: string;           // Path: "/assets/img/blog/assigned/{slug}.webp"
  tags: string[];          // Relevant categories
  featured?: boolean;      // Optional: highlight on homepage
  author?: string;         // Optional: author name
  authorImage?: string;    // Optional: author photo path
}
```

### Image Standards

**All images must follow this pattern:**

1. **Location**: `client/public/assets/img/blog/assigned/`
2. **Format**: WebP (`.webp`)
3. **Naming**: Match the blog post ID exactly
4. **Path in code**: `/assets/img/blog/assigned/{post-id}.webp`
5. **Fallback**: `/assets/img/blog/_fallback/blog.webp`

### Image Requirements
- **Dimensions**: 1024x1024 or 1536x1024 (wide preferred)
- **Quality**: 85% WebP compression
- **Style**: Clean, modern, wellness-themed
- **Rules**: NO text, NO logos, NO watermarks
- **Theme**: Holistic wellness, calm, professional, soft natural light

## 📋 Adding a New Blog Post

### Step 1: Prepare Your Content
- Write your blog post content in Markdown
- Create a clear, SEO-friendly title
- Write a compelling 1-2 sentence excerpt
- Choose 2-5 relevant tags

### Step 2: Create the Image
Use the image generation script:
```bash
python tools/generate_blog_images_fast.py
```

Or manually create/place image at:
```
client/public/assets/img/blog/assigned/your-post-slug.webp
```

### Step 3: Add to blogData.ts
Add your post object to the `blogPosts` array in `client/src/content/blogData.ts`:

```typescript
{
  id: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Brief description...",
  content: `Your full markdown content here...`,
  date: "2026-01-19",
  readTime: "5 min read",
  image: "/assets/img/blog/assigned/your-post-slug.webp",
  tags: ["Tag1", "Tag2", "Tag3"],
  featured: false,
}
```

### Step 4: Update Image Mapping
Add the mapping to `client/src/data/blogImages.ts`:

```typescript
"your-post-slug": "/assets/img/blog/assigned/your-post-slug.webp",
```

### Step 5: Validate
Run the cleanup script to ensure everything is formatted correctly:
```bash
python cleanup_blog_posts.py
```

## 🎨 Content Formatting Guidelines

### Markdown Best Practices
- Use `##` for main sections
- Use `**bold**` for emphasis
- Use `*italics*` for scientific names
- Use bulleted or numbered lists for clarity
- Include line breaks between sections
- Keep paragraphs concise (3-5 sentences)

### Writing Style
- Professional yet approachable tone
- Focus on wellness, health, and empowerment
- Inclusive language
- Evidence-based when discussing health topics
- Personal stories when relevant
- Action-oriented conclusions

### Tags Guidelines
Choose from these categories:
- **Wellness**: Mental Health, Physical Health, Nutrition
- **Lifestyle**: Relationships, Career, Personal Development
- **Community**: Black Women, Black Men, Family, Culture
- **Health**: Thyroid Health, Chronic Illness, Superfoods
- **Technology**: Cloud, Azure, IT Career
- **Equity**: Social Justice, Health Equity, Education

## 🔧 Maintenance Scripts

### Cleanup Script
Fixes missing images and standardizes formatting:
```bash
python cleanup_blog_posts.py
```

### Image Generation
Generate images for all blog posts:
```bash
python tools/generate_blog_images_fast.py
```

### Create Fallback Image
Generate the fallback image:
```bash
python tools/create_fallback_image.py
```

## 📊 Current Status

✅ **105 Total Blog Posts**
✅ **All images standardized** (using `/assets/img/blog/assigned/`)
✅ **All missing images fixed** (4 posts updated)
✅ **Consistent formatting** across all posts
✅ **Professional structure** maintained

## 🎯 Quality Checklist

Before publishing a new post, verify:
- [ ] Post ID is lowercase with hyphens
- [ ] Image exists at correct path
- [ ] Image is WebP format
- [ ] Date format is YYYY-MM-DD
- [ ] Tags are relevant and from standard list
- [ ] Excerpt is compelling and brief
- [ ] Content uses proper Markdown
- [ ] No spelling/grammar errors
- [ ] Read time is accurate
- [ ] Post ID matches image filename

---

**Last Updated**: January 19, 2026
**Maintained By**: AskDoGood Development Team
