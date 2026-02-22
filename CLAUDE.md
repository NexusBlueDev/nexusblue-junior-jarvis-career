# Junior Jarvis Career — Project-Specific Claude Code Instructions

## Workflow Rules
- **Always commit and push to GitHub before any task is considered complete.**
- Do not ask for approval before committing — authorized per established workflow.
- When bumping versions: update `?v=N` on ALL script/link tags in `index.html` AND bump `CACHE_NAME` in `sw.js`.

## Project
Kid-friendly AI career discovery tool for NexusBlue expo booths.
NOT a guessing game — a career path discovery experience.
Kids answer interest/personality questions → get a career match → see their AI future + success steps.
Pure client-side HTML5/CSS/JS with PWA support. No build tools, no bundler.

## Live URLs
- App: https://nexusbluedev.github.io/nexusblue-junior-jarvis-career/
- Repo: https://github.com/NexusBlueDev/nexusblue-junior-jarvis-career

## AI-First Design Principle
Static decision tree engine is the offline fallback.
`JJ.aiConfig` in `data.js` is the hook point for Claude API integration.

## Stack
- HTML5 + CSS3 + Vanilla JavaScript (ES5, no transpiler)
- Web Speech API (TTS only)
- Service Worker for offline PWA (current cache: `junior-jarvis-career-v3`)
- No external dependencies

## Architecture
- `js/data.js` — 8 careers with facts, aiImpact, aiSuccessSteps[], 12 questions, messages
- `js/engine.js` — Scoring engine (min 7 questions, 5pt lead required before reveal)
- `js/speech.js` — Web Speech API TTS wrapper
- `js/effects.js` — Particles, confetti, emoji reactions, Web Audio sounds
- `js/ui.js` — DOM, screens, career gallery, match screen, AI future screen (numbered steps)
- `js/metrics.js` — LocalStorage analytics (key: `jj_career_metrics`)
- `js/app.js` — Main controller: welcome → game → match → future → restart

## Game Flow
1. Welcome — browse career cards, click "Find My Career!"
2. Questions — 7-12 interest/personality questions (not career-skill questions)
3. Career Match — direct reveal, no yes/no confirmation
4. AI Future — AI impact paragraph + 5 numbered success steps
5. Restart — full engine + UI reset before returning to welcome

## Key Conventions
- Global namespace: `JJ` (window.JJ)
- No build step — scripts load via `<script>` tags in order in `index.html`
- All DOM manipulation through `JJ.ui` — no direct DOM access in `app.js`
- Speech through `JJ.speech`
- Career data structure: `{ id, name, emoji, fact, gradient, aiImpact, aiSuccessSteps[], props{} }`
- Property matrix: helps, creates, discovery, outdoor, art, tech, strategy, physical
- All career pairs must have ≥2 property differences

## Current Version: v3
## Docs: See HANDOFF.md and PUBLISHING_PIPELINE.md
