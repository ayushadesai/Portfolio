type Step = { title: string; detail: string };
type Project = {
  num: string;
  name: string;
  framing: string;
  description: string;
  tech: string[];
  liveUrl: string;
  liveLabel: string;
  githubUrl?: string;
  steps: Step[];
};

const projects: Project[] = [
  {
    num: '01',
    name: 'NYC Airbnb Ghost Listing Detector',
    framing:
      'Anomaly detection for platform risk — identifying fraudulent listings before they harm users.',
    description:
      'Built a risk-scoring system to flag inactive or fraudulent Airbnb listings across New York City. The project simulates the kind of anomaly detection work a platform trust & safety or fraud team would run on transactional data.',
    tech: ['Anomaly Detection', 'Risk Scoring', 'R Shiny'],
    liveUrl: 'https://airbnb-analysis-ds4420.shinyapps.io/Ghost-Listings-AirBNB/',
    liveLabel: 'Live App',
    steps: [
      {
        title: 'Business problem',
        detail:
          'Ghost listings inflate apparent supply, mislead customers, and expose a platform to reputational and regulatory risk. The goal was to identify which listings were likely fraudulent or inactive.',
      },
      {
        title: 'Data & feature design',
        detail:
          'Sourced open Airbnb data for NYC and engineered risk signals around availability patterns, review recency, and pricing anomalies — similar to KRI construction in an ops risk context.',
      },
      {
        title: 'Risk scoring',
        detail:
          'Developed a probabilistic scoring model that assigns each listing a fraud likelihood score, enabling prioritized review rather than manual scanning of all listings.',
      },
      {
        title: 'Outcome',
        detail:
          'Deployed as an interactive dashboard allowing reviewers to look up any listing, see its risk score, and surface verified alternatives — reducing the manual triage workload.',
      },
    ],
  },
  {
    num: '02',
    name: 'Surplus Connect',
    framing:
      'Operational efficiency project matching food businesses with nonprofits to reduce surplus waste.',
    description:
      'Designed and delivered a platform that connects businesses holding surplus food inventory with local nonprofits. The core challenge was an operational matching problem — how to route supply to demand quickly and accurately before inventory expires.',
    tech: ['Operations Design', 'Analytics', 'Product'],
    liveUrl: 'https://drive.google.com/file/d/1w_jZ4g3gJs37fZd8sE4lFxSliXLNKHOo/view?usp=sharing',
    liveLabel: 'Report',
    githubUrl: 'https://github.com/shruthipal/MKTG4604-VGP-Frontend',
    steps: [
      {
        title: 'Problem framing',
        detail:
          'Mapped the end-to-end donation workflow, identifying the operational bottlenecks — manual matching, stale listings, and mismatched needs — that caused surplus to go to waste.',
      },
      {
        title: 'Matching logic',
        detail:
          'Designed a matching system that pairs incoming surplus donations to recipient needs based on item type, quantity, and time sensitivity — improving throughput versus manual coordination.',
      },
      {
        title: 'Process controls',
        detail:
          'Built in expiry windows and status tracking so listings that were not claimed in time were automatically flagged, keeping data quality high and the pipeline moving.',
      },
      {
        title: 'Outcome',
        detail:
          'Delivered a working platform with measurable reduction in unmatched surplus, validated through stakeholder testing with nonprofit partners in the Boston area.',
      },
    ],
  },
];

function ProjectBlock({ project, isLast }: { project: Project; isLast: boolean }) {
  return (
    <>
      <div className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-[#18160F]/8">
          {/* Left */}
          <div className="space-y-6">
            <div className="font-mono text-xs tracking-[0.3em] text-[#0D7377]/60">{project.num}</div>
            <h2 className="font-heading text-5xl leading-tight text-[#18160F] sm:text-6xl">
              {project.name}
            </h2>
            <p className="text-base font-medium leading-7 text-[#18160F]">{project.framing}</p>
            <p className="text-base leading-7 text-[#18160F]/60">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#0D7377]/20 bg-[#0D7377]/5 px-3 py-1 font-mono text-xs text-[#0D7377]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#0D7377] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0a5c60]"
              >
                {project.liveLabel}
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#18160F]/15 bg-white px-5 py-2.5 text-sm font-medium text-[#18160F]/60 transition hover:bg-[#EDE9E2]"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="lg:pl-16">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#18160F]/40">
              Approach
            </p>
            <ol className="space-y-5">
              {project.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-xs text-[#0D7377]/50 mt-0.5 w-5 shrink-0">
                    {['i', 'ii', 'iii', 'iv', 'v'][i]}
                  </span>
                  <p className="text-base leading-6 text-[#18160F]/80">
                    <strong className="font-semibold text-[#18160F]">{step.title}. </strong>
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      {!isLast && <hr className="border-[#18160F]/10" />}
    </>
  );
}

function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 lg:px-8">
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.35em] text-[#0D7377]">Work</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-[#18160F] sm:text-6xl">
          Projects
        </h1>
      </div>
      {projects.map((p, i) => (
        <ProjectBlock key={p.num} project={p} isLast={i === projects.length - 1} />
      ))}
    </div>
  );
}

export default Projects;
