'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Globe,
  FileText,
  Image as ImageIcon,
  Link2,
  Smartphone,
  ArrowLeft,
  Loader2
} from 'lucide-react';
import ContentSection from '../ContentSection';

interface SEOIssue {
  type: 'success' | 'warning' | 'error';
  category: string;
  message: string;
  impact: 'high' | 'medium' | 'low';
}

interface SEOResults {
  url: string;
  title: string;
  description: string;
  score: number;
  issues: SEOIssue[];
  meta: {
    hasTitle: boolean;
    hasDescription: boolean;
    hasViewport: boolean;
    hasOgTags: boolean;
    titleLength: number;
    descriptionLength: number;
  };
}

const SEOAnalyzer: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<SEOResults | null>(null);
  const [error, setError] = useState('');

  const analyzeURL = async () => {
    if (!url) {
      setError('Please enter a valid URL');
      return;
    }

    // Basic URL validation
    let urlToAnalyze = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      urlToAnalyze = 'https://' + url;
    }

    try {
      new URL(urlToAnalyze);
    } catch {
      setError('Please enter a valid URL');
      return;
    }

    setError('');
    setIsAnalyzing(true);

    // Simulate API call - in production, this would call a backend endpoint
    setTimeout(() => {
      // Mock analysis results
      const mockResults: SEOResults = {
        url: urlToAnalyze,
        title: 'Example Website - Home Page',
        description: 'This is an example meta description for the analyzed website.',
        score: 72,
        meta: {
          hasTitle: true,
          hasDescription: true,
          hasViewport: true,
          hasOgTags: false,
          titleLength: 35,
          descriptionLength: 68,
        },
        issues: [
          {
            type: 'success',
            category: 'Title Tag',
            message: 'Title tag is present and optimal length (35 characters)',
            impact: 'high'
          },
          {
            type: 'success',
            category: 'Meta Description',
            message: 'Meta description is present and good length (68 characters)',
            impact: 'high'
          },
          {
            type: 'success',
            category: 'Mobile Friendly',
            message: 'Viewport meta tag is present',
            impact: 'high'
          },
          {
            type: 'error',
            category: 'Open Graph',
            message: 'Missing Open Graph tags for social media sharing',
            impact: 'medium'
          },
          {
            type: 'warning',
            category: 'Headings',
            message: 'Multiple H1 tags found - should only have one per page',
            impact: 'medium'
          },
          {
            type: 'warning',
            category: 'Images',
            message: '3 images missing alt attributes',
            impact: 'medium'
          },
          {
            type: 'error',
            category: 'Page Speed',
            message: 'Page load time is 4.2s - should be under 3s',
            impact: 'high'
          },
          {
            type: 'warning',
            category: 'SSL Certificate',
            message: 'SSL certificate expires in 15 days',
            impact: 'low'
          }
        ]
      };

      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-50 border-green-200';
    if (score >= 60) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getImpactBadge = (impact: string) => {
    const colors = {
      high: 'bg-red-100 text-red-700',
      medium: 'bg-yellow-100 text-yellow-700',
      low: 'bg-gray-100 text-gray-700'
    };
    return (
      <span className={`text-xs px-2 py-1 rounded-full ${colors[impact as keyof typeof colors]}`}>
        {impact.toUpperCase()}
      </span>
    );
  };

  return (
    <div className="pt-12">
      {/* Breadcrumb */}
      <div className="px-6 md:px-12 max-w-[90rem] mx-auto mb-8">
        <Link href="/resources" className="inline-flex items-center gap-2 text-[#595959] hover:text-forest transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Resources</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center text-forest">
              <Search className="w-7 h-7" />
            </div>
            <span className="text-sm font-medium text-forest">FREE TOOL</span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            SEO Analyzer
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            Get a comprehensive analysis of your website's SEO health. Identify issues, discover opportunities, and get actionable recommendations to improve your search rankings.
          </p>
        </motion.div>
      </section>

      {/* Analysis Tool Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {!results ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12">
                <h2 className="font-heading font-bold text-3xl text-[#1A1A1A] mb-6">
                  Analyze Your Website
                </h2>
                <p className="text-[#595959] mb-8">
                  Enter your website URL below to get a detailed SEO analysis. We'll check your meta tags, content structure, mobile-friendliness, and more.
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="url-input" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                      Website URL
                    </label>
                    <div className="flex gap-3">
                      <input
                        id="url-input"
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && analyzeURL()}
                        placeholder="example.com"
                        className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all"
                        disabled={isAnalyzing}
                      />
                      <button
                        onClick={analyzeURL}
                        disabled={isAnalyzing}
                        className="bg-forest text-white px-8 py-4 rounded-full font-medium hover:bg-forest/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Analyzing...</span>
                          </>
                        ) : (
                          <>
                            <Search className="w-5 h-5" />
                            <span>Analyze</span>
                          </>
                        )}
                      </button>
                    </div>
                    {error && (
                      <p className="text-red-600 text-sm mt-2">{error}</p>
                    )}
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h3 className="font-medium text-[#1A1A1A] mb-3">What we analyze:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-[#595959]">
                        <CheckCircle2 className="w-4 h-4 text-forest" />
                        <span className="text-sm">Meta tags & descriptions</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#595959]">
                        <CheckCircle2 className="w-4 h-4 text-forest" />
                        <span className="text-sm">Mobile responsiveness</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#595959]">
                        <CheckCircle2 className="w-4 h-4 text-forest" />
                        <span className="text-sm">Page speed & performance</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#595959]">
                        <CheckCircle2 className="w-4 h-4 text-forest" />
                        <span className="text-sm">Image optimization</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#595959]">
                        <CheckCircle2 className="w-4 h-4 text-forest" />
                        <span className="text-sm">Content structure</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#595959]">
                        <CheckCircle2 className="w-4 h-4 text-forest" />
                        <span className="text-sm">Social media tags</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Score Card */}
              <div className={`rounded-[2rem] p-8 md:p-12 border-2 ${getScoreBgColor(results.score)}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-sm font-medium text-[#595959] mb-2">SEO SCORE</p>
                    <h2 className={`font-heading font-bold text-6xl md:text-7xl ${getScoreColor(results.score)} mb-2`}>
                      {results.score}
                      <span className="text-3xl">/100</span>
                    </h2>
                    <p className="text-[#1A1A1A] font-medium">{results.url}</p>
                  </div>
                  <button
                    onClick={() => {
                      setResults(null);
                      setUrl('');
                    }}
                    className="bg-white text-[#1A1A1A] px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all border border-gray-200"
                  >
                    Analyze Another Site
                  </button>
                </div>
              </div>

              {/* Issues List */}
              <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-200">
                <h3 className="font-heading font-bold text-3xl text-[#1A1A1A] mb-8">Detailed Analysis</h3>

                <div className="space-y-4">
                  {results.issues.map((issue, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {getIssueIcon(issue.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-medium text-[#1A1A1A]">{issue.category}</h4>
                          {getImpactBadge(issue.impact)}
                        </div>
                        <p className="text-[#595959] text-sm">{issue.message}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-forest" />
                    <h4 className="font-medium text-[#1A1A1A]">Content</h4>
                  </div>
                  <p className="text-sm text-[#595959]">Title: {results.meta.titleLength} chars</p>
                  <p className="text-sm text-[#595959]">Description: {results.meta.descriptionLength} chars</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="w-6 h-6 text-forest" />
                    <h4 className="font-medium text-[#1A1A1A]">Mobile</h4>
                  </div>
                  <p className="text-sm text-[#595959]">
                    {results.meta.hasViewport ? '✓ Mobile optimized' : '✗ Not mobile friendly'}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-forest" />
                    <h4 className="font-medium text-[#1A1A1A]">Social</h4>
                  </div>
                  <p className="text-sm text-[#595959]">
                    {results.meta.hasOgTags ? '✓ OG tags present' : '✗ Missing OG tags'}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-forest text-white rounded-[2rem] p-8 md:p-12">
                <h3 className="font-heading font-bold text-3xl mb-4">Need help fixing these issues?</h3>
                <p className="text-white/90 mb-6 max-w-2xl">
                  Our team can audit your website in detail and implement all the necessary improvements to boost your search rankings and drive more organic traffic.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-forest px-8 py-4 rounded-full font-medium hover:bg-white/95 transition-all"
                >
                  <span>Get Professional Help</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <ContentSection />
    </div>
  );
};

export default SEOAnalyzer;
