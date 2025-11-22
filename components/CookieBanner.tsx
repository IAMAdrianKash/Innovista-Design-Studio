'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    handleClose();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    handleClose();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-[90rem] mx-auto">
          <div className="bg-white border-2 border-gray-200 rounded-[2rem] shadow-2xl overflow-hidden">
            <div className="relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                aria-label="Close cookie banner"
              >
                <X size={16} className="text-gray-600" />
              </button>

              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-forest/10 rounded-2xl flex items-center justify-center">
                      <Cookie className="w-7 h-7 text-forest" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pr-8 lg:pr-0">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-[#1A1A1A] mb-3">
                      We value your privacy
                    </h3>
                    <p className="text-[#595959] text-sm md:text-base leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                      By clicking "Accept All", you consent to our use of cookies.
                      {' '}
                      <Link
                        href="/cookie-policy"
                        className="text-forest font-medium hover:underline underline-offset-2"
                      >
                        Learn more
                      </Link>
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0">
                    <button
                      onClick={handleDecline}
                      className="px-6 py-3 rounded-full border-2 border-gray-200 text-[#1A1A1A] text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
                    >
                      Decline
                    </button>
                    <button
                      onClick={handleAccept}
                      className="px-6 py-3 rounded-full bg-forest text-white text-sm font-medium hover:bg-forest/90 transition-colors shadow-lg shadow-forest/20 whitespace-nowrap"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-forest via-forest/50 to-transparent opacity-20"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
