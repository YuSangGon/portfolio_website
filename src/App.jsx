import "./App.css";

const links = {
  github: "https://github.com/yusanggon",
  linkedin: "https://www.linkedin.com/in/sanggon-yu-1811ba293",
  cv: "https://drive.google.com/file/d/1HQ8yvlhUcqMM6cgy-RzeRYw9txFDf_YU/view?usp=sharing",
  signalAudit: "https://app.signalaudit.org",
  email: "mailto:yusang5159@email.com",
};

const experience = [
  {
    company: "Life4Cuts — UK & Europe HQ",
    role: "Operations Team · Full-time",
    location: "London, United Kingdom",
    period: "Jul 2026 — Present",
    relevant: true,
    description:
      "Supporting reliable operations across UK and European locations while managing Shopify workflows and building internal analytics and automation tools.",
  },
  {
    company: "Wissensbaum",
    role: "Full-Stack Web Developer",
    location: "Seoul, South Korea",
    period: "Feb 2024 — Apr 2025",
    relevant: true,
    description:
      "Built a remote examination monitoring and proctoring system, and developed and maintained public-sector websites with a focus on reliability, usability, and long-term support.",
  },
  {
    company: "Seoul Plaza",
    role: "Shop Assistant",
    location: "London, United Kingdom",
    period: "Aug 2025 — Jul 2026",
    description:
      "Supported daily retail operations in a busy London store, assisting customers, managing stock, and resolving issues with speed and care.",
  },
  {
    company: "Private client",
    role: "Chauffeur",
    location: "Suwon, South Korea",
    period: "Mar 2023 — Oct 2023",
    description:
      "Delivered dependable, time-sensitive service while coordinating changing schedules and maintaining discretion and clear communication.",
  },
  {
    company: "Sulbing",
    role: "Kitchen Team Member",
    location: "Pohang, South Korea",
    period: "Jun 2020 — Dec 2022",
    description:
      "Worked effectively in a fast-paced team, maintaining quality and consistency during high-volume service.",
  },
];

const capabilities = [
  {
    type: "Technical",
    title: "Backend & APIs",
    items:
      "Java, Spring Boot, Node.js, TypeScript, REST APIs, authentication, background jobs",
  },
  {
    type: "Technical",
    title: "Frontend & product",
    items:
      "React, Next.js, Vite, responsive UI, accessibility, conversion-focused UX",
  },
  {
    type: "Technical",
    title: "Data & cloud",
    items:
      "PostgreSQL, MySQL, Prisma, Docker, Linux, AWS, Railway, Cloudflare R2",
  },
  {
    type: "Technical",
    title: "AI & automation",
    items:
      "OpenAI APIs, structured outputs, Playwright, browser automation, workflow design",
  },
  {
    type: "Professional",
    title: "Operations & delivery",
    items:
      "Process improvement, workflow automation, data analysis, prioritisation, ownership",
  },
  {
    type: "Professional",
    title: "People & collaboration",
    items:
      "Clear communication, cross-functional teamwork, customer empathy, adaptability, problem solving",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sanggon Yu home">
          <span>SY</span>
          <strong>Sanggon Yu</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a className="nav-cta" href={links.email}>
            Let’s talk
          </a>
        </nav>
      </header>

      <main>
        <section id="top" className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              London-based · Open to opportunities
            </p>
            <h1>
              I build useful products from backend logic to the final click.
            </h1>
            <p className="hero-intro">
              I’m Sanggon, a full-stack developer focused on reliable web
              systems, thoughtful interfaces, and shipping ideas as working
              products.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                View selected work <Arrow />
              </a>
              <a
                className="button secondary"
                href={links.cv}
                target="_blank"
                rel="noreferrer"
              >
                Download CV <Arrow />
              </a>
            </div>
          </div>
          <aside className="hero-note">
            <p className="mono-label">Current focus</p>
            <p>
              Building production SaaS with AI workflows, background processing,
              subscriptions, and secure cloud storage.
            </p>
            <div className="hero-note-footer">
              <span>Full-stack</span>
              <span>Product-minded</span>
              <span>Available in London</span>
            </div>
          </aside>
        </section>

        <section id="work" className="section project-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected side project · 01</p>
              <h2>Signal Audit</h2>
            </div>
            <a
              className="text-link"
              href={links.signalAudit}
              target="_blank"
              rel="noreferrer"
            >
              Visit live product <Arrow />
            </a>
          </div>
          <div className="project-hero">
            <div
              className="product-preview"
              aria-label="Stylised preview of Signal Audit"
            >
              <div className="preview-bar">
                <span />
                <span />
                <span />
                <small>app.signalaudit.org</small>
              </div>
              <div className="preview-body">
                <p>SEO meets conversion intelligence</p>
                <h3>
                  Get found.
                  <br />
                  Earn trust.
                  <br />
                  <em>Convert.</em>
                </h3>
                <div className="preview-score">
                  <span>Overall audit</span>
                  <strong>82</strong>
                  <small>/100</small>
                </div>
              </div>
            </div>
            <div className="project-story">
              <p className="project-lead">
                An AI SaaS auditor that turns a public landing page into a
                prioritised action plan for SEO, messaging, trust, and
                conversion.
              </p>
              <div className="impact-list">
                <div>
                  <span>01</span>
                  <p>
                    <strong>End-to-end product</strong>URL ingestion, secure
                    browser capture, technical checks, AI analysis, private
                    reports, and sharing.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>Production architecture</strong>Web and worker
                    services, PostgreSQL job state, retries, health checks, and
                    Cloudflare R2 screenshots.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>Commercial workflow</strong>Email verification, free
                    usage limits, Stripe subscriptions, cancellation lifecycle,
                    and monthly quotas.
                  </p>
                </div>
              </div>
              <div className="tech-list">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>PostgreSQL</span>
                <span>Prisma</span>
                <span>Playwright</span>
                <span>OpenAI</span>
                <span>Stripe</span>
                <span>R2</span>
                <span>Docker</span>
              </div>
              <a
                className="button primary"
                href={links.signalAudit}
                target="_blank"
                rel="noreferrer"
              >
                Open Signal Audit <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section section-grid experience-section"
        >
          <div className="section-intro">
            <p className="eyebrow">Experience</p>
            <h2>A developer shaped by both software and real customers.</h2>
            <p>
              My technical experience is backed by customer-facing work that
              taught me to communicate clearly, adapt quickly, and care about
              the experience behind the system.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className={item.relevant ? "featured-role" : ""}
              >
                <div>
                  <p className="role-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  {item.description ? (
                    <p className="role-description">{item.description}</p>
                  ) : null}
                </div>
                <p className="role-location">{item.location}</p>
                {item.relevant ? (
                  <span className="role-tag">
                    {item.company.startsWith("Life4Cuts")
                      ? "Operations + Tech"
                      : "Software"}
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2>Tools chosen around the problem.</h2>
            </div>
            <p>
              I’m strongest when I can connect product needs, backend design,
              and a clear user experience.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((group, index) => (
              <article key={group.title}>
                <div className="capability-meta">
                  <span>0{index + 1}</span>
                  <span
                    className={`skill-type skill-type-${group.type.toLowerCase()}`}
                  >
                    {group.type}
                  </span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <p className="eyebrow">Education</p>
          <div className="education-content">
            <div className="education-heading">
              <div>
                <h2>BSc Computer Science</h2>
                <p>Handong Global University · South Korea</p>
              </div>
              <span>2017 — 2023</span>
            </div>
            <p className="education-description">
              Built a strong foundation in software engineering, algorithms,
              databases, and computer systems through team-based coursework and
              practical development projects. The programme shaped how I break
              down complex problems, learn unfamiliar technologies, and turn
              ideas into maintainable software.
            </p>
            <div className="education-topics">
              <span>Software Engineering</span>
              <span>Algorithms</span>
              <span>Databases</span>
              <span>Computer Systems</span>
              <span>Team Projects</span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="eyebrow">Let’s build something useful</p>
          <h2>Looking for a full-stack developer who can own the details?</h2>
          <p>
            I’m available for software engineering opportunities in London and
            open to conversations with teams building meaningful products.
          </p>
          <div className="contact-actions">
            <a className="button light" href={links.email}>
              Email me <Arrow />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Sanggon Yu</p>
        <p>Designed and built in London.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
