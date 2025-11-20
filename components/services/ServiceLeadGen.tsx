import React from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingUp, Target, Users } from 'lucide-react';
import ContentSection from '../ContentSection';

const ServiceLeadGen: React.FC = () => {
  return (
    <div className="pt-12">
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
           <div className="flex items-center gap-2 mb-6">
            <span className="text-[#1A1A1A] font-bold uppercase tracking-wider text-xs">Service</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-500 text-xs uppercase tracking-wider">Lead Generation</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Turn traffic into <br />
            <span className="italic font-light text-[#8C8C8C]">revenue.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            Traffic is vanity. Leads are sanity. We build high-converting funnels and landing pages that systematically turn visitors into qualified prospects.
          </p>
        </motion.div>
      </section>

       <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-[#1A1A1A]" />,
                title: "Precision Landing Pages",
                desc: "Single-purpose pages designed to capture data. No distractions, no menu links, just a compelling offer and a form."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#1A1A1A]" />,
                title: "A/B Testing",
                desc: "We don't guess. We test headlines, button colors, and layouts to squeeze every drop of ROI from your traffic."
              },
              {
                icon: <Users className="w-8 h-8 text-[#1A1A1A]" />,
                title: "Lead Magnets",
                desc: "Create valuable resources (PDFs, calculators, audits) that your customers will happily exchange their email address for."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl">
                <div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm">{item.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
         <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">Our CRO Methodology</h2>
         <div className="space-y-6">
            {[
              { title: "1. Analysis", desc: "We install heatmaps and recording software to see where users are dropping off." },
              { title: "2. Hypothesis", desc: "We identify bottlenecks and propose design changes to fix them." },
              { title: "3. Implementation", desc: "We build the new variation of the page." },
              { title: "4. Testing", desc: "We run traffic to both versions and declare a winner based on data." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
                <span className="text-[#1A1A1A] font-bold text-xl font-serif italic">0{i+1}</span>
                <div>
                  <h3 className="text-xl font-heading font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
         </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default ServiceLeadGen;