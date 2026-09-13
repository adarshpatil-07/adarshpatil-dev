import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  return <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 text-xs text-muted-foreground md:px-8"><p>© {new Date().getFullYear()} {portfolio.name}</p><a href="#top" className="inline-flex items-center gap-2 hover:text-foreground">Back to top <ArrowUp className="h-3 w-3" /></a></div></footer>;
}
