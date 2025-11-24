'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Calendar, Mail } from 'lucide-react';

export default function ThankYouPage() {
  const [formType, setFormType] = useState<'contact' | 'audit' | null>(null);

  useEffect(() => {
    // Get form type from URL params
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') as 'contact' | 'audit' | null;
    setFormType(type);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-12">
      <section className="px-6 md:px-12 max-w-4xl mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Success Icon */}
          <div className="w-20 h-20 bg-forest rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} className="text-white" />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1A1A1A] tracking-tight mb-6">
            {formType === 'audit' ? (
              <>We're on it!</>
            ) : (
              <>Thank you!</>
            )}
          </h1>

          {/* Message based on form type */}
          {formType === 'audit' ? (
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-[#4A4A4A] leading-relaxed mb-8">
                Your free audit request has been received. We'll analyze your website and send you a personalized video audit within <strong className="text-dark">48 hours</strong>.
              </p>

              <div className="bg-gray-50 p-8 rounded-3xl text-left">
                <h2 className="font-heading font-bold text-xl mb-4 text-dark">What happens next?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">We analyze your site</h3>
                      <p className="text-gray-600">Our team will review your website's design, user experience, conversion points, and SEO.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">Record your video</h3>
                      <p className="text-gray-600">We'll create a personalized 15-minute Loom video walking through our findings.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">Deliver your audit</h3>
                      <p className="text-gray-600">You'll receive an email with your video audit and actionable recommendations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-[#4A4A4A] leading-relaxed mb-8">
                We've received your message and will get back to you within <strong className="text-dark">24 hours</strong>.
              </p>

              <div className="bg-gray-50 p-8 rounded-3xl">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="text-forest" size={24} />
                  <h2 className="font-heading font-bold text-xl text-dark">Check your inbox</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  You should receive a confirmation email shortly. If you don't see it, please check your spam folder.
                </p>
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-colors gap-2 group"
            >
              Back to Home
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-dark font-bold rounded-full hover:border-forest hover:text-forest transition-colors"
            >
              Browse Insights
            </Link>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-200 pt-12 max-w-2xl mx-auto">
            <p className="text-sm text-gray-500 mb-4">
              In the meantime, follow us on social media for tips and insights:
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://twitter.com/innovistadesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-forest transition-colors"
              >
                Twitter
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="https://linkedin.com/company/innovista-design-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-forest transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="https://instagram.com/innovistadesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-forest transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
