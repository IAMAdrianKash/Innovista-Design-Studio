import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';
import { PageType } from '../App';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="pt-24 pb-12 bg-white relative overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full select-none pointer-events-none flex justify-center overflow-hidden">
         <span className="font-serif text-[18vw] md:text-[20vw] text-gray-50 leading-[0.8] translate-y-[10%] tracking-tighter">innovista</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider mb-6 text-gray-500">Services</h5>
            <ul className="space-y-3">
              <li><button onClick={() => handleNav('service-web-design')} className="text-sm text-gray-600 hover:text-dark text-left">Web Design</button></li>
              <li><button onClick={() => handleNav('service-lead-gen')} className="text-sm text-gray-600 hover:text-dark text-left">Lead Generation</button></li>
              <li><button onClick={() => handleNav('service-automation')} className="text-sm text-gray-600 hover:text-dark text-left">Automation</button></li>
              <li><button onClick={() => handleNav('service-seo')} className="text-sm text-gray-600 hover:text-dark text-left">SEO Optimization</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider mb-6 text-gray-500">Work</h5>
            <ul className="space-y-3">
              <li><button onClick={() => handleNav('case-studies')} className="text-sm text-gray-600 hover:text-dark text-left">Case Studies</button></li>
              <li><button onClick={() => handleNav('home')} className="text-sm text-gray-600 hover:text-dark text-left">Process</button></li>
              <li><button onClick={() => handleNav('services')} className="text-sm text-gray-600 hover:text-dark text-left">Pricing</button></li>
              <li><button onClick={() => handleNav('capabilities')} className="text-sm text-gray-600 hover:text-dark text-left">Capabilities</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider mb-6 text-gray-500">Company</h5>
            <ul className="space-y-3">
              <li><button onClick={() => handleNav('about')} className="text-sm text-gray-600 hover:text-dark">About Innovista</button></li>
              <li><button onClick={() => handleNav('insights')} className="text-sm text-gray-600 hover:text-dark">Insights (Blog)</button></li>
              <li><button onClick={() => handleNav('contact')} className="text-sm text-gray-600 hover:text-dark">Contact Us</button></li>
              <li><button onClick={() => handleNav('careers')} className="text-sm text-gray-600 hover:text-dark">Careers</button></li>
              <li><button onClick={() => handleNav('faq')} className="text-sm text-gray-600 hover:text-dark">FAQ</button></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider mb-6 text-gray-500">Legal</h5>
            <ul className="space-y-3">
              <li><button onClick={() => handleNav('privacy-policy')} className="text-sm text-gray-600 hover:text-dark text-left">Privacy Policy</button></li>
              <li><button onClick={() => handleNav('terms-of-service')} className="text-sm text-gray-600 hover:text-dark text-left">Terms of Service</button></li>
              <li><button onClick={() => handleNav('cookie-policy')} className="text-sm text-gray-600 hover:text-dark text-left">Cookie Policy</button></li>
            </ul>
          </div>
          
          <div className="col-span-2 lg:col-span-1 flex flex-col lg:items-end">
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-dark"><Twitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-dark"><Linkedin size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-dark"><Globe size={18} /></a>
            </div>
            <p className="text-sm text-gray-500 lg:text-right max-w-[200px]">
              Innovista Design Studio — Web design for Alberta businesses that need leads, not likes.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12 space-y-4 text-xs text-gray-400 leading-relaxed max-w-5xl">
          <p>© {new Date().getFullYear()} Innovista Design Studio. All rights reserved.</p>
          <p>Based in Edmonton, working with companies across Calgary, Red Deer, Lethbridge, and beyond.</p>
          <p>We specialize in businesses where the sale happens offline but starts online. We are not affiliated with Facebook, Google, or any other ad platform. Results vary depending on industry and market conditions, but our guarantee stands: we work until it converts.</p>
        </div>
      </div>
      
      {/* Fixed chat bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => handleNav('contact')} className="bg-forest text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center shadow-forest/30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;