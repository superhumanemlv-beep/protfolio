import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors">Case Studies</a>
              <a href="https://drive.google.com/file/d/1gwTGWl9ywqYjfIfKzWkfRO0za_QeeyoJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-blue-400 transition-colors">Résumé</a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/midhul-m-s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/midhulms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:midhulmsofficial@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Current Status</h3>
            <p className="text-gray-400 text-sm">
              MSc Digital Business Analytics student at EMLV, Paris
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Seeking internships in Digital Business & Analytics (France)
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Midhul M S — MSc Digital Business Analytics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;