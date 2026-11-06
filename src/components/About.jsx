import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Cloud, BrainCircuit, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const About = () => {
  const cards = [
    {
      title: "MCA Student",
      subtitle: "2025–2027",
      institution: "Aditya Degree & PG College",
      description: "Mastering advanced computer applications, distributed computing, algorithms, and scalable software systems.",
      icon: GraduationCap,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      accent: "text-blue-400",
    },
    {
      title: "BSc Computer Science",
      subtitle: "Graduate (72%)",
      institution: "Aditya Degree College (2025)",
      description: "Solid foundational knowledge in core computing, C programming, Java OOP, data structures, and database design.",
      icon: Award,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      accent: "text-emerald-400",
    },
    {
      title: "AWS Cloud Intern",
      subtitle: "Infrastructure Exposure",
      institution: "Cloud Computing Experience",
      description: "Practical deployment with Amazon EC2 instances and S3 object storage, exploring cloud-native efficiency.",
      icon: Cloud,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      accent: "text-amber-400",
    },
    {
      title: "ML Intern",
      subtitle: "Ulearn Company",
      institution: "Predictive Analytics",
      description: "Trained insurance price prediction models using Python, regression workflows, and preprocessing automation.",
      icon: BrainCircuit,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      accent: "text-purple-400",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Dedicated to software craftsmanship, foundational computer science principles, and practical engineering solutions.
          </p>
        </div>

        {/* Bio Story + Highlight Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-white font-semibold">I'm Anupoju Hasith</strong>, a Computer Science graduate currently pursuing a Master of Computer Applications (MCA). I have a strong foundation in <span className="text-cyan-300 font-medium">Java</span>, <span className="text-cyan-300 font-medium">C</span>, <span className="text-cyan-300 font-medium">SQL</span>, object-oriented programming, data structures, and algorithms.
              </p>
              <p>
                I have gained practical exposure to <span className="text-indigo-300 font-medium">AWS cloud computing</span> and <span className="text-purple-300 font-medium">machine learning</span> through internships. I enjoy solving problems, exploring new technologies, and developing applications that provide meaningful solutions.
              </p>
              <p className="text-slate-400 text-base">
                Whether deploying cloud instances on AWS, writing structured Java components, or optimizing database queries, I take pride in writing readable, maintainable, and robust code.
              </p>
            </div>

            {/* Quick Badges & Location */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono">
                  English (Fluent)
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono">
                  Telugu (Native)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Highlights */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Current Milestone</span>
              <div className="my-3">
                <p className="text-3xl font-extrabold text-white">MCA</p>
                <p className="text-sm text-slate-300 mt-1">2025 – 2027 In Progress</p>
              </div>
              <p className="text-xs text-slate-400">Aditya PG College, Gopalapatnam</p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Academic Performance</span>
              <div className="my-3">
                <p className="text-3xl font-extrabold text-white">72%</p>
                <p className="text-sm text-slate-300 mt-1">BSc Computer Science</p>
              </div>
              <p className="text-xs text-slate-400">Aditya Degree College (2025)</p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Cloud Exposure</span>
              <div className="my-3">
                <p className="text-2xl font-extrabold text-white">AWS</p>
                <p className="text-sm text-slate-300 mt-1">EC2 & S3 Deployment</p>
              </div>
              <p className="text-xs text-slate-400">Distributed & scalable concepts</p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Core Strength</span>
              <div className="my-3">
                <p className="text-2xl font-extrabold text-white">Java + SQL</p>
                <p className="text-sm text-slate-300 mt-1">OOP & Database Foundations</p>
              </div>
              <p className="text-xs text-slate-400">Oracle Academy Certified</p>
            </div>
          </div>

        </div>

        {/* 4 Required Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-panel rounded-2xl p-6 border ${card.borderColor} relative group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} border ${card.borderColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${card.accent}`} />
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <div className="text-xs font-mono text-slate-400 mb-2">
                    {card.subtitle}
                  </div>

                  <p className="text-xs font-medium text-slate-300 mb-3">
                    {card.institution}
                  </p>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${card.accent}`} />
                  <span>Resume Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;

