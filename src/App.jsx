import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Floating Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section with 4 Information Cards */}
        <About />

        {/* 3. Interactive Technical Skills Dashboard */}
        <Skills />

        {/* 4. Experience / Internships Timeline */}
        <Experience />

        {/* 5. Featured Project Showcase (Cineverse Platform) */}
        <Projects />

        {/* 6. Education Timeline */}
        <Education />

        {/* 7. Certifications Badge Grid */}
        <Certifications />

        {/* 8. Soft Skills & Behavioral Attributes */}
        <SoftSkills />

        {/* 9. Contact CTA & Inquiry Form */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;

