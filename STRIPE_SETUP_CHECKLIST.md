# Ask DoGood Stripe Setup Checklist

**Prepared:** April 2026  
**Goal:** get Stripe ready for services, subscriptions, merch, and selected premium digital products.

---

## Best-use reminder

Use **Stripe first** for:
- coaching and consulting
- workshops and paid sessions
- VIP offers
- merch and physical goods
- subscriptions you want more control over

Use **Gumroad first** for:
- PDFs
- templates
- guides
- low-ticket digital downloads
- self-paced digital courses if you want the easiest file delivery

---

## 1) Stripe account foundation

### Account setup
- [ ] Confirm business name, email, and payout bank account
- [ ] Verify identity and tax details inside Stripe
- [ ] Add a support email customers can recognize
- [ ] Set statement descriptor to something clear like `ASKDOGOOD`
- [ ] Turn on two-factor authentication

### Basic settings
- [ ] Add your logo and brand colors
- [ ] Add support URL: `https://askdogood.com/contact`
- [ ] Add website URL: `https://askdogood.com`
- [ ] Set refund and cancellation policy links
- [ ] Set post-payment success URL and cancel URL

**Suggested URLs**
- Success page: `https://askdogood.com/shop`
- Cancel page: `https://askdogood.com/contact`

---

## 2) First products to create in Stripe

### A. Services and coaching (highest priority)

| Offer | Price | Stripe type | Recommendation |
|---|---:|---|---|
| Discovery Call | $297 | One-time payment link | Set this up first |
| Transformation Package | $997/mo | Recurring subscription | Monthly coaching offer |
| VIP Intensive | $1,997 | One-time payment link | High-ticket premium offer |
| Meal Prep Workshop | $75 | One-time payment link | Good for live event or group session |
| Private Meal Prep Coaching | $97 | One-time payment link | Good low-friction add-on |

### B. Digital offers worth mirroring in Stripe

| Offer | Price | Stripe type | Recommendation |
|---|---:|---|---|
| Thyroid Health Mastery Course | $97 | One-time payment link | Mirror from Gumroad if desired |
| 21-Day Plant-Based Reset | $47 | One-time payment link | Good for email promos |
| Garden to Table Wellness Bundle | $37 | One-time payment link | Already has a live Stripe link in code |
| 30-Day Thyroid Meal Plan | $29.99 | One-time payment link | Good evergreen offer |
| DoGood Wellness Circle | $19 or $27/mo | Subscription | Optional second home besides Gumroad |

### C. Merch (only after fulfillment is ready)

- [ ] mugs
- [ ] tees
- [ ] hoodies
- [ ] totes
- [ ] tumblers and bottles
- [ ] yoga mats

> Wait to publish merch until the placeholder/test Stripe links are replaced and fulfillment is connected.

---

## 3) Exact setup steps in Stripe Dashboard

For each offer:

1. **Go to:** `Stripe Dashboard → Product catalog → Add product`
2. **Product name:** use the exact public-facing name
3. **Description:** paste a short customer-friendly summary
4. **Pricing:** choose one-time or recurring
5. **Create payment link**
6. **Enable email collection**
7. **Add confirmation message**
8. **Copy the link into your website or checkout doc**

---

## 4) Recommended product-by-product setup

### Discovery Call — $297
- [ ] Product name: `1-on-1 Discovery Call`
- [ ] Type: one-time payment
- [ ] Price: `$297`
- [ ] Add note: `60-minute video session + follow-up support`
- [ ] After payment, redirect to contact/intake form
- [ ] Collect customer name, email, and preferred session topic

### Transformation Package — $997/month
- [ ] Product name: `Transformation Coaching Package`
- [ ] Type: recurring monthly subscription
- [ ] Price: `$997/month`
- [ ] Add note: `4 sessions/month + custom support`
- [ ] Turn on invoice emails and subscription management
- [ ] Add cancellation terms clearly

### VIP Intensive — $1,997
- [ ] Product name: `VIP Intensive`
- [ ] Type: one-time payment
- [ ] Price: `$1,997`
- [ ] Add note: `4-hour deep-dive intensive + follow-up calls`
- [ ] Send intake form immediately after purchase

### Meal Prep Workshop — $75
- [ ] Product name: `Meal Prep Workshop`
- [ ] Type: one-time payment
- [ ] Price: `$75`
- [ ] Add date/location in the product description if event-specific

### Private Meal Prep Coaching — $97
- [ ] Product name: `Private Meal Prep Coaching`
- [ ] Type: one-time payment
- [ ] Price: `$97`
- [ ] Add note: `practical meal prep and nutrition support`

---

## 5) Checkout copy to use in Stripe

### Short confirmation message
```text
Thank you for your purchase. You’ll receive a follow-up email shortly with your next steps, access details, or booking instructions.
```

### Customer support note
```text
If you have questions about your order, email askdogood@gmail.com.
```

---

## 6) Website placement checklist

Once each Stripe link is live:

- [ ] Add the Discovery Call link to `client/src/pages/Coaching.tsx`
- [ ] Add the Transformation Package subscription link to `client/src/pages/Coaching.tsx`
- [ ] Add the VIP Intensive link to `client/src/pages/Coaching.tsx`
- [ ] Add workshop/coaching links to `client/src/pages/MealPrep.tsx`
- [ ] Replace placeholder merch Stripe URLs in `client/src/data/merch-products.ts`
- [ ] Update any old CTA buttons that still route only to contact forms if direct checkout is preferred

---

## 7) Before you publish any Stripe product

### QA checklist
- [ ] Test the payment link in a private browser window
- [ ] Confirm the right amount shows at checkout
- [ ] Confirm mobile checkout works cleanly
- [ ] Confirm the success redirect works
- [ ] Confirm customer email receipt is enabled
- [ ] Confirm the support email is visible
- [ ] Confirm refund/cancellation language is easy to find

### For subscriptions
- [ ] Verify recurring interval is correct
- [ ] Verify card updater / failed payment retry settings are on
- [ ] Verify customer portal is enabled if you want self-service cancellations

---

## 8) Best launch order for Stripe

1. `Discovery Call`
2. `VIP Intensive`
3. `Transformation Package`
4. `Meal Prep Workshop`
5. `Private Meal Prep Coaching`
6. `Garden to Table Wellness Bundle`
7. merch collection after real links/mockups are ready

---

## 9) Fastest path if you want this live today

If speed matters most, do these first:

- [ ] Create Stripe payment link for `Discovery Call`
- [ ] Create Stripe payment link for `VIP Intensive`
- [ ] Create Stripe subscription for `Transformation Package`
- [ ] Add those links into the website buttons
- [ ] Test all 3 checkout links

That gives you a working service-sales setup fast, without waiting on merch or every single digital product.
