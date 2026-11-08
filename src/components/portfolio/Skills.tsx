import { Database, BarChart2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const SKILL_ICONS: Record<string, string> = {
  // Languages
  "C / C++": `${DI}/cplusplus/cplusplus-original.svg`,
  TypeScript: `${DI}/typescript/typescript-original.svg`,
  Python: `${DI}/python/python-original.svg`,
  JavaScript: `${DI}/javascript/javascript-original.svg`,

  // AI / ML
  NumPy: `${DI}/numpy/numpy-original.svg`,
  Pandas: `${DI}/pandas/pandas-original.svg`,
  "scikit-learn": `${DI}/scikitlearn/scikitlearn-original.svg`,
  TensorFlow: `${DI}/tensorflow/tensorflow-original.svg`,

  // Software
  React: `${DI}/react/react-original.svg`,
  "Node.js": `${DI}/nodejs/nodejs-original.svg`,
  Git: `${DI}/git/git-original.svg`,
  Linux: `${DI}/linux/linux-original.svg`,
  PostgreSQL: `${DI}/postgresql/postgresql-original.svg`,

  // Tools
  Vite: `${DI}/vitejs/vitejs-original.svg`,
  "Github Actions": `${DI}/github/github-original.svg`,
  Docker: `${DI}/docker/docker-original.svg`,
  Figma: `${DI}/figma/figma-original.svg`,
  Canva: `${DI}/canva/canva-original.svg`,
};

function SkillIcon({ skill }: { skill: string }) {
  if (skill === "SQL") {
    return <Database className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />;
  }
  if (skill === "Matplotlib") {
    return <BarChart2 className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />;
  }

  const src = SKILL_ICONS[skill];
  if (!src) {
    return <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" />;
  }

  const isGitHub = skill === "Github Actions";
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`h-3.5 w-3.5 shrink-0 object-contain grayscale opacity-80 ${isGitHub ? "dark:invert" : ""}`}
    />
  );
}

export function Skills() {
  return (
    <div id="skills" className="flex flex-col">
      <SectionHeading
        index="02"
        title="Skills"
        description="A practical toolkit across hardware & software."
      />

      {/* Grouped rows layout (not four equal cards) */}
      <div className="space-y-2.5">
        {portfolio.skills.map((group, index) => (
          <div
            key={group.title}
            className="rounded-md border border-border bg-card p-3"
          >
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-sm font-semibold text-foreground">
                {group.title}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                #0{index + 1}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded border border-border bg-background px-2.5 py-1 text-xs font-mono text-foreground"
                >
                  <SkillIcon skill={skill} />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
