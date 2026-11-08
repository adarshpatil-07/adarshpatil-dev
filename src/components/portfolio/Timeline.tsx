import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  const educationItems = portfolio.timeline.filter((item) => item.type === "Education");
  const experienceItems = portfolio.timeline.filter((item) => item.type === "Experience");

  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        index="06"
        title="Experience & education"
        description="Academic background and practical engineering timeline."
      />

      {/* Side-by-side layout: Experience next to Education on desktop */}
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-6">
        {/* Experience column */}
        <div className="rounded-md border border-border bg-card p-3 sm:p-4">
          <div className="flex items-baseline justify-between border-b border-border pb-2 mb-3">
            <h3 className="text-base font-bold text-foreground">
              Experience & Focus
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              Internships & Roles
            </span>
          </div>

          {experienceItems.length > 0 ? (
            <div className="space-y-4">
              {experienceItems.map((item) => (
                <div key={`${item.title}-${item.period}`} className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-[15px] font-semibold text-foreground">{item.title}</h4>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">{item.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {item.organization} / {item.location}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="text-[15px] font-semibold text-foreground">{portfolio.role}</h4>
                <span className="font-mono text-xs text-muted-foreground shrink-0">{portfolio.status}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Independent Projects & Research / {portfolio.location}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Actively building full-stack applications and experimenting with AI/ML models. Seeking engineering internships and industry collaborations for 2026.
              </p>
            </div>
          )}
        </div>

        {/* Education column */}
        <div className="rounded-md border border-border bg-card p-3 sm:p-4">
          <div className="flex items-baseline justify-between border-b border-border pb-2 mb-3">
            <h3 className="text-base font-bold text-foreground">
              Education
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              Degree & Studies
            </span>
          </div>

          <div className="space-y-4">
            {educationItems.map((item) => (
              <div key={`${item.title}-${item.period}`} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-[15px] font-semibold text-foreground">{item.title}</h4>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">{item.period}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {item.organization} / {item.location}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
