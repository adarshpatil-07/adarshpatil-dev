import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay: Math.min(index, 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group rounded-3xl border border-border bg-card/40 p-6 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:bg-card mb-8 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-[3rem_1.1fr_1fr] md:items-start">
        <span className="font-mono text-xs font-bold text-primary">#0{index + 1}</span>
        <div className="overflow-hidden rounded-2xl border border-border bg-muted">
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            width={1200}
            height={760}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="flex h-full min-w-0 flex-col">
          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h3>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary border border-border/50 px-3 py-1 font-mono text-[11px] font-medium text-foreground">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-8 text-sm font-semibold">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-white shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.02]"
            >
              View project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {project.sourceHref ? (
              <a
                href={project.sourceHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-muted-foreground transition-all hover:border-foreground/40 hover:text-foreground"
              >
                <Github className="h-4 w-4" /> Source
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
