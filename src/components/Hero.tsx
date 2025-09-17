import React from 'react';
import { Download, Calendar, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            I turn complex{' '}
            <span className="text-blue-400">semiconductor</span> and{' '}
            <span className="text-blue-400">product data</span> into clear{' '}
            <span className="text-blue-400">business outcomes</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            I'm Midhul M S, MSc Digital Business Analytics (EMLV). With 5+ years of hands-on experience in semiconductor validation and data analytics, I deliver measurable results — 50% defect reduction, 40% improved system stability, and 95% on-time project success. Seeking internships in Digital Business & Analytics (France).
          </h2>

          <p className="text-sm text-gray-400 mb-8">
            Worked with: <span className="text-blue-400 font-medium">UST (Intel)</span> • <span className="text-blue-400 font-medium">Knowley International</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group">
              <span>See 3 Case Studies (3-min reads)</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="https://drive.google.com/file/d/1gwTGWl9ywqYjfIfKzWkfRO0za_QeeyoJ/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Download Résumé (PDF)</span>
            </a>
          </div>

          <a 
            href="#contact" 
            className="text-gray-400 hover:text-blue-400 transition-colors underline"
          >
            Book 15-min intro
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;