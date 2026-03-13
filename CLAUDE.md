# Junior Jarvis Career — Project-Specific Claude Code Instructions

> Global rules loaded dynamically from Core DB via `~/.claude/CLAUDE.md` (v9.0 bootloader).
> Project-specific rules below override global rules where they conflict.

## Project Type
**Type:** Static PWA — GitHub Pages
No Supabase. No auth. No seed accounts. HTML5 + Vanilla JS (ES5), GitHub Pages hosted.

## Project Identity

```
What:    Kid-friendly AI career discovery tool for NexusBlue expo booths.
         NOT a guessing game — a career path discovery experience.
         Kids answer interest/personality questions → career match →
         see their AI future + concrete numbered success steps.
Mode:    HTML5 PWA (pure client-side — no build tools, no bundler)
Repo:    https://github.com/NexusBlueDev/nexusblue-junior-jarvis-career
Live:    https://nexusbluedev.github.io/nexusblue-junior-jarvis-career/
Stack:   HTML5 + CSS3 + Vanilla JS (ES5), Web Speech API (TTS only), Service Worker
```

## Project-Specific Rules
- When bumping versions: update `?v=N` on ALL `<script>`/`<link>` tags in `index.html` AND bump `CACHE_NAME` in `sw.js` together.

## Architecture

**Key files:**
- `js/data.js` — 8 careers with facts, aiImpact, aiSuccessSteps[], 12 questions, messages
- `js/engine.js` — Scoring engine (min 7 questions, 5pt lead required before reveal)
- `js/speech.js` — Web Speech API TTS wrapper
- `js/effects.js` — Particles, confetti, emoji reactions, Web Audio sounds
- `js/ui.js` — DOM, screens, career gallery, match screen, AI future screen (numbered steps)
- `js/metrics.js` — LocalStorage analytics (key: `jj_career_metrics`)
- `js/app.js` — Main controller: welcome → game → match → future → restart

**Conventions:**
- Global namespace: `JJ` (window.JJ) — all modules attach to this
- ES5 only — no arrow functions, no `let`/`const`, no template literals, no modules
- No build step — scripts load via `<script>` tags in order in `index.html`
- All DOM manipulation through `JJ.ui` — never direct DOM access in `app.js`
- Speech through `JJ.speech`

**Game flow:** Welcome → "Find My Career!" → Questions → Career Match (direct reveal, NO confirmation) → AI Future (impact + steps) → "Explore Again!"

**CRITICAL — No yes/no confirmation.** Match is presented as a confident recommendation.

**Career data structure:**
```javascript
{ id, name, emoji, fact, gradient[], aiImpact, aiSuccessSteps[], props{} }
```

**Property matrix:** `helps`, `creates`, `discovery`, `outdoor`, `art`, `tech`, `strategy`, `physical`

**Restart critical fix:** `restart()` MUST call `JJ.engine.reset()`, clear question text/hint, and
re-enable answer buttons — without this the first question breaks on restart without hard refresh.

---

## Stack Specifics

```
Language:       HTML5 + CSS3 + Vanilla JS (ES5)
Hosting:        GitHub Pages (auto-deploy on push to main)
Service Worker: junior-jarvis-career-vN (bump together with script tags)
Storage key:    jj_career_metrics
Current version: v3
```
