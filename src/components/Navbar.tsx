import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-paper shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="font-gloria text-2xl text-ink-dark">
          Rahul Pal
        </NavLink>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/tech" className="nav-link">
            Tech & Projects
          </NavLink>
          <NavLink to="/skills" className="nav-link">
            Skills
          </NavLink>
          <NavLink to="/hackathons" className="nav-link">
            Hackathons
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About Me
          </NavLink>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-paper py-4 px-4 shadow-md">
          <div className="flex flex-col gap-4">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/tech" className="nav-link">
              Tech & Projects
            </NavLink>
            <NavLink to="/skills" className="nav-link">
              Skills
            </NavLink>
            <NavLink to="/hackathons" className="nav-link">
              Hackathons
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About Me
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;