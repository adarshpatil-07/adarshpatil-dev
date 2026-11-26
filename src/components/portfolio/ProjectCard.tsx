
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-3 transition-[transform,border-color] duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-foreground/30 motion-safe:focus-within:-translate-y-0.5 motion-safe:focus-within:border-foreground/30 sm:p-4">

      {/* Preview image */}
      <div className="overflow-hidden rounded border border-border bg-secondary">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          width={1200}
          height={760}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02] motion-safe:group-focus-within:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col pt-3">
        <div>
          <h3 className="text-base font-bold tracking-tight text-foreground sm:text-base">
            {project.title}
          </h3>

          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-border bg-background px-2 py-0.5 text-[11px] font-mono text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border pt-3">
          {project.href ? (
            <Button asChild variant="default" size="sm" className="min-h-9">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>View project</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          ) : null}

          {project.sourceHref ? (
            <Button asChild variant="outline" size="sm" className="min-h-9">
              <a
                href={project.sourceHref}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-3.5 w-3.5" />
                <span>Source</span>
              </a>
            </Button>
          ) : null}
        </div>

      </div>
    </article>
  );
}
