import React from 'react';
import { Quote } from 'lucide-react';

const Recommendation = () => {
  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-blue-400/20 relative">
          <Quote className="text-blue-400 absolute top-6 left-6" size={32} />
          
          <div className="pt-8">
            <blockquote className="text-2xl md:text-3xl font-semibold text-white leading-relaxed mb-8">
              "Midhul consistently transforms market and technical data into actionable go-to-market strategies and reliably delivers results."
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-400 font-semibold text-lg">Abishek James</p>
                <p className="text-gray-400">Director, Knowley International</p>
              </div>
              
              <button className="text-sm text-gray-400 hover:text-blue-400 transition-colors underline">
                (Full recommendation available on request.)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;