'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Coursera (IBM)',
    date: 'Dec 2025',
    link: '#',
    bg: 'bg-blue-50',
    color: 'text-blue-600',
  },
  {
    title: 'Advanced React and Next.js',
    issuer: 'Udemy',
    date: 'Oct 2025',
    link: '#',
    bg: 'bg-indigo-50',
    color: 'text-indigo-600',
  },
  {
    title: 'Python for Data Science',
    issuer: 'DataCamp',
    date: 'Aug 2025',
    link: '#',
    bg: 'bg-cyan-50',
    color: 'text-cyan-600',
  },
  {
    title: 'Prompt Engineering for Developers',
    issuer: 'DeepLearning.AI',
    date: 'Jun 2025',
    link: '#',
    bg: 'bg-slate-100',
    color: 'text-slate-600',
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            Achievements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words"
          >
            MY <span className="text-accent-primary">CERTIFICATIONS</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0_4px_20px_rgba(30,58,138,0.04)] hover:shadow-[0_12px_40px_rgba(30,58,138,0.08)] border border-slate-100 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-5 sm:gap-6">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl ${cert.bg} ${cert.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-syne font-bold text-foreground mb-1 group-hover:text-accent-glow transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-dm-sans">
                    <span className="font-bold text-slate-700">{cert.issuer}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-text-hint font-medium uppercase tracking-widest">{cert.date}</span>
                  </div>
                </div>
              </div>

              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-accent-primary hover:text-white transition-colors flex-shrink-0">
                <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
