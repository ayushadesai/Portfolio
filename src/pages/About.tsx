function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-10 lg:px-8">
      {/* Hero */}
      <section className="grid min-h-[calc(100vh-72px)] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Left */}
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#1A3DE0]">
            Data Science · Business Administration
          </p>
          <div>
            <h1 className="font-display text-5xl font-semibold leading-tight text-[#18160F] sm:text-6xl lg:text-7xl">
              Hi, I'm Ayush{' '}
              <span className="italic text-[#1A3DE0]">Desai</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#18160F]/80">
              B.S. Data Science &amp; Business Administration, Northeastern
              University, May 2026. Previously at Arrowstreet Capital
              (operational risk co-op) and Scotiabank (data &amp; operations
              co-op). Open to full-time roles in data, operations, and
              quantitative finance starting June 2026.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:desai.ayush@northeastern.edu"
              className="rounded-full border border-[#18160F]/10 bg-white px-5 py-2.5 text-sm font-medium text-[#18160F] shadow-sm transition hover:bg-[#EDE9E2]"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/ayushdesai"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#18160F]/10 bg-white px-5 py-2.5 text-sm font-medium text-[#18160F] shadow-sm transition hover:bg-[#EDE9E2]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ayushdesai"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#18160F]/10 bg-white px-5 py-2.5 text-sm font-medium text-[#18160F] shadow-sm transition hover:bg-[#EDE9E2]"
            >
              GitHub
            </a>
            <a
              href="/resume"
              className="rounded-full border border-[#1A3DE0] bg-[#1A3DE0] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#1634c6]"
            >
              Résumé
            </a>
          </div>
        </div>

        {/* Right — info panel */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#EDE9E2] p-8 shadow-[0_30px_80px_rgba(23,22,20,0.08)]">
          {/* Concentric circle decoration */}
          <div className="concentric-panel" />
          <div className="relative space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#18160F]/10 bg-white/90 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-[#18160F]/50">Location</p>
                <p className="mt-2.5 text-sm font-semibold text-[#18160F]">Boston, MA</p>
              </div>
              <div className="rounded-2xl border border-[#18160F]/10 bg-white/90 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-[#18160F]/50">Education</p>
                <p className="mt-2.5 text-sm font-semibold text-[#18160F]">B.S. Data Science &amp; Business</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#18160F]/10 bg-white/90 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-[#18160F]/50">Experience</p>
                <p className="mt-2.5 text-sm font-semibold text-[#18160F]">Finance &amp; ops co-ops</p>
              </div>
              <div className="rounded-2xl border border-[#18160F]/10 bg-white/90 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-[#18160F]/50">Focus Areas</p>
                <p className="mt-2.5 text-sm font-semibold text-[#18160F]">ML, Risk, Web</p>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-4 shadow-[0_0_0_3px_rgba(16,185,129,0.10)]">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#18160F]">
                <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.22)] animate-pulse" />
                Available June 2026
              </div>
              <p className="mt-2 text-sm leading-6 text-[#18160F]/70">
                Open to full-time roles in data engineering, analytics, and
                quantitative finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mt-24 space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#1A3DE0]">Experience</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#18160F]">
            Recent co-op roles
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#18160F]/8 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#18160F]/50">Arrowstreet Capital</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#18160F]/50">2024–2025</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-[#18160F]">
              Operational Risk Co-op
            </h3>
            <p className="mt-3 text-base leading-7 text-[#18160F]/70">
              Built risk monitoring tools and automated reporting pipelines,
              reducing manual reporting time significantly across a quantitative
              investment management firm.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#18160F]/8 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#18160F]/50">Scotiabank</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#18160F]/50">2023–2024</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-[#18160F]">
              Governance &amp; Reporting Co-op
            </h3>
            <p className="mt-3 text-base leading-7 text-[#18160F]/70">
              Supported governance and reporting workflows across global banking
              operations, maintaining data quality standards across multiple
              divisions.
            </p>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <div className="divide-y divide-[#18160F]/8 rounded-[1.75rem] border border-[#18160F]/8 bg-white shadow-sm overflow-hidden">
          {[
            { label: 'Languages', values: 'Python · R · SQL · Java' },
            { label: 'Tools', values: 'sklearn · brms · FastAPI · React · PostgreSQL' },
            { label: 'Finance / Risk', values: 'Operational Risk · KYC/AML · Regulatory Reporting · Bayesian ML' },
          ].map((row) => (
            <div key={row.label} className="grid grid-cols-[140px_1fr] gap-6 px-8 py-4 sm:grid-cols-[180px_1fr]">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#18160F]/45 self-center">
                {row.label}
              </span>
              <span className="text-sm text-[#18160F]/75">{row.values}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education strip */}
      <section className="mt-12 rounded-[2rem] bg-[#1A3DE0] px-8 py-10 text-white shadow-[0_24px_64px_rgba(26,61,224,0.20)]">
        <p className="text-xs uppercase tracking-[0.35em] text-[#C7D4FF]">Education</p>
        <p className="mt-4 font-display text-2xl font-semibold leading-snug sm:text-3xl">
          Northeastern University — B.S. Data Science &amp; Business Administration
        </p>
        <p className="mt-2 text-sm text-[#C7D4FF]">2022–2026 · Boston, MA</p>
      </section>
    </div>
  );
}

export default About;
