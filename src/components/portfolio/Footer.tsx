import { portfolio } from "@/data/portfolio";
import { SocialIconRow } from "./SocialIcons";

const footerSocials = portfolio.socials.filter((social) => social.type !== "email");

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4 sm:py-6 md:px-8 lg:max-w-7xl lg:px-10 lg:py-5">
        <p>© 2026 Developed with ❤️ by Adarsh Patil</p>
        <SocialIconRow socials={footerSocials} />
      </div>
    </footer>
  );
}
