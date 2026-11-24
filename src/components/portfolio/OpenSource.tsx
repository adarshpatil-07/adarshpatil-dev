
import { useState } from "react";
import { ChevronDown, GitMerge, Github } from "lucide-react";
import type { OpenSourceContribution } from "@/data/portfolio";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

export function OpenSource() {
  const [openTitle, setOpenTitle] = useState<string | null>(
    portfolio.openSource[0]?.title ?? null
  );

  return (
    <section id="open-source" className="section-shell">
      <SectionHeading
        index="04"
        title="Open source"
        description="Contributions to open-source software and pull requests."
      />

      <div className="mt-6">
        {portfolio.openSource.map((item, index) => {
          const expanded = openTitle === item.title;
          const panelId = `oss-panel-${index}`;
          const buttonId = `oss-trigger-${index}`;

          return (
            <article
              key={item.title}
              className="border-b border-border last:border-b-0"
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() =>
                  setOpenTitle(expanded ? null : item.title)
                }
                className="group flex w-full min-h-[68px] items-center justify-between gap-4 py-4 text-left cursor-pointer transition-colors duration-200 hover:bg-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <GitMerge
                    className="h-5 w-5 sm:h-5 sm:w-5 shrink-0 text-violet-500"
                    strokeWidth={1.8}
                  />

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-tight leading-snug">
                        {item.title}
                      </h3>

                      {item.isDemo ? (
                        <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                          Demo
                        </span>
                      ) : null}
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-mono break-words">
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
                <ContributionDetails
                  item={item}
                  panelId={panelId}
                  labelledBy={buttonId}
                />
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
      className="pb-5 pl-9 sm:pl-10 pr-1 pt-2 sm:pt-3"
    >
      <p className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      <div className="mt-4">
        <p className="font-mono text-xs text-muted-foreground mb-1">
          Contribution summary
        </p>

        <p className="text-sm leading-relaxed text-foreground">
          {item.contribution}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-1 text-xs font-mono text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="min-h-[44px]"
        >
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
