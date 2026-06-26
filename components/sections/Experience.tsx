'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Gamepad2 } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const experience = [
  {
    role: 'Founding Member',
    org: 'ARMAAS Solutions',
    icon: Briefcase,
    desc: 'Co-founded and contributing to strategic tech solutions and software development projects.',
    accent: 'from-[#c88a2a] to-[#f5c96a]',
  },
  {
    role: 'Founding Member',
    org: 'Feedify Organization',
    icon: Users,
    desc: 'Actively participating in organizational initiatives and community-driven tech projects.',
    accent: 'from-[#7b5ea7] to-[#c88a2a]',
  },
  {
    role: 'Content Creator',
    org: 'Instagram',
    icon: null,
    iconReact: FaInstagram,
    desc: 'Sharing insights about tech, AI, and developer lifestyle to a growing digital audience.',
    accent: 'from-[#c88a2a] to-[#e5a830]',
  },
  {
    role: 'Competitive Gamer',
    org: 'Gaming Community',
    icon: Gamepad2,
    desc: 'Passionate gamer with a focus on strategy and team-based competitive titles.',
    accent: 'from-[#e5a830] to-[#f5c96a]',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-accent-primary/5 blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label">Professional Journey</p>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl">
            PRO <span className="gradient-text">NETWORK</span>
          </h2>
          <p className="text-text-muted font-dm-sans tracking-widest text-[10px] mt-4 uppercase font-bold">
            Roles & Contributions
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((item, idx) => {
            const IconLucide = item.icon;
            const IconReact  = item.iconReact;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group card-shimmer"
              >
                <div className="bg-card-bg p-8 border-l-[3px] border-accent-primary border border-border-card hover:border-accent-primary transition-all duration-400 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-400`} />

                  {/* Icon + title row */}
                  <div className="flex items-center gap-5 mb-5">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-background shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_8px_28px_rgba(200,138,42,0.3)] transition-all duration-300`}>
                      {IconLucide && <IconLucide size={26} />}
                      {IconReact  && <IconReact  size={26} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-syne font-bold text-foreground group-hover:text-accent-glow transition-colors duration-300 leading-tight">
                        {item.role}
                      </h3>
                      <p className="text-accent-hover font-dm-sans font-semibold text-sm uppercase tracking-widest mt-0.5">
                        {item.org}
                      </p>
                    </div>
                  </div>

                  <p className="text-text-muted font-dm-sans font-light leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent-primary/6 to-transparent rounded-tl-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
