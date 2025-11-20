'use client'


import React from 'react';
import { motion } from 'framer-motion';
import { Check, Monitor, Smartphone, Zap } from 'lucide-react';
import ContentSection from '../ContentSection';
import SEO from '../SEO';

const ServiceWebDesign: React.FC = () => {
  return (
    <div className="pt-12">
      <SEO 
        title="Custom Web Design Services Edmonton | React & Next.js Experts"
        description="High-performance web design services in Edmonton. We build fast, mobile-first websites using React and Next.js designed to convert visitors into leads."
        canonicalUrl="/services/web-design"
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
            <span className="text-gray-500 text-xs uppercase tracking-wider">Web Design</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Websites that <span className="italic font-light text-[#8C8C8C]">sell.</span><br />
            Not just sit there.
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            We build custom, high-performance websites tailored for Alberta businesses. No bloated templates. No slow loading times. Just pure conversion power.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#1A1A1A]" />,
                title: "Blazing Fast Performance",
                desc: "We code with React & Next.js to ensure your site loads in under a second. Speed isn't just a luxury; it's a ranking factor."
              },
              {
                icon: <Smartphone className="w-8 h-8 text-[#1A1A1A]" />,
                title: "Mobile-First Architecture",
                desc: "Over 60% of your traffic is on mobile. We design for the smallest screen first, ensuring a flawless experience everywhere."
              },
              {
                icon: <Monitor className="w-8 h-8 text-[#1A1A1A]" />,
                title: "Conversion Centric",
                desc: "Every button, layout, and headline is engineered to guide the user towards a specific action. No dead ends."
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

      {/* Industries We Excel In */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1A1A1A] mb-4">Industries We Excel In</h2>
                        <p className="text-gray-600 max-w-xl text-lg">We don't build for everyone. We build for industries where trust, clarity, and technical capability are non-negotiable.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="font-heading font-bold text-xl mb-6">Law & Professional Services</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-600"><div className="w-1.5 h-1.5 bg-forest rounded-full"></div>Practice Area Silos</li>
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-600"><div className="w-1.5 h-1.5 bg-forest rounded-full"></div>Attorney Bio Strategy</li>
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-600"><div className="w-1.5 h-1.5 bg-forest rounded-full"></div>Trust Signal Integration</li>
                        </ul>
                    </div>
                    <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="font-heading font-bold text-xl mb-6">Industrial & Energy</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-600"><div className="w-1.5 h-1.5 bg-forest rounded-full"></div>Equipment Cataloging</li>
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-600"><div className="w-1.5 h-1.5 bg-forest rounded-full"></div>Safety Certification Showcases</li>
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-600"><div className="w-1.5 h-1.5 bg-forest rounded-full"></div>RFP Optimization</li>
                        </ul>
                    </div>
                    <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="font-heading font-bold text-xl mb-6">Medical & Health</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-600"><div className="w-1.5 h-1.5 bg-forest rounded-full"></div>Patient Booking Flows</li>
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-600"><div className="w-1.5 h-1.5 bg-forest rounded-full"></div>Service Education</li>
                            <li className="flex items-center gap-3 text-sm font-medium text-gray-600"><div className="w-1.5 h-1.5 bg-forest rounded-full"></div>Clinic Virtual Tours</li>
                        </ul>
                    </div>
                </div>
            </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
         <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">What's included in the build</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {[
              "Custom UI/UX Design (Figma)",
              "React / Next.js Development",
              "CMS Integration (Sanity/Contentful)",
              "On-Page SEO Optimization",
              "Google Analytics 4 Setup",
              "Contact Form & CRM Integration",
              "Hosting Setup & Domain Connection",
              "30 Days Post-Launch Support"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border-b border-gray-100">
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[#1A1A1A] shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-lg font-medium text-dark">{item}</span>
              </div>
            ))}
         </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default ServiceWebDesign;
