import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        index="03"
        title="Selected projects"
        description="Experiments and tools shaped by curiosity, constraints, and many late nights in the lab."
      />
      <div>
        {portfolio.projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
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
