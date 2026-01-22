# Beehiiv Complete Setup Guide

## 🎯 Quick Start Checklist

### 1. Create Your Publication (5 minutes)
1. Go to https://app.beehiiv.com/
2. Click "Create Publication"
3. **Publication Name:** AskDoGood Newsletter
4. **Subdomain:** rosees-newsletter-9d5fac (already set!)
5. **Description:** Weekly insights on thyroid health, healing, and real-life wellness strategies from a cancer survivor
6. **Logo:** Upload your flower logo from Azure: `https://askdogoodassets.blob.core.windows.net/images/brand/logo-flower-circle.webp`

### 2. Configure Publication Settings
1. Navigate to **Settings** → **Publication Details**
2. **From Name:** Rosee Murphy (or "Rose from AskDoGood")
3. **From Email:** askdogood@gmail.com
4. **Reply-to Email:** roseecm@gmail.com
5. **Footer Address:** (Your business address if required)

### 3. Customize Branding
1. Go to **Settings** → **Design**
2. **Primary Color:** #10b981 (your green)
3. **Font:** Inter or similar clean sans-serif
4. **Button Style:** Rounded with your brand green

---

## 📧 Newsletter Strategy

### Weekly Newsletter Schedule
- **Send Day:** Every Wednesday at 9:00 AM EST
- **Why Wednesday:** Mid-week engagement is highest
- **Consistency:** Same day/time builds subscriber habit

### Newsletter Structure
Each weekly email should include:

1. **Personal Story/Hook** (2-3 paragraphs)
   - Start with something relatable from your week
   - Connect to the main topic

2. **Main Content** (3-5 sections)
   - Thyroid health tip
   - Nutrition insight
   - Mindset moment
   - Product recommendation (affiliate or your own)

3. **Call-to-Action**
   - Read the full blog post
   - Shop recommended products
   - Reply with questions

4. **Footer**
   - Social links
   - Unsubscribe option
   - Your story in 1-2 sentences

---

## 🤖 Automation Sequences to Set Up

### Sequence 1: Welcome Series (5 emails over 14 days)

**Email 1: Welcome + Who I Am** (Immediately)
- Subject: "Welcome to the AskDoGood Family! 🌸"
- Introduce yourself, your thyroid cancer story
- What they can expect from the newsletter
- CTA: Read your "My Journey" page

**Email 2: The First Ingredient Philosophy** (Day 2)
- Subject: "The One Change That Changed Everything"
- Explain your "First Ingredient" philosophy
- Share a quick win they can implement today
- CTA: Download free "First Ingredient Checklist"

**Email 3: Thyroid Health Basics** (Day 5)
- Subject: "3 Things Your Doctor Might Not Tell You About Thyroid Health"
- Educational content about thyroid health
- Link to your best thyroid blog posts
- CTA: Read blog or shop thyroid support products

**Email 4: Nutrition Made Simple** (Day 9)
- Subject: "Let's Talk About Real Food (No BS)"
- Your approach to nutrition
- Debunk common myths
- CTA: Join community or read recipes

**Email 5: Special Offer** (Day 14)
- Subject: "A Gift for You (Because You're Awesome)"
- Exclusive discount or free resource
- Introduce your products/courses
- CTA: Shop or enroll

### Sequence 2: Abandoned Cart Recovery (for Gumroad products)
Set up via Gumroad webhooks (I'll help integrate this later)

### Sequence 3: Re-engagement Campaign
For subscribers who haven't opened in 30+ days:
- "I Miss You! Here's What You've Missed..."
- Offer a special incentive to re-engage

---

## 📊 Analytics Integration

### Google Analytics Tracking
Already implemented on your site! The BeehiivSubscribe component tracks:
```javascript
window.gtag("event", "newsletter_subscribe", {
  event_category: "engagement",
  event_label: "beehiiv_newsletter",
});
```

### Beehiiv Built-in Analytics
Monitor these metrics weekly:
1. **Open Rate** (Target: 30-40%)
2. **Click Rate** (Target: 5-10%)
3. **Subscriber Growth** (Track weekly)
4. **Unsubscribe Rate** (Keep below 0.5%)

### Set Up UTM Parameters
When linking to your website from emails, use:
```
?utm_source=beehiiv&utm_medium=email&utm_campaign=weekly_newsletter
```

Example:
```
https://askdogood.com/blog/thyroid-health?utm_source=beehiiv&utm_medium=email&utm_campaign=weekly_newsletter
```

---

## 🎨 Next Steps

1. **Import Existing Subscribers** (if you have any)
   - Go to **Audience** → **Import Subscribers**
   - Upload CSV with email addresses

2. **Create Your First Post**
   - Go to **Posts** → **Create Post**
   - Use the template I've created (see BEEHIIV_EMAIL_TEMPLATES.md)

3. **Set Up Welcome Automation**
   - Go to **Automations** → **Create Automation**
   - Choose "On Subscribe" trigger
   - Add the 5-email welcome sequence

4. **Test Everything**
   - Subscribe with your own email
   - Check deliverability
   - Test all links and CTAs

---

## 💡 Pro Tips

1. **Write like you talk** - Your personality is your brand
2. **Be consistent** - Same day/time every week
3. **Keep it scannable** - Use headers, bullets, short paragraphs
4. **Always have ONE clear CTA** - Don't overwhelm with options
5. **Track what works** - Double down on high-performing content

---

## 🚀 Launch Day Checklist

- [ ] Publication settings configured
- [ ] Branding customized
- [ ] Welcome automation created (5 emails)
- [ ] First newsletter drafted and scheduled
- [ ] Test subscription on your website
- [ ] Announce newsletter on social media
- [ ] Add newsletter CTA to email signature

---

## Need Help?

Your site already has Beehiiv integration working:
- Home page newsletter signup ✅
- Blog post newsletter signup ✅
- All submitting to: https://rosees-newsletter-9d5fac.beehiiv.com/create ✅

Test it now and start seeing subscribers come in!
