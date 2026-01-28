import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Mail, Download } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Atelier', path: '/atelier' },
    { name: 'Expositions', path: '/expositions' },
    { name: 'Presse', path: '/presse' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      
      {/* Global Background Image for Home Page */}
      {isHome ? (
        <div className="absolute inset-0 -z-10 w-full h-full bg-background-light dark:bg-background-dark">
          <picture>
            {/* Desktop 1920px+ */}
            <source
              media="(min-width: 1441px)"
              srcSet="/images/PaoloHomepage.webp"
            />
            {/* Laptop 769px - 1440px */}
            <source
              media="(min-width: 769px)"
              srcSet="/images/PaoloHomepage 1440x3553.webp"
            />
            {/* Tablet 431px - 768px */}
            <source
              media="(min-width: 431px)"
              srcSet="/images/PaoloHomepage 768x4043.webp"
            />
            {/* Mobile (430px and below) */}
            <img
              src="/images/PaoloHomepage 430x3553.webp"
              alt="Paolo Bosi Background"
              className="w-full h-full object-cover object-center"
            />
          </picture>
        </div>
      ) : (
        /* Global Texture Background for Other Pages */
        <div 
          className="fixed inset-0 -z-10 w-full h-full bg-background-light dark:bg-background-dark"
          style={{
            backgroundImage: 'url("https://raw.githubusercontent.com/pearlstudio-git/paolobosifullsitemaquette/refs/heads/main/Texture%20Background.webp")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', 
            backgroundPosition: 'center center'
          }}
        />
      )}

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md py-4 shadow-sm border-b border-wood/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <Link 
            to="/" 
            className="text-xl font-bold tracking-widest uppercase text-anthracite dark:text-white opacity-0 animate-fade-in"
            style={{ animationFillMode: 'forwards' }}
          >
            Paolo Bosi
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-primary opacity-0 animate-fade-in ${
                  location.pathname === link.path ? 'text-primary border-b border-primary' : 'text-anthracite dark:text-text-secondary-dark'
                }`}
                style={{ 
                  animationDelay: `${(index + 1) * 100}ms`,
                  animationFillMode: 'forwards' 
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-anthracite dark:text-text-primary-dark opacity-0 animate-fade-in"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-t border-wood/10 dark:border-gray-800 p-6 flex flex-col gap-6 md:hidden shadow-lg h-screen">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-medium tracking-widest uppercase text-center text-anthracite dark:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
        {children}
      </main>

      {/* Footer */}
      <footer 
        className="w-full pt-12 pb-6 border-t border-wood/20 mt-12 transition-colors duration-300 bg-transparent backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-md flex-col items-center px-4">
          <div className="flex items-center justify-center gap-8 mb-6">
            <a href="#" className="text-wood dark:text-text-secondary-dark transition-colors hover:text-primary hover:scale-110 transform duration-200">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-wood dark:text-text-secondary-dark transition-colors hover:text-primary hover:scale-110 transform duration-200">
              <Instagram size={20} />
            </a>
            <Link to="/contact" className="text-wood dark:text-text-secondary-dark transition-colors hover:text-primary hover:scale-110 transform duration-200">
              <Mail size={20} />
            </Link>
          </div>

          <a 
            href="/Paolo_Bosi_Catalogue_2013.pdf" 
            download="Paolo_Bosi_La_Fracture_Silencieuse.pdf"
            className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-anthracite dark:text-text-secondary-dark transition-colors hover:text-primary"
          >
            <Download size={14} />
            Télécharger le catalogue
          </a>

          <p className="text-xs tracking-widest text-anthracite dark:text-text-secondary-dark uppercase opacity-70">
            © {new Date().getFullYear()} Paolo Bosi. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;