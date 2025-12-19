import { GraduationCap, MapPin, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Abhishek, a software engineer passionate about building robust, scalable systems 
              that solve real-world problems. My journey in tech started during my Bachelor's in Electronics 
              at the University of Delhi, where I discovered my love for programming.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I pursued my Master's in Computer Applications at{' '}
              <span className="text-primary">NIT Karnataka</span>, where I honed my skills in algorithms, 
              system design, and software architecture. Today, I specialize in building distributed systems, 
              microservices, and high-performance backend solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At <span className="text-primary">Videonetics</span>, I work on cutting-edge image processing 
              systems using Python, FastAPI, and cloud technologies. I've contributed to reducing system 
              latency by 40% and helped deploy microservices targeting the US market.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 bg-gradient-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">LeetCode Problems</div>
              </div>
              <div className="p-4 bg-gradient-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">40%</div>
                <div className="text-sm text-muted-foreground">Latency Reduction</div>
              </div>
              <div className="p-4 bg-gradient-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">AIR 128</div>
                <div className="text-sm text-muted-foreground">NIMCET Rank</div>
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-4">
            <div className="p-6 bg-gradient-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">M.C.A</h3>
                  <p className="text-sm text-muted-foreground">NIT Karnataka</p>
                  <p className="text-xs text-primary font-mono mt-2">2021 - 2024</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">B.Sc Electronics (Hons.)</h3>
                  <p className="text-sm text-muted-foreground">University of Delhi</p>
                  <p className="text-xs text-primary font-mono mt-2">2018 - 2021</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-card rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Based in</h3>
                  <p className="text-sm text-muted-foreground">India</p>
                  <p className="text-xs text-primary font-mono mt-2">Open to Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
