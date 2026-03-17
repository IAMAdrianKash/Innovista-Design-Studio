'use client'

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getBlogPostBySlug, BlogPost as BlogPostType, urlForImage } from '../lib/content';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-forest border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-8">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-heading font-bold text-dark mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/insights"
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
    ? urlForImage(post.seo.ogImage).width(1200).height(630).url()
    : urlForImage(post.featuredImage).width(1200).height(630).url();

  return (
    <>

      <article className="bg-white min-h-screen">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-8">
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-forest transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-6 pb-8">
          {/* Meta: Category + Date */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 uppercase tracking-wide font-medium">
            {post.categories && post.categories.length > 0 && (
              <span className="bg-gray-100 px-3 py-1 rounded-full text-dark">
                {post.categories[0].title}
              </span>
            )}
            <div className="flex items-center gap-1">
              <Calendar size={14} /> {formattedDate}
            </div>
          </div>

          {/* Title */}
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 pb-12 border-b border-gray-100">
            {post.author.image && (
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={urlForImage(post.author.image).width(48).height(48).url()}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-bold text-dark text-sm">{post.author.name}</p>
              <p className="text-xs text-gray-500">Strategist @ Innovista</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="max-w-4xl mx-auto px-6 pb-12">
            <img
              src={urlForImage(post.featuredImage).width(1200).height(630).url()}
              alt={post.featuredImage.alt || post.title}
              className="w-full aspect-video rounded-2xl object-cover bg-gray-100"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 pb-24">
          <div className="prose prose-lg max-w-none
                          prose-headings:font-heading prose-headings:font-bold prose-headings:text-dark prose-headings:mb-4 prose-headings:mt-8
                          prose-h3:text-2xl
                          prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                          prose-ul:my-6 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
                          prose-li:text-gray-600
                          prose-a:text-forest prose-a:no-underline hover:prose-a:underline
                          prose-strong:text-dark prose-strong:font-bold
                          prose-code:text-forest prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                          prose-pre:bg-dark prose-pre:text-white
                          prose-blockquote:border-l-4 prose-blockquote:border-forest prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                          prose-img:rounded-2xl prose-img:my-8">
            <PortableText
              value={post.content}
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
                    <pre className="bg-dark text-white p-6 rounded-xl overflow-x-auto my-6">
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
                block: {
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold mb-4 mt-8">{children}</h3>
                  ),
                  normal: ({ children }) => (
                    <p className="mb-6 text-gray-600 leading-relaxed">{children}</p>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li className="text-gray-600">{children}</li>
                  ),
                  number: ({ children }) => (
                    <li className="text-gray-600">{children}</li>
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
              href="/audit"
              className="inline-block bg-forest text-white px-8 py-3 rounded-full font-bold hover:bg-forest/90 transition-colors"
            >
              Get a Free Audit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
