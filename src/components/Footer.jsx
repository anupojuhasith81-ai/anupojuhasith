import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#02040b] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="font-display font-bold text-white text-lg tracking-tight hover:text-cyan-400 transition-colors">
              {personalData.name}
            </a>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Software Developer • MCA Student (2025–2027)
            </p>
          </div>

          {/* Social Icons & Resume Download */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
              aria-label="GitHub Profile Placeholder"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/40 transition-all"
              aria-label="LinkedIn Profile Placeholder"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500 font-mono">
              Designed & Developed for Anupoju Hasith
            </p>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

