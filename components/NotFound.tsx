'use client'


import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SEO from './SEO';

const NotFound: React.FC = () => {
  const router = useRouter();
  return (
    <div className="pt-12 min-h-[80vh] flex items-center justify-center bg-cream">
      <SEO 
        title="Page Not Found | Innovista Design Studio"
        description="The page you are looking for does not exist."
      />
      <div className="text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-8xl md:text-9xl text-forest mb-4"
        >
          404
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading font-bold text-2xl md:text-3xl text-dark mb-6"
        >
          Page not found.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mb-8 max-w-md mx-auto"
        >
          The page you are looking for doesn't exist or has been moved. Let's get you back to business.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => router.push('/')}
          className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors"
        >
          Back to Home
        </motion.button>
      </div>
    </div>
  );
};

export default NotFound;
