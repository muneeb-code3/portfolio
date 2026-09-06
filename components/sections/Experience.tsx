'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Gamepad2, Megaphone } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const experience = [
  {
    role: 'Founding Member',
    org: 'ARMAAS Solutions',
    icon: Briefcase,
    desc: 'Co-founded and contributing to strategic tech solutions and software development projects.',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    role: 'Founding Member',
    org: 'Feedify Organization',
    icon: Users,
    desc: 'Actively participating in organizational initiatives and community-driven tech projects.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-100',
  },
  {
    role: 'Content Creator',
    org: 'Instagram',
    icon: null,
    iconReact: FaInstagram,
    desc: 'Sharing insights about tech, AI, and developer lifestyle to a growing digital audience.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-100',
  },
  {
    role: 'Competitive Gamer',
    org: 'Gaming Community',
    icon: Gamepad2,
    desc: 'Passionate gamer with a focus on strategy and team-based competitive titles.',
    color: 'text-slate-600',
    bg: 'bg-slate-100',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center">Professional Journey</p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            PRO <span className="text-accent-primary">NETWORK</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experience.map((item, idx) => {
            const IconLucide = item.icon;
            const IconReact  = item.iconReact;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(30,58,138,0.04)] hover:shadow-[0_12px_40px_rgba(30,58,138,0.08)] border border-slate-100 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Icon bubble */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${item.bg} ${item.color} flex-shrink-0`}>
                  {IconLucide && <IconLucide size={28} />}
                  {IconReact  && <IconReact  size={28} />}
                </div>
                
                <div>
                  <h3 className="text-xl font-syne font-bold text-foreground mb-1">
                    {item.role}
                  </h3>
                  <p className="text-accent-glow font-dm-sans font-bold text-xs uppercase tracking-widest mb-4">
                    {item.org}
                  </p>
                  <p className="text-text-muted font-dm-sans text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
