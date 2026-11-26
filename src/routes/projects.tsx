import { useEffect, useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { CompactProjectCard } from "@/components/portfolio/CompactProjectCard";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => {
    const title = `Projects | ${portfolio.name}`;
    const description = `Explore engineering projects and experiments built by ${portfolio.name}, covering full-stack web applications and AI/ML systems.`;
    const url = `${portfolio.siteUrl}/projects`;
    const image = `${portfolio.siteUrl}/og-image.png`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:site_name", content: portfolio.name },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: `Projects by ${portfolio.name}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProjectsPage,
});

function buildCategories(projects: typeof portfolio.projects): string[] {
  const seen = new Set<string>();
  const cats: string[] = [];
  for (const project of projects) {
    for (const cat of project.categories) {
      if (!seen.has(cat)) {
        seen.add(cat);
        cats.push(cat);
      }
    }
  }
  return ["All", ...cats.sort()];
}

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const ALL_CATEGORIES = useMemo(() => buildCategories(portfolio.projects), []);
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? portfolio.projects
        : portfolio.projects.filter((p) => p.categories.includes(activeCategory)),
    [activeCategory],
  );

  return (
    <>
      <Header />
      <main id="top" className="route-main">
        <section className="route-shell">
          <div>
            <Link to="/" className="ul">
              Back to home
            </Link>

            <div className="mt-4">
              <span className="text-sm text-slate">Archive / All Projects</span>
              <h1 className="route-heading">All projects</h1>
              <p className="route-lede">
                Experiments, tools, and systems shaped by curiosity, constraints, and practical
                engineering.
              </p>
            </div>
          </div>

          <div className="route-filter" role="group" aria-label="Filter projects">
            {ALL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="full-project-grid">
            {visibleProjects.length === 0 ? (
              <p>No projects in this category yet.</p>
            ) : (
              visibleProjects.map((project) => (
                <CompactProjectCard key={project.title} project={project} />
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
