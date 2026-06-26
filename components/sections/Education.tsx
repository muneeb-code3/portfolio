'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    year: 'Present',
    degree: 'BS Artificial Intelligence (Sem 2)',
    school: 'Pak Austria Institute',
    desc: 'Currently pursuing an advanced degree in AI, focusing on machine learning and software engineering foundations.'
  },
  {
    year: '2022 - 2024',
    degree: 'FSc (Intermediate)',
    school: 'Modernage Public School',
    desc: 'Pre-Engineering track with a focus on Mathematics and Physics.'
  },
  {
    year: '2020 - 2022',
    degree: 'Matriculation',
    school: 'Tameeriwattan Public School',
    desc: 'Completed secondary education with high honors in Science stream.'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-12 md:mb-16"
        >
          <GraduationCap className="text-accent-primary flex-shrink-0" size={32} />
          <div>
            <h3 className="text-accent-primary font-dm-sans tracking-[0.2em] text-xs mb-2 uppercase font-semibold">LEARNING PATH</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-syne uppercase text-foreground leading-tight">Academic <span className="text-accent-primary">Journey</span></h2>
          </div>
        </motion.div>

        <div className="relative border-l-2 border-gradient-to-b from-accent-primary to-accent-hover ml-3 sm:ml-4 md:ml-12 pl-6 sm:pl-8 space-y-8 md:space-y-12">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: idx * 0.3 }}
                className="absolute -left-[29px] sm:-left-[33px] top-2 w-4 h-4 sm:w-5 sm:h-5 bg-secondary-bg border-2 border-accent-primary rounded-full flex items-center justify-center shadow-lg shadow-accent-primary/20"
              >
                <div className="w-1.5 h-1.5 bg-accent-glow rounded-full animate-pulse"></div>
              </motion.div>

              <motion.div 
                whileHover={{ boxShadow: '0 15px 35px rgba(200, 138, 42, 0.15)' }}
                className="bg-card-bg p-8 border border-border-default hover:border-accent-primary transition-all duration-300 shadow-lg hover:shadow-[0_15_35px_rgba(200,138,42,0.2)]"
              >
                <span className="text-accent-glow font-dm-sans tracking-[0.2em] text-xs font-bold block mb-3 uppercase">{item.year}</span>
                <h3 className="text-2xl font-bold font-syne mb-2 text-foreground group-hover:text-accent-glow transition-colors duration-300">{item.degree}</h3>
                <h4 className="text-text-muted font-dm-sans font-semibold mb-4 text-sm">{item.school}</h4>
                <p className="text-text-hint font-dm-sans font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
