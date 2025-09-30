import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center py-4 
          bg-gradient-to-r from-black/70 via-black/50 to-black/70 
          backdrop-blur-xl border-b border-yellow-500/30
          shadow-lg shadow-yellow-500/10 rounded-b-2xl"
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://i.imgur.com/DH8hZaw.jpeg"
              alt="AS Logo"
              className="w-12 h-12 object-contain rounded-full border border-yellow-500/40 shadow-md shadow-yellow-500/30"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#courses"
              onClick={(e) => handleNavClick(e, 'courses')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Programs
            </a>
            <a
              href="#about-coach"
              onClick={(e) => handleNavClick(e, 'about-coach')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              About Coach
            </a>
            <a
              href="#reviews"
              onClick={(e) => handleNavClick(e, 'reviews')}
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Reviews
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4 bg-black/70 backdrop-blur-lg border-t border-yellow-500/20 shadow-md shadow-yellow-500/10 rounded-b-2xl"
          >
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="#courses"
                onClick={(e) => handleNavClick(e, 'courses')}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                Programs
              </a>
              <a
                href="#about-coach"
                onClick={(e) => handleNavClick(e, 'about-coach')}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                About Coach
              </a>
              <a
                href="#reviews"
                onClick={(e) => handleNavClick(e, 'reviews')}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                Reviews
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
