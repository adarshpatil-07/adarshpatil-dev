# Adarsh Patil | Developer Portfolio

A personal developer portfolio built with React, TypeScript, and TanStack Start. It showcases my projects, technical skills, open-source contributions, experience, and learning journey as a Computer Engineering student.

**Live Website:** [adarshpatil.runs-on.dev](https://adarshpatil.runs-on.dev/)

![Portfolio Preview](https://github.com/user-attachments/assets/1c9421b9-1214-4309-99b1-36910d07edd6)

---

## Overview

The portfolio brings together my development work and technical interests in one place. It features a responsive interface, dedicated sections for projects and skills, and a centralized data structure that makes personal content easy to maintain.

## Features

- **Responsive Design:** Layouts optimized for desktop, tablet, and mobile.
- **Dark & Light Mode:** Theme switching with persistent user preference.
- **Project Showcase:** Project cards with descriptions, technologies, categories, live demos, and source code links.
- **Project Filtering:** Browse projects by development category.
- **About & Skills:** Overview of my background, interests, and technical skills.
- **Open Source Contributions:** Highlights contributions to open-source projects.
- **Experience & Education:** Timeline showcasing academic and professional progress.
- **Contact Form:** Web3Forms integration for direct communication.
- **Resume Access:** View or access my resume directly from the portfolio.
- **Animations:** Scroll-based reveal effects and subtle interface transitions.
- **Centralized Data:** Personal information and portfolio content maintained in one TypeScript file.

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) |
| Frontend | React 19, TypeScript |
| Routing | TanStack Router |
| Styling | Tailwind CSS v4 |
| UI Components | Radix UI primitives, shadcn/ui-inspired components |
| Animations | Motion |
| Data Fetching | TanStack Query |
| Icons | Lucide React |
| Build Tool | Vite 8, Rolldown |
| Deployment | Node.js-compatible hosting |

## Project Structure

```text
src/
├── assets/                  # Images, resume and static assets
├── components/
│   ├── sections/            # Portfolio sections
│   └── ui/                  # Reusable UI components
├── data/
│   └── portfolio.ts         # Portfolio content and TypeScript interfaces
├── lib/
│   ├── utils.ts             # Utility functions
│   ├── error-capture.ts     # Error capture utilities
│   └── error-page.ts        # Error page content
├── routes/
│   ├── __root.tsx           # Root document and application shell
│   └── index.tsx            # Main portfolio page
├── router.tsx               # Router configuration
├── server.ts                # Server entry point
├── start.ts                 # Client entry point
└── styles.css               # Global styles and theme variables
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/adarshpatil-07/adarshpatil-dev.git
```

Navigate to the project directory:

```bash
cd adarshpatil-dev
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in your terminal, usually:

```text
http://localhost:5173
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format files using Prettier |

## Customization

Portfolio content is centralized in:

[`src/data/portfolio.ts`](./src/data/portfolio.ts)

You can update:

- Personal information and introduction
- Profile image and resume
- Social media links
- Technical skills
- Project descriptions, images, and links
- Open-source contributions
- Articles
- Education and experience timeline

The components consume this data, keeping content separate from presentation.

### Environment Variables

The contact form uses Web3Forms.

Create a `.env` file in the project root and configure:

```env
VITE_WEB3FORMS_KEY=your_access_key
```

Keep private credentials out of version control.

## Deployment

The project uses TanStack Start and Vite. Build the application with:

```bash
npm run build
```

Deploy the generated production output to a compatible hosting platform that supports the configured server runtime.

---

## Author

**Adarsh Patil**

Computer Engineering Student | Full-Stack Development | AI/ML

- GitHub: [@adarshpatil-07](https://github.com/adarshpatil-07)
- LinkedIn: [Adarsh Patil](https://www.linkedin.com/in/adarsh-patil-bb0335375/)
- Portfolio: [adarshpatil.runs-on.dev](https://adarshpatil.runs-on.dev/)

---

If you find something interesting in this project, feel free to explore the repository.