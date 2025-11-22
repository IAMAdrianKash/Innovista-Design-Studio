'use client'


import React from 'react';
import { motion } from 'framer-motion';
import ContentSection from './ContentSection';

const Capabilities: React.FC = () => {
  const techStack = [
    {
      category: "No-Code & CMS",
      desc: "Rapid deployment and easy content management for marketing teams.",
      tools: [
        {
          name: "Webflow",
          desc: "For high-end, visual-first marketing websites.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg"
        },
        {
          name: "WordPress",
          desc: "For content-heavy sites requiring deep flexibility.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
        },
        {
          name: "Framer",
          desc: "For speed and creative landing pages.",
          logo: "https://cdn.svgporn.com/logos/framer-icon.svg"
        },
        {
          name: "Bubble",
          desc: "For complex web applications without code.",
          logo: "https://cdn.svgporn.com/logos/bubble.svg"
        },
        {
          name: "Strapi",
          desc: "Headless CMS for omnichannel content.",
          logo: "https://cdn.svgporn.com/logos/strapi-icon.svg"
        }
      ]
    },
    {
      category: "Custom Development",
      desc: "Enterprise-grade performance for complex applications.",
      tools: [
        {
          name: "React / Next.js",
          desc: "The industry standard for fast, scalable web apps.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        },
        {
          name: "Tailwind CSS",
          desc: "For bespoke, pixel-perfect styling systems.",
          logo: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg"
        },
        {
          name: "Node.js",
          desc: "Powerful backend infrastructure.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
          name: "TypeScript",
          desc: "Type-safe code for mission-critical apps.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
          name: "Supabase",
          desc: "Scalable database and authentication.",
          logo: "https://cdn.svgporn.com/logos/supabase-icon.svg"
        },
        {
          name: "Sanity.io",
          desc: "A headless CMS for structured content delivery.",
          logo: "https://cdn.svgporn.com/logos/sanity.svg"
        }
      ]
    },
    {
      category: "E-Commerce",
      desc: "Robust stores that scale with your sales volume.",
      tools: [
        {
          name: "Shopify",
          desc: "The world's best e-commerce platform.",
          logo: "https://cdn.svgporn.com/logos/shopify-icon.svg"
        },
        {
          name: "BigCommerce",
          desc: "For high-volume enterprise retail.",
          logo: "https://cdn.svgporn.com/logos/bigcommerce-icon.svg"
        },
        {
          name: "WooCommerce",
          desc: "Flexible open-source commerce for WordPress.",
          logo: "https://cdn.svgporn.com/logos/woocommerce-icon.svg"
        },
        {
          name: "Magento",
          desc: "Self-hosted power for complex catalogs.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg"
        }
      ]
    }
  ];

  const integrations = [
    { name: "HubSpot", logo: "https://cdn.svgporn.com/logos/hubspot-icon.svg" },
    { name: "Salesforce", logo: "https://cdn.svgporn.com/logos/salesforce.svg" },
    { name: "Mailchimp", logo: "https://cdn.svgporn.com/logos/mailchimp-icon.svg" },
    { name: "Zapier", logo: "https://cdn.svgporn.com/logos/zapier-icon.svg" },
    { name: "Google Analytics 4", logo: "https://cdn.svgporn.com/logos/google-analytics.svg" },
    { name: "Stripe", logo: "https://cdn.svgporn.com/logos/stripe-icon.svg" },
    { name: "Intercom", logo: "https://cdn.svgporn.com/logos/intercom-icon.svg" },
    { name: "Calendly", logo: "https://cdn.svgporn.com/logos/calendly-icon.svg" }
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
            The right tool <br />
            for the <span className="italic font-light text-[#8C8C8C]">job.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            We aren't dogmatic about technology. We use whatever stack delivers the best performance, scalability, and ease of use for your specific needs and budget.
          </p>
        </motion.div>
      </section>

      {/* Tech Grid */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="space-y-24">
            {techStack.map((section, idx) => (
              <div key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12 max-w-2xl"
                >
                  <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">{section.category}</h2>
                  <p className="text-gray-500 text-lg">{section.desc}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.tools.map((tool, tIdx) => (
                    <motion.div
                      key={tIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: tIdx * 0.1 }}
                      className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-dark hover:shadow-md transition-all"
                    >
                      <div className="mb-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm p-2 group-hover:scale-110 transition-transform">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3">{tool.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{tool.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8">And we connect to everything else</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Your website shouldn't exist in a silo. We integrate with the tools you already use to run your business.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {integrations.map((tool) => (
            <div key={tool.name} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm md:text-base shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
              <img src={tool.logo} alt={tool.name} className="w-5 h-5 object-contain opacity-70 grayscale group-hover:grayscale-0" />
              {tool.name}
            </div>
          ))}
        </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default Capabilities;
