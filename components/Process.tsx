
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, TrendingUp } from 'lucide-react';
import ContentSection from './ContentSection';
import SEO from './SEO';

const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      name: "Discovery & Strategy",
      icon: <Search size={24} />,
      desc: "We don't write a single line of code until we understand your business model, your competitors, and your revenue goals. We create a sitemap and user journey designed for conversion.",
      deliverables: ["Competitor Analysis", "Sitemap Architecture", "User Persona Mapping"]
    },
    {
      id: "02",
      name: "Wireframing & Design",
      icon: <PenTool size={24} />,
      desc: "We design high-fidelity mockups in Figma. You see exactly what your site will look like before we build it. We iterate until every pixel aligns with your brand authority.",
      deliverables: ["Interactive Figma Prototype", "Mobile & Desktop Views", "UI/UX Style Guide"]
    },
    {
      id: "03",
      name: "Development",
      icon: <Code size={24} />,
      desc: "We build your site using modern frameworks (React/Next.js). Clean code, semantic structure, and component-based architecture ensure it scales as you grow.",
      deliverables: ["Custom Development", "CMS Setup (Sanity/Webflow)", "Animation Implementation"]
    },
    {
      id: "04",
      name: "Launch & QA",
      icon: <Rocket size={24} />,
      desc: "We perform rigorous testing across devices and browsers. We verify SEO tags, check forms, and ensure analytics are tracking correctly before flipping the switch.",
      deliverables: ["Cross-Browser Testing", "Speed Optimization", "Go-Live Checklist"]
    },
    {
      id: "05",
      name: "Growth & Optimization",
      icon: <TrendingUp size={24} />,
      desc: "Launch is just the starting line. We monitor user behavior, track conversions, and make data-backed adjustments to improve performance month over month.",
      deliverables: ["Post-Launch Report", "Training Session", "30-Day Support"]
    }
  ];

  return (
    <div className="pt-12">
      <SEO 
        title="Our Web Design Process | Innovista Design Studio"
        description="The Innovista Methodology: A 5-step process for building high-performance websites. From discovery to launch and growth."
        canonicalUrl="/process"
      />
      
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            The Innovista <br />
            <span className="italic font-light text-[#8C8C8C]">Methodology.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            We believe in predictability. Our 5-step process ensures your project is delivered on time, on budget, and exactly as promised. No black boxes.
          </p>
        </motion.div>
      </section>

      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gray-200"></div>

            <div className="space-y-24">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-16 md:pl-24"
                >
                  {/* Marker */}
                  <div className="absolute left-0 md:left-4 top-0 w-8 h-8 md:w-9 md:h-9 -translate-x-1/2 bg-white border-2 border-forest rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-forest rounded-full"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <span className="font-serif text-4xl text-gray-200 font-bold">{step.id}</span>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-dark">{step.name}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {step.desc}
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Key Deliverables</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {step.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-forest rounded-full"></div>
                           <span className="text-sm font-medium text-dark">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default Process;
