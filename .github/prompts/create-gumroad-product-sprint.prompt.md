---
mode: ask
model: GPT-5
description: "Create a complete AskDoGood Gumroad product sprint package from idea to launch assets."
---
Create a full AskDoGood product sprint package.

Inputs:
- Product idea: ${input:productIdea:What product do you want to build?}
- Priority audience: ${input:audience:Who is it for?}
- Price target: ${input:price:What is your target price?}
- Launch date: ${input:launchDate:When do you want to launch?}
- Existing source files: ${input:sourceFiles:List any files to reuse (optional)}

Requirements:
1. Decide whether this should be the next product now (yes/no and why).
2. Output complete Gumroad fields for copy/paste.
3. Create/outline cover and thumbnail directions.
4. Produce listing description + short description.
5. Produce product contents outline and file manifest.
6. Draft 3 launch emails and 3 social captions.
7. Provide a 14-day optimization and promotion plan.

Style constraints:
- Keep the voice practical, confident, and culturally grounded.
- Avoid unsupported medical claims.
- No filler, no vague advice.
