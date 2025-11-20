
import React from 'react';
import Hero from './Hero';
import LogoStrip from './LogoStrip';
import SolutionsGrid from './SolutionsGrid';
import Calculators from './Calculators';
import Features from './Features';
import Testimonials from './Testimonials';
import ContentSection from './ContentSection';
import ServicingArea from './ServicingArea';
import SEO from './SEO';

const Home: React.FC = () => {
  // Structured Data for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://twitter.com/innovista",
      "https://linkedin.com/company/innovista"
    ]
  };

  return (
    <>
      <SEO 
        title="Web Design Edmonton | Innovista Design Studio"
        description="Innovista builds conversion-focused websites for Alberta businesses. We specialize in high-performance web design, SEO, and automation for professional services."
        canonicalUrl="/"
        schema={localBusinessSchema}
      />
      <Hero />
      <LogoStrip />
      <SolutionsGrid />
      <Calculators />
      <Features />
      <ServicingArea />
      <Testimonials />
      <ContentSection />
    </>
  );
};

export default Home;
