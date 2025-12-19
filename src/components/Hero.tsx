import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl">
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <span className="text-foreground">Abhishek Udiya</span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
            I build scalable backend systems.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '400ms' }}>
            I'm a <span className="text-primary">Senior Software Engineer</span> specializing in building distributed systems, 
            microservices, and high-performance backend solutions. Currently at{' '}
            <span className="text-primary hover:underline">
              <a href="https://videonetics.com" target="_blank" rel="noopener noreferrer">Videonetics</a>
            </span>
            , working on cutting-edge image processing systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: '500ms' }}>
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-primary text-primary-foreground font-medium rounded glow-primary hover:opacity-90 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <a
              href="https://github.com/abhishek0908"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/abhishek-udiya-87452618b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abhishekudiya2000@gmail.com"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
            <div className="w-24 h-px bg-muted-foreground/30 ml-4" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
