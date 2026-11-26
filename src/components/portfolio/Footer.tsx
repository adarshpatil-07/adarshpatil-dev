import { portfolio } from "@/data/portfolio";

export function Footer({ embedded = false }: { embedded?: boolean }) {
  const content = (
    <>
      <span>
        © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
      </span>
      <span lang="ja">またね。</span>
    </>
  );

  return embedded ? (
    <footer className="contact-footer">{content}</footer>
  ) : (
    <footer className="site-footer">
      <div>{content}</div>
    </footer>
  );
}
