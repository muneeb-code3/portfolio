'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-accent-primary font-dm-sans text-xs tracking-[0.2em] uppercase mb-4 font-semibold">About Me</h3>
            <h2 className="text-5xl md:text-6xl font-bold font-syne mb-10 text-foreground leading-tight">WHO IS <br /><span className="text-accent-primary">MUNEEB?</span></h2>
            
            <div className="space-y-6 text-text-muted font-dm-sans font-light text-lg">
              <p>
                I am Muneeb Gulistan, a Web Developer and AI learner currently pursuing a Bachelor’s in Artificial Intelligence. 
                I enjoy building modern, responsive, and creative web applications using new technologies. 
                I have worked on multiple academic and personal projects, including AI-based systems and console applications.
              </p>
              <p>
                Alongside development, I am also a content creator on Instagram, a gamer, and a founding member of 
                <span className="text-accent-primary font-normal"> ARMAAS Solutions</span> and 
                <span className="text-accent-primary font-normal"> Feedify Organization</span>.
              </p>
              <p>
                My goal is to grow as a skilled developer and contribute to innovative tech solutions that solve real-world problems.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Info Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Name', value: 'Muneeb Gulistan' },
                { label: 'Education', value: 'BS AI (Sem 2)' },
                { label: 'Role', value: 'Developer' },
                { label: 'Focus', value: 'AI & Web' },
              ].map((info, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="bg-card-bg p-8 h-40 border border-border-default hover:border-accent-primary group-hover:bg-[#232017] transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(200,138,42,0.1)]">
                    <p className="text-xs text-text-hint font-dm-sans mb-3 uppercase tracking-widest font-semibold">{info.label}</p>
                    <p className="text-xl font-syne font-bold text-foreground group-hover:text-accent-glow transition-colors">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
