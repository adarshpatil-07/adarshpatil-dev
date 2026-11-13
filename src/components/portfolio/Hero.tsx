
import { ArrowDownRight, FileText, FolderGit2 } from "lucide-react";
import { getSocial, portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { SocialIconRow } from "./SocialIcons";

const github = getSocial("github");
const linkedin = getSocial("linkedin");
const twitter = getSocial("twitter");
const heroSocials = [github, linkedin, twitter].filter(Boolean) as typeof portfolio.socials;

export function Hero() {
  return (
    <section id="top" className="section-shell">
      {/* Main Hero Layout */}
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto] md:gap-8 lg:gap-14">

        {/* Left Column */}
        <div className="flex min-w-0 flex-col">

          {/* Eyebrow and Availability */}
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs text-muted-foreground">
              {portfolio.hero.eyebrow}
            </p>

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {portfolio.hero.availability}
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-3xl">
            {portfolio.hero.headline}
          </h1>

          {/* Short Description */}
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Computer engineering student building practical full-stack software and exploring AI/ML.
          </p>

          {/* Action Buttons and Socials */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Button asChild variant="default" className="min-h-[44px]">
              <a
                href={portfolio.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>Resume</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="outline" className="min-h-[44px]">
              <a href="#open-source">
                <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                <span>Open Source</span>
              </a>
            </Button>

            <Button asChild variant="outline" className="min-h-[44px]">
              <a href="#contact">
                <span>Get in touch</span>
              </a>
            </Button>

            <div className="flex items-center gap-2">
              <SocialIconRow socials={heroSocials} />
            </div>
          </div>

          {/* Author Information */}
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-5">
            <div className="h-10 w-1 shrink-0 rounded-full bg-foreground/70" />

            <div className="min-w-0">
              <p className="text-base font-semibold tracking-tight text-foreground">
                {portfolio.name}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {portfolio.role}
                <span className="mx-1.5">·</span>
                {portfolio.location}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Photograph */}
        <div className="relative mx-auto w-full max-w-[240px] shrink-0 sm:max-w-[260px] md:max-w-[210px] lg:max-w-[260px]">

          {/* Decorative Border */}
          <div className="absolute -inset-2 rounded-2xl border border-border/70" />

          {/* Photograph */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-secondary shadow-lg">
            <img
              src={portfolio.profileImage}
              alt={`${portfolio.name}, ${portfolio.role}`}
              width={1086}
              height={1448}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>

          {/* Photo Label */}
          <div className="absolute -bottom-3 -right-3 rounded-lg border border-border bg-background px-3 py-2 shadow-md">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              🎃
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
