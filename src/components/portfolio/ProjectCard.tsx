import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="rounded-md border border-border bg-card p-3 sm:p-4">
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[1.1fr_1.4fr] lg:gap-6">
        {/* Preview image: flat, 1px border, no zoom */}
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
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-muted-foreground shrink-0">
                #0{index + 1}
              </span>
            </div>

            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
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
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 pt-2 border-t border-border">
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
      </div>
    </article>
  );
}
