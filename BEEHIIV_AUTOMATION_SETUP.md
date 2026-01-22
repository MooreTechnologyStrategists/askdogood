# Beehiiv Automation Setup Guide

Step-by-step instructions for creating automated email sequences in Beehiiv.

---

## 🤖 Automation #1: Welcome Series (PRIORITY - Set Up First!)

### How to Create in Beehiiv:

1. **Go to Automations**
   - Navigate to **Automations** in left sidebar
   - Click **Create Automation**

2. **Choose Trigger**
   - Select: **"When someone subscribes"**
   - Apply to: **All new subscribers**

3. **Add Delay** (Optional)
   - Add 1-hour delay so it doesn't feel robotic

4. **Add Email #1: Welcome + Introduction**

#### Email #1 Settings:
- **Send:** Immediately after subscription
- **Subject:** "Welcome to the AskDoGood Family! 🌸"
- **From Name:** Rosee Murphy
- Use Template 1 from BEEHIIV_EMAIL_TEMPLATES.md

5. **Add Wait Step**
   - Wait: 2 days

6. **Add Email #2: First Ingredient Philosophy**

#### Email #2 Settings:
- **Send:** 2 days after subscription
- **Subject:** "The One Change That Changed Everything"
- **Preview:** "Let me tell you about the First Ingredient..."

**Email Content:**
```
Hey friend! 👋

Two days ago, you joined the AskDoGood community. Today, I want to share the philosophy that changed my life.

I call it the "First Ingredient Rule."

## What Is It?

Simple: Look at the first ingredient on any food label. That's what you're really eating.

If the first ingredient is sugar, you're eating sugar.
If it's whole wheat flour, you're eating wheat.
If it's real food, you're eating real food.

[Continue with story and explanation...]

## Try This Today

Go to your pantry right now. Pick up 3 items. Look at the first ingredient.

Then ask yourself: Is this what I want to fuel my body with?

That's it. That's the whole philosophy.

See you in a few days,
Rosee 🌸
```

7. **Add Wait Step**
   - Wait: 3 days

8. **Add Email #3: Thyroid Health Basics**

#### Email #3 Settings:
- **Send:** 5 days after subscription
- **Subject:** "3 Things Your Doctor Might Not Tell You About Thyroid Health"

**Email Content:**
```
Hey there! 👋

Let's talk about your thyroid.

As a thyroid cancer survivor, I learned things the hard way. Here's what I wish someone told me from the start:

## 1. Your Thyroid Affects EVERYTHING

Not just your weight. Your energy, mood, hair, skin, digestion, sleep – all connected to that little butterfly-shaped gland in your neck.

[Continue with educational content...]

## 2. Lab Results Don't Tell the Whole Story

[Explain TSH, T3, T4, symptoms vs. numbers...]

## 3. Food Is Your First Medicine

[Explain nutrition's role in thyroid health...]

Want to dive deeper? I wrote a comprehensive guide:
→ [Read: Complete Guide to Thyroid Health]

See you soon,
Rosee 🌸
```

9. **Add Wait Step**
   - Wait: 4 days

10. **Add Email #4: Nutrition Made Simple**

#### Email #4 Settings:
- **Send:** 9 days after subscription
- **Subject:** "Let's Talk About Real Food (No BS)"

**Email Content:**
```
Hey friend! 👋

You know what I'm tired of? Diet culture.

Keto this. Paleo that. Intermittent fasting. Macro counting. Calorie tracking.

Exhausting.

## My Approach: Keep It Simple

Here's my entire nutrition philosophy in 3 rules:

**Rule 1: Read the first ingredient**
(You already know this one!)

**Rule 2: Eat food that looks like food**
If it doesn't look like it came from nature, your body doesn't know what to do with it.

**Rule 3: Listen to your body**
Bloated after eating? Tired? Foggy brain? Your body is telling you something.

[Continue with practical advice...]

## Your Next Steps

1. Download my free First Ingredient Checklist
→ [Download Here]

2. Read my favorite simple recipes
→ [See Recipes]

3. Check out products I actually use
→ [Shop My Favorites]

You've got this,
Rosee 🌸
```

11. **Add Wait Step**
    - Wait: 5 days

12. **Add Email #5: Special Offer**

#### Email #5 Settings:
- **Send:** 14 days after subscription
- **Subject:** "A Gift for You (Because You're Awesome)"

**Email Content:**
```
Hey there! 👋

We've been hanging out for two weeks now, and I wanted to say thank you for being here.

So I have something special for you...

## Exclusive Subscriber Offer 🎁

[Discount code for products]
OR
[Free download/resource]
OR
[Early access to course]

Use code: **WELCOME20** for 20% off anything in the shop

→ [Browse the Shop]

This code is just for newsletter subscribers, and it's good for the next 7 days.

---

## What's Next?

Now that you're part of the family, here's what to expect:

📧 **Every Wednesday:** Weekly newsletter with tips, stories, and recommendations
📱 **Instagram:** Daily wellness content [@askdogood]
🛍️ **Shop:** New products and courses regularly
💬 **Community:** Hit reply anytime – I read every email!

## My Most Popular Resources

If you haven't checked these out yet:

1. **The Complete Thyroid Health Guide** →  [Read Here]
2. **My Favorite Healing Products** → [Shop Here]
3. **Join the Facebook Community** → [Join Here]

Thank you for being here. Let's do good together.

Rosee 🌸

P.S. Seriously, reply to this email and tell me what you're working on with your health right now. I want to know!
```

13. **Activate Automation**
    - Review all emails
    - Click **Activate**

---

## 🤖 Automation #2: Blog Post Notifications

### How to Set Up:

1. **Go to Automations** → **Create Automation**

2. **Choose Trigger:**
   - "When a post is published"

3. **Add Condition (Optional):**
   - Only send for posts tagged: "Featured" or "Newsletter"

4. **Add Email:**
   - Subject: "New Post: {{post.title}}"
   - Content: Auto-generated post notification
   - Customize with your branding

5. **Activate**

---

## 🤖 Automation #3: Abandoned Subscription Recovery

### For people who started signing up but didn't confirm:

1. **Go to Automations** → **Create Automation**

2. **Trigger:**
   - "When subscription is pending"

3. **Wait:** 24 hours

4. **Add Email:**
   - **Subject:** "Did You Mean to Subscribe? 👀"
   - **Content:**

```
Hey there!

I noticed you started signing up for the AskDoGood Newsletter yesterday, but didn't confirm your email yet.

Was it an accident? Technical issue? Changed your mind?

If you still want to join, just click the button below to confirm:

→ [Confirm Subscription]

If not, no worries! You won't hear from me again.

Either way, hope you have an awesome day!

Rosee 🌸
```

5. **Activate**

---

## 🤖 Automation #4: Re-engagement Campaign

### For inactive subscribers (haven't opened in 30 days):

1. **Go to Automations** → **Create Automation**

2. **Trigger:**
   - "When subscriber is inactive for 30 days"

3. **Add Email:**
   - Use Template 4 from BEEHIIV_EMAIL_TEMPLATES.md
   - Subject: "I Miss You! 👋"

4. **Add Condition:**
   - If they open: Move to active list
   - If they don't open after 7 days: Send final email

5. **Final Email (7 days later):**
   - **Subject:** "Last Chance to Stay Connected"
   - **Content:**

```
Hey there,

I haven't heard from you in a while, and I wanted to check in one last time.

If you want to keep getting my weekly emails, just click here:
→ [Yes, Keep Me Subscribed!]

If not, no hard feelings – I'll automatically remove you from the list in 48 hours so your inbox stays clean.

Thanks for being here, even if just for a little while.

Take care,
Rosee 🌸
```

6. **Add Final Action:**
   - After 48 hours with no opens: Automatically unsubscribe

7. **Activate**

---

## 🤖 Automation #5: Product Purchase Follow-Up

### When someone buys a product (integrate with Gumroad):

1. **Set up Gumroad Webhook** (I'll help with this separately)

2. **Create Automation** with trigger: "When tag is added: 'customer'"

3. **Add Email:**
   - **Subject:** "Thank You! Here's What's Next 🎉"
   - **Content:**

```
Hey there! 👋

Thank you SO much for your purchase! You just made my day. 😊

Your [Product Name] is ready for you:
→ [Access Here]

## What's Next?

1. **Download your product** using the link above
2. **Join the private community** (if applicable)
3. **Hit reply** if you have ANY questions

## Need Help?

I'm here for you! Reply to this email anytime, or:
- DM me on Instagram: @askdogood
- Join the Facebook group: [Link]

Can't wait to hear how you do with this!

Rosee 🌸

P.S. If you love it, I'd be so grateful if you'd leave a review: [Review Link]
```

---

## 📊 Monitor Your Automations

### Check These Metrics Weekly:

1. **Open Rates**
   - Target: 40-50% for welcome series
   - If lower: Test new subject lines

2. **Click Rates**
   - Target: 10-15% for welcome series
   - If lower: Make CTAs clearer

3. **Unsubscribe Rate**
   - Target: <2% for welcome series
   - If higher: Content might be too salesy

4. **Conversion Rate**
   - Track how many people buy after automation
   - Optimize based on what works

---

## ✅ Automation Checklist

### Before You Activate:

- [ ] Test automation by subscribing with your own email
- [ ] Check all links work
- [ ] Verify images load
- [ ] Review subject lines
- [ ] Check for typos
- [ ] Make sure timing makes sense (not sending at 3am)
- [ ] Set up tracking UTMs for analytics
- [ ] Configure "from name" and reply-to email

### After You Activate:

- [ ] Monitor first 10 people through sequence
- [ ] Read any replies
- [ ] Check open/click rates after 48 hours
- [ ] Adjust based on performance
- [ ] A/B test subject lines monthly

---

## 🚀 Quick Start: Do This Today

1. **Create Welcome Automation** (Use emails 1-5 above)
2. **Test it** by subscribing yourself
3. **Activate it**
4. **Set up Blog Post Notifications** (takes 5 minutes)
5. **Schedule Re-engagement Campaign** (for future)

You can add the other automations later as you grow!

---

## Need Help?

I've already integrated Beehiiv on your website. Now you just need to:
1. Create these automations in Beehiiv dashboard
2. Copy/paste the email content above
3. Customize with your voice
4. Activate!

Let me know if you need help with any step!
