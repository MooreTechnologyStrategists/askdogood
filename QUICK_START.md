# 🚀 QUICK START GUIDE - Next Actions

## Immediate (Today - Within 1 Hour)

### 1. Install SEO Dependencies
```bash
cd client
pnpm add react-helmet-async
```

### 2. Update main.tsx to Enable SEO Component
Edit `client/src/main.tsx`:
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

### 3. Test New Features
- Visit `/course/thyroid-health-mastery` - Test promo code MLKLEGACY
- Visit `/stories` - Test age verification
- Visit `/stories/chyna-white/episode-1` - Read first episode
- Test all navigation links (should work perfectly)

---

## High Priority (Today - Within 3 Hours)

### 1. Set Up Gumroad Product
If you don't have the actual Thyroid course on Gumroad yet:
1. Go to gumroad.com
2. Create product: "Thyroid Health Mastery Course"
3. Set price: $97
4. Add discount code: MLKLEGACY (50% off)
5. Copy the Gumroad product URL
6. Update `ThyroidCourse.tsx` line 21 with your actual URL:
   ```tsx
   const gumroadUrl = `https://gumroad.com/l/YOUR-PRODUCT-URL${promoApplied ? '?wanted=true&code=MLKLEGACY' : ''}`;
   ```

### 2. Send MLK Legacy Email Campaign
1. Log into Mailchimp
2. Import your 1,500 subscribers (if not done yet)
3. Use the email template from EMAIL_SETUP_COMPLETE.md
4. Modify subject: "🕊️ MLK Legacy Sale: 50% OFF Thyroid Health Course"
5. Include: Course link, promo code MLKLEGACY, urgency (ends Jan 27)
6. Schedule or send immediately

### 3. Verify Google Analytics
1. Visit your site
2. Open Google Analytics dashboard
3. Verify real-time tracking is working
4. Check all pages show up in Analytics

---

## Medium Priority (This Week)

### 1. Add SEO to All Pages
For each main page, add this at the top of the component:
```tsx
import SEO from '@/components/SEO';

// Inside component:
<SEO
  title="Page Title Here"
  description="Page description 150-160 characters"
  keywords={['keyword1', 'keyword2', 'keyword3']}
  url="/page-url"
/>
```

Reference [SEO_IMPLEMENTATION.md](SEO_IMPLEMENTATION.md) for specific titles/descriptions per page.

### 2. Create Chyna White Episode 2
Plan: "Verse One: The Rap Game" (15 min read, spice level 3)

**What to cover:**
- Young Chyna's early rap career
- The underground scene in DMV
- Her first big break
- What went wrong
- Why she had to pivot

**Tone:** 
- Nostalgic but raw
- Show her talent and ambition
- Hint at the tragedy that ended her music career

### 3. Set Up Google Search Console
1. Go to search.google.com/search-console
2. Add property: askdogood.com
3. Verify ownership (DNS or HTML file upload)
4. Submit sitemap: https://askdogood.com/sitemap.xml
5. Monitor for crawl errors

---

## Low Priority (Next 2 Weeks)

### 1. Create Character Art for Chyna White
**Options:**
- Commission artist on Fiverr ($50-150)
- Use Midjourney/DALL-E to generate ($10-20/month)
- Use Canva with stock photos and effects (free-$13/month)

**Specs:**
- Portrait orientation (3:4 aspect ratio)
- Show tattoos, styled locs, confident pose
- Fashion-forward but street-influenced
- Save as chyna-white-cover.webp
- Upload to Azure blob storage: images/stories/

### 2. Build Course Delivery System
If you have actual course videos/content:
- Option 1: Host on Gumroad (they handle delivery)
- Option 2: Use Teachable/Thinkific (separate platform)
- Option 3: Build custom delivery page with video embeds and download links

### 3. Create Lead Magnets
Free downloads to grow email list:
- "Thyroid Lab Results Cheat Sheet" (PDF)
- "7-Day Anti-Inflammatory Meal Plan" (PDF)
- "Supplement Shopping Guide" (PDF)

Add these as gated content throughout the site.

---

## Content Calendar (Next 30 Days)

### Week 1
- [ ] MLK email campaign (course promotion)
- [ ] Social post: Chyna White announcement
- [ ] Blog post: "How I Healed My Thyroid" (SEO-optimized)
- [ ] Chyna White Episode 2

### Week 2
- [ ] Email: Blog roundup (use RSS feed)
- [ ] Social posts: Course testimonials
- [ ] Blog post: "Best Supplements for Thyroid Health"
- [ ] Update course with student testimonials

### Week 3
- [ ] Email: Chyna White Episode 2 announcement
- [ ] Social posts: Behind-the-scenes of Chyna character
- [ ] Blog post: "Thyroid Symptoms You Shouldn't Ignore"
- [ ] Plan Chyna White Episode 3

### Week 4
- [ ] Email: Course value reminder (without discount)
- [ ] Social posts: Garden season content
- [ ] Blog post: "My Thyroid Journey: The First Year"
- [ ] Chyna White Episode 3

---

## Troubleshooting

### If Links Don't Work
- Run: `cd client && pnpm run dev`
- Check browser console for errors
- Verify routes in App.tsx

### If Images Don't Load
- Check Azure blob storage URLs
- Verify image paths in code
- Check network tab in browser DevTools

### If SEO Component Errors
- Verify react-helmet-async is installed
- Check HelmetProvider wrapper in main.tsx
- Import SEO component correctly

### If Gumroad Link Doesn't Work
- Verify product is published on Gumroad
- Check URL in ThyroidCourse.tsx
- Test promo code on Gumroad directly

---

## Quick Wins Checklist

Copy this to track your progress:

**Today:**
- [ ] Install react-helmet-async
- [ ] Update main.tsx with HelmetProvider
- [ ] Test all new pages
- [ ] Send MLK email campaign
- [ ] Set up Gumroad product (if needed)

**This Week:**
- [ ] Add SEO to 5 main pages
- [ ] Submit sitemap to Google Search Console
- [ ] Write Chyna White Episode 2
- [ ] Create 2 lead magnets
- [ ] Post about new Stories section on social media

**This Month:**
- [ ] Add SEO to all pages
- [ ] Get first 10 course sales
- [ ] Publish 4 new blog posts
- [ ] Complete Chyna White first arc (Episodes 1-4)
- [ ] Grow email list to 2,000

---

## Need Help?

If you run into issues:

1. **Code errors**: Check browser console, read error messages carefully
2. **SEO questions**: Reference SEO_IMPLEMENTATION.md
3. **Content ideas**: Check CONTENT_AUTOMATION_SYSTEM.md
4. **Email setup**: Reference EMAIL_SETUP_COMPLETE.md
5. **General strategy**: Read SITE_OVERHAUL_PLAN.md

---

**Remember:** You don't have to do everything at once. Pick 1-2 high-impact items per day and execute them well. Consistency > perfection.

**Your site is READY. Now it's time to LAUNCH and SCALE! 🚀**
