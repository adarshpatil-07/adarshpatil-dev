import { motion } from "motion/react";
import { ArrowDownRight, FileText, FolderGit2 } from "lucide-react";
import { getSocial, portfolio } from "@/data/portfolio";
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
    <section id="top" className="px-3 pt-3 pb-8 sm:px-6 sm:pt-6 md:px-8 md:pt-6 md:pb-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] hero-container-gradient shadow-2xl">
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/40" />

        <div className="relative z-10 grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-stretch">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex min-w-0 flex-col justify-between gap-10 p-6 text-white sm:p-10 md:p-12 lg:p-14 lg:pr-8"
          >
            <div>
              <motion.div
                variants={item}
                className="flex items-center justify-between gap-3 border-b border-white/15 pb-5"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-white/80">
                  {portfolio.hero.eyebrow}
                </p>
                <span className="hidden shrink-0 items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/90 backdrop-blur-md sm:flex">
                  <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
                  {portfolio.status}
                </span>
              </motion.div>

              <div className="mt-8 max-w-xl space-y-5 sm:mt-10">
                <motion.h1
                  variants={item}
                  className="font-display text-[1.75rem] font-extrabold leading-[1.18] tracking-tight text-white sm:text-4xl sm:leading-[1.15] md:text-[2.35rem] lg:text-[2.6rem]"
                >
                  {portfolio.hero.headline}
                </motion.h1>
                <motion.p
                  variants={item}
                  className="max-w-lg text-[0.95rem] leading-7 text-white/90 sm:text-lg sm:leading-8"
                >
                  {portfolio.hero.intro}
                </motion.p>
              </div>

              <motion.div
                variants={item}
                className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3"
              >
                <a
                  href={portfolio.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2.5 text-sm font-bold text-zinc-950 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  <span>Resume</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowDownRight className="h-4 w-4" />
                  </span>
                </a>

                <a
                  href="#open-source"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                  Open Source
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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

            <div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                {portfolio.skills.slice(0, 4).map((group, idx) => (
                  <div key={group.title} className="space-y-1">
                    <span className="font-mono text-xs font-bold text-white/90 drop-shadow-sm">
                      #0{idx + 1}
                    </span>
                    <p className="text-sm font-medium text-white/80">{group.title}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-display text-xl font-bold text-white">{portfolio.name}</p>
                <p className="text-xs text-white/75">
                  {portfolio.role} · {portfolio.location}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex min-h-[16rem] items-end justify-center lg:min-h-0 lg:justify-end"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[8%] left-1/2 h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-orange/50 blur-3xl lg:left-auto lg:right-[8%] lg:translate-x-0"
            />
            <img
              src={portfolio.profileImage}
              alt={`${portfolio.name}, ${portfolio.role}`}
              width={720}
              height={900}
              loading="eager"
              decoding="async"
              className="hero-photo relative z-10 h-[18rem] w-auto max-w-[min(100%,22rem)] object-cover object-[center_12%] sm:h-[22rem] lg:h-[min(38rem,92%)] lg:max-w-[100%] lg:translate-x-4"
            />
          </motion.div>
        </div>
      </div>
    </section>
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
      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <SocialGlyph type={type} className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}
