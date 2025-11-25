'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Globe, MapPin, Tag, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Partner, urlForImage } from '@/lib/sanity';
import Link from 'next/link';

interface PartnerProfileProps {
  partner: Partner;
}

// Helper function to extract YouTube/Vimeo embed URL
const getEmbedUrl = (url: string): string | null => {
  // YouTube
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const youtubeMatch = url.match(youtubeRegex);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // Vimeo
  const vimeoRegex = /(?:vimeo\.com\/)([0-9]+)/;
  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  return null;
};

const PartnerProfile: React.FC<PartnerProfileProps> = ({ partner }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const hasPortfolio = partner.portfolio && partner.portfolio.length > 0;

  const nextSlide = () => {
    if (hasPortfolio) {
      setCurrentSlide((prev) => (prev + 1) % partner.portfolio!.length);
    }
  };

  const prevSlide = () => {
    if (hasPortfolio) {
      setCurrentSlide((prev) => (prev - 1 + partner.portfolio!.length) % partner.portfolio!.length);
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightboxSlide = () => {
    if (hasPortfolio) {
      setLightboxIndex((prev) => (prev + 1) % partner.portfolio!.length);
    }
  };

  const prevLightboxSlide = () => {
    if (hasPortfolio) {
      setLightboxIndex((prev) => (prev - 1 + partner.portfolio!.length) % partner.portfolio!.length);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white pt-12 pb-24">
        {/* Breadcrumb */}
        <div className="px-6 md:px-12 max-w-[90rem] mx-auto mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/partners" className="hover:text-forest transition-colors">Partners</Link>
            <span>/</span>
            <span className="text-dark">{partner.name}</span>
          </div>
        </div>

        {/* Profile Header */}
        <section className="px-6 md:px-12 max-w-[90rem] mx-auto mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image */}
              {partner.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={urlForImage(partner.image).width(300).height(300).url()}
                    alt={partner.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover shadow-xl"
                  />
                </motion.div>
              )}

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-1"
              >
                <div className="flex items-start gap-3 mb-4">
                  <h1 className="font-serif text-4xl md:text-5xl text-dark">
                    {partner.name}
                  </h1>
                  {partner.verified && (
                    <div className="flex-shrink-0 w-8 h-8 bg-forest rounded-full flex items-center justify-center" title="Verified Partner">
                      <CheckCircle size={18} className="text-white" />
                    </div>
                  )}
                </div>

                <p className="text-xl text-gray-600 mb-6 italic">
                  {partner.tagline}
                </p>

                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  {partner.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {partner.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} className="text-gray-400" />
                      <span>{partner.location}</span>
                    </div>
                  )}
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-forest hover:underline"
                    >
                      <Globe size={16} />
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>

                {/* Specialties */}
                {partner.specialties && partner.specialties.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag size={16} className="text-gray-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Specialties
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {partner.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Request Intro Button */}
                <Link
                  href={`/partners?intro=${partner.slug.current}`}
                  className="inline-flex items-center gap-2 bg-forest text-white px-6 py-3 rounded-full font-medium hover:bg-forest/90 transition-all shadow-lg shadow-forest/20 hover:-translate-y-0.5"
                >
                  Request Introduction
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        {hasPortfolio && (
          <section className="px-6 md:px-12 max-w-[90rem] mx-auto">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8">Portfolio</h2>

                {/* Carousel */}
                <div className="relative">
                  <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        {partner.portfolio![currentSlide]._type === 'portfolioImage' && partner.portfolio![currentSlide].image ? (
                          <button
                            onClick={() => openLightbox(currentSlide)}
                            className="w-full h-full cursor-pointer group"
                          >
                            <img
                              src={urlForImage(partner.portfolio![currentSlide].image!).width(1200).height(675).url()}
                              alt={partner.portfolio![currentSlide].caption || `Portfolio item ${currentSlide + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </button>
                        ) : partner.portfolio![currentSlide]._type === 'portfolioVideo' ? (
                          <iframe
                            src={getEmbedUrl(partner.portfolio![currentSlide].videoUrl!) || ''}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <p className="text-gray-400">No media available</p>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {partner.portfolio!.length > 1 && (
                      <>
                        <button
                          onClick={prevSlide}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft size={20} className="text-dark" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
                          aria-label="Next slide"
                        >
                          <ChevronRight size={20} className="text-dark" />
                        </button>
                      </>
                    )}

                    {/* Slide Indicator */}
                    {partner.portfolio!.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                        {currentSlide + 1} / {partner.portfolio!.length}
                      </div>
                    )}
                  </div>

                  {/* Caption */}
                  {partner.portfolio![currentSlide].caption && (
                    <p className="text-center text-gray-600 mt-4 italic">
                      {partner.portfolio![currentSlide].caption}
                    </p>
                  )}

                  {/* Thumbnail Navigation */}
                  {partner.portfolio!.length > 1 && (
                    <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                      {partner.portfolio!.map((item, idx) => (
                        <button
                          key={item._key}
                          onClick={() => setCurrentSlide(idx)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            idx === currentSlide
                              ? 'border-forest scale-105'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          {item._type === 'portfolioImage' && item.image ? (
                            <img
                              src={urlForImage(item.image).width(160).height(160).url()}
                              alt={item.caption || `Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          ) : item._type === 'portfolioVideo' ? (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <span className="text-xs text-gray-500">Video</span>
                            </div>
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                              <span className="text-xs text-gray-400">N/A</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </div>

      {/* Lightbox for Images */}
      <AnimatePresence>
        {lightboxOpen && partner.portfolio![lightboxIndex]._type === 'portfolioImage' && partner.portfolio![lightboxIndex].image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <div className="relative max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={urlForImage(partner.portfolio![lightboxIndex].image!).width(2000).url()}
                alt={partner.portfolio![lightboxIndex].caption || 'Portfolio image'}
                className="w-full h-full object-contain"
              />

              {partner.portfolio!.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevLightboxSlide(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextLightboxSlide(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {partner.portfolio![lightboxIndex].caption && (
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm max-w-2xl text-center">
                  {partner.portfolio![lightboxIndex].caption}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PartnerProfile;
