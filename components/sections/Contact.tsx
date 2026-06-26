'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: FaGithub,    href: 'https://github.com/muneeb-code3',                              label: 'GitHub'    },
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/muneeb-gulistan/',                  label: 'LinkedIn'  },
  { icon: FaInstagram, href: 'https://www.instagram.com/muneebgulistan/',                     label: 'Instagram' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-accent-primary/6 blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl lg:text-6xl"
          >
            LET'S <span className="gradient-text">CONNECT</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Info Side ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info card */}
            <div className="card-shimmer">
              <div className="bg-card-bg p-8 border border-border-card hover:border-accent-primary transition-all duration-400 relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-primary via-accent-glow to-accent-primary opacity-70" />

                <h4 className="text-2xl font-syne font-bold mb-3 text-foreground">
                  Let's Work Together
                </h4>
                <p className="text-text-muted font-dm-sans font-light mb-8 leading-relaxed text-sm">
                  I'm always excited about new projects, academic collaborations, and
                  thoughtful conversations about AI and web technology.
                </p>

                <div className="space-y-5">
                  {/* Email */}
                  <motion.div
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="flex items-center gap-5 group cursor-default"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-glow text-background flex-shrink-0 shadow-lg group-hover:shadow-[0_4px_20px_rgba(200,138,42,0.3)] transition-all duration-300 group-hover:scale-105">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[9px] font-dm-sans text-text-hint uppercase tracking-[3px] font-bold mb-1">Email</p>
                      <p className="font-syne font-semibold text-foreground group-hover:text-accent-glow transition-colors duration-300 text-sm">
                        muneegulistan@gmail.com
                      </p>
                    </div>
                  </motion.div>

                  {/* Instagram handle */}
                  <motion.div
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="flex items-center gap-5 group cursor-default"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#e5a830] to-[#c88a2a] text-background flex-shrink-0 shadow-lg group-hover:shadow-[0_4px_20px_rgba(229,168,60,0.3)] transition-all duration-300 group-hover:scale-105">
                      <FaInstagram size={20} />
                    </div>
                    <div>
                      <p className="text-[9px] font-dm-sans text-text-hint uppercase tracking-[3px] font-bold mb-1">Follow</p>
                      <p className="font-syne font-semibold text-foreground group-hover:text-accent-glow transition-colors duration-300 text-sm">
                        @muneebgulistan
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Social icon buttons */}
            <div className="flex gap-4">
              {socials.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(200,138,42,0.25)' }}
                    whileTap={{ scale: 0.92 }}
                    className="w-14 h-14 glass border-border-card flex items-center justify-center text-text-muted hover:border-accent-primary hover:text-accent-glow transition-all duration-300 shadow-lg rounded-xl"
                  >
                    <Icon size={22} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* ── Form Side ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-shimmer"
          >
            <form className="bg-card-bg p-8 border border-border-card relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)] space-y-5">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-glow to-transparent opacity-60" />

              <div className="space-y-2">
                <label className="text-[9px] font-dm-sans uppercase tracking-[3px] text-text-hint font-bold block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="glass-input w-full px-4 py-3 rounded-sm font-dm-sans text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-dm-sans uppercase tracking-[3px] text-text-hint font-bold block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="glass-input w-full px-4 py-3 rounded-sm font-dm-sans text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-dm-sans uppercase tracking-[3px] text-text-hint font-bold block">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="glass-input w-full px-4 py-3 rounded-sm font-dm-sans text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 36px rgba(200,138,42,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary w-full py-4 bg-gradient-to-r from-accent-primary to-accent-hover text-background font-dm-sans font-bold uppercase tracking-[2.5px] text-[11px] rounded-sm flex items-center justify-center gap-3 shadow-lg"
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
