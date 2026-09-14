# Personal Portfolio

A personal portfolio website built with a modern full-stack React setup. Features smooth scroll-reveal animations, dark/light mode, and a fully typed data layer so all personal content lives in one place.

**Live:** [mdtaquiimam.vercel.app](https://mdtaquiimam.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) + React 19 |
| Routing | TanStack Router (file-based) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui + Radix UI primitives |
| Animations | Motion (Framer Motion v11+) |
| Data Fetching | TanStack Query |
| Icons | Lucide React |
| Build | Vite 8 + Rolldown |
| Language | TypeScript 5 |

---

## Features

- **Dark / light mode** — persisted to `localStorage`, flash-free via inline script
- **Scroll-reveal animations** — `<Reveal>` wrapper using Motion's `useInView`
- **Single data file** — all personal content (`portfolio.ts`) with TypeScript interfaces; components are pure renderers
- **SSR-ready** — TanStack Start server renders the shell for fast first paint
- **Contact form** — Web3Forms integration, no custom backend required
- **Zero external image deps** — all assets self-hosted under `src/assets/`

---

## Project Structure

```
src/
├── assets/              # Images and static assets
├── components/
│   ├── portfolio/       # Page sections (Hero, About, Skills, Projects, …)
│   └── ui/              # shadcn/ui primitives (Button, Input, Textarea)
├── data/
│   └── portfolio.ts     # All personal content + TypeScript types
├── lib/
│   ├── utils.ts         # cn() helper
│   ├── error-capture.ts # Error boundary utilities
│   └── error-page.ts    # Shared error page content
├── routes/
│   ├── __root.tsx       # HTML shell, fonts, meta, theme script
│   └── index.tsx        # Home page (composes all sections)
├── router.tsx           # Router + QueryClient setup
├── server.ts            # Nitro server entry
├── start.ts             # Client entry
└── styles.css           # Global CSS + Tailwind theme tokens
```

---

## Getting Started

**Prerequisites:** Node.js ≥ 20 — install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
git clone https://github.com/<your-username>/myportfolio.git
cd myportfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```sh
npm run build      # Production build (SSR output in .output/)
npm run preview    # Preview the production build locally
npm run lint       # ESLint + Prettier check
npm run format     # Auto-format with Prettier
```

---

## Personalisation

All content — name, bio, skills, projects, work/education timeline, and social links — is centralised in [`src/data/portfolio.ts`](./src/data/portfolio.ts). Edit that file; the components update automatically.

---

## Deployment

The site deploys to **Vercel** with zero configuration. Just connect the repository and Vercel auto-detects the Vite build.

For other hosts that support Node.js server output, run `npm run build` and serve the `.output/` directory.
