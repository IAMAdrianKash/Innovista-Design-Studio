'use client'


import React from 'react';
import { ChevronRight, MousePointerClick, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const SolutionsGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-[90rem] mx-auto">
      <motion.div 
        className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl">
          <h2 className="font-heading font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-dark mb-6">
            We build websites that work<br />
            like <span className="text-gray-400 font-normal font-serif italic">sales tools.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Not brochures. Not art projects. Sales tools. Every design decision we make answers one question: does this help convert visitors into leads?
          </p>
        </div>
        
        <div className="hidden md:block pb-2">
           <div className="h-px w-32 bg-gray-300"></div>
        </div>
      </motion.div>

      <div className="space-y-8">
        {/* First Block: The Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Large Card - Problem */}
          <motion.div 
            className="lg:col-span-7 bg-white border border-gray-200 p-8 md:p-12 rounded-[2rem] flex flex-col justify-between group hover:border-dark/20 transition-colors shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                 <MousePointerClick className="text-dark" size={20} />
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl leading-tight mb-4">
                Most websites are just expensive decorations.
              </h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-md">
                You paid good money for your current site. But traffic's not converting. Visitors leave. Forms don't get filled out. If your website isn't generating business, the design is the problem.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-dark transition-colors">
              The Problem <div className="h-px w-8 bg-current"></div>
            </div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div 
            className="lg:col-span-5 relative h-[400px] lg:h-auto rounded-[2rem] overflow-hidden border border-gray-200 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop" 
              alt="Analytics showing flatline" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] grayscale-[50%]"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl z-20">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-gray-500 uppercase">Bounce Rate</span>
                    <span className="text-xs font-bold text-red-500">High</span>
                </div>
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-red-500 rounded-full"></div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Second Block: The Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Left Image */}
           <motion.div 
            className="lg:col-span-5 relative h-[400px] lg:h-auto rounded-[2rem] overflow-hidden border border-gray-200 group order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340&auto=format&fit=crop" 
              alt="Team working strategy" 
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] grayscale-[50%]"
            />
             <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl z-20">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-gray-500 uppercase">Conversion Rate</span>
                    <span className="text-xs font-bold text-green-600">+145%</span>
                </div>
                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-green-600 rounded-full"></div>
                </div>
            </div>
          </motion.div>

          {/* Large Card - Solution */}
          <motion.div 
            className="lg:col-span-7 bg-forest border border-forest/20 p-8 md:p-12 rounded-[2rem] flex flex-col justify-between group text-white order-1 lg:order-2 shadow-2xl shadow-forest/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/10">
                 <TrendingUp className="text-white" size={20} />
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl leading-tight mb-4">
                Every design decision answers one question.
              </h3>
              <p className="text-base text-white/80 leading-relaxed max-w-md">
                "Does this help convert visitors into leads?" We build mobile-first designs with built-in automation so leads flow into your CRM without manual data entry.
              </p>
            </div>
            
            <div className="mt-12 space-y-3 relative z-10">
                {['Strategic Positioning', 'CRM Integration', 'Speed Optimization'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-white/90">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        {item}
                    </div>
                ))}
            </div>

             <div className="mt-12 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors relative z-10">
              The Solution <div className="h-px w-8 bg-current"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
