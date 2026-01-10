import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useReveal } from '@/hooks/use-reveal';

const Contact = () => {
  const { domRef, isVisible } = useReveal();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div
        ref={domRef}
        className={`container mx-auto px-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-6 tracking-widest animate-pulse flex items-center justify-center gap-2">
            <span className="opacity-50">{" >>> "}</span> system.next_step()
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm currently open to new opportunities and always interested in connecting with fellow developers.
            Whether you have a question, want to discuss a project, or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="mailto:abhishekudiya2000@gmail.com"
              className="group relative w-full sm:w-auto px-10 py-5 bg-primary text-black font-mono font-bold rounded overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_40px_-15px_rgba(34,197,94,0.3)] shadow-primary/20"
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Mail size={22} />
                <span>./say_hello.sh</span>
              </div>
            </a>
            <a
              href="tel:+918827512574"
              className="w-full sm:w-auto px-10 py-5 border border-primary/30 text-primary font-mono font-bold rounded hover:bg-primary/5 hover:border-primary transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
            >
              <Phone size={22} />
              +91 8827512574
            </a>
          </div>

          {/* Social Links with magnetic-like hover */}
          <div className="flex items-center justify-center gap-8">
            {[
              { icon: Github, href: 'https://github.com/abhishek0908' },
              { icon: Linkedin, href: 'https://linkedin.com/in/abhishek-udiya-87452618b' },
              { icon: Mail, href: 'mailto:abhishekudiya2000@gmail.com' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-secondary/30 rounded border border-border/50 text-slate-500 hover:text-primary hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
