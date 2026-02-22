# Junior Jarvis Career — Project-Specific Claude Code Instructions

## Project
Kid-friendly, voice-driven Akinator-style AI guessing game for expo booth.
Guesses the career the player is thinking of, then explains how AI/automation/robots
will impact that career and how they can succeed. Pure client-side HTML5/CSS/JS with PWA support.
No build tools, no bundler.

## AI-First Design Principle
This project is designed AI-first. The static decision tree engine is the offline fallback.
The architecture supports swapping in an LLM backend (Claude API) for dynamic conversation,
adaptive questioning, and natural language understanding. The `JJ.aiConfig` object in `data.js`
is the configuration point for AI provider integration.

## Stack
- HTML5 + CSS3 + Vanilla JavaScript (ES5 compatible, no transpiler needed)
- Web Speech API (TTS only)
- Service Worker for offline PWA
- No external dependencies — fully self-contained

## Architecture
- `js/data.js` — Career data, questions, messages, AI impact/success content, AI config
- `js/engine.js` — Scoring-based elimination engine (static fallback)
- `js/speech.js` — Web Speech API wrapper with graceful degradation
- `js/ui.js` — DOM manipulation, screen management, AI future screen
- `js/metrics.js` — LocalStorage engagement analytics
- `js/effects.js` — Particles, confetti, emoji reactions, Web Audio API sounds
- `js/app.js` — Main controller, game flow orchestration

## Game Flow
1. Welcome screen — browse careers, pick one, click Let's Play
2. Question screen — answer yes/no/maybe questions
3. Guess screen — Jarvis reveals its guess, player confirms
4. AI Future screen (correct guess) — shows AI impact + success tips for that career
5. Result screen (wrong guess only) — shows retry message

## Career Data Structure
Each career in `JJ.characters` has:
- `id`, `name`, `emoji`, `fact` — standard display fields
- `gradient` — two-color array for card background
- `aiImpact` — how AI/automation/robots will affect this career
- `aiSuccess` — how the player can succeed in this career in the AI age
- `props` — boolean property map used by the scoring engine

## Conventions
- Global namespace: `JJ` (window.JJ)
- No build step — scripts load via `<script>` tags in order
- Files reference each other through the shared `JJ` namespace
- All DOM manipulation through `JJ.ui` — no direct DOM access elsewhere
- Speech through `JJ.speech` — handles unavailable APIs gracefully

## Key Decisions
- 8 careers: Doctor, Artist, Scientist, Coder, Leader, Engineer, Teacher, Explorer
- 8 properties: helps, creates, discovery, outdoor, art, tech, strategy, physical
- All career pairs have at least 2 property differences (engine requirement)
- AI Future screen only shows on correct guess (not wrong guess path)
- Same NexusBlue branding and visual design as original Junior Jarvis

## Testing
Open `index.html` in Chrome or Edge. Works from file:// protocol (no server needed for basic testing).
For PWA/Service Worker testing, serve via local HTTP server (`python -m http.server` or equivalent).
