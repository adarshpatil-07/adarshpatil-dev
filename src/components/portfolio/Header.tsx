import { useState, type MouseEvent } from "react";
import { useRouterState } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";

const links = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Open source", id: "open-source" },
  { label: "Contact", id: "contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  function closeMenu() {
    setOpen(false);
  }

  function handleNavigation(event: MouseEvent<HTMLAnchorElement>) {
    closeMenu();
    if (pathname !== "/") return;
    const target = document.querySelector(event.currentTarget.hash);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
      window.history.pushState(null, "", event.currentTarget.hash);
    }
  }

  return (
    <header className="site-header">
      <a className="site-logo" href={pathname === "/" ? "#top" : "/"}>
        {portfolio.name}
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      <nav
        className={`site-nav${open ? " is-open" : ""}`}
        id="site-navigation"
        aria-label="Main navigation"
      >
        {links.map(({ label, id }) => (
          <a key={id} href={pathname === "/" ? `#${id}` : `/#${id}`} onClick={handleNavigation}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
