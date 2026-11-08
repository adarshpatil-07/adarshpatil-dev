import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { recordVisit, type VisitCountResult } from "@/lib/visitor-count";

export function VisitorCount() {
  const [result, setResult] = useState<VisitCountResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    recordVisit()
      .then((value) => {
        if (!cancelled) setResult(value);
      })
      .catch(() => {
        if (!cancelled) {
          setResult({
            ok: false,
            count: null,
            message: "Visitor count is not available right now.",
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const label = result?.ok ? result.count.toLocaleString() : result ? "Unavailable" : "Loading…";

  return (
    <div className="rounded-md border border-border bg-card p-3">
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="font-mono text-xs text-muted-foreground">Visitors</span>
        <span className="text-[11px] text-muted-foreground">Live visits</span>
      </div>
      <div className="flex items-center gap-2">
        <Eye className="h-4 w-4 text-foreground" aria-hidden="true" />
        <span className="text-xl font-bold tracking-tight text-foreground" aria-live="polite">
          {label}
        </span>
      </div>
      {result && !result.ok ? (
        <p className="mt-1 text-xs text-muted-foreground">{result.message}</p>
      ) : null}
    </div>
  );
}
