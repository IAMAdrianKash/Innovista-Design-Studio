'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Type, Palette, Gauge, FileText, Zap, ArrowRight } from 'lucide-react';
import ContentSection from './ContentSection';

interface ResourceTool {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  features: string[];
  badge?: string;
}

const Resources: React.FC = () => {
  const tools: ResourceTool[] = [
    {
      title: 'SEO Analyzer',
      description: 'Comprehensive analysis tool to audit your website\'s search engine optimization and get actionable recommendations.',
      icon: <Search className="w-8 h-8 text-[#1A1A1A]" />,
      href: '/resources/seo-analyzer',
      features: ['Meta Tags', 'Performance', 'Mobile-Friendly'],
      badge: 'Free'
    },
    {
      title: 'Font Picker',
      description: 'Explore and pair beautiful fonts for your website. Preview combinations in real-time.',
      icon: <Type className="w-8 h-8 text-[#1A1A1A]" />,
      href: '/resources/font-picker',
      features: ['Live Preview', 'Pairings', 'Copy CSS'],
      badge: 'Free'
    },
    {
      title: 'Color Palette Generator',
      description: 'Generate harmonious color palettes for your brand with accessibility scores.',
      icon: <Palette className="w-8 h-8 text-[#1A1A1A]" />,
      href: '/resources/color-palette',
      features: ['Harmony', 'A11y Scores', 'Export'],
      badge: 'Coming Soon'
    },
    {
      title: 'Page Speed Checker',
      description: 'Test your website\'s loading speed and get detailed optimization suggestions.',
      icon: <Gauge className="w-8 h-8 text-[#1A1A1A]" />,
      href: '/resources/speed-checker',
      features: ['Core Vitals', 'Metrics', 'Optimization'],
      badge: 'Coming Soon'
    },
    {
      title: 'Meta Tag Generator',
      description: 'Create optimized meta tags for better SEO and social media sharing.',
      icon: <FileText className="w-8 h-8 text-[#1A1A1A]" />,
      href: '/resources/meta-generator',
      features: ['SEO Tags', 'OG Preview', 'Twitter Cards'],
      badge: 'Coming Soon'
    },
    {
      title: 'Conversion Calculator',
      description: 'Calculate the potential ROI of improving your website\'s conversion rate.',
      icon: <Zap className="w-8 h-8 text-[#1A1A1A]" />,
      href: '/resources/conversion-calculator',
      features: ['ROI Calc', 'Projections', 'Reports'],
      badge: 'Coming Soon'
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
            Free tools to help <br />
            <span className="italic font-light text-[#8C8C8C]">your business grow.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            Professional-grade tools designed to help you optimize your website, improve user experience, and drive better results.
          </p>
        </motion.div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {tools.map((tool, idx) => (
              <Link key={idx} href={tool.badge === 'Coming Soon' ? '#' : tool.href} onClick={(e) => tool.badge === 'Coming Soon' && e.preventDefault()}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all relative overflow-hidden ${tool.badge === 'Coming Soon' ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/20 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                  {/* Badge */}
                  {tool.badge && (
                    <div className={`absolute top-8 left-8 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                      tool.badge === 'Coming Soon'
                        ? 'bg-gray-200 text-gray-600'
                        : 'bg-forest/10 text-forest'
                    }`}>
                      {tool.badge}
                    </div>
                  )}

                  <div className="mb-8 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>

                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-[#1A1A1A]">{tool.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
                    {tool.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {tool.features.map((feat, i) => (
                      <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-500 uppercase tracking-wide border border-gray-100">
                        {feat}
                      </span>
                    ))}
                  </div>

                  {tool.badge !== 'Coming Soon' && (
                    <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] group-hover:gap-4 transition-all">
                      Try it free <ArrowRight size={16} />
                    </div>
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use Our Tools Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">
                Why use our <span className="italic font-light text-[#8C8C8C]">tools?</span>
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                Our tools are built by the same team that delivers high-converting websites for businesses across industries. Each tool is designed with real-world insights from hundreds of successful projects.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-forest rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-[#1A1A1A] mb-2">No Registration Required</h4>
                    <p className="text-[#595959]">Jump right in and start using our tools. No sign-ups, no credit card, completely free.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-forest rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-[#1A1A1A] mb-2">Built by Experts</h4>
                    <p className="text-[#595959]">Created by professionals who understand what makes websites successful in competitive markets.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-forest rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-[#1A1A1A] mb-2">Actionable Insights</h4>
                    <p className="text-[#595959]">Get clear recommendations you can implement right away, not just data dumps.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-forest text-white rounded-[2rem] p-8 md:p-12"
            >
              <h3 className="font-serif text-3xl mb-6">Need more than tools?</h3>
              <p className="text-white/90 leading-relaxed mb-8">
                While our free tools provide valuable insights, they're just the beginning. Let our team of experts design and build a high-converting website tailored to your business goals.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom design that reflects your brand</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Conversion-optimized user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ongoing support and optimization</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-forest px-8 py-4 rounded-full font-medium hover:bg-white/95 transition-all"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContentSection />
    </div>
  );
};

export default Resources;
