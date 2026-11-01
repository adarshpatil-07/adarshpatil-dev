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

// Violet theme level colours matching the site palette
const LEVEL_COLORS: Record<number, string> = {
  0: "#161024",
  1: "#3b2166",
  2: "#5b31a6",
  3: "#7c50d6",
  4: "#a78bfa",
};

const WEEKDAY_LABELS = ["Mon", "Wed", "Fri"];
const WEEKDAY_INDICES = [1, 3, 5]; // Mon=1, Wed=3, Fri=5 (0=Sun)

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CELL_SIZE = 11;
const CELL_GAP = 3;
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

  // ── Loading skeleton ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6">
        <div className="mb-4 h-4 w-48 animate-pulse rounded bg-primary/10" />
        <div className="overflow-x-auto">
          <div className="flex gap-[3px]" style={{ minWidth: 720 }}>
            {Array.from({ length: 53 }).map((_, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, di) => (
                  <div
                    key={di}
                    className="animate-pulse rounded-sm"
                    style={{ width: CELL_SIZE, height: CELL_SIZE, background: "#161024" }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Error fallback ──────────────────────────────────────────────────────────
  if (error || !data) {
    return (
      <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6 text-center text-sm text-muted-foreground">
        <p>Unable to load contribution data.</p>
        <a
          href="https://github.com/adarshpatil-07"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-primary hover:underline"
        >
          View on GitHub <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    );
  }

  // ── Group days into weeks (Sun-start) ───────────────────────────────────────
  const contributions = data.contributions;
  if (contributions.length === 0) return null;

  // Determine starting weekday of first entry (0=Sun…6=Sat)
  const firstDayOfWeek = new Date(contributions[0]!.date).getDay();

  // Build weeks: each week is an array of 7 slots (null = padding)
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

  // ── Month label positions ───────────────────────────────────────────────────
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
  const WEEKDAY_COL_WIDTH = 28;
  const MONTH_ROW_HEIGHT = 20;

  const totalWidth = WEEKDAY_COL_WIDTH + svgWidth;
  const totalHeight = MONTH_ROW_HEIGHT + svgHeight;

  // ── Format tooltip ──────────────────────────────────────────────────────────
  function formatDate(dateStr: string) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }

  return (
    <div className="mt-10 rounded-2xl border border-border bg-card/60 p-5 sm:p-6">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="font-mono text-xs font-bold text-primary">GitHub Activity</p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{data.total.lastYear}</span> contributions
            in the last year
          </p>
        </div>
        <a
          href="https://github.com/adarshpatil-07"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          adarshpatil-07 <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {/* Scrollable calendar */}
      <div className="overflow-x-auto">
        <div style={{ minWidth: totalWidth + 16 }} className="relative select-none">
          <svg
            width={totalWidth}
            height={totalHeight}
            style={{ display: "block", overflow: "visible" }}
          >
            {/* Month labels */}
            {monthLabels.map(({ label, x }) => (
              <text
                key={label + x}
                x={WEEKDAY_COL_WIDTH + x + 2}
                y={12}
                fontSize={10}
                fill="#9b91ad"
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
                fontSize={9}
                fill="#9b91ad"
                fontFamily="monospace"
              >
                {label}
              </text>
            ))}

            {/* Contribution cells */}
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
                    rx={2}
                    fill={color}
                    style={{ cursor: "default" }}
                    onMouseEnter={(e) => {
                      const rect = (e.target as SVGRectElement)
                        .closest("svg")
                        ?.getBoundingClientRect();
                      if (!rect) return;
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
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs text-foreground shadow-lg"
              style={{ left: tooltip.x, top: tooltip.y - 6 }}
            >
              {tooltip.text}
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center justify-end gap-1.5">
        <span className="text-xs text-muted-foreground">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="rounded-sm"
            style={{ width: 10, height: 10, background: LEVEL_COLORS[level] }}
          />
        ))}
        <span className="text-xs text-muted-foreground">More</span>
      </div>
    </div>
  );
}
