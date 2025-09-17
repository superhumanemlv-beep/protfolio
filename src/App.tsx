import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import About from './components/About';
import Education from './components/Education';
import Recommendation from './components/Recommendation';
import Certifications from './components/Certifications';
import CoreSkills from './components/CoreSkills';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import ResearchPublications from './components/ResearchPublications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />
      <Hero />
      <QuickStats />
      <About />
      <Education />
      <Recommendation />
      <Certifications />
      <CoreSkills />
      <Experience />
      <FeaturedProjects />
      <ResearchPublications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;