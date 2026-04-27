---
mode: ask
model: GPT-5
description: "Run one-week omnichannel mini-me execution across Zeely, Gumroad, Beehiiv, Claude, Emergent, Beautiful.ai, and Manus."
---
Run the AskDoGood omnichannel mini-me workflow.

Inputs:
- Offer URL: ${input:offerUrl:Paste the primary offer URL}
- Offer name: ${input:offerName:Offer name}
- Audience: ${input:audience:Target audience}
- Campaign goal: ${input:goal:Primary goal for this week}
- Budget level: ${input:budget:Low, medium, or high}
- Platforms active this week: ${input:platforms:List platforms to use this week}

Tasks:
1. Build one-week plan across active platforms.
2. Generate platform-specific copy and payload blocks.
3. Produce day-by-day execution list with owner and effort level.
4. Produce KPI scorecard with pause/iterate/scale thresholds.
5. Produce fallback manual workflow for platforms without API connectivity.

Constraints:
- Keep founder voice consistent.
- Keep medical language compliance-safe.
- Prioritize speed to sales with low energy drain.

Output sections:
1. Weekly objective
2. Platform activation map
3. Copy and payload blocks
4. Daily execution checklist
5. KPI scorecard and optimization rules
6. Manual fallback steps
