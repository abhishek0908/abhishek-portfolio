import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Almabase - Alumni Network',
    description:
      'A web application helping 6000+ students annually enhance their career opportunities through alumni insights and resources. Features job postings, interview experiences, academic content, and email notifications.',
    technologies: ['Python', 'Django', 'JavaScript', 'HTML/CSS', 'PostgreSQL'],
    github: 'https://github.com/abhishek0908',
    features: [
      'Onboarding for 2000+ new students yearly',
      'Google authentication integration',
      'Email notification system for job postings',
      'Alumni information database',
    ],
  },
  {
    title: 'Distributed Image Processing System',
    description:
      'A high-performance distributed system for forensic image processing using Python and gRPC. Achieved 40% latency reduction through multithreading optimization.',
    technologies: ['Python', 'gRPC', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
    features: [
      'Real-time task progress monitoring',
      'Redis-based job tracking',
      'Microservice architecture',
      'AWS ECS deployment',
    ],
  },
  {
    title: 'Heatmap Generation Pipeline',
    description:
      'Collaborated with ML engineers to build a microservice for heatmap generation as part of the Soterix product targeting the US market. Deployed on AWS with Terraform.',
    technologies: ['Python', 'FastAPI', 'AWS ECS', 'S3', 'Terraform', 'Docker'],
    features: [
      'Scalable microservice architecture',
      'S3 integration for data storage',
      'Infrastructure as Code with Terraform',
      'Private subnet deployment',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-primary font-mono text-xl mr-2">04.</span>
            Things I've Built
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-card rounded-lg border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={40} />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.description}
              </p>

              <ul className="space-y-2 mb-4">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                    {i < project.technologies.length - 1 && (
                      <span className="ml-2 text-border">•</span>
                    )}
                  </span>
                ))}
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
