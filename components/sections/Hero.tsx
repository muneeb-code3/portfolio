'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 z-10 flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border-default glass glass-hover mb-12"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-glow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
            </span>
            <span className="text-text-muted font-dm-sans text-xs uppercase tracking-widest font-medium">Available for projects</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-syne font-extrabold leading-tight mb-6 md:mb-8"
          >
            MUNEEB<br />
            <span className="bg-gradient-to-r from-accent-primary via-accent-hover to-accent-glow bg-clip-text text-transparent">GULISTAN</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-dm-sans font-light text-text-muted mb-8 md:mb-12 tracking-[0.1em] md:tracking-[0.15em] uppercase"
          >
            Web Developer · AI Enthusiast · Tech Innovator
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto"
          >
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(200, 138, 42, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 bg-accent-primary text-background font-dm-sans font-semibold uppercase tracking-widest text-xs sm:text-sm rounded-sm border border-accent-primary hover:bg-accent-hover hover:border-accent-hover transition-all flex items-center justify-center sm:justify-start gap-3 shadow-lg w-full sm:w-auto"
              >
                View My Work <ArrowDown size={16} className="animate-bounce" />
              </motion.button>
            </Link>
            
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: 'inset 0 0 20px rgba(229, 168, 60, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-foreground font-dm-sans font-semibold uppercase tracking-widest text-xs sm:text-sm rounded-sm border border-border-default hover:border-accent-primary transition-all w-full sm:w-auto"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full max-w-md mx-auto"
        >
          {/* Animated Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-hover/10 rounded-md blur-2xl -z-10 animate-pulse"></div>
          
          {/* Decorative Corners */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-accent-primary z-20"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent-primary z-20"
          ></motion.div>
          
          {/* Frame */}
          <div className="relative aspect-[3/4] border-2 border-border-default p-2 bg-card-bg shadow-2xl hover:shadow-[0_20px_60px_rgba(200,138,42,0.15)] transition-all duration-500">
            <div className="w-full h-full bg-secondary-bg relative overflow-hidden">
              {/* Actual Photo */}
              <div className="absolute inset-0">
                <Image 
                  src="/muneeb-profile.jpg"
                  alt="Muneeb Gulistan"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Stats Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-4 sm:px-6 z-10 mt-16 md:mt-24 border-t border-border-default pt-12 md:pt-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {[
            { number: '5+', label: 'Projects Built' },
            { number: '2', label: 'Organizations' },
            { number: '5+', label: 'Tech Stacks' },
            { number: 'AI', label: 'Primary Focus' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="group"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-syne font-extrabold text-accent-primary mb-2 md:mb-3 group-hover:text-accent-glow transition-colors">
                {stat.number}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm font-dm-sans text-text-hint uppercase tracking-widest group-hover:text-text-muted transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
