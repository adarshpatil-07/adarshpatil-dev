import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SocialIconRow } from "./SocialIcons";
import { VisitorCount } from "./VisitorCount";

const profileSocials = portfolio.socials.filter((social) => social.type !== "email");

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (portfolio.web3FormsAccessKey.startsWith("YOUR_")) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-shell pb-10 md:pb-24 lg:pb-16">
      <SectionHeading
        index="07"
        title="Let’s build something useful."
        description="Have an internship, research idea, or interesting engineering problem? Send a note."
      />
      <div className="grid gap-7 md:ml-[10rem] md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-8">
        <div>
          <p className="text-sm text-muted-foreground">Prefer email?</p>
          <a
            href={`mailto:${portfolio.email}`}
            className="mt-2 inline-flex max-w-full items-center gap-2 break-words border-b border-foreground pb-1 font-display text-xl"
          >
            {portfolio.email}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="mt-5 md:mt-8 lg:mt-6">
            <VisitorCount />
          </div>
          <div className="mt-5 md:mt-8 lg:mt-6">
            <p className="text-sm text-muted-foreground">Find me online</p>
            <SocialIconRow socials={profileSocials} className="mt-3" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="access_key" value={portfolio.web3FormsAccessKey} />
          <input type="hidden" name="subject" value="New portfolio message" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="name" placeholder="Your name" aria-label="Your name" required />
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
          </div>
          <Input
            name="subject_line"
            placeholder="What’s this about?"
            aria-label="Message subject"
            required
          />
          <Textarea
            name="message"
            placeholder="Tell me a little about your idea..."
            aria-label="Message"
            className="min-h-36"
            required
          />
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-muted-foreground" role="status">
              {status === "success"
                ? "Message sent — thank you."
                : status === "error"
                  ? "Add your Web3Forms key in the portfolio data file to enable sending."
                  : "I’ll reply as soon as I can."}
            </p>
            <Button
              type="submit"
              variant="default"
              className="w-full shrink-0 sm:w-auto rounded-full bg-white text-zinc-950 px-6 py-2.5 font-bold shadow-md hover:bg-white/90 gap-2.5"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <Loader2 className="animate-spin text-primary" />
              ) : (
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              )}
              Send message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
