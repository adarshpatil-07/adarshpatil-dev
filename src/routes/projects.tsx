import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { CompactProjectCard } from "@/components/portfolio/CompactProjectCard";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${portfolio.name}` },
      {
        name: "description",
        content: `All projects and experiments built by ${portfolio.name}: ${portfolio.hero.intro}`,
      },
      { property: "og:title", content: `Projects — ${portfolio.name}` },
      {
        property: "og:description",
        content: `Explore all projects created by ${portfolio.name}.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />
      <main id="top" className="min-h-screen">
        <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="mb-10 md:mb-14">
            <Link
              to="/"
              className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to home
            </Link>
            <div className="mt-4 border-b border-border pb-8">
              <p className="font-mono text-xs uppercase text-muted-foreground">
                Archive / All Projects
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl md:text-6xl">
                All projects
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                Experiments, tools, and systems shaped by curiosity, constraints, and practical
                problem solving.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {portfolio.projects.map((project, index) => (
              <CompactProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
