import React, { useState } from 'react';

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
  image?: string;
  images?: string[];
}

interface CertificatesProps {
  onSelectCertificate: (cert: CertificateItem) => void;
}

type FilterTab = 'all' | 'certification' | 'training';

export const Certificates: React.FC<CertificatesProps> = ({ onSelectCertificate }) => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const items: CertificateItem[] = [
    // ─── Certification (BNSP) ───
    {
      id: 'cert-bnsp-1',
      title: 'Junior Network Administrator',
      issuer: 'National Professional Certification Board (BNSP)',
      date: 'Apr 2022 — Apr 2025',
      icon: 'verified',
      type: 'certification',
      categoryArea: 'Information Technology & Computer Networks',
      location: 'Indonesia',
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
      categoryArea: 'Information & Communication Technology — System Analyst',
      location: 'South Jakarta, DKI Jakarta',
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
      categoryArea: 'Information & Communication Technology — Database',
      location: 'South Jakarta, DKI Jakarta',
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
      categoryArea: 'Information & Communication Technology — Database',
      location: 'South Jakarta, DKI Jakarta',
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
      categoryArea: 'Information & Communication Technology',
      location: 'South Jakarta, DKI Jakarta',
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
      categoryArea: 'Information & Communication Technology — Database',
      location: 'South Jakarta, DKI Jakarta',
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
      categoryArea: 'Information & Communication Technology — Office Tools',
      location: 'South Jakarta, DKI Jakarta',
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

  return (
    <section
      id="certificates"
      className="scroll-mt-20 py-section-gap border-t border-outline-variant/20 scroll-entry-effect transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="mb-stack-lg animate-[fadeIn_0.5s_ease-out]">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Certification & Training
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => {
          const count =
            tab.key === 'all' ? items.length : items.filter((i) => i.type === tab.key).length;
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-label-md text-label-md font-semibold transition-all duration-300 cursor-pointer border ${
                isActive
                  ? 'bg-primary text-on-primary border-primary shadow-md'
                  : 'bg-surface-container-lowest dark:bg-surface-container border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-base">{tab.icon}</span>
              <span>{tab.label}</span>
              <span
                className={`ml-0.5 text-xs px-1.5 py-0.5 rounded-full ${
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

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((cert) => (
          <div
            key={cert.id}
            className="p-6 bg-surface-container-lowest dark:bg-surface-container rounded-xl border border-outline-variant/30 hover:border-primary transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 group"
          >
            <div>
              {/* Type Badge + Icon Row */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-lg bg-surface-container dark:bg-surface-container-high text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">{cert.icon}</span>
                </div>
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
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
              <h3 className="font-headline-md text-base md:text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors leading-snug">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="font-body-md text-sm text-primary font-semibold mb-1">
                {cert.issuer}
              </p>

              {/* Category Area */}
              {cert.categoryArea && (
                <p className="font-label-sm text-[11px] text-on-surface-variant font-medium mb-2 line-clamp-1">
                  {cert.categoryArea}
                </p>
              )}

              {/* Date */}
              <p className="font-label-sm text-xs text-on-surface-variant/70 font-semibold mb-4">
                {cert.date}
              </p>

              {/* Description Preview */}
              {cert.description && (
                <p className="font-body-md text-xs text-on-surface-variant line-clamp-3 leading-relaxed mb-4">
                  {cert.description}
                </p>
              )}
            </div>

            {/* Bottom Section */}
            <div className="pt-4 border-t border-outline-variant/15 flex items-center justify-between">
              <button
                onClick={() => onSelectCertificate(cert)}
                className="text-primary font-label-md text-xs font-bold hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>View Details</span>
                <span className="text-sm font-bold">↗</span>
              </button>

              {cert.skills && (
                <span className="text-[11px] text-on-surface-variant/60 font-medium">
                  {cert.skills.length} skills
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
