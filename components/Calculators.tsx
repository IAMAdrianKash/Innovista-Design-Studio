'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, Key, Code, ArrowUpRight } from 'lucide-react';

// Note: Filename kept as Calculators.tsx to maintain import stability, but logic is updated to 'Differentiators Bento Grid'
const Calculators: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1A1A1A] mb-4">
              How we're <span className="text-gray-400 italic font-serif">different.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We stripped away the agency fluff. No account managers, no hidden fees, no long-term contracts. Just high-end execution that works for businesses of every size.
            </p>
          </motion.div>

          <div className="hidden md:block">
            <div className="px-4 py-2 rounded-full border border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-500">
              Our Operating Principles
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Item 1: Month to Month (Large) */}
          <motion.div
            className="lg:col-span-2 bg-gray-100 p-8 md:p-10 rounded-[2rem] relative overflow-hidden group hover:shadow-lg transition-all duration-300 min-h-[300px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Calendar className="text-dark" size={24} />
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3 text-dark">Month-to-month. Always.</h3>
              <p className="text-gray-600 max-w-md leading-relaxed">
                If we're not generating value, fire us. We keep clients by delivering results, not by locking them into 12-month contracts they regret signing.
              </p>
            </div>
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={24} className="text-dark" />
            </div>
            {/* Abstract Background Graphic */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl group-hover:bg-white/80 transition-colors"></div>
          </motion.div>

          {/* Item 2: Transparent Pricing */}
          <motion.div
            className="bg-white border border-gray-100 p-8 rounded-[2rem] relative group hover:border-dark/20 transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div>
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-dark">
                <DollarSign size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-dark">Transparent Pricing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Projects start at $5k. No hidden fees, no surprise invoices. You know exactly what you're paying for.
              </p>
            </div>
          </motion.div>

          {/* Item 3: You Own Everything */}
          <motion.div
            className="bg-white border border-gray-100 p-8 rounded-[2rem] relative group hover:border-dark/20 transition-all duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-dark">
                <Key size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-dark">You Own Everything</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hosting, analytics, ad accounts. We never hold your assets hostage. If you leave, you take it all.
              </p>
            </div>
          </motion.div>

          {/* Item 4: Modern Tech Stack (Large) */}
          <motion.div
            className="lg:col-span-2 bg-forest p-8 md:p-10 rounded-[2rem] relative overflow-hidden group min-h-[300px] flex flex-col justify-between text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">Modern Tech Stack.</h3>
              <p className="text-gray-400 max-w-md leading-relaxed">
                We use the right tool for the job—React, Next.js, WordPress, Webflow, Shopify, Astro. Not bloated themes held together with duct tape. Your site will be faster and more secure than your competitors.
              </p>
            </div>
            <div className="flex gap-3 mt-8">
              {['Next.js', 'React', 'Wordpress', 'Shopify', 'Astro', 'Webflow', 'TypeScript', 'Tailwind'].map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800/50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Calculators;