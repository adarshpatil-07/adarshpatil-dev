import { useState } from "react";
import { ChevronDown, Github } from "lucide-react";
import type { OpenSourceContribution } from "@/data/portfolio";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

export function OpenSource() {
  const [openTitle, setOpenTitle] = useState<string | null>(portfolio.openSource[0]?.title ?? null);

  return (
    <section id="open-source" className="section-shell">
      <SectionHeading
        index="04"
        title="Open source"
        description="Contributions to open-source software and pull requests."
      />

      <div className="space-y-3">
        {portfolio.openSource.map((item, index) => {
          const expanded = openTitle === item.title;
          const panelId = `oss-panel-${index}`;
          const buttonId = `oss-trigger-${index}`;

          return (
            <article
              key={item.title}
              className="rounded-md border border-border bg-card"
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenTitle(expanded ? null : item.title)}
                className="flex w-full min-h-[44px] items-center justify-between gap-3 p-3 sm:p-4 text-left cursor-pointer transition-[background-color] duration-150 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
              >
                <div className="flex items-baseline gap-2.5 min-w-0">
                  <span className="font-mono text-xs text-muted-foreground shrink-0">
                    #0{index + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                        {item.title}
                      </h3>
                      {item.isDemo ? (
                        <span className="rounded border border-border px-1.5 py-0.2 font-mono text-[10px] text-muted-foreground">
                          Demo
                        </span>
                      ) : null}
                    </div>
                    <p className="text-xs font-mono text-muted-foreground mt-0.5">
                      {item.repoName}
                    </p>
                  </div>
                </div>

                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expanded ? (
                <ContributionDetails item={item} panelId={panelId} labelledBy={buttonId} />
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ContributionDetails({
  item,
  panelId,
  labelledBy,
}: {
  item: OpenSourceContribution;
  panelId: string;
  labelledBy: string;
}) {
  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={labelledBy}
      className="border-t border-border p-3 sm:p-4 bg-background/50"
    >
      <p className="text-[15px] leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      <div className="mt-3">
        <p className="font-mono text-xs text-muted-foreground mb-1">Contribution summary</p>
        <p className="text-sm leading-relaxed text-foreground">
          {item.contribution}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border bg-card px-2 py-0.5 text-xs font-mono text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-border">
        <Button asChild variant="outline" size="sm" className="min-h-[44px]">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            <span>View on GitHub</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
