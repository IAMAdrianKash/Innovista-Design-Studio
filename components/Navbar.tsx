'use client'


import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { Search, Menu, X, ChevronDown, Monitor, TrendingUp, Zap, BarChart, ArrowRight, ArrowUpRight, FileText, Briefcase, Info, MessageCircleQuestion, CreditCard, Users, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { insightsData, projectsData } from '../data/content';

// Static Pages Index
const STATIC_PAGES = [
  { title: 'Web Design Services', type: 'Service', path: '/services/web-design', desc: 'Custom React & Next.js websites.' },
  { title: 'Lead Generation', type: 'Service', path: '/services/lead-generation', desc: 'CRO and funnel strategies.' },
  { title: 'Business Automation', type: 'Service', path: '/services/automation', desc: 'CRM integrations and workflows.' },
  { title: 'SEO Optimization', type: 'Service', path: '/services/seo', desc: 'Technical audits and local ranking.' },
  { title: 'Case Studies', type: 'Work', path: '/case-studies', desc: 'View our selected client work.' },
  { title: 'Pricing', type: 'Work', path: '/pricing', desc: 'Engagement models and project fees.' },
  { title: 'Our Process', type: 'Work', path: '/process', desc: 'The 5-step Innovista methodology.' },
  { title: 'About Innovista', type: 'Company', path: '/about', desc: 'Our story, philosophy and team.' },
  { title: 'Insights & Blog', type: 'Company', path: '/insights', desc: 'Strategy articles and guides.' },
  { title: 'Contact Us', type: 'Company', path: '/contact', desc: 'Start a project inquiry.' },
  { title: 'Get Free Audit', type: 'Offer', path: '/audit', desc: 'Request a video analysis of your site.' },
];

// Dynamic Content Index
const CONTENT_PAGES = [
  ...insightsData.map(post => ({
    title: post.title,
    type: 'Insight',
    path: '/insights',
    desc: post.excerpt
  })),
  ...projectsData.map(project => ({
    title: project.client,
    type: 'Work',
    path: '/case-studies',
    desc: project.title
  }))
];

// Combined Search Index
const SEARCH_INDEX = [...STATIC_PAGES, ...CONTENT_PAGES];

const POPULAR_SEARCHES = [
  { label: 'How much does a site cost?', path: '/pricing' },
  { label: 'View recent work', path: '/case-studies' },
  { label: 'SEO Services', path: '/services/seo' },
  { label: 'Web Design Process', path: '/process' },
];

const Navbar: React.FC = () => {
  const location = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Lock body scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  const serviceItems = [
    {
      name: 'Web Design',
      path: '/services/web-design',
      icon: <Monitor size={20} />,
      desc: 'High-performance sites.'
    },
    {
      name: 'Lead Generation',
      path: '/services/lead-generation',
      icon: <TrendingUp size={20} />,
      desc: 'Funnels & CRO strategies.'
    },
    {
      name: 'Automation',
      path: '/services/automation',
      icon: <Zap size={20} />,
      desc: 'CRM integrations.'
    },
    {
      name: 'SEO Optimization',
      path: '/services/seo',
      icon: <BarChart size={20} />,
      desc: 'Local search rankings.'
    },
  ];

  const aboutItems = [
    {
      name: 'Our Story',
      path: '/about',
      icon: <Info size={20} />,
      desc: 'Mission & philosophy.'
    },
    {
      name: 'Careers',
      path: '/careers',
      icon: <Briefcase size={20} />,
      desc: 'Join our team.'
    },
    {
      name: 'FAQ',
      path: '/faq',
      icon: <MessageCircleQuestion size={20} />,
      desc: 'Common questions.'
    },
    {
      name: 'Pricing',
      path: '/pricing',
      icon: <CreditCard size={20} />,
      desc: 'Engagement models.'
    }
  ];

  const handleNav = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setHoveredLink(null);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const filteredResults = SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isActive = (path: string) => location === path;
  const isServiceActive = () => location.startsWith('/services');
  const isAboutActive = () => ['/about', '/careers', '/faq', '/pricing'].includes(location);

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-cream/90 backdrop-blur-md transition-all duration-300 border-b border-gray-200" onMouseLeave={() => setHoveredLink(null)}>
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between relative">

          {/* Left Side: Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center pb-1 z-20">
            <img
              src="/images/brand/logo.svg"
              alt="Innovista Design Studio"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Center: Desktop Nav */}
          <div className="hidden xl:flex absolute left-1/2 top-0 -translate-x-1/2 h-full items-center gap-8 pt-1 z-10">
              <div className="h-full flex items-center">
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-[#1A1A1A]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
                >
                  Home
                </Link>
              </div>

              {/* About Dropdown */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setHoveredLink('about')}
              >
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${isAboutActive() ? 'text-[#1A1A1A]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
                >
                  About
                  <ChevronDown size={14} className={`transition-transform duration-200 ${hoveredLink === 'about' ? 'rotate-180' : ''}`} />
                </Link>

                <AnimatePresence>
                  {hoveredLink === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl border-t-4 border-forest border-x border-b border-gray-200 overflow-hidden cursor-default grid grid-cols-3"
                      style={{ marginTop: '0px' }}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                       {/* Links Column */}
                       <div className="col-span-2 p-8 bg-white">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Company</h5>
                          <div className="grid grid-cols-2 gap-6">
                             {aboutItems.map((item) => (
                                <Link
                                  key={item.path}
                                  href={item.path}
                                  onClick={() => setHoveredLink(null)}
                                  className="flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                                >
                                  <div className="mt-1 text-gray-400 group-hover:text-forest transition-colors">
                                    {item.icon}
                                  </div>
                                  <div>
                                    <h4 className="font-heading font-bold text-base text-dark group-hover:text-forest transition-colors">{item.name}</h4>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                                  </div>
                                </Link>
                              ))}
                          </div>
                       </div>

                       {/* Featured Sidebar */}
                       <div className="bg-gray-50 p-8 border-l border-gray-100 flex flex-col justify-between">
                          <div>
                             <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Join the team</h5>
                             <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                We are always looking for senior talent to join our remote team.
                             </p>
                             <Link
                                href="/careers"
                                onClick={() => setHoveredLink(null)}
                                className="text-sm font-bold text-forest underline decoration-forest/30 hover:decoration-forest transition-all underline-offset-4"
                             >
                                View Open Roles
                             </Link>
                          </div>
                          <div className="mt-8 pt-8 border-t border-gray-200">
                              <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                                      <img src="https://ui-avatars.com/api/?name=Innovista&background=fff&color=000" className="w-full h-full rounded-full opacity-50" alt="" />
                                  </div>
                                  <div>
                                      <p className="text-xs font-bold text-dark">Innovista Studio</p>
                                      <p className="text-[10px] text-gray-500">Est. 2012 in Alberta</p>
                                  </div>
                              </div>
                          </div>
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Mega Menu Trigger */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setHoveredLink('services')}
              >
                <Link
                  href="/services"
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${isServiceActive() ? 'text-[#1A1A1A]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform duration-200 ${hoveredLink === 'services' ? 'rotate-180' : ''}`} />
                </Link>

                {/* Services Mega Menu */}
                <AnimatePresence>
                  {hoveredLink === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-2xl border-t-4 border-forest border-x border-b border-gray-200 overflow-hidden cursor-default grid grid-cols-3"
                      style={{ marginTop: '0px' }}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                       {/* Links Column */}
                       <div className="col-span-2 p-8 bg-white">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Capabilities</h5>
                          <div className="grid grid-cols-2 gap-6">
                             {serviceItems.map((item) => (
                                <Link
                                  key={item.path}
                                  href={item.path}
                                  onClick={() => setHoveredLink(null)}
                                  className="flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
                                >
                                  <div className="mt-1 text-gray-400 group-hover:text-forest transition-colors">
                                    {item.icon}
                                  </div>
                                  <div>
                                    <h4 className="font-heading font-bold text-base text-dark group-hover:text-forest transition-colors">{item.name}</h4>
                                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                                  </div>
                                </Link>
                              ))}
                          </div>
                          <div className="mt-8 pt-6 border-t border-gray-100 flex gap-6">
                              <Link href="/capabilities" onClick={() => setHoveredLink(null)} className="text-xs font-bold text-gray-400 hover:text-dark uppercase tracking-wider">View Tech Stack</Link>
                              <Link href="/process" onClick={() => setHoveredLink(null)} className="text-xs font-bold text-gray-400 hover:text-dark uppercase tracking-wider">View Process</Link>
                          </div>
                       </div>

                       {/* Featured Action Sidebar */}
                       <div className="bg-forest p-8 text-white flex flex-col justify-between relative overflow-hidden">
                          {/* Background Decoration */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none"></div>

                          <div className="relative z-10">
                             <h5 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4">Need advice?</h5>
                             <h4 className="font-heading font-bold text-2xl mb-3">Not sure where to start?</h4>
                             <p className="text-sm text-white/70 leading-relaxed mb-6">
                                Book a discovery call to discuss your goals. No sales pressure.
                             </p>
                             <Link
                                href="/contact"
                                onClick={() => setHoveredLink(null)}
                                className="w-full py-3 bg-white text-forest font-bold rounded-lg text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                             >
                                <Phone size={16} />
                                Book a Call
                             </Link>
                          </div>
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-full flex items-center">
                <Link
                  href="/case-studies"
                  className={`text-sm font-medium transition-colors ${isActive('/case-studies') ? 'text-[#1A1A1A]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
                >
                  Work
                </Link>
              </div>

              <div className="h-full flex items-center">
                <Link
                  href="/insights"
                  className={`text-sm font-medium transition-colors ${isActive('/insights') ? 'text-[#1A1A1A]' : 'text-[#4A4A4A] hover:text-[#1A1A1A]'}`}
                >
                  Insights
                </Link>
              </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4 z-20">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-white border border-gray-200 text-[#1A1A1A] text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/audit"
              className="px-5 py-2.5 rounded-full bg-forest text-white text-sm font-medium hover:bg-forest/90 transition-colors shadow-lg shadow-forest/20"
            >
              Get Free Audit
            </Link>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center hover:bg-forest/90 transition-colors shadow-lg shadow-forest/20"
            >
              <Search size={16} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 xl:hidden z-20">
             <button
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 text-dark flex items-center justify-center"
            >
              <Search size={18} />
            </button>
            <button
              className="p-2 text-[#1A1A1A]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-[#1A1A1A] text-left py-3 border-b border-gray-200"
                >
                  Home
                </Link>

                {/* Mobile Accordion for About */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full flex items-center justify-between text-base font-medium text-[#1A1A1A] py-3"
                  >
                    About
                    <ChevronDown size={16} className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 pb-2 space-y-2"
                      >
                         {aboutItems.map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => { setIsOpen(false); setMobileAboutOpen(false); }}
                            className="block w-full text-left text-sm text-gray-600 py-2 hover:text-dark"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

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
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                            className="block w-full text-left text-sm text-gray-600 py-2 hover:text-dark"
                          >
                            {item.name}
                          </Link>
                        ))}
                         <Link
                            href="/services"
                            onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                            className="block w-full text-left text-sm font-bold text-dark py-2"
                          >
                            View All
                          </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/case-studies"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-[#1A1A1A] text-left py-3 border-b border-gray-200"
                >
                  Work
                </Link>

                <Link
                  href="/insights"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-[#1A1A1A] text-left py-3 border-b border-gray-200"
                >
                  Insights
                </Link>

                 <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-[#1A1A1A] text-left py-3 border-b border-gray-200"
                >
                  Contact
                </Link>

                <div className="flex flex-col gap-3 mt-6">
                  <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="w-full px-6 py-3 rounded-full bg-white border border-gray-200 text-[#1A1A1A] text-sm font-medium text-center"
                  >
                      Contact Us
                  </Link>
                  <Link
                    href="/audit"
                    onClick={() => setIsOpen(false)}
                    className="w-full px-6 py-3 rounded-full bg-forest text-white text-sm font-medium text-center"
                  >
                      Get Free Audit
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Full Screen Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-5xl mx-auto px-6 py-8 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-dark transition-colors group"
                >
                  <X size={24} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Search Input */}
              <div className="mt-12 mb-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <Search size={32} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search services, articles, or pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-gray-200 py-6 pl-12 text-3xl md:text-5xl font-heading font-bold text-dark placeholder:text-gray-300 focus:outline-none focus:border-forest transition-colors"
                  />
                </motion.div>
              </div>

              {/* Results / Suggestions */}
              <div className="flex-1 overflow-y-auto no-scrollbar">
                {searchQuery === '' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Popular Searches</p>
                    <div className="flex flex-wrap gap-3">
                      {POPULAR_SEARCHES.map((term, i) => (
                        <button
                          key={i}
                          onClick={() => handleNav(term.path)}
                          className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-600 hover:border-forest hover:text-forest transition-all text-sm font-medium"
                        >
                          {term.label}
                        </button>
                      ))}
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                       <div
                          className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 cursor-pointer transition-all"
                          onClick={() => handleNav('/case-studies')}
                       >
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm"><Briefcase size={20} className="text-dark" /></div>
                          <h3 className="font-bold text-dark">Our Work</h3>
                          <p className="text-sm text-gray-500 mt-1">See how we help Alberta businesses grow.</p>
                       </div>
                       <div
                          className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 cursor-pointer transition-all"
                          onClick={() => handleNav('/services')}
                       >
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm"><Zap size={20} className="text-dark" /></div>
                          <h3 className="font-bold text-dark">Services</h3>
                          <p className="text-sm text-gray-500 mt-1">Web design, SEO, and automation.</p>
                       </div>
                       <div
                          className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-300 cursor-pointer transition-all"
                          onClick={() => handleNav('/audit')}
                       >
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm"><Monitor size={20} className="text-dark" /></div>
                          <h3 className="font-bold text-dark">Free Audit</h3>
                          <p className="text-sm text-gray-500 mt-1">Get a video review of your website.</p>
                       </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="space-y-2"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                      {filteredResults.length} Result{filteredResults.length !== 1 ? 's' : ''}
                    </p>

                    {filteredResults.length > 0 ? (
                      filteredResults.map((item, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => handleNav(item.path)}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="w-full flex items-center justify-between p-6 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group text-left"
                        >
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-forest group-hover:text-white transition-colors">
                                {item.type === 'Service' ? <Zap size={18} /> :
                                 item.type === 'Company' ? <Info size={18} /> :
                                 item.type === 'Work' ? <Briefcase size={18} /> :
                                 item.type === 'Insight' ? <FileText size={18} /> :
                                 <FileText size={18} />}
                             </div>
                             <div>
                                <h4 className="font-heading font-bold text-xl text-dark">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                             </div>
                          </div>
                          <ArrowRight size={20} className="text-gray-300 group-hover:text-forest -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                        </motion.button>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No results found for "{searchQuery}".</p>
                        <button onClick={() => setSearchQuery('')} className="text-forest font-bold mt-2 hover:underline">Clear Search</button>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
