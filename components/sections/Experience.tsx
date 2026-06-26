'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Gamepad2 } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const experience = [
  {
    role: 'Founding Member',
    org: 'ARMAAS Solutions',
    icon: <Briefcase className="text-accent-primary" size={24} />,
    desc: 'Co-founded and contributing to strategic tech solutions and software development projects.'
  },
  {
    role: 'Founding Member',
    org: 'Feedify Organization',
    icon: <Users className="text-accent-primary" size={24} />,
    desc: 'Actively participating in organizational initiatives and community-driven tech projects.'
  },
  {
    role: 'Content Creator',
    org: 'Instagram',
    icon: <FaInstagram className="text-accent-primary" size={24} />,
    desc: 'Sharing insights about tech, AI, and developer lifestyle to a growing digital audience.'
  },
  {
    role: 'Competitive Gamer',
    org: 'Gaming Community',
    icon: <Gamepad2 className="text-accent-primary" size={24} />,
    desc: 'Passionate gamer with a focus on strategy and team-based competitive titles.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-accent-primary font-dm-sans tracking-[0.2em] text-xs mb-4 uppercase font-semibold">PROFESSIONAL JOURNEY</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-syne uppercase text-foreground leading-tight">PRO <span className="text-accent-primary">NETWORK</span></h2>
          <p className="text-text-muted font-dm-sans tracking-widest text-xs mt-3 md:mt-4 uppercase font-semibold">ROLES & CONTRIBUTIONS</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(200, 138, 42, 0.15)' }}
              className="bg-card-bg p-8 border-l-4 border-accent-primary border border-border-default group hover:border-l-accent-hover transition-all duration-300 shadow-lg hover:shadow-[0_20px_50px_rgba(200,138,42,0.2)]"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-[#111008] border border-border-default group-hover:border-accent-primary group-hover:bg-accent-primary/10 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-syne text-foreground group-hover:text-accent-glow transition-colors duration-300">{item.role}</h3>
                  <h4 className="text-accent-hover font-dm-sans font-semibold text-sm">{item.org}</h4>
                </div>
              </div>
              <p className="text-text-muted font-dm-sans font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
