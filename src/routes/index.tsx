import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Articles } from "@/components/portfolio/Articles";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { GitHubCalendar } from "@/components/portfolio/GitHubCalendar";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { OpenSource } from "@/components/portfolio/OpenSource";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Timeline } from "@/components/portfolio/Timeline";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${portfolio.name} — ${portfolio.role}` },
      {
        name: "description",
        content: `${portfolio.name}'s portfolio: ${portfolio.hero.intro}`,
      },
      { property: "og:title", content: `${portfolio.name} — ${portfolio.role}` },
      {
        property: "og:description",
        content: `${portfolio.hero.headline} ${portfolio.hero.intro}`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* About & Skills placed side by side on desktop, stacked on mobile, with GitHub Calendar below */}
        <section className="section-shell">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
            <About />
            <Skills />
          </div>
          <div className="mt-6 pt-5 border-t border-border">
            <GitHubCalendar />
          </div>
        </section>
        <Projects />
        <OpenSource />
        <Articles />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
