import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import type { SocialLink } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap: Record<SocialLink["type"], LucideIcon | typeof XIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  twitter: XIcon,
};

export function SocialGlyph({ type, className }: { type: SocialLink["type"]; className?: string }) {
  const Icon = iconMap[type];
  return <Icon className={cn("h-4 w-4", className)} />;
}

export function SocialIconLink({ social, className }: { social: SocialLink; className?: string }) {
  const isEmail = social.type === "email";

  return (
    <a
      href={social.href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      aria-label={social.label}
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card/60 text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      <SocialGlyph type={social.type} />
    </a>
  );
}

export function SocialIconRow({
  socials,
  className,
  iconClassName,
}: {
  socials: SocialLink[];
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socials.map((social) => (
        <SocialIconLink key={social.type} social={social} className={iconClassName} />
      ))}
    </div>
  );
}
