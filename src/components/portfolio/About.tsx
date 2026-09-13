import { motion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading index="01" title="About" />
      <div className="grid gap-10 md:grid-cols-[10rem_1fr]">
        <p className="font-mono text-xs uppercase text-muted-foreground">A short introduction</p>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 md:grid-cols-2">
          <p className="font-display text-3xl leading-tight md:text-4xl">{portfolio.about.lead}</p>
          <div className="space-y-5 text-sm leading-7 text-muted-foreground md:text-base">
            {portfolio.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="flex flex-wrap gap-2 pt-2">{portfolio.about.interests.map((interest) => <span key={interest} className="rounded-full border border-border px-3 py-1 text-xs text-foreground">{interest}</span>)}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
