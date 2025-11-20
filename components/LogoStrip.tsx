'use client'

import React from 'react';
import { motion } from 'framer-motion';

const LogoStrip: React.FC = () => {
  const logos = [
    { name: 'Stripe', url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
    { name: 'Canva', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg' },
    { name: 'Coinbase', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Coinbase.svg' },
    { name: 'Databricks', url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Databricks_Logo.png' },
    { name: 'Figma', url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Grafana', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Grafana_logo.svg' },
    { name: 'Gusto', url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Gusto_logo.svg' },
  ];

  // Triple the logos to ensure smooth infinite scrolling on wider screens
  const logoRow = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 lg:py-20 border-b border-gray-200 overflow-hidden bg-cream">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-24">
        
        {/* Static Text */}
        <div className="shrink-0 text-center xl:text-left z-10">
          <p className="text-[#808080] text-lg md:text-[19px] font-normal leading-snug tracking-tight">
            Trusted by professional services & <br />
            B2B companies across Alberta
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="flex-1 overflow-hidden relative w-full max-w-full xl:pt-1">
          {/* Gradient Masks - Updated to match bg-cream (cool grey) */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none"></div>

          <motion.div 
            className="flex items-center gap-16 md:gap-24 w-max"
            initial={{ x: 0 }}
            animate={{ x: "-33.333%" }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30 
            }}
          >
            {logoRow.map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="h-6 md:h-8 flex items-center justify-center opacity-[0.25] hover:opacity-100 transition-opacity duration-300 grayscale"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-full w-auto object-contain max-w-[140px]"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default LogoStrip;