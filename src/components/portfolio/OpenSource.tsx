
import { useState } from "react";
import { ChevronDown, Github } from "lucide-react";
import type { OpenSourceContribution } from "@/data/portfolio";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function OpenSource() {
  const [openTitle, setOpenTitle] = useState<string | null>(
    portfolio.openSource[0]?.title ?? null
  );

  return (
    <section id="open-source" className="section-shell">
      <SectionHeading
        title="Open source"
        description="Contributions to open-source software and projects."
      />

      <div className="mt-8 space-y-3">
        {portfolio.openSource.map((item, index) => {
          const expanded = openTitle === item.title;
          const panelId = `oss-panel-${index}`;
          const buttonId = `oss-trigger-${index}`;

          return (
            <article
              key={item.title}
              className="group relative overflow-hidden border-b border-border/70 last:border-b-0"
            >
              <div className="flex items-center gap-3 sm:gap-5 py-5">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenTitle(expanded ? null : item.title)
                  }
                  className="flex flex-1 min-w-0 items-center gap-3 sm:gap-5 text-left cursor-pointer"
                >
                  <span className="shrink-0 font-mono text-xs text-muted-foreground/60 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-medium tracking-tight text-foreground transition-colors duration-200 group-hover:text-foreground/75">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground truncate">
                      {item.repoName}
                    </p>
                  </div>

                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.7}
                  />
                </button>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.title} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                  className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Github className="h-[18px] w-[18px]" strokeWidth={1.7} />
                </a>
              </div>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!expanded}
                className="pb-6 pl-8 sm:pl-12 pr-2 animate-in fade-in slide-in-from-top-1 duration-200"
              >
                <p className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground max-w-2xl">
                  {item.description}
                </p>

                <div className="mt-4 max-w-2xl">
                  <p className="text-sm sm:text-[15px] leading-relaxed text-foreground/90">
                    {item.contribution}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
