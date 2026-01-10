import { Github, ExternalLink, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  external?: string;
  color: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: 'Videonetics: Distributed Image Processing System',
    description:
      'A high-performance distributed system for forensic image processing using Python and gRPC. Achieved 40% latency reduction through multithreading optimization.',
    technologies: ['Python', 'gRPC', 'Redis', 'PostgreSQL', 'Docker'],
    color: '#fb923c', // Orange
    features: [
      'Real-time task progress monitoring',
      'Redis-based job tracking',
      'Microservice architecture',
      'AWS ECS deployment',
    ],
  },
  {
    title: 'Videonetics: Heatmap Generation Pipeline',
    description:
      'Collaborated with ML engineers to build a microservice for heatmap generation as part of the Soterix product targeting the US market. Deployed on AWS with Terraform.',
    technologies: ['Python', 'FastAPI', 'AWS ECS', 'S3', 'Terraform', 'Docker'],
    color: '#a855f7', // Purple
    features: [
      'Scalable microservice architecture',
      'S3 integration for data storage',
      'Infrastructure as Code with Terraform',
      'Private subnet deployment',
    ],
  },
  {
    title: 'Personal: AI Doctor - Medical Assistant',
    description:
      'An intelligent healthcare companion that leverages advanced LLMs to provide preliminary symptom analysis and medical guidance, focusing on accessibility and accuracy.',
    technologies: ['React', 'OpenAI API', 'Node.js', 'Pinecone', 'Tailwind CSS'],
    github: 'https://github.com/abhishek0908/ai-doctor',
    external: 'https://github.com/abhishek0908/ai-doctor',
    color: '#22d3ee', // Blue-Cyan
    features: [
      'Real-time symptom assessment',
      'Medical knowledge base retrieval',
      'Personalized health recommendations',
      'Secure and private consultation',
    ],
  },
  {
    title: 'Karbon Business: Document Generation Service',
    description:
      'A high-performance Django-based microservice designed for automated business resolution document generation. Implemented complex layouts and styling using WeasyPrint.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'WeasyPrint'],
    color: '#10b981', // Emerald
    features: [
      'Automated document generation pipeline',
      'Complex CSS-to-PDF rendering',
      'REST API for document requests',
      'Redis-backed task processing',
    ],
  },
  {
    title: 'Personal: Almabase - Alumni Network',
    description:
      'A web application helping 6000+ students annually enhance their career opportunities through alumni insights and resources. Features job postings, interview experiences, academic content, and email notifications.',
    technologies: ['Python', 'Django', 'JavaScript', 'HTML/CSS', 'PostgreSQL'],
    github: 'https://github.com/abhishek0908',
    color: '#38bdf8', // Cyan
    features: [
      'Onboarding for 2000+ new students yearly',
      'Google authentication integration',
      'Email notification system for job postings',
      'Alumni information database',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Background blobs for color */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono text-xl mr-2">04.</span>
            <span className="text-gradient">Things I've Built</span>
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card/60 backdrop-blur-md rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden shadow-2xl"
            >
              {/* IDE Style Top Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-secondary/80 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="text-[10px] font-mono text-muted-foreground opacity-50">project_v{index + 1}.tsx</div>
              </div>

              <div className="p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="p-3 rounded bg-background/50 border border-border/50 group-hover:scale-110 transition-transform duration-500"
                    style={{ color: project.color }}
                  >
                    <Folder size={28} />
                  </div>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:scale-110 transition-all duration-300"
                        style={{ '--hover-color': project.color } as any}
                      >
                        <Github size={20} className="hover:text-[var(--hover-color)]" />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:scale-110 transition-all duration-300"
                        style={{ '--hover-color': project.color } as any}
                      >
                        <ExternalLink size={20} className="hover:text-[var(--hover-color)]" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 font-mono">
                  {project.title}
                </h3>

                <div className="flex gap-4 mb-6">
                  <div className="flex flex-col text-[10px] font-mono text-muted-foreground/30 select-none pt-1">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </div>
                  <p className="text-muted-foreground text-sm flex-1 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-2 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground/80 font-mono">
                      <span className="text-primary font-bold">{'>_'}</span>
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-secondary/50 border border-border/50 text-muted-foreground group-hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/abhishek0908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-all duration-300 font-mono text-sm"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
