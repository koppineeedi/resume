# Koppineedi Vamsi Lakshmi Satya Kumari — Full Stack Developer Portfolio

A polished, responsive personal portfolio website built with **React + Vite + Tailwind CSS**, targeting Full Stack Developer internship and placement opportunities.

---

## 🚀 Running Locally

### Prerequisites
- Node.js ≥ 16
- pnpm (recommended) — `npm install -g pnpm`

### Steps

```bash
# 1. Navigate to the project folder
cd portflio

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm run dev
```

The site will open at **http://localhost:5173**

---

## 🏗️ Building for Production

```bash
pnpm run build
```

Output is placed in the `dist/` folder. Preview the production build locally:

```bash
pnpm run preview
```

---

## ☁️ Deploying to Vercel

### Option A — Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# From the project folder, run:
vercel

# Follow the prompts:
# - Set up and deploy: Y
# - Which scope: (your account)
# - Link to existing project: N
# - Project name: satya-portfolio (or any name)
# - Root directory: ./  (press Enter)
# - Override build command: pnpm run build
# - Override output directory: dist
```

### Option B — Vercel Dashboard (GUI)

1. Push this folder to a **new** GitHub repository (e.g. `satya-portfolio`).
2. Go to [vercel.com](https://vercel.com) → **New Project**.
3. Import your new GitHub repository.
4. Vercel auto-detects Vite. Confirm:
   - **Framework**: Vite
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

> The included `vercel.json` already configures SPA routing rewrites.

---

## 📁 Project Structure

```
portflio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with mobile hamburger
│   │   ├── Hero.jsx         # Animated hero with typing effect
│   │   ├── About.jsx        # About + highlight cards + stats
│   │   ├── Skills.jsx       # Categorised skill groups
│   │   ├── Projects.jsx     # Filterable project cards
│   │   ├── Education.jsx    # Timeline-style education
│   │   ├── WhatIBuild.jsx   # Career interests section
│   │   ├── Contact.jsx      # Contact info + mailto CTA
│   │   └── Footer.jsx       # Footer with links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Tailwind + custom utilities
├── index.html               # SEO meta, fonts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json              # SPA rewrite rules
└── package.json
```

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono (Google Fonts)

---

## 📌 Important Notes

- **Existing cybersecurity portfolio is completely separate** at [satya-cybersecurity-portfolio.vercel.app](https://satya-cybersecurity-portfolio.vercel.app/) — it has not been modified.
- No live demo URLs are fabricated — all project links go to real GitHub repositories.
- No fake certifications, employment, or achievements are included.
