import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2, Mail, Link2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
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
  return (
    <section className="section-shell">
      <SectionHeading
        title="Get in touch"
        description="Have an internship, project, or question? Send a note."
      />

      <div className="mt-7 grid grid-cols-1 items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-16">
        <div className="min-w-0">
          <div className="border-b border-border pb-5">
            <div className="mb-3 flex items-center gap-2">
              <Mail className="h-4 w-4 text-violet-500" />
              <p className="font-mono text-xs text-muted-foreground">
                Direct email
              </p>
            </div>

            <a
              href={`mailto:${portfolio.email}`}
              className="group inline-flex max-w-full items-center gap-2 break-all text-base font-semibold text-foreground transition-colors hover:text-violet-500 sm:text-lg"
            >
              <span>{portfolio.email}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <p className="mt-2 text-xs text-muted-foreground">
              Direct inbox. Replies usually within 24 to 48 hours.
            </p>
          </div>

          <div className="border-b border-border py-5">
            <VisitorCount />
          </div>

          <div className="pt-5">
            <div className="mb-3 flex items-center gap-2">
              <Link2 className="h-4 w-4 text-violet-500" />
              <p className="font-mono text-xs text-muted-foreground">
                Profiles & links
              </p>
            </div>

            <SocialIconRow socials={profileSocials} />
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-5">
            <h3 className="text-base font-semibold text-foreground sm:text-lg">
              Contact form
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Send a message through the dedicated contact page.
            </p>
          </div>

          <Button asChild variant="outline" className="min-h-[44px]">
            <Link to="/contact">
              <span>Open contact page</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
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
    <section className="section-shell">
      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-4 sm:p-7">
        <div className="mb-5">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Send me a message
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill in the details below and I&apos;ll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
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

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              required
              className="min-h-[44px] bg-transparent"
            />

            <Input
              type="email"
              name="email"
              placeholder="Email address"
              aria-label="Email address"
              required
              className="min-h-[44px] bg-transparent"
            />
          </div>

          <Input
            name="subject_line"
            placeholder="Subject"
            aria-label="Message subject"
            required
            className="min-h-[44px] bg-transparent"
          />

          <Textarea
            name="message"
            placeholder="Your message..."
            aria-label="Message"
            className="min-h-[120px] resize-y bg-transparent"
            required
          />

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="text-xs leading-relaxed text-muted-foreground sm:max-w-[60%]"
              role="status"
            >
              {getStatusMessage()}
            </p>

            <Button
              type="submit"
              variant="default"
              disabled={status === "sending"}
              className="min-h-[44px] w-full shrink-0 px-5 sm:w-auto"
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
