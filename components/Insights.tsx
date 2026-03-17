'use client'


import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import ContentSection from './ContentSection';
import { getAllBlogPosts, getAllCategories, urlForImage, type BlogPost, type Category } from '../lib/content';

const Insights: React.FC = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, categoriesData] = await Promise.all([
          getAllBlogPosts(),
          getAllCategories()
        ]);
        setPosts(postsData);
        setFilteredPosts(postsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post =>
        post.categories?.some(cat => cat._id === activeCategory)
      ));
    }
  }, [activeCategory, posts]);

  if (loading) {
    return (
      <div className="pt-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-forest"></div>
          <p className="mt-4 text-gray-600">Loading insights...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-20">
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

      {/* Filter Pills */}
      {categories.length > 0 && (
        <section className="px-6 md:px-12 max-w-[90rem] mx-auto pb-12">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-forest text-white shadow-lg shadow-forest/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setActiveCategory(category._id)}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category._id
                    ? 'bg-forest text-white shadow-lg shadow-forest/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 md:py-24 bg-white border-t border-[#E6E6E6]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            {filteredPosts.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <p className="text-xl text-gray-500">
                  {posts.length === 0
                    ? 'No blog posts are published yet. Add entries in the local content source.'
                    : 'No posts in this category yet.'}
                </p>
                {posts.length === 0 && (
                  <a
                    href="/insights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-8 py-3 bg-forest text-white rounded-full font-bold hover:bg-forest/90 transition-colors"
                  >
                    View Insights
                  </a>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
              >
                {filteredPosts.map((post, idx) => {
                const imageUrl = post.featuredImage ? urlForImage(post.featuredImage).width(800).height(500).url() : '';
                const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                });

                return (
                  <motion.article
                    key={post._id}
                    onClick={() => router.push(`/insights/${post.slug.current}`)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group cursor-pointer flex flex-col h-full"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-gray-100">
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt={post.featuredImage?.alt || post.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      {post.categories && post.categories.length > 0 && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-dark">
                          {post.categories[0].title}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 uppercase tracking-wide font-medium">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} /> {formattedDate}
                        </div>
                        {post.estimatedReadTime && (
                          <div className="flex items-center gap-1">
                            <Clock size={12} /> {post.estimatedReadTime} min
                          </div>
                        )}
                      </div>

                      <h3 className="font-heading font-bold text-2xl mb-3 group-hover:text-gray-600 transition-colors leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-2 text-sm font-bold text-dark group-hover:gap-3 transition-all">
                        Read Article <ArrowRight size={16} />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default Insights;
