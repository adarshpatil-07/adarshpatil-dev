import { motion } from "motion/react";
import { ArrowDownRight, FileText, FolderGit2 } from "lucide-react";
import { getSocial, portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SocialGlyph } from "./SocialIcons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const github = getSocial("github");
const linkedin = getSocial("linkedin");
const twitter = getSocial("twitter");

export function Hero() {
  return (
    <section id="top" className="px-3 pt-2.5 pb-5 sm:px-6 sm:pt-6 sm:pb-8 md:px-8 md:pt-6 md:pb-12 lg:px-10 lg:pt-5 lg:pb-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] hero-container-gradient shadow-2xl lg:max-w-7xl">
        {/* Subtle radial vignette */}
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/45" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-stretch">
          {/* Main content column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex min-w-0 flex-col justify-between p-4 text-white sm:p-8 md:p-10 lg:p-9 xl:p-10 md:pr-4 lg:pr-5"
          >
            <div>
              {/* Eyebrow & Status bar */}
              <motion.div
                variants={item}
                className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3 sm:gap-3 sm:pb-5"
              >
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-white/80 sm:text-xs">
                  {portfolio.hero.eyebrow}
                </p>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-md sm:px-3 sm:py-1 sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
                  {portfolio.status}
                </span>
              </motion.div>

              {/* Headline & Intro */}
              <div className="mt-4 max-w-xl space-y-3 sm:mt-8 sm:space-y-4 md:mt-8 lg:mt-7 lg:space-y-4">
                <motion.h1
                  variants={item}
                  className="font-display text-[1.45rem] font-extrabold leading-[1.2] tracking-tight text-white xs:text-[1.7rem] sm:text-3xl sm:leading-[1.18] md:text-[2rem] md:leading-[1.18] lg:text-[2.4rem] xl:text-[2.65rem]"
                >
                  {portfolio.hero.headline}
                </motion.h1>
                <motion.p
                  variants={item}
                  className="max-w-lg text-[0.925rem] leading-relaxed text-white/90 sm:text-base sm:leading-7 lg:text-lg lg:leading-8"
                >
                  {portfolio.hero.intro}
                </motion.p>
              </div>

              {/* Action buttons & Social links */}
              <motion.div
                variants={item}
                className="mt-4 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-2.5 md:gap-3"
              >
                <a
                  href={portfolio.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-xs font-bold text-zinc-950 shadow-lg transition-[transform,background-color] duration-300 hover:scale-[1.02] hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98] sm:py-2 sm:pl-5 sm:pr-2 sm:text-sm"
                >
                  <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  <span>Resume</span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-8 sm:w-8">
                    <ArrowDownRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                </a>

                <a
                  href="#open-source"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-[border-color,background-color] duration-300 hover:border-white/40 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-4 sm:py-2.5 sm:text-sm sm:gap-2"
                >
                  <FolderGit2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  Open Source
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-[border-color,background-color] duration-300 hover:border-white/40 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  Get in touch
                </a>

                {github ? <HeroSocial href={github.href} label="GitHub" type="github" /> : null}
                {linkedin ? (
                  <HeroSocial href={linkedin.href} label="LinkedIn" type="linkedin" />
                ) : null}
                {twitter ? <HeroSocial href={twitter.href} label="X" type="twitter" /> : null}
              </motion.div>
            </div>

            {/* Mobile-only centered photograph (stacks naturally below headline, intro, and buttons) */}
            <motion.div variants={item} className="my-4 flex justify-center sm:my-7 md:hidden">
              <HeroPhoto className="max-w-[13.5rem] xs:max-w-[15.5rem] sm:max-w-[17.5rem]" />
            </motion.div>

            {/* Skills & Author Footer */}
            <div className="mt-2 md:mt-8 lg:mt-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:gap-3 lg:gap-4">
                {portfolio.skills.slice(0, 4).map((group, idx) => (
                  <div key={group.title} className="space-y-1">
                    <span className="font-mono text-xs font-bold text-violet-300 drop-shadow-sm">
                      #0{idx + 1}
                    </span>
                    <p className="text-xs font-medium text-white/80 sm:text-sm">{group.title}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-white/10 pt-3 sm:mt-6 sm:pt-5">
                <p className="font-display text-lg font-bold text-white sm:text-xl">
                  {portfolio.name}
                </p>
                <p className="text-xs text-white/75">
                  {portfolio.role} · {portfolio.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Desktop & Tablet right column: photo anchored bottom-right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden p-6 md:flex md:flex-col md:justify-center md:items-center lg:p-7 lg:pl-0 xl:p-8 xl:pl-0"
          >
            <HeroPhoto className="max-w-[15.5rem] lg:max-w-[20rem] xl:max-w-[23rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroPhoto({ className }: { className?: string | undefined }) {
  return (
    <div className={cn("relative mx-auto w-full", className)}>
      {/* Ambient glow behind the photograph */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 sm:-inset-5 rounded-[2.5rem] bg-gradient-to-tr from-violet-600/30 via-purple-500/20 to-indigo-500/15 blur-2xl sm:blur-3xl -z-10"
      />
      {/* Framed portrait container with natural 3:4 aspect ratio */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl shadow-black/50 ring-1 ring-white/10 sm:rounded-3xl">
        <img
          src={portfolio.profileImage}
          alt={`${portfolio.name}, ${portfolio.role}`}
          width={1086}
          height={1448}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
        />
        {/* Subtle vignette overlay to integrate naturally with dark violet background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-hero-vignette/55 via-transparent to-black/10"
        />
      </div>
    </div>
  );
}

function HeroSocial({
  href,
  label,
  type,
}: {
  href: string;
  label: string;
  type: "github" | "linkedin" | "twitter";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-[border-color,background-color,color] duration-300 hover:border-white/40 hover:bg-white hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-4 sm:py-2.5 sm:text-sm sm:gap-2"
    >
      <SocialGlyph type={type} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      <span>{label}</span>
    </a>
  );
}
