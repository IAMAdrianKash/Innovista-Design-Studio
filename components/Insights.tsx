import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { PageType } from '../App';
import ContentSection from './ContentSection';

interface InsightsProps {
  onNavigate?: (page: PageType) => void;
}

const Insights: React.FC<InsightsProps> = ({ onNavigate }) => {
  const articles = [
    {
      category: "Strategy",
      title: "Why your 'pretty' website isn't selling anything",
      excerpt: "A deep dive into the difference between aesthetic design and conversion design. Stop paying for digital art and start building sales assets.",
      author: "Alex Morgan",
      date: "Oct 12, 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
    },
    {
      category: "SEO",
      title: "The death of generic content: How to rank in 2024",
      excerpt: "Google's latest updates are punishing AI-generated fluff. Here's how to write authoritative content that actually ranks in local search.",
      author: "Sarah Chen",
      date: "Sep 28, 2023",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2340&auto=format&fit=crop"
    },
    {
      category: "Automation",
      title: "5 CRM workflows every service business needs",
      excerpt: "Stop manually following up with leads. We break down the exact Zapier workflows we use to save 10+ hours a week.",
      author: "Mike Ross",
      date: "Sep 15, 2023",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2340&auto=format&fit=crop"
    },
    {
      category: "Case Study",
      title: "Doubling RFPs for an engineering firm in 90 days",
      excerpt: "A behind-the-scenes look at the redesign and positioning strategy that helped Apex Engineering dominate their market.",
      author: "Alex Morgan",
      date: "Aug 30, 2023",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2340&auto=format&fit=crop"
    },
    {
      category: "UX Design",
      title: "Mobile-first isn't just a buzzword",
      excerpt: "60% of your B2B traffic is on a phone. If your site is just a squished desktop version, you are losing money. Here is how to fix it.",
      author: "Jessica Lee",
      date: "Aug 12, 2023",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop"
    },
    {
      category: "Business",
      title: "When to fire your web agency",
      excerpt: "Red flags that indicate your current agency is taking you for a ride. If they charge for 'maintenance' but do nothing, read this.",
      author: "Alex Morgan",
      date: "Jul 22, 2023",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2340&auto=format&fit=crop"
    }
  ];

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
            Thinking & <br />
            <span className="italic font-light text-[#8C8C8C]">Strategy.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl">
            We don't gatekeep our knowledge. Here is everything we know about building high-performing digital engines for professional services.
          </p>
        </motion.div>
      </section>

      {/* Featured Article (Optional Layout Variation could go here) */}

      {/* Articles Grid */}
      <section className="py-12 md:py-24 bg-white border-t border-[#E6E6E6]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {articles.map((article, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-dark">
                    {article.category}
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 uppercase tracking-wide font-medium">
                    <div className="flex items-center gap-1">
                       <Calendar size={12} /> {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                       <User size={12} /> {article.author}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-2xl mb-3 group-hover:text-gray-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-sm font-bold text-dark group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination / Load More */}
          <div className="mt-24 text-center">
             <button className="px-8 py-4 rounded-full border border-gray-200 text-sm font-bold hover:bg-forest hover:text-white transition-all">
                Load More Articles
             </button>
          </div>
        </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default Insights;