'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Video, Presentation, Palette } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Building modern, high-performance websites using React, Next.js and specialized AI integrations.',
    icon: Globe,
    accent: 'from-[#c88a2a] to-[#f5c96a]',
  },
  {
    title: 'AI Tool Assistance',
    description: 'Expert guidance on using LLMs (Claude, Gemini, ChatGPT) for development and productivity.',
    icon: Cpu,
    accent: 'from-[#7b5ea7] to-[#c88a2a]',
  },
  {
    title: 'Video Editing',
    description: 'Professional video content creation using CapCut and InShot for social media and presentations.',
    icon: Video,
    accent: 'from-[#c88a2a] to-[#e5a830]',
  },
  {
    title: 'Presentation Design',
    description: 'Engaging MS Office and Canva presentations designed with a modern tech-forward aesthetic.',
    icon: Presentation,
    accent: 'from-[#e5a830] to-[#f5c96a]',
  },
  {
    title: 'Canva Designing',
    description: 'Creative graphics, posters, and social media assets tailored to your brand identity.',
    icon: Palette,
    accent: 'from-[#c88a2a] to-[#7b5ea7]',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-primary/5 blur-[100px] -translate-y-1/2 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl lg:text-6xl"
          >
            ELITE <span className="gradient-text">SERVICES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group card-shimmer"
              >
                <div className="bg-card-bg p-8 border border-border-card hover:border-accent-primary transition-all duration-400 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
                  {/* Top gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-400`} />

                  {/* Icon container */}
                  <div className={`mb-7 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-background shadow-xl group-hover:scale-110 group-hover:shadow-[0_8px_32px_rgba(200,138,42,0.3)] transition-all duration-400`}>
                    <Icon size={30} />
                  </div>

                  <h4 className="text-xl font-syne font-bold mb-4 text-foreground group-hover:text-accent-glow transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-text-muted font-dm-sans font-light leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Corner decoration */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent-primary/6 to-transparent rounded-tl-full transition-all duration-400 group-hover:from-accent-primary/12" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
