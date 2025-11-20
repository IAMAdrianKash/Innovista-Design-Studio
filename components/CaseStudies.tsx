
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageType } from '../App';
import ContentSection from './ContentSection';

interface CaseStudiesProps {
  onNavigate: (page: PageType) => void;
}

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect: Move image on Y axis as we scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/3]">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
        <motion.img 
          src={project.image} 
          alt={project.client} 
          style={{ y }}
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="object-cover w-full h-full"
        />
        
        {/* Floating Stat Card */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl z-20 shadow-lg">
            <div className="font-heading font-bold text-3xl text-dark">{project.stat}</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{project.statDesc}</div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-heading font-bold text-2xl md:text-3xl group-hover:underline decoration-2 underline-offset-4 transition-all">
          {project.client}
        </h3>
        <p className="text-gray-600 text-lg">{project.title}</p>
      </div>
    </motion.div>
  );
};

const CaseStudies: React.FC<CaseStudiesProps> = ({ onNavigate }) => {
  const projects = [
    {
      client: "Apex Engineering",
      title: "Restructuring a technical giant for digital clarity",
      image: "https://picsum.photos/seed/architect/1200/800",
      tags: ["Web Design", "Strategy"],
      stat: "+45%",
      statDesc: "Increase in qualified RFPs"
    },
    {
      client: "Summit Legal Group",
      title: "Modernizing a 40-year-old firm without losing heritage",
      image: "https://picsum.photos/seed/lawyer/1200/800",
      tags: ["Rebranding", "Web Design"],
      stat: "2.5x",
      statDesc: "Faster load time"
    },
    {
      client: "NorthField Industrial",
      title: "From paper brochures to a lead-generating machine",
      image: "https://picsum.photos/seed/industrial/1200/800",
      tags: ["Lead Gen", "Automation"],
      stat: "320",
      statDesc: "Leads generated in Q1"
    },
    {
      client: "Vantage Capital",
      title: "Building trust through transparent financial design",
      image: "https://picsum.photos/seed/finance/1200/800",
      tags: ["Web Design", "SEO"],
      stat: "#1",
      statDesc: "Rank for local keywords"
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
            Selected <span className="italic font-light text-[#8C8C8C]">Works.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            We don't just make things look pretty. We solve business problems through design, technology, and strategy. Here are a few examples.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-24 bg-white border-t border-[#E6E6E6]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContentSection />
    </div>
  );
};

export default CaseStudies;
