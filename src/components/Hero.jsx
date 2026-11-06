import React from 'react';
import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, Github, Linkedin, Sparkles, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Animated gradient mesh & glowing orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Deep background gradient */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-950/20 via-[#040814] to-[#02040a]" />

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/3 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] animate-pulse-slow delay-1000" />
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />

        {/* Tech Grid Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero CTA Content */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium text-cyan-300 font-mono tracking-wide">
                Master of Computer Applications Student (2025–2027)
              </span>
            </div>

            {/* Main Greeting Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              Hi, I'm{' '}
              <span className="gradient-text drop-shadow-[0_4px_24px_rgba(37,99,235,0.25)]">
                {personalData.name}.
              </span>
            </h1>

            {/* Sub-headline */}
            <div className="text-xl sm:text-2xl font-semibold text-slate-200 mb-6 flex flex-wrap items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-cyan-300">
                Software Developer
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-normal">MCA Student</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400 font-medium">Cloud & Tech Enthusiast</span>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              {personalData.shortBio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <FolderGit2 className="w-4 h-4 transition-transform group-hover:rotate-6" />
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalData.resumePath}
                download="Anupoju_Hasith_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-cyan-300 hover:bg-white/[0.04] transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Connect Links & Fast Credentials */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Connect:</span>
                
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-200"
                  aria-label="GitHub Profile Placeholder"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/40 hover:bg-white/10 transition-all duration-200"
                  aria-label="LinkedIn Profile Placeholder"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-200"
                  aria-label="Send direct email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Premium Visual Profile Image & Interactive Glass Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Glowing Background Backdrop Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 rounded-3xl opacity-30 blur-2xl -z-10 group-hover:opacity-50 transition duration-1000 animate-pulse-slow" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/10 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80">
                
                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 group">
                  <img
                    src={personalData.profileImage}
                    alt="Anupoju Hasith - Software Developer"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for bottom text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#070d1e]/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>MCA 2025–27</span>
                  </div>

                  {/* Bottom details on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3.5 rounded-xl bg-[#091124]/90 backdrop-blur-xl border border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-mono text-cyan-400">Core Expertise</p>
                          <p className="text-sm font-semibold text-white">Java, AWS & Database</p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                          <Terminal className="w-4 h-4 text-cyan-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Highlight Card 1: AWS & Cloud */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#091226]/95 backdrop-blur-xl border border-blue-500/30 shadow-xl shadow-blue-950/50 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-amber-400">AWS</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Cloud Architecture</p>
                  <p className="text-[11px] text-slate-400 font-mono">EC2 & S3 Intern</p>
                </div>
              </motion.div>

              {/* Floating Highlight Card 2: ML & Predictive Analytics */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#091226]/95 backdrop-blur-xl border border-purple-500/30 shadow-xl shadow-purple-950/50 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Machine Learning</p>
                  <p className="text-[11px] text-slate-400 font-mono">Regression & Analytics</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

