import { portfolio } from "@/data/portfolio";

export function Articles() {
  if (!portfolio.articles.length) return null;

  return (
    <div className="contact-inline-feature" aria-label="Articles">
      {portfolio.articles.map((article) => (
        <p key={article.title}>
          {article.href ? (
            <a className="ul" href={article.href} target="_blank" rel="noopener">
              {article.title}
            </a>
          ) : (
            article.title
          )}
          {article.description ? ` — ${article.description}` : null}
        </p>
      ))}
    </div>
  );
}
