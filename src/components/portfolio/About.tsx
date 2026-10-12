import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading index="01" title="About" />
      <div className="grid gap-6 md:grid-cols-[10rem_1fr] md:gap-10">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">A short introduction</p>
        <Reveal className="grid gap-8 md:grid-cols-2">
          <p className="font-display text-2xl font-bold tracking-tight leading-tight sm:text-3xl md:text-4xl">
            {portfolio.about.lead}
          </p>
          <div className="space-y-5 text-sm leading-7 text-muted-foreground md:text-base">
            {portfolio.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {portfolio.about.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
