"use client";

import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

// Build the category list dynamically from project data
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

export function Projects() {
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
    <section id="projects" className="section-shell">
      <SectionHeading
        index="03"
        title="Selected projects"
        description="Experiments and tools shaped by curiosity, constraints, and many late nights in the lab."
      />

      {/* Category filter pills */}
      <div className="mb-8 flex flex-wrap gap-2 md:ml-[10rem] lg:mb-6">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-semibold font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer",
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-sm"
                : "border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div>
        <AnimatePresence mode="popLayout">
          {visibleProjects.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 text-center text-sm text-muted-foreground"
            >
              No projects in this category yet.
            </motion.p>
          ) : (
            visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, delay: index * 0.06 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <div className="mt-12 flex justify-center lg:mt-8">
        <Button
          asChild
          variant="outline"
          className="group rounded-full border-border hover:border-primary/50 h-11 px-7 text-xs font-semibold uppercase tracking-wider"
        >
          <Link to="/projects">
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-primary" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
