import { motion } from "motion/react";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const iconMap = { github: Github, linkedin: Linkedin, email: Mail };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="top" className="px-3 pt-3 pb-8 sm:px-6 sm:pt-6 md:px-8 md:pt-6 md:pb-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] hero-container-gradient shadow-2xl">
        {/* Subtle decorative inner glow / vignette */}
        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/40" />

        <div className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 text-white">
          {/* Top row */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="flex items-center justify-between gap-3 border-b border-white/15 pb-6"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-white/80">
                {portfolio.hero.eyebrow}
              </p>
              <span className="hidden shrink-0 items-center gap-2 rounded-full bg-black/20 backdrop-blur-md px-3 py-1 text-xs text-white/90 sm:flex border border-white/10">
                <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
                {portfolio.status}
              </span>
            </motion.div>

            {/* Headline and Intro */}
            <div className="mt-10 sm:mt-14 md:mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
              <motion.h1
                variants={item}
                className="font-display text-4xl font-extrabold tracking-tight leading-[1.04] sm:text-6xl md:text-7xl lg:text-[5.25rem] text-white"
              >
                {portfolio.hero.headline}
              </motion.h1>

              <motion.div variants={item} className="space-y-6 lg:pb-3">
                <p className="text-base leading-relaxed text-white/85 sm:text-lg">
                  {portfolio.hero.intro}
                </p>

                {/* Reference style: Pill primary button with orange arrow circle */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2.5 text-sm font-bold text-zinc-950 shadow-lg transition-all duration-300 hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Get in touch</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowDownRight className="h-4 w-4" />
                    </span>
                  </a>

                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40"
                  >
                    View projects
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Reference style: Numbered items #01, #02, #03, #04 across the bottom of the hero */}
          <div className="mt-14 border-t border-white/15 pt-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 mb-8">
              {portfolio.skills.slice(0, 4).map((group, idx) => (
                <div key={group.title} className="space-y-1">
                  <span className="font-mono text-xs font-bold text-white/90 drop-shadow-sm">
                    #0{idx + 1}
                  </span>
                  <p className="text-sm font-medium text-white/80">{group.title}</p>
                </div>
              ))}
            </div>

            {/* Bottom bar with author info and socials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center"
            >
              <div className="min-w-0">
                <p className="font-display text-xl font-bold text-white">{portfolio.name}</p>
                <p className="text-xs text-white/75">
                  {portfolio.role} · {portfolio.location}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {portfolio.socials.map((social) => {
                  const Icon = iconMap[social.type];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.type === "email" ? undefined : "_blank"}
                      rel="noreferrer"
                      aria-label={social.label}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-zinc-950"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
