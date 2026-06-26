'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-primary font-dm-sans tracking-[0.2em] text-xs mb-4 uppercase font-semibold"
          >
            GET IN TOUCH
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-syne text-foreground leading-tight"
          >
            LET'S <span className="text-accent-primary">CONNECT</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div className="bg-card-bg p-8 border border-border-default hover:border-accent-primary transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(200,138,42,0.1)]">
              <h4 className="text-2xl font-bold font-syne mb-6 text-foreground">Let's Work Together</h4>
              <p className="text-text-muted font-dm-sans font-light mb-8 leading-relaxed">
                I'm always excited about new projects, academic collaborations, and thoughtful conversations about AI and web technology.
              </p>
              
              <div className="space-y-6">
                <motion.div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-4 bg-[#111008] border border-border-default text-text-muted group-hover:border-accent-primary group-hover:text-accent-primary group-hover:bg-accent-primary/10 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-dm-sans text-text-hint uppercase tracking-widest font-semibold">Email</p>
                    <p className="text-lg font-syne font-semibold text-foreground group-hover:text-accent-glow transition-colors duration-300">muneegulistan@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-4 bg-[#111008] border border-border-default text-text-muted group-hover:border-accent-primary group-hover:text-accent-primary group-hover:bg-accent-primary/10 transition-all duration-300">
                    <FaInstagram size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-dm-sans text-text-hint uppercase tracking-widest font-semibold">Follow</p>
                    <p className="text-lg font-syne font-semibold text-foreground group-hover:text-accent-glow transition-colors duration-300">@muneebgulistan</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                { icon: <FaGithub size={20} className="sm:w-6 sm:h-6" />, link: 'https://github.com/muneeb-code3' },
                { icon: <FaLinkedin size={20} className="sm:w-6 sm:h-6" />, link: 'https://www.linkedin.com/in/muneeb-gulistan/' },
                { icon: <FaInstagram size={20} className="sm:w-6 sm:h-6" />, link: 'https://www.instagram.com/muneebgulistan/' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(200, 138, 42, 0.15)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-card-bg border border-border-default flex items-center justify-center text-text-muted hover:border-accent-primary hover:text-accent-glow transition-all duration-300 shadow-lg rounded-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-card-bg p-6 sm:p-8 border border-border-default space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-dm-sans uppercase tracking-widest text-text-hint ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full bg-[#111008] border border-border-default px-3 sm:px-4 py-2.5 sm:py-3 font-dm-sans text-sm sm:text-base text-foreground placeholder:text-text-hint focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-dm-sans uppercase tracking-widest text-text-hint ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-[#111008] border border-border-default px-3 sm:px-4 py-2.5 sm:py-3 font-dm-sans text-sm sm:text-base text-foreground placeholder:text-text-hint focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-dm-sans uppercase tracking-widest text-text-hint ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full bg-[#111008] border border-border-default px-3 sm:px-4 py-2.5 sm:py-3 font-dm-sans text-sm sm:text-base text-foreground placeholder:text-text-hint focus:outline-none focus:border-accent-primary transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 sm:py-4 bg-accent-primary text-background font-dm-sans font-semibold uppercase tracking-widest text-xs sm:text-sm hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
              >
                SEND MESSAGE <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
