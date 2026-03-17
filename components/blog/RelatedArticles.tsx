'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogPost, urlForImage } from '@/lib/content';

interface RelatedArticlesProps {
  articles: BlogPost[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 border-t border-gray-200">
      <div className="mb-12">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1A1A1A] mb-4">
          Related Articles
        </h2>
        <p className="text-gray-600">Continue reading with these related insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, idx) => {
          const imageUrl = article.featuredImage
            ? urlForImage(article.featuredImage).width(600).height(400).url()
            : '';
          const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });

          return (
            <motion.article
              key={article._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <Link href={`/insights/${article.slug.current}`} className="group block h-full">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-4 bg-gray-100">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={article.featuredImage?.alt || article.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  {article.categories && article.categories.length > 0 && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-dark">
                      {article.categories[0].title}
                    </div>
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 uppercase tracking-wide font-medium">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} /> {formattedDate}
                  </div>
                  {article.estimatedReadTime && (
                    <div className="flex items-center gap-1">
                      <Clock size={12} /> {article.estimatedReadTime} min
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-gray-600 transition-colors leading-tight line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-sm font-bold text-dark group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedArticles;
