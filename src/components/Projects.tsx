import React, { useState, useEffect } from 'react';

export type ProjectCategory = 'developer' | 'machine-learning';

export interface Project {
  title: string;
  desc: string;
  category: ProjectCategory;
  image?: string;
  images?: string[];
  icon?: string;
  tech: string[];
  challenge: string;
  solution: string;
  results: string[];
  year: string;
  externalUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
}

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'all' | 'developer' | 'machine-learning';

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

  // Touch swipe state
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Responsive items per page (strictly 2 rows on every viewport)
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

  const projectsList: Project[] = [
    // ─── Developer Projects ───
    {
      title: 'Narasi Bangsa Website',
      desc: 'A full-stack news portal website with multi-role user system and complete CRUD functionality for news content management.',
      category: 'developer',
      icon: 'newspaper',
      year: '2026',
      tech: ['REACT', 'EXPRESS.JS', 'NODE.JS', 'REST API'],
      githubUrl: 'https://github.com/hafizharp',
      challenge:
        'Building a news portal that supports multiple user roles with different access permissions while ensuring structured and efficient content management.',
      solution:
        'Developed a full-stack application using React for the frontend and Express.js for the backend. Implemented a multi-role user system with granular permissions for content CRUD operations, complete with frontend-backend API integration.',
      results: [
        'Multi-role user system with different access permissions for each user',
        'Full CRUD functionality for structured news content management',
        'Seamless frontend-backend integration via REST APIs',
        'Structured and efficient data management workflow',
      ],
    },
    {
      title: 'UI/UX Design — System Implementation Platform',
      desc: 'Designed a user interface for the project deployment feature on a web platform, simplifying the creation and deployment of intelligent system projects.',
      category: 'developer',
      icon: 'design_services',
      year: '2024',
      tech: ['FIGMA', 'UI/UX', 'DESIGN THINKING', 'PROTOTYPING'],
      figmaUrl: 'https://www.figma.com/design/zR0VlNt4MocEtYtI4PH5EQ/SI?node-id=0-1',
      challenge:
        'Creating an intuitive interface for deploying intelligent system projects that is accessible to users with varying technical backgrounds.',
      solution:
        'Designed a streamlined user interface in Figma following Design Thinking methodology, with clear visual hierarchy and step-by-step deployment workflows.',
      results: [
        'Intuitive project deployment interface design',
        'Clear visual hierarchy for complex system configurations',
        'User-centered design validated through usability principles',
      ],
    },
    {
      title: 'UI/UX Design — Indowonder Application',
      desc: 'Designed an intuitive and visually appealing UI/UX for the Indowonder application following Design Thinking methodology.',
      category: 'developer',
      icon: 'palette',
      year: '2023',
      tech: ['FIGMA', 'UI/UX', 'DESIGN THINKING', 'USER RESEARCH'],
      figmaUrl: 'https://www.figma.com/design/de9uW8aKmTug8rthaN01uO/Untitled?node-id=0-1',
      challenge:
        'Designing a seamless mobile application experience that meets diverse user needs while maintaining visual appeal and usability.',
      solution:
        'Applied the Design Thinking methodology — empathize, define, ideate, prototype, and test — to create a user-centered design with intuitive navigation and aesthetically pleasing interface.',
      results: [
        'Seamless interaction experience following Design Thinking',
        'Visually appealing and user-centered interface',
        'Intuitive navigation validated through usability principles',
      ],
    },

    // ─── Machine Learning Projects ───
    {
      title: 'Computer Vision in Classroom',
      desc: 'Object detection and counting in a classroom environment using YOLOv8 and EfficientDet, comparing multiple model architectures.',
      category: 'machine-learning',
      icon: 'visibility',
      year: '2026',
      tech: ['YOLOV8', 'EFFICIENTDET', 'PYTHON', 'ROBOFLOW', 'GOOGLE COLAB'],
      githubUrl: 'https://github.com/hafizharp/Tugas-Akhir',
      challenge:
        'Developing an accurate and efficient object detection system for classroom environments that can count and identify objects in real-time across diverse conditions.',
      solution:
        'Implemented a complete computer vision pipeline including dataset collection, labeling, preprocessing, and augmentation using Roboflow, followed by training and optimizing both YOLOv8 and EfficientDet models for comparative evaluation.',
      results: [
        'Comprehensive model comparison using mAP@50, FPS, MAE, and GFLOPs metrics',
        'Complete pipeline from dataset collection to model evaluation',
        'Determined the most suitable model for classroom object detection',
        'Robust preprocessing and augmentation pipeline for training data',
      ],
    },
    {
      title: 'AcneInsight',
      desc: 'Machine learning system that predicts acne severity levels and classifies acne types from images using ResNet-18 and CNN architectures.',
      category: 'machine-learning',
      icon: 'dermatology',
      year: '2023',
      tech: ['RESNET-18', 'CNN', 'PYTHON', 'TENSORFLOW'],
      githubUrl: 'https://github.com/2AM-Labs/AcneInsight',
      challenge:
        'Achieving high accuracy in classifying both acne severity levels (Normal to Level 3) and acne types (Blackhead, Nodule, Papule, Pustule, Whitehead) from skin images.',
      solution:
        'Leveraged the ResNet-18 architecture and Convolutional Neural Networks (CNN) with transfer learning to build a dual-task classification model for acne severity and type detection.',
      results: [
        'High accuracy in classifying acne severity from Normal to Level 3',
        'Multi-class acne type classification: Blackhead, Nodule, Papule, Pustule, Whitehead',
        'Potential support for dermatological assessment and treatment planning',
      ],
    },
    {
      title: 'Realestate Price Prediction',
      desc: 'Machine learning pipeline to predict property prices using features such as location, building area, and number of rooms.',
      category: 'machine-learning',
      icon: 'real_estate_agent',
      year: '2023',
      tech: ['PYTHON', 'SCIKIT-LEARN', 'PANDAS', 'MATPLOTLIB'],
      githubUrl: 'https://github.com/2AM-Labs/Realestate-Prediction',
      challenge:
        'Building an accurate predictive model for property prices that accounts for multiple features and provides insights into market trends.',
      solution:
        'Developed a robust ML pipeline combining data analysis with predictive modeling techniques, featuring feature engineering and model optimization for improved prediction accuracy.',
      results: [
        'Improved property price prediction accuracy through model optimization',
        'Insights into property market trends and pricing factors',
        'Comprehensive data analysis pipeline for real estate data',
      ],
    },
    {
      title: 'Play Golf Prediction',
      desc: 'Machine learning classification project that predicts whether to play golf based on weather conditions.',
      category: 'machine-learning',
      icon: 'sports_golf',
      year: '2023',
      tech: ['PYTHON', 'SCIKIT-LEARN', 'DECISION TREE', 'PANDAS'],
      githubUrl: 'https://github.com/2AM-Labs/Play-Golf-Prediction',
      challenge:
        'Modeling decision-making patterns based on multiple weather attributes like outlook, temperature, humidity, and wind.',
      solution:
        'Applied classification techniques to build a decision model from weather data, combining data analysis with predictive modeling for practical weather-based decision patterns.',
      results: [
        'Effective classification model for weather-based decision making',
        'Practical insights into weather-based decision patterns',
        'Clean data analysis and visualization pipeline',
      ],
    },
    {
      title: 'Titanic Survival Prediction',
      desc: 'Machine learning project that predicts passenger survival on the Titanic based on attributes such as age, gender, and passenger class.',
      category: 'machine-learning',
      icon: 'directions_boat',
      year: '2023',
      tech: ['PYTHON', 'SCIKIT-LEARN', 'PANDAS', 'SEABORN'],
      githubUrl: 'https://github.com/2AM-Labs/Titanic-Survival-Prediction',
      challenge:
        'Exploring factors influencing survival rates and building an accurate classifier from historical Titanic passenger data.',
      solution:
        'Conducted comprehensive data analysis and feature engineering to build a predictive classification model, uncovering key factors that influenced survival outcomes.',
      results: [
        'Identified key factors influencing survival rates',
        'Practical application of ML classification techniques',
        'Comprehensive exploratory data analysis and visualization',
      ],
    },
    {
      title: 'Cloth Size Prediction',
      desc: 'Machine learning system that predicts suitable clothing sizes based on body measurements like height, weight, and age.',
      category: 'machine-learning',
      icon: 'checkroom',
      year: '2023',
      tech: ['PYTHON', 'SCIKIT-LEARN', 'PANDAS', 'NUMPY'],
      githubUrl: 'https://github.com/2AM-Labs/Cloth-Size-Prediction',
      challenge:
        'Improving size recommendation accuracy to enhance customer satisfaction and reduce product returns caused by incorrect sizing.',
      solution:
        'Built a classification model using body measurement data with extensive data analysis and model optimization to achieve accurate clothing size predictions.',
      results: [
        'Improved size recommendation accuracy through model optimization',
        'Potential to enhance customer satisfaction and reduce returns',
        'Data-driven approach to clothing size prediction',
      ],
    },
  ];

  const categories: { key: FilterCategory; label: string; icon: string }[] = [
    { key: 'all', label: 'All Projects', icon: 'grid_view' },
    { key: 'developer', label: 'Developer', icon: 'code' },
    { key: 'machine-learning', label: 'Machine Learning', icon: 'psychology' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsList
      : projectsList.filter((project) => project.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;

  // Handle category switch
  const handleCategoryChange = (cat: FilterCategory) => {
    setActiveCategory(cat);
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
      id="projects"
      className="scroll-mt-20 py-section-gap border-t border-outline-variant/20 scroll-entry-effect transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-stack-lg animate-[fadeIn_0.5s_ease-out]">
        <div>
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface">
            Projects
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

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
        {categories.map((tab) => {
          const count =
            tab.key === 'all'
              ? projectsList.length
              : projectsList.filter((p) => p.category === tab.key).length;
          const isActive = activeCategory === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => handleCategoryChange(tab.key)}
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

      {/* Slidable Carousel Container (Strictly 2 rows per page) */}
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
            const pageProjects = filteredProjects.slice(
              pageIdx * itemsPerPage,
              (pageIdx + 1) * itemsPerPage
            );

            return (
              <div key={pageIdx} className="w-full shrink-0">
                {/* 2-Row Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
                  {pageProjects.map((project, index) => (
                    <div
                      key={index}
                      className="group flex flex-col bg-surface-container-lowest dark:bg-surface-container border border-outline-variant/30 rounded-xl overflow-hidden hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full justify-between p-4 sm:p-5 md:p-6"
                    >
                      <div>
                        {/* Top Header Row: Icon + Category Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-11 h-11 rounded-lg bg-surface-container dark:bg-surface-container-high text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-2xl">
                              {project.icon || (project.category === 'machine-learning' ? 'psychology' : 'code')}
                            </span>
                          </div>

                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${project.category === 'machine-learning'
                              ? 'bg-purple-950/80 text-purple-200 border border-purple-500/30'
                              : 'bg-primary/10 text-primary border border-primary/20'
                              }`}
                          >
                            <span className="material-symbols-outlined text-xs">
                              {project.category === 'machine-learning' ? 'psychology' : 'code'}
                            </span>
                            {project.category === 'machine-learning' ? 'ML' : 'Dev'}
                          </span>
                        </div>

                        {/* Project Title */}
                        <h3 className="font-headline-md text-base md:text-lg font-bold text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug">
                          {project.title}
                        </h3>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 bg-surface dark:bg-surface-container-high border border-outline-variant/20 rounded font-mono text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Footer Section */}
                      <div className="pt-3 border-t border-outline-variant/15 flex items-center justify-between">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 font-label-md text-xs text-primary font-bold hover:underline transition-colors group/link cursor-pointer"
                        >
                          <span>View Case Study</span>
                          <span className="material-symbols-outlined text-xs group-hover/link:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </button>

                        {/* Date at the bottom right */}
                        <span className="text-xs font-mono font-semibold text-on-surface-variant/70">
                          {project.year}
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
              {Math.min((currentPage + 1) * itemsPerPage, filteredProjects.length)}
            </span>{' '}
            of <span className="font-bold text-on-surface">{filteredProjects.length}</span> projects
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
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg font-label-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${currentPage === idx
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
