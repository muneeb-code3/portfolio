'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { ArrowDown, Download, CheckCircle2 } from 'lucide-react';

const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-accent-glow font-bold border-r-2 border-accent-glow pr-1 animate-[pulse_1s_infinite]">
      {currentText}
    </span>
  );
};

export default function Hero() {
  const roles = ["Web Developer", "AI Enthusiast", "Tech Innovator"];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-28 sm:pt-32 pb-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid pointer-events-none -z-10 opacity-60" />
      
      <div className="container mx-auto px-4 sm:px-6 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl">
        
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-primary/10 mb-8 cursor-default shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-text-muted font-dm-sans text-[10px] sm:text-[11px] uppercase tracking-[2px] font-bold">
              Available for new projects
            </span>
          </motion.div>

          {/* Name heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold leading-[1.05] mb-5 tracking-tight text-foreground"
          >
            Hello, I'm <br className="hidden sm:block" />
            <span className="gradient-text">Muneeb Gulistan</span>
          </motion.h1>

          {/* Typing Effect Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl font-dm-sans font-medium text-text-muted mb-8"
          >
            I am a <TypewriterEffect words={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-sm sm:text-base font-dm-sans text-text-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Currently pursuing BS Artificial Intelligence at Pak Austria Institute. 
            Passionate about crafting scalable web applications and exploring the frontiers of AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center lg:justify-start gap-4"
          >
            <Link to="projects" smooth duration={500} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary w-full xs:w-auto px-7 sm:px-9 py-4 rounded-xl flex items-center justify-center gap-2 font-dm-sans font-bold uppercase tracking-[1px] text-xs"
              >
                View My Work
                <ArrowDown size={16} className="animate-bounce" />
              </motion.button>
            </Link>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full xs:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary w-full bg-white px-7 sm:px-9 py-4 rounded-xl flex items-center justify-center gap-2 font-dm-sans font-bold uppercase tracking-[1px] text-xs shadow-sm"
              >
                Download Resume
                <Download size={16} />
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Photo / Visual ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex-shrink-0 relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px] mx-auto lg:mx-0 mt-10 lg:mt-0"
        >
          {/* Decorative background shape */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent-light via-white to-blue-50 blur-3xl -z-10" />
          
          <div className="relative">
            <div className="absolute top-4 -left-4 w-full h-full rounded-3xl bg-accent-primary/10 -z-10 transform -rotate-6" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-accent-glow/10 -z-10 transform rotate-3" />
            
            <div className="relative aspect-[3/4] bg-white rounded-3xl border border-white p-2 shadow-2xl overflow-hidden">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/muneeb-profile.jpg"
                  alt="Muneeb Gulistan"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            {/* Floating feature tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-6 top-12 glass px-4 py-3 rounded-xl shadow-lg border border-white flex items-center gap-3"
            >
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <p className="font-syne font-bold text-foreground text-sm">AI Learner</p>
                <p className="text-[10px] text-text-muted font-dm-sans font-medium">Deep Learning Focus</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
