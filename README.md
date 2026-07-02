# Koushik Gudipelly — Portfolio

Dark glassmorphism portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Quick start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:3000

### 3. Build for production
```bash
npm run build
npm run start
```

---

## Deploy to Vercel (recommended — free)

### Option A: Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live in ~60 seconds.

### Option B: GitHub → Vercel (easiest)
1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import your repo → Deploy
4. Done — auto-deploys on every push

---

## Add your real domain

1. Buy a domain at Namecheap or Google Domains (e.g. koushikgudipelly.dev)
2. In Vercel dashboard → Project → Settings → Domains
3. Add your domain and follow the DNS instructions

---

## Customise

### Update your email and links
Edit `components/Contact.tsx`:
```tsx
{ label: "Email", href: "mailto:YOUR_EMAIL_HERE" }
{ label: "LinkedIn", href: "https://linkedin.com/in/YOUR_HANDLE" }
{ label: "GitHub",   href: "https://github.com/YOUR_HANDLE" }
```

### Add your resume PDF
Drop your resume file at:
```
public/resume.pdf
```
The download buttons already point to `/resume.pdf`.

### Update project live demo links
Edit `components/Projects.tsx` — replace `href: "#"` with real URLs.

### Update the domain in footer
Edit `app/page.tsx` — change `kg.dev · placeholder` to your real domain.

---

## Project structure

```
koushik-portfolio/
├── app/
│   ├── globals.css       # Base styles, font imports, keyframe animations
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx        # Sticky nav with scroll detection
│   ├── Orbs.tsx          # Ambient background orbs
│   ├── Hero.tsx          # Hero section with name, tags, CTAs
│   ├── PipelineAnimation.tsx  # Animated Kafka→Spark→API SVG
│   ├── Stats.tsx         # 4-column stat bar
│   ├── Projects.tsx      # Featured BofA project + 3 side projects
│   ├── Skills.tsx        # 3-column skill bars
│   └── Contact.tsx       # Contact section + email/LinkedIn/GitHub
├── public/
│   └── resume.pdf        # ← DROP YOUR RESUME HERE
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Next steps after launching

1. Write the fraud pipeline case study page (`app/case-study/page.tsx`)
2. Build and deploy the AI resume analyzer — link it from the project card
3. Add real GitHub links to the side projects
4. Register your domain and connect to Vercel
5. Submit to LinkedIn as your website URL
