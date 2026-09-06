'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'AI Resume Forge',
    description: 'A university project that uses AI to build and optimize professional resumes based on user skills. Generates high-converting formats automatically.',
    tech: ['Next.js', 'Claude API', 'Tailwind CSS'],
    category: 'University',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop',
    github: 'https://github.com/muneeb-code3',
    demo: '#',
    span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2' // Large featured card
  },
  {
    title: 'Medic Website',
    description: 'A platform connecting patients with doctors for appointments.',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?q=80&w=800&auto=format&fit=crop',
    github: 'https://github.com/muneeb-code3',
    demo: '#',
    span: 'col-span-1 lg:col-span-1 row-span-1'
  },
  {
    title: 'AI Quiz App',
    description: 'An intelligent quiz app that adapts difficulty based on performance.',
    tech: ['Python', 'AI Logic'],
    category: 'Console',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop',
    github: 'https://github.com/muneeb-code3',
    demo: '#',
    span: 'col-span-1 lg:col-span-1 row-span-1'
  },
  {
    title: 'Undo Redo Engine',
    description: 'Robust command pattern engine in C++ supporting infinite undo/redo.',
    tech: ['C++', 'Data Structures'],
    category: 'Desktop',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    github: 'https://github.com/muneeb-code3',
    demo: '#',
    span: 'col-span-1 md:col-span-2 lg:col-span-3 row-span-1' // Wide card
  }
];

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      className={`group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(30,58,138,0.06)] border border-slate-100 flex flex-col ${project.span}`}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden bg-slate-100">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80" />
        
        {/* Category Pill */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
          <span className="text-[10px] font-dm-sans font-bold uppercase tracking-widest text-accent-primary">
            {project.category}
          </span>
        </div>

        {/* Links (Hover Reveal) */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text-muted hover:text-accent-primary hover:scale-110 transition-all shadow-lg">
            <Github size={18} />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text-muted hover:text-accent-glow hover:scale-110 transition-all shadow-lg">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-syne font-bold text-foreground mb-3 group-hover:text-accent-glow transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted font-dm-sans text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-[10px] px-3 py-1.5 bg-slate-50 border border-slate-200 text-text-muted uppercase font-dm-sans font-bold tracking-widest rounded-lg"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">My Work</p>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              FEATURED <br />
              <span className="text-accent-primary">PROJECTS</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-muted max-w-md md:text-right font-dm-sans text-sm leading-relaxed"
          >
            A selection of my recent academic and personal projects exploring
            AI, Web, and System development.
          </motion.p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,_1fr)]">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
