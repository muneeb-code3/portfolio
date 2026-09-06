'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    year: 'Present',
    degree: 'BS Artificial Intelligence (Sem 2)',
    school: 'Pak Austria Institute',
    location: 'Haripur, Pakistan',
    desc: 'Currently pursuing an advanced degree in AI, focusing on machine learning and software engineering foundations.',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    year: '2022 – 2024',
    degree: 'FSc (Intermediate)',
    school: 'Modernage Public School',
    location: 'Abbottabad, Pakistan',
    desc: 'Pre-Engineering track with a focus on Mathematics and Physics.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
  },
  {
    year: '2020 – 2022',
    degree: 'Matriculation',
    school: 'Tameeriwattan Public School',
    location: 'Abbottabad, Pakistan',
    desc: 'Completed secondary education with high honors in Science stream.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-100',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50 text-accent-primary mb-6">
            <GraduationCap size={32} />
          </div>
          <p className="section-label justify-center">Learning Path</p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Academic <span className="text-accent-glow">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-10 space-y-12 pb-8">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15 }}
              className="relative pl-10 md:pl-16"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white ${item.bg} flex items-center justify-center shadow-sm`}>
                <div className={`w-2 h-2 rounded-full ${item.bg.replace('100', '500')}`} />
              </div>

              {/* Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_20px_rgba(30,58,138,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(30,58,138,0.08)] transition-all duration-300">
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-dm-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg ${item.bg} ${item.color}`}>
                    <Calendar size={12} /> {item.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-dm-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600">
                    <MapPin size={12} /> {item.location}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-syne font-bold text-foreground mb-2">
                  {item.degree}
                </h3>
                <h4 className="text-sm font-dm-sans font-bold text-accent-primary mb-4 uppercase tracking-wide">
                  {item.school}
                </h4>
                <p className="text-text-muted font-dm-sans text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
