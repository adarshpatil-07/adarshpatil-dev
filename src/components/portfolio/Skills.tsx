import { motion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading index="02" title="Skills" description="A practical toolkit for building across the hardware–software boundary." />
      <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.skills.map((group, index) => (
          <motion.article key={group.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="min-h-56 border-b border-r border-border p-6">
            <p className="font-mono text-xs text-muted-foreground">0{index + 1}</p>
            <h3 className="mt-8 font-display text-2xl font-semibold">{group.title}</h3>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
