import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const iconMap = { github: Github, linkedin: Linkedin, email: Mail };

export function Hero() {
  return (
    <section id="top" className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl content-between px-5 py-12 md:px-8 md:py-16">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="flex items-center justify-between border-b border-border pb-5">
          <p className="font-mono text-xs uppercase text-muted-foreground">{portfolio.hero.eyebrow}</p>
          <span className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex"><span className="h-2 w-2 rounded-full bg-signal" />{portfolio.status}</span>
        </div>
        <h1 className="mt-12 max-w-5xl font-display text-5xl font-semibold leading-[0.96] sm:text-7xl md:text-8xl">{portfolio.hero.headline}</h1>
        <div className="mt-10 grid gap-7 md:grid-cols-[1fr_1fr] md:items-end">
          <p className="max-w-xl text-base leading-7 text-muted-foreground md:col-start-2 md:text-lg">{portfolio.hero.intro}</p>
        </div>
      </motion.div>
      <div className="mt-16 flex flex-col justify-between gap-8 border-t border-border pt-5 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-2xl font-semibold">{portfolio.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{portfolio.role} · {portfolio.location}</p>
        </div>
        <div className="flex items-center gap-2">
          {portfolio.socials.map((social) => { const Icon = iconMap[social.type]; return <a key={social.label} href={social.href} target={social.type === "email" ? undefined : "_blank"} rel="noreferrer" aria-label={social.label} className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-foreground hover:bg-foreground hover:text-background"><Icon className="h-4 w-4" /></a>; })}
          <a href="#about" className="ml-2 inline-flex items-center gap-2 text-sm font-medium">Explore <ArrowDownRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}
