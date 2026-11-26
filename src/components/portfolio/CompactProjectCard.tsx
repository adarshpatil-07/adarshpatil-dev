import type { Project } from "@/data/portfolio";

export function CompactProjectCard({ project }: { project: Project }) {
  return (
    <article className="full-project-card">
      <img
        src={project.image}
        alt={`${project.title} interface preview`}
        width={1200}
        height={760}
        loading="lazy"
      />
      <div className="full-project-card-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="full-project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="full-project-links">
          {project.href ? (
            <a href={project.href} target="_blank" rel="noopener">
              View project
            </a>
          ) : null}
          {project.sourceHref ? (
            <a href={project.sourceHref} target="_blank" rel="noopener">
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
