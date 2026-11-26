import { useEffect, useState } from "react";
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
            message: "Visitor statistics are temporarily unavailable. Please check back later.",
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const label = result?.ok ? result.count.toLocaleString() : result ? "Unavailable" : "Loading…";

  return (
    <p aria-live="polite">
      Visitors: {label}
      {result && !result.ok ? ` — ${result.message}` : null}
    </p>
  );
}
