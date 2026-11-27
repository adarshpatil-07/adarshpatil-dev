import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import absoluteCinemaImage from "@/assets/AbsoluteCinema.png";
import miyukiImage from "@/assets/miyuki.png";
import boardImage from "@/assets/project-board.jpg";
import philosopherImage from "@/assets/philosopher-ai.webp";
import labImage from "@/assets/project-lab.jpg";
import portfolioImage from "@/assets/project-telemetry.jpg";
import { portfolio } from "@/data/portfolio";

interface SelectedProject {
  title: string;
  description: string;
  stack: string;
  image: string;
  categories: string[];
  width?: "w7" | "w5" | "w12";
  links: { label: string; href: string }[];
}

const selectedProjects: SelectedProject[] = [
  {
    title: "AbsoluteCinema",
    description:
      "Movie discovery and tracking platform inspired by IMDb and Letterboxd: search, details, watchlists, ratings and reviews.",
    stack: "React, TypeScript, Python, FastAPI, PostgreSQL",
    image: absoluteCinemaImage,
    categories: ["fs"],
    width: "w7",
    links: [
      { label: "View project", href: "https://absolute-cinema-coral.vercel.app/" },
      { label: "Source", href: `${portfolio.githubUrl}/absolute-cinema` },
    ],
  },
  {
    title: "Miyuki (美雪)",
    description:
      "Cinematic Japanese winter village with day, sunset and night moods, interactive snowfall, ambient audio and fullscreen.",
    stack: "React, TypeScript, Vite, CSS, HTML Canvas",
    image: miyukiImage,
    categories: ["fe"],
    width: "w5",
    links: [
      { label: "View project", href: "https://miyuki-one.vercel.app/" },
      { label: "Source", href: `${portfolio.githubUrl}/miyuki` },
    ],
  },
  {
    title: "RAG Document Q&A Chatbot",
    description:
      "Answers questions across multiple PDFs using RAG, vector embeddings and Gemini, with citations.",
    stack: "Python, LangChain, Gemini, ChromaDB, Streamlit",
    image: boardImage,
    categories: ["ai", "gen"],
    links: [
      { label: "View project", href: "https://adarsh-rag-chatbot.streamlit.app/" },
      {
        label: "Source",
        href: `${portfolio.githubUrl}/Datheon_Python_Generative_AI_LangChain_Internship`,
      },
    ],
  },
  {
    title: "Philosopher AI",
    description:
      "Chat with literary figures through uploaded books. RAG answers with source citations.",
    stack: "Python, FastAPI, ChromaDB, Gemini, React",
    image: philosopherImage,
    categories: ["gen", "fs"],
    links: [{ label: "Source", href: `${portfolio.githubUrl}/philosopher-ai` }],
  },
  {
    title: "TensorFlow Computer Vision",
    description:
      "Fashion MNIST classifier for 70,000 images across 10 apparel categories: preprocessing, training, evaluation and prediction visuals.",
    stack: "Python, TensorFlow, Keras, NumPy",
    image: labImage,
    categories: ["ai"],
    links: [{ label: "Source", href: `${portfolio.githubUrl}/tensorflow-computer-vision` }],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio of my projects, skills and growth as a Computer Engineering student.",
    stack: "TypeScript, React 19, Tailwind CSS, Vite",
    image: portfolioImage,
    categories: ["fe"],
    width: "w12",
    links: [
      { label: "View project", href: `${portfolio.siteUrl}/` },
      { label: "Source", href: `${portfolio.githubUrl}/adarshpatil-dev` },
    ],
  },
];

const filters = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI / ML" },
  { value: "fe", label: "Creative Frontend" },
  { value: "fs", label: "Full Stack" },
  { value: "gen", label: "Generative AI" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const panels = Array.from(grid.querySelectorAll<HTMLElement>(".project-reveal:not([hidden])"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      panels.forEach((panel) => panel.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    panels.forEach((panel) => {
      panel.classList.remove("is-visible");
      observer.observe(panel);
    });
    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <section id="projects" className="site-section" style={{ paddingTop: 0 }}>
      <div className="section-inner">
        <h2 className="section-title">
          Selected projects
          <span className="section-jp" lang="ja">
            作品
          </span>
        </h2>
        <p className="section-subtitle">From curious ideas to working solutions.</p>
        <div className="project-tabs" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="project-grid" ref={gridRef}>
          {selectedProjects.map((project) => {
            const visible = activeFilter === "all" || project.categories.includes(activeFilter);
            return (
              <div
                className={`project-reveal ${project.width ?? ""}`}
                hidden={!visible}
                key={project.title}
              >
                <article className="project-panel">
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                  <div className="project-caption">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <small>{project.stack}</small>
                    {project.links.map((link) => (
                      <a
                        className="ul"
                        href={link.href}
                        key={link.label}
                        target="_blank"
                        rel="noopener"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
        <p className="section-note">
          <Link className="ul" to="/projects">
            View all projects
          </Link>
        </p>
      </div>
    </section>
  );
}
