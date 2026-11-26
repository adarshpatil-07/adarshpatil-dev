import { Link } from "@tanstack/react-router";
import { getSocial, portfolio } from "@/data/portfolio";
import heroBanner from "@/assets/AOT wallpaper.gif";
import { SnowCanvas } from "./SnowCanvas";

const github = getSocial("github");
const linkedin = getSocial("linkedin");
const twitter = getSocial("twitter");
const heroSocials = [github, linkedin, twitter].filter(Boolean);

export function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <img className="hero-bg" alt="" src={heroBanner} />
      <SnowCanvas />
      <div className="hero-wrap">
        <div>
          <p className="hero-badge anim-fade">
            <i aria-hidden="true" />
            Available for internships &amp; freelance work
          </p>
          <h1>
            <span className="hero-line">
              <span>I build websites</span>
            </span>
            <span className="hero-line">
              <span>&amp; explore AI through</span>
            </span>
            <span className="hero-line">
              <span>practical projects.</span>
            </span>
          </h1>
          <p className="hero-role anim-fade">
            CSE Undergrad | Full-Stack Developer | AI/ML Enthusiast
          </p>
          <div className="hero-buttons anim-fade">
            <a
              className="site-button site-button-light"
              href={portfolio.resumeHref}
              target="_blank"
              rel="noopener"
            >
              Resume
            </a>
            <a className="site-button site-button-outline" href="#open-source">
              Open source
            </a>
            <Link className="site-button site-button-red" to="/contact">
              Get in touch
            </Link>
          </div>
          <p className="hero-socials anim-fade">
            {heroSocials.map((social) =>
              social ? (
                <a
                  className="ul"
                  href={social.href}
                  key={social.type}
                  target="_blank"
                  rel="noopener"
                >
                  {social.type === "twitter" ? "X" : social.label}
                </a>
              ) : null,
            )}
          </p>
        </div>
        <div className="hero-photo">
          <img
            src={portfolio.profileImage}
            alt="Adarsh Patil profile photo"
            width={320}
            height={400}
            fetchPriority="high"
          />
          <span className="hero-seal" aria-hidden="true">
            作
          </span>
        </div>
      </div>
    </section>
  );
}
