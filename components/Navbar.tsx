'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home',     to: 'home'       },
  { name: 'About',    to: 'about'      },
  { name: 'Skills',   to: 'skills'     },
  { name: 'Projects', to: 'projects'   },
  { name: 'Services', to: 'services'   },
  { name: 'Contact',  to: 'contact'    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass glass-hover py-3 shadow-[0_2px_40px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo — MG Monogram */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="home" smooth duration={500} className="relative flex items-center justify-center w-11 h-11 cursor-pointer group">
            {/* Spinning ring */}
            <span className="absolute inset-0 rounded-full border border-accent-primary/40 spin-slow group-hover:border-accent-glow/70 transition-colors duration-500" />
            <span className="absolute inset-[3px] rounded-full bg-gradient-to-br from-accent-primary/20 to-transparent" />
            <span className="relative font-syne font-extrabold text-sm tracking-widest gradient-text">MG</span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 + 0.2 }}
            >
              <Link
                to={link.to}
                spy smooth offset={-70} duration={500}
                className="cursor-pointer font-dm-sans uppercase tracking-[2.5px] text-[11px] font-semibold text-text-muted hover:text-accent-glow transition-all duration-300 relative group pb-1"
              >
                {link.name}
                <span className="absolute -bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-accent-primary to-accent-glow transition-all duration-400 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="contact" smooth offset={-70} duration={500}>
              <button className="btn-primary px-5 py-2 text-[11px] font-dm-sans font-semibold uppercase tracking-[2px] text-background bg-gradient-to-r from-accent-primary to-accent-hover rounded-sm hover:shadow-[0_0_24px_rgba(200,138,42,0.4)] transition-all duration-300">
                Hire Me
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-accent-hover transition-colors rounded-sm border border-border-default hover:border-accent-primary"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
          >
            <div className="glass glass-hover border-t border-border-default mt-3 mx-4 rounded-sm">
              <div className="flex flex-col p-6 gap-5">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <Link
                      to={link.to}
                      spy smooth offset={-70} duration={500}
                      onClick={() => setMobileMenuOpen(false)}
                      className="cursor-pointer font-dm-sans text-[12px] uppercase tracking-[2px] font-semibold text-text-muted hover:text-accent-hover transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
