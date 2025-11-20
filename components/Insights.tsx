
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, User, ArrowLeft } from 'lucide-react';
import ContentSection from './ContentSection';
import { insightsData } from '../data/content';

const Insights: React.FC = () => {
  const navigate = useNavigate();
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const activeArticle = selectedArticleId 
    ? insightsData.find(a => a.id === selectedArticleId) 
    : null;

  // Scroll to top when opening an article
  const handleArticleClick = (id: string) => {
    setSelectedArticleId(id);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedArticleId(null);
    window.scrollTo(0, 0);
  };

  if (activeArticle) {
    return (
      <div className="pt-12 min-h-screen bg-white">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="max-w-4xl mx-auto px-6 pb-24"
        >
          <button 
            onClick={handleBack}
            className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-forest mb-12 transition-colors pt-8"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </button>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 uppercase tracking-wide font-medium">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-dark">{activeArticle.category}</span>
            <div className="flex items-center gap-1">
               <Calendar size={14} /> {activeArticle.date}
            </div>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight">
            {activeArticle.title}
          </h1>

          <div className="flex items-center gap-3 mb-12 pb-12 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
               <img src={`https://ui-avatars.com/api/?name=${activeArticle.author}&background=0D8ABC&color=fff`} alt={activeArticle.author} />
            </div>
            <div>
               <p className="font-bold text-dark text-sm">{activeArticle.author}</p>
               <p className="text-xs text-gray-500">Strategist @ Innovista</p>
            </div>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden mb-12 bg-gray-100">
            <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
          </div>

          {/* Content Renderer */}
          <div 
            className="prose prose-lg prose-headings:font-heading prose-headings:text-dark prose-p:text-gray-600 prose-p:leading-relaxed max-w-none"
            dangerouslySetInnerHTML={{ __html: activeArticle.content }}
          />

          {/* Article Footer CTA */}
          <div className="mt-20 p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
             <h3 className="font-bold text-2xl mb-4">Enjoyed this perspective?</h3>
             <p className="text-gray-600 mb-6">We apply this same strategic thinking to our client projects.</p>
             <button onClick={() => navigate('/audit')} className="bg-forest text-white px-8 py-3 rounded-full font-bold hover:bg-forest/90 transition-colors">
                Get a Free Audit
             </button>
          </div>
        </motion.div>
      </div>
    );
  }

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

      {/* Articles Grid */}
      <section className="py-12 md:py-24 bg-white border-t border-[#E6E6E6]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {insightsData.map((article, idx) => (
              <motion.article
                key={article.id}
                onClick={() => handleArticleClick(article.id)}
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
