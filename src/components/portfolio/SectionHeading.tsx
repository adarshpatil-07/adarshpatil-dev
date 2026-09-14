import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <Reveal y={16} className="mb-10 grid gap-3 md:grid-cols-[10rem_1fr] md:items-start">
      <p className="font-mono text-xs uppercase text-muted-foreground">{index} / {title}</p>
      <div>
        <h2 className="font-display text-3xl font-semibold leading-none sm:text-4xl md:text-5xl">{title}</h2>
        {description ? <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">{description}</p> : null}
      </div>
    </Reveal>
  );
}
