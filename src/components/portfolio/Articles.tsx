import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

export function Articles() {
  return (
    <section id="articles" className="section-shell">
      <SectionHeading
        index="05"
        title="Articles"
        description="Notes and essays. Published pieces will replace demo entries."
      />

      <div className="space-y-3">
        {portfolio.articles.map((article, index) => (
          <article
            key={article.title}
            className="rounded-md border border-border bg-card p-3 sm:p-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  #0{index + 1}
                </span>
                <span className="rounded border border-border bg-background px-2 py-0.5 font-mono text-xs text-foreground">
                  {article.category}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {article.date}
                </span>
                {article.isDemo ? (
                  <span className="rounded border border-border px-1.5 py-0.2 font-mono text-[10px] text-muted-foreground">
                    Demo
                  </span>
                ) : null}
              </div>
            </div>

            <h3 className="mt-2 text-base sm:text-lg font-bold tracking-tight text-foreground">
              {article.title}
            </h3>

            <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
              {article.description}
            </p>

            <div className="mt-3 pt-2.5 border-t border-border">
              {article.href ? (
                <Button asChild variant="default" size="sm" className="min-h-[44px]">
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Read article</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Link coming soon - replace this demo entry with a published article URL.
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
