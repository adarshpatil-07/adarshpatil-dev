
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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

const primaryLinks = [
  { label: "Home", id: "top" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Open Source", id: "open-source" },
];

const moreLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Articles", id: "articles" },
  { label: "Contact", id: "contact" },
];

const HEADER_OFFSET = 56;

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const hash = `#${id}`;
  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

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
  const [moreOpen, setMoreOpen] = useState(false);
  const [active, setActive] = useState("top");
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        const firstVisibleEntry = visibleEntries[0];
        if (firstVisibleEntry) {
          setActive(firstVisibleEntry.target.id);
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

  function handleNav(
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) {
    event.preventDefault();
    setOpen(false);
    setMoreOpen(false);
    scrollToId(id);
  }

  function handleHeaderKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== "Escape" || (!open && !moreOpen)) return;

    event.preventDefault();
    if (moreOpen) {
      moreButtonRef.current?.focus();
    } else {
      mobileMenuButtonRef.current?.focus();
    }
    setOpen(false);
    setMoreOpen(false);
  }

  return (
    <header
      className="sticky -top-1 z-50 h-14 bg-background"
      onKeyDown={handleHeaderKeyDown}
    >
      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-6">

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
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {primaryLinks.map((link) => {
              const isActive = active === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleNav(event, link.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`
                    rounded-md px-3 py-2 text-sm font-medium
                    whitespace-nowrap transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                    ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Desktop More Dropdown */}
            <div className="relative">
              <button
                type="button"
                ref={moreButtonRef}
                onClick={() => setMoreOpen((value) => !value)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                aria-controls="desktop-more-menu"
                className={`
                  inline-flex items-center gap-1 rounded-md px-3 py-2
                  text-sm font-medium whitespace-nowrap
                  transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                  ${
                    moreLinks.some((link) => link.id === active)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                More
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id="desktop-more-menu"
                hidden={!moreOpen}
                className="absolute right-0 top-full mt-2 min-w-40 rounded-lg border border-border bg-background p-1.5 shadow-lg"
              >
                {moreLinks.map((link) => {
                  const isActive = active === link.id;

                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(event) => handleNav(event, link.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={`
                        block rounded-md px-3 py-2.5 text-sm
                        transition-colors duration-200
                        ${
                          isActive
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }
                      `}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>

          <div className="mx-1 hidden h-5 w-px bg-border lg:block" />

          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            ref={mobileMenuButtonRef}
            className="min-h-[44px] min-w-[44px] shrink-0 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation-menu"
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

      {/* Mobile Navigation - Compact Upper-Right Dropdown */}
      <nav
        id="mobile-navigation-menu"
        hidden={!open}
        className="absolute right-4 top-full mt-2 w-52 rounded-xl border border-border bg-background p-2 shadow-lg md:right-6 lg:hidden"
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
                flex min-h-[42px] items-center rounded-lg px-3 py-2
                text-sm font-medium transition-colors
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                ${
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }
              `}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
