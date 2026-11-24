
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  const educationItems = portfolio.timeline.filter(
    (item) => item.type === "Education"
  );

  const experienceItems = portfolio.timeline.filter(
    (item) => item.type === "Experience"
  );

  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        index="06"
        title="Experience & education"
        description="Academic background and practical engineering timeline."
      />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

        {/* Experience column */}
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-3 border-b border-border pb-3 mb-2">
            <div className="flex items-center gap-2.5">
              <BriefcaseBusiness
                className="h-5 w-5 text-violet-500"
                strokeWidth={1.8}
              />
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Experience
              </h3>
            </div>

            <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">
              Internships & Roles
            </span>
          </div>

          {experienceItems.length > 0 ? (
            <div>
              {experienceItems.map((item) => (
                <article
                  key={`${item.title}-${item.period}`}
                  className="border-b border-border last:border-b-0 py-4"
                >
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm sm:text-base font-semibold text-foreground leading-snug break-words">
                      {item.title}
                    </h4>

                    <span className="font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {item.organization} / {item.location}
                  </p>

                  <p className="text-sm leading-relaxed text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-4">
              <h4 className="text-sm sm:text-base font-semibold text-foreground">
                {portfolio.role}
              </h4>

              <p className="inline-flex items-center gap-2 text-xs text-muted-foreground mt-1">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                />
                {portfolio.status}
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Independent Projects & Research / {portfolio.location}
              </p>

              <p className="text-sm leading-relaxed text-muted-foreground mt-2">
                Building full-stack applications and AI-powered solutions,
                with a focus on practical engineering and problem-solving.
              </p>
            </div>
          )}
        </div>

        {/* Education column */}
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-3 border-b border-border pb-3 mb-2">
            <div className="flex items-center gap-2.5">
              <GraduationCap
                className="h-5 w-5 text-violet-500"
                strokeWidth={1.8}
              />
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Education
              </h3>
            </div>

            <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">
              Degree & Studies
            </span>
          </div>

          <div>
            {educationItems.map((item) => (
              <article
                key={`${item.title}-${item.period}`}
                className="border-b border-border last:border-b-0 py-4"
              >
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm sm:text-base font-semibold text-foreground leading-snug break-words">
                    {item.title}
                  </h4>

                  <span className="font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {item.organization} / {item.location}
                </p>

                <p className="text-sm leading-relaxed text-muted-foreground mt-2">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
