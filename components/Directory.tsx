'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ExternalLink, MapPin, X, ChevronRight } from 'lucide-react';
import { getAllPartners, type Partner, urlForImage } from '@/lib/sanity';

interface RequestIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  partnerName: string;
  partnerId: string;
}

const RequestIntroModal: React.FC<RequestIntroModalProps> = ({ isOpen, onClose, partnerName, partnerId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/partner-intro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          partnerName,
          partnerId,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setFormData({ name: '', email: '', company: '', message: '' });
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>

          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Request Sent!</h3>
              <p className="text-gray-600">
                We'll forward your intro request to {partnerName} and you should hear back within 24-48 hours.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3">
                Request Introduction
              </h3>
              <p className="text-gray-600 mb-8">
                We'll connect you with <strong>{partnerName}</strong>. Fill out the form below and we'll make the intro.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    What do you need help with?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={3}
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors resize-none"
                    placeholder="Briefly describe your project or needs..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-forest text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-forest/90 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-forest/20 hover:shadow-forest/30 hover:-translate-y-1 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                  {!isSubmitting && (
                    <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                      <ChevronRight size={14} />
                    </div>
                  )}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

interface PartnerCardProps {
  partner: Partner;
  onRequestIntro: (partner: Partner) => void;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, onRequestIntro }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      layout
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={urlForImage(partner.image).width(600).height(450).url()}
          alt={partner.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {partner.verified && (
          <div className="absolute top-4 right-4 bg-forest text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <CheckCircle2 size={14} />
            Verified
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl mb-2">{partner.name}</h3>
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">{partner.tagline}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{partner.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          {partner.location && (
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              {partner.location}
            </div>
          )}
        </div>

        {/* Specialties */}
        {partner.specialties && partner.specialties.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {partner.specialties.slice(0, 3).map((specialty, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600"
              >
                {specialty}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => onRequestIntro(partner)}
            className="flex-1 group bg-forest text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-forest/20"
          >
            Request Intro
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          {partner.website && (
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-gray-200 hover:border-gray-400 transition-colors flex items-center justify-center"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Directory: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [filteredPartners, setFilteredPartners] = useState<Partner[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Visuals', value: 'visuals' },
    { label: 'Legal & Money', value: 'legal-money' },
    { label: 'Growth/Marketing', value: 'growth-marketing' },
    { label: 'Print/Physical', value: 'print-physical' },
  ];

  useEffect(() => {
    getAllPartners().then(data => {
      setPartners(data);
      setFilteredPartners(data);
    }).catch(err => {
      console.error('Failed to fetch partners:', err);
    });
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredPartners(partners);
    } else {
      setFilteredPartners(partners.filter(p => p.category === activeCategory));
    }
  }, [activeCategory, partners]);

  const handleRequestIntro = (partner: Partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="pt-12">
        {/* Hero Section */}
        <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
              The Partners <br />
              We <span className="italic font-light text-[#8C8C8C]">Trust.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto">
              Building a business requires a village. Here is ours. Verified experts for Photography, Legal, and Finance.
            </p>
          </motion.div>
        </section>

        {/* Filter Pills */}
        <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-12">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.value
                    ? 'bg-forest text-white shadow-lg shadow-forest/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Partner Grid */}
        <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-24">
          <AnimatePresence mode="wait">
            {filteredPartners.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPartners.map((partner) => (
                  <PartnerCard
                    key={partner._id}
                    partner={partner}
                    onRequestIntro={handleRequestIntro}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <p className="text-xl text-gray-500">No partners in this category yet.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>

      {/* Request Intro Modal */}
      {selectedPartner && (
        <RequestIntroModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPartner(null);
          }}
          partnerName={selectedPartner.name}
          partnerId={selectedPartner._id}
        />
      )}
    </>
  );
};

export default Directory;
