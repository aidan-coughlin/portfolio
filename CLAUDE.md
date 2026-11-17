# CLAUDE.md: Aidan Coughlin portfolio site

## What this is
Personal portfolio for Aidan Coughlin: Information Science at CU Boulder, CS minor, class of 2027.
He is applying to entry-level **product/UX design** roles, plus **product management** and possibly **software engineering**.
The site replaces an older Framer site. It is hand-coded so he has full control and consistent responsiveness. The fact that he coded it himself is part of the pitch.

**Audience:** recruiters and hiring managers who glance for a few seconds, skim for under a minute, and read in full only if the work earns it.
Every change should help them answer three questions quickly:
1. What does he do?
2. What level is he?
3. Is his work relevant to my opening?

## Stack and rules
- Plain HTML, CSS and vanilla JS. **No framework, no build step, no npm dependencies** unless Aidan asks for them.
- Every path is **relative** (`css/styles.css`, `../assets/...`), so the site works on GitHub Pages under a sub-path. Never use root-absolute `/` paths.
- Fonts are **self-hosted** in `assets/fonts/`. Don't add Google Fonts or other third-party requests.
- `js/main.js` is progressive enhancement only. The site must work fully with JS disabled.

## File map
```
index.html            landing: header, short bio + small ASCII portrait, 2 project cards
about.html            full original bio
projects/imin.html    case study (skeleton, in progress)
projects/rotc.html    case study (skeleton, summary box filled)
css/styles.css        all styles, numbered sections 0–10; design tokens in :root
js/main.js            footer year; plays card animations on touch screens (.is-active)
assets/               portrait.webp/.jpg, aidan-coughlin-resume.pdf, fonts/
```

**The header and footer are copied into all 4 HTML files.** Any change to one must be made in all four. Pages in `projects/` use the `../` prefix on every link.

## Design rules (keep these)
- White background, **Courier Prime** throughout, black ink (`--ink: #111`), mostly minimalist.
- Header: "aidan coughlin" + LinkedIn icon on the left; `works`, `about` and a black pill **Resume** button (downloads the PDF) on the right; a 2px black bottom border.
- **Small, light interactions only:** sliding nav underlines, a small 3px card lift (square corners, no shadow), the arrow nudge, and the tiny card illustrations.
- No carousels, autoplay, scroll-jacking, heavy animation or large images. Speed is a hiring signal.
- Every animation must be disabled by the `prefers-reduced-motion` block at the end of `styles.css`.
- Use the tokens (`--ink`, `--muted`, `--soft`, `--hairline`, `--link`, `--live`, `--alert`, `--radius`, `--ease`, `--pad-x`). Don't hard-code new colors without a reason.
- In-paragraph links are blue and underlined (`.text-link`). Nav-style links use `.nav-link`.

## Landing page layout (deliberate; don't undo it)
- The first screen (`.hero`, `min-height: calc(100svh - header)`) shows the intro centered in the free space and the **project cards pinned toward the bottom**, so the work is visible without scrolling on desktop and laptop screens (checked down to 1024×768).
- The bio stays **short**: a bold one-line positioning statement that names a role, then 2–3 sentences. The long version lives on `about.html`.
- The portrait is intentionally small. The tilt on hover is the only effect on it.
- Cards share one format: illustration area → meta row (`NN · discipline · context` + status pill) → title → one-sentence description → tags + "view project →".
- Card illustrations play on `:hover`, `:focus-visible` and `.is-active` (touch). Any new card illustration must support all three.

## Breakpoints
- `≤760px`: one column, cards stacked, hero no longer full-height.
- `≤420px`: smaller header; the `works` link is hidden because the work sits directly below.
- `min-width 761px and max-height 800px`: tightened for short laptop screens.

## Case-study pages
Use this order (from hiring-manager research):
1. **Summary box** (`<dl class="summary">`): role, team, timeline, methods/tools, outcome. This is the one part a recruiter is sure to read.
2. Problem / context, and why it mattered
3. Research → insights → design implications
4. Process told as **decisions**: alternatives considered, dead ends, trade-offs (not a list of tasks done)
5. Solution / prototype, with annotated visuals
6. Outcome (numbers if there are any, otherwise qualitative signals)
7. Reflection: what he learned, what he'd do differently

Keep pages skimmable: short paragraphs, clear headings, captioned images. If a student project has unrealistic constraints, say so up front.
Replace `.placeholder` blocks as real content arrives.

## The projects
- **imin** (in progress): a mobile-first, AI-assisted group trip/event planning app for college-aged young adults that removes the friction of planning in wall-of-text group chats. Designed iteratively, from early concept to prototype. It may be developed in other sessions; keep the card and page in sync with its status.
- **Air Force ROTC information ecosystem** (complete, Spring 2026): a research project with a 3-person team. Aidan conducted 3 cadet interviews and analyzed 3 organizational artifacts to map how information reaches cadets across 4 platforms and ~20 flights. The team synthesized the findings in Miro into a social world model and an information journey map, which surfaced 3 pain points and led to 3 recommendations (including an urgent-alert channel and a cadet onboarding guide). It showcases interview protocol design and information-flow diagrams.

Other background (on the about page and resume, not projects): SDET intern at Concentrix (2024), where he built an AI meeting-summary tool now used by 250+ people; CU Hyperloop software team.

## Open TODOs
- [ ] Replace `https://www.linkedin.com/in/your-handle` (header + footer on all 4 pages)
- [ ] Confirm Aidan's role on the ROTC team (`projects/rotc.html` summary box)
- [ ] Fill in the case-study placeholders
- [ ] Host: GitHub repo → GitHub Pages, with a custom domain later if wanted
- [ ] Add a favicon and an Open Graph image

## Working conventions
- **Preview:** `python3 -m http.server 8000` from this folder, then open http://localhost:8000.
- **Before calling a change done,** check widths 1440, 1366×768, 1024×768, 768, 390 and 360: no horizontal scroll, and on desktop both cards still fit in the first screen.
- Keep pages accessible: meaningful `alt` text, decorative SVGs `aria-hidden`, visible `:focus-visible` styles, sensible heading order (one `h1` per page).
- Each page needs a `<title>` and meta description that include his name and role or the project name.
- When replacing the resume, keep the filename `aidan-coughlin-resume.pdf` so the links keep working.
- Write copy in Aidan's voice: plain, lowercase-friendly in UI labels (`works`, `about`, `view project`), and specific. Don't invent metrics or facts. Ask him if something isn't in this file or his resume.
- Ask before adding dependencies, restructuring files, or changing the visual identity.
