import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Container */}
        <div
          className="flex items-center justify-between h-20
          bg-gradient-to-r from-black/80 via-black/60 to-black/80 
          backdrop-blur-xl border-b border-yellow-500/30
          shadow-lg shadow-yellow-500/10 rounded-b-2xl px-4"
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/slfql4jkj/Gemini_Generated_Image_9g05rc9g05rc9g05%20(1)-modified.png?updatedAt=1759378954549"
              alt="AS Logo"
              className="w-12 h-12 object-contain rounded-full border border-yellow-500/40 shadow-md shadow-yellow-500/30"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
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
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4 bg-black/80 backdrop-blur-lg border-t border-yellow-500/20 shadow-md shadow-yellow-500/10 rounded-b-2xl"
          >
            <nav className="flex flex-col items-center space-y-4">
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
