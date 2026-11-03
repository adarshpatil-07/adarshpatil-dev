import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <Reveal y={16} className="mb-6 grid gap-2 md:mb-10 md:grid-cols-[10rem_1fr] md:items-start md:gap-3 lg:mb-7">
      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
        #{index} / {title}
      </p>
      <div>
        <h2 className="font-display text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2.5 max-w-2xl text-sm leading-6 text-muted-foreground md:mt-4 md:text-base lg:mt-3">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
