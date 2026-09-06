'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Video } from 'lucide-react';

const skillsData = [
  {
    category: 'Development',
    icon: <Code size={24} />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    progressColor: 'bg-blue-600',
    skills: [
      { name: 'HTML / CSS / Tailwind', level: 95 },
      { name: 'React / Next.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C++', level: 70 },
    ],
  },
  {
    category: 'AI & Tools',
    icon: <Brain size={24} />,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    progressColor: 'bg-indigo-600',
    skills: [
      { name: 'Claude / Gemini / ChatGPT', level: 95 },
      { name: 'Google AI Studio', level: 85 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'AI Integrations', level: 75 },
    ],
  },
  {
    category: 'Productivity & Media',
    icon: <Video size={24} />,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
    progressColor: 'bg-cyan-600',
    skills: [
      { name: 'CapCut & InShot', level: 90 },
      { name: 'Canva Design', level: 85 },
      { name: 'MS Office Suite', level: 95 },
      { name: 'Content Creation', level: 85 },
    ],
  },
];

const ProgressBar = ({ name, level, color }: { name: string, level: number, color: string }) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-dm-sans text-xs font-bold text-text-muted uppercase tracking-wide">{name}</span>
        <span className="font-dm-sans text-xs font-bold text-text-muted">{level}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
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
            className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            MY <span className="text-accent-glow">SKILLS</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(30,58,138,0.06)] border border-slate-100 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.progressColor} opacity-80`} />

              {/* Icon */}
              <div className={`mb-6 w-14 h-14 flex items-center justify-center rounded-2xl ${item.bgColor} ${item.color}`}>
                {item.icon}
              </div>

              <h4 className="text-xl font-syne font-bold text-foreground mb-8">
                {item.category}
              </h4>

              <div className="space-y-2">
                {item.skills.map((skill, sIdx) => (
                  <ProgressBar key={sIdx} name={skill.name} level={skill.level} color={item.progressColor} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
