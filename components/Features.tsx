import React from 'react';
import { motion } from 'framer-motion';
import { Scale, HardHat, Factory, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Scale size={32} strokeWidth={1.5} />,
      title: "Law & Accounting Firms",
      desc: "We help firms that need credibility and clear practice area positioning to match their move upmarket. Trust is your currency.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <HardHat size={32} strokeWidth={1.5} />,
      title: "Engineering & Construction",
      desc: "Explain complex services to non-technical buyers. We go beyond a simple project gallery to showcase your technical capabilities.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Factory size={32} strokeWidth={1.5} />,
      title: "Manufacturing & Industrial",
      desc: "Demonstrate capacity and certifications to procurement teams. Compete on expertise, not just price.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight mb-4">
               Who We Work With
            </h2>
            <p className="text-lg text-[#595959] max-w-xl leading-relaxed">
               We specialize in professional services & B2B. Industries where the sale happens offline, but the trust is built online.
            </p>
          </div>
          
           <div className="hidden md:block pb-2">
             <div className="h-px w-32 bg-gray-300"></div>
           </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500 min-h-[450px] flex flex-col justify-between cursor-default shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
               {/* Image Background Reveal on Hover */}
               <div className="absolute inset-0 bg-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
               <motion.img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay grayscale"
               />
               
              <div className="p-8 md:p-10 relative z-10 h-full flex flex-col justify-between group-hover:text-white transition-colors duration-300">
                 <div>
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors">
                       {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "text-[#1A1A1A] group-hover:text-white transition-colors" })}
                    </div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl leading-tight mb-4">
                       {feature.title}
                    </h3>
                    <p className="text-[#595959] group-hover:text-gray-300 text-base leading-relaxed transition-colors max-w-sm">
                       {feature.desc}
                    </p>
                 </div>
                 
                 <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 pt-8">
                    <span className="font-bold text-sm uppercase tracking-widest">Specialized Strategy</span>
                    <ArrowRight size={16} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;