import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "MSc — Digital Business Analytics",
      institution: "EMLV Business School, Paris",
      period: "2025 – Present",
      status: "In progress",
      coursework: "Forecasting & Time Series, Advanced ML, Business Intelligence (Power BI, Apache Superset)"
    },
    {
      degree: "MCA — Computer Science",
      institution: "Amrita Vishwa Vidyapeetham",
      period: "2017 – 2019",
      status: "Completed"
    },
    {
      degree: "BCA — Computer Applications",
      institution: "Amrita Vishwa Vidyapeetham",
      period: "2014 – 2017",
      status: "Completed"
    },
    {
      degree: "French Language Studies",
      institution: "Alliance Française",
      period: "2025",
      status: "A2 Level"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-blue-400">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-400/30 transition-all duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <GraduationCap className="text-blue-400" size={20} />
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  {edu.coursework && (
                    <p className="text-sm text-gray-500 mb-2">
                      <span className="text-blue-400">Relevant coursework:</span> {edu.coursework}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="text-blue-400" size={16} />
                  <span className="text-gray-400">{edu.period}</span>
                  {edu.status && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'In progress' ? 'bg-blue-400/20 text-blue-400' : 'bg-slate-700 text-gray-400'
                    }`}>
                      {edu.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;