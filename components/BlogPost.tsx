import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getBlogPostBySlug, BlogPost as BlogPostType, urlFor } from '../lib/sanity';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data = await getBlogPostBySlug(slug);
        if (data) {
          setPost(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-forest border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-8">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-heading font-bold text-dark mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white rounded-xl font-medium hover:bg-forest/90 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const metaTitle = post.seo?.metaTitle || `${post.title} | Innovista Design Studio`;
  const metaDescription = post.seo?.metaDescription || post.excerpt;
  const ogImageUrl = post.seo?.ogImage
    ? urlFor(post.seo.ogImage).width(1200).height(630).url()
    : urlFor(post.featuredImage).width(1200).height(630).url();

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Helmet>

      <article className="bg-cream min-h-screen">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-8 pt-32 pb-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-dark transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    <Tag size={14} />
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              {/* Author */}
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <img
                    src={urlFor(post.author.image).width(48).height(48).url()}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-medium text-dark">{post.author.name}</p>
                  {post.author.bio && (
                    <p className="text-sm text-gray-500">{post.author.bio.substring(0, 50)}...</p>
                  )}
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formattedDate}</span>
              </div>

              {/* Read Time */}
              {post.estimatedReadTime && (
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.estimatedReadTime} min read</span>
                </div>
              )}
            </div>
          </motion.div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto px-8 pb-16"
          >
            <img
              src={urlFor(post.featuredImage).width(1200).height(630).url()}
              alt={post.featuredImage.alt || post.title}
              className="w-full rounded-[2rem] shadow-2xl"
            />
          </motion.div>
        )}

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto px-8 pb-24"
        >
          <div className="prose prose-lg prose-gray max-w-none
                          prose-headings:font-heading prose-headings:font-bold prose-headings:text-dark
                          prose-p:text-gray-700 prose-p:leading-relaxed
                          prose-a:text-forest prose-a:no-underline hover:prose-a:underline
                          prose-strong:text-dark prose-strong:font-bold
                          prose-code:text-forest prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                          prose-blockquote:border-l-4 prose-blockquote:border-forest prose-blockquote:pl-6 prose-blockquote:italic
                          prose-img:rounded-2xl prose-img:shadow-lg">
            <PortableText
              value={post.content}
              components={{
                types: {
                  image: ({ value }) => (
                    <figure className="my-8">
                      <img
                        src={urlFor(value).width(800).url()}
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

          {/* Author Bio */}
          {post.author.bio && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-6">
                {post.author.image && (
                  <img
                    src={urlFor(post.author.image).width(80).height(80).url()}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
                    About the Author
                  </p>
                  <p className="font-heading text-2xl font-bold text-dark mb-2">
                    {post.author.name}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 p-8 bg-forest text-white rounded-[2rem] text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/80 mb-6">
              Get a free website audit and discover how we can help you grow.
            </p>
            <Link
              to="/audit"
              className="inline-block px-8 py-4 bg-white text-forest font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get Your Free Audit
            </Link>
          </div>
        </motion.div>
      </article>
    </>
  );
};

export default BlogPost;
