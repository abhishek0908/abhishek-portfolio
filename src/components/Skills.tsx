const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'Java Core', 'SQL'],
    color: '#38bdf8', // Cyan
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Django', 'FastAPI', 'Node.js', 'React', 'Celery', 'Document Generation'],
    color: '#fb923c', // Orange
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
    color: '#10b981', // Emerald
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'AWS EC2', 'S3', 'ECS', 'RDS', 'VPC', 'CloudWatch', 'IAM', 'API Gateway', 'Terraform'],
    color: '#a855f7', // Purple
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
    color: '#f43f5e', // Rose
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-transparent to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono text-xl mr-2">~/bin/</span>
            <span className="text-gradient">Skills & Tech</span>
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 bg-card/40 backdrop-blur-md rounded border border-border/50 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <h3 className="text-sm font-mono text-foreground mb-6 flex items-center gap-3">
                <span className="text-primary">#</span>
                {category.title.toLowerCase().replace(/\s+/g, '_')}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs font-mono bg-secondary/50 text-muted-foreground rounded border border-border/50 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LeetCode Stats */}
        <div className="mt-16 p-10 bg-card/60 backdrop-blur-xl border border-border/50 max-w-3xl mx-auto relative overflow-hidden group rounded-lg">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />

          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground mb-2 font-mono flex items-center gap-2">
                <span className="text-primary">{" >>> "}</span> logic_engine.init()
              </h3>
              <p className="text-muted-foreground text-sm font-mono">
                Continuous improvement of algorithmic efficiency and complex problem solving.
              </p>
            </div>

            <a
              href="https://leetcode.com/abhish0908/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 px-8 py-4 bg-secondary/50 border border-primary/20 rounded hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 font-mono group/btn"
            >
              <span className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">500+</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">solved.problems</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
