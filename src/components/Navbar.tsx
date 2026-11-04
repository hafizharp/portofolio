import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenResume: () => void;
  darkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, darkMode, onToggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certification & Training', href: '#certificates', id: 'certificates' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav className="bg-background/80 dark:bg-background/80 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant/30 transition-colors duration-300">
      <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        {/* Brand */}
        <a
          href="#about"
          className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface hover:opacity-90 transition-opacity"
        >
          Maulana Hafizh Portofolio
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-label-md text-label-md transition-all duration-300 relative py-1 ${activeSection === link.id
                ? 'text-primary dark:text-primary border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary dark:hover:text-primary'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle color theme"
          >
            <span className="material-symbols-outlined transition-transform duration-500 hover:rotate-45">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center justify-center px-4 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-md hover:opacity-90 transition-all duration-300 cursor-pointer"
          >
            Resume
          </button>
        </div>

        {/* Mobile Navbar Buttons */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Toggle color theme"
          >
            <span className="material-symbols-outlined">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1 text-on-surface hover:text-primary transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            <span className="material-symbols-outlined text-md">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-100 flex md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Menu Container */}
          <div className="relative flex flex-col w-64 max-w-xs h-full bg-surface dark:bg-surface-container p-6 shadow-2xl border-l border-outline-variant/20 ml-auto animate-[slideInRight_0.25s_ease-out] z-10">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
                Menu
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-full hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <span className="material-symbols-outlined text-md">close</span>
              </button>
            </div>

            {/* Links list */}
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-headline-md text-headline-md py-2 border-b border-outline-variant/10 transition-colors ${activeSection === link.id
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-primary dark:hover:text-primary'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Resume button in Mobile */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-8 w-full py-3 bg-primary text-on-primary font-label-md text-label-md rounded-md hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              View Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
