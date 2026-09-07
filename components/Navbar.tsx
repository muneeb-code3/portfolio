'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const navLinks = [
  { name: 'Home',         to: 'home'         },
  { name: 'About',        to: 'about'        },
  { name: 'Skills',       to: 'skills'       },
  { name: 'Projects',     to: 'projects'     },
  { name: 'Services',     to: 'services'     },
  { name: 'Contact',      to: 'contact'      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass glass-hover py-3 border-b'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center max-w-7xl">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="home" smooth duration={500} className="relative flex items-center justify-center w-10 h-10 cursor-pointer group">
            <span className="absolute inset-0 rounded-xl border border-accent-primary/20 group-hover:border-accent-glow/50 transition-colors duration-500 bg-white shadow-sm" />
            <span className="relative font-syne font-extrabold text-sm tracking-widest gradient-text">MG</span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.1 }}
            >
              <Link
                to={link.to}
                spy smooth offset={-80} duration={500}
                className="cursor-pointer font-dm-sans uppercase tracking-[1.5px] text-[10px] font-bold text-text-muted hover:text-accent-primary transition-all duration-300 relative group pb-1"
              >
                {link.name}
                <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-primary to-accent-glow transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 ml-2"
          >
            <a href="/resume.docx" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 btn-secondary px-4 py-2 text-[10px] font-dm-sans font-bold uppercase tracking-[1.5px] rounded-lg">
                <FileText size={14} /> Resume
              </button>
            </a>
            <Link to="contact" smooth offset={-80} duration={500}>
              <button className="btn-primary px-5 py-2 text-[10px] font-dm-sans font-bold uppercase tracking-[1.5px] rounded-lg">
                Hire Me
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-accent-primary transition-colors border border-border-default hover:border-accent-glow rounded-xl bg-white shadow-sm"
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden"
          >
            <div className="glass border-t border-border-default mx-4 mt-3 rounded-2xl shadow-xl">
              <div className="flex flex-col p-5 gap-4 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      to={link.to}
                      spy smooth offset={-70} duration={500}
                      onClick={() => setMobileMenuOpen(false)}
                      className="cursor-pointer font-dm-sans text-[11px] uppercase tracking-[2px] font-bold text-text-muted hover:text-accent-primary transition-all duration-300 block py-1"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-border-default flex flex-col gap-3">
                  <a href="/resume.docx" target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="btn-secondary w-full py-3 flex items-center justify-center gap-2 text-[10px] font-dm-sans font-bold uppercase tracking-[2px] rounded-xl">
                      <FileText size={14} /> Download Resume
                    </button>
                  </a>
                  <Link to="contact" smooth offset={-70} duration={500} onClick={() => setMobileMenuOpen(false)} className="w-full">
                    <button className="btn-primary w-full py-3 text-[10px] font-dm-sans font-bold uppercase tracking-[2px] rounded-xl">
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
