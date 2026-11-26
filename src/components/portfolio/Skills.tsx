import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="site-section" style={{ paddingTop: 0 }}>
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">A practical toolkit across hardware &amp; software.</p>
        {portfolio.skills.map((group) => (
          <div className="skills-row" key={group.title}>
            <h3>{group.title === "Full Stack" ? "Full stack" : group.title}</h3>
            <div className="chips">
              {group.skills.map((skill) => (
                <span key={skill}>{skill === "Github Actions" ? "GitHub Actions" : skill}</span>
              ))}
            </div>
          </div>
        ))}
        <div className="github-activity">
          <a className="ul" href={portfolio.githubUrl} target="_blank" rel="noopener">
            GitHub activity: {portfolio.githubUsername}
          </a>
          <a href={portfolio.githubUrl} target="_blank" rel="noopener">
            <img
              src={`https://gitshine.com/card/${portfolio.githubUsername}?theme=transparent`}
              alt={`GitHub stats for ${portfolio.githubUsername}`}
              width={420}
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
