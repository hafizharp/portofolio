import React, { useState } from 'react';

interface ContactProps {
  onShowToast: (message: string, type: 'success' | 'error') => void;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    } else if (form.name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!form.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    // Clear error on type
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API Submission call
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast('Thank you! Your message has been sent successfully.', 'success');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-section-gap border-t border-outline-variant/20 scroll-entry-effect transition-colors duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg md:gap-gutter text-left">
        {/* Contact Info Text */}
        <div className="space-y-stack-lg flex flex-col justify-center">
          <div>
            <h2 className="font-display-lg-mobile md:font-display-lg text-3xl sm:text-display-lg-mobile md:text-display-lg text-on-surface mb-2 animate-[fadeIn_0.5s_ease-out]">
              Let's Talk.
            </h2>
            <p className="font-body-lg text-sm sm:text-base md:text-body-lg text-on-surface-variant leading-relaxed">
              Currently open for new opportunities. Whether you have a question or just want to say
              hi, I'll try my best to get back to you.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 sm:gap-4 group">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform shrink-0">
                mail
              </span>
              <a
                className="font-body-md text-sm sm:text-body-md text-on-surface hover:text-primary transition-colors font-medium break-all sm:break-normal"
                href="mailto:maulanahafizh234@gmail.com"
              >
                maulanahafizh234@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
              <span className="font-body-md text-sm sm:text-body-md text-on-surface font-medium">
                KOTA TANGERANG, INDONESIA
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-surface-container-low dark:bg-surface-container p-5 sm:p-6 md:p-8 rounded-lg border border-outline-variant/30 flex flex-col gap-4 shadow-sm"
          noValidate
        >
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md text-on-surface-variant font-semibold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`bg-surface dark:bg-surface-container-low border text-on-surface font-body-md rounded p-3 outline-none input-glow transition-all ${errors.name ? 'border-error' : 'border-outline-variant/50'
                }`}
              id="name"
              placeholder="John Doe"
              type="text"
              value={form.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.name && (
              <span className="text-error text-xs font-semibold mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">error</span>
                {errors.name}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md text-on-surface-variant font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`bg-surface dark:bg-surface-container-low border text-on-surface font-body-md rounded p-3 outline-none input-glow transition-all ${errors.email ? 'border-error' : 'border-outline-variant/50'
                }`}
              id="email"
              placeholder="john@example.com"
              type="email"
              value={form.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="text-error text-xs font-semibold mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">error</span>
                {errors.email}
              </span>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1 flex-1">
            <label
              className="font-label-md text-label-md text-on-surface-variant font-semibold"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={`bg-surface dark:bg-surface-container-low border text-on-surface font-body-md rounded p-3 outline-none input-glow transition-all resize-none ${errors.message ? 'border-error' : 'border-outline-variant/50'
                }`}
              id="message"
              placeholder="How can I help you?"
              rows={4}
              value={form.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.message && (
              <span className="text-error text-xs font-semibold mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">error</span>
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            className="mt-2 w-full py-3 bg-primary text-on-primary font-label-md text-label-md font-bold rounded hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 cursor-pointer shadow-md"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
