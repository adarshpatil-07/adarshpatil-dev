import { useEffect, useRef, useState, type FormEvent } from "react";
import { Footer } from "@/components/portfolio/Footer";
import { Articles } from "@/components/portfolio/Articles";
import { VisitorCount } from "@/components/portfolio/VisitorCount";
import { portfolio } from "@/data/portfolio";

const profileSocials = portfolio.socials.filter((social) => social.type !== "email");

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    },
    [],
  );

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${portfolio.email}`;
    }
  }

  return (
    <section id="contact" className="site-section contact-section">
      <div className="section-inner">
        <h2 className="section-title">Get in touch</h2>
        <p className="section-subtitle">Have an internship, project, or question? Send a note.</p>
        <a className="contact-mail" href={`mailto:${portfolio.email}`}>
          {portfolio.email}
        </a>
        <p>Replies usually within 24 to 48 hours.</p>
        <div className="contact-buttons">
          <button className="site-button site-button-outline" type="button" onClick={copyEmail}>
            {copied ? "Copied" : "Copy email"}
          </button>
          <a className="site-button site-button-red" href="/contact">
            Open contact page
          </a>
        </div>
        <ul className="contact-socials">
          {profileSocials.map((social) => (
            <li key={social.type}>
              <a className="ul" href={social.href} target="_blank" rel="noopener">
                {social.type === "twitter" ? "X" : social.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="contact-inline-feature">
          <VisitorCount />
          <Articles />
        </div>
        <Footer embedded />
      </div>
    </section>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const isKeyEmpty =
    !portfolio.web3FormsAccessKey.trim() || portfolio.web3FormsAccessKey.startsWith("YOUR_");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (isKeyEmpty) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  function getStatusMessage() {
    if (status === "success") return "Message sent successfully - thank you!";
    if (status === "sending") return "Sending message...";
    if (isKeyEmpty) {
      return "Add your Web3Forms key in the portfolio data file to enable sending.";
    }
    if (status === "error") {
      return "Failed to send message. Please try again or email directly.";
    }
    return "I'll reply as soon as possible.";
  }

  return (
    <section className="route-shell">
      <div className="route-contact-form">
        <h1>Send me a message</h1>
        <p>Fill in the details below and I&apos;ll get back to you.</p>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value={portfolio.web3FormsAccessKey} />
          <input type="hidden" name="subject" value="New portfolio message" />
          <div className="form-names">
            <input name="name" placeholder="Your name" aria-label="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
          </div>
          <input name="subject_line" placeholder="Subject" aria-label="Message subject" required />
          <textarea name="message" placeholder="Your message..." aria-label="Message" required />
          <div className="form-submit-row">
            <p className="form-status" role="status">
              {getStatusMessage()}
            </p>
            <button
              className="site-button site-button-red"
              type="submit"
              disabled={status === "sending"}
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
