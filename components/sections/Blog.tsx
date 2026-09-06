'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how Large Language Models are changing the way we build, scale, and maintain web applications today.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    date: 'Sep 02, 2026',
    readTime: '5 min read',
    category: 'Artificial Intelligence',
    link: '#'
  },
  {
    title: 'Mastering the Command Pattern in C++',
    excerpt: 'A deep dive into implementing infinite undo and redo functionalities using the Command Design Pattern.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    date: 'Aug 24, 2026',
    readTime: '8 min read',
    category: 'Software Engineering',
    link: '#'
  },
  {
    title: 'Building High-Performance Next.js Apps',
    excerpt: 'Tips and tricks for optimizing React applications, leveraging Server Components, and improving Lighthouse scores.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    date: 'Jul 15, 2026',
    readTime: '6 min read',
    category: 'Web Development',
    link: '#'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            Insights & Articles
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            LATEST <span className="text-accent-primary">BLOG</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(30,58,138,0.06)] border border-slate-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-accent-primary">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[11px] font-dm-sans font-bold text-text-hint uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-syne font-bold text-foreground mb-3 group-hover:text-accent-glow transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-muted font-dm-sans text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                <a href={post.link} className="inline-flex items-center gap-2 text-accent-primary font-dm-sans font-bold text-xs uppercase tracking-widest group-hover:text-accent-glow transition-colors mt-auto">
                  Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary px-8 py-3 rounded-xl font-dm-sans font-bold uppercase tracking-widest text-xs"
          >
            View All Posts
          </motion.button>
        </div>
      </div>
    </section>
  );
}
