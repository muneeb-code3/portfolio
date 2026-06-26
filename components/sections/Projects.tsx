'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'AI Resume Forge',
    description: 'A university project that uses AI to build and optimize professional resumes based on user skills.',
    tech: ['Next.js', 'Claude API', 'Tailwind'],
    category: 'University'
  },
  {
    title: 'AI Quiz App',
    description: 'A console-based intelligent quiz application that adapts difficulty based on performance.',
    tech: ['Python', 'AI Logic'],
    category: 'Console'
  },
  {
    title: 'Medic Website',
    description: 'A comprehensive platform connecting patients with doctors for appointments and consultations.',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Web'
  },
  {
    title: 'Undo Redo Engine',
    description: 'A robust command pattern engine in C++ supporting infinite undo and redo operations.',
    tech: ['C++', 'Data Structures'],
    category: 'Desktop'
  },
  {
    title: 'Console Mini OS',
    description: 'A simulated mini operating system built in C++ with basic file management and shell commands.',
    tech: ['C++', 'Operating Systems'],
    category: 'System'
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(200, 138, 42, 0.15)' }}
      transition={{ duration: 0.3 }}
      className="relative h-full"
    >
      <div className="bg-card-bg p-8 border border-border-default hover:border-accent-primary transition-all duration-300 h-full flex flex-col group shadow-lg hover:shadow-[0_20px_50px_rgba(200,138,42,0.2)]">
        <div className="text-xs font-dm-sans text-accent-primary mb-3 uppercase tracking-widest font-semibold">{project.category}</div>
        <h3 className="text-2xl font-bold font-syne mb-4 text-foreground group-hover:text-accent-glow transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-text-muted font-dm-sans font-light mb-8 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, idx) => (
            <span key={idx} className="text-[10px] px-3 py-1.5 bg-[#111008] border border-border-default rounded-sm text-text-hint uppercase font-dm-sans tracking-widest font-semibold group-hover:border-accent-primary/50 group-hover:text-accent-primary transition-all duration-300">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 border border-border-default text-text-muted hover:border-accent-primary hover:text-accent-primary hover:bg-accent-primary/5 transition-all duration-300 rounded-sm"
          >
            <FaGithub size={18} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 border border-border-default text-text-muted hover:border-accent-primary hover:text-accent-primary hover:bg-accent-primary/5 transition-all duration-300 rounded-sm"
          >
            <FaExternalLinkAlt size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-accent-primary font-dm-sans tracking-[0.2em] text-xs uppercase mb-4 font-semibold">MY WORK</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-syne text-foreground leading-tight">FEATURED <br /><span className="text-accent-primary">PROJECTS</span></h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-text-muted max-w-md md:text-right font-dm-sans font-light text-sm md:text-base leading-relaxed"
          >
            A selection of my recent academic and personal projects exploring AI, Web, and System development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
