'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Globe, MapPin, Tag, ChevronLeft, ChevronRight, X, CheckCircle2 } from 'lucide-react';
import { Partner, urlForImage } from '@/lib/content';
import Link from 'next/link';

interface PartnerProfileProps {
  partner: Partner;
}

interface RequestIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  partnerName: string;
  partnerId: string;
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

// Request Intro Modal Component
const RequestIntroModal: React.FC<RequestIntroModalProps> = ({ isOpen, onClose, partnerName, partnerId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/partner-intro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          partnerName,
          partnerId,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setFormData({ name: '', email: '', company: '', message: '' });
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>

          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Request Sent!</h3>
              <p className="text-gray-600">
                We'll forward your intro request to {partnerName} and you should hear back within 24-48 hours.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">
                Request Introduction
              </h3>
              <p className="text-gray-600 mb-8">
                We'll connect you with <strong>{partnerName}</strong>. Fill out the form below and we'll make the intro.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    What do you need help with?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={3}
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors resize-none"
                    placeholder="Briefly describe your project or needs..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-forest text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-forest/90 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-forest/20 hover:shadow-forest/30 hover:-translate-y-1 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                  {!isSubmitting && (
                    <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                      <ChevronRight size={14} />
                    </div>
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const PartnerProfile: React.FC<PartnerProfileProps> = ({ partner }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [introModalOpen, setIntroModalOpen] = useState(false);

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
      <div className="min-h-screen bg-gradient-to-b from-cream via-white to-white pt-12 pb-24">
        {/* Breadcrumb */}
        <div className="px-6 md:px-12 max-w-[90rem] mx-auto mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/partners" className="hover:text-forest transition-colors">Partners</Link>
            <span>/</span>
            <span className="text-dark">{partner.name}</span>
          </div>
        </div>

        {/* Profile Header */}
        <section className="px-6 md:px-12 max-w-[90rem] mx-auto mb-20">
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
                  <div className="relative">
                    <img
                      src={urlForImage(partner.image).width(300).height(300).url()}
                      alt={partner.name}
                      className="w-44 h-44 md:w-56 md:h-56 rounded-3xl object-cover shadow-2xl ring-4 ring-white"
                    />
                    {partner.verified && (
                      <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-forest rounded-full flex items-center justify-center shadow-lg ring-4 ring-white" title="Verified Partner">
                        <CheckCircle size={24} className="text-white" />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-1"
              >
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark mb-4 leading-tight">
                  {partner.name}
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 mb-6 italic font-light">
                  {partner.tagline}
                </p>

                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                  {partner.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {partner.location && (
                    <div className="flex items-center gap-2 text-base text-gray-600">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <MapPin size={18} className="text-gray-500" />
                      </div>
                      <span>{partner.location}</span>
                    </div>
                  )}
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base text-forest hover:text-forest/80 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-forest/10 group-hover:bg-forest/20 flex items-center justify-center transition-colors">
                        <Globe size={18} />
                      </div>
                      <span className="font-medium">Visit Website</span>
                    </a>
                  )}
                </div>

                {/* Specialties */}
                {partner.specialties && partner.specialties.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag size={18} className="text-gray-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Specialties
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {partner.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-forest/30 hover:shadow-sm transition-all"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Request Intro Button */}
                <button
                  onClick={() => setIntroModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-forest text-white px-8 py-4 rounded-full font-medium text-base hover:bg-forest/90 transition-all shadow-xl shadow-forest/20 hover:shadow-2xl hover:shadow-forest/30 hover:-translate-y-1 duration-300 group"
                >
                  Request Introduction
                  <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={16} />
                  </div>
                </button>
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
                <div className="mb-12">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Portfolio</h2>
                  <p className="text-gray-500 text-lg">Showcasing their work</p>
                </div>

                {/* Carousel */}
                <div className="relative">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
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
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 hover:shadow-2xl z-10 backdrop-blur-sm"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft size={22} className="text-dark" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 hover:shadow-2xl z-10 backdrop-blur-sm"
                          aria-label="Next slide"
                        >
                          <ChevronRight size={22} className="text-dark" />
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
                    <p className="text-center text-gray-600 mt-6 italic text-base md:text-lg">
                      {partner.portfolio![currentSlide].caption}
                    </p>
                  )}

                  {/* Thumbnail Navigation */}
                  {partner.portfolio!.length > 1 && (
                    <div className="flex gap-3 mt-8 overflow-x-auto pb-2 scrollbar-hide">
                      {partner.portfolio!.map((item, idx) => (
                        <button
                          key={item._key}
                          onClick={() => setCurrentSlide(idx)}
                          className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                            idx === currentSlide
                              ? 'border-forest scale-105 shadow-lg ring-2 ring-forest/20'
                              : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-300'
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

      {/* Request Intro Modal */}
      <RequestIntroModal
        isOpen={introModalOpen}
        onClose={() => setIntroModalOpen(false)}
        partnerName={partner.name}
        partnerId={partner._id}
      />
    </>
  );
};

export default PartnerProfile;
