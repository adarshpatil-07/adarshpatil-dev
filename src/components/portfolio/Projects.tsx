
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(portfolio.projects.flatMap((project) => project.categories)),
      ).sort(),
    ],
    [],
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = useMemo(
    () => {
      if (activeCategory === "All") return portfolio.projects;

      return portfolio.projects.filter((project) =>
        project.categories.includes(activeCategory)
      );
    },
    [activeCategory],
  );

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        title="Selected projects"
        description="From curious ideas to working solutions"
      />

      {/* Category filters */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={cn(
                "min-h-9 rounded-md px-3 py-1.5 text-xs font-mono transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/40",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Mobile: up to 4 projects in one column */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {visibleProjects.length === 0 ? (
          <p className="col-span-full rounded-md border border-border py-7 text-center text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : (
          visibleProjects.slice(0, 4).map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))
        )}
      </div>

      {/* Desktop: up to 6 projects in 2 columns */}
      <div className="hidden grid-cols-2 gap-4 md:grid">
        {visibleProjects.length === 0 ? (
          <p className="col-span-full rounded-md border border-border py-7 text-center text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : (
          visibleProjects.slice(0, 6).map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))
        )}
      </div>

      {/* View all: Mobile and desktop */}
      <div className="mt-4 flex justify-center">
        <Button asChild variant="outline" className="min-h-9">
          <Link to="/projects">
            <span>View all projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
