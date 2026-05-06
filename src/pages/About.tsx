function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-14 lg:px-8">

      {/* Hero */}
      <section className="pb-16 border-b border-[#0F1923]/10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#1E3A5F]/60 mb-6">
          Northeastern University · Class of 2026
        </p>
        <h1 className="font-inter text-4xl font-semibold leading-tight text-[#0F1923] sm:text-5xl lg:text-[3.25rem]">
          Operations &amp; Analytics
        </h1>
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

      {/* Bridge paragraph */}
      <section className="mt-16 pb-16 border-b border-[#0F1923]/10">
        <p className="max-w-2xl text-base leading-7 text-[#0F1923]/70">
          I've worked across asset management and global banking over the last two years, mostly
          on data quality, controls, and reporting. I like work where you have to figure out
          what's actually going on in a dataset or a process before you can do anything useful
          with it.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <p className="text-xs uppercase tracking-[0.35em] text-[#1E3A5F]/60 mb-8">Skills</p>
        <div className="divide-y divide-[#0F1923]/8 rounded-xl border border-[#0F1923]/10 bg-white overflow-hidden shadow-sm">
          {[
            {
              label: 'Operations & Analysis',
              values:
                'Process design · Control testing · Governance reporting · Risk analysis · Stakeholder communication',
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
            Recent graduate from Northeastern University with a degree in Data Science and
            Business Administration. My coursework and work experience split pretty evenly
            between quantitative methods and business operations, which I've found is a useful
            combination when the job is to make sense of something messy.
          </p>
          <p>
            Outside of work I paint, bake, knit, and hike. I studied abroad in London and try
            to travel when I can. Open to relocating.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mt-16 border-t border-[#0F1923]/10 pt-16 pb-4">
        <p className="text-xs uppercase tracking-[0.35em] text-[#1E3A5F]/60 mb-6">Education</p>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="text-xl font-semibold text-[#0F1923]">Northeastern University</span>
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
