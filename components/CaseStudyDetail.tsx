import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Quote } from 'lucide-react';
import { getCaseStudyBySlug, CaseStudy as CaseStudyType, urlFor } from '../lib/sanity';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudyType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data = await getCaseStudyBySlug(slug);
        if (data) {
          setCaseStudy(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching case study:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-forest border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-8">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-heading font-bold text-dark mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white rounded-xl font-medium hover:bg-forest/90 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(caseStudy.projectDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  const metaTitle = caseStudy.seo?.metaTitle || `${caseStudy.client}: ${caseStudy.title} | Innovista Design Studio`;
  const metaDescription = caseStudy.seo?.metaDescription || caseStudy.excerpt;
  const ogImageUrl = caseStudy.seo?.ogImage
    ? urlFor(caseStudy.seo.ogImage).width(1200).height(630).url()
    : urlFor(caseStudy.featuredImage).width(1200).height(630).url();

  const industryLabels: Record<string, string> = {
    'law': 'Law Firms',
    'engineering': 'Engineering',
    'manufacturing': 'Manufacturing',
    'healthcare': 'Healthcare',
    'real-estate': 'Real Estate',
    'consulting': 'Consulting',
    'technology': 'Technology',
    'other': 'Other',
  };

  const serviceLabels: Record<string, string> = {
    'web-design': 'Web Design',
    'lead-generation': 'Lead Generation',
    'seo': 'SEO Optimization',
    'automation': 'Automation',
    'branding': 'Branding',
    'content-strategy': 'Content Strategy',
  };

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

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Helmet>

      <article className="bg-cream min-h-screen">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-8 pt-32 pb-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-dark transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Case Studies
          </Link>
        </div>

        {/* Header */}
        <header className="max-w-7xl mx-auto px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Info */}
            <div>
              {/* Industry Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full mb-6">
                <Tag size={16} />
                {industryLabels[caseStudy.industry] || caseStudy.industry}
              </div>

              {/* Client & Title */}
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-dark mb-4 leading-tight">
                {caseStudy.client}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-light italic mb-6">
                {caseStudy.title}
              </p>

              {/* Excerpt */}
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {caseStudy.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{formattedDate}</span>
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Services Provided</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.services.map((service) => (
                    <span
                      key={service}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm rounded-xl"
                    >
                      {serviceLabels[service] || service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={urlFor(caseStudy.featuredImage).width(800).height(600).url()}
                alt={caseStudy.featuredImage.alt || caseStudy.client}
                className="w-full rounded-[2rem] shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </header>

        {/* Results Metrics */}
        <section className="bg-forest text-white py-16">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                The Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm"
                  >
                    <div className="text-5xl md:text-6xl font-bold mb-3">
                      {result.value}
                    </div>
                    <div className="text-white/80 text-lg">
                      {result.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="max-w-4xl mx-auto px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Challenge */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                The Solution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {caseStudy.solution}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Gallery */}
        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <section className="max-w-7xl mx-auto px-8 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark text-center mb-12">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudy.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={urlFor(image).width(800).height(600).url()}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      className="w-full rounded-2xl shadow-lg"
                    />
                    {image.caption && (
                      <p className="text-center text-sm text-gray-500 mt-3">
                        {image.caption}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Testimonial */}
        {caseStudy.testimonial && caseStudy.testimonial.quote && (
          <section className="bg-gray-50 py-24">
            <div className="max-w-4xl mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Quote size={64} className="text-forest/20 mb-6" />
                <blockquote className="text-2xl md:text-3xl font-light italic text-gray-700 mb-8 leading-relaxed">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-heading text-xl font-bold text-dark">
                    {caseStudy.testimonial.author}
                  </p>
                  <p className="text-gray-600">
                    {caseStudy.testimonial.role}
                    {caseStudy.testimonial.company && `, ${caseStudy.testimonial.company}`}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-12 bg-forest text-white rounded-[3rem] text-center"
          >
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready for Similar Results?
            </h3>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/audit"
                className="px-8 py-4 bg-white text-forest font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Get Free Audit
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        </section>
      </article>
    </>
  );
};

export default CaseStudyDetail;
