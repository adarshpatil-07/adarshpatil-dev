import { portfolio } from "@/data/portfolio";

export function Timeline() {
  const education = portfolio.timeline.find((item) => item.type === "Education");

  return (
    <section id="experience" className="site-section" style={{ paddingTop: 0 }}>
      <div className="section-inner">
        <h2 className="section-title">Experience &amp; education</h2>
        <p className="section-subtitle">Academic background and practical engineering timeline.</p>
        <div className="timeline">
          <article>
            <small>Experience</small>
            <h3>Independent Projects &amp; Research</h3>
            <p>
              CSE Undergrad | Full-Stack Developer | AI/ML Enthusiast, Nagpur, Maharashtra, India
            </p>
            <p>
              Building full-stack applications and AI-powered solutions, with a focus on practical
              engineering and problem-solving.
            </p>
          </article>
          {education ? (
            <article>
              <small>Education, 2025 to 2029</small>
              <h3>{education.title}</h3>
              <p>
                {education.organization}, {education.location}
              </p>
              <p>
                Core subjects: DSA, operating systems, databases, computer networks and software
                development.
              </p>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
