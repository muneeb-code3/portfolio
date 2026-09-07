'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Pricing from '@/components/sections/Pricing';
import GithubStats from '@/components/sections/GithubStats';
import Certifications from '@/components/sections/Certifications';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">

      {/* ── Floating glow blobs (Light Mode) ──────────────────────────── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20" aria-hidden>
        <div className="glow-blob blob-blue"    style={{ top: '5%',  left: '-10%' }} />
        <div className="glow-blob blob-cyan animation-delay-2000" style={{ top: '35%', right: '-5%' }} />
        <div className="glow-blob blob-indigo animation-delay-4000" style={{ top: '70%', left: '10%'  }} />
      </div>

      {/* ── Navigation ───────────────────────────────────── */}
      <Navbar />

      {/* ── Sections (Ordered logically for a full portfolio) ─────────────────────────────────────── */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Pricing />
      <GithubStats />
      <Certifications />
      <Experience />
      <Education />
      <Contact />

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="py-10 relative overflow-hidden bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Branding */}
            <div className="flex items-center gap-4">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-syne font-extrabold text-[10px] gradient-text tracking-widest">MG</span>
              </div>
              <p className="text-text-muted font-dm-sans text-[10px] tracking-[2px] uppercase font-bold">
                © {new Date().getFullYear()} Muneeb Gulistan.
              </p>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <p className="text-[9px] font-dm-sans tracking-[2px] text-slate-600 uppercase font-bold">
                All Systems Operational
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
