import {
  ArrowDownRight,
  FileText,
  FolderGit2,
} from "lucide-react";
import { getSocial, portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/AOT wallpaper.gif";

const github = getSocial("github");
const linkedin = getSocial("linkedin");
const twitter = getSocial("twitter");

const heroSocials = [github, linkedin, twitter].filter(
  Boolean
) as typeof portfolio.socials;

export function Hero() {
  return (
    <section id="top" className="section-shell">
      <div className="grid gap-8 sm:gap-10">
        <div className="flex min-w-0 flex-col">

          {/* AOT Wallpaper - unchanged */}
          <div className="relative h-40 w-full overflow-hidden rounded-xl border border-border bg-secondary sm:h-52 lg:h-64">
            <img
              src={heroBanner}
              alt="Hero banner"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background/50 to-transparent"
            />
          </div>

          {/* Hero content layout */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[220px_minmax(0,1fr)_190px] lg:items-center lg:gap-8">

            {/* Profile photo */}
            <div className="relative z-10 -mt-12 ml-3 mb-0 h-24 w-24 overflow-hidden rounded-xl border border-border bg-secondary ring-4 ring-background sm:h-28 sm:w-28 lg:mt-0 lg:ml-0 lg:h-40 lg:w-40 lg:justify-self-center">
              <img
                src={portfolio.profileImage}
                alt={`${portfolio.name} profile photo`}
                width={192}
                height={192}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Introduction and actions */}
            <div className="flex min-w-0 flex-col">

              {/* Availability */}
              <div className="inline-flex items-center gap-3 mt-2 text-sm text-foreground/90 lg:mt-3">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10"
                />
                <span>{portfolio.hero.availability}</span>
              </div>

              {/* Headline */}
              <h1 className="mt-4 max-w-[42rem] text-2xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-3xl lg:text-[2.65rem]">
                {portfolio.hero.headline}
              </h1>

              {/* Eyebrow / tech description */}
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                {portfolio.hero.eyebrow}
              </p>

              {/* Action buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  variant="default"
                  className="min-h-[44px]"
                >
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

                <Button
                  asChild
                  variant="outline"
                  className="min-h-[44px]"
                >
                  <a href="#open-source">
                    <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                    <span>Open Source</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="min-h-[44px]"
                >
                  <a href="#contact">Get in touch</a>
                </Button>
              </div>
            </div>

            {/* Social links - horizontal mobile, vertical desktop */}
            <nav
              className="flex flex-wrap items-center gap-x-5 gap-y-3 border-border lg:flex-col lg:items-start lg:justify-center lg:gap-6 lg:border-l lg:py-5 lg:pl-8"
              aria-label="Social links"
            >
              {heroSocials.map((social) => (
                <a
                  key={social.type}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </nav>

          </div>
        </div>
      </div>
    </section>
  );
}
