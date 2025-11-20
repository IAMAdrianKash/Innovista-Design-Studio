import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import ContentSection from './ContentSection';

const faqs = [
  {
    question: "How much does a website typically cost?",
    answer: "Our custom website projects start at $8,000. This includes strategy, design, development, and basic SEO setup. More complex sites with extensive automation, migrations, or e-commerce functionality typically range between $12,000 - $25,000. We provide a fixed-price quote before starting, so there are never any surprises."
  },
  {
    question: "How long does the process take?",
    answer: "A standard brochure website takes 4-6 weeks from kick-off to launch. Larger projects or those requiring complex integrations can take 8-10 weeks. We move fast, but we don't rush the strategy phase."
  },
  {
    question: "Do you work with existing websites?",
    answer: "Sometimes. If your site is built on a modern stack (React, Webflow, clean WordPress), we can often step in for optimization and improvements. If it's built on an outdated theme or a drag-and-drop builder like Wix, we usually recommend a rebuild to ensure performance and scalability."
  },
  {
    question: "Will I be able to edit the site myself?",
    answer: "Absolutely. We build every site with a user-friendly CMS (Content Management System). You'll be able to easily update text, swap images, and add new blog posts without touching a line of code. We also provide a training session before launch."
  },
  {
    question: "Do you handle hosting and maintenance?",
    answer: "Yes. We offer optional monthly care plans that cover high-performance hosting, daily backups, security updates, and content edits. However, you are never locked in. If you prefer to manage it yourself, we'll hand over the keys."
  },
  {
    question: "What platforms do you build on?",
    answer: "We are platform-agnostic but opinionated about quality. We primarily build with Next.js/React for custom needs, Webflow for high-end marketing sites, and Shopify for e-commerce. We choose the tool that best fits your business goals."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-[#1A1A1A] tracking-tight mb-8">
            Common <br />
            <span className="italic font-light text-[#8C8C8C]">questions.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            Transparency is one of our core values. Here are honest answers to the things most clients ask us before starting.
          </p>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-gray-50 border-dark/10' : 'bg-white hover:border-gray-300'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                >
                  <span className={`font-heading font-bold text-xl md:text-2xl ${openIndex === idx ? 'text-dark' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === idx ? 'bg-dark text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8">
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default FAQ;