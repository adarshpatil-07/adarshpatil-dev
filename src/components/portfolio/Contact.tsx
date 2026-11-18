
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SocialIconRow } from "./SocialIcons";
import { VisitorCount } from "./VisitorCount";

const profileSocials = portfolio.socials.filter(
  (social) => social.type !== "email"
);

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const isKeyEmpty =
    !portfolio.web3FormsAccessKey.trim() ||
    portfolio.web3FormsAccessKey.startsWith("YOUR_");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isKeyEmpty) {
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

  function getStatusMessage() {
    if (status === "success") {
      return "Message sent successfully - thank you!";
    }
    if (status === "sending") {
      return "Sending message...";
    }
    if (isKeyEmpty) {
      return "Add your Web3Forms key in the portfolio data file to enable sending.";
    }
    if (status === "error") {
      return "Failed to send message. Please try again or email directly.";
    }
    return "I'll reply as soon as possible.";
  }

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        index="07"
        title="Get in touch"
        description="Have an internship, project, or question? Send a note."
      />

      <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 md:grid-cols-[1fr_1.3fr] lg:gap-8">
        {/* Left column */}
        <div className="space-y-3 sm:space-y-4">
          <div className="rounded-md border border-border bg-card p-3 sm:p-4">
            <p className="mb-1 font-mono text-xs text-muted-foreground">
              Direct email
            </p>

            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center gap-1.5 break-all text-sm font-bold text-foreground underline underline-offset-4 hover:text-muted-foreground sm:text-lg"
            >
              <span>{portfolio.email}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </a>

            <p className="mt-1.5 text-xs text-muted-foreground sm:mt-2">
              Direct inbox. Replies usually within 24 to 48 hours.
            </p>
          </div>

          <VisitorCount />

          <div className="rounded-md border border-border bg-card p-3 sm:p-4">
            <p className="mb-2 font-mono text-xs text-muted-foreground">
              Profiles & links
            </p>
            <SocialIconRow socials={profileSocials} />
          </div>
        </div>

        {/* Right column */}
        <form
          onSubmit={handleSubmit}
          className="space-y-2 rounded-md border border-border bg-card p-2.5 sm:space-y-3 sm:p-4"
        >
          <input
            type="hidden"
            name="access_key"
            value={portfolio.web3FormsAccessKey}
          />
          <input
            type="hidden"
            name="subject"
            value="New portfolio message"
          />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
            <Input
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              required
            />
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
            className="min-h-[75px] sm:min-h-[120px]"
            required
          />

          <div className="flex flex-col justify-between gap-2.5 pt-0.5 sm:flex-row sm:items-center sm:gap-3 sm:pt-1">
            <p className="text-xs text-muted-foreground" role="status">
              {getStatusMessage()}
            </p>

            <Button
              type="submit"
              variant="default"
              disabled={status === "sending"}
              className="min-h-[42px] w-full px-5 sm:min-h-[44px] sm:w-auto"
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
