import { GraduationCap, MapPin, Code2 } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const About = () => {
  const { domRef, isVisible } = useReveal();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div
        ref={domRef}
        className={`container mx-auto px-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-primary font-mono text-xl mr-2">~/at/</span>
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-slate-400 text-lg leading-relaxed">
              Hello! I'm Abhishek, a software engineer passionate about building robust, scalable systems
              that solve real-world problems.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              I pursued my Master's in Computer Applications at{' '}
              <span className="text-primary font-semibold">NIT Karnataka</span>.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Currently, I'm at <span className="text-primary font-semibold">Videonetics</span> as a Software Engineer, focusing on backend-heavy development where I work on building services for image processing algorithms and heatmap generation.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Previously, I worked at <span className="text-primary font-semibold">Karbon Business</span> as a Software Intern, specializing in Django, building APIs, and document generation services.
            </p>

            {/* System Monitor Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {[
                { label: 'Experience', value: '2 Years', sub: 'Experience', progress: 85, color: '#10b981' },
                { label: 'LeetCode', value: '500+', sub: 'LeetCode', progress: 92, color: '#38bdf8' },
                { label: 'NIMCET', value: 'AIR 128', sub: 'NIMCET', progress: 98, color: '#f59e0b' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 bg-secondary/30 rounded border border-border/50 font-mono relative overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] text-slate-500 uppercase">{stat.label}</span>
                    <span className="text-xs font-bold" style={{ color: stat.color }}>[OK]</span>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 mb-3 italic">{stat.sub}</div>

                  {/* Progress Bar Container */}
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000 ease-out group-hover:brightness-125"
                      style={{
                        width: `${stat.progress}%`,
                        backgroundColor: stat.color,
                        boxShadow: `0 0 10px ${stat.color}44`
                      }}
                    />
                  </div>

                  {/* Background Grid Pattern for the card */}
                  <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Education Cards with hover shift */}
          <div className="space-y-6">
            <div className="group p-6 bg-card/40 backdrop-blur-sm rounded border border-border/50 hover:border-primary/50 hover:-translate-x-2 transition-all duration-500 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">M.C.A</h3>
                  <p className="text-slate-400">NIT Karnataka</p>
                  <p className="text-xs text-primary font-mono mt-3 inline-block px-2 py-1 bg-primary/5 rounded border border-primary/20">2021 - 2024</p>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-card/40 backdrop-blur-sm rounded border border-border/50 hover:border-blue-500/50 hover:-translate-x-2 transition-all duration-500 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-blue-500/10 rounded group-hover:bg-blue-500/20 transition-colors">
                  <GraduationCap className="text-blue-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">B.Sc Electronics (Hons.)</h3>
                  <p className="text-slate-400">University of Delhi</p>
                  <p className="text-xs text-blue-500 font-mono mt-3 inline-block px-2 py-1 bg-blue-500/5 rounded border border-blue-500/20">2018 - 2021</p>
                </div>
              </div>
            </div>

            <div className="group p-6 bg-card/40 backdrop-blur-sm rounded border border-border/50 hover:border-rose-500/50 hover:-translate-x-2 transition-all duration-500 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-rose-500/10 rounded group-hover:bg-rose-500/20 transition-colors">
                  <MapPin className="text-rose-500" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Based in</h3>
                  <p className="text-slate-400">India</p>
                  <p className="text-xs text-rose-500 font-mono mt-3 inline-block px-2 py-1 bg-rose-500/5 rounded border border-rose-500/20">Open to Remote</p>
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
