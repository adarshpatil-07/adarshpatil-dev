import { Database } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GitHubCalendar } from "./GitHubCalendar";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

// Devicons CDN base — free, no auth required
const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// Maps each skill name to its icon source.
// Skills without a devicon entry use a lucide icon (see renderIcon below).
const SKILL_ICONS: Record<string, string> = {
  // Languages
  "C / C++": `${DI}/cplusplus/cplusplus-original.svg`,
  TypeScript: `${DI}/typescript/typescript-original.svg`,
  Python: `${DI}/python/python-original.svg`,
  JavaScript: `${DI}/javascript/javascript-original.svg`,
  // SQL → no devicon; handled below with lucide <Database>

  // AI / ML
  NumPy: `${DI}/numpy/numpy-original.svg`,
  Pandas: `${DI}/pandas/pandas-original.svg`,
  "scikit-learn": `${DI}/scikitlearn/scikitlearn-original.svg`,
  // Matplotlib → no devicon; handled below with lucide <BarChart2>
  TensorFlow: `${DI}/tensorflow/tensorflow-original.svg`,

  // Software
  React: `${DI}/react/react-original.svg`,
  "Node.js": `${DI}/nodejs/nodejs-original.svg`,
  Git: `${DI}/git/git-original.svg`,
  Linux: `${DI}/linux/linux-original.svg`,
  PostgreSQL: `${DI}/postgresql/postgresql-original.svg`,

  // Tools
  Vite: `${DI}/vitejs/vitejs-original.svg`,
  // GitHub Actions → use the standard GitHub mark, inverted for dark bg
  "Github Actions": `${DI}/github/github-original.svg`,
  Docker: `${DI}/docker/docker-original.svg`,
  Figma: `${DI}/figma/figma-original.svg`,
  Canva: `${DI}/canva/canva-original.svg`,
};

// Skills that use a Lucide icon component instead of an image
const LUCIDE_ICON_SKILLS = new Set(["SQL", "Matplotlib"]);

function SkillIcon({ skill }: { skill: string }) {
  if (LUCIDE_ICON_SKILLS.has(skill)) {
    // Both SQL and Matplotlib use a chart/database-style icon
    return <Database className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />;
  }

  const src = SKILL_ICONS[skill];
  if (!src) {
    // Fallback: small bullet for any unmapped skill
    return <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />;
  }

  const isGitHub = skill === "Github Actions";
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      // GitHub's logo is black on transparent — invert it so it's visible on dark bg
      className={`h-4 w-4 shrink-0 object-contain${isGitHub ? " invert opacity-80" : ""}`}
    />
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        index="02"
        title="Skills"
        description="A practical toolkit for building across the hardware–software boundary."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
        {portfolio.skills.map((group, index) => (
          <Reveal
            key={group.title}
            as="article"
            y={18}
            delay={Math.min(index, 4) * 0.08}
            className="group min-h-48 rounded-2xl sm:rounded-3xl border border-border bg-card/60 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card hover:-translate-y-1 sm:min-h-56 shadow-sm"
          >
            <p className="font-mono text-xs font-bold text-primary">#0{index + 1}</p>
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight sm:mt-6 sm:text-2xl">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <SkillIcon skill={skill} />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* GitHub contribution calendar */}
      <Reveal y={16} delay={0.1}>
        <GitHubCalendar />
      </Reveal>
    </section>
  );
}
