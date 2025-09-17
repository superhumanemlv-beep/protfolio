import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const ResearchPublications = () => {
  const publications = [
    {
      title: "An efficient agricultural marketing system for optimizing the benefits of farmers",
      conference: "2019 2nd International Conference on Intelligent Computing, Instrumentation and Control Technologies (ICICICT)",
      date: "Jul 5, 2019",
      value: "Demonstrated how intelligent computing can optimize agricultural marketing and increase farmer benefits through data-driven systems.",
      link: "https://ieeexplore.ieee.org/document/8993386"
    }
  ];

  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Research <span className="text-blue-400">Publications</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-400/30 transition-all duration-200">
              <div className="flex items-start space-x-4">
                <FileText className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                    {pub.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-blue-400 font-medium">Conference:</span>
                      <span className="text-gray-300 ml-2">{pub.conference}</span>
                    </div>
                    <div>
                      <span className="text-blue-400 font-medium">Date:</span>
                      <span className="text-gray-300 ml-2">{pub.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    <span className="text-blue-400 font-medium">One-line value:</span> {pub.value}
                  </p>
                  
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>View Publication</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPublications;