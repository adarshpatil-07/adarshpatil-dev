import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Articles() {
  return (
    <section id="articles" className="section-shell">
      <SectionHeading
        index="05"
        title="Articles"
        description="Notes and essays. Entries live in the portfolio data file so published pieces can replace the demo content later."
      />
      <div className="md:ml-[10rem] space-y-4">
        {portfolio.articles.map((article, index) => (
          <Reveal
            key={article.title}
            as="article"
            delay={Math.min(index, 4) * 0.06}
            className="rounded-3xl border border-border bg-card/40 p-6 shadow-sm transition-colors hover:border-primary/40 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-primary">#0{index + 1}</span>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] font-semibold text-primary">
                {article.category}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{article.date}</span>
              {article.isDemo ? (
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Demo
                </span>
              ) : null}
            </div>
            <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
              {article.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              {article.description}
            </p>
            {article.href ? (
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Read article
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <p className="mt-6 text-sm font-medium text-muted-foreground">
                Link coming soon — replace this demo entry with a published article URL.
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
