const NAV_ITEMS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

const SKILLS = [
  { category: 'Languages', values: 'Python, R, TypeScript, SQL, Java' },
  { category: 'Data & ML', values: 'Polars, NumPy, scikit-learn, Bayesian Methods, K-Means, NLP' },
  { category: 'Web & Tools', values: 'React, FastAPI, PostgreSQL, ChromaDB, Vercel, Git' },
  { category: 'Finance / Risk', values: 'Operational Risk Frameworks, Regulatory Reporting, Data Ops' },
];

const PROJECTS_BRIEF = [
  {
    name: 'NYC Airbnb Ghost Listing Detector',
    tech: 'Python · R · Bayesian ML · R Shiny · NumPy',
    desc: 'Identifies fraudulent Airbnb listings using Bayesian classification and a from-scratch neural network, deployed as an interactive Shiny dashboard.',
  },
  {
    name: 'Surplus Connect',
    tech: 'FastAPI · React · PostgreSQL · ChromaDB · Vercel',
    desc: 'Full-stack platform matching food-surplus donors to nonprofits via semantic vector search and real-time availability tracking.',
  },
  {
    name: 'Gaming & Mental Health Analytics',
    tech: 'Python · Polars · Plotly · K-Means · Quarto',
    desc: 'End-to-end analytics pipeline exploring correlations between gaming behaviour and mental-health outcomes, published as an interactive Quarto report.',
  },
];

function Resume() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 lg:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-heading text-5xl text-[#18160F] sm:text-6xl">
            Ayush Desai
          </h1>
          <p className="mt-2 text-base text-[#18160F]/60">
            Data Science &amp; Operations · Boston, MA · desai.ayush@northeastern.edu
          </p>
          <p className="mt-1 text-sm text-[#0D7377]/70">
            Actively seeking full-time opportunities · Available June 2026
          </p>
        </div>
        <a
          href="/resume.pdf"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0D7377] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#0a5c60]"
        >
          Download PDF
        </a>
      </div>

      <hr className="my-10 border-[#18160F]/10" />

      <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        {/* Sticky sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-[#18160F]/60 transition hover:bg-[#EDE9E2] hover:text-[#18160F]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="space-y-16">
          {/* Experience */}
          <section id="experience">
            <p className="text-xs uppercase tracking-[0.35em] text-[#0D7377]">Experience</p>

            <div className="mt-8 space-y-10">
              {/* Arrowstreet */}
              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-heading text-2xl text-[#18160F]">
                    Arrowstreet Capital
                  </h3>
                  <span className="font-mono text-xs text-[#18160F]/50">2024–2025</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#0D7377]">Operational Risk Co-op</p>
                <p className="mt-3 text-sm leading-6 text-[#18160F]/70">
                  Built automated risk monitoring pipelines and internal reporting tools for a
                  quantitative investment management firm. Worked across Python and SQL to surface
                  operational exposures and streamline regulatory data workflows.
                </p>
              </div>
              <hr className="border-[#18160F]/8" />

              {/* Scotiabank */}
              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-heading text-2xl text-[#18160F]">
                    Scotiabank
                  </h3>
                  <span className="font-mono text-xs text-[#18160F]/50">2023–2024</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#0D7377]">Governance &amp; Reporting Co-op</p>
                <p className="mt-3 text-sm leading-6 text-[#18160F]/70">
                  Supported governance and reporting workflows across global banking operations.
                  Automated manual processes and maintained data quality standards for
                  enterprise-level datasets across multiple divisions.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section id="education">
            <p className="text-xs uppercase tracking-[0.35em] text-[#0D7377]">Education</p>
            <div className="mt-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading text-2xl text-[#18160F]">
                  Northeastern University
                </h3>
                <span className="font-mono text-xs text-[#18160F]/50">2022–2026</span>
              </div>
              <p className="mt-1 text-sm font-medium text-[#0D7377]">
                Bachelor of Science in Data Science and Business Administration, Cum Laude
              </p>
              <p className="mt-3 text-sm leading-6 text-[#18160F]/70">
                Boston, MA · GPA 3.55 · Combined major spanning statistical modelling, machine learning,
                corporate finance, and operations management.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section id="skills">
            <p className="text-xs uppercase tracking-[0.35em] text-[#0D7377]">Skills</p>
            <div className="mt-8 space-y-0">
              {SKILLS.map((row, i) => (
                <div key={row.category}>
                  <div className="grid grid-cols-[120px_1fr] gap-6 py-4 sm:grid-cols-[160px_1fr]">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#18160F]/50 pt-0.5">
                      {row.category}
                    </span>
                    <span className="text-sm leading-6 text-[#18160F]/80">{row.values}</span>
                  </div>
                  {i < SKILLS.length - 1 && <hr className="border-[#18160F]/8" />}
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects">
            <p className="text-xs uppercase tracking-[0.35em] text-[#0D7377]">Projects</p>
            <div className="mt-8 space-y-8">
              {PROJECTS_BRIEF.map((p) => (
                <div key={p.name}>
                  <h3 className="font-heading text-xl text-[#18160F]">{p.name}</h3>
                  <p className="mt-1 font-mono text-xs text-[#0D7377]/70">{p.tech}</p>
                  <p className="mt-2 text-sm leading-6 text-[#18160F]/70">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Contact strip */}
      <div className="mt-20 border-t border-[#18160F]/8 pt-10 text-center">
        <p className="text-sm font-medium text-[#18160F]/50 uppercase tracking-[0.3em] mb-4">Let's connect</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:desai.ayush@northeastern.edu"
            className="inline-flex items-center gap-2 rounded-full border border-[#18160F]/10 bg-white px-5 py-2.5 text-sm font-medium text-[#18160F] shadow-sm transition hover:bg-[#EDE9E2]"
          >
            <span className="text-[#18160F]/40">✉</span>
            desai.ayush@northeastern.edu
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-a-desai/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#18160F]/10 bg-white px-5 py-2.5 text-sm font-medium text-[#18160F] shadow-sm transition hover:bg-[#EDE9E2]"
          >
            <span className="text-[#18160F]/40">in</span>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
