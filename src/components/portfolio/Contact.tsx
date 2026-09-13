import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (portfolio.web3FormsAccessKey.startsWith("YOUR_")) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(event.currentTarget) });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success"); event.currentTarget.reset();
    } catch { setStatus("error"); }
  }
  return (
    <section id="contact" className="section-shell pb-16 md:pb-24">
      <SectionHeading index="05" title="Let’s build something useful." description="Have an internship, research idea, or interesting engineering problem? Send a note." />
      <div className="grid gap-12 md:ml-[10rem] md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm text-muted-foreground">Prefer email?</p>
          <a href={`mailto:${portfolio.email}`} className="mt-2 inline-flex items-center gap-2 border-b border-foreground pb-1 font-display text-xl">{portfolio.email}<ArrowUpRight className="h-4 w-4" /></a>
          <div className="mt-10 space-y-3">{portfolio.socials.filter((social) => social.type !== "email").map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground hover:text-foreground">{social.label} ↗</a>)}</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="access_key" value={portfolio.web3FormsAccessKey} />
          <input type="hidden" name="subject" value="New portfolio message" />
          <div className="grid gap-4 sm:grid-cols-2"><Input name="name" placeholder="Your name" aria-label="Your name" required /><Input type="email" name="email" placeholder="Email address" aria-label="Email address" required /></div>
          <Input name="subject_line" placeholder="What’s this about?" aria-label="Message subject" required />
          <Textarea name="message" placeholder="Tell me a little about your idea..." aria-label="Message" className="min-h-36" required />
          <div className="flex items-center justify-between gap-4"><p className="text-xs text-muted-foreground" role="status">{status === "success" ? "Message sent — thank you." : status === "error" ? "Add your Web3Forms key in the portfolio data file to enable sending." : "I’ll reply as soon as I can."}</p><Button type="submit" disabled={status === "sending"}>{status === "sending" ? <Loader2 className="animate-spin" /> : null}Send message</Button></div>
        </form>
      </div>
    </section>
  );
}
