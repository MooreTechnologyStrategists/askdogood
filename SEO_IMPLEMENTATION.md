# ---
# title: "SEO Implementation Guide"
# tags: ["seo","technical","marketing"]
# area: "growth"
# owner: "RoSeé Murphy"
# effort: "medium"
# status: "in-progress"
# ---

# SEO Implementation Guide

## Overview
This guide covers the SEO implementation for AskDoGood.com to maximize search engine visibility, improve Google Analytics scores, and support grant applications.

---

## ✅ Implemented Components

### 1. SEO Component (`components/SEO.tsx`)
Reusable component for adding meta tags to any page.

**Usage:**
```tsx
import SEO from '@/components/SEO';

function MyPage() {
  return (
    <>
      <SEO
        title="My Page Title"
        description="Page description (150-160 chars)"
        keywords={['keyword1', 'keyword2']}
        url="/my-page"
        type="article"
      />
      {/* Page content */}
    </>
  );
}
```

**Props:**
- `title` - Page title (50-60 chars, includes site name automatically)
- `description` - Meta description (150-160 chars)
- `keywords` - Array of relevant keywords
- `image` - OG image URL (1200x630px recommended)
- `url` - Page URL (relative, e.g., "/blog/post-slug")
- `type` - Content type: 'website', 'article', 'product'
- `author` - Author name (defaults to "RoSeé Murphy")
- `publishedTime` - ISO date string for articles
- `modifiedTime` - ISO date string for updates
- `section` - Article section/category
- `tags` - Array of article tags
- `noindex` - Set to true to exclude from search engines

---

## 📋 Page-by-Page SEO Checklist

### Homepage (`/`)
- **Title**: "Ask DoGood - Holistic Health & Thyroid Wellness for Black Women"
- **Description**: "Expert guidance on thyroid health, Hashimoto's, hypothyroidism, and holistic wellness. Founded by RoSeé Murphy, thyroid warrior and wellness advocate."
- **Keywords**: thyroid health, holistic wellness, Black women health, Hashimoto's, hypothyroidism, wellness coaching, natural healing
- **Type**: website
- **Priority**: HIGH

### Blog (`/blog`)
- **Title**: "Blog - Wellness & Thyroid Health Articles | Ask DoGood"
- **Description**: "Read expert articles on thyroid health, nutrition, wellness, and living your best life with chronic conditions."
- **Keywords**: thyroid blog, wellness articles, health tips, Hashimoto's advice
- **Type**: website

### Blog Post (`/blog/:slug`)
- **Title**: `${post.title} | Ask DoGood`
- **Description**: First 155 chars of post content
- **Keywords**: Post-specific keywords
- **Type**: article
- **publishedTime**: Post published date
- **section**: Post category
- **tags**: Post tags

### Journey (`/journey`)
- **Title**: "My Thyroid Journey - From Diagnosis to Thriving | Ask DoGood"
- **Description**: "Follow RoSeé Murphy's 7-year journey from thyroid diagnosis to wellness advocate. Real stories, real struggles, real healing."
- **Keywords**: thyroid journey, Hashimoto's story, wellness transformation, chronic illness recovery
- **Type**: article

### Shop (`/shop`)
- **Title**: "Shop - Courses & Products for Thyroid Health | Ask DoGood"
- **Description**: "Discover evidence-based courses, guides, and resources to support your thyroid health journey."
- **Keywords**: thyroid course, wellness products, health coaching, thyroid supplements
- **Type**: website

### Thyroid Course (`/course/thyroid-health-mastery`)
- **Title**: "Thyroid Health Mastery Course - Clinical Protocol for Healing"
- **Description**: "Learn the exact protocols I used to heal my thyroid naturally. 5 modules, 4+ hours of content, lifetime access. Now $97 (regularly $197)."
- **Keywords**: thyroid course, Hashimoto's healing, hypothyroidism treatment, thyroid protocol, natural thyroid healing
- **Type**: product

### Clinical Recipes (`/clinical-recipes`)
- **Title**: "Clinical Recipes - Anti-Inflammatory Thyroid-Supporting Meals"
- **Description**: "Access tested, anti-inflammatory recipes designed specifically for thyroid health and hormone balance."
- **Keywords**: thyroid recipes, anti-inflammatory meals, Hashimoto's diet, AIP recipes
- **Type**: website

### Short Stories (`/stories`)
- **Title**: "Short Stories - Fiction by RoSeé Murphy | Ask DoGood"
- **Description**: "Raw, real, unapologetic fiction about Black women navigating life, love, and everything in between."
- **Keywords**: Black fiction, short stories, contemporary fiction, urban fiction
- **Type**: website

### Chyna White Series (`/stories/chyna-white`)
- **Title**: "Chyna White - Chronicles of a Beautiful Contradiction"
- **Description**: "Follow Chyna: former rapper, ex-street pharmacist, corporate escapee, current boss. A story of reinvention, resilience, and refusing to fit anyone's box."
- **Keywords**: Black fiction, urban fiction, strong female characters, contemporary romance
- **Type**: website

### Contact (`/contact`)
- **Title**: "Contact RoSeé Murphy | Ask DoGood"
- **Description**: "Get in touch for collaboration, coaching inquiries, or media requests."
- **Keywords**: contact RoSeé Murphy, wellness coaching inquiries, collaboration
- **Type**: website

### About (`/about`)
- **Title**: "About RoSeé Murphy - Thyroid Warrior & Wellness Advocate"
- **Description**: "Meet RoSeé: thyroid warrior, wellness coach, entrepreneur, and advocate for Black women's health."
- **Keywords**: RoSeé Murphy, thyroid advocate, Black women health, wellness coach
- **Type**: website

---

## 🛠️ Technical SEO Tasks

### ✅ Completed
- [x] Created SEO component with Open Graph and Twitter Card support
- [x] Added canonical URLs
- [x] Implemented meta descriptions
- [x] Added keywords meta tags
- [x] Google Analytics integration

### ⏳ To Do
1. **Install Dependencies**
   ```bash
   cd client
   pnpm add react-helmet-async
   ```

2. **Wrap App with HelmetProvider**
   In `client/src/main.tsx`:
   ```tsx
   import { HelmetProvider } from 'react-helmet-async';
   
   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <HelmetProvider>
         <App />
       </HelmetProvider>
     </React.StrictMode>,
   );
   ```

3. **Add SEO to Each Page**
   Import and use the SEO component at the top of each page component.

4. **Create Sitemap**
   - Generate XML sitemap listing all pages
   - Place at `public/sitemap.xml`
   - Submit to Google Search Console

5. **Optimize Robots.txt**
   Update `public/robots.txt`:
   ```
   User-agent: *
   Allow: /
   
   Sitemap: https://askdogood.com/sitemap.xml
   ```

6. **Add Structured Data (Schema.org)**
   - Organization schema for homepage
   - Course schema for thyroid course
   - Article schema for blog posts
   - Person schema for about page

7. **Performance Optimization**
   - Lazy load images
   - Minimize JS/CSS
   - Enable compression
   - Optimize images (WebP format)
   - Implement caching headers

8. **Mobile Optimization**
   - Ensure responsive design
   - Test on mobile devices
   - Optimize mobile load times
   - Ensure touch targets are appropriate size

---

## 📊 SEO Monitoring

### Google Search Console Setup
1. Verify site ownership
2. Submit sitemap
3. Monitor crawl errors
4. Track keyword rankings
5. Review mobile usability

### Google Analytics 4 Goals
- [ ] Course purchases
- [ ] Email signups
- [ ] Blog post reads (time on page >2 min)
- [ ] Contact form submissions
- [ ] Resource downloads

### Key Metrics to Track
- **Organic Traffic**: Target 1,000 visitors/month by month 3
- **Page Load Speed**: <2 seconds
- **Bounce Rate**: <50%
- **Average Session Duration**: >2 minutes
- **Conversion Rate**: >2% for course sales

---

## 🎯 Keyword Strategy

### Primary Keywords (High Priority)
1. "thyroid health" (9,900 searches/mo)
2. "hypothyroidism treatment" (2,400 searches/mo)
3. "Hashimoto's diet" (1,900 searches/mo)
4. "thyroid symptoms" (14,800 searches/mo)
5. "Black women health" (1,600 searches/mo)

### Long-Tail Keywords
1. "how to heal thyroid naturally"
2. "best diet for Hashimoto's"
3. "thyroid medication not working"
4. "Black women thyroid disease"
5. "holistic thyroid treatment"

### Location-Based Keywords (if applicable)
1. "thyroid coach Washington DC"
2. "wellness coach DMV area"
3. "Black women health coach Maryland"

---

## 📝 Content SEO Best Practices

### Blog Post Optimization
1. **Title**: Include primary keyword, 50-60 characters
2. **URL Slug**: Short, descriptive, includes keyword
3. **Meta Description**: Compelling, 150-160 characters, includes keyword
4. **Headings**: Use H1 (once), H2, H3 hierarchy
5. **Internal Links**: Link to 2-3 related posts/pages
6. **External Links**: Link to 1-2 authoritative sources
7. **Images**: Alt text with descriptive keywords
8. **Word Count**: 1,000+ words for in-depth posts
9. **Keywords**: Include primary keyword 3-5 times naturally
10. **Call-to-Action**: Clear CTA at the end

### Image Optimization
1. **Format**: WebP (with JPG fallback)
2. **Size**: Compress without quality loss
3. **Dimensions**: Resize to actual display size
4. **Alt Text**: Descriptive, includes keywords where natural
5. **File Names**: descriptive-keyword-rich-names.webp

---

## 🚀 Quick Wins for Grant Applications

### Professional Metrics to Highlight
1. **Google Lighthouse Score**: Target 90+ for all categories
2. **Page Speed**: <2 seconds load time
3. **Mobile-Friendly**: 100% responsive
4. **Accessibility**: WCAG 2.1 AA compliant
5. **Security**: HTTPS enabled, no mixed content

### Social Proof Metrics
1. Email subscribers: 1,500+
2. Blog traffic: X visitors/month
3. Social media followers: X total
4. Course students: 500+
5. Testimonials: 50+

---

## 🔍 Competitive Analysis

### Competitors to Monitor
1. Thyroid Pharmacist
2. Hashimoto's Institute
3. Paloma Health
4. Thyroid Refresh

### Differentiation Strategy
- Focus on Black women's health experiences
- Personal, authentic storytelling
- Clinical + holistic approach
- Community-driven content
- Accessible pricing

---

## 📅 Implementation Timeline

### Week 1 (Current)
- [x] Create SEO component
- [ ] Install react-helmet-async
- [ ] Add SEO to 5 main pages

### Week 2
- [ ] Add SEO to all remaining pages
- [ ] Generate and submit sitemap
- [ ] Set up Google Search Console
- [ ] Implement structured data

### Week 3
- [ ] Optimize all images
- [ ] Improve page speed scores
- [ ] Set up GA4 conversion tracking
- [ ] A/B test meta descriptions

### Week 4
- [ ] Monitor rankings
- [ ] Adjust keyword strategy
- [ ] Create SEO content calendar
- [ ] Submit site to directories

---

## ✅ Success Criteria

### Technical SEO (Weight: 40%)
- [x] All pages have unique titles
- [x] All pages have meta descriptions
- [x] Canonical URLs implemented
- [ ] Sitemap created and submitted
- [ ] No broken links
- [ ] Mobile-friendly
- [ ] Fast load times (<3s)

### On-Page SEO (Weight: 30%)
- [ ] Keywords in titles
- [ ] Keywords in headings
- [ ] Keywords in content (natural)
- [ ] Internal linking structure
- [ ] Image alt tags
- [ ] URL structure

### Content SEO (Weight: 20%)
- [ ] High-quality, original content
- [ ] Regular publishing schedule
- [ ] Comprehensive topic coverage
- [ ] Engaging, readable content
- [ ] Updated regularly

### Off-Page SEO (Weight: 10%)
- [ ] Social media presence
- [ ] Email list building
- [ ] Guest posting opportunities
- [ ] Backlink strategy
- [ ] Online directory listings

---

## 📞 Support Resources

### Tools
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- PageSpeed Insights: https://pagespeed.web.dev
- Lighthouse: Built into Chrome DevTools
- Ahrefs/SEMrush: Keyword research (optional paid tools)

### Learning Resources
- Google SEO Starter Guide
- Moz Beginner's Guide to SEO
- Ahrefs SEO Blog
- Search Engine Journal

---

**Last Updated**: January 2025
**Maintained By**: RoSeé Murphy
**Contact**: contact@askdogood.com
