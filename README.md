# Sagar Gupta — Portfolio Website

Single-page personal portfolio website for **Sagar Gupta**, a Backend Engineer with 6+ years of experience.

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties (Catppuccin Mocha), Flexbox, Grid
- **Vanilla JavaScript** — Modular section injection via `<script>` templates, Intersection Observer scroll animations, mobile menu
- **Zero build tools, zero frameworks** (only Google Fonts CDN)

## Design

- **Theme:** [Catppuccin Mocha](https://catppuccin.com) dark palette
- **Typography:** Space Grotesk (headings), Inter (body), JetBrains Mono (code)
- **Responsive:** Mobile-first, breakpoints at 480px, 768px, 1024px

## Sections

| Section | Description |
|---------|-------------|
| Hero | Full-viewport intro with animated background shapes |
| About | Professional summary, stats, resume download |
| Experience | Timeline layout — Barclays & TCG Digital |
| Skills | Categorized tag badges (Languages, Frameworks, Cloud, etc.) |
| Projects | Card grid — URL Shortener & Sales Forecasting |
| Education | IIT Kharagpur dual degree |
| Blog | "Coming Soon" placeholder |
| Contact | Email, LinkedIn, Phone links |

## File Structure

```
my-portfolio/
├── index.html              # Shell: nav, placeholders, back-to-top
├── styles/
│   └── main.css            # Catppuccin Mocha theme, responsive, animations
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
└── README.md               # This file
```

## Local Development

Open `index.html` directly in a browser — no server required. Sections are loaded via `<script>` tags so everything works on `file://` protocol.

Or serve with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment (GitHub Pages)

Push to the `main` branch. GitHub Pages serves from root `/`.

## Future Enhancements

- [ ] Blog posts (markdown-based)
- [ ] Light/Dark theme toggle (Catppuccin Latte)
- [ ] Custom domain
- [ ] Contact form backend
- [ ] Project detail modals
- [ ] Analytics
