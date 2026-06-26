'use client';

import React from 'react';
import { motion } from 'framer-motion';

const infoItems = [
  { label: 'Name',      value: 'Muneeb Gulistan' },
  { label: 'Education', value: 'BS AI (Sem 2)'    },
  { label: 'Role',      value: 'Developer'         },
  { label: 'Focus',     value: 'AI & Web'          },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Section glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-accent-primary/5 blur-[100px] -translate-y-1/2 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title text-5xl md:text-6xl mb-10">
              WHO IS <br />
              <span className="gradient-text">MUNEEB?</span>
            </h2>

            <div className="space-y-5 text-text-muted font-dm-sans font-light text-[1.05rem] leading-relaxed">
              <p>
                I am Muneeb Gulistan, a Web Developer and AI learner currently pursuing a
                Bachelor's in Artificial Intelligence. I enjoy building modern, responsive,
                and creative web applications using new technologies. I have worked on
                multiple academic and personal projects, including AI-based systems and
                console applications.
              </p>
              <p>
                Alongside development, I am also a content creator on Instagram, a gamer,
                and a founding member of{' '}
                <span className="text-accent-primary font-semibold">ARMAAS Solutions</span>
                {' '}and{' '}
                <span className="text-accent-primary font-semibold">Feedify Organization</span>.
              </p>
              <p>
                My goal is to grow as a skilled developer and contribute to innovative
                tech solutions that solve real-world problems.
              </p>
            </div>

            {/* Decorative line */}
            <div className="mt-10 glow-line" />
          </motion.div>

          {/* ── Right: Info Grid ────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {infoItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group card-shimmer"
                >
                  <div className="bg-card-bg p-7 h-40 border border-border-card hover:border-accent-primary transition-all duration-400 shadow-lg relative overflow-hidden">
                    {/* Corner glow */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-primary/8 to-transparent rounded-bl-full" />

                    <p className="text-[9px] text-text-hint font-dm-sans mb-3 uppercase tracking-[3px] font-bold">
                      {item.label}
                    </p>
                    <p className="text-xl font-syne font-bold text-foreground group-hover:text-accent-glow transition-colors duration-300 leading-tight">
                      {item.value}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-accent-primary/0 via-accent-primary/40 to-accent-primary/0 group-hover:via-accent-glow/70 transition-all duration-500" />
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
