import React, { useState, useEffect } from 'react';

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  type: 'certification' | 'training';
  credentialId?: string;
  score?: string;
  categoryArea?: string;
  location?: string;
  description?: string;
  skills?: string[];
  credentialUrl?: string;
  driveUrl?: string;
  image?: string;
  images?: string[];
}

interface CertificatesProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

type FilterTab = 'all' | 'certification' | 'training';

export const Certificates: React.FC<CertificatesProps> = ({ onSelectCertificate }) => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

  // Touch swipe state
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Responsive items per page (strictly max 2 rows on every viewport)
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // 1 col x 2 rows = 2 items
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4); // 2 cols x 2 rows = 4 items
      } else {
        setItemsPerPage(6); // 3 cols x 2 rows = 6 items
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const items: CertificateItem[] = [
    // ─── Certification (BNSP) ───
    {
      id: 'cert-bnsp-1',
      title: 'Junior Network Administrator',
      issuer: 'National Professional Certification Board (BNSP)',
      date: 'Apr 2022 — Apr 2025',
      icon: 'verified',
      type: 'certification',
      driveUrl: 'https://drive.google.com/file/d/12yzZ274pjEe03UcOVf2A03DCUz_k3Isz/view?usp=drive_link',
      description:
        'Official national professional competency certification from the National Professional Certification Board (BNSP) validating core competencies as a Junior Network Administrator. Assesses and certifies proficiency in computer network installation, configuration, device maintenance, routing and switching, connectivity testing, and troubleshooting small-to-medium enterprise network infrastructure.',
      skills: [
        'Network Administration',
        'Routing & Switching',
        'Network Configuration',
        'Troubleshooting',
        'TCP/IP & Subnetting',
        'Network Security',
      ],
    },

    // ─── Training Programs (MySkill Series) ───
    {
      id: 'train-qa-1',
      title: 'Quality Assurance Introduction',
      issuer: 'MySkill',
      date: 'Nov 2026',
      icon: 'fact_check',
      type: 'training',
      driveUrl: 'https://drive.google.com/file/d/12yzZ274pjEe03UcOVf2A03DCUz_k3Isz/view?usp=drive_link',
      description:
        'Learned the fundamentals of Quality Assurance (QA) in software engineering, covering core QA principles, test integration across each Software Development Life Cycle (SDLC) phase, and testing support toolsets. Developed a solid understanding of manual and automated testing methodologies, bug identification and reporting workflows, and QA responsibilities in ensuring application quality, functionality, and user reliability.',
      skills: [
        'Quality Assurance (QA)',
        'Manual Testing',
        'Automation Testing',
        'SDLC Integration',
        'Bug Reporting & Tracking',
        'Test Planning',
      ],
    },
    {
      id: 'train-sql-1',
      title: 'SQL for Data Analysis',
      issuer: 'MySkill',
      date: 'Oct 2026',
      icon: 'database',
      type: 'training',
      driveUrl: 'https://drive.google.com/file/d/12yzZ274pjEe03UcOVf2A03DCUz_k3Isz/view?usp=drive_link',
      description:
        'Practiced and applied SQL for data management and analytics, encompassing CRUD operations, data filtering and sorting, grouping (GROUP BY), aggregate functions, logical operations, table schema modifications, JOINs, string and date functions, Subqueries, Common Table Expressions (CTEs), Stored Procedures, and relational data modeling.',
      skills: [
        'SQL',
        'CRUD Operations',
        'Aggregate Functions',
        'JOIN & Subqueries',
        'CTE & Stored Procedures',
        'Relational Database',
      ],
    },
    {
      id: 'train-ds-1',
      title: 'Data Science',
      issuer: 'MySkill',
      date: 'Oct 2026',
      icon: 'psychology',
      type: 'training',
      driveUrl: 'https://drive.google.com/file/d/12yzZ274pjEe03UcOVf2A03DCUz_k3Isz/view?usp=drive_link',
      description:
        'Studied Data Science fundamentals and their applications in data processing and analysis, using toolchains such as Kaggle, GitHub, and Kedro for end-to-end data project workflows. Developed statistical acumen in descriptive analysis, data visualization, probability distributions, hypothesis testing, and correlation analysis. Covered data preprocessing techniques, core Machine Learning concepts, and initial predictive modeling steps to generate data-driven insights.',
      skills: [
        'Data Science',
        'Machine Learning',
        'Statistics & Probability',
        'Data Preprocessing',
        'Hypothesis Testing',
        'Kaggle & Kedro',
      ],
    },
    {
      id: 'train-da-1',
      title: 'Data Analysis',
      issuer: 'MySkill',
      date: 'Oct 2026',
      icon: 'analytics',
      type: 'training',
      driveUrl: 'https://drive.google.com/file/d/12yzZ274pjEe03UcOVf2A03DCUz_k3Isz/view?usp=drive_link',
      description:
        'Practiced comprehensive end-to-end data analysis workflows, from data preparation and wrangling, applied statistics, and business/product metric tracking to cohort and retention analysis. Enhanced analytical proficiency in regression, correlation, inferential statistics, hypothesis testing, A/B testing, clustering, and text analysis, as well as data visualization and communication for data-backed executive decision-making.',
      skills: [
        'Data Analysis',
        'Business Metrics',
        'A/B Testing',
        'Cohort & Retention Analysis',
        'Regression & Clustering',
        'Data Visualization',
      ],
    },
    {
      id: 'train-bd-1',
      title: 'Basic Data',
      issuer: 'MySkill',
      date: 'Oct 2026',
      icon: 'insights',
      type: 'training',
      driveUrl: 'https://drive.google.com/file/d/12yzZ274pjEe03UcOVf2A03DCUz_k3Isz/view?usp=drive_link',
      description:
        'Explored data analytics fundamentals, from understanding data within business contexts and transforming raw data into actionable insights to presenting findings through data storytelling and executive dashboards. Strengthened understanding of data-driven decision making, business data strategy, information lifecycle management, project phases, and career pathways in analytics.',
      skills: [
        'Data Storytelling',
        'Dashboarding',
        'Data-Driven Decision',
        'Business Intelligence',
        'Data Management',
      ],
    },
    {
      id: 'train-excel-1',
      title: 'Microsoft Basic Excel',
      issuer: 'MySkill',
      date: 'Oct 2026',
      icon: 'table_chart',
      type: 'training',
      driveUrl: 'https://drive.google.com/file/d/12yzZ274pjEe03UcOVf2A03DCUz_k3Isz/view?usp=drive_link',
      description:
        'Mastered foundational Microsoft Excel skills for data management and manipulation, spanning workbook navigation, worksheet structuring, formula application, and nested IF-ELSE logical functions. Developed hands-on capabilities in data cleansing, sorting and filtering, conditional formatting, and data aggregation to generate structured, audit-ready analytical outputs.',
      skills: [
        'Microsoft Excel',
        'Data Cleansing',
        'Excel Formulas',
        'IF-ELSE Logic',
        'Sorting & Filtering',
        'Data Aggregation',
      ],
    },
  ];

  const tabs: { key: FilterTab; label: string; icon: string }[] = [
    { key: 'all', label: 'All', icon: 'grid_view' },
    { key: 'certification', label: 'Certifications', icon: 'workspace_premium' },
    { key: 'training', label: 'Training', icon: 'school' },
  ];

  const filteredItems = activeTab === 'all' ? items : items.filter((item) => item.type === activeTab);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;

  // Handle tab switch
  const handleTabChange = (tab: FilterTab) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else if (distance < -minSwipeDistance && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section
      id="certificates"
      className="scroll-mt-20 py-section-gap border-t border-outline-variant/20 scroll-entry-effect transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-stack-lg animate-[fadeIn_0.5s_ease-out]">
        <div>
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface">
            Certification & Training
          </h2>
        </div>

        {/* Quick Slider Controls in Header */}
        {totalPages > 1 && (
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="w-10 h-10 rounded-full border border-outline-variant/30 text-on-surface hover:border-primary hover:text-primary hover:bg-surface-container disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center justify-center"
              aria-label="Previous Slide"
              title="Previous Slide"
            >
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <span className="font-mono text-xs font-semibold text-on-surface-variant px-1">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="w-10 h-10 rounded-full border border-outline-variant/30 text-on-surface hover:border-primary hover:text-primary hover:bg-surface-container disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center justify-center"
              aria-label="Next Slide"
              title="Next Slide"
            >
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
        {tabs.map((tab) => {
          const count =
            tab.key === 'all' ? items.length : items.filter((i) => i.type === tab.key).length;
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-label-md text-xs sm:text-label-md font-semibold transition-all duration-300 cursor-pointer border ${
                isActive
                  ? 'bg-primary text-on-primary border-primary shadow-md'
                  : 'bg-surface-container-lowest dark:bg-surface-container border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-sm sm:text-base">{tab.icon}</span>
              <span>{tab.label}</span>
              <span
                className={`ml-0.5 text-[11px] sm:text-xs px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-on-primary/20 text-on-primary'
                    : 'bg-surface-container dark:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Slidable Carousel Container (Max 2 rows per page) */}
      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIdx) => {
            const pageItems = filteredItems.slice(
              pageIdx * itemsPerPage,
              (pageIdx + 1) * itemsPerPage
            );

            return (
              <div key={pageIdx} className="w-full shrink-0">
                {/* 2-Row Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
                  {pageItems.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 sm:p-5 md:p-6 bg-surface-container-lowest dark:bg-surface-container rounded-xl border border-outline-variant/30 hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 group h-full"
                    >
                      <div>
                        {/* Type Badge + Icon Row */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-11 h-11 rounded-lg bg-surface-container dark:bg-surface-container-high text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-2xl">{cert.icon}</span>
                          </div>
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                              cert.type === 'certification'
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                            }`}
                          >
                            <span className="material-symbols-outlined text-sm">
                              {cert.type === 'certification' ? 'workspace_premium' : 'school'}
                            </span>
                            {cert.type === 'certification' ? 'Certification' : 'Training'}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-headline-md text-base md:text-lg font-bold text-on-surface mb-1.5 group-hover:text-primary transition-colors leading-snug">
                          {cert.title}
                        </h3>

                        {/* Issuer */}
                        <p className="font-body-md text-sm text-primary font-semibold mb-3">
                          {cert.issuer}
                        </p>

                        {/* Key Skills Pills */}
                        {cert.skills && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {cert.skills.slice(0, 3).map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2 py-0.5 bg-surface dark:bg-surface-container-high border border-outline-variant/20 rounded text-[10px] text-on-surface-variant font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                            {cert.skills.length > 3 && (
                              <span className="text-[10px] text-on-surface-variant/50 self-center font-medium">
                                +{cert.skills.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Bottom Section */}
                      <div className="pt-3 border-t border-outline-variant/15 flex items-center justify-between">
                        <button
                          onClick={() => onSelectCertificate(cert)}
                          className="text-primary font-label-md text-xs font-bold hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>View Details</span>
                          <span className="text-sm font-bold">↗</span>
                        </button>

                        {/* Date at the bottom right */}
                        <span className="text-xs font-mono font-semibold text-on-surface-variant/70">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Controls & Slide Navigation */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-outline-variant/20">
          {/* Showing Count */}
          <div className="text-xs font-medium text-on-surface-variant order-2 sm:order-1">
            Showing{' '}
            <span className="font-bold text-on-surface">
              {currentPage * itemsPerPage + 1}
            </span>{' '}
            -{' '}
            <span className="font-bold text-on-surface">
              {Math.min((currentPage + 1) * itemsPerPage, filteredItems.length)}
            </span>{' '}
            of <span className="font-bold text-on-surface">{filteredItems.length}</span> items
          </div>

          {/* Controls: Prev, Dots/Numbers, Next */}
          <div className="flex items-center gap-1.5 sm:gap-2 order-1 sm:order-2 flex-wrap justify-center">
            {/* Prev Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-outline-variant/30 text-on-surface hover:border-primary hover:text-primary hover:bg-surface-container disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1 text-xs font-semibold"
              aria-label="Previous Page"
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
              <span className="hidden xs:inline">Prev</span>
            </button>

            {/* Page Buttons / Dots */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg font-label-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                    currentPage === idx
                      ? 'bg-primary text-on-primary shadow-md scale-105'
                      : 'bg-surface-container-lowest dark:bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-outline-variant/30 text-on-surface hover:border-primary hover:text-primary hover:bg-surface-container disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1 text-xs font-semibold"
              aria-label="Next Page"
            >
              <span className="hidden xs:inline">Next</span>
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
