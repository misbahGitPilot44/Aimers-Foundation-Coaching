/**
 * Navigation component that provides responsive navigation with mobile support
 * and dynamic route highlighting.
 */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UserPlus } from 'lucide-react';

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const location = useLocation();
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Navigation links configuration
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/membership', label: 'Membership' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <nav className="sticky top-0 bg-[var(--background)] border-b-2 border-[var(--secondary)] z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center group">
            <img 
              src={import.meta.env.BASE_URL + "sau-acm-logo.png"} 
              alt="SAU ACM Student Chapter" 
              className="h-10 w-auto transform group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link font-medium capitalize ${
                  location.pathname === path ? 'text-[var(--accent)] bg-[var(--secondary)]' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Become Member button - visible on both desktop and mobile */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfkesEgOp2PJ0hi42W1a9mU9JJkzsdze0yf9oB5SRD8bZ-gow/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 xl:px-5 xl:py-2.5 rounded-xl font-medium text-[var(--accent)] border-2 border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-300 ease-in-out text-sm sm:text-base"
            >
              <UserPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4 xl:h-5 xl:w-5" />
              <span className="hidden sm:inline">become member</span>
              <span className="sm:hidden">Join</span>
            </a>
            
            {/* Dark mode toggle - now visible on mobile */}
            {children}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 rounded-xl hover:bg-[var(--secondary)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div 
        className={`xl:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute right-0 w-64 bg-[var(--background)] border-l-2 border-b-2 border-[var(--secondary)] rounded-bl-xl`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-xl font-medium capitalize text-right ${
                location.pathname === path 
                  ? 'text-[var(--accent)] bg-[var(--secondary)]' 
                  : 'hover:bg-[var(--secondary)]'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;