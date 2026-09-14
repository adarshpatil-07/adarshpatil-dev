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
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
