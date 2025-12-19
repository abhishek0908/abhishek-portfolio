const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'Java Core', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Django', 'FastAPI', 'Node.js', 'React', 'Celery'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'AWS EC2', 'S3', 'ECS', 'RDS', 'VPC', 'CloudWatch', 'IAM', 'API Gateway', 'Terraform'],
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-mono bg-secondary text-secondary-foreground rounded hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LeetCode Stats */}
        <div className="mt-12 p-6 bg-gradient-card rounded-lg border border-border max-w-2xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">Problem Solving</h3>
          <p className="text-muted-foreground mb-4">
            I love solving algorithmic challenges and continuously improving my problem-solving skills.
          </p>
          <a
            href="https://leetcode.com/abhish0908/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors font-mono text-sm"
          >
            <span className="text-2xl font-bold">500+</span>
            <span>LeetCode Problems Solved</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
