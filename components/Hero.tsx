import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageType } from '../App';

interface HeroProps {
  onNavigate?: (page: PageType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-16 pb-24 px-6 md:px-12 max-w-[90rem] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <motion.div 
          className="space-y-8 lg:max-w-2xl"
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
          
          <div className="pt-6 flex flex-wrap gap-4">
            <button 
              onClick={() => onNavigate && onNavigate('audit')}
              className="group bg-forest text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-forest/90 transition-all flex items-center gap-3 shadow-2xl shadow-forest/20 hover:shadow-forest/30 hover:-translate-y-1 duration-300"
            >
              Get Your Free Website Audit
              <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ChevronRight size={14} />
              </div>
            </button>
            
            <button 
              onClick={() => onNavigate && onNavigate('case-studies')}
              className="group px-8 py-4 rounded-full text-[15px] font-medium text-[#1A1A1A] border border-gray-200 hover:border-gray-400 hover:bg-white transition-all flex items-center gap-2"
            >
              View Selected Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
            </button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/50 shadow-2xl shadow-[#1A1A1A]/5 bg-gray-100">
            {/* Using a more architectural/abstract image */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
              alt="Modern corporate architecture" 
              className="object-cover w-full aspect-[4/3] lg:aspect-[16/12] transform hover:scale-105 transition-transform duration-[2.5s] ease-in-out grayscale-[20%]"
            />
            
            {/* Floating Badge - Social Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 max-w-sm hidden md:block"
            >
               <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" />
                        </div>
                     ))}
                  </div>
                  <div>
                     <p className="font-heading font-bold text-dark text-sm">Trusted by 50+ firms</p>
                     <p className="text-xs text-gray-500">Generating $10M+ in pipeline</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;