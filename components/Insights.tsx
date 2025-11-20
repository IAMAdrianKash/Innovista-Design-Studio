
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, User, ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import ContentSection from './ContentSection';
import { getAllBlogPosts, urlForImage, type BlogPost } from '../lib/sanity';

const Insights: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const activeArticle = selectedArticleId
    ? posts.find(p => p._id === selectedArticleId)
    : null;

  const handleArticleClick = (id: string) => {
    setSelectedArticleId(id);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedArticleId(null);
    window.scrollTo(0, 0);
  };

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

  // Show single article view
  if (activeArticle) {
    const formattedDate = new Date(activeArticle.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

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
            {activeArticle.categories && activeArticle.categories.length > 0 && (
              <span className="bg-gray-100 px-3 py-1 rounded-full text-dark">
                {activeArticle.categories[0].title}
              </span>
            )}
            <div className="flex items-center gap-1">
              <Calendar size={14} /> {formattedDate}
            </div>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight">
            {activeArticle.title}
          </h1>

          <div className="flex items-center gap-3 mb-12 pb-12 border-b border-gray-100">
            {activeArticle.author.image && (
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={urlForImage(activeArticle.author.image).width(48).height(48).url()}
                  alt={activeArticle.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-bold text-dark text-sm">{activeArticle.author.name}</p>
              <p className="text-xs text-gray-500">Strategist @ Innovista</p>
            </div>
          </div>

          {activeArticle.featuredImage && (
            <div className="aspect-video rounded-2xl overflow-hidden mb-12 bg-gray-100">
              <img
                src={urlForImage(activeArticle.featuredImage).width(1200).height(630).url()}
                alt={activeArticle.featuredImage.alt || activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content Renderer */}
          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-dark prose-p:text-gray-600 prose-p:leading-relaxed max-w-none">
            <PortableText
              value={activeArticle.content}
              components={{
                types: {
                  image: ({ value }) => (
                    <figure className="my-8">
                      <img
                        src={urlForImage(value).width(800).url()}
                        alt={value.alt || ''}
                        className="w-full rounded-2xl"
                      />
                      {value.caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-3">
                          {value.caption}
                        </figcaption>
                      )}
                    </figure>
                  ),
                  code: ({ value }) => (
                    <pre className="bg-dark text-white p-6 rounded-xl overflow-x-auto">
                      <code className="text-sm">{value.code}</code>
                    </pre>
                  ),
                },
                marks: {
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest hover:underline"
                    >
                      {children}
                    </a>
                  ),
                },
              }}
            />
          </div>

          {/* Article Footer CTA */}
          <div className="mt-20 p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
            <h3 className="font-bold text-2xl mb-4">Enjoyed this perspective?</h3>
            <p className="text-gray-600 mb-6">We apply this same strategic thinking to our client projects.</p>
            <Link
              to="/audit"
              className="inline-block bg-forest text-white px-8 py-3 rounded-full font-bold hover:bg-forest/90 transition-colors"
            >
              Get a Free Audit
            </Link>
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
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-gray-600 text-lg">No blog posts yet. Create your first post in Sanity Studio!</p>
              <a
                href="https://innovistadesign.sanity.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-8 py-3 bg-forest text-white rounded-full font-bold hover:bg-forest/90 transition-colors"
              >
                Open Sanity Studio
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {posts.map((post, idx) => {
                const imageUrl = post.featuredImage ? urlForImage(post.featuredImage).width(800).height(500).url() : '';
                const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                });

                return (
                  <motion.article
                    key={post._id}
                    onClick={() => handleArticleClick(post._id)}
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
                        {post.author && (
                          <div className="flex items-center gap-1">
                            <User size={12} /> {post.author.name}
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
            </div>
          )}
        </div>
      </section>

      <ContentSection />
    </div>
  );
};

export default Insights;
