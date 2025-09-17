import React from 'react';
import { Clock, TrendingDown, Target } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      icon: <Clock className="text-blue-400" size={24} />,
      number: "5+",
      label: "years",
      description: "Product validation & analytics experience"
    },
    {
      icon: <TrendingDown className="text-blue-400" size={24} />,
      number: "50%",
      label: "",
      description: "Operational defect reduction (validated projects)"
    },
    {
      icon: <Target className="text-blue-400" size={24} />,
      number: "95%",
      label: "",
      description: "Project delivery success rate"
    }
  ];

  return (
    <section className="py-16 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-200">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                {stat.number}{stat.label && <span className="text-2xl text-gray-400"> {stat.label}</span>}
              </div>
              <p className="text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="mt-16 pt-16 border-t border-slate-700 text-center">
          <p className="text-gray-400 mb-8 text-sm">TRUSTED BY</p>
          <div className="flex justify-center items-center space-x-12 text-gray-500">
            <div className="font-semibold text-lg">UST (Intel)</div>
            <div className="font-semibold text-lg">Knowley International</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;