import { createServerFn } from "@tanstack/react-start";

export type VisitCountResult =
  { ok: true; count: number; service: string } | { ok: false; count: null; message: string };

function readEnv(name: string) {
  return process.env[name]?.trim() || undefined;
}

async function fetchJson(url: string, init?: RequestInit) {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(`Counter request failed (${response.status})`);
  }
  return (await response.json()) as Record<string, unknown>;
}

function asCount(value: unknown) {
  const count = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(count) || count < 0) {
    throw new Error("Counter response did not include a valid count");
  }
  return Math.floor(count);
}

export const recordVisit = createServerFn({ method: "GET" }).handler(
  async (): Promise<VisitCountResult> => {
    const token = readEnv("COUNTERAPI_TOKEN") ?? readEnv("VITE_COUNTERAPI_TOKEN");
    const workspace = readEnv("COUNTERAPI_WORKSPACE") ?? readEnv("VITE_COUNTERAPI_WORKSPACE");
    const counterName = readEnv("COUNTERAPI_NAME") ?? readEnv("VITE_COUNTERAPI_NAME") ?? "visits";

    try {
      if (token && workspace) {
        const data = await fetchJson(
          `https://api.counterapi.dev/v2/${encodeURIComponent(workspace)}/${encodeURIComponent(counterName)}/up`,
          { headers: { Authorization: `Bearer ${token}` } },
        );
        const count = asCount(
          (data["count"] as { up?: unknown } | undefined)?.up ?? data["up"] ?? data["value"],
        );
        return { ok: true, count, service: "CounterAPI" };
      }

      const namespace =
        readEnv("VISITOR_COUNTER_NAMESPACE") ??
        readEnv("VITE_VISITOR_COUNTER_NAMESPACE") ??
        "adarshpatil-dev";
      const key = readEnv("VISITOR_COUNTER_KEY") ?? readEnv("VITE_VISITOR_COUNTER_KEY") ?? "visits";
      const data = await fetchJson(
        `https://abacus.jasoncameron.dev/hit/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`,
      );
      return { ok: true, count: asCount(data["value"]), service: "Abacus" };
    } catch {
      return {
        ok: false,
        count: null,
        message:
          "Visitor count is not available. Set COUNTERAPI_TOKEN and COUNTERAPI_WORKSPACE, or rely on the default Abacus counter.",
      };
    }
  },
);
