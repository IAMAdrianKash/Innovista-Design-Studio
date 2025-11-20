import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Innovista didn't just build a website; they built a sales engine. We've seen a 40% increase in qualified leads within the first three months. The investment paid for itself almost immediately.",
    author: "Sarah Jenkins",
    role: "Marketing Director",
    company: "Apex Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    quote: "Finally, an agency that understands B2B. No fluff, just clear messaging and a design that positions us exactly where we need to be in the market. Their process was seamless from start to finish.",
    author: "Michael Ross",
    role: "Managing Partner",
    company: "Summit Legal Group",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "We were skeptical about the 'conversion-focused' claim, but the data doesn't lie. Our bounce rate dropped by half, and the quality of inquiries has skyrocketed. They actually care about the results.",
    author: "David Chen",
    role: "CEO",
    company: "NorthField Industrial",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-100/50 border-y border-white/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 text-[#1A1A1A]">
            What our clients say
          </h2>
          <p className="text-gray-500 text-lg font-sans">
            Real results from Alberta businesses.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-24 z-10 p-3 rounded-full border border-gray-200 bg-white hover:bg-[#1A1A1A] hover:text-white transition-all hidden md:flex items-center justify-center group shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-24 z-10 p-3 rounded-full border border-gray-200 bg-white hover:bg-[#1A1A1A] hover:text-white transition-all hidden md:flex items-center justify-center group shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative min-h-[450px] md:min-h-[320px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-100 relative">
                  <Quote className="absolute top-8 left-8 text-gray-100 rotate-180" size={80} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    <div className="shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-inner">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                      <p className="font-serif text-xl md:text-2xl text-[#1A1A1A] leading-relaxed mb-8 italic">
                        "{testimonials[currentIndex].quote}"
                      </p>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-[#1A1A1A]">
                          {testimonials[currentIndex].author}
                        </h4>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">
                          {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full border border-gray-200 bg-white hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm"><ChevronLeft size={20} /></button>
            <button onClick={next} className="p-3 rounded-full border border-gray-200 bg-white hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm"><ChevronRight size={20} /></button>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-[#1A1A1A]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;