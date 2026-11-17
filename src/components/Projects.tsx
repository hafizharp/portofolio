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
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => setItemsPerPage(window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 4 : 6);
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
  const pageProjects = filteredProjects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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

      </div>

      {/* Project toolbar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((tab) => {
          const count =
            tab.key === 'all'
              ? projectsList.length
              : projectsList.filter((p) => p.category === tab.key).length;
          const isActive = activeCategory === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => { setActiveCategory(tab.key); setCurrentPage(0); }}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-label-md text-xs sm:text-label-md font-semibold transition-all duration-300 cursor-pointer border ${isActive
                ? 'bg-primary text-on-primary border-primary shadow-md'
                : 'bg-surface-container-lowest dark:bg-surface-container border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary'
                }`}
            >
              <span className="material-symbols-outlined text-sm sm:text-base">{tab.icon}</span>
              <span>{tab.label}</span>
              <span
                className={`ml-0.5 text-xs px-1.5 py-0.5 rounded-full ${isActive
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

      {/* Project cards */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pageProjects.map((project, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 md:p-6 bg-surface-container-lowest dark:bg-surface-container rounded-xl border border-outline-variant/30 hover:border-primary/60 dark:hover:border-primary/60 transition-all duration-300 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 group h-full"
            >
              <div>
                <div className="flex justify-end mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary dark:bg-primary/10">
                    <span className="material-symbols-outlined text-xs" aria-hidden="true">{project.category === 'machine-learning' ? 'psychology' : 'code'}</span>
                    {project.category === 'machine-learning' ? 'Machine Learning' : 'Developer'}
                  </span>
                </div>
                <h3 className="font-headline-md text-base md:text-lg font-bold text-on-surface mb-1.5 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-3">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.slice(0, 3).map((tech, techIdx) => (
                    <span key={techIdx} className="px-2 py-0.5 bg-surface dark:bg-surface-container-high border border-outline-variant/20 rounded text-[10px] text-on-surface-variant font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-[10px] text-on-surface-variant/50 self-center font-medium">+{project.tech.length - 3} more</span>}
                </div>
              </div>
              <div className="pt-3 border-t border-outline-variant/15 flex items-center justify-between">
                <button type="button" onClick={() => onSelectProject(project)} className="text-primary font-label-md text-xs font-bold hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors">
                  <span>View Details</span><span className="text-sm font-bold">↗</span>
                </button>
                <span className="text-xs font-mono font-semibold text-on-surface-variant/70">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
