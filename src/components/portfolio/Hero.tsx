
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
      <div className="flex flex-col">

        {/* Profile and Introduction */}
        <div className="flex items-center gap-4 sm:gap-5">

          {/* Profile Photo */}
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border bg-secondary shadow-sm sm:h-32 sm:w-32">
            <img
              src={portfolio.profileImage}
              alt={`${portfolio.name} profile photo`}
              width={144}
              height={144}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* Name and Role */}
          <div className="min-w-0 flex flex-col gap-1">

            {/* Availability */}
            <span className="mb-1 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {portfolio.hero.availability}
            </span>

            <h1 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {portfolio.name}
            </h1>

            <p className="text-sm text-muted-foreground sm:text-base">
              {portfolio.role}
            </p>

          </div>
        </div>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Computer engineering student building practical full-stack software
          and exploring AI/ML.
        </p>

        {/* Action Buttons and Social Links */}
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
              Get in touch
            </a>
          </Button>

          <div className="flex items-center gap-2">
            <SocialIconRow socials={heroSocials} />
          </div>

        </div>
      </div>
    </section>
  );
}
