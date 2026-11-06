import React from 'react';
import { motion } from 'framer-motion';
import { Film, Users, Sparkles, ExternalLink, Github, Layers, ArrowUpRight, CheckCircle2, Clapperboard, Network } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Projects = () => {
  const project = personalData.projects[0];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#02050e]/60">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="gradient-text">Project</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A real-world engineering project designed to connect creative cinema professionals and streamline talent discovery.
          </p>
        </div>

        {/* Featured Project Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-cyan-500/30 shadow-2xl shadow-blue-950/60"
        >
          <div className="rounded-[22px] bg-[#070d1e]/95 backdrop-blur-xl p-6 sm:p-10 lg:p-12 overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Project Details & Features */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm">
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5" />
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-base sm:text-lg text-cyan-200/90 font-medium mb-6">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Feature Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1.5 rounded-xl bg-blue-500/10 text-cyan-300 border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Project Links / CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200 hover:border-cyan-500/40"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>View Source Code</span>
                    <span className="text-[10px] text-slate-400 font-mono">(Configurable)</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-md shadow-blue-500/25"
                  >
                    <span>Live Demo Preview</span>
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-[10px] text-blue-100 font-mono">(Configurable)</span>
                  </a>
                </div>

              </div>

              {/* Right Column: High-Tech Project Preview Visual Mockup */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl p-4 sm:p-6 bg-slate-950/80 border border-cyan-500/30 shadow-2xl overflow-hidden group">
                  
                  {/* Subtle Top Bar simulation */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                      cineverse.platform/explore
                    </div>
                  </div>

                  {/* UI Mockup Content */}
                  <div className="space-y-4">
                    
                    {/* Simulated Hero Banner inside App */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-slate-900/60 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <Clapperboard className="w-6 h-6 text-cyan-400" />
                        <div>
                          <p className="text-sm font-bold text-white">Film Collaboration Hub</p>
                          <p className="text-[11px] text-slate-400 font-mono">Connect • Cast • Produce</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300">
                        Bridging actors, screenwriters, directors, and technical crew in one unified ecosystem.
                      </p>
                    </div>

                    {/* Simulated Talent Matching Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-2">
                          <Users className="w-4 h-4 text-blue-400" />
                        </div>
                        <p className="text-xs font-semibold text-white">Talent Discovery</p>
                        <p className="text-[10px] text-slate-400 mt-1">Profile-based filters & portfolios</p>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-2">
                          <Network className="w-4 h-4 text-purple-400" />
                        </div>
                        <p className="text-xs font-semibold text-white">Skill Matching</p>
                        <p className="text-[10px] text-slate-400 mt-1">Direct project collaboration</p>
                      </div>
                    </div>

                    {/* Stats Highlights */}
                    <div className="pt-2">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {project.stats.map((s, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                            <p className="text-xs font-bold text-cyan-300">{s.value}</p>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;

