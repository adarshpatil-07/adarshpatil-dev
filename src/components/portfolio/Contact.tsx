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
    <section id="contact" className="section-shell">
      <SectionHeading
        index="07"
        title="Get in touch"
        description="Have an internship, project, or question? Send a note."
      />

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1fr_1.3fr] lg:gap-8">
        {/* Left column: Direct contact, Visitor count, Socials */}
        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-3 sm:p-4">
            <p className="font-mono text-xs text-muted-foreground mb-1">Direct email</p>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center gap-1.5 text-base sm:text-lg font-bold text-foreground underline underline-offset-4 hover:text-muted-foreground break-all"
            >
              <span>{portfolio.email}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              Direct inbox. Replies usually within 24 to 48 hours.
            </p>
          </div>

          <VisitorCount />

          <div className="rounded-md border border-border bg-card p-3 sm:p-4">
            <p className="font-mono text-xs text-muted-foreground mb-2">Profiles & links</p>
            <SocialIconRow socials={profileSocials} />
          </div>
        </div>

        {/* Right column: Web3Forms form */}
        <form onSubmit={handleSubmit} className="rounded-md border border-border bg-card p-3 sm:p-4 space-y-3">
          <input type="hidden" name="access_key" value={portfolio.web3FormsAccessKey} />
          <input type="hidden" name="subject" value="New portfolio message" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
            placeholder="Subject"
            aria-label="Message subject"
            required
          />

          <Textarea
            name="message"
            placeholder="Your message..."
            aria-label="Message"
            className="min-h-[120px]"
            required
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <p className="text-xs text-muted-foreground" role="status">
              {status === "success"
                ? "Message sent - thank you."
                : status === "error"
                  ? "Add your Web3Forms key in data/portfolio.ts to enable sending."
                  : "I'll reply as soon as possible."}
            </p>

            <Button
              type="submit"
              variant="default"
              disabled={status === "sending"}
              className="min-h-[44px] w-full sm:w-auto px-5"
            >
              {status === "sending" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowUpRight className="h-4 w-4" />
              )}
              <span>Send message</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
