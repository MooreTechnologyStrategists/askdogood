# Analytics Integration Guide

Complete guide for tracking newsletter performance, website traffic, and conversions.

## ✅ Already Integrated

Your site already has Google Analytics tracking for newsletter signups:

javascript
// In BeehiivSubscribe.tsx - Already working!
window.gtag("event", "newsletter_subscribe", {
  event_category: "engagement",
  event_label: "beehiiv_newsletter",
});

## 📊 Beehiiv Built-in Analytics

### Navigate to Dashboard → Analytics

**Key Metrics to Monitor:**

### 1. Subscriber Growth
- **Total Subscribers:** Track weekly/monthly growth
- **New Subscribers:** How many joined this week
- **Unsubscribes:** Keep below 0.5% per email
- **Growth Rate:** Aim for 5-10% monthly growth

**Action Items:**
- If growth is slow: Promote newsletter more on social media
- If unsubscribes spike: Review recent email content

### 2. Email Performance
- **Open Rate:** Target 30-40% (yours will likely be higher with engaged audience)
- **Click Rate:** Target 5-10%
- **Bounce Rate:** Keep below 2%

**Benchmarks by Email Type:**
- Welcome emails: 50-70% open rate
- Weekly newsletter: 30-40% open rate
- Re-engagement: 10-20% open rate

### 3. Top Performing Content
- **Most Opened Emails:** What subject lines work
- **Most Clicked Links:** What content resonates
- **Best Send Times:** When your audience is active

---

## 🎯 Google Analytics Setup

### Already Configured Events:
1. ✅ Newsletter subscription (homepage)
2. ✅ Newsletter subscription (blog posts)

### Add These Additional Events:

#### Track Email Link Clicks

Add UTM parameters to all links in Beehiiv emails:

**Format:**
```
https://askdogood.com/[page]?utm_source=beehiiv&utm_medium=email&utm_campaign=[campaign_name]&utm_content=[content_description]
```

**Examples:**

**Weekly Newsletter Links:**
```
https://askdogood.com/blog/thyroid-health?utm_source=beehiiv&utm_medium=email&utm_campaign=weekly_newsletter&utm_content=blog_link

https://askdogood.com/shop?utm_source=beehiiv&utm_medium=email&utm_campaign=weekly_newsletter&utm_content=shop_cta
```

**Welcome Email Links:**
```
https://askdogood.com/my-journey?utm_source=beehiiv&utm_medium=email&utm_campaign=welcome_series&utm_content=email_1

https://askdogood.com/products?utm_source=beehiiv&utm_medium=email&utm_campaign=welcome_series&utm_content=email_5_offer
```

**Product Launch Links:**
```
https://askdogood.com/products/thyroid-course?utm_source=beehiiv&utm_medium=email&utm_campaign=thyroid_course_launch&utm_content=cta_button
```

### How to Use UTMs in Beehiiv:

1. **When adding links in email editor:**
   - Highlight text
   - Click link icon
   - Paste full URL with UTM parameters

2. **Create UTM Template** for consistency:
   ```
   Base URL: https://askdogood.com/[PAGE]
   ?utm_source=beehiiv
   &utm_medium=email
   &utm_campaign=[CAMPAIGN_NAME]
   &utm_content=[DESCRIPTION]
   ```

3. **Campaign Names to Use:**
   - `welcome_series` - Welcome automation emails
   - `weekly_newsletter` - Regular weekly sends
   - `product_launch` - New product announcements
   - `re_engagement` - Win-back campaigns
   - `special_offer` - Sales/promotions

---

## 📈 Create Custom Dashboard in Google Analytics

### Go to: Google Analytics → Explore → Create Custom Report

### Newsletter Performance Dashboard:

**Metrics to Track:**
1. **Traffic from Email**
   - Source/Medium = beehiiv/email
   - Sessions, Users, New Users

2. **Newsletter Subscriber Conversions**
   - Event: newsletter_subscribe
   - Count by page location
   - Track conversion rate

3. **Email Campaign Comparison**
   - Dimension: Campaign Name
   - Metrics: Sessions, Engagement Rate, Conversions

4. **Top Performing Email Content**
   - Dimension: utm_content
   - Metrics: Page Views, Time on Page, Bounce Rate

### Set Up Goals:

**Goal 1: Newsletter Signup**
- Already tracking ✅
- Event: newsletter_subscribe

**Goal 2: Product Page Visit from Email**
- Source: beehiiv
- Destination: /products/*

**Goal 3: Purchase from Email Campaign**
- Source: beehiiv
- Event: purchase (set up with Gumroad later)

---

## 🔗 Affiliate Link Tracking

### Track Affiliate Clicks from Emails:

When recommending products in newsletters, use this format:

**Beehiiv Email Link:**
```
https://askdogood.com/affiliate-redirect?product=sea-moss&utm_source=beehiiv&utm_medium=email&utm_campaign=weekly_newsletter
```

This way you can track:
1. How many people clicked from email
2. Which products are most popular
3. Email → Purchase conversion rate

---

## 📊 Weekly Reporting Template

### Create This Spreadsheet (Track Every Week):

| Date | Total Subscribers | New This Week | Open Rate | Click Rate | Unsubscribes | Website Traffic from Email | Newsletter Signups from Site |
|------|------------------|---------------|-----------|------------|--------------|---------------------------|------------------------------|
| 1/22/26 | [#] | [#] | [%] | [%] | [#] | [#] | [#] |

### Where to Get the Data:

**Beehiiv Dashboard:**
- Total Subscribers
- New Subscribers
- Open Rate
- Click Rate
- Unsubscribes

**Google Analytics:**
- Website Traffic from Email:
  - Acquisition → Traffic Acquisition
  - Filter: Source = beehiiv
  
- Newsletter Signups from Site:
  - Engagement → Events
  - Event: newsletter_subscribe

---

## 🎯 Goals to Track

### Month 1 Goals:
- [ ] 100 email subscribers
- [ ] 40% average open rate
- [ ] 5% click rate
- [ ] 10 subscribers → customers

### Month 3 Goals:
- [ ] 500 email subscribers
- [ ] 45% average open rate
- [ ] 8% click rate
- [ ] $1,000 revenue attributed to email

### Month 6 Goals:
- [ ] 1,000 email subscribers
- [ ] 50% average open rate
- [ ] 10% click rate
- [ ] $5,000 revenue attributed to email

---

## 📱 Social Media Integration

### Track Newsletter Promotion on Social:

**Instagram:**
When posting about newsletter, use link:
```
https://askdogood.com?utm_source=instagram&utm_medium=social&utm_campaign=newsletter_promo
```

**Facebook:**
```
https://askdogood.com?utm_source=facebook&utm_medium=social&utm_campaign=newsletter_promo
```

This shows you which platform drives most newsletter signups!

---

## 🔔 Set Up Alerts

### Google Analytics Alerts:

**1. Newsletter Signup Spike**
- Alert when newsletter_subscribe > 50 per day
- Shows viral content or successful campaign

**2. Newsletter Signup Drop**
- Alert when newsletter_subscribe < 5 per day
- Shows potential technical issue

**3. Email Traffic Drop**
- Alert when beehiiv traffic < 100 sessions per week
- Shows need to increase email engagement

---

## 📊 Beehiiv Integrations to Enable

### Go to: Beehiiv → Settings → Integrations

**Recommended Integrations:**

1. **Google Analytics** ✅
   - Already set up on your site!

2. **Facebook Pixel** (Optional)
   - Track newsletter signups for Facebook ads
   - Retarget subscribers

3. **Zapier** (Optional - for later)
   - Connect Beehiiv to other tools
   - Auto-post new blog posts
   - Add subscribers to CRM

---

## 🚀 Action Items for Today

### Immediate (Do Now):
1. [ ] Log into Beehiiv → Analytics
2. [ ] Bookmark analytics dashboard
3. [ ] Create weekly reporting spreadsheet
4. [ ] Add UTM parameters to your first email links

### This Week:
1. [ ] Send first newsletter with UTM tracking
2. [ ] Check Google Analytics for email traffic
3. [ ] Review first email performance
4. [ ] Adjust future emails based on data

### Monthly:
1. [ ] Review subscriber growth trends
2. [ ] Identify top-performing content
3. [ ] A/B test subject lines
4. [ ] Update email templates based on clicks

---

## 📈 What Success Looks Like

### After 30 Days:
- 50-100 subscribers
- 40%+ open rates on welcome series
- 30%+ open rates on weekly newsletter
- 5-10 website visits per email sent
- 1-2 product purchases from email

### After 90 Days:
- 200-500 subscribers
- 45%+ open rates
- 20+ website visits per email sent
- 10+ product purchases from email
- Clear data on what content performs best

---

## 💡 Pro Tips

1. **Review Analytics Every Monday**
   - Check last week's newsletter performance
   - Plan next week's content based on data

2. **Track Everything Once**
   - Set up UTMs consistently from day 1
   - Don't skip this step!

3. **Focus on Engagement, Not Just Numbers**
   - 100 engaged subscribers > 1,000 inactive ones
   - Quality over quantity

4. **Test One Thing at a Time**
   - New subject line strategy? Test for 4 weeks
   - New content format? Test for 4 weeks
   - Don't change everything at once

---

## ✅ Quick Checklist

**Analytics Setup:**
- [x] Google Analytics integration (already done!)
- [ ] Beehiiv analytics reviewed
- [ ] UTM parameters template created
- [ ] Weekly reporting spreadsheet created
- [ ] First email sent with tracking

**Next Steps:**
1. Send your first tracked email
2. Wait 48 hours
3. Review the data
4. Adjust your strategy
5. Repeat!

---

You're all set! The technical tracking is already in place on your website. Now you just need to start sending emails with proper UTM tracking and watch the data come in! 📊
