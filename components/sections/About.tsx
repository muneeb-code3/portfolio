'use client';

import React from 'react';
import { motion } from 'framer-motion';

const infoItems = [
  { label: 'Name',      value: 'Muneeb Gulistan' },
  { label: 'Education', value: 'BS AI (Sem 2)'   },
  { label: 'Role',      value: 'Developer'       },
  { label: 'Focus',     value: 'AI & Web'        },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-white/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8">
              WHO IS <br />
              <span className="text-accent-primary">MUNEEB?</span>
            </h2>

            <div className="space-y-5 text-text-muted font-dm-sans text-base leading-relaxed">
              <p>
                I am Muneeb Gulistan, a Web Developer and AI learner currently pursuing a
                Bachelor&apos;s in Artificial Intelligence. I enjoy building modern, responsive,
                and creative web applications using new technologies. I have worked on
                multiple academic and personal projects, including AI-based systems and
                console applications.
              </p>
              <p>
                Alongside development, I am also a content creator on Instagram, a gamer,
                and a founding member of{' '}
                <span className="text-accent-primary font-bold">ARMAAS Solutions</span>
                {' '}and{' '}
                <span className="text-accent-glow font-bold">Feedify Organization</span>.
              </p>
              <p>
                My goal is to grow as a skilled developer and contribute to innovative
                tech solutions that solve real-world problems.
              </p>
            </div>

          </motion.div>

          {/* ── Right: Info Grid ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {infoItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgba(30,58,138,0.06)] border border-blue-50 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full transition-colors group-hover:from-blue-100/50" />
                  
                  <p className="text-[10px] text-text-hint font-dm-sans mb-2 uppercase tracking-[2px] font-bold">
                    {item.label}
                  </p>
                  <p className="text-xl sm:text-2xl font-syne font-bold text-foreground group-hover:text-accent-glow transition-colors duration-300">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
