import { useEffect, useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { CompactProjectCard } from "@/components/portfolio/CompactProjectCard";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

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
      links: [
        { rel: "canonical", href: url },
      ],
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
      <main id="top">
        <section className="section-shell">
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground underline underline-offset-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="mt-3 border-b border-border pb-4">
              <span className="font-mono text-xs text-muted-foreground">
                Archive / All Projects
              </span>
              <h1 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                All projects
              </h1>
              <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                Experiments, tools, and systems shaped by curiosity, constraints, and practical engineering.
              </p>
            </div>
          </div>

          {/* Category filter pills */}
          <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
            {ALL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "min-h-[44px] rounded-md px-3 py-1.5 text-xs font-mono transition-[background-color,border-color,color] duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/40",
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
            {visibleProjects.length === 0 ? (
              <p className="col-span-full py-8 text-center text-sm text-muted-foreground border border-border rounded-md">
                No projects in this category yet.
              </p>
            ) : (
              visibleProjects.map((project, index) => (
                <CompactProjectCard key={project.title} project={project} index={index} />
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
