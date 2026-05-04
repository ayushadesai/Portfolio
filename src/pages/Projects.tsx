type Step = { title: string; detail: string };
type Project = {
  num: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  steps: Step[];
};

const projects: Project[] = [
  {
    num: '01',
    name: 'NYC Airbnb Ghost Listing Detector',
    description:
      'A machine-learning system that identifies fraudulent or "ghost" Airbnb listings in New York City using Bayesian classification and a from-scratch neural network, with an interactive Shiny dashboard for exploration.',
    tech: ['Python', 'R', 'Bayesian ML', 'R Shiny', 'NumPy'],
    liveUrl: '#',
    githubUrl: '#',
    steps: [
      {
        title: 'Data sourcing',
        detail:
          'Ingested and cleaned Inside Airbnb open datasets for NYC, engineering features around availability patterns and host behaviour.',
      },
      {
        title: 'Bayesian classifier',
        detail:
          'Built a Naïve Bayes model in R that scores each listing\'s probability of being inactive or fraudulent based on review recency and pricing anomalies.',
      },
      {
        title: 'NumPy neural network',
        detail:
          'Implemented a two-layer feedforward neural net from scratch using NumPy, training with mini-batch gradient descent to predict ghost-listing flags.',
      },
      {
        title: 'Recommender system',
        detail:
          'Added a collaborative-filtering recommender that surfaces verified alternatives when a suspicious listing is detected.',
      },
      {
        title: 'Shiny deployment',
        detail:
          'Packaged the full pipeline into an R Shiny app deployed on shinyapps.io, allowing real-time listing lookup and score visualisation.',
      },
    ],
  },
  {
    num: '02',
    name: 'Surplus Connect',
    description:
      'A full-stack platform that connects food businesses with surplus inventory to local nonprofits, using semantic vector search to match donations to needs in real time.',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'ChromaDB', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
    steps: [
      {
        title: 'Problem framing',
        detail:
          'Mapped the food-waste reduction workflow and designed a data model capturing donors, recipients, and surplus listings with time-sensitive availability windows.',
      },
      {
        title: 'FastAPI backend',
        detail:
          'Built a RESTful API with JWT auth, PostgreSQL persistence via SQLAlchemy, and background tasks that expire stale listings automatically.',
      },
      {
        title: 'Semantic matching',
        detail:
          'Embedded listing descriptions with sentence-transformers and stored vectors in ChromaDB, enabling similarity-based matching between surplus items and recipient needs.',
      },
      {
        title: 'React frontend',
        detail:
          'Created a responsive React interface with real-time status updates using polling and optimistic UI patterns for donation submission and tracking.',
      },
      {
        title: 'Vercel deployment',
        detail:
          'Deployed the frontend to Vercel and the API to Railway, configuring environment variables and CI/CD via GitHub Actions.',
      },
    ],
  },
  {
    num: '03',
    name: 'Gaming & Mental Health Analytics',
    description:
      'An end-to-end analytics project exploring the relationship between gaming behaviour and self-reported mental health outcomes using clustering, association rules, and interactive Quarto reporting.',
    tech: ['Python', 'Polars', 'Plotly', 'K-Means', 'Quarto'],
    liveUrl: '#',
    githubUrl: '#',
    steps: [
      {
        title: 'Data pipeline',
        detail:
          'Built a Polars-based ETL pipeline ingesting survey data, handling missingness, and engineering features like weekly playtime bins and genre diversity scores.',
      },
      {
        title: 'K-Means clustering',
        detail:
          'Applied K-Means (k=4) on normalised behavioural features to segment player profiles, validating cluster stability with silhouette scores.',
      },
      {
        title: 'Association rules',
        detail:
          'Ran Apriori association-rule mining to surface high-confidence patterns between game genres, play schedules, and anxiety or depression indicators.',
      },
      {
        title: 'Quarto reporting',
        detail:
          'Assembled findings into an interactive Quarto document with Plotly charts, published as a static HTML report for stakeholder review.',
      },
    ],
  },
];

function ProjectBlock({ project, isLast }: { project: Project; isLast: boolean }) {
  return (
    <>
      <div className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="space-y-6">
            <div className="font-mono text-xs tracking-[0.3em] text-[#1A3DE0]/60">{project.num}</div>
            <h2 className="font-display text-4xl font-semibold leading-tight text-[#18160F] sm:text-5xl">
              {project.name}
            </h2>
            <p className="text-base leading-7 text-[#18160F]/70">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#1A3DE0]/20 bg-[#1A3DE0]/5 px-3 py-1 font-mono text-xs text-[#1A3DE0]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={project.liveUrl}
                className="rounded-full bg-[#1A3DE0] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1634c6]"
              >
                Live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#18160F]/15 bg-white px-5 py-2.5 text-sm font-medium text-[#18160F] transition hover:bg-[#EDE9E2]"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#18160F]/40">
              How it was built
            </p>
            <ol className="space-y-5">
              {project.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-xs text-[#1A3DE0]/50 mt-0.5 w-5 shrink-0">
                    {['i', 'ii', 'iii', 'iv', 'v'][i]}
                  </span>
                  <p className="text-sm leading-6 text-[#18160F]/80">
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
        <p className="text-xs uppercase tracking-[0.35em] text-[#1A3DE0]">Work</p>
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
