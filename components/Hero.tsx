'use client'


import React from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-24 px-6 md:px-12 max-w-[90rem] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <motion.div 
          className="space-y-8 lg:max-w-2xl relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-dark/10 bg-white/50 backdrop-blur-sm">
            <span className="w-2 h-2 bg-forest rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-dark/70">Accepting Q4 Projects</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight">
            Your website should <br className="hidden lg:block" />
            be generating <span className="italic font-light text-gray-400">revenue.</span>
          </h1>
          
          <p className="text-lg md:text-[1.15rem] text-[#4A4A4A] leading-relaxed max-w-lg font-normal pt-2">
            We build conversion-focused websites for Alberta businesses that need results, not just pretty designs. Modern, fast, and engineered to sell.
          </p>
          
          {/* Social Proof - Moved Above Buttons */}
          <div className="flex items-center gap-5 pt-2 pb-2">
             <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-cream bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" />
                   </div>
                ))}
             </div>
             <div>
                <div className="flex items-center gap-1 mb-0.5">
                   {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-3 h-3 text-forest fill-forest" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                   ))}
                </div>
                <p className="text-xs font-medium text-gray-500"><span className="font-bold text-dark">50+ firms</span> trust us</p>
             </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/audit"
              className="group bg-forest text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-forest/90 transition-all flex items-center gap-3 shadow-2xl shadow-forest/20 hover:shadow-forest/30 hover:-translate-y-1 duration-300"
            >
              Get Your Free Website Audit
              <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ChevronRight size={14} />
              </div>
            </Link>

            <Link
              href="/case-studies"
              className="group px-8 py-4 rounded-full text-[15px] font-medium text-[#1A1A1A] border border-gray-200 hover:border-gray-400 hover:bg-white transition-all flex items-center gap-2"
            >
              View Selected Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
            </Link>
          </div>
        </motion.div>

        {/* Transparent Animated Visual */}
        <motion.div 
          className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
           {/* Abstract Architectural Grid Visualization */}
           <div className="relative w-full h-full max-w-[600px] max-h-[600px]">
              
              {/* Floating Grid Plane */}
              <motion.svg 
                viewBox="0 0 400 400" 
                className="absolute inset-0 w-full h-full drop-shadow-2xl"
                initial={{ rotateX: 60, rotateZ: 30, scale: 0.8 }}
                animate={{ rotateZ: 35 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 20, ease: "easeInOut" }}
              >
                  {/* Base Grid */}
                  <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#064E3B" strokeWidth="0.5" opacity="0.1"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Floating Data Blocks - Layer 1 */}
                  <motion.rect 
                    x="100" y="100" width="80" height="80" rx="4"
                    fill="white" fillOpacity="0.8" stroke="#064E3B" strokeWidth="1"
                    initial={{ y: 0 }}
                    animate={{ y: -20 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 4, ease: "easeInOut" }}
                  />
                  
                  {/* Floating Data Blocks - Layer 2 */}
                  <motion.rect 
                    x="220" y="140" width="120" height="60" rx="4"
                    fill="white" fillOpacity="0.6" stroke="#064E3B" strokeWidth="1"
                    initial={{ y: 0 }}
                    animate={{ y: 30 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 5, delay: 1, ease: "easeInOut" }}
                  />

                   {/* Accent Connection Lines */}
                   <motion.path 
                      d="M 140 140 L 220 170"
                      stroke="#064E3B" strokeWidth="1" strokeDasharray="4 4"
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 0.6 }}
                      transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
                   />
                   
                   {/* Metric Card Representation */}
                   <motion.g
                      initial={{ y: 0 }}
                      animate={{ y: -40 }}
                      transition={{ repeat: Infinity, repeatType: "reverse", duration: 6, ease: "easeInOut" }}
                   >
                      <rect x="160" y="240" width="140" height="100" rx="8" fill="#064E3B" />
                      <rect x="180" y="260" width="100" height="8" rx="4" fill="white" fillOpacity="0.2" />
                      <rect x="180" y="280" width="60" height="8" rx="4" fill="white" fillOpacity="0.2" />
                      <rect x="180" y="310" width="100" height="4" rx="2" fill="white" fillOpacity="0.1" />
                      <rect x="180" y="320" width="100" height="4" rx="2" fill="white" fillOpacity="0.1" />
                   </motion.g>

              </motion.svg>

              {/* Glassmorphism Overlay Cards */}
              <motion.div 
                 className="absolute top-1/4 left-0 bg-white/80 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-lg max-w-[160px]"
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
              >
                 <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center mb-2">
                    <ArrowRight size={16} className="text-forest -rotate-45" />
                 </div>
                 <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Conversion</p>
                 <p className="text-xl font-heading font-bold text-dark">+142%</p>
              </motion.div>

               <motion.div 
                 className="absolute bottom-1/4 right-0 bg-white/80 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-lg max-w-[180px]"
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.7, duration: 0.8 }}
              >
                 <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">System Active</p>
                 </div>
                 <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                       className="h-full bg-forest"
                       initial={{ width: "0%" }}
                       animate={{ width: "85%" }}
                       transition={{ duration: 1.5, delay: 1 }}
                    />
                 </div>
              </motion.div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
