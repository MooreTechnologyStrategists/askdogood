---
mode: ask
model: GPT-5
description: "Create a one-week Zeely growth sprint for one AskDoGood offer."
---
Create a one-week Zeely growth sprint for AskDoGood.

Inputs:
- Offer URL: ${input:offerUrl:Paste the product or landing page URL}
- Offer name: ${input:offerName:Name of offer}
- Audience: ${input:audience:Who this campaign is for}
- Main pain point: ${input:pain:What pain point this campaign addresses}
- Main transformation: ${input:outcome:Desired outcome}
- Budget level: ${input:budget:Low, medium, or high}

Tasks:
1. Produce 5 ad hooks and 3 variants of body copy per hook.
2. Produce 3 CTA variants for each hook.
3. Produce a 7-day publishing plan with daily actions.
4. Produce optimization rules for pause/iterate/scale decisions.
5. Produce a short compliance checklist to avoid unsupported medical claims.

Constraints:
- Keep voice practical, culturally grounded, and community-first.
- Avoid diagnosis, cure language, and medication replacement claims.
- Prioritize conversion with low founder energy drain.

Output sections:
1. Campaign frame
2. Zeely ad copy matrix
3. 7-day execution plan
4. Optimization rulebook
5. Compliance and trust checklist
