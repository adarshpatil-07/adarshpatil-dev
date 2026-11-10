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
      {/* ── First screen primary row: headline, short sentence, actions, and photo ── */}
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_auto] md:gap-8 lg:gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs text-muted-foreground">
              {portfolio.hero.eyebrow}
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl leading-tight">
              {portfolio.hero.headline}
            </h1>
            <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-muted-foreground max-w-2xl">
              Computer engineering student building practical full-stack software and exploring AI/ML.
            </p>
          </div>

          {/* Action buttons and socials */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
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
        </div>

        {/* Profile Photograph: crisp flat container, 1px border, natural 3:4 aspect ratio */}
        <div className="w-full sm:w-44 md:w-48 lg:w-56 shrink-0">
          <div className="overflow-hidden rounded-md border border-border bg-secondary aspect-[3/4] w-full">
            <img
              src={portfolio.profileImage}
              alt={`${portfolio.name}, ${portfolio.role}`}
              width={1086}
              height={1448}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* ── Extra copy just below: status, full intro, author meta ── */}
      <div className="mt-6 pt-5 border-t border-border grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-[auto_1fr_auto] items-start">
        {/* Status */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
          <span className="font-mono text-xs text-muted-foreground">{portfolio.status}</span>
        </div>

        {/* Detailed intro */}
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          {portfolio.hero.intro}
        </p>

        {/* Author meta */}
        <div className="text-left sm:text-right">
          <p className="text-sm font-semibold text-foreground">{portfolio.name}</p>
          <p className="text-xs text-muted-foreground">
            {portfolio.role}<br />{portfolio.location}
          </p>
        </div>
      </div>
    </section>
  );
}
