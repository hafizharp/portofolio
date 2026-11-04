import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import type { ExperienceItem } from './components/Experience';
import { Certificates } from './components/Certificates';
import type { CertificateItem } from './components/Certificates';
import { Projects } from './components/Projects';
import type { Project } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Toast } from './components/Toast';
import { ImageCarousel } from './components/ImageCarousel';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; isOpen: boolean }>({
    message: '',
    type: 'success',
    isOpen: false,
  });

  // Apply dark mode class to html element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Fallback Intersection Observer for scroll-driven animations
  useEffect(() => {
    const supportsScrollTimeline = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');

    if (!supportsScrollTimeline) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fadeInUp');
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      document.querySelectorAll('.scroll-entry-effect').forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, []);

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isOpen: true });
  };

  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased transition-colors duration-300 min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Contents */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex-1 w-full">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Experience onSelectExperience={(exp) => setSelectedExperience(exp)} />
        <Certificates onSelectCertificate={(cert) => setSelectedCertificate(cert)} />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Alert */}
      <Toast
        message={toast.message}
        type={toast.type}
        isOpen={toast.isOpen}
        onClose={() => setToast((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Experience Detail Modal */}
      <Modal
        isOpen={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.role || ''}
      >
        {selectedExperience && (
          <div className="space-y-6">
            {/* Flexible Multi-Photo Slide Carousel */}
            <ImageCarousel
              images={selectedExperience.images}
              image={selectedExperience.image}
              alt={selectedExperience.role}
            />

            <div className="border-b border-outline-variant/20 pb-4">
              <p className="font-headline-md text-lg font-semibold text-primary">
                {selectedExperience.company}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-on-surface-variant mt-2">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-primary">calendar_month</span>
                  <span>{selectedExperience.period}</span>
                </span>
                {selectedExperience.location && (
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-primary">location_on</span>
                    <span>{selectedExperience.location}</span>
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-headline-md text-sm uppercase tracking-wider text-on-surface font-semibold">
                Key Responsibilities & Accomplishments
              </h4>
              <ul className="space-y-2.5 list-none">
                {selectedExperience.points.map((pt, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-left text-on-surface-variant font-body-md">
                    <span className="material-symbols-outlined text-primary text-sm pt-1 font-bold">check_circle</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedExperience.skills && (
              <div className="pt-4 border-t border-outline-variant/20 space-y-2">
                <h4 className="font-headline-md text-xs uppercase tracking-wider text-on-surface font-semibold">
                  Technologies & Skills Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-surface-container border border-outline-variant/30 rounded-md text-xs text-primary font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Certificate Detail Modal */}
      <Modal
        isOpen={selectedCertificate !== null}
        onClose={() => setSelectedCertificate(null)}
        title={selectedCertificate?.title || ''}
      >
        {selectedCertificate && (
          <div className="space-y-6">
            {/* Flexible Multi-Photo Slide Carousel */}
            <ImageCarousel
              images={selectedCertificate.images}
              image={selectedCertificate.image}
              alt={selectedCertificate.title}
            />

            <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-4">
              <div className="w-14 h-14 rounded-xl bg-surface-container dark:bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">{selectedCertificate.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      selectedCertificate.type === 'certification'
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xs">
                      {selectedCertificate.type === 'certification' ? 'workspace_premium' : 'school'}
                    </span>
                    {selectedCertificate.type === 'certification' ? 'Certification' : 'Training'}
                  </span>
                  {selectedCertificate.score && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                      Score: {selectedCertificate.score}
                    </span>
                  )}
                </div>
                <p className="font-headline-md text-base font-semibold text-primary">
                  {selectedCertificate.issuer}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-on-surface-variant/70 font-semibold mt-0.5">
                  <span>Issued: {selectedCertificate.date}</span>
                  {selectedCertificate.location && <span>• {selectedCertificate.location}</span>}
                </div>
                {selectedCertificate.categoryArea && (
                  <p className="text-[11px] text-on-surface-variant/80 mt-1 font-medium">
                    {selectedCertificate.categoryArea}
                  </p>
                )}
              </div>
            </div>

            {selectedCertificate.description && (
              <div className="space-y-2">
                <h4 className="font-headline-md text-xs uppercase tracking-wider text-on-surface font-semibold">
                  Overview
                </h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  {selectedCertificate.description}
                </p>
              </div>
            )}

            {selectedCertificate.skills && (
              <div className="pt-4 border-t border-outline-variant/20 space-y-2">
                <h4 className="font-headline-md text-xs uppercase tracking-wider text-on-surface font-semibold">
                  Skills Validated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-surface-container border border-outline-variant/30 rounded-md text-xs text-primary font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Project Case Study Modal */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Flexible Multi-Photo Slide Carousel */}
            <ImageCarousel
              images={selectedProject.images}
              image={selectedProject.image}
              alt={selectedProject.title}
            />

            {/* Category & Tech stack info */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  selectedProject.category === 'machine-learning'
                    ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                    : 'bg-primary/10 text-primary border border-primary/20'
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {selectedProject.category === 'machine-learning' ? 'psychology' : 'code'}
                </span>
                {selectedProject.category === 'machine-learning' ? 'Machine Learning' : 'Developer'}
              </span>

              {selectedProject.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 bg-surface-container border border-outline-variant/30 rounded text-xs font-mono text-on-surface-variant font-bold uppercase"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="font-body-lg text-body-lg text-on-surface">
              {selectedProject.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-outline-variant/20">
              <div className="space-y-2">
                <h4 className="font-headline-md text-headline-md text-primary flex items-center gap-2 font-semibold">
                  <span className="material-symbols-outlined text-md">warning</span> Challenge
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline-md text-headline-md text-primary flex items-center gap-2 font-semibold">
                  <span className="material-symbols-outlined text-md">lightbulb</span> Solution
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/20">
              <h4 className="font-headline-md text-headline-md text-on-surface mb-3 flex items-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-md">task_alt</span> Key Accomplishments
              </h4>
              <ul className="space-y-2 list-none">
                {selectedProject.results.map((result, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-left text-on-surface-variant font-body-md">
                    <span className="material-symbols-outlined text-primary text-sm pt-0.5 font-bold">check</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>

      {/* Resume / CV Modal */}
      <Modal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        title="Maulana Hafizh Ariputra - Resume"
      >
        <div className="space-y-8" id="resume-printable-area">
          <div className="text-center md:text-left border-b border-outline-variant/30 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Maulana Hafizh Ariputra</h2>
              <p className="font-body-lg text-body-lg text-primary font-semibold">Fullstack Web Developer & ML Engineer</p>
            </div>
            <div className="text-left md:text-right font-label-md text-label-md text-on-surface-variant space-y-1">
              <p className="flex items-center gap-2 md:justify-end">
                <span className="material-symbols-outlined text-sm">mail</span>
                maulanahafizh234@gmail.com
              </p>
              <p className="flex items-center gap-2 md:justify-end">
                <span className="material-symbols-outlined text-sm">phone</span>
                +6288225695707
              </p>
              <p className="flex items-center gap-2 md:justify-end">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Tangerang, Indonesia
              </p>
              <p className="flex items-center gap-2 md:justify-end">
                <a href="https://linkedin.com/in/maulanahafizh" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  linkedin.com/in/maulanahafizh
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-2 text-left">
            <h4 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide border-b border-outline-variant/10 pb-1 font-semibold">
              Professional Summary
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Informatics Engineering graduate from Universitas Trisakti with a focus on Full-Stack Web Development and Artificial Intelligence. Experienced in building web applications using React, Node.js, Express, Django, and MySQL, as well as developing Machine Learning and Computer Vision solutions using Python. Skilled in API development, frontend-backend integration, data processing, and AI model implementation.
            </p>
          </div>

          <div className="space-y-4 text-left">
            <h4 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide border-b border-outline-variant/10 pb-1 font-semibold">
              Education
            </h4>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-semibold">
                <span className="font-body-lg text-on-surface">Bachelor of Informatics Engineering — Universitas Trisakti</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 ml-4">Sep 2022 — Aug 2026</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">GPA: 3.22/4.00</p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-semibold">
                <span className="font-body-lg text-on-surface">Computer and Network Engineering — SMK Ki Hajar Dewantoro</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 ml-4">Jul 2019 — Jun 2022</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">Score: 85.85/100.00</p>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <h4 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide border-b border-outline-variant/10 pb-1 font-semibold">
              Work Experience
            </h4>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-semibold">
                <span className="font-body-lg text-on-surface">Commercial and Transformation Intern — PT ANTAM TBK</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 ml-4">Mar — Jun 2025</span>
              </div>
              <ul className="list-disc pl-5 font-body-md text-body-md text-on-surface-variant space-y-1">
                <li>Collected, processed, and analyzed sales data to support team evaluation and reporting.</li>
                <li>Documented business process workflows for operational improvement initiatives.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-semibold">
                <span className="font-body-lg text-on-surface">Full-Stack Developer Intern — PT Winnicode Garuda Indonesia</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 ml-4">Feb — Jul 2025</span>
              </div>
              <ul className="list-disc pl-5 font-body-md text-body-md text-on-surface-variant space-y-1">
                <li>Developed responsive web interfaces using React; built REST APIs with Node.js, Express, and MySQL.</li>
                <li>Integrated frontend and backend via APIs; performed debugging and testing.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-semibold">
                <span className="font-body-lg text-on-surface">Banquet Worker — Swissôtel Jakarta PIK Avenue</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 ml-4">Jun 2021 — Aug 2022</span>
              </div>
              <ul className="list-disc pl-5 font-body-md text-body-md text-on-surface-variant space-y-1">
                <li>Supported planning and execution of hotel events; coordinated logistics and guest services.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3 text-left">
            <h4 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide border-b border-outline-variant/10 pb-1 font-semibold">
              Certifications & Training
            </h4>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-semibold">
                <span className="font-body-md text-on-surface">Junior Network Administrator — Badan Nasional Sertifikasi Profesi (BNSP)</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 ml-4">Apr 2022 — Apr 2025</span>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant">Score: 80 / 100 • National Professional Certification</p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-semibold">
                <span className="font-body-md text-on-surface">Professional Training Series — MySkill</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0 ml-4">Okt — Nov 2026</span>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant">
                Quality Assurance, SQL for Data Analysis, Data Science, Data Analysis, Basic Data Analytics, Microsoft Excel
              </p>
            </div>
          </div>

          <div className="space-y-2 text-left">
            <h4 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wide border-b border-outline-variant/10 pb-1 font-semibold">
              Skills
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <span className="font-semibold text-on-surface">Hard Skills:</span> Python, JavaScript, HTML, CSS, React, Node.js, Express.js, Django, MySQL, Git, GitHub, Figma, Roboflow, Google Colab, Canva
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <span className="font-semibold text-on-surface">Soft Skills:</span> Analytical Thinking, Critical Thinking, Leadership, Teamwork, Public Speaking, Project Management
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-outline-variant/20">
            <button
              onClick={() => window.print()}
              className="px-6 py-2 border border-outline text-on-surface hover:border-primary hover:text-primary font-label-md text-label-md font-semibold rounded cursor-pointer transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              Print Resume
            </button>
            <button
              onClick={() => setIsResumeOpen(false)}
              className="px-6 py-2 bg-primary text-on-primary font-label-md text-label-md font-semibold rounded cursor-pointer hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
