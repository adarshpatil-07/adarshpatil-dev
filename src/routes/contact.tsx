import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Header } from "@/components/portfolio/Header";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => {
    const title = `Contact | ${portfolio.name}`;
    const description = `Send a message to ${portfolio.name} about internships, projects, or other opportunities.`;
    const url = `${portfolio.siteUrl}/contact`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Header />
      <main className="route-main">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
