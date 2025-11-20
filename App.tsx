
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ServiceWebDesign from './components/services/ServiceWebDesign';
import ServiceLeadGen from './components/services/ServiceLeadGen';
import ServiceAutomation from './components/services/ServiceAutomation';
import ServiceSEO from './components/services/ServiceSEO';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Careers from './components/Careers';
import FAQ from './components/FAQ';
import Capabilities from './components/Capabilities';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import CookiePolicy from './components/legal/CookiePolicy';
import Audit from './components/Audit';
import Insights from './components/Insights';
import Footer from './components/Footer';

export type PageType = 'home' | 'about' | 'services' | 'service-web-design' | 'service-lead-gen' | 'service-automation' | 'service-seo' | 'case-studies' | 'contact' | 'careers' | 'faq' | 'capabilities' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy' | 'audit' | 'insights';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-cream min-h-screen font-sans text-dark selection:bg-dark selection:text-white overflow-x-hidden">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'services' && <Services onNavigate={handleNavigate} />}
        {currentPage === 'service-web-design' && <ServiceWebDesign onNavigate={handleNavigate} />}
        {currentPage === 'service-lead-gen' && <ServiceLeadGen onNavigate={handleNavigate} />}
        {currentPage === 'service-automation' && <ServiceAutomation onNavigate={handleNavigate} />}
        {currentPage === 'service-seo' && <ServiceSEO onNavigate={handleNavigate} />}
        {currentPage === 'case-studies' && <CaseStudies onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'careers' && <Careers />}
        {currentPage === 'faq' && <FAQ />}
        {currentPage === 'capabilities' && <Capabilities />}
        {currentPage === 'privacy-policy' && <PrivacyPolicy />}
        {currentPage === 'terms-of-service' && <TermsOfService />}
        {currentPage === 'cookie-policy' && <CookiePolicy />}
        {currentPage === 'audit' && <Audit />}
        {currentPage === 'insights' && <Insights onNavigate={handleNavigate} />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
