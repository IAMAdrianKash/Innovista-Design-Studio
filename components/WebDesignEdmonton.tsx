'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Check, ChevronRight, ArrowRight, Monitor, Smartphone, Zap, TrendingUp, Award, Clock, DollarSign, Users, Plus, Minus } from 'lucide-react';
import { getFeaturedCaseStudies, type CaseStudy, urlForImage } from '@/lib/sanity';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-gray-50 border-dark/10' : 'bg-white hover:border-gray-300'}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
      >
        <span className={`font-heading font-bold text-xl md:text-2xl ${isOpen ? 'text-dark' : 'text-gray-700'}`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-dark text-white' : 'bg-gray-100 text-gray-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-8 pb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WebDesignEdmonton: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    // Fetch featured case studies
    getFeaturedCaseStudies(2).then(studies => {
      setCaseStudies(studies);
    }).catch(err => {
      console.error('Failed to fetch case studies:', err);
    });
  }, []);

  const faqs = [
    {
      question: "How much does web design cost in Edmonton?",
      answer: "Our custom web design projects in Edmonton typically range from $8,000 to $30,000+, depending on complexity and features. Unlike other Edmonton web design agencies, we provide transparent pricing upfront with no hidden fees. Every project includes custom UI/UX design, React/Next.js development, SEO optimization, and 30 days of post-launch support. We also offer flexible payment plans for Alberta businesses."
    },
    {
      question: "What's the timeline for a custom website in Edmonton?",
      answer: "Most web design projects in Edmonton take 6-12 weeks from kickoff to launch. Our process includes: Discovery & Strategy (1 week), Design & Prototyping (2-3 weeks), Development (3-5 weeks), Testing & Refinement (1-2 weeks), and Launch + Training (1 week). We work with businesses across Edmonton, Sherwood Park, and St. Albert, providing regular updates throughout the entire process."
    },
    {
      question: "Do you work with businesses outside Edmonton?",
      answer: "Absolutely! While we're based in Edmonton and serve many local Alberta businesses, we work with clients across Canada and internationally. Our web design process is built for remote collaboration, with regular video calls, shared project boards, and clear communication. Whether you're in Downtown Edmonton, Calgary, Vancouver, or anywhere else, we've got you covered."
    },
    {
      question: "What makes a good web design agency in Edmonton?",
      answer: "A good Edmonton web design agency should focus on results, not just aesthetics. Look for: transparent pricing with no hidden fees, proven track record with local businesses, expertise in conversion optimization, modern technology (React, Next.js), SEO knowledge, and clear communication. Unlike traditional Edmonton web design companies that lock you into long contracts, we believe in earning your business through results. That's why we offer flexible terms and prioritize your ROI."
    },
    {
      question: "Do you offer SEO services with web design?",
      answer: "Yes! Every website we build includes on-page SEO optimization as standard. This includes keyword research, meta tags, structured data, site speed optimization, and mobile responsiveness. For businesses that want ongoing SEO and content marketing, we also offer monthly retainer packages that include link building, content creation, and technical SEO audits."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely. Many of our Edmonton clients come to us with outdated websites that aren't generating leads. We'll audit your current site, identify conversion bottlenecks, and build a new website that turns visitors into customers. We can also migrate your existing content and set up proper redirects to preserve your SEO rankings."
    }
  ];

  // Structured Data for Local Business Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design Edmonton",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Innovista Design Studio",
      "image": "https://innovista.design/logo.png",
      "url": "https://innovista.design",
      "telephone": "",
      "email": "hello@innovista.design",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Edmonton",
        "addressRegion": "AB",
        "addressCountry": "CA"
      },
      "priceRange": "$$$",
      "areaServed": {
        "@type": "City",
        "name": "Edmonton"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Edmonton"
      },
      {
        "@type": "City",
        "name": "Sherwood Park"
      },
      {
        "@type": "City",
        "name": "St. Albert"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

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

  return (
    <>
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-12">
        {/* Hero Section - Above the Fold */}
        <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#1A1A1A] font-bold uppercase tracking-wider text-xs">Edmonton, Alberta</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-gray-500 text-xs uppercase tracking-wider">Web Design</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
              Edmonton Web Design<br />
              That Turns Visitors<br />
              Into <span className="italic font-light text-[#8C8C8C]">Clients</span>
            </h1>

            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl mb-12">
              We're an Edmonton web design agency that builds conversion-focused websites for professional services and B2B companies across Alberta. No bloated templates. No long-term contracts. Just websites that work.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/audit"
                className="group bg-forest text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-forest/90 transition-all flex items-center gap-3 shadow-2xl shadow-forest/20 hover:shadow-forest/30 hover:-translate-y-1 duration-300"
              >
                Get Your Free Website Audit
                <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={14} />
                </div>
              </Link>

              <Link
                href="/case-studies"
                className="group px-8 py-4 rounded-full text-[15px] font-medium text-[#1A1A1A] border border-gray-200 hover:border-gray-400 hover:bg-white transition-all flex items-center gap-2"
              >
                View Selected Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
              </Link>
            </div>

            {/* Client Logos */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Trusted by Edmonton Businesses</p>
              <div className="flex flex-wrap gap-8 opacity-40 grayscale">
                <span className="font-bold text-xl">Local Law Firms</span>
                <span className="font-bold text-xl">Engineering</span>
                <span className="font-bold text-xl">Healthcare</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Why Edmonton Businesses Choose Innovista */}
        <section className="py-20 bg-white border-y border-gray-200">
          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                Why Edmonton Businesses Choose Innovista
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Unlike traditional Edmonton web design agencies that focus on awards and aesthetics, we focus on what matters: results. Our websites are built to generate leads, drive conversions, and grow your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-[#1A1A1A]" />,
                  title: "Blazing Fast Performance",
                  desc: "We code with React & Next.js to ensure your site loads in under a second. Speed isn't just a luxury for Edmonton businesses—it's a ranking factor that impacts your bottom line."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-[#1A1A1A]" />,
                  title: "Conversion-Focused Design",
                  desc: "Every button, layout, and headline is engineered to guide users towards action. We've helped Edmonton companies increase their conversion rates by an average of 187%."
                },
                {
                  icon: <DollarSign className="w-8 h-8 text-[#1A1A1A]" />,
                  title: "Transparent Pricing",
                  desc: "No surprise fees. No hidden costs. No long-term contracts. We provide clear, upfront pricing and flexible payment plans for Alberta businesses. You'll know exactly what you're paying for."
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

        {/* Our Web Design Process */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                Our Web Design Process
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We've refined our process over years of working with Edmonton businesses. Here's exactly how we transform your online presence:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  desc: "We start by understanding your business goals, target audience, and competitive landscape in Edmonton. This includes a deep-dive into your current website's analytics and conversion data.",
                  timeline: "1 week"
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  desc: "Our design team creates custom mockups in Figma, focusing on user experience and conversion optimization. You'll see exactly how your website will look before we write a single line of code.",
                  timeline: "2-3 weeks"
                },
                {
                  step: "03",
                  title: "Development",
                  desc: "We build your website using React and Next.js for maximum performance and SEO. Every element is coded by hand—no bloated templates or page builders that slow your site down.",
                  timeline: "3-5 weeks"
                },
                {
                  step: "04",
                  title: "Testing & Launch",
                  desc: "Before going live, we test everything: mobile responsiveness, page speed, cross-browser compatibility, and conversion tracking. We also train your team on how to manage content.",
                  timeline: "1-2 weeks"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100">
                  <div className="text-5xl font-serif font-light text-gray-300 mb-4">{item.step}</div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-forest">
                    <Clock size={16} />
                    {item.timeline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve in Edmonton */}
        <section className="py-24 bg-white border-y border-gray-200">
          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                Industries We Serve in Edmonton
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We don't build websites for everyone. We specialize in professional services and B2B companies across Alberta where trust, technical capability, and conversion optimization are critical.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-2xl mb-4">Professional Services</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Edmonton's legal, accounting, and consulting firms demand websites that convey authority and generate qualified leads. We've helped professional services across Alberta improve their online presence and client acquisition.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full"></div>
                    Law Firms
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full"></div>
                    Accounting & Finance
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full"></div>
                    Management Consulting
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-2xl mb-4">Industrial & B2B</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Alberta's industrial sector needs websites that showcase technical expertise and support long B2B sales cycles. We build platforms that educate buyers and streamline RFP processes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full"></div>
                    Engineering Firms
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full"></div>
                    Manufacturing
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full"></div>
                    Energy & Resources
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-2xl mb-4">Local Businesses</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you're in Downtown Edmonton, West Edmonton, or the Ice District, we help local businesses compete online with professional web design that drives foot traffic and online bookings.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full"></div>
                    Healthcare & Dental
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full"></div>
                    Real Estate
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full"></div>
                    Retail & Hospitality
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Edmonton Web Design Services */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                Edmonton Web Design Services
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Every custom web design project includes these core services. No upsells. No hidden fees. Just everything you need to succeed online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {[
                "Custom UI/UX Design in Figma",
                "React & Next.js Development",
                "Mobile-First Responsive Design",
                "On-Page SEO Optimization",
                "CMS Integration (Sanity/WordPress)",
                "Google Analytics 4 Setup",
                "Contact Forms & CRM Integration",
                "SSL Certificate & Security",
                "Speed Optimization (Core Web Vitals)",
                "Cross-Browser Testing",
                "Hosting Setup & Configuration",
                "Content Migration (if needed)",
                "Team Training & Documentation",
                "30 Days Post-Launch Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100">
                  <div className="w-6 h-6 rounded-full bg-forest/10 flex items-center justify-center text-forest shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-base md:text-lg font-medium text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Edmonton Projects */}
        <section className="py-24 bg-white border-y border-gray-200">
          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                Recent Edmonton Projects
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                See how we've helped Edmonton and Alberta businesses transform their online presence and drive measurable results.
              </p>
            </div>

            {/* Case Study Highlights - Using Real Data */}
            {caseStudies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {caseStudies.map((study, idx) => {
                  const firstResult = study.results[0];
                  return (
                    <Link key={study._id} href={`/case-studies/${study.slug.current}`}>
                      <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer group">
                        <div className="mb-6">
                          <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {industryLabels[study.industry] || study.industry}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 group-hover:underline decoration-2 underline-offset-4 transition-all">
                          {study.client}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {study.excerpt}
                        </p>
                        {study.results.length > 0 && (
                          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                            {study.results.slice(0, 2).map((result, i) => (
                              <div key={i}>
                                <div className="font-heading font-bold text-4xl text-forest mb-1">{result.value}</div>
                                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{result.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <div className="mb-6">
                    <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Law Firm
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                    Edmonton Legal Practice
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Redesigned their website to focus on practice area authority and lead generation. Implemented strategic CTAs and improved mobile experience for on-the-go clients.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                    <div>
                      <div className="font-heading font-bold text-4xl text-forest mb-1">240%</div>
                      <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Lead Increase</div>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-4xl text-forest mb-1">1.2s</div>
                      <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Page Load Time</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl">
                  <div className="mb-6">
                    <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Engineering
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
                    Alberta Engineering Firm
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Built a conversion-focused website that showcases technical capabilities and streamlines the RFP process for industrial clients across Western Canada.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                    <div>
                      <div className="font-heading font-bold text-4xl text-forest mb-1">187%</div>
                      <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Qualified Leads</div>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-4xl text-forest mb-1">65%</div>
                      <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Lower Bounce Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center">
              <Link
                href="/case-studies"
                className="group bg-forest text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-forest/90 transition-all inline-flex items-center gap-3 shadow-2xl shadow-forest/20 hover:shadow-forest/30 hover:-translate-y-1 duration-300"
              >
                View All Case Studies
                <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                What Makes Us Different From Other Edmonton Web Design Agencies
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We're not your typical web design company. Here's what sets us apart from other Edmonton agencies:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              <div className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="mb-4">
                  <Award className="w-10 h-10 text-forest" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">We Focus on ROI, Not Awards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unlike traditional Edmonton web design agencies that chase design awards, we measure success by your business results. More leads. Higher conversions. Better ROI.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="mb-4">
                  <DollarSign className="w-10 h-10 text-forest" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">Transparent Pricing, No Surprises</h3>
                <p className="text-gray-600 leading-relaxed">
                  No hidden fees. No surprise charges. No long-term contracts. We provide clear, upfront pricing and flexible payment plans. You'll know exactly what you're paying for.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="mb-4">
                  <Users className="w-10 h-10 text-forest" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">Local Team, Personal Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're based in Edmonton and understand the Alberta business landscape. You'll work directly with our team—no offshore developers, no account managers, no corporate bureaucracy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="mb-4">
                  <Zap className="w-10 h-10 text-forest" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">Modern Technology Stack</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build with React and Next.js, not bloated WordPress templates. This means faster load times, better SEO, and a website that won't slow down as you grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location-Specific Content */}
        <section className="py-24 bg-white border-y border-gray-200">
          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-8 text-center">
                Serving Edmonton, Sherwood Park, St. Albert, and Beyond
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                  Our team works with businesses across Alberta, with deep roots in Edmonton's professional services community. Whether you're located in <strong>Downtown Edmonton</strong>, <strong>West Edmonton</strong>, the <strong>Ice District</strong>, <strong>Sherwood Park</strong>, or <strong>St. Albert</strong>, we're here to help you succeed online.
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                  Edmonton businesses face unique challenges: competing with national brands, standing out in crowded markets, and converting visitors who have countless options. That's why we don't use cookie-cutter templates or one-size-fits-all strategies.
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Every website we build is custom-designed for your specific industry, target audience, and business goals. We take the time to understand what makes your business different and translate that into a digital presence that drives real results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Everything you need to know about working with our Edmonton web design team.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                  index={idx}
                  isOpen={openFAQ === idx}
                  onToggle={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Free Website Audit */}
        <section className="py-24 bg-forest text-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Free Website Audit for Edmonton Businesses
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
              Not sure if your current website is working for you? We'll analyze your site and show you exactly what's holding you back—and how to fix it. No cost. No obligation.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl mb-12 text-left max-w-2xl mx-auto">
              <h3 className="font-heading font-bold text-2xl mb-6">What's Included in Your Free Audit:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-white shrink-0 mt-1" />
                  <span className="text-lg">15-minute personalized video walkthrough of your website</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-white shrink-0 mt-1" />
                  <span className="text-lg">Conversion bottleneck analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-white shrink-0 mt-1" />
                  <span className="text-lg">Page speed and mobile usability report</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-white shrink-0 mt-1" />
                  <span className="text-lg">SEO opportunities and quick wins</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-white shrink-0 mt-1" />
                  <span className="text-lg">Actionable recommendations you can implement today</span>
                </li>
              </ul>
            </div>

            <Link
              href="/audit"
              className="group bg-white text-forest px-10 py-5 rounded-full text-[15px] font-medium hover:bg-gray-100 transition-all inline-flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:-translate-y-1 duration-300"
            >
              Get Your Free Audit Now
              <div className="bg-forest/10 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ChevronRight size={14} className="text-forest" />
              </div>
            </Link>

            <p className="text-white/60 mt-6 text-sm">
              No sales pitch. No pressure. Just honest, actionable advice for your Edmonton business.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDesignEdmonton;
