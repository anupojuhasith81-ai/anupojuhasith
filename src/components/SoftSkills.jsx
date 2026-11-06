import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Cpu, MessageSquare, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const iconMap = {
  Users,
  Zap,
  Cpu,
  MessageSquare,
};

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="py-24 relative overflow-hidden">
      {/* Ambient background aura */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Behavioral & <span className="gradient-text">Soft Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Interpersonal strengths and analytical capabilities that drive high-impact collaboration and rapid problem resolution.
          </p>
        </div>

        {/* 4 Soft Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalData.softSkills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] || Sparkles;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Professional Attribute</span>
                  <span className="text-cyan-400">Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;

