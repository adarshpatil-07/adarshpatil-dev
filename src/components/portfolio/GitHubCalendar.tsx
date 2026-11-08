import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: { lastYear: number };
  contributions: ContributionDay[];
}

// Grayscale level tokens defined in styles.css
const LEVEL_COLORS: Record<number, string> = {
  0: "var(--contribution-0)",
  1: "var(--contribution-1)",
  2: "var(--contribution-2)",
  3: "var(--contribution-3)",
  4: "var(--contribution-4)",
};

const WEEKDAY_LABELS = ["Mon", "Wed", "Fri"];
const WEEKDAY_INDICES = [1, 3, 5];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CELL_SIZE = 10;
const CELL_GAP = 2.5;
const STEP = CELL_SIZE + CELL_GAP;

export function GitHubCalendar() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://github-contributions-api.jogruber.de/v4/adarshpatil-07?y=last", {
      signal: controller.signal,
    })
      .then((r) => {
        if (!r.ok) throw new Error("Non-OK response");
        return r.json() as Promise<ApiResponse>;
      })
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="rounded-md border border-border bg-card p-3 sm:p-4">
        <div className="mb-3 h-4 w-40 animate-pulse rounded bg-secondary" />
        <div className="overflow-x-auto">
          <div className="flex gap-[2.5px]" style={{ minWidth: 680 }}>
            {Array.from({ length: 53 }).map((_, wi) => (
              <div key={wi} className="flex flex-col gap-[2.5px]">
                {Array.from({ length: 7 }).map((_, di) => (
                  <div
                    key={di}
                    className="rounded-sm animate-pulse"
                    style={{ width: CELL_SIZE, height: CELL_SIZE, background: "var(--contribution-0)" }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="rounded-md border border-border bg-card p-4 text-center text-sm text-muted-foreground">
        <p>Unable to load contribution data.</p>
        <a
          href="https://github.com/adarshpatil-07"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 underline underline-offset-4 text-foreground hover:text-muted-foreground"
        >
          View on GitHub <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    );
  }

  const contributions = data.contributions;
  if (contributions.length === 0) return null;

  const firstDayOfWeek = new Date(contributions[0]!.date).getDay();
  const weeks: (ContributionDay | null)[][] = [];
  let currentWeek: (ContributionDay | null)[] = Array(firstDayOfWeek).fill(null);

  for (const day of contributions) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  const monthLabels: { label: string; x: number }[] = [];
  let prevMonth = -1;
  weeks.forEach((week, wi) => {
    const firstReal = week.find((d) => d !== null);
    if (!firstReal) return;
    const month = new Date(firstReal.date).getMonth();
    if (month !== prevMonth) {
      monthLabels.push({ label: MONTHS[month] ?? "", x: wi * STEP });
      prevMonth = month;
    }
  });

  const svgWidth = weeks.length * STEP;
  const svgHeight = 7 * STEP;
  const WEEKDAY_COL_WIDTH = 26;
  const MONTH_ROW_HEIGHT = 18;

  const totalWidth = WEEKDAY_COL_WIDTH + svgWidth;
  const totalHeight = MONTH_ROW_HEIGHT + svgHeight;

  function formatDate(dateStr: string) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  return (
    <div className="rounded-md border border-border bg-card p-3 sm:p-4">
      {/* Header */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-baseline gap-2">
          <p className="font-mono text-xs font-semibold text-foreground">GitHub Activity</p>
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">{data.total.lastYear}</span> contributions in the last year
          </p>
        </div>
        <a
          href="https://github.com/adarshpatil-07"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          adarshpatil-07 <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {/* Calendar grid */}
      <div className="overflow-x-auto">
        <div style={{ minWidth: totalWidth + 8 }} className="relative select-none">
          <svg
            aria-hidden="true"
            width={totalWidth}
            height={totalHeight}
            style={{ display: "block", overflow: "visible" }}
          >
            {/* Month labels */}
            {monthLabels.map(({ label, x }) => (
              <text
                key={label + x}
                x={WEEKDAY_COL_WIDTH + x}
                y={12}
                fontSize={9}
                fill="var(--muted-foreground)"
                fontFamily="monospace"
              >
                {label}
              </text>
            ))}

            {/* Weekday labels */}
            {WEEKDAY_LABELS.map((label, i) => (
              <text
                key={label}
                x={0}
                y={MONTH_ROW_HEIGHT + (WEEKDAY_INDICES[i] ?? 0) * STEP + CELL_SIZE - 1}
                fontSize={8}
                fill="var(--muted-foreground)"
                fontFamily="monospace"
              >
                {label}
              </text>
            ))}

            {/* Cells */}
            {weeks.map((week, wi) =>
              week.map((day, di) => {
                if (!day) return null;
                const x = WEEKDAY_COL_WIDTH + wi * STEP;
                const y = MONTH_ROW_HEIGHT + di * STEP;
                const color = LEVEL_COLORS[day.level];
                return (
                  <rect
                    key={day.date}
                    x={x}
                    y={y}
                    width={CELL_SIZE}
                    height={CELL_SIZE}
                    rx={1.5}
                    fill={color}
                    style={{ cursor: "default" }}
                    onMouseEnter={(e) => {
                      const svgEl = (e.target as SVGRectElement).closest("svg");
                      const cellRect = (e.target as SVGRectElement).getBoundingClientRect();
                      const parentRect = svgEl?.parentElement?.getBoundingClientRect();
                      if (!parentRect) return;
                      setTooltip({
                        text:
                          day.count === 0
                            ? `No contributions on ${formatDate(day.date)}`
                            : `${day.count} contribution${day.count > 1 ? "s" : ""} on ${formatDate(day.date)}`,
                        x: cellRect.left - parentRect.left + CELL_SIZE / 2,
                        y: cellRect.top - parentRect.top,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                );
              }),
            )}
          </svg>

          {/* Tooltip */}
          {tooltip && (
            <div
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded border border-border bg-popover px-2 py-1 text-xs text-popover-foreground"
              style={{ left: tooltip.x, top: tooltip.y - 4 }}
            >
              {tooltip.text}
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-2.5 flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="rounded-sm"
            style={{ width: 9, height: 9, background: LEVEL_COLORS[level] }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
