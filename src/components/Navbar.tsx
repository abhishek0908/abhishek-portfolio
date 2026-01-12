import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled && !isMobileMenuOpen
        ? 'bg-background/90 backdrop-blur-md border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gradient font-mono">
            AU
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-primary font-mono text-xs mr-1">~/</span>
                {link.name}
              </a>
            ))}
            <a
              href="/Abhishek_Udiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-all duration-300 text-sm font-mono"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-2xl animate-fade-in flex flex-col p-8">
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold text-gradient font-mono">AU</span>
              <button
                className="text-primary p-2 border border-primary/20 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Menu
              </div>

              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-mono text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-4 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary/30 group-hover:text-primary transition-colors">~/</span>
                  {link.name.toLowerCase()}
                </a>
              ))}

              <div className="mt-8 pt-8 border-t border-border/50">
                <a
                  href="/Abhishek_Udiya_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-4 border border-primary text-primary rounded font-mono font-bold hover:bg-primary/10 transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="mt-auto text-[10px] font-mono text-slate-600 text-center uppercase tracking-widest">
              Built with precision. v2.0
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
