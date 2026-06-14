# Agents.md — Sagar Gupta Portfolio Project Summary

## Project Overview

A single-page personal portfolio website for **Sagar Gupta**, a Backend Engineer with 6+ years of experience (Barclays, IIT Kharagpur). Built with pure HTML/CSS/JS using the **Catppuccin Mocha** dark theme. No frameworks, no build tools — deployable instantly on GitHub Pages.

---

## Tech Stack

- **HTML5** — Semantic, single-page layout
- **CSS3** — Catppuccin Mocha custom properties, Flexbox, Grid, responsive breakpoints
- **Vanilla JavaScript** — Modular section injection via `<script>` templates, Intersection Observer scroll animations, mobile hamburger menu, active nav highlighting
- **Google Fonts** — Space Grotesk (headings), Inter (body), JetBrains Mono (code)

---

## Catppuccin Mocha Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Background | Base | `#1e1e2e` |
| Navbar/Footer | Mantle | `#181825` |
| Darker bg | Crust | `#11111b` |
| Cards/Surfaces | Surface 0 | `#313244` |
| Primary Text | Text | `#cdd6f4` |
| Subtext | Subtext 0 | `#a6adc8` |
| Primary Accent | Mauve | `#cba6f7` |
| Secondary | Blue | `#89b4fa` |
| Success | Green | `#a6e3a1` |
| Warm | Peach | `#fab387` |
| Decorative | Pink | `#f5c2e7` |
| Highlights | Yellow | `#f9e2af` |
| Alt Accent | Teal | `#94e2d5` |
| Important | Red | `#f38ba8` |

---

## Site Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Navigation Bar** | Fixed top, "SG" logo, 8 links, hamburger on mobile, active section highlight |
| 2 | **Hero** | Full-viewport, animated gradient blobs, name + tagline, CTA buttons |
| 3 | **About Me** | Professional summary, stats (6+ yrs, IIT KGP, 2FA), profile photo, resume download |
| 4 | **Experience** | Timeline — Barclays Backend Engineer (2019–Present, 8 bullets) + TCG Digital Intern (2018) |
| 5 | **Skills** | 6 categories: Languages, Frameworks, Architecture, Databases, Cloud/DevOps, Practices |
| 6 | **Projects** | Card grid — URL Shortener (Spring Boot/Redis/MySQL/AWS) + Sales Forecasting (Python) |
| 7 | **Education** | IIT Kharagpur, Dual Degree (B.Tech + M.Tech), Industrial Engineering, CGPA 7.39 |
| 8 | **Blog** | "Coming Soon" placeholder with pink accents and "Notify Me" mailto link |
| 9 | **Contact** | Email, LinkedIn, Phone — all functional with icons |
| 10 | **Back to Top** | Circular button at page bottom |

---

## Tasks Completed (Acceptance Criteria)

- [x] All sections render correctly on mobile, tablet, and desktop
- [x] Catppuccin Mocha colors consistently applied (CSS variables)
- [x] Smooth scroll navigation with active section highlighting
- [x] Resume PDF downloadable (`newCV.pdf`)
- [x] Contact links functional (email, LinkedIn, phone)
- [x] Blog section shows "Coming Soon" placeholder with Notify Me
- [x] Scroll-triggered reveal animations (Intersection Observer)
- [x] No external dependencies beyond Google Fonts
- [x] GitHub Pages deployment ready (static, push to main)

---

## File Structure

```
my-portfolio/
├── index.html              # Main single-page HTML
├── styles/
│   └── main.css            # All styles (Catppuccin, responsive, animations)
├── scripts/
│   └── main.js             # Section injection, scroll animations, mobile menu
├── sections/
│   ├── hero.js             # Hero section template
│   ├── about.js            # About section template
│   ├── experience.js       # Experience timeline template
│   ├── skills.js           # Skills tags template
│   ├── projects.js         # Project cards template
│   ├── education.js        # Education card template
│   ├── blog.js             # Blog coming soon template
│   └── contact.js          # Contact links template
├── assets/
│   └── images/
│       └── photo.jpeg      # Profile photo
├── newCV.pdf               # Downloadable resume
├── agents.md               # This file — project summary
└── README.md               # Project documentation
```

---

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| < 480px | Small mobile |
| < 768px | Mobile (hamburger menu, single column) |
| 768–1024px | Tablet |
| > 1024px | Desktop (full layout) |

---

## Future Enhancements

- [ ] Blog with actual posts (markdown-based)
- [ ] Light/Dark theme toggle (Catppuccin Latte ↔ Mocha)
- [ ] Custom domain setup
- [ ] Contact form backend (Formspree / AWS Lambda)
- [ ] Project detail modals or dedicated pages
- [ ] Analytics (Plausible, Umami)
- [ ] RSS feed for blog
