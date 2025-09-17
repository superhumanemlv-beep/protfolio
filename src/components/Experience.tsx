import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, Award } from 'lucide-react';

const Experience = () => {
  const [expandedRole, setExpandedRole] = useState(0);

  const experiences = [
    {
      title: "Business Development Officer Intern",
      company: "Knowley International",
      location: "Trivandrum, India",
      period: "Nov 2024 – Aug 2025",
      achievements: [
        "Conducted data-driven market analysis to shape go-to-market strategies.",
        "Reduced customer acquisition costs by 15% via targeted analytics-led campaigns.",
        "Built high-value client relationships that contributed to 20% pipeline growth.",
        "Integrated analytics into business development for measurable results."
      ]
    },
    {
      title: "Associate I — Semiconductor Product Validation",
      company: "UST (client: Intel)",
      location: "Trivandrum, India",
      period: "Sep 2023 – Sep 2024",
      achievements: [
        "Led a 10-member validation team across debugging & validation projects.",
        "Reduced operational defects by 50% and improved driver stability through log analysis & debugging.",
        "Delivered projects with 95% on-time success.",
        "Recognized with the USTAR Award for outstanding performance."
      ]
    },
    {
      title: "Semiconductor Debug Engineer",
      company: "UST (client: Intel)",
      location: "Bengaluru, India",
      period: "Jul 2022 – Sep 2023",
      achievements: [
        "Used WPA, ETW and GPU Trace to identify root causes and implement fixes.",
        "Standardized debugging workflows, reducing resolution time by 30%."
      ]
    }
  ];

  const highlights = [
    "5+ Years experience",
    "50% defect reduction",
    "95% project success rate",
    "Led 10+ team members"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-blue-400">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-400/30 transition-all duration-200">
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setExpandedRole(expandedRole === index ? -1 : index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <Briefcase className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                      <p className="text-blue-400 font-medium mb-1">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-blue-400 transition-colors">
                    {expandedRole === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                {expandedRole === index && (
                  <div className="ml-9 space-y-3 pt-4 border-t border-slate-700">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/50 p-8 rounded-xl border border-blue-400/20">
          <h3 className="text-lg font-semibold text-blue-400 mb-6 flex items-center space-x-2">
            <Award size={20} />
            <span>Career Highlights</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-white font-medium">{highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;