import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <div id="about" className="flex flex-col">
      <SectionHeading index="01" title="About" />

      <div className="w-full max-w-2xl space-y-3.5">
        <p className="text-base sm:text-lg font-semibold leading-snug text-foreground text-balance text-justify [hyphens:auto]">
          {portfolio.about.lead}
        </p>

        <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground text-justify [hyphens:auto]">
          {portfolio.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-1">
          <p className="font-mono text-xs text-muted-foreground mb-2">Currently Exploring</p>
          <div className="flex flex-wrap gap-1.5">
            {portfolio.about.interests.map((interest) => (
              <span
                key={interest}
                className="rounded border border-border bg-card px-2.5 py-1 text-xs font-mono text-foreground"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}