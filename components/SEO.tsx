'use client'

import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, schema }) => {
  // SEO is now handled by Next.js metadata API in page components
  // This component is kept for backwards compatibility but does nothing
  return null;
};

export default SEO;