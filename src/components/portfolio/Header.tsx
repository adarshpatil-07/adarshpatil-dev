import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-xl font-semibold" aria-label="Back to top">{portfolio.initials}<span className="text-primary">.</span></a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link}</a>)}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Mobile navigation">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-sm last:border-0">{link}</a>)}
        </nav>
      ) : null}
    </header>
  );
}
