# Koushik Gudipelly — Portfolio

Personal portfolio of **Koushik Gudipelly** — a backend, fullstack, and ML engineer building real-time fraud detection platforms, streaming pipelines, and distributed microservices.

**Live:** https://koushik-portfolio-two.vercel.app

---

## Overview

A single-page portfolio with a dark, glassmorphism aesthetic and scroll-driven motion. It highlights professional experience, an in-depth engineering case study, side projects, and a skills breakdown.

Key sections:

- **Hero** — intro, availability, and an animated data-pipeline graphic
- **Journey** — an animated timeline merging work history and education
- **Projects** — a featured Bank of America fraud-detection platform plus side projects
- **Case study** — a dedicated deep-dive (`/case-study`) covering the problem, architecture decisions, a real fraud scenario, build timeline, and outcomes
- **Skills** — categorized core competencies and a broader tooling list
- **Contact** — email, LinkedIn, and GitHub

---

## Tech stack

| Area        | Tools                                             |
| ----------- | ------------------------------------------------- |
| Framework   | Next.js 14 (App Router), React 18                 |
| Language    | TypeScript                                        |
| Styling     | Tailwind CSS                                       |
| Animation   | Motion (`motion/react`), GSAP, CSS keyframes      |
| Graphics    | OGL (WebGL background), inline SVG                 |
| Deployment  | Vercel                                            |

Dynamic Open Graph image and favicon are generated at the edge via `next/og`.

---

## Getting started

```bash
# install dependencies
npm install

# run the dev server → http://localhost:3000
npm run dev

# production build
npm run build && npm run start
```

---

## Project structure

```
koushik-portfolio/
├── app/
│   ├── globals.css            # Base styles, fonts, keyframe animations
│   ├── layout.tsx             # Root layout + SEO / social metadata
│   ├── page.tsx               # Home — assembles all sections
│   ├── opengraph-image.tsx    # Generated OG social card
│   ├── icon.svg               # Favicon
│   └── case-study/page.tsx    # Fraud-detection case study
├── components/
│   ├── Navbar.tsx             # Sticky nav with scroll detection
│   ├── Orbs.tsx               # Ambient background orbs
│   ├── Hero.tsx               # Hero section
│   ├── PipelineAnimation.tsx  # Animated Kafka → Spark → API graphic
│   ├── Stats.tsx              # Headline metric bar
│   ├── Journey.tsx            # Animated experience + education timeline
│   ├── Projects.tsx           # Featured project + side projects
│   ├── Skills.tsx             # Skill categories + tooling
│   ├── Contact.tsx            # Contact links
│   └── ui/                    # Reusable animation primitives
│       ├── Aurora.tsx
│       ├── BlurText.tsx
│       ├── CountUp.tsx
│       └── ScrollReveal.tsx
├── public/
│   ├── resume.pdf
│   └── fraud-pipeline-architecture.svg
└── ...config
```

---

## Deployment

Deployed on Vercel with automatic builds on every push to `main`.

Set `NEXT_PUBLIC_SITE_URL` to the production domain so Open Graph and Twitter image URLs resolve absolutely (falls back to the Vercel deployment URL if unset).

---

## Contact

- **Email:** gudipellykoushik@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/koushik-gudipelly/
- **GitHub:** https://github.com/kgudipe
