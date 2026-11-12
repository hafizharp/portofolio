import React, { useEffect, useRef, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Esc key listener and body scroll lock without layout shift
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Focus modal safely without scrolling viewport
    modalRef.current?.focus({ preventScroll: true });

    // Reset scroll position to top
    if (scrollContentRef.current) {
      scrollContentRef.current.scrollTop = 0;
    }
    setHasScrolled(false);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Track scroll position for dynamic header shadow with native, uninhibited scrolling
  useEffect(() => {
    const el = scrollContentRef.current;
    if (!isOpen || !el) return;

    const handleScroll = () => {
      const scrolled = el.scrollTop > 12;
      setHasScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    el.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* High-Performance Dimmed Backdrop without GPU Blur */}
      <div
        className="absolute inset-0 bg-black/60 dark:bg-black/75 transition-opacity duration-200 animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative bg-surface dark:bg-surface-container border border-outline-variant/30 rounded-2xl max-w-2xl w-full max-h-[92vh] sm:max-h-[85vh] overflow-hidden shadow-2xl flex flex-col z-10 animate-[modalEnter_0.25s_cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] transform-gpu focus:outline-none"
      >
        {/* Header - Solid background without expensive blur filter */}
        <div
          className={`flex justify-between items-center px-4 sm:px-6 py-3.5 sm:py-4 border-b shrink-0 bg-surface dark:bg-surface-container z-10 transition-shadow duration-200 gap-3 ${
            hasScrolled
              ? 'border-outline-variant/30 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)]'
              : 'border-outline-variant/20 shadow-none'
          }`}
        >
          <h3 className="font-headline-md text-base sm:text-lg md:text-headline-md text-on-surface font-bold truncate pr-1">{title}</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center cursor-pointer focus:outline-none shrink-0"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Scrollable Content - GPU Accelerated Composition */}
        <div
          ref={scrollContentRef}
          className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 text-on-surface-variant font-body-md text-sm sm:text-body-md leading-relaxed overscroll-contain custom-scrollbar transform-gpu contain-paint will-change-[scroll-position]"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

