# Clinical Recipe App - Hosting Solution Plan

## Current Situation

**Current URL:** `https://clinical-food-rx.preview.emergentagent.com/`

**Problem:** The app is hosted on Emergent AI's preview infrastructure, which:
- Goes to sleep when inactive (requires "wake up" button)
- Not suitable for production use
- Creates poor user experience
- Not under your control

**App Type:** Clinical Nutritionist Recipe Recommendation System
- Evidence-based recipe recommendations
- Tailored to health conditions (hypertension, diabetes, kidney disease, etc.)
- 10-nutrient analysis per serving
- Optimized for 13+ health conditions

## Hosting Options Analysis

### Option 1: Azure Static Web Apps (SWA) - RECOMMENDED ✅

**Pros:**
- You're already using Azure SWA for askdogood.com
- Free tier available (perfect for starting)
- Custom domain support included
- Global CDN for fast loading
- Automatic HTTPS
- GitHub Actions integration
- Always-on (no sleep)
- Serverless API support if needed

**Cons:**
- Requires the app to be static or have serverless backend
- May need to check if Clinical Recipe app has backend requirements

**Cost:**
- **Free tier:** $0/month
  - 100 GB bandwidth/month
  - 0.5 GB storage
  - 2 custom domains
  - Perfect for most small to medium apps

- **Standard tier:** ~$9/month (if you exceed free tier)

**Setup Process:**
1. Verify if Clinical Recipe app is in your GitHub
2. Configure Azure SWA resource
3. Connect to GitHub repository
4. Set up custom domain (e.g., recipes.askdogood.com)
5. Deploy via GitHub Actions

### Option 2: Azure App Service

**Pros:**
- Supports dynamic backends
- More control over environment
- Can run Node.js, Python, etc.

**Cons:**
- More expensive (~$13-55/month minimum)
- Overkill for a static/frontend app
- More complex setup

**Cost:** $13-55/month (Basic tier)

### Option 3: Vercel/Netlify

**Pros:**
- Easy deployment
- Free tier available
- Good for static apps

**Cons:**
- Not Azure (you're already invested in Azure)
- Another platform to manage
- Custom domain may require paid tier

## RECOMMENDED SOLUTION

**Use Azure Static Web Apps (Free Tier)**

### Implementation Steps:

1. **Locate/Clone Clinical Recipe App Repository**
   - Find the app source code in your GitHub
   - If it's part of emergent AI, may need to export/rebuild

2. **Create Azure SWA Resource**
   - Resource group: Same as askdogood
   - Region: Same as current setup
   - Plan: Free tier

3. **Configure Custom Domain**
   - Subdomain: `recipes.askdogood.com`
   - Or: `clinical-recipes.askdogood.com`
   - DNS: Add CNAME record

4. **Deploy via GitHub Actions**
   - Automatic deployment on push
   - No manual intervention needed

5. **Update askdogood.com Integration**
   - Change `VITE_CLINICAL_RECIPE_APP_URL` to new domain
   - Update embed component if needed

### Domain Options:
- `recipes.askdogood.com` (simple, clean)
- `clinical-recipes.askdogood.com` (descriptive)
- `nutrition.askdogood.com` (professional)

## Next Steps

**Immediate Actions Needed:**

1. ✅ Confirm if Clinical Recipe app source code is in your GitHub
   - If yes: Which repository?
   - If no: Need to export from Emergent AI or rebuild

2. ✅ Decide on subdomain name

3. ✅ Create Azure SWA resource

4. ✅ Configure deployment

5. ✅ Update askdogood.com to point to new URL

## Cost Summary

**Azure Static Web Apps (Free Tier):**
- Monthly cost: **$0**
- Bandwidth: 100 GB/month (more than enough)
- Custom domains: 2 included
- Always-on: Yes
- HTTPS: Automatic

**Total Additional Cost: $0/month**

This is the cheapest and best option for your use case!

## Questions to Answer

1. **Do you have the Clinical Recipe app source code in GitHub?**
   - If not, we may need to contact Emergent AI or rebuild

2. **Does the app have a backend/API, or is it purely frontend?**
   - This determines if we need serverless functions

3. **What subdomain do you prefer?**
   - recipes.askdogood.com
   - clinical-recipes.askdogood.com
   - nutrition.askdogood.com
   - Other?
