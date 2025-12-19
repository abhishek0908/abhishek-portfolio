import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Engineer',
    company: 'Videonetics',
    location: 'India',
    period: 'Aug 2024 - Present',
    description: [
      'Contributed to a distributed image-processing system in Python with gRPC; optimized high response latency by applying multithreading, reducing latency by 40%.',
      'Developed a Redis-based job-tracking module, enabling real-time task progress monitoring and improving throughput under high concurrency.',
      'Implemented FastAPI backend services for forensic functionality, ensuring modularity and seamless integration with distributed systems.',
      'Collaborated with ML engineers to develop a heatmap generation pipeline microservice for Soterix product targeting the US market.',
      'Deployed services to AWS ECS using Docker, integrated S3 for storage, and contributed to Terraform infrastructure setup.',
    ],
    technologies: ['Python', 'FastAPI', 'gRPC', 'Redis', 'PostgreSQL', 'AWS', 'Docker', 'Terraform'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Karbon Business',
    location: 'Remote',
    period: 'Feb 2024 - Aug 2024',
    description: [
      'Developed a Django-based microservice to generate Business Resolution documents, handling complex features using WeasyPrint library.',
      'Designed an automated data pipeline to streamline database migrations, improving efficiency and ensuring data integrity.',
      'Built and exposed REST APIs delivering insights on top merchants and sectors, with Redis caching to reduce response time.',
    ],
    technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'REST APIs', 'WeasyPrint'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Where I've Worked
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="max-w-4xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-24 pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                <div className="bg-gradient-card rounded-lg border border-border p-6 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}{' '}
                        <span className="text-primary">@ {exp.company}</span>
                      </h3>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <span className="text-sm font-mono text-primary mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <ul className="space-y-3 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
