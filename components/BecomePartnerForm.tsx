'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Users } from 'lucide-react';

const BecomePartnerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    location: '',
    category: '',
    tagline: '',
    description: '',
    specialties: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const categories = [
    { value: 'visuals', label: 'Visuals (Photography, Videography, Design)' },
    { value: 'legal-money', label: 'Legal & Money (Lawyers, Accountants, Financial Advisors)' },
    { value: 'growth-marketing', label: 'Growth/Marketing (SEO, Ads, Social Media)' },
    { value: 'print-physical', label: 'Print/Physical (Printing, Signage, Merch)' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/become-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          website: '',
          location: '',
          category: '',
          tagline: '',
          description: '',
          specialties: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-12">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={32} className="text-forest" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Become a <br />
            <span className="italic font-light text-[#8C8C8C]">Trusted Partner.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto">
            Join our curated directory of verified experts. Get introduced to businesses actively seeking your services.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200 p-8 md:p-12 shadow-lg"
        >
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Application Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in joining our partner directory. We'll review your application and get back to you within 2-3 business days.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="text-forest font-bold hover:underline"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3">Partner Application</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll review your application. If approved, you'll be added to our directory and start receiving qualified intro requests.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Name */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="Your Business Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="contact@yourbusiness.com"
                  />
                  <p className="text-xs text-gray-500 mt-2 ml-2">
                    This email will be used for intro requests and directory contact.
                  </p>
                </div>

                {/* Website */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="https://yourbusiness.com"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="Edmonton, AB"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                  >
                    <option value="">Select a category...</option>
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tagline */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Tagline *
                  </label>
                  <input
                    type="text"
                    name="tagline"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                    required
                    maxLength={60}
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="Professional Photography & Videography Services"
                  />
                  <p className="text-xs text-gray-500 mt-2 ml-2">
                    A short description of what you do (max 60 characters).
                  </p>
                </div>

                {/* Description */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Business Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors resize-none"
                    placeholder="Tell us about your business, what makes you unique, and the value you provide to clients..."
                  />
                </div>

                {/* Specialties */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                    Specialties (Optional)
                  </label>
                  <input
                    type="text"
                    name="specialties"
                    value={formData.specialties}
                    onChange={(e) => setFormData({ ...formData, specialties: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                    placeholder="Corporate Photography, Product Shoots, Event Coverage"
                  />
                  <p className="text-xs text-gray-500 mt-2 ml-2">
                    Separate multiple specialties with commas.
                  </p>
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-forest text-white px-8 py-4 rounded-full text-[15px] font-medium hover:bg-forest/90 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-forest/20 hover:shadow-forest/30 hover:-translate-y-1 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
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
      </section>

      {/* Info Section */}
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-heading font-bold text-lg mb-2">Qualified Leads</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Get introduced to businesses actively seeking your specific services.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-heading font-bold text-lg mb-2">Verified Badge</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Approved partners receive a verified badge to build trust with potential clients.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-heading font-bold text-lg mb-2">No Fees</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Being in our directory is completely free. No commissions or hidden charges.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomePartnerForm;
