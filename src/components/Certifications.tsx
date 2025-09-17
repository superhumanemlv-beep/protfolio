import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Leadership Skills for the Future",
      provider: "LinkedIn Learning",
      link: "https://drive.google.com/file/d/1VxiLseGTYOKPvu03_SiKmQq-NA1saTq7/view?pli=1"
    },
    {
      title: "Value the Compute in Chip Design Development",
      provider: "Intel",
      link: "https://drive.google.com/file/d/183BkGzgvia9NgGx5pRkJwgOqtAYA_yDa/view"
    },
    {
      title: "Working with Memory Dumps & Debugging",
      provider: "Pluralsight",
      link: "https://app.pluralsight.com/achievements/share/8acfb97f-72ad-4541-b3f4-6aa85003516b"
    },
    {
      title: "Build a Machine Learning Web App",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/SP52ZEDA732P"
    },
    {
      title: "Machine Learning",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/K3JT2RHZYBWC"
    },
    {
      title: "Support Vector Machines in Python",
      provider: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/certificate/CUCNFPHNNGXU"
    },
    {
      title: "Machine Learning",
      provider: "Livewire Trivandrum",
      link: "https://drive.google.com/file/d/12fhdL9J-WdKs8dsMGsSrn8aXAgzbsRVu/view"
    },
    {
      title: "OutSkill 2-day Generative AI Mastermind",
      provider: "Outskill",
      details: "Generative AI for Marketing, AI Agents for SEO & Lead Enrichment, Image & Video generation",
      link: "https://drive.google.com/file/d/16KOcnVMaPR8GS1WBesv-XvCvV-QOK6lQ/view?usp=sharing"
    },
    {
      title: "French Language (A2)",
      provider: "Alliance Française",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-blue-400">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-400/30 transition-all duration-200 group">
              <div className="flex items-start justify-between mb-4">
                <Award className="text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-blue-400 font-medium mb-2">
                {cert.provider}
              </p>
              
              {cert.details && (
                <p className="text-sm text-gray-400">
                  {cert.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;