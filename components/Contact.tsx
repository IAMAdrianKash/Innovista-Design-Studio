'use client'


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Web Design & Build',
    budget: '',
    website: '',
    message: '',
    agreedToPrivacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: 'Web Design & Build',
          budget: '',
          website: '',
          message: '',
          agreedToPrivacy: false,
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-12 min-h-screen bg-white">
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pb-24">
          
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between h-full"
          >
            <div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
                Let's start a <br />
                <span className="italic font-light text-[#8C8C8C]">conversation.</span>
                </h1>
                <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-lg mb-12">
                Whether you have a project in mind or just want to see if we're a good fit, we're ready to listen. No sales pressure, just honest advice.
                </p>

                <div className="space-y-8">
                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <Mail className="text-dark" size={20} />
                    </div>
                    <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Email Us</h4>
                    <a href="mailto:hello@innovista.design" className="text-xl text-gray-600 hover:text-dark transition-colors underline decoration-gray-300 underline-offset-4">
                        hello@innovista.design
                    </a>
                    </div>
                </div>

                <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <MapPin className="text-dark" size={20} />
                    </div>
                    <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Studio</h4>
                    <p className="text-lg text-gray-600">
                        Edmonton, Alberta<br />
                        Serving clients worldwide
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div className="hidden lg:block mt-20">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Trusted By</p>
                <div className="flex gap-8 opacity-40 grayscale">
                    {/* Simple text placeholders for logos or small svg icons */}
                    <span className="font-bold text-xl">Google</span>
                    <span className="font-bold text-xl">Stripe</span>
                    <span className="font-bold text-xl">Canva</span>
                </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-8 md:p-12 rounded-[3rem]"
          >
            {submitStatus === 'success' ? (
              <div className="bg-white p-8 md:p-12 rounded-[3rem] border-2 border-forest">
                <div className="text-center">
                  <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Message Sent!</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Thanks for reaching out. We'll review your inquiry and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="text-forest font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                          placeholder="Jane"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                          placeholder="Doe"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                      placeholder="jane@company.com"
                    />
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">Service Needed</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors appearance-none text-gray-600 cursor-pointer"
                        >
                            <option>Web Design & Build</option>
                            <option>Lead Generation Strategy</option>
                            <option>Business Automation</option>
                            <option>SEO & Growth Retainer</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">Estimated Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors appearance-none text-gray-600 cursor-pointer"
                        >
                            <option value="">Select Range</option>
                            <option>$8k - $15k</option>
                            <option>$15k - $30k</option>
                            <option>$30k - $50k</option>
                            <option>$50k+</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">Company Website (Optional)</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors"
                      placeholder="https://"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-2">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-dark transition-colors resize-none"
                      placeholder="Tell us about your goals..."
                    />
                </div>

                <div className="space-y-2">
                   <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="agreedToPrivacy"
                        checked={formData.agreedToPrivacy}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 rounded border-gray-300 text-dark focus:ring-dark"
                      />
                      <span className="text-gray-500 text-sm group-hover:text-dark transition-colors">I agree to the privacy policy</span>
                   </label>
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-forest text-white font-bold py-5 rounded-xl hover:bg-forest/90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-forest/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
