import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function CompactProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="flex h-full flex-col rounded-md border border-border bg-card p-3 sm:p-4">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          #{index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>
      </div>

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

      <div className="flex flex-1 flex-col pt-3">
        <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border bg-background px-2 py-0.5 text-xs font-mono text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4 border-t border-border">
          {project.href ? (
            <Button asChild variant="default" size="sm" className="min-h-[44px]">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>View project</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          ) : null}

          {project.sourceHref ? (
            <Button asChild variant="outline" size="sm" className="min-h-[44px]">
              <a
                href={project.sourceHref}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                <span>Source</span>
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
