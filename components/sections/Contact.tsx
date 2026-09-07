'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: FaGithub,    href: 'https://github.com/Muneebgulistan',              label: 'GitHub',    color: 'hover:bg-slate-900 hover:text-white hover:border-slate-900' },
  { icon: FaLinkedin,  href: 'https://www.linkedin.com/in/muneeb-gulistan/',  label: 'LinkedIn',  color: 'hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]' },
  { icon: FaInstagram, href: 'https://www.instagram.com/muneebgulistan/',     label: 'Instagram', color: 'hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
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
            className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            LET&apos;S <span className="text-accent-primary">CONNECT</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── Info Side ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-syne font-bold text-foreground mb-4">
                Let&apos;s discuss your next project!
              </h3>
              <p className="text-text-muted font-dm-sans text-base leading-relaxed mb-8">
                I&apos;m currently available for freelance work, academic collaborations, 
                and open to exciting full-time opportunities. Reach out via email or connect with me on social media.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-50 text-accent-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div className="pt-1">
                  <p className="text-xs font-dm-sans text-text-hint uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-lg font-syne font-bold text-foreground">muneegulistan@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="pt-1">
                  <p className="text-xs font-dm-sans text-text-hint uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="text-lg font-syne font-bold text-foreground">Pakistan</p>
                </div>
              </div>
            </div>

            <hr className="border-slate-100 my-8" />

            {/* Social icon buttons */}
            <div>
              <p className="text-xs font-dm-sans text-text-hint uppercase tracking-widest font-bold mb-4">Social Profiles</p>
              <div className="flex gap-4">
                {socials.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${s.color}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── Form Side ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(30,58,138,0.08)] border border-slate-100 space-y-6">
              <input type="hidden" name="access_key" value="680db026-86f8-44b2-b752-9638243ced9e" />

              <h3 className="text-2xl font-syne font-bold text-foreground mb-6">
                Send me a message
              </h3>

              <div className="space-y-2">
                <label className="text-[10px] font-dm-sans uppercase tracking-[2px] text-text-muted font-bold block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent-glow focus:ring-4 focus:ring-accent-glow/10 outline-none transition-all font-dm-sans text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-dm-sans uppercase tracking-[2px] text-text-muted font-bold block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent-glow focus:ring-4 focus:ring-accent-glow/10 outline-none transition-all font-dm-sans text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-dm-sans uppercase tracking-[2px] text-text-muted font-bold block">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent-glow focus:ring-4 focus:ring-accent-glow/10 outline-none transition-all font-dm-sans text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-accent-primary text-white hover:bg-accent-hover font-dm-sans font-bold uppercase tracking-[2px] text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
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
