'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContentSection from './ContentSection';
import { CaseStudy, urlForImage } from '../lib/sanity';

interface ProjectCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ caseStudy, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect: Move image on Y axis as we scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Get the first result for the floating stat card
  const firstResult = caseStudy.results[0];

  // Map industry codes to display labels
  const industryLabels: Record<string, string> = {
    'law': 'Law Firms',
    'engineering': 'Engineering',
    'manufacturing': 'Manufacturing',
    'healthcare': 'Healthcare',
    'real-estate': 'Real Estate',
    'consulting': 'Consulting',
    'technology': 'Technology',
    'other': 'Other',
  };

  // Map service codes to display labels
  const serviceLabels: Record<string, string> = {
    'web-design': 'Web Design',
    'lead-generation': 'Lead Generation',
    'seo': 'SEO',
    'automation': 'Automation',
    'branding': 'Branding',
    'content-strategy': 'Content',
  };

  return (
    <Link href={`/case-studies/${caseStudy.slug.current}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/3] bg-gray-100">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
          <motion.img
            src={urlForImage(caseStudy.featuredImage).width(800).height(600).url()}
            alt={caseStudy.featuredImage.alt || caseStudy.client}
            style={{ y }}
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="object-cover w-full h-full"
          />

          {/* Floating Stat Card */}
          {firstResult && (
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl z-20 shadow-lg">
              <div className="font-heading font-bold text-3xl text-dark">{firstResult.value}</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{firstResult.label}</div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wide">
              {industryLabels[caseStudy.industry] || caseStudy.industry}
            </span>
            {caseStudy.services.slice(0, 2).map((service) => (
              <span key={service} className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wide">
                {serviceLabels[service] || service}
              </span>
            ))}
          </div>
          <h3 className="font-heading font-bold text-2xl md:text-3xl group-hover:underline decoration-2 underline-offset-4 transition-all">
            {caseStudy.client}
          </h3>
          <p className="text-gray-600 text-lg">{caseStudy.title}</p>
        </div>
      </motion.div>
    </Link>
  );
};

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ caseStudies }) => {
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
          {caseStudies.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-xl text-gray-500">No case studies available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {caseStudies.map((caseStudy, idx) => (
                <ProjectCard
                  key={caseStudy._id}
                  caseStudy={caseStudy}
                  index={idx}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <ContentSection />
    </div>
  );
};

export default CaseStudies;
