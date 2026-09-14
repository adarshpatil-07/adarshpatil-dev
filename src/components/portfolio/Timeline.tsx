import { portfolio } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading index="04" title="Experience & education" />
      <div className="md:ml-[10rem]">
        {portfolio.timeline.map((item, index) => (
          <Reveal
            key={`${item.title}-${item.period}`}
            as="article"
            delay={Math.min(index, 4) * 0.06}
            className="grid gap-4 border-t border-border py-7 md:grid-cols-[10rem_1fr_10rem]"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px]">{item.type}</span>
              <p className="font-mono text-xs text-muted-foreground md:hidden">{item.period}</p>
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">{item.title}</h3>
              <p className="mt-1 text-sm">{item.organization} · {item.location}</p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
            <p className="hidden font-mono text-xs text-muted-foreground md:block md:text-right">{item.period}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
