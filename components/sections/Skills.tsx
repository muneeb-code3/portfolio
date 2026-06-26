'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Video } from 'lucide-react';

const skillsData = [
  {
    category: 'Development',
    icon: <Code size={28} />,
    color: 'from-[#c88a2a] to-[#f5c96a]',
    skills: ['HTML', 'CSS', 'Python', 'C++'],
  },
  {
    category: 'AI & Tools',
    icon: <Brain size={28} />,
    color: 'from-[#7b5ea7] to-[#c88a2a]',
    skills: ['Claude AI', 'Gemini AI', 'ChatGPT', 'Google AI Studio', 'Canva'],
  },
  {
    category: 'Editing & Productivity',
    icon: <Video size={28} />,
    color: 'from-[#c88a2a] to-[#e5a830]',
    skills: ['CapCut', 'InShot', 'MS Office (Word, Excel, PowerPoint)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-primary/5 blur-[100px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            Technical Proficiency
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl lg:text-6xl"
          >
            MY <span className="gradient-text">SKILLS</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group card-shimmer"
            >
              <div className="bg-card-bg p-8 border border-border-card hover:border-accent-primary transition-all duration-400 h-full flex flex-col relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity duration-400`} />

                {/* Icon */}
                <div className={`mb-7 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-background shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                <h4 className="text-lg font-syne font-bold uppercase text-foreground group-hover:text-accent-glow transition-colors duration-300 mb-6">
                  {item.category}
                </h4>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + sIdx * 0.06 }}
                      className="px-3 py-1.5 text-[10px] glass border-border-default text-text-muted font-dm-sans font-semibold tracking-widest uppercase rounded-full group-hover:border-accent-primary/50 group-hover:text-accent-primary transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
