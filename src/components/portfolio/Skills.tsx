import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

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
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
