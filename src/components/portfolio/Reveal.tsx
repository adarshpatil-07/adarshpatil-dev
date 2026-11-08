import type { ReactNode } from "react";
import { motion } from "motion/react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Reveal({ children, delay = 0, y = 24, className, as = "div" }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      // No `initial` prop — server HTML renders at full opacity (visible without JS).
      // Motion adds the enter animation only after hydration on the client.
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
