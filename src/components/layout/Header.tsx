import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Disable scroll when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="z-50">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-white hover:text-accent-green transition-colors duration-300 font-medium"
            >
              {item}
            </Link>
          ))}
          <a 
            href="#contact" 
            className="bg-accent-green text-primary font-semibold px-4 py-2 rounded hover:bg-accent-green/90 transition-all duration-300"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-white focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-accent-green transition-colors duration-300 text-2xl font-medium"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            <a 
              href="#contact" 
              className="bg-accent-green text-primary font-semibold px-6 py-3 rounded-md hover:bg-accent-green/90 transition-all duration-300 mt-4 text-xl"
              onClick={toggleMenu}
            >
              Get in touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;