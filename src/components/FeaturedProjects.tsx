import React, { useState } from 'react';
import { Github, ExternalLink, X, Code, BarChart3, Shield, Lock, Smartphone, TrendingUp } from 'lucide-react';

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Mobilfarmer — Android App",
      impact: "+30% engagement",
      description: "Built a marketplace connecting farmers and consumers; increased engagement by 30%.",
      tools: "Java, Android Studio, Firebase, Google Maps API",
      github: "https://github.com/midhulms/mobilfarmer",
      icon: <Smartphone className="text-blue-400" size={24} />,
      problem: "Farmers struggled to connect directly with consumers, leading to poor pricing and limited market reach.",
      approach: [
        "Developed native Android app with real-time marketplace functionality",
        "Integrated Google Maps API for location-based farmer discovery",
        "Implemented Firebase for real-time messaging and order tracking"
      ],
      outcome: [
        "30% increase in farmer-consumer engagement",
        "Streamlined agricultural marketplace experience"
      ]
    },
    {
      title: "Rice Price Prediction — Machine Learning",
      impact: "85% accuracy",
      description: "ARIMA forecasting model with 85% prediction accuracy for rice prices.",
      tools: "Python, ARIMA, Pandas, Scikit-learn",
      github: "https://github.com/midhulms/price-prediction-ML",
      icon: <TrendingUp className="text-blue-400" size={24} />,
      problem: "Farmers needed accurate price forecasting to make informed planting and selling decisions.",
      approach: [
        "Collected and analyzed historical rice price data",
        "Implemented ARIMA time series forecasting model",
        "Optimized model parameters for maximum accuracy"
      ],
      outcome: [
        "85% prediction accuracy achieved",
        "Helped farmers plan pricing strategies effectively"
      ]
    },
    {
      title: "Rice Price Analytics Dashboard",
      impact: "Real-time insights",
      description: "Interactive dashboard for trend & prediction; delivered real-time insights for market decisions.",
      tools: "Python, Pandas, Matplotlib, Google Colab, Power BI",
      github: "#",
      demo: "#",
      icon: <BarChart3 className="text-blue-400" size={24} />,
      problem: "Market participants needed intuitive visualization of price trends and predictions.",
      approach: [
        "Built interactive dashboard using Power BI and Python",
        "Integrated real-time data feeds for current market prices",
        "Created intuitive visualizations for trend analysis"
      ],
      outcome: [
        "Real-time market insights for better decision making",
        "Improved accessibility to price data for all stakeholders"
      ]
    },
    {
      title: "Rudhra — Android Security Tool",
      impact: "90% detection",
      description: "Android app achieving 90% malware detection accuracy.",
      tools: "Java, Android Security Framework, Machine Learning",
      github: "https://github.com/midhulms/Rudhra",
      icon: <Shield className="text-blue-400" size={24} />,
      problem: "Android devices needed better malware protection with high accuracy detection.",
      approach: [
        "Developed machine learning-based malware detection system",
        "Implemented Android Security Framework integration",
        "Optimized detection algorithms for mobile performance"
      ],
      outcome: [
        "90% malware detection accuracy achieved",
        "Protected Android devices from security threats"
      ]
    },
    {
      title: "Asthra — C# Data-Hiding Tool",
      impact: "30% faster",
      description: "Reduced encryption/decryption time by 30%.",
      tools: "C#, .NET, Cryptography",
      github: "https://github.com/midhulms/ASTHRA-C-",
      icon: <Lock className="text-blue-400" size={24} />,
      problem: "Existing data encryption tools were slow and inefficient for large-scale operations.",
      approach: [
        "Developed optimized encryption/decryption algorithms in C#",
        "Implemented advanced cryptography techniques",
        "Optimized performance for large data sets"
      ],
      outcome: [
        "30% reduction in encryption/decryption time",
        "Improved data security efficiency"
      ]
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl border border-blue-400/30 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-700 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-2">Problem</h4>
            <p className="text-gray-300">{project.problem}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-2">Approach</h4>
            <ul className="space-y-2">
              {project.approach.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-2">Outcome</h4>
            <ul className="space-y-2">
              {project.outcome.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-400">Tools:</span>
            <span className="text-sm text-blue-400">{project.tools}</span>
          </div>
          
          <div className="flex space-x-4 pt-4 border-t border-slate-700">
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const projectHighlights = [
    "85% ML accuracy",
    "30% engagement boost",
    "90% detection rate",
    "5+ open source projects"
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-blue-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900/50 rounded-xl border border-slate-700 hover:border-blue-400/50 transition-all duration-200 group cursor-pointer overflow-hidden"
                 onClick={() => setSelectedProject(project)}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {project.icon}
                    <span className="bg-blue-400/20 text-blue-400 px-2 py-1 rounded-full text-sm font-semibold">
                      {project.impact}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <p className="text-xs text-gray-500 mb-4">
                  <span className="text-blue-400">Tools:</span> {project.tools}
                </p>
                
                <div className="flex items-center space-x-2">
                  <button className="text-blue-400 hover:text-white text-sm font-medium transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/50 p-8 rounded-xl border border-blue-400/20">
          <h3 className="text-lg font-semibold text-blue-400 mb-6 flex items-center space-x-2">
            <Code size={20} />
            <span>Project Highlights</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projectHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-white font-medium">{highlight}</div>
              </div>
            ))}
          </div>
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;