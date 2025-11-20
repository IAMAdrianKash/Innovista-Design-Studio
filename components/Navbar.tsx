
import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, Monitor, TrendingUp, Zap, BarChart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageType } from '../App';

interface NavbarProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const serviceItems = [
    { 
      name: 'Web Design', 
      id: 'service-web-design' as const, 
      icon: <Monitor size={20} className="text-[#1A1A1A]" />,
      desc: 'High-performance sites that convert.'
    },
    { 
      name: 'Lead Generation', 
      id: 'service-lead-gen' as const, 
      icon: <TrendingUp size={20} className="text-[#1A1A1A]" />,
      desc: 'Funnels and CRO strategies.'
    },
    { 
      name: 'Automation', 
      id: 'service-automation' as const, 
      icon: <Zap size={20} className="text-[#1A1A1A]" />,
      desc: 'CRM integrations & workflows.'
    },
    { 
      name: 'SEO Optimization', 
      id: 'service-seo' as const, 
      icon: <BarChart size={20} className="text-[#1A1A1A]" />,
      desc: 'Technical SEO & local rankings.'
    },
  ];

  const handleNav = (page: PageType) => {
    onNavigate(page);
    setIsOpen(false);
    setHoveredLink(null);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md transition-all duration-300 border-b border-gray-200" onMouseLeave={() => setHoveredLink(null)}>
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between relative">
        
        {/* Left Side: Logo */}
        <div className="flex-shrink-0 cursor-pointer flex items-center pb-1 z-20" onClick={() => handleNav('home')}>
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A] leading-none">
            Innovista<span className="text-forest">.</span>
          </span>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden xl:flex absolute left-1/2 top-0 -translate-x-1/2 h-full items-center gap-8 pt-1 z-10">
            <div className="h-full flex items-center">
              <button 
                onClick={() => handleNav('home')}
                className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-[#1A1A1A]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
              >
                Home
              </button>
            </div>
            
            <div className="h-full flex items-center">
              <button 
                onClick={() => handleNav('about')}
                className={`text-sm font-medium transition-colors ${currentPage === 'about' ? 'text-[#1A1A1A]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
              >
                About
              </button>
            </div>

            {/* Services Mega Menu Trigger */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setHoveredLink('services')}
            >
              <button 
                onClick={() => handleNav('services')}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${['services', 'service-web-design', 'service-lead-gen', 'service-automation', 'service-seo'].includes(currentPage) ? 'text-[#1A1A1A]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${hoveredLink === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {/* Desktop Mega Menu */}
              <AnimatePresence>
                {hoveredLink === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 overflow-hidden cursor-default"
                    style={{ marginTop: '0px' }}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 opacity-20"></div>
                     <div className="grid grid-cols-2 gap-4">
                        {serviceItems.map((item) => (
                          <div 
                            key={item.id}
                            onClick={(e) => { e.stopPropagation(); handleNav(item.id); }}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                          >
                            <div className="mt-1 p-2 bg-white border border-gray-100 rounded-lg shadow-sm group-hover:scale-110 transition-transform group-hover:border-gray-300">
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="font-sans font-semibold text-sm text-dark group-hover:text-black transition-colors">{item.name}</h4>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                     </div>
                     <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                        <button 
                          onClick={() => handleNav('services')}
                          className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-dark transition-colors"
                        >
                          View All Services
                        </button>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-full flex items-center">
              <button 
                onClick={() => handleNav('case-studies')}
                className={`text-sm font-medium transition-colors ${currentPage === 'case-studies' ? 'text-[#1A1A1A]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
              >
                Work
              </button>
            </div>

            <div className="h-full flex items-center">
              <button 
                onClick={() => handleNav('insights')}
                className={`text-sm font-medium transition-colors ${currentPage === 'insights' ? 'text-[#1A1A1A]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
              >
                Insights
              </button>
            </div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4 z-20">
          <button 
            onClick={() => handleNav('contact')}
            className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-[#1A1A1A] text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </button>
          <button 
            onClick={() => handleNav('audit')}
            className="px-5 py-2.5 rounded-full bg-forest text-white text-sm font-medium hover:bg-forest/90 transition-colors shadow-lg shadow-forest/20"
          >
            Get Free Audit
          </button>
          <button className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center hover:bg-forest/90 transition-colors shadow-lg shadow-forest/20">
            <Search size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden p-2 text-[#1A1A1A] z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-cream border-t border-gray-200 overflow-hidden absolute w-full shadow-xl left-0 max-h-[90vh] overflow-y-auto z-0"
          >
            <div className="flex flex-col p-6 gap-1">
              <button 
                onClick={() => handleNav('home')}
                className="text-base font-medium text-[#1A1A1A] text-left py-3 border-b border-gray-200"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('about')}
                className="text-base font-medium text-[#1A1A1A] text-left py-3 border-b border-gray-200"
              >
                About
              </button>
              
              {/* Mobile Accordion for Services */}
              <div className="border-b border-gray-200">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-base font-medium text-[#1A1A1A] py-3"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 pb-2 space-y-2"
                    >
                      {serviceItems.map((item) => (
                        <button 
                          key={item.id}
                          onClick={() => handleNav(item.id)}
                          className="block w-full text-left text-sm text-gray-600 py-2 hover:text-dark"
                        >
                          {item.name}
                        </button>
                      ))}
                       <button 
                          onClick={() => handleNav('services')}
                          className="block w-full text-left text-sm font-bold text-dark py-2"
                        >
                          View All
                        </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => handleNav('case-studies')}
                className="text-base font-medium text-[#1A1A1A] text-left py-3 border-b border-gray-200"
              >
                Work
              </button>

              <button 
                onClick={() => handleNav('insights')}
                className="text-base font-medium text-[#1A1A1A] text-left py-3 border-b border-gray-200"
              >
                Insights
              </button>

               <button 
                onClick={() => handleNav('contact')}
                className="text-base font-medium text-[#1A1A1A] text-left py-3 border-b border-gray-200"
              >
                Contact
              </button>

              <div className="flex flex-col gap-3 mt-6">
                <button 
                    onClick={() => handleNav('contact')}
                    className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-[#1A1A1A] text-sm font-medium"
                >
                    Contact Us
                </button>
                <button 
                  onClick={() => handleNav('audit')}
                  className="w-full px-6 py-3 rounded-full bg-forest text-white text-sm font-medium"
                >
                    Get Free Audit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
