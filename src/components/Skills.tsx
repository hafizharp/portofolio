import React from 'react';

export const Skills: React.FC = () => {
  const expertise = [
    {
      icon: 'code',
      title: 'Fullstack Web Development',
      desc: 'Building responsive and scalable web applications with React, Node.js, Express, Django, and MySQL — from frontend interfaces to backend APIs and database management.',
    },
    {
      icon: 'psychology',
      title: 'Machine Learning & AI',
      desc: 'Developing intelligent solutions using Python, TensorFlow, and Computer Vision — from data preprocessing and model training to evaluation and deployment.',
    },
  ];

  const hardSkills = [
    'Python',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'React',
    'Node.js',
    'Express.js',
    'Django',
    'MySQL',
    'Git',
    'GitHub',
    'Figma',
    'Roboflow',
    'Google Colab',
    'Microsoft Office',
    'Canva',
    'REST APIs',
    'Tailwind CSS',
  ];

  const softSkills = [
    'Analytical Thinking',
    'Critical Thinking',
    'Logical Thinking',
    'Time Management',
    'Public Speaking',
    'Leadership',
    'Teamwork',
    'Integrity',
    'Project Management',
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-section-gap border-t border-outline-variant/20 scroll-entry-effect transition-colors duration-300"
    >
      {/* Areas of Expertise */}
      <div className="space-y-stack-lg mb-10">
        <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-gutter">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 md:p-8 bg-surface-container-low dark:bg-surface-container rounded-lg border border-outline-variant/30 hover:border-primary dark:hover:border-primary transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-primary mb-3 sm:mb-4 block group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <h3 className="font-headline-md text-lg sm:text-headline-md text-on-surface mb-2 font-bold sm:font-semibold">
                {item.title}
              </h3>
              <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hard Skills */}
      <div className="space-y-stack-lg mb-10">
        <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface">Hard Skills</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {hardSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-surface-container-low dark:bg-surface-container border border-outline-variant/30 rounded font-label-md text-xs sm:text-label-md text-on-surface hover:border-primary hover:text-primary dark:hover:border-primary transition-all duration-300 cursor-default hover:shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="space-y-stack-lg">
        <h2 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface">Soft Skills</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded font-label-md text-xs sm:text-label-md text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 cursor-default hover:shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
