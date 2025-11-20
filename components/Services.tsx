import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, TrendingUp, Zap, BarChart, ArrowRight } from 'lucide-react';
import ContentSection from './ContentSection';

const Services: React.FC = () => {
  const services = [
    {
      path: '/services/web-design',
      title: 'Web Design & Development',
      desc: 'Custom built, high-performance websites designed to convert visitors into customers.',
      icon: <Monitor className="w-8 h-8 text-[#1A1A1A]" />,
      features: ['React & Next.js', 'Mobile-First', 'Speed Optimized']
    },
    {
      path: '/services/lead-generation',
      title: 'Lead Generation',
      desc: 'Strategic funnels and CRO that turn your passive traffic into active qualified leads.',
      icon: <TrendingUp className="w-8 h-8 text-[#1A1A1A]" />,
      features: ['Landing Pages', 'A/B Testing', 'Analytics']
    },
    {
      path: '/services/automation',
      title: 'Business Automation',
      desc: 'Connect your website to your CRM. Automate follow-ups, scheduling, and data entry.',
      icon: <Zap className="w-8 h-8 text-[#1A1A1A]" />,
      features: ['CRM Integration', 'Email Workflows', 'Zapier/Make']
    },
    {
      path: '/services/seo',
      title: 'SEO Optimization',
      desc: 'Dominate local search results with technical SEO audits and content strategies.',
      icon: <BarChart className="w-8 h-8 text-[#1A1A1A]" />,
      features: ['Technical Audits', 'Local SEO', 'Content Strategy']
    }
  ];

  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Everything you need to <br />
            <span className="italic font-light text-[#8C8C8C]">grow online.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            We don't just build websites. We build comprehensive digital ecosystems designed to generate leads, automate processes, and scale your business.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, idx) => (
              <Link key={idx} to={service.path}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/20 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                  <div className="mb-8 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-[#1A1A1A]">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.features.map((feat, i) => (
                      <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wide border border-gray-100">
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] group-hover:gap-4 transition-all">
                    Learn more <ArrowRight size={16} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default Services;