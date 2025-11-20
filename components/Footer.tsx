'use client'


import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const Footer: React.FC = () => {
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
              <li><Link href="/services/web-design" className="text-sm text-gray-600 hover:text-dark text-left">Web Design</Link></li>
              <li><Link href="/services/lead-generation" className="text-sm text-gray-600 hover:text-dark text-left">Lead Generation</Link></li>
              <li><Link href="/services/automation" className="text-sm text-gray-600 hover:text-dark text-left">Automation</Link></li>
              <li><Link href="/services/seo" className="text-sm text-gray-600 hover:text-dark text-left">SEO Optimization</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider mb-6 text-gray-500">Work</h5>
            <ul className="space-y-3">
              <li><Link href="/case-studies" className="text-sm text-gray-600 hover:text-dark text-left">Case Studies</Link></li>
              <li><Link href="/process" className="text-sm text-gray-600 hover:text-dark text-left">Process</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-600 hover:text-dark text-left">Pricing</Link></li>
              <li><Link href="/capabilities" className="text-sm text-gray-600 hover:text-dark text-left">Capabilities</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider mb-6 text-gray-500">Company</h5>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-dark">About Innovista</Link></li>
              <li><Link href="/insights" className="text-sm text-gray-600 hover:text-dark">Insights (Blog)</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-dark">Contact Us</Link></li>
              <li><Link href="/careers" className="text-sm text-gray-600 hover:text-dark">Careers</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-600 hover:text-dark">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider mb-6 text-gray-500">Legal</h5>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-dark text-left">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-dark text-left">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="text-sm text-gray-600 hover:text-dark text-left">Cookie Policy</Link></li>
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
    </footer>
  );
};

export default Footer;
