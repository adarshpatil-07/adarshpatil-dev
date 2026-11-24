
import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 pt-8 pb-5 md:px-6">
      <div className="w-full">

        {/* Quiet Night Sky */}
        <div
          className="relative h-24 overflow-hidden text-foreground/40"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1200 100"
            preserveAspectRatio="xMidYMax slice"
            className="w-full"
            fill="none"
          >
            {/* Stars */}
            <g fill="currentColor">
              <circle cx="130" cy="28" r="1.5" />
              <circle cx="260" cy="45" r="1" />
              <circle cx="390" cy="18" r="1.5" />
              <circle cx="570" cy="35" r="1" />
              <circle cx="730" cy="15" r="1.5" />
              <circle cx="900" cy="40" r="1" />
              <circle cx="1080" cy="23" r="1.5" />
            </g>

            {/* Moon */}
            <circle cx="1000" cy="27" r="12" fill="currentColor" opacity="0.5" />

            {/* Distant mountains */}
            <path
              d="M0 85 L130 48 L210 72 L330 35 L460 78 L570 48 L700 80 L830 42 L950 76 L1080 45 L1200 78 V100 H0Z"
              fill="currentColor"
              opacity="0.12"
            />

            {/* Foreground landscape */}
            <path
              d="M0 90 Q150 65 300 88 T600 85 T900 82 T1200 88 V100 H0Z"
              fill="currentColor"
              opacity="0.2"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </p>
          <p className="opacity-70">またね。</p>
        </div>

      </div>
    </footer>
  );
}
