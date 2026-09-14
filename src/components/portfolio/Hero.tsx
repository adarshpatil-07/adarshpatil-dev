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
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl content-between px-5 py-12 md:px-8 md:py-16"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="flex items-center justify-between gap-3 border-b border-border pb-5"
        >
          <p className="font-mono text-xs uppercase text-muted-foreground">
            {portfolio.hero.eyebrow}
          </p>
          <span className="hidden shrink-0 items-center gap-2 text-xs text-muted-foreground sm:flex">
            <span className="h-2 w-2 rounded-full bg-signal" />
            {portfolio.status}
          </span>
        </motion.div>
        <motion.h1
          variants={item}
          className="mt-10 max-w-5xl font-display text-4xl font-semibold leading-[1.02] sm:text-6xl md:mt-12 md:text-7xl lg:text-8xl lg:leading-[0.96]"
        >
          {portfolio.hero.headline}
        </motion.h1>
        <motion.div
          variants={item}
          className="mt-10 grid gap-7 md:grid-cols-[1fr_1fr] md:items-end"
        >
          <p className="max-w-xl text-base leading-7 text-muted-foreground md:col-start-2 md:text-lg">
            {portfolio.hero.intro}
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 flex flex-col justify-between gap-6 border-t border-border pt-5 sm:flex-row sm:items-end"
      >
        <div className="min-w-0">
          <p className="font-display text-2xl font-semibold">{portfolio.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
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
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
          <a href="#about" className="ml-2 inline-flex items-center gap-2 text-sm font-medium">
            Explore <ArrowDownRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
