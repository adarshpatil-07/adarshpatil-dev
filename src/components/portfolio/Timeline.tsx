import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading index="04" title="Experience & education" />
      <div className="md:ml-[10rem]">
        {portfolio.timeline.map((item) => (
          <article key={`${item.title}-${item.period}`} className="grid gap-4 border-t border-border py-7 md:grid-cols-[10rem_1fr_10rem]">
            <div><span className="rounded-full border border-border px-3 py-1 font-mono text-[11px]">{item.type}</span></div>
            <div><h3 className="font-display text-2xl font-semibold">{item.title}</h3><p className="mt-1 text-sm">{item.organization} · {item.location}</p><p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">{item.description}</p></div>
            <p className="font-mono text-xs text-muted-foreground md:text-right">{item.period}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
