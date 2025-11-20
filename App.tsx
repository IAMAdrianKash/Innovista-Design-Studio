import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import Pricing from './components/Pricing';
import Process from './components/Process';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import MobileStickyBar from './components/ui/MobileStickyBar';

// ScrollToTop component - scrolls to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="bg-cream min-h-screen font-sans text-dark selection:bg-dark selection:text-white overflow-x-hidden relative">
          {/* Global UX Enhancements */}
          <ScrollProgress />

          <Navbar />

          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-design" element={<ServiceWebDesign />} />
              <Route path="/services/lead-generation" element={<ServiceLeadGen />} />
              <Route path="/services/automation" element={<ServiceAutomation />} />
              <Route path="/services/seo" element={<ServiceSEO />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/process" element={<Process />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
          <MobileStickyBar />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;