'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Video } from 'lucide-react';

const skillsData = [
  {
    category: 'Development',
    icon: <Code className="text-accent-primary" size={24} />,
    skills: ['HTML', 'CSS', 'Python', 'C++'],
  },
  {
    category: 'AI & Tools',
    icon: <Brain className="text-accent-primary" size={24} />,
    skills: ['Claude AI', 'Gemini AI', 'ChatGPT', 'Google AI Studio', 'Canva'],
  },
  {
    category: 'Editing & Productivity',
    icon: <Video className="text-accent-primary" size={24} />,
    skills: ['CapCut', 'InShot', 'MS Office (Word, Excel, PowerPoint)'],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-primary font-dm-sans tracking-[0.2em] text-xs uppercase mb-4 font-semibold"
          >
            TECHNICAL PROFICIENCY
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-syne text-foreground leading-tight"
          >
            MY SKILLS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(200, 138, 42, 0.15)' }}
              className="bg-card-bg p-8 border border-border-default hover:border-accent-primary transition-all duration-300 group relative shadow-lg hover:shadow-[0_20px_50px_rgba(200,138,42,0.2)]"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#241f14] border border-border-default group-hover:border-accent-primary group-hover:bg-accent-primary/10 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-syne font-bold uppercase text-foreground group-hover:text-accent-glow transition-colors duration-300">{item.category}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, sIdx) => (
                  <motion.span 
                    key={sIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: sIdx * 0.05 }}
                    className="px-4 py-2 text-xs bg-[#111008] text-text-muted border border-border-default font-dm-sans group-hover:border-accent-primary/50 group-hover:text-accent-primary transition-all duration-300 tracking-widest uppercase"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
