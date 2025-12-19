import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            Designed & Built by{' '}
            <span className="text-primary">Abhishek Udiya</span>
          </p>
          <a
            href="https://github.com/abhishek0908"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Github size={16} />
            <span className="font-mono">github.com/abhishek0908</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
