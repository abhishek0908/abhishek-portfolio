import { Mail, Phone, Linkedin, Github, Calendar, ExternalLink } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const Contact = () => {
  const { domRef, isVisible } = useReveal();
  const calLink = "https://cal.com/abhishek-udiya-bw59jl/30min";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] -z-10" />

      <div
        ref={domRef}
        className={`container mx-auto px-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-6 tracking-widest animate-pulse flex items-center justify-center gap-2">
              Reach out
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-mono">
              Whether you have a specific project in mind or just want to chat about the future of tech,
              I'm always open to new connections.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Column: Traditional Contact */}
            <div className="space-y-6">
              <div className="bg-secondary/40 border border-border/50 p-8 rounded-xl flex flex-col h-full transform transition-all hover:border-primary/30">
                <h3 className="text-xl font-bold mb-6 text-white/90">Contact Details</h3>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:abhishekudiya2000@gmail.com"
                    className="flex items-center gap-4 p-4 bg-background/50 border border-border/50 rounded-lg group hover:border-primary transition-all"
                  >
                    <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-black transition-all">
                      <Mail size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Email</span>
                      <span className="font-mono text-sm text-slate-300">abhishekudiya2000@gmail.com</span>
                    </div>
                  </a>

                  <a
                    href="tel:+918827512574"
                    className="flex items-center gap-4 p-4 bg-background/50 border border-border/50 rounded-lg group hover:border-primary transition-all"
                  >
                    <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-black transition-all">
                      <Phone size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Phone</span>
                      <span className="font-mono text-sm text-slate-300">+91 8827512574</span>
                    </div>
                  </a>
                </div>

                <div className="mt-auto">
                  <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest mb-4">Connect on Socials</p>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: 'https://github.com/abhishek0908' },
                      { icon: Linkedin, href: 'https://linkedin.com/in/abhishek-udiya-87452618b' }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-background/50 border border-border/50 text-slate-500 hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300 rounded-lg"
                      >
                        <social.icon size={22} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Booking */}
            <div className="space-y-6">
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl flex flex-col h-full transform transition-all hover:border-primary/50 shadow-lg shadow-primary/5">
                <h3 className="text-xl font-bold mb-6 text-primary">Book a Call</h3>
                <p className="text-slate-400 font-mono text-sm leading-relaxed mb-8">
                  Skip the back-and-forth emails. Grab a 30-minute slot directly from my calendar for a deep dive or quick sync.
                </p>

                <div className="mt-auto">
                  <a
                    href={calLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 w-full py-6 bg-primary text-black font-mono font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(34,197,94,0.4)]"
                  >
                    <Calendar size={22} className="group-hover:rotate-12 transition-transform" />
                    <span>Schedule a Meeting</span>
                    <ExternalLink size={16} className="opacity-50" />

                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>

                  <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      {/* Live Available */}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
