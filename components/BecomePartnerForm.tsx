'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft, Users, Upload, Plus, X, Link as LinkIcon } from 'lucide-react';

interface PortfolioLink {
  url: string;
  description: string;
}

const BecomePartnerForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [portfolioLinks, setPortfolioLinks] = useState<PortfolioLink[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const categories = [
    { value: 'visuals', label: 'Visuals (Photography, Videography, Design)' },
    { value: 'legal-money', label: 'Legal & Money (Lawyers, Accountants, Financial Advisors)' },
    { value: 'growth-marketing', label: 'Growth/Marketing (SEO, Ads, Social Media)' },
    { value: 'print-physical', label: 'Print/Physical (Printing, Signage, Merch)' },
  ];

  const totalSteps = 3;

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addPortfolioLink = () => {
    if (portfolioLinks.length < 10) {
      setPortfolioLinks([...portfolioLinks, { url: '', description: '' }]);
    }
  };

  const updatePortfolioLink = (index: number, field: 'url' | 'description', value: string) => {
    const updated = portfolioLinks.map((link, i) =>
      i === index ? { ...link, [field]: value } : link
    );
    setPortfolioLinks(updated);
  };

  const removePortfolioLink = (index: number) => {
    setPortfolioLinks(portfolioLinks.filter((_, i) => i !== index));
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.name && formData.email && formData.location && formData.category;
    }
    if (currentStep === 2) {
      return formData.tagline && formData.description;
    }
    return true;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // Prevent form submission when pressing Enter anywhere in the form
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Only allow submission if we're on the final step
    if (currentStep !== totalSteps) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Convert avatar to base64 if present
      let avatarBase64 = null;
      if (avatarFile) {
        const reader = new FileReader();
        avatarBase64 = await new Promise<string>((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(avatarFile);
        });
      }

      // Filter out empty portfolio links
      const validPortfolioLinks = portfolioLinks.filter(link => link.url.trim() !== '');

      const response = await fetch('/api/become-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          avatar: avatarBase64,
          portfolioLinks: validPortfolioLinks,
        }),
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
        setAvatarFile(null);
        setAvatarPreview(null);
        setPortfolioLinks([]);
        setCurrentStep(1);
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
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={32} className="text-forest" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-6 md:mb-8">
            Become a <br />
            <span className="italic font-light text-[#8C8C8C]">Trusted Partner.</span>
          </h1>
          <p className="text-base md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto">
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
          className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200 p-6 md:p-12 shadow-lg"
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
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-start justify-between">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center" style={{ width: '33.333%' }}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors mb-2 ${
                        currentStep >= 1
                          ? 'bg-forest text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      1
                    </div>
                    <span className="text-xs text-gray-500 text-center">Basic Info</span>
                  </div>

                  {/* Connector Line 1 */}
                  <div className="flex-1 flex items-start pt-4" style={{ maxWidth: '16.666%' }}>
                    <div
                      className={`w-full h-1 transition-colors ${
                        currentStep > 1 ? 'bg-forest' : 'bg-gray-200'
                      }`}
                    />
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center" style={{ width: '33.333%' }}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors mb-2 ${
                        currentStep >= 2
                          ? 'bg-forest text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      2
                    </div>
                    <span className="text-xs text-gray-500 text-center">Details</span>
                  </div>

                  {/* Connector Line 2 */}
                  <div className="flex-1 flex items-start pt-4" style={{ maxWidth: '16.666%' }}>
                    <div
                      className={`w-full h-1 transition-colors ${
                        currentStep > 2 ? 'bg-forest' : 'bg-gray-200'
                      }`}
                    />
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center" style={{ width: '33.333%' }}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors mb-2 ${
                        currentStep >= 3
                          ? 'bg-forest text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      3
                    </div>
                    <span className="text-xs text-gray-500 text-center">Media</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Basic Info */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading font-bold text-xl md:text-2xl mb-4">Basic Information</h2>

                      {/* Business Name */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                          Business Name *
                        </label>
                        <input
                          type="text"
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

                      {/* Location */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                          Location *
                        </label>
                        <input
                          type="text"
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
                    </motion.div>
                  )}

                  {/* Step 2: Details */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading font-bold text-xl md:text-2xl mb-4">Business Details</h2>

                      {/* Tagline */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                          Tagline *
                        </label>
                        <input
                          type="text"
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
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          required
                          rows={4}
                          className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors resize-none"
                          placeholder="Tell us about your business, what makes you unique, and the value you provide to clients..."
                        />
                      </div>

                      {/* Website */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                          Website (Optional)
                        </label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                          placeholder="https://yourbusiness.com"
                        />
                      </div>

                      {/* Specialties */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                          Specialties (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.specialties}
                          onChange={(e) => setFormData({ ...formData, specialties: e.target.value })}
                          className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                          placeholder="Corporate Photography, Product Shoots, Event Coverage"
                        />
                        <p className="text-xs text-gray-500 mt-2 ml-2">
                          Separate multiple specialties with commas.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Media */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading font-bold text-xl md:text-2xl mb-4">Media & Portfolio</h2>

                      {/* Avatar Upload */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                          Profile Avatar (Optional)
                        </label>
                        <div className="flex items-center gap-4">
                          {avatarPreview && (
                            <img
                              src={avatarPreview}
                              alt="Avatar preview"
                              className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                            />
                          )}
                          <label className="flex-1 cursor-pointer">
                            <div className="border-2 border-dashed border-gray-300 rounded-xl px-6 py-4 hover:border-forest transition-colors flex items-center justify-center gap-2">
                              <Upload size={20} className="text-gray-400" />
                              <span className="text-sm text-gray-600">
                                {avatarFile ? avatarFile.name : 'Upload Avatar Image'}
                              </span>
                            </div>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleAvatarChange}
                              className="hidden"
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 ml-2">
                          Recommended: Square image, at least 400x400px
                        </p>
                      </div>

                      {/* Portfolio Links */}
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2 mb-2 block">
                          Portfolio Links (Optional, Max 10)
                        </label>
                        <p className="text-xs text-gray-500 ml-2 mb-4">
                          Share links to your portfolio (Dropbox, Google Drive, Behance, etc.)
                        </p>

                        <div className="space-y-3">
                          {portfolioLinks.map((link, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-4 space-y-3">
                              <div className="flex items-start gap-2">
                                <LinkIcon size={16} className="text-gray-400 mt-3" />
                                <div className="flex-1 space-y-2">
                                  <input
                                    type="url"
                                    value={link.url}
                                    onChange={(e) => updatePortfolioLink(index, 'url', e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-dark transition-colors"
                                    placeholder="https://drive.google.com/..."
                                  />
                                  <input
                                    type="text"
                                    value={link.description}
                                    onChange={(e) => updatePortfolioLink(index, 'description', e.target.value)}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-dark transition-colors"
                                    placeholder="Description (optional)"
                                  />
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removePortfolioLink(index)}
                                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                  <X size={16} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>

                        {portfolioLinks.length < 10 && (
                          <button
                            type="button"
                            onClick={addPortfolioLink}
                            className="mt-3 w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-sm font-medium text-gray-600 hover:border-forest hover:text-forest transition-colors flex items-center justify-center gap-2"
                          >
                            <Plus size={16} />
                            Add Portfolio Link
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-medium hover:border-gray-400 transition-all flex items-center justify-center gap-2"
                    >
                      <ChevronLeft size={16} />
                      Back
                    </button>
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep + 1)}
                      disabled={!canProceed()}
                      className="flex-1 group bg-forest text-white px-6 py-4 rounded-full font-medium hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-forest/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 group bg-forest text-white px-6 py-4 rounded-full font-medium hover:bg-forest/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-forest/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      {!isSubmitting && (
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      )}
                    </button>
                  )}
                </div>
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
