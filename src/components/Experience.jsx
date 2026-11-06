import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cloud, BrainCircuit, Calendar, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Industry Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Hands-on work developing predictive models with Python and architecting cloud applications on Amazon Web Services.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Timeline Vertical Glow Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30" />

          <div className="space-y-12 sm:space-y-16">
            {personalData.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isCloud = exp.role.includes('Cloud');

              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Center Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#070d1e] border-2 border-cyan-400 shadow-lg shadow-cyan-500/30">
                    {isCloud ? (
                      <Cloud className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <BrainCircuit className="w-4 h-4 text-purple-400" />
                    )}
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Experience Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group shadow-xl">
                      
                      {/* Top metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full ${
                          isCloud 
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                            : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                        }`}>
                          {exp.badge}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mb-5">
                        {exp.company}
                      </p>

                      {/* Responsibilities List */}
                      <div className="space-y-3 mb-6">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5">
                            <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {resp}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                        {exp.skillsLearned.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono border border-white/5 group-hover:border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;

