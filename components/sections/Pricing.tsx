'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Basic',
    desc: 'Perfect for small websites or personal portfolios.',
    price: 'Contact',
    features: [
      'Responsive Design',
      'Up to 3 Pages',
      'Basic SEO Setup',
      '1 Revision',
      'Source Code Included'
    ],
    highlight: false,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    name: 'Standard',
    desc: 'Ideal for growing businesses and comprehensive platforms.',
    price: 'Contact',
    features: [
      'Everything in Basic',
      'Up to 8 Pages',
      'CMS Integration (Sanity/Strapi)',
      'Advanced Animations',
      '3 Revisions',
      '1 Month Support'
    ],
    highlight: true, // Prominent card
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    name: 'Premium',
    desc: 'Full-stack AI integrated web solutions for enterprises.',
    price: 'Contact',
    features: [
      'Everything in Standard',
      'Unlimited Pages',
      'Custom AI Integration (OpenAI/Claude)',
      'Database Setup & API',
      'Unlimited Revisions',
      '3 Months Support'
    ],
    highlight: false,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  }
];

export default function Pricing() {
  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            Pricing & Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            CHOOSE YOUR <span className="text-accent-primary">PLAN</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 ${
                tier.highlight 
                  ? 'shadow-[0_20px_60px_rgba(30,58,138,0.12)] border-2 border-accent-glow scale-100 md:scale-105 z-10' 
                  : 'shadow-[0_8px_30px_rgba(30,58,138,0.05)] border border-slate-100 scale-100 hover:shadow-[0_12px_40px_rgba(30,58,138,0.08)]'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent-primary to-accent-glow text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-syne font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-text-muted font-dm-sans mb-6 h-10">{tier.desc}</p>
                <div className={`inline-block px-4 py-2 rounded-xl ${tier.bg} ${tier.color} font-syne font-bold text-2xl`}>
                  {tier.price}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} />
                    </div>
                    <span className="text-sm font-dm-sans text-text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3.5 rounded-xl font-dm-sans font-bold uppercase tracking-widest text-xs transition-all ${
                tier.highlight
                  ? 'bg-gradient-to-r from-accent-primary to-accent-glow text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
