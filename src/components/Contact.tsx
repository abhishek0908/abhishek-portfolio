import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-4">05. What's Next?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            I'm currently open to new opportunities and always interested in connecting with fellow developers. 
            Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:abhishekudiya2000@gmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-primary text-primary-foreground font-medium rounded glow-primary hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Say Hello
            </a>
            <a
              href="tel:+918827512574"
              className="w-full sm:w-auto px-8 py-4 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              +91 8827512574
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/abhishek0908"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/abhishek-udiya-87452618b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abhishekudiya2000@gmail.com"
              className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
