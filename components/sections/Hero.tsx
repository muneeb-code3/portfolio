'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { ArrowDown, Sparkles } from 'lucide-react';

const stats = [
  { number: '5+', label: 'Projects Built', desc: 'Web & AI'      },
  { number: '2',  label: 'Organizations',  desc: 'Co-founded'    },
  { number: '5+', label: 'Tech Stacks',    desc: 'Mastered'      },
  { number: 'AI', label: 'Primary Focus',  desc: 'Deep Learning' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none -z-10 opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* ── Left: Text ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left w-full"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glass-hover mb-8 cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary" />
            </span>
            <Sparkles size={11} className="text-accent-glow" />
            <span className="text-text-muted font-dm-sans text-[9px] sm:text-[10px] uppercase tracking-[2px] font-semibold">
              Available for projects
            </span>
          </motion.div>

          {/* Section label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="section-label justify-center lg:justify-start mb-3"
          >
            Full-Stack Developer & AI Enthusiast
          </motion.p>

          {/* Name heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-syne font-extrabold leading-[0.95] mb-5 tracking-tight"
          >
            MUNEEB
            <br />
            <span className="gradient-text">GULISTAN</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xs sm:text-sm font-dm-sans font-light text-text-muted mb-8 tracking-[0.15em] uppercase"
          >
            Web Developer · AI Learner · Tech Innovator
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center lg:justify-start gap-3"
          >
            <Link to="projects" smooth duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(200,138,42,0.35)' }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary w-full xs:w-auto px-6 sm:px-8 py-3.5 bg-gradient-to-r from-accent-primary to-accent-hover text-background font-dm-sans font-bold uppercase tracking-[2px] text-[10px] sm:text-[11px] rounded-sm flex items-center justify-center gap-2 shadow-lg"
              >
                View My Work
                <ArrowDown size={14} className="animate-bounce" />
              </motion.button>
            </Link>

            <Link to="contact" smooth duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-secondary w-full xs:w-auto px-6 sm:px-8 py-3.5 bg-transparent text-foreground font-dm-sans font-semibold uppercase tracking-[2px] text-[10px] sm:text-[11px] rounded-sm border border-border-card hover:border-accent-primary transition-all"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Right: Photo Frame ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex-shrink-0 relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] mx-auto lg:mx-0"
        >
          {/* Outer glow */}
          <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-accent-primary/10 via-transparent to-accent-glow/8 blur-2xl -z-10" />

          {/* Rotating dashed ring — hidden on very small screens */}
          <div className="hidden sm:block absolute -inset-4 border border-dashed border-accent-primary/20 rounded-[2rem] spin-slow -z-10" />

          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-5 h-5 sm:w-7 sm:h-7 border-t-2 border-l-2 border-accent-primary z-20" />
          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-5 h-5 sm:w-7 sm:h-7 border-t-2 border-r-2 border-accent-glow z-20" />
          <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-5 h-5 sm:w-7 sm:h-7 border-b-2 border-l-2 border-accent-glow z-20" />
          <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-5 h-5 sm:w-7 sm:h-7 border-b-2 border-r-2 border-accent-primary z-20" />

          {/* Photo */}
          <div className="relative aspect-[3/4] glass border-[1.5px] border-border-card overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-glow to-transparent z-10 opacity-80" />
            <Image
              src="/muneeb-profile.jpg"
              alt="Muneeb Gulistan"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#04030a] via-[#04030a]/50 to-transparent z-10" />
            <div className="absolute bottom-4 left-4 z-20">
              <p className="font-syne font-bold text-foreground text-xs tracking-widest">MUNEEB GULISTAN</p>
              <p className="font-dm-sans text-[9px] text-accent-primary uppercase tracking-[2px] mt-0.5">Web Dev · AI Learner</p>
            </div>
          </div>

          {/* Floating badge — tucked inside frame boundaries */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute -right-3 sm:-right-5 top-6 glass px-3 py-1.5 border-border-card shadow-xl"
          >
            <p className="font-syne font-bold text-accent-glow text-base leading-none">AI</p>
            <p className="font-dm-sans text-[8px] text-text-muted uppercase tracking-widest mt-0.5">Focus</p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-4 sm:px-6 z-10 mt-14 sm:mt-20"
      >
        <div className="glow-line mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group card-shimmer glass border-border-default p-4 sm:p-6 relative overflow-hidden"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-syne font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </p>
              <p className="text-[9px] sm:text-[10px] font-dm-sans text-text-muted uppercase tracking-[1.5px] font-semibold mb-0.5">
                {stat.label}
              </p>
              <p className="text-[8px] sm:text-[9px] font-dm-sans text-text-hint uppercase tracking-widest">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
      >
        <p className="text-[9px] font-dm-sans text-text-hint uppercase tracking-[3px]">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-[1px] h-7 bg-gradient-to-b from-accent-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
