import { portfolio } from "@/data/portfolio";

const details = [
  ["How I work", "From first idea to deployed product."],
  ["Also into", "AI agents and open source."],
  ["Off screen", "Philosophy, literature, chess, and writing about tech and ideas."],
  ["Looking for", "An internship to gain practical experience."],
] as const;

export function About() {
  return (
    <section id="about" className="site-section">
      <div className="section-inner about-grid">
        <div>
          <h2 className="section-title">About</h2>
          <p className="about-lead">
            Computer Engineering student building full-stack products and AI tools.
          </p>
        </div>
        <dl>
          {details.map(([title, description]) => (
            <div className="about-row" key={title}>
              <dt>{title}</dt>
              <dd>{description}</dd>
            </div>
          ))}
          <div className="about-row">
            <dt>Exploring now</dt>
            <dd className="chips">
              {portfolio.about.interests.map((interest) => (
                <span key={interest}>
                  {interest === "Full-Stack Development"
                    ? "Full-stack development"
                    : interest === "Python & Libraries"
                      ? "Python & libraries"
                      : interest === "Open Source"
                        ? "Open source"
                        : interest}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
