'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Video, Presentation, Palette } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Building modern, high-performance websites using React, Next.js and specialized AI integrations.',
    icon: <Globe className="text-accent-primary" size={32} />
  },
  {
    title: 'AI Tool Assistance',
    description: 'Expert guidance on using LLMs (Claude, Gemini, ChatGPT) for development and productivity.',
    icon: <Cpu className="text-accent-primary" size={32} />
  },
  {
    title: 'Video Editing',
    description: 'Professional video content creation using CapCut and InShot for social media and presentations.',
    icon: <Video className="text-accent-primary" size={32} />
  },
  {
    title: 'Presentation Design',
    description: 'Engaging MS Office and Canva presentations designed with a modern tech-forward aesthetic.',
    icon: <Presentation className="text-accent-primary" size={32} />
  },
  {
    title: 'Canva Designing',
    description: 'Creative graphics, posters, and social media assets tailored to your brand identity.',
    icon: <Palette className="text-accent-primary" size={32} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-primary font-dm-sans tracking-[0.2em] text-xs mb-4 uppercase font-semibold"
          >
            What I Offer
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-syne text-foreground leading-tight"
          >
            ELITE <span className="text-accent-primary">SERVICES</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12, boxShadow: '0 25px 50px rgba(200, 138, 42, 0.2)' }}
              className="bg-card-bg p-8 border border-border-default hover:border-accent-primary transition-all duration-300 relative overflow-hidden group shadow-lg"
            >
              <div className="mb-6 p-4 bg-[#111008] border border-border-default w-fit group-hover:border-accent-primary group-hover:bg-accent-primary/10 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold font-syne mb-4 text-foreground group-hover:text-accent-glow transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-text-muted font-dm-sans font-light leading-relaxed">
                {service.description}
              </p>
              
              {/* Animated corner element */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 bg-accent-primary/5 border-l border-b border-accent-primary/20 rounded-bl-3xl group-hover:bg-accent-primary/15 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
