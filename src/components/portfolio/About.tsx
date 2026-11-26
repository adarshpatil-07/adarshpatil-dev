
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <div id="about" className="flex flex-col">
      <SectionHeading title="About" />

      <div className="w-full max-w-2xl space-y-3 sm:space-y-3.5">
        <p className="text-[14px] sm:text-lg font-semibold leading-snug text-foreground text-balance text-justify [hyphens:auto]">
          {portfolio.about.lead}
        </p>

        <div className="space-y-2.5 sm:space-y-3 text-[13px] sm:text-[15px] leading-relaxed text-muted-foreground text-justify [hyphens:auto]">
          {portfolio.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-0.5 sm:pt-1">
          <p className="font-mono text-[11px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2">
            Currently Exploring
          </p>

          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {portfolio.about.interests.map((interest) => (
              <span
                key={interest}
                className="rounded border border-border bg-card px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono text-foreground"
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
