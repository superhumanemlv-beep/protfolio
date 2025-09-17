import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-900 text-blue-400 py-1 px-4 text-xs text-center border-b border-slate-700">
        MSc Digital Business Analytics — EMLV, Paris
      </div>
      <header className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-400">Midhul M S</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="text-white hover:text-blue-400 transition-colors">Projects</a>
              <a href="#research" className="text-white hover:text-blue-400 transition-colors">Research</a>
              <a href="#certifications" className="text-white hover:text-blue-400 transition-colors">Certifications</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="https://drive.google.com/file/d/1gwTGWl9ywqYjfIfKzWkfRO0za_QeeyoJ/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Download Résumé (PDF)</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
                <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
                <a href="#projects" className="text-white hover:text-blue-400 transition-colors">Projects</a>
                <a href="#research" className="text-white hover:text-blue-400 transition-colors">Research</a>
                <a href="#certifications" className="text-white hover:text-blue-400 transition-colors">Certifications</a>
                <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-700">
                  <a 
                    href="https://drive.google.com/file/d/1gwTGWl9ywqYjfIfKzWkfRO0za_QeeyoJ/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <Download size={16} />
                    <span>Download Résumé (PDF)</span>
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;