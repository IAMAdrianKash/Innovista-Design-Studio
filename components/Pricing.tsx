'use client'


import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';
import ContentSection from './ContentSection';
import SEO from './SEO';

const Pricing: React.FC = () => {
  const router = useRouter();
  return (
    <div className="pt-12">
      <SEO 
        title="Pricing & Engagement Models | Innovista Design Studio"
        description="Transparent pricing for high-performance web design and growth marketing. Project-based builds and monthly growth retainers."
        canonicalUrl="/pricing"
      />
      
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Investment <br />
            <span className="italic font-light text-[#8C8C8C]">models.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            We don't do hourly billing. We quote flat, transparent project fees based on value and complexity. No surprises. No scope creep invoices.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Tier 1: The Audit */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] border border-gray-200 bg-white flex flex-col h-full"
            >
              <div className="mb-8">
                <h3 className="font-heading font-bold text-2xl mb-2">The Audit</h3>
                <p className="text-gray-500 text-sm">For companies unsure where to start.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-dark">$495</span>
                <span className="text-gray-400 text-sm"> / one-time</span>
                {/* Strike through free offer for psychology or keep free based on your strategy. 
                    Here we position it as paid value that we currently offer for free in the hero. 
                */}
                <p className="text-xs text-forest font-bold mt-2 uppercase tracking-wide">Currently Waived (Free)</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "15-Minute Video Breakdown",
                  "UX/UI Analysis",
                  "Site Speed Performance Check",
                  "Conversion Bottleneck Report",
                  "Actionable Roadmap"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-forest shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push('/audit')}
                className="w-full py-4 rounded-xl border border-gray-200 font-bold text-dark hover:bg-gray-50 transition-colors"
              >
                Get Free Audit
              </button>
            </motion.div>

            {/* Tier 2: The Build (Primary) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2rem] border border-forest/20 bg-forest text-white flex flex-col h-full relative overflow-hidden shadow-2xl shadow-forest/20"
            >
              <div className="absolute top-0 right-0 bg-white text-forest text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">
                Most Popular
              </div>
              <div className="mb-8 relative z-10">
                <h3 className="font-heading font-bold text-2xl mb-2">The Foundation</h3>
                <p className="text-white/70 text-sm">Complete custom website & strategy.</p>
              </div>
              <div className="mb-8 relative z-10">
                <span className="text-4xl font-bold text-white">From $8k</span>
                <span className="text-white/60 text-sm"> / project</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1 relative z-10">
                {[
                  "Custom React / Next.js Development",
                  "Conversion Strategy & Copywriting",
                  "Mobile-First Responsive Design",
                  "Basic CMS (Sanity/Webflow)",
                  "On-Page SEO Setup",
                  "Analytics & CRM Integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-white text-forest flex items-center justify-center text-[10px]">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push('/contact')}
                className="w-full py-4 rounded-xl bg-white text-forest font-bold hover:bg-gray-100 transition-colors relative z-10"
              >
                Start Project
              </button>
              {/* Background decoration */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
            </motion.div>

            {/* Tier 3: Growth Retainer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2rem] border border-gray-200 bg-white flex flex-col h-full"
            >
              <div className="mb-8">
                <h3 className="font-heading font-bold text-2xl mb-2">Growth Engine</h3>
                <p className="text-gray-500 text-sm">Post-launch optimization & SEO.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-dark">From $1.5k</span>
                <span className="text-gray-400 text-sm"> / month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Monthly SEO Content Strategy",
                  "Landing Page A/B Testing",
                  "Technical Maintenance & Uptime",
                  "Priority Support",
                  "Quarterly Strategy Reviews",
                  "Dedicated Slack Channel"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-forest shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push('/contact')}
                className="w-full py-4 rounded-xl border border-gray-200 font-bold text-dark hover:bg-gray-50 transition-colors"
              >
                Inquire About Retainers
              </button>
            </motion.div>

          </div>

          <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <HelpCircle className="text-dark" />
             </div>
             <div>
                <h4 className="font-bold text-lg mb-1 text-dark">Need a custom scope?</h4>
                <p className="text-gray-600 text-sm">We work with larger organizations on enterprise migrations and custom web apps. Let's chat about your specific requirements.</p>
             </div>
             <button onClick={() => router.push('/contact')} className="md:ml-auto px-6 py-3 bg-dark text-white rounded-full text-sm font-bold hover:bg-black transition-colors whitespace-nowrap">
                Contact Sales
             </button>
          </div>

        </div>
      </section>
      
      <ContentSection />
    </div>
  );
};

export default Pricing;
