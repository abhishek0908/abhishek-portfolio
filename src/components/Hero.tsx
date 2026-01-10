import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background bg-grid">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-morph" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-morph" style={{ animationDelay: '-2s' }} />

        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] pointer-events-none" />


        {/* Floating Drifting Shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/40 rounded-full animate-drift" />
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-primary/20 rounded-full animate-drift" style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-slate-500/20 rounded-full animate-drift" style={{ animationDelay: '-10s' }} />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="overflow-hidden mb-4">
              <p className="text-primary font-mono text-sm md:text-base animate-fade-up translate-y-full flex items-center gap-2" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <span className="opacity-50">#</span> system.init()
              </p>
            </div>

            <div className="overflow-hidden mb-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold animate-fade-up translate-y-full tracking-tighter" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <span className="text-gradient">Abhishek</span>
                <br />
                <span className="text-white/90">Udiya</span>
              </h1>
            </div>


            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed animate-fade-up opacity-0 font-mono" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
              I'm a <span className="text-primary">Software Engineer</span> at{' '}
              <a href="https://videonetics.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 decoration-primary/30">@Videonetics</a>
              . I specialize in backend architecture, building robust systems, and sometimes managing cloud infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 mb-16 animate-fade-up opacity-0" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-primary text-black font-mono font-bold rounded overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>./contact_me.sh</span>
              </a>
              <a
                href="#projects"
                className="group px-8 py-4 border border-primary/30 text-primary font-mono font-bold rounded hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                ls projects/
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 animate-fade-up opacity-0" style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}>
              <a href="https://github.com/abhishek0908" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/abhishek-udiya-87452618b" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={24} />
              </a>
              <a href="mailto:abhishekudiya2000@gmail.com" className="text-slate-500 hover:text-primary transition-all duration-300 hover:-translate-y-1">
                <Mail size={24} />
              </a>
              <div className="h-px w-20 bg-slate-800" />
              <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em]">Live.on.main</p>
            </div>
          </div>

          {/* Unique Code Window */}
          <div className="lg:col-span-2 mt-12 lg:mt-0 animate-fade-in opacity-0" style={{ animationDelay: '1300ms', animationFillMode: 'forwards' }}>
            <div className="code-window">
              <div className="code-header">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[10px] text-slate-500 font-mono">portfolio.py</div>
              </div>
              <div className="p-4 md:p-6 font-mono text-[10px] sm:text-xs leading-relaxed overflow-x-auto">
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">01</span>
                  <span className="text-purple-400">class</span> <span className="text-blue-400">SoftwareEngineer</span>:
                </div>
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">02</span>
                  <span className="pl-2 md:pl-4 text-purple-400">def</span> <span className="text-yellow-400">__init__</span>(<span className="text-orange-400">self</span>):
                </div>
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">03</span>
                  <span className="pl-4 md:pl-8 text-orange-400">self.name</span> = <span className="text-emerald-400">"Abhishek Udiya"</span>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">04</span>
                  <span className="pl-4 md:pl-8 text-orange-400">self.role</span> = <span className="text-emerald-400">"Software Engineer"</span>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">05</span>
                  <span className="pl-4 md:pl-8 text-orange-400">self.traits</span> = [
                </div>
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">06</span>
                  <span className="pl-6 md:pl-12 text-emerald-400">"Ambitious"</span>,
                </div>
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">07</span>
                  <span className="pl-6 md:pl-12 text-emerald-400">"Curious"</span>,
                </div>
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">08</span>
                  <span className="pl-6 md:pl-12 text-emerald-400">"Hunger to Build"</span>,
                </div>
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">09</span>
                  <span className="pl-4 md:pl-8 text-white/80">]</span>
                </div>
                <div className="flex gap-2 md:gap-4 mt-2">
                  <span className="text-slate-600">10</span>
                  <span className="pl-2 md:pl-4 text-purple-400">def</span> <span className="text-yellow-400">deploy</span>(<span className="text-orange-400">self</span>):
                </div>
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">11</span>
                  <span className="pl-4 md:pl-8 text-purple-400">print</span>(<span className="text-emerald-400">"Deployment in progress..."</span>)
                </div>
                <div className="flex gap-2 md:gap-4">
                  <span className="text-slate-600">12</span>
                  <span className="pl-4 md:pl-8 text-primary/80 animate-pulse">Running diagnostic checks... OK</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-primary/60">
                  <span className="text-xs">$</span>
                  <span className="terminal-cursor text-xs">systemctl status curious_craft</span>
                </div>
              </div>
            </div>

            {/* Floating Terminal Snippet */}
            <div className="mt-4 bg-black/40 backdrop-blur-sm border border-border/30 p-4 rounded-lg font-mono text-[10px] space-y-1">
              <div className="flex justify-between text-slate-500">
                <span>TERMINAL</span>
                <span>GIT:MAIN</span>
              </div>
              <p className="text-emerald-400/70">✔ build_process_completed_in_2.4s</p>
              <p className="text-primary/80 animate-pulse font-bold">» Executing: curious_craft --visionary</p>
              <p className="text-slate-500 italic">Listening on port 3000...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50 hover:text-primary transition-all duration-300 animate-float"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-50">Scroll</span>
          <ChevronDown size={32} strokeWidth={1} />
        </div>
      </a>
    </section>
  );
};

export default Hero;
