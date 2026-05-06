type ExperienceRole = {
  org: string;
  orgUrl?: string;
  location: string;
  title: string;
  dates: string;
  bullets: string[];
};

const EXPERIENCE: ExperienceRole[] = [
  {
    org: 'Arrowstreet Capital',
    orgUrl: 'https://www.arrowstreetcapital.com',
    location: 'Boston, MA',
    title: 'Operational Risk & Control · Business Analyst Co-op',
    dates: 'Jul 2025 – Dec 2025',
    bullets: [
      'Conducted data validation and anomaly detection on screening datasets, removing 150+ misclassified entities and improving compliance monitoring accuracy.',
      'Executed quarterly Rule 206(4)-7 compliance testing and delivered a results dashboard to the Head of Operational Risk, summarizing control outcomes and remediation actions.',
      'Managed daily KYC onboarding and review procedures, escalating high-risk cases in line with internal due diligence policies.',
    ],
  },
  {
    org: 'Scotiabank',
    orgUrl: 'https://www.scotiabank.com',
    location: 'New York, NY',
    title: 'Governance & Reporting Co-op',
    dates: 'Jul 2024 – Dec 2024',
    bullets: [
      'Executed two RCSAs in partnership with internal control teams, identifying control gaps and reducing residual risk in HR operations.',
      'Analyzed historical data to track and reduce key risk indicators (KRIs) through improved control design.',
      'Conducted a preparatory HR audit to verify processes, document workflows, and identify areas for improvement.',
    ],
  },
  {
    org: 'Verizon',
    orgUrl: 'https://www.verizon.com',
    location: 'Basking Ridge, NJ',
    title: 'Analytics Intern',
    dates: 'May 2024',
    bullets: [
      'Automated a tracing process that accelerated network diagnostics by 2000%, giving engineers a live view of critical network data.',
      'Produced a visual UI to present tracing system results to executive stakeholders.',
    ],
  },
  {
    org: 'KR Contracting',
    location: 'Springfield, VA',
    title: 'Summer Intern',
    dates: 'Jun 2023 – Aug 2023',
    bullets: [
      'Created a quality assurance framework enabling supervisors to enforce policies across a workforce of 1,000+ security guards nationwide.',
      'Conducted resume screenings and structured interviews to select candidates for security and back-office roles.',
    ],
  },
];

function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-14 lg:px-8">

      {/* Hero */}
      <section className="pb-16 border-b border-[#0F1923]/10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#1E3A5F]/60 mb-6">
          Northeastern University · May 2026 · Boston, MA
        </p>
        <h1 className="font-heading text-4xl leading-tight text-[#0F1923] sm:text-5xl lg:text-[3.25rem]">
          Operational Risk &amp; Analytics Professional
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#0F1923]/65">
          Interdisciplinary background across asset management and global banking, with hands-on
          experience in compliance testing, governance frameworks, KYC operations, and data-driven
          risk reporting.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://drive.google.com/uc?export=download&id=11zOuSTpYdP7QhTB4nzgasAcnYDfRUsz4"
            download="Desai, Ayush_Resume"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E3A5F] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#152D48]"
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-a-desai/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#0F1923]/15 bg-white px-6 py-3 text-sm font-medium text-[#0F1923] shadow-sm transition hover:bg-[#EDE9E2]"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="mt-16">
        <p className="text-xs uppercase tracking-[0.35em] text-[#1E3A5F]/60 mb-2">Experience</p>
        <div className="divide-y divide-[#0F1923]/8">
          {EXPERIENCE.map((role) => (
            <div key={role.org} className="py-10">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                {role.orgUrl ? (
                  <a
                    href={role.orgUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading text-xl text-[#0F1923] hover:text-[#1E3A5F] transition-colors"
                  >
                    {role.org}
                  </a>
                ) : (
                  <span className="font-heading text-xl text-[#0F1923]">{role.org}</span>
                )}
                <span className="font-mono text-xs text-[#0F1923]/40 shrink-0">{role.location}</span>
              </div>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between mt-1">
                <p className="text-sm font-medium text-[#1E3A5F]">{role.title}</p>
                <span className="font-mono text-xs text-[#0F1923]/40 shrink-0">{role.dates}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {role.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-6 text-[#0F1923]/65">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#1E3A5F]/50" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-[#0F1923]/10 pt-16">
        <p className="text-xs uppercase tracking-[0.35em] text-[#1E3A5F]/60 mb-8">Skills</p>
        <div className="divide-y divide-[#0F1923]/8 rounded-xl border border-[#0F1923]/10 bg-white overflow-hidden shadow-sm">
          {[
            {
              label: 'Risk & Compliance',
              values: 'Operational Risk · KYC/AML · RCSA · Rule 206(4)-7 · Governance & Reporting · Control Design',
            },
            {
              label: 'Tools',
              values: 'Python · SQL · Excel · R · Tableau · Jira',
            },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[160px_1fr] gap-6 px-6 py-4 sm:grid-cols-[200px_1fr]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F1923]/45 self-center">
                {row.label}
              </span>
              <span className="text-sm leading-6 text-[#0F1923]/75">{row.values}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mt-16 border-t border-[#0F1923]/10 pt-16">
        <p className="text-xs uppercase tracking-[0.35em] text-[#1E3A5F]/60 mb-8">About</p>
        <div className="max-w-2xl space-y-4 text-base leading-7 text-[#0F1923]/70">
          <p>
            Final-year Data Science and Business Administration student at Northeastern University,
            with co-op experience across asset management and global banking. My work sits at the
            intersection of operational controls, governance frameworks, and analytical tooling — I
            approach risk and compliance problems empirically, using data to surface patterns,
            strengthen controls, and communicate findings clearly to stakeholders.
          </p>
          <p>
            I am comfortable switching between detailed analytical work and stakeholder-facing
            deliverables, and I take methodical approaches to process design and documentation.
            Outside of work, I enjoy following financial markets, travel, and hiking.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mt-16 border-t border-[#0F1923]/10 pt-16 pb-4">
        <p className="text-xs uppercase tracking-[0.35em] text-[#1E3A5F]/60 mb-6">Education</p>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="font-heading text-xl text-[#0F1923]">Northeastern University</span>
          <span className="font-mono text-xs text-[#0F1923]/40 shrink-0">Boston, MA</span>
        </div>
        <p className="mt-0.5 text-xs text-[#0F1923]/40">D'Amore-McKim School of Business</p>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between mt-1">
          <p className="text-sm font-medium text-[#1E3A5F]">
            B.S. Data Science &amp; Business Administration, Cum Laude
          </p>
          <span className="font-mono text-xs text-[#0F1923]/40 shrink-0">May 2026</span>
        </div>
        <p className="mt-2 text-sm leading-6 text-[#0F1923]/55">
          GPA 3.55 · Relevant Coursework: Advanced Programming with Data, Marketing Analytics,
          Information Visualization
        </p>
      </section>

    </div>
  );
}

export default About;
