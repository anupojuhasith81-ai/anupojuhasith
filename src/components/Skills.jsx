import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Terminal, FileCode, Layout, Layers, Cpu, Boxes, Database, 
  Server, Cloud, HardDrive, GitBranch, FileSpreadsheet, Network, 
  CloudSun, Bug, Wrench, RefreshCw, CheckCircle, Sparkles, Filter
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

// Icon Map
const iconMap = {
  Code2,
  Terminal,
  FileCode,
  Layout,
  Layers,
  Cpu,
  Boxes,
  Database,
  Server,
  Cloud,
  HardDrive,
  GitBranch,
  FileSpreadsheet,
  Network,
  CloudSun,
  Bug,
  Wrench,
  RefreshCw,
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming' },
    { id: 'coreCS', name: 'Core CS' },
    { id: 'databases', name: 'Database' },
    { id: 'cloudAndTools', name: 'Cloud & Tools' },
    { id: 'otherSkills', name: 'Engineering Skills' },
  ];

  const skillGroups = [
    {
      categoryId: 'programming',
      title: 'Programming Languages',
      badge: 'Core Syntax & Logic',
      accent: 'from-blue-500/20 to-indigo-500/20',
      border: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      items: personalData.skills.programming,
    },
    {
      categoryId: 'coreCS',
      title: 'Core Computer Science',
      badge: 'Algorithms & OOP',
      accent: 'from-purple-500/20 to-violet-500/20',
      border: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      items: personalData.skills.coreCS,
    },
    {
      categoryId: 'databases',
      title: 'Database Management',
      badge: 'Relational & Structured',
      accent: 'from-cyan-500/20 to-sky-500/20',
      border: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
      items: personalData.skills.databases,
    },
    {
      categoryId: 'cloudAndTools',
      title: 'Cloud & Developer Tools',
      badge: 'DevOps & Version Control',
      accent: 'from-amber-500/20 to-orange-500/20',
      border: 'border-amber-500/30',
      iconColor: 'text-amber-400',
      items: personalData.skills.cloudAndTools,
    },
    {
      categoryId: 'otherSkills',
      title: 'Additional Engineering',
      badge: 'SDLC & Diagnostics',
      accent: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      items: personalData.skills.otherSkills,
    },
  ];

  const filteredGroups = activeTab === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.categoryId === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#02050e]/60">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Technical <span className="gradient-text">Skills</span> Dashboard
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A comprehensive overview of programming languages, computing paradigms, database foundations, and cloud technologies.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-10">
          {filteredGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.accent}`} />
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {group.badge}
                </span>
              </div>

              {/* Individual Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.items.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="group relative p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 flex items-center gap-3.5"
                    >
                      <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600/20 group-hover:border-cyan-400/40 transition-all duration-300">
                        <Icon className={`w-5 h-5 ${group.iconColor} group-hover:text-cyan-300 transition-colors`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-mono truncate">
                          {skill.level}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

