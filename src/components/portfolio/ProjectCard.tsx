import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group border-t border-border py-8">
      <div className="grid gap-6 md:grid-cols-[3rem_1.1fr_1fr] md:items-start">
        <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
        <div className="overflow-hidden rounded-sm border border-border bg-muted">
          <img src={project.image} alt={`${project.title} interface preview`} width={1200} height={760} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        </div>
        <div className="flex h-full flex-col">
          <h3 className="font-display text-3xl font-semibold">{project.title}</h3>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-secondary px-3 py-1 font-mono text-[11px]">{tag}</span>)}</div>
          <div className="mt-auto flex gap-5 pt-8 text-sm font-medium">
            <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-primary">View project <ArrowUpRight className="h-4 w-4" /></a>
            {project.sourceHref ? <a href={project.sourceHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"><Github className="h-4 w-4" /> Source</a> : null}
          </div>
        </div>
      </div>
    </article>
  );
}
