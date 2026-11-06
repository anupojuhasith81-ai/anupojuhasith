import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate real form handling or generate mailto fallback
    const subjectEncoded = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#02050e]/80">
      {/* Background ambient glowing mesh */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something <span className="gradient-text">Amazing Together.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Open to software development opportunities, full-stack internships, and technical collaborations.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Get in Touch Directly
              </h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Feel free to reach out for software engineering roles, academic projects, or professional networking.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6">
                
                {/* Email Item */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {personalData.email}
                    </p>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href={`tel:${personalData.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phone</p>
                    <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {personalData.phone}
                    </p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-semibold text-white">
                      {personalData.location}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Placeholder Profiles */}
            <div className="pt-8 mt-8 border-t border-white/10">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Professional Networks:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                  <span className="text-[10px] text-slate-400 font-mono">(Configurable)</span>
                </a>

                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                  <span className="text-[10px] text-slate-400 font-mono">(Configurable)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-sm text-slate-400 mb-8">
              Fill out the form below to initiate direct communication with Anupoju Hasith.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Developer Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message or inquiry here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Opening your mail client with prefilled details. Thank you!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

