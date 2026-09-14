# Portfolio Spark

I'm building a personal portfolio website for myself, a Computer Engineering 

student. Use React + Vite + TypeScript + Tailwind CSS + shadcn/ui as the stack, 

with Framer Motion for animations.

I'm attaching reference images showing the visual style and layout I want. 

Build the site to closely match this look and feel — layout, spacing, color 

mood, and overall aesthetic.

Structure requirements (important):

- Keep the codebase clean and well-organized — one component per file, 

  organized into a components/ folder, no giant single-file pages

- Store all personal content (name, bio, skills, projects, experience, social 

  links) in a separate data file (e.g. src/data/portfolio.ts), not hardcoded 

  inside components — components should import and render from this data file

- Use TypeScript interfaces/types for the data shape (e.g. a Project type, 

  a Skill type)

- Include these sections: Hero/intro, About, Skills, Projects, Experience/

  Education timeline, Contact (with a working contact form using a free 

  service like Web3Forms, no custom backend)

For now, use placeholder content in the data file — I'll fill in my real 

details afterward. Focus on getting the structure, layout, and visual style 

matching the reference images right first.

Clone the design of this website: https://researchfolio.vercel.app/
https://mdtaquiimam.vercel.app/projects

Use React + Vite + TypeScript + Tailwind CSS + shadcn/ui, with Framer Motion 

for animations. Keep the codebase clean and modular — one component per file, 

personal content (name, bio, skills, projects, experience) stored separately 

in src/data/portfolio.ts with TypeScript types, not hardcoded in components.

Include: Hero, About, Skills, Projects, Experience/Education, Contact (with 

Web3Forms, no backend). Use placeholder content for now.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://myportfolio-lovable.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/df4ab739-13e3-45aa-820e-504c872ca58e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
