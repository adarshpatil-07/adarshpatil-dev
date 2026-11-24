import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function GitShineStats() {
  const [imageFailed, setImageFailed] = useState(false);
  const cardUrl = `https://gitshine.com/card/${portfolio.githubUsername}?theme=transparent`;

  return (
    <div className="w-full">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs font-semibold text-foreground">GitHub Activity</p>
        <a
          href={portfolio.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          {portfolio.githubUsername}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {imageFailed ? (
        <div className="rounded-md border border-border bg-card p-4 text-center text-sm">
          <a
            href={portfolio.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-4 text-foreground hover:text-muted-foreground"
          >
            View my GitHub profile
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      ) : (
        <div className="w-full">
          <a
            href={portfolio.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
            aria-label={`View ${portfolio.githubUsername} on GitHub`}
          >
            <img
              src={cardUrl}
              alt={`GitHub stats for ${portfolio.githubUsername}`}
              width={800}
              height={400}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="block h-auto w-full rounded-md border border-border"
            />
          </a>
        </div>
      )}
    </div>
  );
}
