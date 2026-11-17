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
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => setItemsPerPage(window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 4 : 6);
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
      driveUrl: 'https://drive.google.com/file/d/1TXW8h9yY4lwxYvKCr6w1efCaw8jAWewI/view?usp=drive_link',
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
      driveUrl: 'https://drive.google.com/file/d/1C1TEJXOBJaQQHoUNMwtKPI8bbVxn_J2E/view?usp=drive_link',
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
      driveUrl: 'https://drive.google.com/file/d/1sy5_u5xFXUi3FkRY8tKlJqwA5nIhryqG/view?usp=drive_link',
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
      driveUrl: 'https://drive.google.com/file/d/1C1TEJXOBJaQQHoUNMwtKPI8bbVxn_J2E/view?usp=drive_link',
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
      driveUrl: 'https://drive.google.com/file/d/1XWWECLLU5evjrAbmlRxeiwOSNSuDJdPg/view?usp=drive_link',
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
      driveUrl: 'https://drive.google.com/file/d/1_6X5v9BMxgA1YrSB-iqQ27MU4qCnaJJr/view?usp=drive_link',
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
    {
      id: 'train-excel-2',
      title: 'Microsoft Excel Intermediate',
      issuer: 'MySkill',
      date: 'Nov 2026',
      icon: 'table_chart',
      type: 'training',
      description:
        'Studied intermediate data processing and analysis techniques using Microsoft Excel, including lookup and reference functions (Lookup, INDEX MATCH), mathematical and logical formulas, text and date processing, and error handling. The training also covered data management using Tables and Pivot Tables, visualization through Charts, Dynamic Array Formulas, data formatting, and print and page setup for creating structured and informative reports.',
      skills: [
        'Microsoft Excel',
        'Lookup & INDEX MATCH',
        'Pivot Table',
        'Dynamic Array Formulas',
        'Data Visualization & Charts',
        'Error Handling',
      ],
    },
  ];

  const tabs: { key: FilterTab; label: string; icon: string }[] = [
    { key: 'all', label: 'All', icon: 'grid_view' },
    { key: 'certification', label: 'Certifications', icon: 'workspace_premium' },
    { key: 'training', label: 'Training', icon: 'school' },
  ];

  const filteredItems = activeTab === 'all' ? items : items.filter((item) => item.type === activeTab);
  const orderedItems = [...filteredItems];
  const qaIndex = orderedItems.findIndex((item) => item.id === 'train-qa-1');
  const excelIndex = orderedItems.findIndex((item) => item.id === 'train-excel-2');
  if (qaIndex !== -1 && excelIndex !== -1) {
    [orderedItems[qaIndex], orderedItems[excelIndex]] = [orderedItems[excelIndex], orderedItems[qaIndex]];
  }
  const totalPages = Math.ceil(orderedItems.length / itemsPerPage) || 1;
  const pageItems = orderedItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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

      </div>

      {/* Certificate toolbar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
          const count =
            tab.key === 'all' ? items.length : items.filter((i) => i.type === tab.key).length;
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setCurrentPage(0); }}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-label-md text-xs sm:text-label-md font-semibold transition-all duration-300 cursor-pointer border ${isActive
                  ? 'bg-primary text-on-primary border-primary shadow-md'
                  : 'bg-surface-container-lowest dark:bg-surface-container border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary'
                }`}
            >
              <span className="material-symbols-outlined text-sm sm:text-base">{tab.icon}</span>
              <span>{tab.label}</span>
              <span
                className={`ml-0.5 text-[11px] sm:text-xs px-1.5 py-0.5 rounded-full ${isActive
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

        {totalPages > 1 && (
          <div className="flex items-center gap-2 shrink-0">
            <button type="button" onClick={() => setCurrentPage((page) => Math.max(0, page - 1))} disabled={currentPage === 0} className="w-9 h-9 rounded-full border border-outline-variant/30 text-on-surface hover:border-primary hover:text-primary hover:bg-surface-container disabled:opacity-30 transition-all cursor-pointer flex items-center justify-center" aria-label="Previous page">
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <span className="font-mono text-xs font-semibold text-on-surface-variant">{currentPage + 1} / {totalPages}</span>
            <button type="button" onClick={() => setCurrentPage((page) => Math.min(totalPages - 1, page + 1))} disabled={currentPage === totalPages - 1} className="w-9 h-9 rounded-full border border-outline-variant/30 text-on-surface hover:border-primary hover:text-primary hover:bg-surface-container disabled:opacity-30 transition-all cursor-pointer flex items-center justify-center" aria-label="Next page">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        )}
      </div>

      {/* Certificate cards */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {pageItems.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 sm:p-5 md:p-6 bg-surface-container-lowest dark:bg-surface-container rounded-xl border border-outline-variant/30 hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 group h-full"
                    >
                      <div>
                        {/* Type Badge */}
                        <div className="flex justify-end mb-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${cert.type === 'certification'
                                ? 'bg-primary/5 text-primary dark:bg-primary/10'
                                : 'bg-primary/5 text-primary dark:bg-primary/10'
                              }`}
                          >
                            <span className="material-symbols-outlined text-xs" aria-hidden="true">
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

    </section>
  );
};
