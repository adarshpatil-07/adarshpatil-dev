import { useState } from "react";
import { ChevronDown, Github } from "lucide-react";
import type { OpenSourceContribution } from "@/data/portfolio";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function OpenSource() {
  const [openTitle, setOpenTitle] = useState<string | null>(portfolio.openSource[0]?.title ?? null);

  return (
    <section id="open-source" className="section-shell">
      <SectionHeading
        index="04"
        title="Open source"
        description="Public work, pull requests, and contributions — this list is data-driven so new entries can be added from the portfolio file."
      />
      <div className="md:ml-[10rem] space-y-4">
        {portfolio.openSource.map((item, index) => {
          const expanded = openTitle === item.title;
          const panelId = `oss-panel-${index}`;
          const buttonId = `oss-trigger-${index}`;

          return (
            <Reveal
              key={item.title}
              as="article"
              delay={Math.min(index, 4) * 0.06}
              className="rounded-3xl border border-border bg-card/40 shadow-sm transition-colors hover:border-primary/40"
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenTitle(expanded ? null : item.title)}
                className="flex w-full items-start gap-4 rounded-3xl p-6 text-left sm:p-8 lg:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="mt-1 font-mono text-xs font-bold text-primary">#0{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    {item.isDemo ? (
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary">
                        Demo
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-foreground/90">{item.repoName}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
                <ChevronDown
                  className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </button>
              {expanded ? (
                <ContributionDetails item={item} panelId={panelId} labelledBy={buttonId} />
              ) : null}
            </Reveal>
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
      className="border-t border-border px-6 pb-6 sm:px-8 sm:pb-8 lg:px-6 lg:pb-6"
    >
      <div className="pt-5 md:pl-12">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
          Contribution
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          {item.contribution}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/50 bg-secondary px-3 py-1 font-mono text-[11px] font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:border-foreground/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:mt-4"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
