'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Mail, Database } from 'lucide-react';
import ContentSection from '../ContentSection';

const ServiceAutomation: React.FC = () => {
  return (
    <div className="pt-12">
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#1A1A1A] font-bold uppercase tracking-wider text-xs">Service</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="text-gray-500 text-xs uppercase tracking-wider">Automation</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Stop doing the <br />
            <span className="italic font-light text-[#8C8C8C]">busy work.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            We connect your website directly to your operations. Leads flow into your CRM, emails get sent automatically, and appointments schedule themselves.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8 text-[#1A1A1A]" />,
                title: "CRM Integration",
                desc: "Whether you use HubSpot, Salesforce, or Pipedrive, we ensure every form fill creates a deal record instantly."
              },
              {
                icon: <Mail className="w-8 h-8 text-[#1A1A1A]" />,
                title: "Email Nurturing",
                desc: "Immediate auto-responses and long-term drip campaigns that warm up leads before you ever talk to them."
              },
              {
                icon: <Zap className="w-8 h-8 text-[#1A1A1A]" />,
                title: "Workflow Logic",
                desc: "If a lead has budget > $10k, notify sales immediately. If < $10k, send them a PDF. We build the logic."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl">
                <div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm">{item.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
         <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center">Common Automations We Build</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Form Submit → Slack Notification to Team",
              "New Lead → Add to Mailchimp/ActiveCampaign",
              "Calendar Booking → Zoom Link Generation",
              "Purchase → QuickBooks Invoice Creation",
              "Onboarding Form → Trello Card Creation",
              "Contract Signed → Dropbox Folder Setup"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                 <div className="w-2 h-2 rounded-full bg-[#1A1A1A]"></div>
                <span className="text-lg font-medium text-dark">{item}</span>
              </div>
            ))}
         </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default ServiceAutomation;