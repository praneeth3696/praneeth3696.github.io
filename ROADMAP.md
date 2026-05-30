# praneeth-dev — Build Roadmap

> Documentation of how this personal portfolio website was built from scratch in a single session.
> Live at: https://praneeth3696.github.io

---

## What We Built

A fully static personal portfolio website with:
- Dark hacker aesthetic (deep black + electric green `#00ff41`)
- Typewriter animation in the hero section
- Modular skills, projects, and contact links (add new entries by editing arrays in `main.js`)
- Zero dependencies — no frameworks, no build tools
- Hosted free on GitHub Pages

---

## Phase 1 — Environment Check

**Goal:** Confirm local tools are ready.

Verified:
- Node.js v26.0.0 ✅
- Git 2.50.1 (Apple Git) ✅

---

## Phase 2 — Project Structure

**Goal:** Create the folder structure locally.

Used **antigravity CLI** in the working directory with a crafted prompt.

Final structure created:
```
praneeth-dev/
├── .gitignore          ← ignores node_modules, .env, .DS_Store, *.log
├── README.md
├── blog/               ← reserved for future private blog (Node.js)
│   ├── package.json
│   ├── posts/
│   ├── server.js
│   └── views/
└── docs/               ← static portfolio site (served by GitHub Pages)
    ├── index.html
    └── assets/
        ├── css/
        │   └── style.css
        ├── js/
        │   └── main.js
        └── images/
```

> Note: Originally named `public/`, renamed to `docs/` so GitHub Pages can serve it directly from the branch root.

---

## Phase 3 — Site Build

**Goal:** Generate complete HTML/CSS/JS for the portfolio.

Used antigravity CLI with a detailed prompt specifying:
- Owner details (name, GitHub, LinkedIn)
- Section order (Nav, Hero, About, Skills, Projects, Contact, Footer)
- Typewriter cycling through three taglines
- Modular JS arrays for Skills, Projects, Contact Links
- Google Fonts: JetBrains Mono
- No build step, no bundler — GitHub Pages compatible

### Files written:
| File | What it does |
|---|---|
| `docs/index.html` | Full page structure, semantic HTML5 |
| `docs/assets/css/style.css` | CSS variables, animations, responsive layout |
| `docs/assets/js/main.js` | Data arrays + dynamic DOM rendering + typewriter |
| `README.md` | Project docs with live site link and how-to guide |

---

## Phase 4 — GitHub Setup & Deploy

**Goal:** Push to GitHub and go live.

### Steps taken:

1. Renamed `public/` → `docs/` (GitHub Pages requirement)
2. Created new repo named exactly `praneeth3696.github.io` on GitHub (Public, no README)
3. Removed wrong remote, added correct one:
```bash
git remote remove origin
git remote add origin https://github.com/praneeth3696/praneeth3696.github.io.git
git push -u origin main
```
4. In repo Settings → Pages:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/docs`
   - Saved

### Result:
Site went live at **https://praneeth3696.github.io** ✅

---

## How to Update the Site

### Add a new skill
Open `docs/assets/js/main.js`, find the `SKILLS` array at the top, add one object:
```js
{ name: "Rust", icon: "⚙️", category: "Language" },
```

### Add a new project
Find the `PROJECTS` array, add one object:
```js
{
  name: "SecureGate",
  description: "Linux-based secure network gateway with NAT, DHCP, iptables firewall and real-time threat monitoring.",
  tags: ["Linux", "Networking", "Python", "Scapy", "Security"],
  githubUrl: "https://github.com/praneeth3696/securegate"
},
```

### Add a new contact link
Find the `CONTACT_LINKS` array, add one object:
```js
{ name: "Twitter", icon: "🐦", url: "https://twitter.com/yourhandle" },
```

### Deploy changes (via antigravity CLI)
Paste this prompt into your agy CLI from inside `~/praneeth-dev`:
```
Stage all changes, write a short conventional commit message describing what changed,
commit, and push to origin main.
```

Or manually:
```bash
git add .
git commit -m "feat: add SecureGate project"
git push
```
GitHub Pages auto-deploys within ~60 seconds after every push to `main`.

---

## What's Next (Planned)

| Phase | What | Status |
|---|---|---|
| Custom domain | Get `.me` domain from Namecheap (free via GitHub Education Pack), point to GitHub Pages | ⬜ Planned |
| Private blog | Node.js/Express app, markdown posts, session-based login (only you), deploy on Railway | ⬜ Planned |
| More projects | Add SecureGate, SlotSync, ATM Refill system to PROJECTS array | ⬜ Planned |
| Profile photo | Add photo to hero section | ⬜ Planned |

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| Fonts | JetBrains Mono via Google Fonts |
| Hosting | GitHub Pages (free) |
| Version Control | Git + GitHub |
| CLI Tool | Antigravity (agy) |
| Future backend | Node.js + Express (blog) |

---

*Built in one session. May 30, 2026.*
