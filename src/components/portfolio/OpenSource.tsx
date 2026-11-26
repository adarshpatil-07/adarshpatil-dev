import { portfolio } from "@/data/portfolio";

export function OpenSource() {
  const contribution = portfolio.openSource[0];

  return (
    <section id="open-source" className="site-section" style={{ paddingTop: 0 }}>
      <div className="section-inner">
        <h2 className="section-title">Open source</h2>
        <p className="section-subtitle">Contributions to open-source software and projects.</p>
        {contribution ? (
          <article className="open-source-card">
            <b>Merged</b>
            <div>
              <h3>Added GitHub Copilot install instructions</h3>
              <p>
                My first open source contribution, to Understand-Anything (93.3k stars, 8k forks).
                PR #756 updated 9 README files with VS Code and GitHub Copilot installation steps.
              </p>
            </div>
            <a
              className="site-button open-source-link"
              href={contribution.href}
              target="_blank"
              rel="noopener"
            >
              View pull request
            </a>
          </article>
        ) : null}
        {portfolio.articles.length === 0 ? (
          <p className="section-note">Articles: notes and essays are coming soon.</p>
        ) : null}
      </div>
    </section>
  );
}
