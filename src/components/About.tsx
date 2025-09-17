import React from 'react';
import { Zap, Target, Users, Download } from 'lucide-react';

const About = () => {
  const deliverables = [
    {
      icon: <Zap className="text-blue-400" size={20} />,
      title: "Rapid insights",
      description: "Fast discovery & prioritization so teams can ship with confidence."
    },
    {
      icon: <Target className="text-blue-400" size={20} />,
      title: "Measurable results",
      description: "Example outcomes include 50% defect reduction and 40% system stability gains."
    },
    {
      icon: <Users className="text-blue-400" size={20} />,
      title: "Team enablement",
      description: "I create playbooks and workflows so research scales with the team."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 text-center">
            I help product and validation teams convert noisy technical data into prioritized business decisions. I combine debugging expertise, ML & forecasting, and BI dashboards to reduce failure rates and speed time-to-insight.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-blue-400/50 transition-all duration-200">
                <div className="flex items-center space-x-3 mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="#" 
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-white transition-colors underline"
            >
              <Download size={16} />
              <span>Download Research Methodology (1-page)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;