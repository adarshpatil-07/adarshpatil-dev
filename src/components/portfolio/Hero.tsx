import { ArrowDownRight, FileText, FolderGit2 } from "lucide-react";
import { getSocial, portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const github = getSocial("github");
const linkedin = getSocial("linkedin");
const twitter = getSocial("twitter");

const heroSocials = [github, linkedin, twitter].filter(Boolean) as typeof portfolio.socials;

export function Hero() {
  return (
    <section id="top" className="section-shell">
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
        <div className="flex min-w-0 flex-col">
          <div className="mb-4 h-28 w-28 overflow-hidden rounded-lg border border-border bg-secondary lg:hidden">
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

          <p className="text-sm text-muted-foreground">{portfolio.hero.eyebrow}</p>

          <h1 className="mt-3 max-w-[42rem] text-2xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-3xl lg:mt-4 lg:text-[3.25rem]">
            {portfolio.hero.headline}
          </h1>

          <div className="mt-4 inline-flex items-center gap-3 text-sm text-foreground/90">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10"
            />
            <span>{portfolio.hero.availability}</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild variant="default" className="min-h-[44px]">
              <a href={portfolio.resumeHref} target="_blank" rel="noopener noreferrer">
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
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <nav
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2"
            aria-label="Social links"
          >
            {heroSocials.map((social) => (
              <a
                key={social.type}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[16rem] shrink-0 lg:block">
          <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border bg-secondary">
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
    </section>
  );
}