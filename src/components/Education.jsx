import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A solid academic foundation in Computer Applications and Computer Science from accredited collegiate institutions.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-3xl mx-auto space-y-8">
          {personalData.education.map((edu, idx) => {
            const isMCA = edu.degree.includes('Master');
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group shadow-xl"
              >
                {/* Top Badge & Time */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full ${
                    isMCA 
                      ? 'bg-blue-500/10 text-cyan-300 border border-blue-500/20'
                      : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                  }`}>
                    {edu.status}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & College */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {edu.degree}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-4">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Score if available */}
                {edu.score && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-emerald-300 mb-4">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.score}</span>
                  </div>
                )}

                {/* Focus / Highlight */}
                <p className="text-sm text-slate-400 leading-relaxed pt-3 border-t border-white/5">
                  <strong className="text-slate-300">Curriculum Focus:</strong> {edu.highlight}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;

