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
  badge?: string;
}

const Resources: React.FC = () => {
  const tools: ResourceTool[] = [
    {
      title: 'SEO Analyzer',
      description: 'Comprehensive SEO analysis tool to audit your website\'s search engine optimization, identify issues, and get actionable recommendations.',
      icon: <Search className="w-7 h-7" />,
      href: '/resources/seo-analyzer',
      badge: 'Free Tool'
    },
    {
      title: 'Font Picker',
      description: 'Explore and pair beautiful fonts for your website. Preview font combinations in real-time and find the perfect typography match.',
      icon: <Type className="w-7 h-7" />,
      href: '/resources/font-picker',
      badge: 'Free Tool'
    },
    {
      title: 'Color Palette Generator',
      description: 'Generate harmonious color palettes for your brand. Get accessibility scores and export codes in multiple formats.',
      icon: <Palette className="w-7 h-7" />,
      href: '/resources/color-palette',
      badge: 'Coming Soon'
    },
    {
      title: 'Page Speed Checker',
      description: 'Test your website\'s loading speed and performance. Get detailed metrics and optimization suggestions to improve user experience.',
      icon: <Gauge className="w-7 h-7" />,
      href: '/resources/speed-checker',
      badge: 'Coming Soon'
    },
    {
      title: 'Meta Tag Generator',
      description: 'Create optimized meta tags for better SEO and social media sharing. Preview how your pages will look on different platforms.',
      icon: <FileText className="w-7 h-7" />,
      href: '/resources/meta-generator',
      badge: 'Coming Soon'
    },
    {
      title: 'Conversion Calculator',
      description: 'Calculate the potential ROI of improving your website\'s conversion rate. See how small improvements can make big impacts.',
      icon: <Zap className="w-7 h-7" />,
      href: '/resources/conversion-calculator',
      badge: 'Coming Soon'
    }
  ];

  return (
    <div className="pt-12">
      {/* Hero Section */}
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
            Access our collection of professional-grade tools designed to help you optimize your website, improve user experience, and drive better results.
          </p>
        </motion.div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-4">
              Available Tools
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl">
              Professional tools to analyze, optimize, and improve your online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={tool.badge === 'Coming Soon' ? '#' : tool.href}
                  className={`block group h-full ${tool.badge === 'Coming Soon' ? 'cursor-not-allowed' : ''}`}
                  onClick={(e) => tool.badge === 'Coming Soon' && e.preventDefault()}
                >
                  <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 md:p-10 h-full transition-all duration-300 hover:border-gray-400 hover:shadow-lg relative overflow-hidden">
                    {/* Badge */}
                    {tool.badge && (
                      <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-medium ${
                        tool.badge === 'Coming Soon'
                          ? 'bg-gray-200 text-gray-600'
                          : 'bg-forest/10 text-forest'
                      }`}>
                        {tool.badge}
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-forest transition-transform duration-300 group-hover:scale-110">
                      {tool.icon}
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3 pr-20">
                      {tool.title}
                    </h3>
                    <p className="text-[#595959] leading-relaxed mb-6">
                      {tool.description}
                    </p>

                    {/* Arrow Link */}
                    {tool.badge !== 'Coming Soon' && (
                      <div className="flex items-center gap-2 text-forest font-medium group-hover:gap-3 transition-all">
                        <span>Try it free</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
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
