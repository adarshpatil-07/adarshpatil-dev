import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const ALL_CATEGORIES = useMemo(() => ["All", "AI / ML", "Generative AI", "Full Stack"], []);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? portfolio.projects
        : portfolio.projects.filter((p) =>
            p.categories.includes(
              activeCategory === "Generative AI" ? "Computer Vision" : activeCategory,
            ),
          ),
    [activeCategory],
  );

  const displayedProjects = showAll
  ? visibleProjects
  : visibleProjects.slice(0, 3);

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        index="03"
        title="Selected projects"
        description="Experiments and tools shaped by curiosity, constraints, and practical engineering."
      />

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

      {/* Project cards list */}
      <div className="space-y-3 sm:space-y-4">
        {visibleProjects.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground border border-border rounded-md">
            No projects in this category yet.
          </p>
        ) : (
          displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))
        )}
      </div>

      <div className="mt-5 flex justify-center">
        <Button asChild variant="outline" className="min-h-[44px]">
          <Link to="/projects">
            <span>View all projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
