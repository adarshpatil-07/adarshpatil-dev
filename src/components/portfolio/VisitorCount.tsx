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
    <div className="rounded-2xl border border-border bg-card/60 px-4 py-3">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
        Visitors
      </p>
      <p className="mt-2 inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
        <Eye className="h-5 w-5 text-primary" aria-hidden="true" />
        <span aria-live="polite">{label}</span>
      </p>
      {result && !result.ok ? (
        <p className="mt-2 text-xs leading-5 text-muted-foreground">{result.message}</p>
      ) : (
        <p className="mt-2 text-xs text-muted-foreground">Counted from live site visits.</p>
      )}
    </div>
  );
}
