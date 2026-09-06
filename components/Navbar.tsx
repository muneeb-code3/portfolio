'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home',     to: 'home'     },
  { name: 'About',    to: 'about'    },
  { name: 'Skills',   to: 'skills'   },
  { name: 'Projects', to: 'projects' },
  { name: 'Services', to: 'services' },
  { name: 'Contact',  to: 'contact'  },
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
          ? 'glass glass-hover py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="home" smooth duration={500} className="relative flex items-center justify-center w-10 h-10 cursor-pointer group">
            <span className="absolute inset-0 rounded-full border border-accent-primary/40 spin-slow group-hover:border-accent-glow/70 transition-colors duration-500" />
            <span className="absolute inset-[3px] rounded-full bg-gradient-to-br from-accent-primary/15 to-transparent" />
            <span className="relative font-syne font-extrabold text-xs tracking-widest gradient-text">MG</span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 + 0.2 }}
            >
              <Link
                to={link.to}
                spy smooth offset={-70} duration={500}
                className="cursor-pointer font-dm-sans uppercase tracking-[2px] text-[10px] font-semibold text-text-muted hover:text-accent-glow transition-all duration-300 relative group pb-1"
              >
                {link.name}
                <span className="absolute -bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-accent-primary to-accent-glow transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65 }}
          >
            <Link to="contact" smooth offset={-70} duration={500}>
              <button className="btn-primary px-5 py-2 text-[10px] font-dm-sans font-bold uppercase tracking-[2px] text-background bg-gradient-to-r from-accent-primary to-accent-hover rounded-sm hover:shadow-[0_0_24px_rgba(200,138,42,0.4)] transition-all duration-300">
                Hire Me
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex items-center justify-center text-text-muted hover:text-accent-hover transition-colors border border-border-default hover:border-accent-primary rounded-sm"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
          >
            <div className="glass border-t border-border-default mx-4 mt-3 rounded-sm">
              <div className="flex flex-col p-5 gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      spy smooth offset={-70} duration={500}
                      onClick={() => setMobileMenuOpen(false)}
                      className="cursor-pointer font-dm-sans text-[11px] uppercase tracking-[2px] font-semibold text-text-muted hover:text-accent-hover transition-all duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2 border-t border-border-default">
                  <Link to="contact" smooth offset={-70} duration={500} onClick={() => setMobileMenuOpen(false)}>
                    <button className="btn-primary w-full py-2.5 text-[10px] font-dm-sans font-bold uppercase tracking-[2px] text-background bg-gradient-to-r from-accent-primary to-accent-hover rounded-sm">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
