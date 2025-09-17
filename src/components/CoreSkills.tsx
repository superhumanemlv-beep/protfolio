import React from 'react';
import { Code, Wrench, TrendingUp, Globe } from 'lucide-react';

const CoreSkills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Analytics & Data Science",
      skills: "Python, ARIMA, Scikit-learn, Pandas, Time series forecasting, Machine learning, Data visualization (Power BI, Apache Superset)"
    },
    {
      icon: <Wrench className="text-blue-400" size={24} />,
      title: "Technical Debugging",
      skills: "WPA, GPU Trace, ETW, Event Viewer, driver debugging, log analysis, Linux"
    },
    {
      icon: <TrendingUp className="text-blue-400" size={24} />,
      title: "Business & Strategy",
      skills: "Market analysis, Business development, Client engagement, Project management, Cross-functional leadership"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Core <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-900/50 p-8 rounded-xl border border-slate-700 hover:border-blue-400/30 transition-all duration-200">
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{category.skills}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/30 p-8 rounded-xl border border-blue-400/20 mb-8">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Unique Value</h3>
            <p className="text-xl text-white leading-relaxed">
              I combine deep semiconductor debugging skills with business analytics to convert technical signals into commercial outcomes.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <Globe className="text-blue-400" size={20} />
              <div>
                <span className="text-white font-medium">Languages:</span>
                <span className="text-gray-400 ml-2">English (Fluent), French (A2, Alliance Française)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSkills;