import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  isOpen,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, onClose, duration]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-100 flex items-center justify-between sm:justify-start gap-3 px-4 sm:px-6 py-3.5 sm:py-4 rounded-lg shadow-2xl border animate-[slideInUp_0.3s_ease-out] backdrop-blur-md max-w-md"
      style={{
        backgroundColor:
          type === 'success'
            ? 'rgba(233, 237, 255, 0.9)' // primary container tint for light mode
            : 'rgba(255, 218, 214, 0.9)', // error container tint
        borderColor: type === 'success' ? 'var(--color-primary-fixed-dim)' : 'var(--color-error)',
        color: type === 'success' ? 'var(--color-primary)' : 'var(--color-error)',
      }}
      role="alert"
    >
      <span className="material-symbols-outlined filled text-xl">
        {type === 'success' ? 'check_circle' : 'error'}
      </span>
      <span className="font-label-md text-label-md font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:opacity-75 transition-opacity flex items-center justify-center"
        aria-label="Dismiss toast"
      >
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
};
