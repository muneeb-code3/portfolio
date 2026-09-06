'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Wrench, Trophy } from 'lucide-react';
import Image from 'next/image';

const cases = [
  {
    title: 'AI Resume Forge',
    subtitle: 'Automated Career Building Platform',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop',
    problem: 'Students struggled to format and tailor resumes for specific job applications, leading to low callback rates.',
    solution: 'Built a Next.js web application utilizing the Claude API to dynamically parse skills and generate optimized, ATS-friendly resumes.',
    result: 'Reduced resume creation time by 80% and successfully deployed as a core university project.',
    accent: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Medic Website Portal',
    subtitle: 'Healthcare Appointment System',
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?q=80&w=800&auto=format&fit=crop',
    problem: 'Patients faced long wait times and disorganized booking procedures when attempting to schedule clinic visits.',
    solution: 'Developed a full-stack MERN platform with real-time slot booking, doctor availability toggles, and user dashboards.',
    result: 'Streamlined the booking process, handling over 100+ mock appointments concurrently during testing phases.',
    accent: 'bg-indigo-50 text-indigo-600',
  }
];

export default function CaseStudies() {
  return (
    <section id="casestudies" className="py-20 sm:py-28 relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            In-Depth Analysis
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            CASE <span className="text-accent-primary">STUDIES</span>
          </motion.h2>
        </div>

        {/* Case Studies */}
        <div className="space-y-16 lg:space-y-24">
          {cases.map((study, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className={`absolute top-4 ${isEven ? '-left-4' : '-right-4'} w-full h-full rounded-3xl ${study.accent} -z-10`} />
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                    <Image src={study.image} alt={study.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl sm:text-4xl font-syne font-bold text-foreground mb-2">
                    {study.title}
                  </h3>
                  <p className="font-dm-sans font-bold uppercase tracking-widest text-xs text-text-hint mb-8">
                    {study.subtitle}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 font-syne font-bold text-lg mb-2 text-slate-800">
                        <Lightbulb size={20} className="text-orange-500" /> The Problem
                      </h4>
                      <p className="text-text-muted font-dm-sans text-sm leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 font-syne font-bold text-lg mb-2 text-slate-800">
                        <Wrench size={20} className="text-accent-glow" /> The Solution
                      </h4>
                      <p className="text-text-muted font-dm-sans text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 font-syne font-bold text-lg mb-2 text-slate-800">
                        <Trophy size={20} className="text-green-500" /> The Result
                      </h4>
                      <p className="text-text-muted font-dm-sans text-sm leading-relaxed">{study.result}</p>
                    </div>
                  </div>

                  <button className="mt-8 flex items-center gap-2 btn-secondary px-6 py-3 rounded-xl font-dm-sans font-bold uppercase tracking-widest text-xs">
                    View Full Details <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
