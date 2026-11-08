import { portfolio } from "@/data/portfolio";
import { SocialIconRow } from "./SocialIcons";

const footerSocials = portfolio.socials.filter((social) => social.type !== "email");

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-5 px-4 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:gap-4">
        <p>© 2026 {portfolio.name}. All rights reserved.</p>
        <SocialIconRow socials={footerSocials} />
      </div>
    </footer>
  );
}
