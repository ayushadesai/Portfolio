function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-10 lg:px-8">
      {/* Hero */}
      <section className="grid min-h-[calc(100vh-72px)] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Left */}
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#0D7377]">
            Operations · Strategy · Analytics
          </p>
          <div>
            <h1 className="font-heading text-5xl leading-tight text-[#18160F] sm:text-6xl lg:text-7xl">
              Hi, I'm Ayush{' '}
              <span className="italic text-[#0D7377]">Desai</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#18160F]/80">
              Operations and analytics professional with co-op experience at
              Arrowstreet Capital (operational risk) and Scotiabank (data
              operations, global banking). I work at the intersection of
              business process and data — using analytical tools to solve
              operational and strategic problems. Open to full-time roles in
              operations, strategy, and analytics.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
            <a
              href="/resume"
              className="rounded-full border border-[#0D7377] bg-[#0D7377] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#0a5c60]"
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
                <p className="mt-2.5 text-sm font-semibold text-[#18160F]">2 co-ops + 3 internships</p>
              </div>
              <div className="rounded-2xl border border-[#18160F]/10 bg-white/90 p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-[#18160F]/50">Focus Areas</p>
                <p className="mt-2.5 text-sm font-semibold text-[#18160F]">Risk, Ops, Analytics</p>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-4 shadow-[0_0_0_3px_rgba(16,185,129,0.10)]">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#18160F]">
                <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.22)] animate-pulse" />
                Open to full-time opportunities
              </div>
              <p className="mt-2 text-sm leading-6 text-[#18160F]/70">
                Roles in operations, strategy, and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mt-24 space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#0D7377]">Experience</p>
          <h2 className="mt-3 font-heading text-3xl text-[#18160F]">
            Recent experience
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#18160F]/8 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#18160F]/50">Arrowstreet Capital</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#18160F]/50">Jul 2025 – Dec 2025</span>
            </div>
            <h3 className="mt-5 font-heading text-2xl text-[#18160F]">
              Operational Risk &amp; Control Co-op
            </h3>
            <p className="mt-3 text-[1.0625rem] leading-7 text-[#18160F]/70">
              Managed operational risk monitoring, KYC onboarding, and compliance
              testing for a quantitative investment management firm.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#18160F]/8 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#18160F]/50">Scotiabank</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#18160F]/50">Jul 2024 – Dec 2024</span>
            </div>
            <h3 className="mt-5 font-heading text-2xl text-[#18160F]">
              Governance &amp; Reporting Co-op
            </h3>
            <p className="mt-3 text-[1.0625rem] leading-7 text-[#18160F]/70">
              Supported governance and reporting workflows across global banking
              operations, executing RCSAs and maintaining data quality standards
              across multiple divisions.
            </p>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <div className="divide-y divide-[#18160F]/8 rounded-[1.75rem] border border-[#18160F]/8 bg-white shadow-sm overflow-hidden">
          {[
            { label: 'Finance / Risk', values: 'Operational Risk · KYC/AML · Regulatory Reporting · RCSAs' },
            { label: 'Tools', values: 'Tableau · Jira · Excel · Pandas · Plotly · Polars · R' },
            { label: 'Languages', values: 'Python · SQL · R' },
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
      <section className="mt-12 rounded-[2rem] bg-[#0D7377] px-8 py-10 text-white shadow-[0_24px_64px_rgba(26,61,224,0.20)]">
        <p className="text-xs uppercase tracking-[0.35em] text-[#A8D5D7]">Education</p>
        <p className="mt-4 font-heading text-2xl leading-snug sm:text-3xl">
          Northeastern University, D'Amore-McKim — B.S. Data Science &amp; Business Administration, Cum Laude
        </p>
        <p className="mt-2 text-sm text-[#A8D5D7]">May 2026 · Boston, MA · GPA 3.55</p>
      </section>
    </div>
  );
}

export default About;
