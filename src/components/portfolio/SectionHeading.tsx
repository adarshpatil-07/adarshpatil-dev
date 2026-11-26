
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-4 pb-2.5 border-b border-border flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4",
        className
      )}
    >
      <h2 className="font-display text-xl sm:text-2xl font-normal tracking-tight text-foreground">
        {title}
      </h2>

      {description && (
        <p className="text-sm text-muted-foreground max-w-xl sm:text-right">
          {description}
        </p>
      )}
    </div>
  );
}
