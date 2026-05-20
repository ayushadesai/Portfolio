function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-14 lg:px-8">

      {/* Hero */}
      <section className="pb-16 border-b border-[#e8e8e8]">
        <p className="text-xs uppercase tracking-[0.35em] text-[#999999] mb-6">
          Northeastern University · Class of 2026
        </p>
        <h1 className="font-geist text-4xl font-semibold tracking-[-0.5px] leading-tight text-[#1a1a1a] sm:text-5xl lg:text-[3.25rem]">
          Operations &amp; Analytics
        </h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://drive.google.com/uc?export=download&id=1A2Ey1_ToIYRvKTvRcw3QV2PYkFPATymI"
            download="Desai, Ayush_Resume"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E3A5F] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#152D48]"
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-a-desai/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-white px-6 py-3 text-sm font-medium text-[#1a1a1a] shadow-sm transition hover:bg-[#f4f4f2]"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Bridge paragraph */}
      <section className="mt-16 pb-16 border-b border-[#e8e8e8]">
        <p className="max-w-[560px] text-base text-[#444444]">
          I've worked across asset management and global banking over the last two years, mostly
          on data quality, controls, and reporting. I like work where you have to figure out
          what's actually going on in a dataset or a process before you can do anything useful
          with it.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <p className="text-xs uppercase tracking-[0.35em] text-[#999999] mb-8">Skills</p>
        <div className="divide-y divide-[#ebebeb] rounded-xl border border-[#e8e8e8] bg-white overflow-hidden shadow-sm">
          {[
            {
              label: 'Operations & Analysis',
              skills: ['Process design', 'Control testing', 'Governance reporting', 'Risk analysis', 'Stakeholder communication'],
            },
            {
              label: 'Tools',
              skills: ['Python', 'SQL', 'Excel', 'R', 'Tableau', 'Jira'],
            },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[140px_1fr] gap-6 px-6 py-4 sm:grid-cols-[180px_1fr] items-center"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999999]">
                {row.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {row.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: '#f4f4f2',
                      border: '0.5px solid #e0e0e0',
                      borderRadius: '100px',
                      padding: '3px 10px',
                      fontSize: '11px',
                      color: '#555555',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mt-16 border-t border-[#e8e8e8] pt-16">
        <p className="text-xs uppercase tracking-[0.35em] text-[#999999] mb-8">About</p>
        <div className="max-w-[560px] space-y-4 text-base text-[#444444]">
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
      <section className="mt-16 border-t border-[#e8e8e8] pt-16 pb-4">
        <p className="text-xs uppercase tracking-[0.35em] text-[#999999] mb-6">Education</p>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="font-geist text-xl font-semibold tracking-[-0.3px] text-[#1a1a1a]">Northeastern University</span>
          <span className="font-mono text-xs text-[#999999] shrink-0">Boston, MA</span>
        </div>
        <p className="mt-0.5 text-xs text-[#999999]">D'Amore-McKim School of Business</p>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between mt-1">
          <p className="text-sm font-medium text-[#1E3A5F]">
            B.S. Data Science &amp; Business Administration, Cum Laude
          </p>
          <span className="font-mono text-xs text-[#999999] shrink-0">May 2026</span>
        </div>
        <p className="mt-2 text-sm text-[#999999]">
          GPA 3.55 · Relevant Coursework: Advanced Programming with Data, Marketing Analytics,
          Information Visualization
        </p>
      </section>

    </div>
  );
}

export default About;
