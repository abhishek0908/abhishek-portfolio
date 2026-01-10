import { Briefcase, ExternalLink } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const experiences = [
  {
    title: 'Senior Engineer',
    company: 'Videonetics',
    location: 'Bangalore, India',
    period: 'Aug 2024 - Present',
    description: [
      'Contributed to a distributed image-processing system in Python with gRPC; optimized high response latency by applying multithreading, reducing latency by 40%.',
      'Developed a Redis-based job-tracking module, enabling real-time task progress monitoring and improving throughput under high concurrency.',
      'Implemented FastAPI backend services for forensic functionality, ensuring modularity and seamless integration with distributed systems.',
      'Collaborated with ML engineers to develop a heatmap generation pipeline microservice for Soterix product targeting the US market.',
      'Deployed services to AWS ECS using Docker, integrated S3 for storage, and contributed to Terraform infrastructure setup.',
    ],
    technologies: ['Python', 'FastAPI', 'gRPC', 'Redis', 'PostgreSQL', 'AWS', 'Docker', 'Terraform'],
    color: '#0ea5e9'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Karbon Business',
    location: 'Bangalore, India',
    period: 'Feb 2024 - Aug 2024',
    description: [
      'Developed a Django-based microservice to generate Business Resolution documents, handling complex features using WeasyPrint library.',
      'Designed an automated data pipeline to streamline database migrations, improving efficiency and ensuring data integrity.',
      'Built and exposed REST APIs delivering insights on top merchants and sectors, with Redis caching to reduce response time.',
    ],
    technologies: ['Django', 'Python', 'PostgreSQL', 'Redis', 'REST APIs', 'WeasyPrint'],
    color: '#8b5cf6'
  },
];

const Experience = () => {
  const { domRef, isVisible } = useReveal();

  return (
    <section id="experience" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div
        ref={domRef}
        className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono text-xl mr-2">~/work/</span>
            <span className="text-gradient">Where I've Worked</span>
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-border to-transparent transition-all duration-1000 delay-500 origin-top transform ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 md:pl-24 pb-16 last:pb-0 transition-all duration-700 delay-[${(index + 1) * 200}ms] transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
              >
                {/* Timeline Dot with Glow */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-5 h-5 bg-background border-2 rounded-full z-10 flex items-center justify-center transition-all duration-500 group" style={{ borderColor: exp.color }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: exp.color }} />
                </div>

                <div className="bg-card/40 backdrop-blur-md rounded border border-border/50 p-6 md:p-8 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden shadow-xl">
                  {/* Hover background gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundColor: exp.color }} />

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.title}{' '}
                        <span style={{ color: exp.color }}>@ {exp.company}</span>
                      </h3>
                      <p className="text-slate-400 font-medium flex items-center gap-2 mt-1">
                        <Briefcase size={16} /> {exp.location}
                      </p>
                    </div>
                    <span className="text-sm font-bold font-mono px-3 py-1 rounded-full bg-secondary/80 border border-border mt-3 md:mt-0" style={{ color: exp.color }}>{exp.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors font-mono text-xs">
                        <span style={{ color: exp.color }} className="font-bold opacity-70">{'>'}</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 pt-6 border-t border-border/50">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-xs font-mono bg-secondary/50 text-slate-300 rounded border border-border/50 hover:border-primary/50 transition-colors"
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
