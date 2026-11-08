import { useEffect, useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import { CompactProjectCard } from "@/components/portfolio/CompactProjectCard";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

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
      <main id="top" className="min-h-screen">
        <section className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-16 lg:max-w-7xl lg:px-10 lg:py-10">
          <div className="mb-6 md:mb-14 lg:mb-8">
            <Link
              to="/"
              className="group mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:mb-8 lg:mb-5"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to home
            </Link>
            <div className="mt-3 border-b border-border/60 pb-5 md:mt-4 md:pb-8 lg:mt-3 lg:pb-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                Archive / All Projects
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                All projects
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                Experiments, tools, and systems shaped by curiosity, constraints, and practical
                problem solving.
              </p>
            </div>
          </div>

          {/* Category filter pills */}
          <div className="mb-5 flex flex-wrap gap-2 md:mb-8">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold font-mono uppercase tracking-wider transition-[border-color,background-color,color] duration-200 cursor-pointer",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-5">
            <AnimatePresence mode="popLayout">
              {visibleProjects.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full py-12 text-center text-sm text-muted-foreground"
                >
                  No projects in this category yet.
                </motion.p>
              ) : (
                visibleProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2, delay: index * 0.06 }}
                  >
                    <CompactProjectCard project={project} index={index} />
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
