'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">

      {/* ── Particle system ──────────────────────────────── */}
      <ParticleBackground />

      {/* ── Floating glow blobs ──────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20" aria-hidden>
        <div className="glow-blob blob-gold"    style={{ top: '5%',  left: '-8%'  }} />
        <div className="glow-blob blob-amber animation-delay-2000" style={{ top: '30%', right: '-10%' }} />
        <div className="glow-blob blob-violet animation-delay-4000" style={{ top: '60%', left: '10%'  }} />
        <div className="glow-blob blob-amber animation-delay-6000" style={{ top: '85%', right: '5%'   }} />
        <div className="glow-blob blob-gold animation-delay-2000"  style={{ top: '50%', left: '40%'  }} />
      </div>

      {/* ── Navigation ───────────────────────────────────── */}
      <Navbar />

      {/* ── Sections ─────────────────────────────────────── */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Experience />
      <Contact />

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="py-14 relative overflow-hidden">
        {/* Top glow line */}
        <div className="glow-line mb-14" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Branding */}
            <div className="flex items-center gap-4">
              <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-accent-primary/40">
                <span className="font-syne font-extrabold text-xs gradient-text tracking-widest">MG</span>
              </div>
              <p className="text-text-muted font-dm-sans text-[10px] tracking-[0.18em] uppercase font-semibold">
                © 2026 Muneeb Gulistan. All rights reserved.
              </p>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="relative flex h-2.5 w-2.5"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-primary" />
              </motion.span>
              <p className="text-[10px] font-dm-sans tracking-[2px] text-accent-primary uppercase font-bold">
                System Online
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
