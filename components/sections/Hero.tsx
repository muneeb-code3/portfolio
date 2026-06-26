'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { ArrowDown, Sparkles } from 'lucide-react';

const stats = [
  { number: '5+',  label: 'Projects Built',  desc: 'Web & AI' },
  { number: '2',   label: 'Organizations',   desc: 'Co-founded' },
  { number: '5+',  label: 'Tech Stacks',     desc: 'Mastered' },
  { number: 'AI',  label: 'Primary Focus',   desc: 'Deep Learning' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-28 md:pt-36 pb-16"
    >
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none -z-10 opacity-40" />

      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* ── Left: Text Content ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex-1 text-left"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass glass-hover border-border-default mb-10 cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-primary" />
            </span>
            <Sparkles size={12} className="text-accent-glow" />
            <span className="text-text-muted font-dm-sans text-[10px] uppercase tracking-[2.5px] font-semibold">
              Available for projects
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-label mb-4"
          >
            Full-Stack Developer & AI Enthusiast
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-syne font-extrabold leading-[0.95] mb-6"
          >
            MUNEEB
            <br />
            <span className="gradient-text">GULISTAN</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-sm md:text-base font-dm-sans font-light text-text-muted mb-10 tracking-[0.18em] uppercase max-w-md"
          >
            Web Developer&nbsp;&nbsp;·&nbsp;&nbsp;AI Learner&nbsp;&nbsp;·&nbsp;&nbsp;Tech Innovator
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link to="projects" smooth duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 36px rgba(200,138,42,0.35)' }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-hover text-background font-dm-sans font-bold uppercase tracking-[2px] text-[11px] rounded-sm flex items-center justify-center gap-3 shadow-lg"
              >
                View My Work
                <ArrowDown size={15} className="animate-bounce" />
              </motion.button>
            </Link>

            <Link to="contact" smooth duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="btn-secondary w-full sm:w-auto px-8 py-4 bg-transparent text-foreground font-dm-sans font-semibold uppercase tracking-[2px] text-[11px] rounded-sm border border-border-card hover:border-accent-primary transition-all"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Right: Photo Frame ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex-shrink-0 relative w-full max-w-[340px] md:max-w-[380px]"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent-primary/10 via-transparent to-accent-glow/8 blur-2xl -z-10 animate-[glow-pulse_3s_ease-in-out_infinite_alternate]" />

          {/* Rotating dashed ring */}
          <div className="absolute -inset-4 border border-dashed border-accent-primary/20 rounded-[2rem] spin-slow -z-10" />

          {/* Decorative corner accents */}
          <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-accent-primary z-20" />
          <div className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-accent-glow z-20" />
          <div className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-accent-glow z-20" />
          <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-accent-primary z-20" />

          {/* Main photo frame */}
          <div className="relative aspect-[3/4] glass border-[1.5px] border-border-card overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            {/* Inner shimmer top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-glow to-transparent z-10 opacity-80" />

            <Image
              src="/muneeb-profile.jpg"
              alt="Muneeb Gulistan"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />

            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#04030a] via-[#04030a]/50 to-transparent z-10" />

            {/* Name tag overlay */}
            <div className="absolute bottom-5 left-5 z-20">
              <p className="font-syne font-bold text-foreground text-sm tracking-widest">MUNEEB GULISTAN</p>
              <p className="font-dm-sans text-[10px] text-accent-primary uppercase tracking-[2px] mt-1">Web Dev · AI Learner</p>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-6 top-8 glass px-4 py-2 border-border-card shadow-xl"
          >
            <p className="font-syne font-bold text-accent-glow text-lg leading-none">AI</p>
            <p className="font-dm-sans text-[9px] text-text-muted uppercase tracking-widest mt-0.5">Focus</p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats Row ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-6 z-10 mt-20 md:mt-28"
      >
        <div className="glow-line mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group card-shimmer glass border-border-default p-6 relative overflow-hidden"
            >
              <p className="text-3xl md:text-4xl font-syne font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </p>
              <p className="text-[10px] font-dm-sans text-text-muted uppercase tracking-[2px] font-semibold mb-0.5">
                {stat.label}
              </p>
              <p className="text-[9px] font-dm-sans text-text-hint uppercase tracking-widest">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <p className="text-[9px] font-dm-sans text-text-hint uppercase tracking-[3px]">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-accent-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
