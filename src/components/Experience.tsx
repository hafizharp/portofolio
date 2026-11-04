import React, { useState } from 'react';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'work' | 'organization';
  location?: string;
  points: string[];
  skills?: string[];
  image?: string;
  images?: string[];
}

interface ExperienceProps {
  onSelectExperience: (exp: ExperienceItem) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onSelectExperience }) => {
  const [activeTab, setActiveTab] = useState<'work' | 'organization'>('work');

  const experiences: ExperienceItem[] = [
    // ─── Work Experiences ───
    {
      id: 'work-1',
      role: 'Commercial and Transformation Internship',
      company: 'PT ANTAM TBK',
      period: 'Mar 2025 — Jun 2025',
      type: 'work',
      location: 'Jakarta, Indonesia',
      points: [
        'Collected, processed, and analyzed sales data to support team evaluation and reporting activities.',
        'Organized and maintained project and contract documentation in a structured manner to support project administration.',
        'Supported the planning, monitoring, and evaluation of corporate transformation projects.',
        'Documented business process workflows to support process analysis and operational improvement initiatives.',
        'Prepared activity reports and supporting information for departmental requirements.',
      ],
      skills: ['Data Analysis', 'Documentation', 'Business Process', 'Reporting', 'Project Evaluation'],
    },
    {
      id: 'work-2',
      role: 'Full-Stack Developer Intern',
      company: 'PT Winnicode Garuda Indonesia',
      period: 'Feb 2025 — Jul 2025',
      type: 'work',
      location: 'Jakarta, Indonesia',
      points: [
        'Developed responsive and interactive web interfaces using React based on UI/UX requirements and designs.',
        'Built REST APIs and managed databases using Node.js, Express, and MySQL.',
        'Integrated frontend and backend components through APIs to ensure efficient data exchange and application functionality.',
        'Used Git and GitHub for version control and collaborative software development.',
        'Assisted with application deployment to servers and supported system stability and performance.',
        'Performed debugging and testing to identify and resolve application issues.',
      ],
      skills: ['React', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'Git', 'GitHub'],
    },
    {
      id: 'work-3',
      role: 'Banquet Worker',
      company: 'Swissôtel Jakarta PIK Avenue',
      period: 'Jun 2021 — Aug 2022',
      type: 'work',
      location: 'Jakarta, Indonesia',
      points: [
        'Supported the planning and execution of various hotel events and functions.',
        'Prepared and arranged event venues, equipment, and operational requirements.',
        'Coordinated with team members to ensure smooth and well-organized event operations.',
        'Handled guest requests and complaints in a responsive and professional manner.',
        'Worked in a dynamic operational environment while maintaining attention to detail, teamwork, and service quality.',
      ],
      skills: ['Event Management', 'Teamwork', 'Customer Service', 'Communication', 'Time Management'],
    },

    // ─── Organization Experiences ───
    {
      id: 'org-1',
      role: 'Minister of Student Advocacy and Welfare',
      company: 'Kepresidenan Mahasiswa Universitas Trisakti',
      period: 'Oct 2025 — Sep 2026',
      type: 'organization',
      location: 'Jakarta, Indonesia',
      points: [
        'Developed concepts and work programs for the Ministry of Student Advocacy and Welfare throughout the organizational term.',
        'Developed Trisakti Care, a student aspiration platform designed to facilitate structured submission and management of student concerns.',
        'Collected and reviewed student aspirations and welfare issues as a basis for advocacy initiatives.',
        'Conducted advocacy efforts with university leadership and relevant stakeholders based on collected student concerns.',
        'Coordinated with ministry members in planning and executing organizational programs.',
      ],
      skills: ['Leadership', 'Public Speaking', 'Project Management', 'Advocacy', 'Team Coordination'],
    },
    {
      id: 'org-2',
      role: 'Head of Cadre Development Division',
      company: 'Himpunan Mahasiswa Teknik Informatika Universitas Trisakti',
      period: 'Sep 2025 — Jul 2026',
      type: 'organization',
      location: 'Jakarta, Indonesia',
      points: [
        'Developed concepts and implementation strategies for organizational cadre development programs.',
        'Planned timelines and coordinated the execution of cadre development activities.',
        'Served as Project Lead for LKMM-TD Teknik Informatika, responsible for planning, coordination, and execution of the program attended by all active students of the Informatics Engineering Study Program.',
      ],
      skills: ['Leadership', 'Project Management', 'Program Development', 'Coordination'],
    },
    {
      id: 'org-3',
      role: 'Staff, Student Advocacy and Community Welfare Ministry',
      company: 'Kepresidenan Mahasiswa Universitas Trisakti',
      period: 'Aug 2024 — Aug 2025',
      type: 'organization',
      location: 'Jakarta, Indonesia',
      points: [
        'Coordinated and prepared all logistical requirements as Head of Logistics Division for a 10-day community service program in a village, involving 60 participants.',
        'Collected and coordinated student concerns from Universitas Trisakti and the external community.',
        'Assisted in finding solutions and coordinating follow-up actions for various issues raised by students and community members.',
      ],
      skills: ['Logistics', 'Event Management', 'Community Service', 'Coordination'],
    },
    {
      id: 'org-4',
      role: 'Staff, External Affairs Department',
      company: 'Himpunan Mahasiswa Teknik Informatika Universitas Trisakti',
      period: 'Oct 2023 — May 2024',
      type: 'organization',
      location: 'Jakarta, Indonesia',
      points: [
        'Developed concepts and activity plans for the HMTIF Universitas Trisakti × HUMANIS Universitas Esa Unggul comparative study program.',
        'Developed event concepts and coordinated speakers for the Collaborative Power Seminar.',
      ],
      skills: ['Event Planning', 'Public Relations', 'Collaboration'],
    },
    {
      id: 'org-5',
      role: 'Core Member',
      company: 'Google Developer Student Club Trisakti University',
      period: '2023 — 2024',
      type: 'organization',
      location: 'Jakarta, Indonesia',
      points: [
        'Participated in technology-focused discussion forums and knowledge-sharing activities.',
        'Managed logistical requirements for the Basic Python Programming Study Jam.',
        'Prepared proposals, invitation letters, and accountability reports for the Study Jam Essential GSheets program.',
      ],
      skills: ['Python', 'Google Workspace', 'Event Logistics', 'Technical Community'],
    },
  ];

  const filteredExperiences = experiences.filter((exp) => exp.type === activeTab);

  return (
    <section
      id="experience"
      className="scroll-mt-20 py-section-gap border-t border-outline-variant/20 scroll-entry-effect transition-colors duration-300"
    >
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-lg animate-[fadeIn_0.5s_ease-out]">
        Experience
      </h2>

      {/* Tabs Filter */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('work')}
          className={`px-6 py-2.5 rounded-lg font-label-md text-sm font-semibold transition-all duration-300 cursor-pointer ${
            activeTab === 'work'
              ? 'bg-primary text-on-primary shadow-md shadow-primary/20 scale-[1.02]'
              : 'bg-surface-container dark:bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-container-highest'
          }`}
        >
          Work Experience
        </button>

        <button
          onClick={() => setActiveTab('organization')}
          className={`px-6 py-2.5 rounded-lg font-label-md text-sm font-semibold transition-all duration-300 cursor-pointer ${
            activeTab === 'organization'
              ? 'bg-primary text-on-primary shadow-md shadow-primary/20 scale-[1.02]'
              : 'bg-surface-container dark:bg-surface-container-high text-on-surface-variant hover:text-primary hover:bg-surface-container-highest'
          }`}
        >
          Organization Experience
        </button>
      </div>

      {/* Experience Cards List */}
      <div className="space-y-4">
        {filteredExperiences.map((exp) => (
          <div
            key={exp.id}
            className="p-6 bg-surface-container-lowest dark:bg-surface-container rounded-lg border border-outline-variant/30 border-l-4 border-l-primary hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* Left Content */}
            <div className="space-y-1">
              <h3 className="font-headline-md text-lg font-bold text-on-surface">
                {exp.role}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant font-medium">
                {exp.company}
              </p>
              <p className="font-label-sm text-xs text-on-surface-variant/70 font-semibold pt-0.5">
                {exp.period}
              </p>
            </div>

            {/* Right Action Button */}
            <button
              onClick={() => onSelectExperience(exp)}
              className="px-5 py-2 border border-primary/40 rounded-full font-label-md text-xs font-semibold text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer self-start md:self-center shrink-0 flex items-center gap-1.5"
            >
              <span>View Detail</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
