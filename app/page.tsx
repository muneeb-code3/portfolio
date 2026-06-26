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
    <main className="relative min-h-screen overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Glassmorphism Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
        <div className="glow-blob blob-gold top-[10%] left-[-10%] sm:left-[5%]"></div>
        <div className="glow-blob blob-amber top-[35%] right-[-15%] sm:right-[5%] animation-delay-2000"></div>
        <div className="glow-blob blob-white top-[60%] left-[-15%] sm:left-[10%] animation-delay-4000"></div>
        <div className="glow-blob blob-gold top-[85%] right-[-10%] sm:right-[8%]"></div>
      </div>

      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-16 border-t border-border-default bg-secondary-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 via-transparent to-accent-hover/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 md:gap-8">
            <p className="text-text-muted font-dm-sans text-xs sm:text-sm tracking-[0.15em] uppercase font-semibold text-center sm:text-left">
              © 2026 MUNEEB GULISTAN. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-accent-glow rounded-full animate-pulse shadow-lg shadow-accent-glow/50"
              ></motion.span>
              <p className="text-xs font-dm-sans tracking-[0.15em] text-accent-primary uppercase font-semibold">
                System Online: Stable
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
