import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Open Source", id: "open-source" },
  { label: "Articles", id: "articles" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];
const HEADER_OFFSET = 64;

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((link) => link.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function handleNav(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setOpen(false);
    scrollToId(id);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 md:px-8 lg:max-w-7xl lg:px-10">
        <a
          href="#top"
          onClick={(event) => handleNav(event, "top")}
          className="truncate font-display text-xl font-semibold"
          aria-label="Back to top"
        >
          {portfolio.initials}
          <span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Main navigation">
            {links.map((link) => {
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleNav(event, link.id)}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`relative whitespace-nowrap text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${active === link.id ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {link.label}
                  {active === link.id ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-primary"
                    />
                  ) : null}
                </a>
              );
            })}
          </nav>
          <div className="mx-1 hidden h-5 w-px bg-border lg:block" />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open ? (
        <nav
          className="border-t border-border bg-background px-5 py-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleNav(event, link.id)}
              className="block border-b border-border py-3 text-sm last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
