import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const iconMap = {
  ShieldCheck,
  Award,
  CheckCircle2,
  MessageSquare,
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#02050e]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Industry and academy validated accreditations in programming, object-oriented concepts, and enterprise communication.
          </p>
        </div>

        {/* Badge-style Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {personalData.certifications.map((cert, idx) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Badge Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {cert.dateBadge}
                    </span>
                  </div>

                  {/* Certification Title & Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-1">
                        Accredited by {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Skills Covered in Certification */}
                  <div className="flex flex-wrap gap-2 my-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer validation mark */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Official Resume Credential</span>
                  </div>
                  <span className="font-mono text-slate-400">Verified</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
