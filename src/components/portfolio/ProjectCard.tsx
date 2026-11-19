
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="flex flex-col rounded-md border border-border bg-card p-3 sm:p-2.5">
      {/* Preview image */}
      <div className="overflow-hidden rounded border border-border bg-secondary">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          width={1200}
          height={760}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="mt-2 flex items-baseline justify-between gap-2">
            <h3 className="text-base font-bold tracking-tight text-foreground sm:text-base">
              {project.title}
            </h3>
            <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
              #0{index + 1}
            </span>
          </div>

          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-border bg-background px-1.5 py-0.5 text-[11px] font-mono text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-3">
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
