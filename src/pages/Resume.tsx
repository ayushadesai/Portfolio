import { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Additional', href: '#additional' },
  { label: 'Skills', href: '#skills' },
];

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id}>
      <p className="text-xs uppercase tracking-[0.35em] text-[#999999]">{label}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Role({
  org, orgUrl, location, title, dates, bullets,
}: {
  org: string; orgUrl?: string; location: string; title: string; dates: string; bullets: React.ReactNode[];
}) {
  return (
    <div>
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
        {orgUrl ? (
          <a
            href={orgUrl}
            target="_blank"
            rel="noreferrer"
            className="font-geist font-semibold text-2xl tracking-[-0.3px] text-[#1a1a1a] hover:text-[#1E3A5F] transition-colors"
          >
            {org}
          </a>
        ) : (
          <h3 className="font-geist font-semibold text-2xl tracking-[-0.3px] text-[#1a1a1a]">{org}</h3>
        )}
        <span className="font-mono text-xs text-[#999999] shrink-0">{location}</span>
      </div>
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between mt-1">
        <p className="text-sm font-medium text-[#1E3A5F]">{title}</p>
        <span className="font-mono text-xs text-[#999999] shrink-0">{dates}</span>
      </div>
      <ul className="mt-3 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-sm leading-6 text-[#444444]">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E3A5F]/40" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Resume() {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 lg:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-geist font-semibold text-4xl tracking-[-0.5px] text-[#1a1a1a] sm:text-5xl">Ayush <span className="italic text-[#1E3A5F]">Desai</span></h1>
          <p className="mt-2 text-sm text-[#444444]">
            Boston, MA&nbsp;&nbsp;·&nbsp;&nbsp;(571) 290-9556&nbsp;&nbsp;·&nbsp;&nbsp;
            <a href="mailto:ayush.aditya.desai@gmail.com" className="hover:text-[#1E3A5F] transition-colors">
              ayush.aditya.desai@gmail.com
            </a>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/ayush-a-desai/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1E3A5F] transition-colors"
            >
              LinkedIn
            </a>
          </p>
          <p className="mt-1 text-sm text-[#1E3A5F]/70">
            B.S. Data Science &amp; Business Administration, Northeastern · May 2026
          </p>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1A2Ey1_ToIYRvKTvRcw3QV2PYkFPATymI"
          download="Desai, Ayush_Resume"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1E3A5F] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#152D48]"
        >
          Download PDF
        </a>
      </div>

      <hr className="my-10 border-[#e8e8e8]" />

      <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        {/* Sticky sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-xs text-[#444444] transition hover:bg-[#f4f4f2] hover:text-[#1a1a1a]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="space-y-16">

          {/* Education */}
          <Section id="education" label="Education">
            <div className="space-y-8">
              <div>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-geist font-semibold text-2xl tracking-[-0.3px] text-[#1a1a1a]">Northeastern University</h3>
                  <span className="font-mono text-xs text-[#999999] shrink-0">Boston, MA</span>
                </div>
                <p className="mt-0.5 text-xs text-[#999999]">D'Amore-McKim School of Business</p>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between mt-1">
                  <p className="text-sm font-medium text-[#1E3A5F]">
                    Bachelor of Science in Data Science and Business Administration, Cum Laude
                  </p>
                  <span className="font-mono text-xs text-[#999999] shrink-0">May 2026</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[#444444]">
                  GPA: 3.55 · Relevant Coursework: Advanced Programming with Data, Marketing Analytics, Information Visualization
                </p>
              </div>
              <div>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-geist font-semibold text-xl text-[#1a1a1a]">Northeastern University London</h3>
                  <span className="font-mono text-xs text-[#999999] shrink-0">London, UK</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#1E3A5F]">Northeastern Study Abroad Program</p>
              </div>
            </div>
          </Section>

          <hr className="border-[#ebebeb]" />

          {/* Professional Experience */}
          <Section id="experience" label="Professional Experience">
            <div className="space-y-10">
              <Role
                org="Arrowstreet Capital"
                orgUrl="https://www.arrowstreetcapital.com"
                location="Boston, MA"
                title="Operational Risk and Control: Business Analyst Co-op"
                dates="Jul 2025 – Dec 2025"
                bullets={[
                  'Conducted data validation and anomaly detection on screening datasets, removing 150+ misclassified entities and improving compliance monitoring and surveillance accuracy.',
                  'Conducted daily KYC onboarding and review procedures, escalating high-risk cases in line with internal due diligence policies.',
                  'Executed quarterly Rule 206(4)-7 compliance testing, evaluating evidence-based control outcomes in Jira and delivering a dashboard summarizing results and remediation insights to the Head of Operational Risk.',
                ]}
              />
              <hr className="border-[#ebebeb]" />
              <Role
                org="Scotiabank"
                orgUrl="https://www.scotiabank.com"
                location="New York, NY"
                title="Governance and Reporting Co-op"
                dates="Jul 2024 – Dec 2024"
                bullets={[
                  'Performed a preparatory HR audit to verify processes, document workflows, and identify improvements.',
                  'Analyzed historical data using Excel to reduce key risk indicators (KRIs) through improved control design.',
                  'Executed two Risk and Control Self-Assessments (RCSAs) in partnership with internal control and risk teams, identifying vulnerabilities and strengthening controls to minimize residual risk in HR operations.',
                ]}
              />
              <hr className="border-[#ebebeb]" />
              <Role
                org="Verizon"
                orgUrl="https://www.verizon.com"
                location="Basking Ridge, NJ"
                title="Analytics Intern"
                dates="May 2024"
                bullets={[
                  'Collaborated with the team to automate a tracing process that accelerated network diagnostics by 2000%, giving engineers a live view of critical network data to resolve customer issues faster.',
                  "Worked alongside engineers to produce a visual UI to present tracing system's results to executives.",
                ]}
              />

              {/* Earlier experience toggle */}
              {showEarlier && (
                <>
                  <hr className="border-[#ebebeb]" />
                  <Role
                    org="StudyFind"
                    location="Remote"
                    title="Marketing Intern"
                    dates="May 2023 – Sep 2023"
                    bullets={[
                      'Analyzed social media performance using Python and Excel, delivering data-driven recommendations on content strategy and posting schedules.',
                      'Managed monthly newsletter and social media channels reaching 5,000+ subscribers, creating targeted content that drove 20%+ growth in followers and engagement rates.',
                    ]}
                  />
                  <hr className="border-[#ebebeb]" />
                  <Role
                    org="KR Contracting"
                    location="Springfield, VA"
                    title="Summer Intern"
                    dates="Jun 2023 – Aug 2023"
                    bullets={[
                      'Created and implemented a quality assurance form, enabling security guard supervisors to efficiently enforce company policies among a workforce of more than 1,000 guards across the country.',
                      'Conducted resume screenings and interviews to select qualified security and back-office candidates.',
                    ]}
                  />
                </>
              )}

              <button
                onClick={() => setShowEarlier((v) => !v)}
                className="text-sm font-medium text-[#1E3A5F] hover:text-[#152D48] transition-colors"
              >
                {showEarlier ? '− Hide earlier experience' : '+ Show earlier experience'}
              </button>
            </div>
          </Section>

          <hr className="border-[#ebebeb]" />

          {/* Additional Experience */}
          <Section id="additional" label="Additional Experience">
            <div className="space-y-10">
              <Role
                org="Northeastern University Marketing Association"
                location="Boston, MA"
                title="Senior Marketing Consultant and Communications Chair"
                dates="Jan 2024 – Apr 2025"
                bullets={[
                  'Designed and executed a marketing campaign for a Boston start-up, conducting market research, recommending content, and analyzing results, leading to a 50% increase in visibility across channels.',
                  'Managed newsletter for 1,000+ readers, using analytics to boost engagement, achieving ~10% higher open rates.',
                ]}
              />
              <hr className="border-[#ebebeb]" />
              <Role
                org="Generate Product Development"
                location="Boston, MA"
                title="Technical Writer"
                dates="Jan 2024 – Apr 2024"
                bullets={[
                  'Created standardized templates that made documentation clearer and easier for engineers to use.',
                  'Organized and maintained internal documents so the team could find archived work quickly.',
                ]}
              />
            </div>
          </Section>

          <hr className="border-[#ebebeb]" />

          {/* Skills */}
          <Section id="skills" label="Skills &amp; Interests">
            <div className="space-y-0">
              {[
                {
                  category: 'Skills',
                  values: 'Python (Pandas, Matplotlib, Plotly, Polars) · R · SQL · Tableau · Jira · Excel (XLOOKUP, pivot tables, basic macros)',
                },
                {
                  category: 'Interests',
                  values: 'Painting · Baking · Hiking · Knitting · Travel · Reading',
                },
              ].map((row, i, arr) => (
                <div key={row.category}>
                  <div className="grid grid-cols-[100px_1fr] gap-6 py-4 sm:grid-cols-[140px_1fr]">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#999999] pt-0.5">
                      {row.category}
                    </span>
                    <span className="text-sm leading-6 text-[#444444]">{row.values}</span>
                  </div>
                  {i < arr.length - 1 && <hr className="border-[#ebebeb]" />}
                </div>
              ))}
            </div>
          </Section>

        </main>
      </div>

      {/* Contact strip */}
      <div className="mt-20 border-t border-[#ebebeb] pt-10 text-center">
        <p className="text-sm font-medium text-[#999999] uppercase tracking-[0.3em] mb-4">Let's connect</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:ayush.aditya.desai@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-[#e8e8e8] bg-white px-5 py-2.5 text-sm font-medium text-[#1a1a1a] shadow-sm transition hover:bg-[#f4f4f2]"
          >
            <span className="text-[#999999]">✉</span>
            ayush.aditya.desai@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-a-desai/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#e8e8e8] bg-white px-5 py-2.5 text-sm font-medium text-[#1a1a1a] shadow-sm transition hover:bg-[#f4f4f2]"
          >
            <span className="text-[#999999]">in</span>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
