import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/data/portfolio";

export function CompactProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col rounded-3xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card shadow-sm"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-primary">
          #{index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>
      </div>

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

      <div className="flex flex-1 flex-col pt-5">
        <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary border border-border/50 px-3 py-1 font-mono text-[11px] font-medium text-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6 text-sm font-semibold">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs text-white shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.02]"
          >
            View project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {project.sourceHref ? (
            <a
              href={project.sourceHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground transition-all hover:border-foreground/40 hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" /> Source
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
