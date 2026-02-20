# Site Enhancements - February 2026

## Overview
Comprehensive enhancements requested on February 20, 2026 to improve functionality, content, and user experience across AskDoGood platform.

---

## 1. Clinical Recipes App Enhancements

### Current Issues
- Limited recipe database
- Limited ingredient selection in browse
- Limited meal plan choices
- Shopping list needs 100+ more items
- Add Recipe button not working
- Nutrition tab lacks educational content
- No health condition assessment

### Required Changes

#### A. Expand Recipe Database
- **Target**: Add 50+ new recipes across all categories
- **Categories to expand**:
  - Thyroid-friendly meals
  - Anti-inflammatory dishes
  - Plant-based options
  - High-protein meals
  - Quick 15-minute recipes
  - Batch cooking recipes

#### B. Ingredients System
- **Current**: Limited preset ingredients
- **Target**: 100+ ingredients with nutritional data
- Add ingredient categories:
  - Proteins (20+)
  - Vegetables (30+)
  - Fruits (20+)
  - Grains & Starches (15+)
  - Healthy Fats (10+)
  - Herbs & Spices (25+)
  - Dairy/Alternatives (10+)

#### C. Meal Planning Enhancement
- Add more pre-built meal plans:
  - 7-day thyroid reset
  - 14-day anti-inflammatory
  - 21-day plant-based
  - 30-day chronic illness recovery
- Allow custom meal plan creation
- Meal plan templates by calorie target (1500, 1800, 2000, 2200)

#### D. Shopping List Expansion
- Add 100+ common grocery items
- Categorize by:
  - Produce
  - Proteins
  - Pantry Staples
  - Refrigerated
  - Frozen
  - Supplements
- Include brand recommendations
- Add cost estimates

#### E. Nutrition Education Tab
- **New Content Required**:
  - What is Nutrition? (foundational)
  - Macronutrients explained (protein, carbs, fats)
  - Micronutrients & thyroid health
  - Anti-inflammatory foods
  - Foods to avoid with thyroid conditions
  
- **Ailments & Nutritional Solutions**:
  - Hypothyroidism → Selenium, zinc, iodine-rich foods
  - Hashimoto's → Gluten-free, anti-inflammatory
  - Fatigue → Iron, B12, adaptogenic foods
  - Brain fog → Omega-3s, antioxidants
  - Weight gain → Fiber, protein, balanced meals
  - Joint pain → Turmeric, ginger, omega-3s
  - Digestive issues → Probiotics, fiber, fermented foods
  - Anxiety → Magnesium, B-vitamins, adaptogens

- **Cite Sources**: Link to peer-reviewed research, NIH, medical journals

#### F. Health Condition Assessment
- Create intake questionnaire:
  - Current diagnoses
  - Medications
  - Symptoms
  - Dietary restrictions
  - Health goals
  - Allergies
  
- Generate personalized recommendations based on input
- Filter recipes by health conditions
- Suggest specific meal plans
- Recommend key nutrients

#### G. Fix "Add Recipe" Button
- Debug form submission
- Ensure proper API connection
- Add validation
- Show success/error messaging

---

## 2. Journey Page Enhancements

### Current State
- Journey milestones exist but don't link to individual pages
- Static content
- No auto-update system

### Required Changes

#### A. Create Individual Milestone Pages
Create dedicated pages for each phase:

1. **Foundation Page** (`/journey/foundation`)
   - NCAT experience details
   - Early tech career
   - CompTIA A+ journey
   - University of Phoenix AAIT
   - Photos & timeline

2. **Military Service Page** (`/journey/military`)
   - Army National Guard details
   - U.S. Army transition
   - Leadership lessons
   - Discipline & resilience stories
   - Service photos

3. **Health Journey Page** (`/journey/health`)
   - 2016 health concerns
   - Medical advocacy journey
   - Thyroidectomy details
   - Cancer diagnosis & recovery
   - Lessons learned
   - Health timeline

4. **Career & Legacy Page** (`/journey/career`)
   - Microsoft return
   - Teaching career
   - Certifications journey
   - Client work (Census, DOE, Synchrony, etc.)
   - Current projects
   - Book writing
   - Community involvement (NSBE, Blacks in Government)

#### B. Auto-Update Journey System
- Create journey data structure in database
- Admin interface to add new milestones
- Automatic timeline generation
- Dynamic phase creation
- Achievement tracking system

#### C. Interactive Timeline
- Clickable timeline visual
- Filter by category (Career, Health, Education, Service)
- Search functionality
- Share individual milestones

---

## 3. Professional Certifications Section

### Current Issues
- Text-only list
- Not visually appealing
- Poor alignment

### Required Changes
- Display certification badges/logos
- Grid layout with hover effects
- Verification links
- Issue dates
- Expiration dates (where applicable)
- Clean, professional design
- Perfect alignment and spacing

```
[Azure Badge] [AWS Badge] [CompTIA A+] [CompTIA Project+]
```

---

## 4. What's Next Section Enhancement

### Current State
- Static icons for Health, Career, Legacy
- No expansion or details

### Required Changes

#### Create Expandable Sections:

**Health Goals**
- Thyroid health optimization
- Continued advocacy
- Book: health chapters
- Platform expansion

**Career Goals**
- Azure security expertise
- Teaching expansion
- Consulting growth
- Technical certifications

**Legacy Goals**
- Book completion
- Platform impact
- Community building
- Mentorship programs

Each should link to:
- `/goals/health`
- `/goals/career`
- `/goals/legacy`

---

## 5. Book Promotion - "Starting From Scratch in the Basement"

### Required Elements

#### A. Book Cover Design
- Create professional cover
- Title: "Starting From Scratch in the Basement"
- Subtitle: TBD
- Author: RoSeé Murphy
- Design reflecting journey from struggle to success

#### B. Book Section on Site
- Dedicated page: `/book`
- About the book
- Chapter previews
- Pre-order/purchase CTA
- Author's note
- Testimonials/early reviews

#### C. Homepage Feature
- Hero section or prominent placement
- "Coming Soon" badge
- Email signup for launch notification
- Sample chapter download

---

## 6. Jesse Jackson Tribute Section

### Requirements
- Create tribute page: `/tribute/jesse-jackson`
- Timeline of his life
- Photo gallery (youth → elder years)
- Key achievements:
  - Civil Rights activism
  - Rainbow PUSH Coalition
  - Presidential campaigns
  - Community impact
  - International diplomacy
- Quotes
- Legacy section
- Impact on Black community

### Homepage Placement
- Featured tribute section at top
- "Honoring Jesse Jackson" header
- Brief intro + "Learn More" CTA

---

## 7. Tagline Update

### Current
"Healing guides for Black women"

### New Options
1. "Healing & structure for the Black and Brown community"
2. "Real-life growth for Black and Brown communities"
3. "Wellness, structure, and legacy for people of color"
4. "Health and healing for the Black and Brown experience"
5. "Empowering Black and Brown communities through healing"

**Recommended**: "Healing, structure, and real-life growth for Black and Brown communities"

---

## 8. Technical Fixes

### RSS Feed
- **Current**: Not working
- **Action**: Debug RSS endpoint or remove if not essential
- Test feed readers (Feedly, Inoreader)
- Fix XML formatting
- Update feed metadata

### Blog Images
- Audit all blog posts
- Replace fallback images with unique images
- Ensure each post has custom featured image
- Optimize image loading (lazy load, compression)
- Add image alt text for SEO

### Footer Link Fix
- Tech & Azure link should go to: `https://thedopecloudteacher.org`
- Update Footer.tsx

---

## 9. Stories Section - Chyna Whyte

### Create Comprehensive Character Page

**Page**: `/stories/chyna-whyte`

#### Content Structure

**Introduction**
- Who is Chyna Whyte?
- Her purpose (vehicle for untold stories)
- Fiction meets reality

**Character Profile**
- Background & origin
- Personality traits
- Struggles & challenges
- Achievements & wins
- Faith journey
- Drive & motivation

**Her Story Arcs**
- Coming soon: Chapter previews
- Themes: resilience, sexuality, darkness, redemption, adventure
- Why these stories matter

**Author's Note**
- Why RoSeé created Chyna
- Safe space for complex narratives
- Creative freedom

**Visual Elements**
- Character art (from CHYNA_WHITE_IMAGE_COMPLETE_GUIDE.md)
- Story teasers
- Quote graphics

---

## 10. Resources Page Reorganization

### Current Issues
- Layout needs improvement
- Product image shows white woman (unacceptable)
- Apps need better presentation

### Required Changes

#### A. Page Layout (Top to Bottom)
1. Free Resources (top)
   - Lead magnets
   - Free guides
2. Health Apps (middle - enhanced display)
   - Label Scanner
   - Meal Prep App
   - Clinical Recipes
   - Better images for each
   - App screenshots
   - Feature highlights
3. Products (bottom)
   - Courses
   - Coaching
   - Digital products

#### B. Product Image Updates
- Replace Thyroid Health Mastery Course image
- Use diverse representation
- Consider:
  - Abstract/illustration
  - Black/Brown woman
  - No people (just graphics)
  - Custom designed image

#### C. Health Apps Enhancement
- Create app cards with:
  - App icon
  - Screenshot preview
  - Key features (3-4 bullets)
  - "Open App" button
  - Use case description
- Better visual hierarchy
- Responsive grid layout

---

## 11. Dashboard Enhancements

### Dynamic Quote System

#### Current
- Static "Structure Over Struggle" quote

#### Required
Create rotation of 10+ motivational quotes:

1. "Structure Over Struggle - small systems create big stability"
2. "Healing isn't linear, but showing up is"
3. "Your body's wisdom is louder than any diagnosis"
4. "Discipline is self-love in action"
5. "Rest is not a reward - it's a requirement"
6. "Faith doesn't require perfection"
7. "Consistency beats intensity every time"
8. "You're not behind - you're rebuilding"
9. "Small wins compound into lasting change"
10. "Your journey is valid, even on tired days"
11. "Healing takes time, but you're worth the wait"
12. "Progress isn't always visible, but it's happening"

- Rotate quotes on page load
- Store user's favorite quotes
- Allow quote sharing

### Dynamic Today's Focus

#### Current
- Generic/static

#### Required
- Date-based focus suggestions
- **Monday**: Meal planning & prep
- **Tuesday**: Movement & energy
- **Wednesday**: Midweek check-in
- **Thursday**: Reflection & journaling
- **Friday**: Week review & celebration
- **Saturday**: Rest & recovery
- **Sunday**: Planning & intention-setting

- **Seasonal Themes**:
  - Winter: Warming foods, rest, reflection
  - Spring: Renewal, fresh starts, detox
  - Summer: Energy, activity, hydration
  - Fall: Grounding, preparation, gratitude

- **Holiday Awareness**:
  - Black History Month focus
  - Mental Health Awareness Month
  - Thyroid Awareness Month
  - Cultural celebrations

### Quick Wins Enhancement
- Expand from 3 to 5-7 quick wins
- Personalize based on:
  - Time of day
  - User's health goals
  - Completion history
  - Health conditions

### Challenges Addition
Create more challenge options:
- 7-Day Anti-Inflammatory
- 14-Day Energy Reset
- 21-Day Thyroid Support
- 30-Day Strength Building
- 5-Day Hydration Challenge
- Weekend Recovery Protocol

---

## 12. New Individual Pages

Create dedicated pages for key topics:

### A. Thyroid Health Page (`/thyroid-health`)
- What is thyroid disease?
- Types (Hashimoto's, Hypothyroidism, Hyperthyroidism, Cancer)
- Symptoms guide
- Lab interpretation
- Treatment options
- Lifestyle management
- Recipe recommendations
- Success stories

### B. Chronic Illness Recovery (`/chronic-illness-recovery`)
- Understanding chronic illness
- Pacing strategies
- Energy management
- Nutrition for recovery
- Mental health support
- Building routines
- Community resources

### C. Nutrition & Superfoods (`/nutrition-superfoods`)
- What are superfoods?
- Thyroid-supporting foods
- Anti-inflammatory foods
- Foods to avoid
- Meal planning basics
- Recipe library link
- Supplement guide

### D. Mental Wellness (`/mental-wellness`)
- Mind-body connection
- Stress & thyroid health
- Anxiety management
- Depression support
- Faith & mental health
- Meditation & mindfulness
- Professional resources

---

## 13. SEO Optimization

### Apply to All New/Updated Pages
- Meta titles (55-60 characters)
- Meta descriptions (150-160 characters)
- Keywords research & implementation
- Header hierarchy (H1, H2, H3)
- Internal linking strategy
- Image alt text
- Schema markup
- Open Graph tags
- Twitter Card tags
- Sitemap updates
- Mobile optimization
- Page speed optimization

### Priority Keywords
- Thyroid health
- Hashimoto's disease
- Hypothyroidism
- Black women's health
- Chronic illness
- Anti-inflammatory diet
- Thyroid recipes
- Health coaching
- Wellness for people of color

---

## Implementation Priority

### Phase 1 - Quick Wins (1-2 days)
1. ✅ Update tagline
2. ✅ Fix footer link (Tech & Azure)
3. ✅ Fix Add Recipe button
4. ✅ Update dashboard quotes
5. ✅ Reorganize Resources page
6. ✅ Update product image

### Phase 2 - Content Enhancement (3-5 days)
1. ⏳ Expand Clinical Recipes (add 50 recipes)
2. ⏳ Add 100 ingredients to database
3. ⏳ Create nutrition education content
4. ⏳ Build health assessment questionnaire
5. ⏳ Create Jesse Jackson tribute
6. ⏳ Write Chyna Whyte intro

### Phase 3 - New Pages (5-7 days)
1. ⏳ Create individual journey milestone pages
2. ⏳ Build topic pages (Thyroid, Chronic, Nutrition, Mental)
3. ⏳ Create book promotion page
4. ⏳ Build expandable Goals pages

### Phase 4 - Systems & Features (7-10 days)
1. ⏳ Journey auto-update system
2. ⏳ Dynamic dashboard (quotes, focus, challenges)
3. ⏳ Health condition assessment system
4. ⏳ Meal plan generator
5. ⏳ Image optimization system

### Phase 5 - Polish & SEO (3-5 days)
1. ⏳ Blog image audit & replacement
2. ⏳ SEO optimization all pages
3. ⏳ Fix RSS feed or remove
4. ⏳ Professional certifications redesign
5. ⏳ Performance optimization

---

## Success Metrics

- Clinical Recipes: 100+ recipes, 150+ ingredients
- Journey: 4 individual milestone pages
- New Topic Pages: 4 comprehensive pages
- Dashboard: 12+ rotating quotes, dynamic focus
- SEO: All pages optimized
- Images: All blog posts have unique images
- Loading: <3 second page load times

---

## Notes

- Book cover design is a separate creative project
- Jesse Jackson photos need to be sourced (public domain/licensed)
- Chyna Whyte character art already exists per CHYNA_WHITE_CHARACTER_ART.md
- Some changes require content writing beyond code
- Recipe data entry is time-intensive
- Consider hiring content writer for nutrition education section
