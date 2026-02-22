# Junior Jarvis Career — Handoff Document
**Last Updated:** 2026-02-22
**Status:** Live on GitHub Pages, ready for expo booth

---

## Live URLs

| Environment | URL |
|-------------|-----|
| **Live App** | https://nexusbluedev.github.io/nexusblue-junior-jarvis-career/ |
| **GitHub Repo** | https://github.com/NexusBlueDev/nexusblue-junior-jarvis-career |
| **Original JJ** | https://nexusbluedev.github.io/nexusblue-junior-jarvis/ |

---

## What This App Is

Junior Jarvis Career is a kid-friendly AI career discovery tool built for NexusBlue expo booths.
It is NOT a guessing game — it is a career path discovery experience.

**Flow:**
1. Welcome screen — browse 8 careers, click cards to learn about them
2. Click "Find My Career!" — answer 7–12 natural interest/personality questions
3. Career Match screen — "Based on your interests, your best career match is..."
4. AI Future screen — shows how AI/robots/automation will impact that career + 5 numbered steps to succeed
5. "Explore Again!" — resets cleanly for the next person

**8 Careers:** Doctor 🩺, Artist 🎨, Scientist 🔬, Coder 💻, Leader 👑, Engineer ⚙️, Teacher 📚, Explorer 🌿

---

## What Was Built This Session (2026-02-22)

### Created from Scratch
This entire project was created in this session based on the original `nexusblue-junior-jarvis` repo.

| File | Description |
|------|-------------|
| `index.html` | Full app shell — 4 screens (welcome, game, match, future) |
| `css/styles.css` | Full NexusBlue-branded styles, responsive, AI future screen styles |
| `js/data.js` | 8 careers with facts, AI impact text, 5-step success guides, 12 questions |
| `js/engine.js` | Scoring engine (copied + tuned: min 7 questions, requires 5pt lead) |
| `js/speech.js` | Web Speech API TTS (copied from original) |
| `js/effects.js` | Particles, confetti, sounds (copied from original) |
| `js/ui.js` | DOM management — gallery, match screen, AI future screen with numbered steps |
| `js/metrics.js` | LocalStorage analytics (storage key: `jj_career_metrics`) |
| `js/app.js` | Game flow controller — no yes/no confirmation, direct career reveal |
| `manifest.json` | PWA manifest |
| `sw.js` | Service worker — network-first, cache v3 |
| `CLAUDE.md` | Claude Code project instructions |

### Key Design Decisions Made
1. **No yes/no confirmation** — removed "Did I guess right?" entirely. App presents the career match as a confident recommendation based on answers.
2. **Exploratory questions** — all 12 questions are personality/lifestyle based, not career-skill based. They don't lead to an obvious answer.
3. **3-tier question structure**: Broad interest (asked first) → Specific interest → Refinement
4. **Numbered success steps** — each career has 5 concrete, actionable steps rendered as a styled numbered list with orange badge numbers.
5. **Engine tuning** — minimum 7 questions before match reveal (was 5), requires 5-point lead (was 4).

### Bugs Fixed
| Bug | Fix |
|-----|-----|
| First question broke on restart without CTRL+SHIFT+R | `restart()` now calls `engine.reset()`, clears question text/hint, re-enables answer buttons |
| Stale service worker serving old JS | Bumped SW cache to `v3`, script tags to `?v=3` |

### Commits This Session
```
785da42  fix: full state reset on restart + bump cache to v3
7276644  feat: career discovery flow — exploratory questions + numbered steps
70c397b  feat: initial build of Junior Jarvis Career
```

---

## File Structure

```
nexusblue-junior-jarvis-career/
├── index.html                  ← App shell (4 screens)
├── manifest.json               ← PWA config
├── sw.js                       ← Service worker (cache: junior-jarvis-career-v3)
├── CLAUDE.md                   ← Claude Code instructions
├── HANDOFF.md                  ← This file
├── PUBLISHING_PIPELINE.md      ← App store publishing strategy
│
├── css/
│   └── styles.css?v=3          ← All styles, NexusBlue branded
│
├── js/
│   ├── data.js?v=3             ← Careers, questions, messages
│   ├── engine.js?v=3           ← Scoring engine
│   ├── speech.js?v=3           ← Web Speech API TTS
│   ├── effects.js?v=3          ← Particles, confetti, Web Audio sounds
│   ├── ui.js?v=3               ← DOM, screens, gallery, match/future screens
│   ├── metrics.js?v=3          ← LocalStorage analytics
│   └── app.js?v=3              ← Main controller, game flow
│
├── assets/
│   ├── icon-192.svg
│   └── icon-512.svg
│
└── logo/
    ├── NexusBlueLogo2white_backandblue_trans.png
    └── background_jarvis_image.jpg
```

---

## Career Data Structure

Each career object in `js/data.js` (`JJ.characters` array):

```javascript
{
  id: 'doctor',                     // unique ID
  name: 'Doctor',                   // display name
  emoji: '🩺',                      // card emoji
  fact: '...',                      // shown on welcome gallery card + match screen
  gradient: ['#00ACC1', '#006064'], // card background colors [from, to]
  aiImpact: '...',                  // paragraph: how AI changes this career
  aiSuccessSteps: [                 // array of 5 strings: concrete action steps
    'Step 1...',
    'Step 2...',
    ...
  ],
  props: {                          // boolean properties used by scoring engine
    helps: true,
    creates: false,
    discovery: true,
    outdoor: false,
    art: false,
    tech: true,
    strategy: false,
    physical: true
  }
}
```

---

## Property Matrix (Engine Logic)

Every career pair has at least 2 property differences — required for the engine to discriminate properly.

|          | helps | creates | discovery | outdoor | art | tech | strategy | physical |
|----------|-------|---------|-----------|---------|-----|------|----------|---------|
| Doctor   | ✓ |   | ✓ |   |   | ✓ |   | ✓ |
| Artist   |   | ✓ |   |   | ✓ |   |   |   |
| Scientist|   |   | ✓ | ✓ |   | ✓ |   |   |
| Coder    |   | ✓ |   |   |   | ✓ |   |   |
| Leader   | ✓ |   |   |   |   |   | ✓ |   |
| Engineer |   | ✓ | ✓ |   |   | ✓ |   | ✓ |
| Teacher  | ✓ |   |   |   | ✓ |   |   |   |
| Explorer |   |   | ✓ | ✓ |   |   |   | ✓ |

---

## Known Limitations / Future Improvements

| Item | Notes |
|------|-------|
| Only 8 careers | Good for expo booth. Could expand to 12-15 for a broader tool. |
| Static engine | AI-first architecture is in place — `JJ.aiConfig` in `data.js` is the hook for a Claude API integration when ready. |
| No analytics dashboard | `jj_career_metrics` stored in localStorage. Consider a simple admin page or posting to a backend for expo insights. |
| Web Speech API | Works in Chrome/Edge. Degrades gracefully (no crash) in Firefox/Safari. |
| QR code for booth | Not yet created — see Next Steps below. |

---

## Next Steps (Prioritized)

### Before the Expo
- [ ] **Test on target device** (tablet/iPad) at `nexusbluedev.github.io/nexusblue-junior-jarvis-career/`
- [ ] **Create QR code** pointing to the GitHub Pages URL for booth signage (use qr-code-generator.com or similar)
- [ ] **Test Web Speech** on the expo device specifically — some tablets need the tap overlay to unlock speech
- [ ] **Run through all 8 careers** to verify each match feels accurate

### After the Expo
- [ ] **Google Play submission** — see `PUBLISHING_PIPELINE.md`. $25 one-time, ~1 day of work.
- [ ] **Set up Capacitor + GitHub Actions pipeline** using this repo as the template
- [ ] **Collect booth feedback** — what questions confused kids? What careers felt wrong?
- [ ] **Consider adding a "share your result" screen** with the career card for social sharing

### Future App Ideas (Same Architecture)
- Junior Jarvis College — help teens pick a college major
- Junior Jarvis Planet — environmental/sustainability quiz
- Junior Jarvis Entrepreneur — discover if you have a business mindset

---

## Branch / Deployment Notes

- **Branch:** `main` — this is the only branch
- **Deployment:** GitHub Pages auto-deploys on every push to `main`
- **Deploy time:** ~1-2 minutes after push
- **Cache busting:** Increment `?v=N` on all `<script>` and `<link>` tags + bump `CACHE_NAME` in `sw.js` when you need users to get fresh files
- **Current version:** `v3`

---

## Relationship to Original Junior Jarvis

This project is a sibling of `nexusblue-junior-jarvis` (AI job guessing game).
They share the same visual design, branding, and architecture but are entirely separate codebases.

| | nexusblue-junior-jarvis | nexusblue-junior-jarvis-career |
|--|------------------------|-------------------------------|
| Purpose | Guess an AI job persona | Discover your career path |
| Confirmation | Yes/No after guess | No confirmation — direct reveal |
| End screen | Correct/Wrong result | AI Future + numbered success steps |
| Target | Kids learning about AI jobs | Kids discovering career interests |

---

## Claude Code Notes

- Global namespace: `JJ` (window.JJ)
- No build step — all scripts loaded via `<script>` tags in `index.html`
- All DOM manipulation goes through `JJ.ui` — never direct DOM access in `app.js`
- Always commit and push to GitHub before considering any task complete
- When bumping versions: update `?v=N` in all script/link tags in `index.html` AND bump `CACHE_NAME` in `sw.js`
