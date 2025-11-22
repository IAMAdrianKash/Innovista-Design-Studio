'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Type, ArrowLeft, Download, RefreshCw, Heart } from 'lucide-react';
import ContentSection from '../ContentSection';

interface FontPair {
  id: string;
  heading: {
    name: string;
    family: string;
    weight: string;
  };
  body: {
    name: string;
    family: string;
    weight: string;
  };
  description: string;
  vibe: string[];
}

const FontPicker: React.FC = () => {
  const [selectedPair, setSelectedPair] = useState(0);
  const [customText, setCustomText] = useState('The quick brown fox jumps over the lazy dog');
  const [customHeading, setCustomHeading] = useState('Your Amazing Headline');
  const [favorites, setFavorites] = useState<number[]>([]);

  const fontPairs: FontPair[] = [
    {
      id: 'modern-elegant',
      heading: {
        name: 'Playfair Display',
        family: "'Playfair Display', serif",
        weight: '600'
      },
      body: {
        name: 'Plus Jakarta Sans',
        family: "'Plus Jakarta Sans', sans-serif",
        weight: '400'
      },
      description: 'Classic elegance meets modern clarity',
      vibe: ['Professional', 'Elegant', 'Trustworthy']
    },
    {
      id: 'bold-simple',
      heading: {
        name: 'Outfit',
        family: "'Outfit', sans-serif",
        weight: '700'
      },
      body: {
        name: 'Inter',
        family: "'Inter', sans-serif",
        weight: '400'
      },
      description: 'Clean, bold, and highly readable',
      vibe: ['Modern', 'Bold', 'Tech']
    },
    {
      id: 'creative-friendly',
      heading: {
        name: 'Poppins',
        family: "'Poppins', sans-serif",
        weight: '700'
      },
      body: {
        name: 'Open Sans',
        family: "'Open Sans', sans-serif",
        weight: '400'
      },
      description: 'Friendly and approachable design',
      vibe: ['Friendly', 'Creative', 'Approachable']
    },
    {
      id: 'luxury-refined',
      heading: {
        name: 'Cormorant Garamond',
        family: "'Cormorant Garamond', serif",
        weight: '600'
      },
      body: {
        name: 'Montserrat',
        family: "'Montserrat', sans-serif",
        weight: '400'
      },
      description: 'Sophisticated and refined aesthetic',
      vibe: ['Luxury', 'Refined', 'Editorial']
    },
    {
      id: 'tech-modern',
      heading: {
        name: 'Space Grotesk',
        family: "'Space Grotesk', sans-serif",
        weight: '700'
      },
      body: {
        name: 'DM Sans',
        family: "'DM Sans', sans-serif",
        weight: '400'
      },
      description: 'Contemporary tech-forward look',
      vibe: ['Tech', 'Modern', 'Innovative']
    },
    {
      id: 'minimal-clean',
      heading: {
        name: 'Sora',
        family: "'Sora', sans-serif",
        weight: '600'
      },
      body: {
        name: 'Work Sans',
        family: "'Work Sans', sans-serif",
        weight: '400'
      },
      description: 'Minimalist and clean design',
      vibe: ['Minimal', 'Clean', 'Simple']
    },
    {
      id: 'editorial-classic',
      heading: {
        name: 'Lora',
        family: "'Lora', serif",
        weight: '600'
      },
      body: {
        name: 'Roboto',
        family: "'Roboto', sans-serif",
        weight: '400'
      },
      description: 'Timeless editorial style',
      vibe: ['Editorial', 'Classic', 'Readable']
    },
    {
      id: 'contemporary-bold',
      heading: {
        name: 'Bebas Neue',
        family: "'Bebas Neue', sans-serif",
        weight: '400'
      },
      body: {
        name: 'Lato',
        family: "'Lato', sans-serif",
        weight: '400'
      },
      description: 'Bold headlines with balanced body',
      vibe: ['Bold', 'Contemporary', 'Impactful']
    }
  ];

  const currentPair = fontPairs[selectedPair];

  // Load Google Fonts dynamically
  useEffect(() => {
    const fonts = new Set<string>();
    fontPairs.forEach(pair => {
      fonts.add(pair.heading.name.replace(/\s+/g, '+'));
      fonts.add(pair.body.name.replace(/\s+/g, '+'));
    });

    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?${Array.from(fonts).map(f => `family=${f}:wght@400;600;700`).join('&')}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const toggleFavorite = (index: number) => {
    setFavorites(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const randomizePair = () => {
    const newIndex = Math.floor(Math.random() * fontPairs.length);
    setSelectedPair(newIndex);
  };

  const copyCSS = () => {
    const css = `/* Heading Font */
font-family: ${currentPair.heading.family};
font-weight: ${currentPair.heading.weight};

/* Body Font */
font-family: ${currentPair.body.family};
font-weight: ${currentPair.body.weight};`;

    navigator.clipboard.writeText(css);
    alert('CSS copied to clipboard!');
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
              <Type className="w-7 h-7" />
            </div>
            <span className="text-sm font-medium text-forest">FREE TOOL</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Font Picker
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            Discover beautiful font pairings for your website. Preview combinations in real-time and find the perfect typography that matches your brand's personality.
          </p>
        </motion.div>
      </section>

      {/* Font Preview Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-[2rem] p-6 md:p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
              <div>
                <h2 className="font-serif text-2xl text-[#1A1A1A] mb-2">
                  {currentPair.heading.name} + {currentPair.body.name}
                </h2>
                <p className="text-[#595959]">{currentPair.description}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={randomizePair}
                  className="px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-gray-400 transition-all flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Random</span>
                </button>
                <button
                  onClick={copyCSS}
                  className="px-6 py-3 rounded-full bg-forest text-white hover:bg-forest/90 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Copy CSS</span>
                </button>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              {currentPair.vibe.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-forest/10 text-forest text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Live Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 md:p-16 border-2 border-gray-200 mb-8"
          >
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-[#595959] mb-3">
                  Preview Heading
                </label>
                <input
                  type="text"
                  value={customHeading}
                  onChange={(e) => setCustomHeading(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none mb-4"
                />
                <h2
                  style={{
                    fontFamily: currentPair.heading.family,
                    fontWeight: currentPair.heading.weight
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight"
                >
                  {customHeading}
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#595959] mb-3">
                  Preview Body Text
                </label>
                <textarea
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none mb-4"
                />
                <p
                  style={{
                    fontFamily: currentPair.body.family,
                    fontWeight: currentPair.body.weight
                  }}
                  className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed"
                >
                  {customText}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-sm font-medium text-[#595959] mb-2">Heading Font</p>
                  <p className="font-medium text-[#1A1A1A]">{currentPair.heading.name}</p>
                  <p className="text-sm text-[#8C8C8C]">Weight: {currentPair.heading.weight}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#595959] mb-2">Body Font</p>
                  <p className="font-medium text-[#1A1A1A]">{currentPair.body.name}</p>
                  <p className="text-sm text-[#8C8C8C]">Weight: {currentPair.body.weight}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#595959] mb-2">Pairing Style</p>
                  <p className="font-medium text-[#1A1A1A]">{currentPair.description}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Font Pair Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-serif text-3xl text-[#1A1A1A] mb-8">All Font Pairs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fontPairs.map((pair, index) => (
                <div
                  key={pair.id}
                  onClick={() => setSelectedPair(index)}
                  className={`cursor-pointer bg-gray-50 rounded-2xl p-6 border-2 transition-all ${
                    selectedPair === index
                      ? 'border-forest shadow-lg'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4
                        style={{
                          fontFamily: pair.heading.family,
                          fontWeight: pair.heading.weight
                        }}
                        className="text-2xl text-[#1A1A1A] mb-1"
                      >
                        Heading
                      </h4>
                      <p className="text-xs text-[#8C8C8C]">{pair.heading.name}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(index);
                      }}
                      className="p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.includes(index)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div>
                  <p
                    style={{
                      fontFamily: pair.body.family,
                      fontWeight: pair.body.weight
                    }}
                    className="text-[#595959] mb-4"
                  >
                    Body text preview for this font pairing.
                  </p>
                  <p className="text-xs text-[#8C8C8C]">{pair.body.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-8">
                Typography <span className="italic font-light text-[#8C8C8C]">best practices</span>
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-medium text-[#1A1A1A] mb-2">Limit Your Font Families</h4>
                  <p className="text-[#595959]">
                    Stick to 2-3 font families maximum. Using too many fonts can make your design look cluttered and unprofessional.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-medium text-[#1A1A1A] mb-2">Consider Readability</h4>
                  <p className="text-[#595959]">
                    Body text should be at least 16px and have good line-height (1.5-1.7). Ensure sufficient contrast between text and background.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-medium text-[#1A1A1A] mb-2">Create Hierarchy</h4>
                  <p className="text-[#595959]">
                    Use font size, weight, and spacing to create clear visual hierarchy. Headings should be noticeably larger than body text.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-medium text-[#1A1A1A] mb-2">Test on Different Devices</h4>
                  <p className="text-[#595959]">
                    Always preview your font choices on mobile, tablet, and desktop to ensure they work well at all sizes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContentSection />
    </div>
  );
};

export default FontPicker;
