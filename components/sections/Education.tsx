'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    year: 'Present',
    degree: 'BS Artificial Intelligence (Sem 2)',
    school: 'Pak Austria Institute',
    desc: 'Currently pursuing an advanced degree in AI, focusing on machine learning and software engineering foundations.',
    accent: 'from-[#c88a2a] to-[#f5c96a]',
  },
  {
    year: '2022 – 2024',
    degree: 'FSc (Intermediate)',
    school: 'Modernage Public School',
    desc: 'Pre-Engineering track with a focus on Mathematics and Physics.',
    accent: 'from-[#7b5ea7] to-[#c88a2a]',
  },
  {
    year: '2020 – 2022',
    degree: 'Matriculation',
    school: 'Tameeriwattan Public School',
    desc: 'Completed secondary education with high honors in Science stream.',
    accent: 'from-[#c88a2a] to-[#e5a830]',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent-primary/5 blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-5 mb-16"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-glow text-background shadow-xl flex-shrink-0 mt-1">
            <GraduationCap size={28} />
          </div>
          <div>
            <p className="section-label">Learning Path</p>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl">
              Academic <span className="gradient-text">Journey</span>
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-10 pl-10 border-l-2 border-gradient-to-b border-border-card space-y-10"
             style={{ borderImage: 'linear-gradient(to bottom, #c88a2a, rgba(200,138,42,0.1)) 1' }}
        >
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.25 + 0.1, type: 'spring', stiffness: 200 }}
                className="absolute -left-[25px] top-5 w-5 h-5 rounded-full border-2 border-accent-primary bg-[#04030a] flex items-center justify-center shadow-[0_0_0_4px_rgba(200,138,42,0.12),0_0_20px_rgba(200,138,42,0.2)] z-10"
              >
                <div className="w-2 h-2 rounded-full bg-accent-glow animate-pulse" />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group card-shimmer"
              >
                <div className="bg-card-bg p-8 border border-border-card hover:border-accent-primary transition-all duration-400 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-400`} />

                  {/* Year badge */}
                  <span className={`inline-block text-[9px] font-dm-sans font-bold uppercase tracking-[3px] px-3 py-1 rounded-full bg-gradient-to-r ${item.accent} text-background mb-4`}>
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-syne font-bold text-foreground group-hover:text-accent-glow transition-colors duration-300 mb-1">
                    {item.degree}
                  </h3>
                  <h4 className="text-sm font-dm-sans font-semibold text-accent-hover mb-4 uppercase tracking-widest">
                    {item.school}
                  </h4>
                  <p className="text-text-muted font-dm-sans font-light leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
