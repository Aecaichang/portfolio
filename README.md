<div align="center">

# 🌊 Chanchai Tasujai — Portfolio

**Senior Quality Assurance Engineer**

Personal portfolio & online CV, designed as a clean paper-style document
in a "Stormy Morning" blue palette. Bilingual (ไทย / English).

[**🔗 me.aecaichang.com**](https://me.aecaichang.com)

![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## ✨ Features

- 📄 **Paper-document design** — CV-like page with card sections and subtle depth
- 🎨 **Stormy Morning palette** — `#384959` · `#6A89A7` · `#88BDF2` · `#BDDDFC`
- 🌏 **Bilingual** — Thai (`/`) and English (`/en`) from a single component
- 🪶 **Lucide icons** — consistent iconography for sections and contact info
- 🎞️ **Scroll-reveal animation** — IntersectionObserver, respects `prefers-reduced-motion`
- ⚡ **Zero-JS-framework** — static Astro output, fast by default
- 🔍 **SEO ready** — sitemap, robots.txt, hreflang, Open Graph meta

## 🧱 Tech Stack

| Layer      | Tool                                   |
| ---------- | -------------------------------------- |
| Framework  | [Astro 7](https://astro.build)         |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com) |
| Icons      | [Lucide](https://lucide.dev)           |
| Images     | `astro:assets` + Sharp                 |
| Deployment | [Vercel](https://vercel.com)           |

## 🗂️ Project Structure

```text
src/
├── components/
│   └── DocumentPage.astro   # The whole CV document (both languages)
├── layouts/
│   └── Base.astro           # HTML shell, fonts, SEO meta
├── locales/
│   ├── th.json              # Thai content
│   └── en.json              # English content
├── lib/
│   └── i18n.ts              # Locale helpers
└── pages/
    ├── index.astro          # ไทย
    └── en/index.astro       # English
```

## 🚀 Getting Started

```bash
git clone https://github.com/Aecaichang/portfolio.git
cd portfolio
npm install
npm run dev      # http://localhost:4321
```

| Command           | Action                       |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start local dev server       |
| `npm run build`   | Build production site        |
| `npm run preview` | Preview the production build |
| `npm run check`   | Type-check with astro check  |

## 🌐 Deployment

Pushes to `main` deploy automatically to Vercel → [me.aecaichang.com](https://me.aecaichang.com)

---

<div align="center">

Made with ☕ in Lamphun, Thailand

</div>
