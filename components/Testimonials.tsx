'use client'


import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Quote } from 'lucide-react';

const featuredTestimonial = {
  quote: "Innovista transformed our digital presence. We went from being 'just another firm' to the clear market leader in Alberta. The ROI has been undeniable.",
  author: "Matthias Winckenburg",
  role: "CTO & Founder",
  company: "Attention",
  image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2340&auto=format&fit=crop"
};

const scrollTestimonials = [
  {
    id: 1,
    logo: "Guru Kitchen + Bar",
    quote: "We are 100% benchmark and evaluation driven. Innovista was one of the few agencies that spoke our language. Their reactive support and data compliance make their offer really compelling.",
    author: "Jeet Nair",
    role: "Group Engineering Manager",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    logo: "Ripe Tomato Pizza",
    quote: "It's the first time we've been able to launch a campaign with such accuracy and speed. Whatever the complexity, the quality is always there.",
    author: "Shahnaz Kiani",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    logo: "Chinook AI & Partners",
    quote: "The audit they provided was eye-opening. We implemented 3 of their suggestions and saw an immediate lift in conversion. We signed the retainer the next day.",
    author: "Sarah Jenkins",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    logo: "Automate Alberta",
    quote: "Finally, an agency that understands B2B sales cycles. No fluff, just clear messaging and a design that positions us exactly where we need to be.",
    author: "David Chen",
    role: "VP of Sales",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
];

// Triple the list for smooth infinite scrolling
const marqueeList = [...scrollTestimonials, ...scrollTestimonials, ...scrollTestimonials];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-forest text-white overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={12} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">Rated 5 Stars</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight"
          >
            Why customers choose us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg"
          >
            Here's what top-tier Alberta businesses say about our work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Left: Featured Video Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[700px] group cursor-pointer border border-white/10"
          >
            <img
              src={featuredTestimonial.image}
              alt="Featured Client"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent opacity-90"></div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                <Play size={32} className="text-white fill-white ml-1" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <Quote className="text-white/50 mb-6 rotate-180" size={40} />
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8 text-white">
                "{featuredTestimonial.quote}"
              </p>

              <div>
                <p className="font-bold text-lg text-white">{featuredTestimonial.author}</p>
                <p className="text-white/60">{featuredTestimonial.role}, {featuredTestimonial.company}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Vertical Scrolling List */}
          <div className="relative h-[500px] lg:h-[700px] overflow-hidden mask-gradient-y">
            {/* Gradient Masks for smooth fade out - Matching Forest Green bg */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-forest to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-forest to-transparent z-10 pointer-events-none"></div>

            <motion.div
              className="flex flex-col gap-6"
              animate={{ y: "-33.33%" }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {marqueeList.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="bg-[#053226] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-colors group"
                >
                  <h3 className="font-heading font-bold text-xl mb-6 text-white/60 group-hover:text-white transition-colors">{item.logo}</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    "{item.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10">
                      <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-white">{item.author}</p>
                      <p className="text-xs text-white/50">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
