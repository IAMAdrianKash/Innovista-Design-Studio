import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react'
import { getBlogPostBySlug, getAllBlogPosts, getRelatedBlogPosts, urlForImage, type BlogPost } from '@/lib/sanity'
import ShareButtons from '@/components/blog/ShareButtons'
import RelatedArticles from '@/components/blog/RelatedArticles'

// Generate static paths for all blog posts at build time
export async function generateStaticParams() {
  const posts = await getAllBlogPosts()

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article Not Found | Innovista Design Studio',
    }
  }

  const metaTitle = post.seo?.metaTitle || `${post.title} | Innovista Design Studio`
  const metaDescription = post.seo?.metaDescription || post.excerpt
  const fullUrl = `https://innovista.design/insights/${slug}`
  const ogImageUrl = post.seo?.ogImage
    ? urlForImage(post.seo.ogImage).width(1200).height(630).url()
    : post.featuredImage
    ? urlForImage(post.featuredImage).width(1200).height(630).url()
    : undefined

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
      url: fullUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Fetch related articles
  const categoryIds = post.categories ? post.categories.map(cat => cat._id) : [];
  const relatedArticles = await getRelatedBlogPosts(post._id, categoryIds, 3);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const imageUrl = post.featuredImage
    ? urlForImage(post.featuredImage).width(1200).height(675).url()
    : ''

  const fullUrl = `https://innovista.design/insights/${slug}`

  // Article structured data for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": imageUrl,
    "datePublished": post.publishedAt,
    "dateModified": post._updatedAt,
    "author": post.author ? {
      "@type": "Person",
      "name": post.author.name,
    } : undefined,
    "publisher": {
      "@type": "Organization",
      "name": "Innovista Design Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://innovista.design/logo.png"
      }
    }
  }

  return (
    <>
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="bg-white min-h-screen">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 pt-24 pb-8">
          {/* Back Button */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-forest transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </Link>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 uppercase tracking-wide font-medium flex-wrap">
            {post.categories && post.categories.length > 0 && (
              <span className="bg-gray-100 px-3 py-1 rounded-full text-dark">
                {post.categories[0].title}
              </span>
            )}
            <div className="flex items-center gap-1">
              <Calendar size={14} /> {formattedDate}
            </div>
            {post.estimatedReadTime && (
              <div className="flex items-center gap-1">
                <Clock size={14} /> {post.estimatedReadTime} min read
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author Info & Share */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <img
                    src={urlForImage(post.author.image).width(48).height(48).url()}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-medium text-dark">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.bio ? post.author.bio.substring(0, 50) + '...' : 'Strategist at Innovista'}</div>
                </div>
              </div>
            )}
            <ShareButtons url={fullUrl} title={post.title} description={post.excerpt} />
          </div>
        </div>

        {/* Featured Image */}
        {imageUrl && (
          <div className="max-w-4xl mx-auto px-6 md:px-12 mb-12">
            <img
              src={imageUrl}
              alt={post.featuredImage?.alt || post.title}
              className="w-full rounded-2xl object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
          <div className="prose prose-lg prose-gray max-w-none
            prose-headings:font-heading prose-headings:font-bold prose-headings:text-dark
            prose-headings:mb-4 prose-headings:mt-8
            prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
            prose-p:mb-6 prose-p:text-gray-600 prose-p:leading-relaxed
            prose-a:text-forest prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            prose-strong:text-dark prose-strong:font-semibold
            prose-ul:my-6 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:space-y-2 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-600
            prose-blockquote:border-l-4 prose-blockquote:border-forest prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
            prose-code:text-forest prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl
            prose-img:rounded-xl prose-img:shadow-lg"
          >
            <PortableText
              value={post.content}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold mb-4 mt-8">{children}</h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl font-bold mb-3 mt-6">{children}</h4>
                  ),
                  normal: ({ children }) => (
                    <p className="mb-6 text-gray-600 leading-relaxed">{children}</p>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-forest pl-6 my-6 italic text-gray-700">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-600">{children}</ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => <li className="text-gray-600">{children}</li>,
                  number: ({ children }) => <li className="text-gray-600">{children}</li>,
                },
                marks: {
                  strong: ({ children }) => <strong className="font-semibold text-dark">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                  code: ({ children }) => (
                    <code className="text-forest bg-gray-100 px-1 py-0.5 rounded text-sm">
                      {children}
                    </code>
                  ),
                  link: ({ value, children }) => {
                    const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
                    return (
                      <a
                        href={value?.href}
                        target={target}
                        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                        className="text-forest font-medium hover:underline"
                      >
                        {children}
                      </a>
                    )
                  },
                },
              }}
            />
          </div>

          {/* Share Buttons - Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between">
            <p className="text-gray-600 font-medium">Found this helpful?</p>
            <ShareButtons url={fullUrl} title={post.title} description={post.excerpt} />
          </div>

          {/* Author Bio */}
          {post.author && post.author.bio && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                {post.author.image && (
                  <img
                    src={urlForImage(post.author.image).width(80).height(80).url()}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                )}
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">About {post.author.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{post.author.bio}</p>
                </div>
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <RelatedArticles articles={relatedArticles} />
          )}

          {/* CTA Section */}
          <div className="mt-16 p-12 bg-gray-50 rounded-3xl text-center">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Enjoyed this perspective?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We apply this same strategic thinking to our client projects.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center px-8 py-4 bg-forest text-white font-bold rounded-full hover:bg-forest/90 transition-colors"
            >
              Get a Free Audit
            </Link>
          </div>

          {/* Back to Insights */}
          <div className="mt-16 text-center">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white rounded-full font-bold hover:bg-forest/90 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to All Insights
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
