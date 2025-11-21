'use client'


import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Zap, BarChart3 } from 'lucide-react';
import ContentSection from './ContentSection';
import SEO from './SEO';

const About: React.FC = () => {
  return (
    <div className="pt-12">
      <SEO 
        title="About Innovista | Edmonton Digital Agency"
        description="Innovista Design Studio bridges the gap between looking good and selling. We are an Alberta-based web design agency focused on revenue and results."
        canonicalUrl="/about"
      />
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            We're not artists.<br />
            We're architects of <span className="italic font-light text-[#8C8C8C]">revenue.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            Innovista Design Studio bridges the gap between "looking good" and "selling." We help Alberta businesses stop leaking leads and start dominating their market.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 block">Our Origin Story</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-8 text-[#1A1A1A] tracking-tight">
                Tired of websites that are just <br />
                <span className="text-gray-400">expensive decorations.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Innovista started when we realized a hard truth: most local businesses were getting ripped off. They were paying agencies $15,000+ for "custom" websites that were really just bloated WordPress templates that took 5 seconds to load.
                </p>
                <p>
                  These sites looked okay, but they didn't do the one thing they were supposed to do: <strong>make the phone ring.</strong>
                </p>
                <p>
                  We decided to build something different. A studio that treats your website as a financial asset, not an art project. We strip away the fluff, focus on user psychology, and engineer sites that convert traffic into paying clients.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/about-bridge.jpg"
                  alt="Modern architecture representing our design philosophy"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-forest text-white p-8 rounded-2xl max-w-xs shadow-xl hidden md:block">
                <p className="font-serif text-2xl italic mb-2">"Design is intelligence made visible."</p>
                <p className="text-sm text-gray-400">— Not just a quote. Our process.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Founder's Note - Accountability */}
      <section className="py-24 bg-[#F3F4F6]">
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-8 overflow-hidden border border-gray-200 p-1">
                   <img src="https://ui-avatars.com/api/?name=Alex+Morgan&background=064E3B&color=fff" alt="Founder" className="rounded-full" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-8 leading-tight italic">
                  "My promise is simple: You will never have to wonder what you are paying for. No black boxes. No jargon. Just clear communication and work that moves the needle."
              </h2>
              <div className="flex flex-col items-center justify-center gap-2">
                  {/* Simple SVG Signature Representation */}
                  <div className="h-12 w-32 mb-2 opacity-60">
                     <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20,60 Q50,10 80,60 T140,60 T180,40" fill="none" stroke="#1A1A1A" strokeWidth="3" />
                     </svg>
                  </div>
                  <p className="font-bold text-dark text-lg">Alex Morgan</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Founder & Lead Strategist</p>
              </div>
          </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tight">Our Philosophy</h2>
          <p className="text-gray-500 text-base md:text-lg">How we deliver results when others deliver excuses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8 text-[#1A1A1A]" />,
              title: "Speed is a Feature",
              desc: "A 1-second delay in load time reduces conversions by 7%. We code for raw performance, ensuring your site loads instantly on any device."
            },
            {
              icon: <Users className="w-8 h-8 text-[#1A1A1A]" />,
              title: "User-Centric, Not Ego-Centric",
              desc: "We don't care what color *we* like. We care what your customers respond to. Every pixel is placed with the intent to guide a user to 'Contact Us'."
            },
            {
              icon: <BarChart3 className="w-8 h-8 text-[#1A1A1A]" />,
              title: "Data Over Opinions",
              desc: "We don't guess. We test. Our decisions are backed by analytics and user behavior data, not just 'creative intuition'."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:border-gray-300 transition-colors"
            >
              <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4">{item.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team/Approach Snippet */}
      <section className="py-24 bg-forest text-white rounded-[3rem] mx-6 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-12 tracking-tight">No Juniors. No Outsourcing.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 font-heading">
                <CheckCircle2 className="text-gray-400" /> Senior Talent Only
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                When you hire Innovista, you work directly with the experts building your site. No account managers playing "telephone" with your requirements.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 font-heading">
                <CheckCircle2 className="text-gray-400" /> Alberta Based
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We understand the local market because we live here. From the oilfield to the boardroom, we know how Albertans do business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse Content Section for CTA */}
      <ContentSection />
    </div>
  );
};

export default About;
