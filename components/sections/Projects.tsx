'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Resume Forge',
    description: 'A university project that uses AI to build and optimize professional resumes based on user skills.',
    tech: ['Next.js', 'Claude API', 'Tailwind'],
    category: 'University',
    accent: 'from-[#c88a2a] to-[#f5c96a]',
  },
  {
    title: 'AI Quiz App',
    description: 'A console-based intelligent quiz application that adapts difficulty based on performance.',
    tech: ['Python', 'AI Logic'],
    category: 'Console',
    accent: 'from-[#7b5ea7] to-[#c88a2a]',
  },
  {
    title: 'Medic Website',
    description: 'A comprehensive platform connecting patients with doctors for appointments and consultations.',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Web',
    accent: 'from-[#c88a2a] to-[#e5a830]',
  },
  {
    title: 'Undo Redo Engine',
    description: 'A robust command pattern engine in C++ supporting infinite undo and redo operations.',
    tech: ['C++', 'Data Structures'],
    category: 'Desktop',
    accent: 'from-[#e5a830] to-[#f5c96a]',
  },
  {
    title: 'Console Mini OS',
    description: 'A simulated mini operating system built in C++ with basic file management and shell commands.',
    tech: ['C++', 'Operating Systems'],
    category: 'System',
    accent: 'from-[#c88a2a] to-[#7b5ea7]',
  },
];

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -10 }}
      className="group card-shimmer h-full"
    >
      <div className="bg-card-bg border border-border-card hover:border-accent-primary transition-all duration-400 h-full flex flex-col relative overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
        {/* Top gradient accent line */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accent} opacity-70 group-hover:opacity-100 transition-opacity duration-400`} />

        {/* Category pill */}
        <div className="px-8 pt-8 pb-0">
          <span className={`inline-block text-[9px] font-dm-sans font-bold uppercase tracking-[3px] px-3 py-1 rounded-full bg-gradient-to-r ${project.accent} text-background mb-4`}>
            {project.category}
          </span>

          <h3 className="text-xl font-syne font-bold text-foreground group-hover:text-accent-glow transition-colors duration-300 mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-text-muted font-dm-sans font-light text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="px-8 pb-6 flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-[9px] px-3 py-1.5 glass border-border-default text-text-muted uppercase font-dm-sans font-semibold tracking-widest rounded-full group-hover:border-accent-primary/40 group-hover:text-accent-primary transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="px-8 pb-8 flex gap-3 border-t border-border-default pt-5">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center glass border-border-default text-text-muted hover:border-accent-primary hover:text-accent-primary transition-all duration-300 rounded-full"
          >
            <FaGithub size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center glass border-border-default text-text-muted hover:border-accent-primary hover:text-accent-primary transition-all duration-300 rounded-full"
          >
            <FaExternalLinkAlt size={14} />
          </motion.button>
        </div>

        {/* Corner decoration */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent-primary/6 to-transparent rounded-tl-full" />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-primary/5 blur-[80px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">My Work</p>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl">
              FEATURED <br />
              <span className="gradient-text">PROJECTS</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-text-muted max-w-sm md:text-right font-dm-sans font-light text-sm leading-relaxed"
          >
            A selection of my recent academic and personal projects exploring
            AI, Web, and System development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
