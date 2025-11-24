'use client'


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, PlayCircle } from 'lucide-react';

const Audit: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    website: '',
    firstName: '',
    lastName: '',
    email: '',
    frustration: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
          formType: 'audit',
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to thank you page
        router.push('/thank-you?type=audit');
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-12 min-h-screen bg-white">
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-forest rounded-full animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Limited Availability</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
              We'll prove it before <br />
              you <span className="italic font-light text-[#8C8C8C]">pay for it.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-lg mb-12">
              Get a 15-minute video breakdown of your website. We'll show you exactly what's costing you conversions and how to fix it.
            </p>

            <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                    <div className="mt-1 bg-gray-100 p-2 rounded-lg h-fit">
                        <AlertCircle size={20} className="text-dark" />
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-1">What we look for</h3>
                        <p className="text-gray-600 leading-relaxed">Speed issues, broken user flows, unclear messaging, and missed SEO opportunities.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="mt-1 bg-gray-100 p-2 rounded-lg h-fit">
                        <PlayCircle size={20} className="text-dark" />
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-1">What you get</h3>
                        <p className="text-gray-600 leading-relaxed">A personalized Loom video walking through your site, plus a bulleted action plan.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="mt-1 bg-gray-100 p-2 rounded-lg h-fit">
                        <CheckCircle2 size={20} className="text-dark" />
                    </div>
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-1">The Catch?</h3>
                        <p className="text-gray-600 leading-relaxed">None. If you find value, maybe we'll work together. If not, you keep the roadmap.</p>
                    </div>
                </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 inline-block">
                 <p className="font-serif italic text-lg text-gray-600 mb-2">"The audit showed us three things we fixed in an hour that doubled our form fills."</p>
                 <p className="text-xs font-bold uppercase tracking-wider text-gray-400">— Mark T., Director of Operations</p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-forest text-white p-8 md:p-12 rounded-[3rem] relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2 relative z-10">Request Your Audit</h3>
            <p className="text-white/70 mb-8 relative z-10">Enter your details below. We usually turn these around in 48 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 ml-2 mb-2 block">Website URL</label>
                        <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/40 text-white"
                            placeholder="https://yourcompany.com"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-white/60 ml-2 mb-2 block">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/40 text-white"
                                placeholder="Jane"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold uppercase tracking-wider text-white/60 ml-2 mb-2 block">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/40 text-white"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 ml-2 mb-2 block">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/40 text-white"
                            placeholder="jane@company.com"
                        />
                    </div>

                    <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 ml-2 mb-2 block">What's your biggest frustration? (Optional)</label>
                        <textarea
                            name="frustration"
                            value={formData.frustration}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-white/10 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all placeholder:text-white/40 text-white resize-none"
                            placeholder="e.g. We get traffic but no leads..."
                        />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-500/20 border border-red-300/30 rounded-xl">
                        <p className="text-white text-sm">{errorMessage}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-[#1A1A1A] font-bold py-5 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group mt-4 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Get My Free Video Audit'}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-center text-xs text-white/40 mt-4">
                        By submitting, you agree to our privacy policy. We hate spam too.
                    </p>
                </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Audit;
