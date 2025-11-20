
import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContentSection: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const steps = [
    {
      title: "1. Fix the foundation first",
      desc: "We audit your current site structure, speed, and technical SEO to identify the cracks that are leaking revenue. A solid base is non-negotiable."
    },
    {
      title: "2. Optimize for conversions",
      desc: "We implement clear calls-to-action, remove distractions, and design user flows that guide visitors naturally toward the 'Contact' button."
    },
    {
      title: "3. Scale what's working",
      desc: "Once the site converts reliably, we ramp up traffic strategies. Whether through SEO or paid ads, we pour fuel on the fire only when the engine is efficient."
    },
    {
      title: "4. Automate follow-ups",
      desc: "Stop copy-pasting leads. We integrate your forms directly with your CRM so sales teams get notified instantly and leads get nurtured automatically."
    },
    {
      title: "5. Measure real ROI",
      desc: "We track actual business outcomes—form fills, phone calls, and sales—so you know exactly how much revenue your website is generating."
    }
  ];

  const toggleStep = (idx: number) => {
    setOpenStep(openStep === idx ? null : idx);
  };

  return (
    <section className="py-24 px-6 max-w-[90rem] mx-auto">
      <motion.div 
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
         <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tight text-dark">
              Ready to stop <span className="text-gray-400 font-serif italic font-normal">guessing?</span>
            </h2>
             <p className="text-gray-600 text-lg max-w-xl">
                Stop wasting money on a website that doesn't work. We engineer outcomes, not just pages.
            </p>
         </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Process Accordion */}
        <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">The Methodology</h3>
            
            <div className="divide-y divide-gray-100 border-t border-gray-100">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  className="group py-6 px-4 -mx-4 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleStep(idx)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-lg font-heading font-semibold transition-colors pr-4 ${openStep === idx ? 'text-dark' : 'text-gray-500 group-hover:text-dark'}`}>
                      {step.title}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${openStep === idx ? 'bg-dark text-white' : 'bg-white border border-gray-200 text-gray-400 group-hover:border-dark group-hover:text-dark'}`}>
                      <ChevronRight size={14} className={`transition-transform duration-300 ${openStep === idx ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {openStep === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-base text-gray-500 leading-relaxed pr-8 pl-1">
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
        </div>

        {/* Detailed Audit Form Card */}
        <motion.div 
          className="bg-forest rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-black/10"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
               <span className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-bold uppercase tracking-wider text-gray-300">
                Start Here
               </span>
               <ArrowUpRight className="text-gray-500" />
            </div>
            
            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4">Get Your Free Website Audit</h3>
            <p className="text-gray-400 text-base mb-8 max-w-sm leading-relaxed">
                2-minute form. 15-minute video audit. Zero sales pressure. See exactly what's broken.
            </p>
            
            <form className="space-y-5">
                <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/60 ml-2 mb-1 block">Website URL</label>
                    <input 
                        type="url" 
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/50 text-white" 
                        placeholder="https://yourcompany.com" 
                        required 
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 ml-2 mb-1 block">First Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/50 text-white" 
                            placeholder="Jane" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 ml-2 mb-1 block">Last Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/50 text-white" 
                            placeholder="Doe" 
                            required 
                        />
                    </div>
                </div>

                <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/60 ml-2 mb-1 block">Email Address</label>
                    <input 
                        type="email" 
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/50 text-white" 
                        placeholder="jane@company.com" 
                        required 
                    />
                </div>

                <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/60 ml-2 mb-1 block">Biggest Frustration? (Optional)</label>
                    <textarea 
                        rows={2} 
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/50 text-white resize-none" 
                        placeholder="e.g. Low conversion rate..."
                    ></textarea>
                </div>

                <button type="submit" className="w-full bg-white text-[#1A1A1A] font-bold py-4 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group mt-2 shadow-lg">
                    Get My Free Video Audit
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <p className="text-center text-xs text-white/40">
                    We respect your inbox. No spam, ever.
                </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;
