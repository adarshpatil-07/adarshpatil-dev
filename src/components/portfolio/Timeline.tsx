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
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Experience column */}
        <div className="rounded-md border border-border bg-card p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-border pb-2">
            <h3 className="text-base font-bold text-foreground">Experience & Focus</h3>
            <span className="font-mono text-xs text-muted-foreground">Internships & Roles</span>
          </div>

          {experienceItems.length > 0 ? (
            <div className="space-y-4">
              {experienceItems.map((item) => (
                <div key={`${item.title}-${item.period}`} className="space-y-1.5">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                    <h4 className="min-w-0 break-words text-[15px] font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {item.organization} / {item.location}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              <div className="space-y-1">
                <h4 className="break-words text-[15px] font-semibold text-foreground">
                  {portfolio.role}
                </h4>
                <p className="inline-flex items-start gap-2 text-xs text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                  />
                  <span>{portfolio.status}</span>
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                Independent Projects & Research / {portfolio.location}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Building full-stack applications and AI-powered solutions, with a focus on practical engineering and problem-solving.
              </p>
            </div>
          )}
        </div>

        {/* Education column */}
        <div className="rounded-md border border-border bg-card p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b border-border pb-2">
            <h3 className="text-base font-bold text-foreground">Education</h3>
            <span className="font-mono text-xs text-muted-foreground">Degree & Studies</span>
          </div>

          <div className="space-y-4">
            {educationItems.map((item) => (
              <div key={`${item.title}-${item.period}`} className="space-y-1.5">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                  <h4 className="min-w-0 break-words text-[15px] font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
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
