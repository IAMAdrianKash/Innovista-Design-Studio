'use client'


import React from 'react';
import { motion } from 'framer-motion';
import { Check, BarChart, Globe, Search } from 'lucide-react';
import ContentSection from '../ContentSection';
import SEO from '../SEO';

const ServiceSEO: React.FC = () => {
  return (
    <div className="pt-12">
      <SEO 
        title="SEO Services Edmonton | Local Search & Technical Audits"
        description="Dominate local search results in Alberta. Innovista provides technical SEO audits, local SEO optimization, and content strategy to drive organic traffic."
        canonicalUrl="/services/seo"
      />
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#1A1A1A] font-bold uppercase tracking-wider text-xs">Service</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-500 text-xs uppercase tracking-wider">SEO Optimization</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Be found when it <br />
            <span className="italic font-light text-[#8C8C8C]">matters most.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            We help Alberta businesses dominate local search results. Sustainable, white-hat SEO strategies that bring consistent, free traffic.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-[#1A1A1A]" />,
                title: "Technical Audits",
                desc: "We fix the broken links, slow load times, and structure issues that are preventing Google from trusting your site."
              },
              {
                icon: <Globe className="w-8 h-8 text-[#1A1A1A]" />,
                title: "Local SEO",
                desc: "Ranking for 'Service + City' keywords. Google Business Profile optimization to capture local intent."
              },
              {
                icon: <BarChart className="w-8 h-8 text-[#1A1A1A]" />,
                title: "Content Strategy",
                desc: "Writing authoritative content that answers your customers' questions and establishes you as the industry expert."
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
         <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">The SEO Roadmap</h2>
         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {[
              { title: "Month 1: Technical Foundation", desc: "Site speed, mobile usability, schema markup, and indexing fixes." },
              { title: "Month 2: On-Page Optimization", desc: "Optimizing meta tags, headers, and existing content for target keywords." },
              { title: "Month 3: Content Creation", desc: "Publishing high-quality articles to target long-tail search queries." },
              { title: "Month 4+: Authority Building", desc: "Backlink acquisition and digital PR to increase domain authority." }
            ].map((item, i) => (
               <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-[#1A1A1A] font-bold">
                    {i+1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                     <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                     <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default ServiceSEO;