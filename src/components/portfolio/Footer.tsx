import { Heart } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SocialIconRow } from "./SocialIcons";

const footerSocials = portfolio.socials.filter((social) => social.type !== "email");

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4 sm:py-6 md:px-8 lg:max-w-7xl lg:px-10 lg:py-5">
        <p className="inline-flex items-center gap-1.5">
          © 2026 Developed with
          <Heart className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
          by Adarsh Patil
        </p>
        <SocialIconRow socials={footerSocials} />
      </div>
    </footer>
  );
}
