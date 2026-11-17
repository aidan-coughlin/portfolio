# aidan coughlin — portfolio

Plain HTML/CSS/JS. No framework and no build step, so it deploys anywhere that serves static files (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Structure
```
index.html              landing page: header, short bio + portrait, 2 project cards
about.html              full bio
projects/imin.html      case-study page (skeleton)
projects/rotc.html      case-study page (skeleton, summary filled in)
css/styles.css          all styles; tokens at the top, responsive rules near the end
js/main.js              optional extras (footer year, plays card animations on touch screens)
assets/                 portrait, resume PDF, self-hosted Courier Prime fonts
```

## Preview locally
Run this from this folder, then open http://localhost:8000. Opening the files directly with file:// mostly works, but the "home" links point to `./`, which needs a server.
```
python3 -m http.server 8000
```

## TODO before publishing
- [ ] Replace `https://www.linkedin.com/in/your-handle` (appears on every page: header + footer)
- [ ] Check the bio and status line wording in `index.html`
- [ ] Confirm your role on the ROTC team in `projects/rotc.html`
- [ ] Update `assets/aidan-coughlin-resume.pdf` whenever the resume changes (keep the same filename)

## Adding a project
Copy one of the `<a class="card">` blocks in `index.html` and copy a page in `projects/`. The case-study pages follow: summary header → problem → research → iterations → solution → outcome → reflection.
