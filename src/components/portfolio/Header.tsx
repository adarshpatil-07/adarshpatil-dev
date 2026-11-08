import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
const HEADER_OFFSET = 56;

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
    <header className="sticky top-0 z-50 h-14 border-b border-border bg-background">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-6">
        <a
          href="#top"
          onClick={(event) => handleNav(event, "top")}
          className="font-display text-lg font-bold tracking-tight text-foreground"
          aria-label="Back to top"
        >
          {portfolio.initials}
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleNav(event, link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${
                    isActive ? "text-foreground font-semibold underline underline-offset-8" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mx-2 hidden h-4 w-px bg-border lg:block" />
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 lg:hidden min-h-[44px] min-w-[44px]"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-b border-border bg-background px-4 py-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleNav(event, link.id)}
              className="flex min-h-[44px] items-center border-b border-border py-2 text-sm text-foreground last:border-0 hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
