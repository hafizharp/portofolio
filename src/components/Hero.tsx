import React from 'react';
import profileImage from "../assets/Profile.jpeg";
import cvPdf from "../assets/Maulana Hafizh Ariputra_CV ENG.pdf";

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-10 md:py-14 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-stack-lg scroll-entry-effect transition-colors duration-300"
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-stack-lg items-start text-left">
        <div className="space-y-stack-sm">
          <p className="font-label-md text-label-md text-primary uppercase tracking-widest font-semibold">
            Hi, I'm Maulana Hafizh Ariputra
          </p>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
            Fullstack WEB Developer{' '}
            <br className="hidden md:block" />
            <span className="text-outline/70 dark:text-outline/50">&amp;</span> Machine Learning Engineer
          </h1>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-justify text-sm sm:text-base md:text-body-lg">
          I am an Informatics Engineering graduate specializing in Fullstack Web Development and Machine Learning. I enjoy building responsive, reliable web applications and developing intelligent, data-driven solutions using modern technologies. With experience in frontend and backend development, database management, API integration, and machine learning, I am passionate about turning ideas into practical digital solutions while continuously learning and growing as a technology professional.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
          <a
            href={cvPdf}
            download="Maulana Hafizh Ariputra_CV ENG.pdf"
            className="flex-1 sm:flex-none px-5 sm:px-6 py-3 bg-primary text-on-primary font-label-md text-label-md font-semibold rounded hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            title="Download CV (PDF)"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            Download CV
          </a>
          <a
            href="#contact"
            className="flex-1 sm:flex-none px-5 sm:px-6 py-3 border border-outline-variant text-on-surface hover:border-primary hover:text-primary font-label-md text-label-md font-semibold rounded active:scale-95 transition-all cursor-pointer flex items-center justify-center"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center md:justify-end w-full">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border border-outline-variant/30 overflow-hidden bg-surface-container flex items-center justify-center shadow-xl shadow-surface-container-high/40 hover:shadow-primary/10 transition-all duration-500 group">
          <img
            className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            src={profileImage}
            alt="Profile"
            fetchPriority="high"
            width="320"
            height="320"
          />
        </div>
      </div>
    </section>
  );
};
