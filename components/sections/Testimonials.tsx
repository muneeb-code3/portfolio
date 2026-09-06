'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Dr. Sarah Ahmed',
    role: 'Professor, AI Dept',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    content: 'Muneeb is an exceptional student with a rare blend of strong theoretical understanding and practical software development skills. His AI Resume Forge project was top of the class.',
    rating: 5,
  },
  {
    name: 'Ali Hassan',
    role: 'Client, Medic Website',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    content: 'Working with Muneeb was a seamless experience. He delivered a responsive and highly functional platform for our medical clinic right on schedule. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Ayesha Khan',
    role: 'Co-Founder, Feedify',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    content: 'A brilliant team player and tech innovator. Muneeb brings fresh ideas to the table and executes them flawlessly. His dedication to learning new AI tools is inspiring.',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 relative bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">Testimonials</p>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              CLIENT <span className="text-accent-primary">REVIEWS</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-muted max-w-sm md:text-right font-dm-sans text-sm leading-relaxed"
          >
            What people say about my work ethic, technical skills, and project delivery.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgba(30,58,138,0.05)] border border-slate-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-blue-50 w-12 h-12 -z-0" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-text-muted font-dm-sans text-sm leading-relaxed mb-8 relative z-10 min-h-[100px]">
                "{test.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-100 pt-6 relative z-10">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-slate-200">
                  <Image src={test.image} alt={test.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-foreground text-sm">{test.name}</h4>
                  <p className="font-dm-sans text-text-hint text-xs mt-0.5">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
