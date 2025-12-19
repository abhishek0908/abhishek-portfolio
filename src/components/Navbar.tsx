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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
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
                <span className="text-primary font-mono text-xs mr-1">0{index + 1}.</span>
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
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary font-mono text-xs mr-2">0{index + 1}.</span>
                  {link.name}
                </a>
              ))}
              <a
                href="/Abhishek_Udiya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-all duration-300 text-sm font-mono text-center mt-2"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
