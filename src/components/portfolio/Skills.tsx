import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading index="02" title="Skills" description="A practical toolkit for building across the hardware–software boundary." />
      <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.skills.map((group, index) => (
          <Reveal
            key={group.title}
            as="article"
            y={18}
            delay={Math.min(index, 4) * 0.08}
            className="min-h-48 border-b border-r border-border p-5 transition-colors duration-300 hover:bg-secondary/50 sm:min-h-56 sm:p-6"
          >
            <p className="font-mono text-xs text-muted-foreground">0{index + 1}</p>
            <h3 className="mt-6 font-display text-xl font-semibold sm:mt-8 sm:text-2xl">{group.title}</h3>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
