import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ index, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-4 pb-2.5 border-b border-border flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4", className)}>
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm font-normal text-muted-foreground">
          #{index}
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="text-sm text-muted-foreground max-w-xl sm:text-right">
          {description}
        </p>
      ) : null}
    </div>
  );
}
