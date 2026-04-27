# AskDoGood Integrations Autopilot Setup

This file defines how AskDoGood connects and operates across:
- Claude
- Emergent
- Beautiful.ai
- Manus
- Zeely
- Gumroad
- Beehiiv

## Reality check: what is possible
- Full autopilot requires API keys, OAuth tokens, or official automation connectors.
- Some platforms may require copy/paste workflows if API access is limited.
- The mini-me agent can still run planning and execution order with founder voice even before full API automation.

## Connection matrix

1. Zeely
- Goal: ad tests, creative angles, campaign iteration.
- Required: Zeely account access, campaign IDs, export/report access.
- Automation mode: API if available; otherwise manual publish + report import.

2. Gumroad
- Goal: offers, pricing, checkout copy, UTM analytics.
- Required: Gumroad API token.
- Automation mode: API-driven product and sales data operations.

3. Beehiiv
- Goal: newsletter, segments, broadcast scheduling, growth funnels.
- Required: Beehiiv API key and publication ID.
- Automation mode: API for list and campaign operations.

4. Claude
- Goal: long-form drafts, rewrite workflows, message variants.
- Required: Anthropic API key (or direct account workflow).
- Automation mode: API content generation or manual prompt pipeline.

5. Emergent
- Goal: orchestration support and workflow prototyping.
- Required: platform access credentials and available integration hooks.
- Automation mode: connector-dependent.

6. Beautiful.ai
- Goal: partnership decks and campaign deck generation.
- Required: account access and any available API or automation hooks.
- Automation mode: manual or connector-dependent.

7. Manus
- Goal: multi-step research and execution assistant support.
- Required: account access and available API/automation hook.
- Automation mode: connector-dependent.

## Recommended architecture

Use one control hub to orchestrate all tools:
- Preferred: Make.com or Zapier for no-code orchestration
- Optional: n8n if self-hosted control is preferred

Flow pattern:
1. Trigger from campaign request
2. Generate copy and creative briefs via mini-me
3. Push offer updates to Gumroad
4. Push email drafts/sends to Beehiiv
5. Push ad variants to Zeely
6. Generate deck briefs for Beautiful.ai
7. Record outcomes to one weekly scorecard

## Voice preservation protocol

Store voice guardrails once and apply everywhere:
- Warm, direct, practical, culturally grounded
- No fake urgency
- No unsupported medical claims
- Mission standards:
  - eat to live, never live to eat
  - discipline as freedom
  - toxin load reduction
  - pay it forward

## Minimum credentials checklist

- GUMROAD_API_KEY=
- BEEHIIV_API_KEY=
- BEEHIIV_PUBLICATION_ID=
- ANTHROPIC_API_KEY=
- ZEELY_ACCESS_TOKEN= (if available)
- EMERGENT_ACCESS_TOKEN= (if available)
- BEAUTIFUL_AI_ACCESS_TOKEN= (if available)
- MANUS_ACCESS_TOKEN= (if available)

## Operations model for your mini-me

1. Weekly campaign brief is created by AskDoGood Zeely Mini-Me.
2. Agent outputs:
- platform-by-platform tasks
- copy/paste payloads
- publish order
- KPI thresholds and optimization rules
3. If API unavailable on a platform:
- use manual publish checklist
- paste outcomes back into weekly scorecard

## First milestone (fastest path)

1. Fully connect Gumroad and Beehiiv first.
2. Run Zeely campaigns with manual import/export if needed.
3. Use Claude for long-form repurposing.
4. Add Beautiful.ai, Manus, and Emergent as orchestration depth grows.

This gives immediate revenue operations without waiting on perfect automation.
