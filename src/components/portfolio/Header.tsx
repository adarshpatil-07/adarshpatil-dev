
import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", id: "top" },
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

  const reduce = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const top =
    target.getBoundingClientRect().top +
    window.scrollY -
    HEADER_OFFSET;

  window.scrollTo({
    top,
    behavior: reduce ? "auto" : "smooth",
  });
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleEntries.length > 0) {
          setActive(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  function handleNav(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setOpen(false);
    scrollToId(id);
  }

  return (
    <header className="sticky top-4 z-50 h-14 border-b border-border bg-background">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-6">

        {/* Brand */}
        <a
          href="#top"
          onClick={(event) => handleNav(event, "top")}
          className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg"
          aria-label="Back to top"
        >
          {portfolio.name}
        </a>

        {/* Desktop Navigation and Controls */}
        <div className="flex items-center gap-2">

          <nav
            className="hidden items-center gap-0.5 rounded-full border border-border bg-card/80 p-1 lg:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => {
              const isActive = active === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleNav(event, link.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`
                    rounded-full px-3 py-2 text-sm font-medium
                    whitespace-nowrap transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                    ${
                      isActive
                        ? "bg-foreground text-background shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="mx-1 hidden h-5 w-px bg-border lg:block" />

          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="min-h-[44px] min-w-[44px] shrink-0 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          className="border-b border-border bg-background px-4 py-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => handleNav(event, link.id)}
                aria-current={isActive ? "location" : undefined}
                className={`
                  flex min-h-[44px] items-center rounded-md px-3 py-2
                  text-sm font-medium transition-colors
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                  ${
                    isActive
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-muted"
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
