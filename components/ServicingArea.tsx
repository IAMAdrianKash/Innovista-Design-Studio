
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const ServicingArea: React.FC = () => {
  // Split cities into 3 groups for variety
  const row1 = ["Edmonton", "Calgary", "Red Deer", "Lethbridge", "St. Albert", "Medicine Hat", "Grande Prairie"];
  const row2 = ["Airdrie", "Spruce Grove", "Leduc", "Fort Saskatchewan", "Lloydminster", "Camrose", "Stony Plain"];
  const row3 = ["Beaumont", "Wetaskiwin", "Sylvan Lake", "Brooks", "Strathmore", "High River", "Banff", "Canmore"];

  // Quadruple the lists to ensure seamless looping on large screens
  const list1 = [...row1, ...row1, ...row1, ...row1];
  const list2 = [...row2, ...row2, ...row2, ...row2];
  const list3 = [...row3, ...row3, ...row3, ...row3];

  return (
    <section className="py-24 bg-cream border-y border-gray-200 overflow-hidden relative">
      {/* Centered Pill Header */}
      <div className="flex justify-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm">
          <span className="w-2 h-2 bg-forest rounded-full animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Servicing Businesses Across Alberta</span>
        </div>
      </div>

      <div className="flex flex-col gap-10 md:gap-14">
        
        {/* ROW 1 - Left */}
        <div className="relative flex overflow-x-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>
          <motion.div
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-25%" }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {list1.map((city, idx) => (
              <div key={idx} className="flex items-center gap-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500 cursor-default">
                 <MapPin size={18} className="text-forest" />
                 <span className="font-heading font-bold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight">
                  {city}
                 </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2 - Right */}
        <div className="relative flex overflow-x-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>
          <motion.div
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            initial={{ x: "-25%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 55,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {list2.map((city, idx) => (
              <div key={idx} className="flex items-center gap-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500 cursor-default">
                 <span className="font-heading font-bold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight">
                  {city}
                 </span>
                 <MapPin size={18} className="text-forest" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 3 - Left */}
        <div className="relative flex overflow-x-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>
          <motion.div
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-25%" }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {list3.map((city, idx) => (
              <div key={idx} className="flex items-center gap-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500 cursor-default">
                 <MapPin size={18} className="text-forest" />
                 <span className="font-heading font-bold text-3xl md:text-5xl text-[#1A1A1A] tracking-tight">
                  {city}
                 </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ServicingArea;
