import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import cvPdf from '../assets/Maulana Hafizh Ariputra_CV ENG.pdf';

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
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
    <>
      <nav className="bg-background/80 dark:bg-background/80 backdrop-blur-md sticky top-0 w-full z-50 border-b border-outline-variant/30 transition-colors duration-300">
        <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
          {/* Brand */}
          <a
            href="#about"
            className="text-base sm:text-lg md:text-headline-md font-bold tracking-tight text-on-surface hover:opacity-90 transition-opacity truncate max-w-[200px] sm:max-w-none"
          >
            Maulana Hafizh Portofolio
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-label-md text-label-md transition-all duration-300 relative py-1 ${
                  activeSection === link.id
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
              className="inline-flex items-center justify-center px-4 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-md hover:opacity-90 transition-all duration-300 cursor-pointer shadow-sm"
            >
              Resume
            </button>
          </div>

          {/* Mobile Navbar Buttons */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Toggle color theme"
            >
              <span className="material-symbols-outlined text-xl">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-surface-container text-on-surface transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Open navigation menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Portal to document.body to avoid backdrop-filter stacking context bugs) */}
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${
              isMobileMenuOpen
                ? 'opacity-100 pointer-events-auto visible'
                : 'opacity-0 pointer-events-none invisible'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Backdrop */}
            <div
              className={`fixed inset-0 bg-black/60 dark:bg-black/75 transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Sidebar Container */}
            <div
              className={`fixed top-0 right-0 w-[290px] max-w-[85vw] h-full h-[100dvh] bg-surface dark:bg-surface-container shadow-2xl border-l border-outline-variant/30 flex flex-col justify-between transition-transform duration-300 ease-out z-10 ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Top Header */}
              <div className="p-6 pb-4 border-b border-outline-variant/20 flex items-center justify-between shrink-0">
                <div>
                  <span className="text-base font-bold tracking-tight text-on-surface block">
                    Navigation
                  </span>
                  <span className="text-xs text-on-surface-variant">Maulana Hafizh</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              {/* Scrollable Links List */}
              <div className="p-6 py-4 flex-1 overflow-y-auto space-y-1 custom-scrollbar">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low dark:hover:bg-surface-container-high'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-xs opacity-60">
                        arrow_forward_ios
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Bottom Actions Footer */}
              <div className="p-6 pt-4 border-t border-outline-variant/20 space-y-2.5 shrink-0 bg-surface dark:bg-surface-container">
                <a
                  href={cvPdf}
                  download="Maulana Hafizh Ariputra_CV ENG.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 bg-primary text-on-primary font-label-md text-xs font-bold rounded-lg hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Download CV (PDF)
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 border border-outline-variant/40 text-on-surface hover:text-primary font-label-md text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  View Resume Online
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
