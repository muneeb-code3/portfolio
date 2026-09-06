'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork } from 'lucide-react';
import Image from 'next/image';

const pinnedRepos = [
  {
    name: 'portfolio',
    desc: 'My personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
    stars: 12,
    forks: 3,
    lang: 'TypeScript'
  },
  {
    name: 'ai-resume-forge',
    desc: 'AI-powered resume generator using Claude API and React.',
    stars: 25,
    forks: 8,
    lang: 'JavaScript'
  },
  {
    name: 'console-mini-os',
    desc: 'A terminal-based operating system simulator built in C++.',
    stars: 18,
    forks: 2,
    lang: 'C++'
  }
];

export default function GithubStats() {
  const username = "muneeb-code3"; // Using the github username provided

  return (
    <section id="github" className="py-20 sm:py-28 relative bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">Open Source</p>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              GITHUB <span className="text-accent-primary">STATS</span>
            </h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-secondary px-6 py-3 rounded-xl font-dm-sans font-bold uppercase tracking-widest text-xs"
          >
            <Github size={16} /> Follow on GitHub
          </motion.a>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Stats / Heatmap Placeholder via API */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 bg-white p-6 sm:p-8 rounded-3xl shadow-[0_4px_20px_rgba(30,58,138,0.04)] border border-slate-100"
          >
            <h3 className="text-xl font-syne font-bold text-foreground mb-6 flex items-center gap-2">
              <Github className="text-accent-primary" /> Contribution Overview
            </h3>
            
            <div className="w-full relative min-h-[200px] bg-slate-50 rounded-xl overflow-hidden flex flex-col items-center justify-center p-4">
              {/* Using GitHub Readme Stats API for the stats card */}
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=1E3A8A&text_color=475569&icon_color=3B82F6`} 
                alt="GitHub Stats" 
                className="w-full max-w-[500px] mx-auto object-contain"
              />
            </div>
            
            <div className="w-full mt-6 relative min-h-[200px] bg-slate-50 rounded-xl overflow-hidden flex flex-col items-center justify-center p-4">
              {/* Using GitHub Readme Stats API for Top Languages */}
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=1E3A8A&text_color=475569`} 
                alt="Top Languages" 
                className="w-full max-w-[400px] mx-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Pinned Repos */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/3 space-y-4"
          >
            <h3 className="text-xl font-syne font-bold text-foreground mb-6 px-2">Top Repositories</h3>
            
            {pinnedRepos.map((repo, idx) => (
              <a key={idx} href={`https://github.com/${username}/${repo.name}`} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(30,58,138,0.04)] border border-slate-100 hover:border-accent-primary hover:shadow-[0_8px_30px_rgba(30,58,138,0.08)] transition-all duration-300 group">
                  <h4 className="font-syne font-bold text-foreground text-lg mb-2 group-hover:text-accent-primary transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-text-muted font-dm-sans text-sm mb-4 line-clamp-2">
                    {repo.desc}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs font-dm-sans font-bold text-slate-500">
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-accent-glow inline-block" /> {repo.lang}</span>
                    <span className="flex items-center gap-1"><Star size={14} /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
