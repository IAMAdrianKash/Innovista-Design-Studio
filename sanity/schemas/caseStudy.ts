import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'e.g., "45% Increase in Qualified Leads"',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'client',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short description for previews',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Law Firms', value: 'law' },
          { title: 'Engineering', value: 'engineering' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Real Estate', value: 'real-estate' },
          { title: 'Consulting', value: 'consulting' },
          { title: 'Technology', value: 'technology' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Web Design', value: 'web-design' },
          { title: 'Lead Generation', value: 'lead-generation' },
          { title: 'SEO Optimization', value: 'seo' },
          { title: 'Automation', value: 'automation' },
          { title: 'Branding', value: 'branding' },
          { title: 'Content Strategy', value: 'content-strategy' },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'projectDate',
      title: 'Project Completion Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Case Study',
      type: 'boolean',
      description: 'Display on homepage and featured sections',
      initialValue: false,
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      rows: 5,
      description: 'What problem did the client have?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'The Solution',
      type: 'text',
      rows: 5,
      description: 'How did you solve it?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'results',
      title: 'Results & Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Metric Value',
              type: 'string',
              description: 'e.g., "+45%", "2.5x", "320"',
            },
            {
              name: 'label',
              title: 'Metric Label',
              type: 'string',
              description: 'e.g., "Increase in leads", "Faster load time"',
            },
          ],
          preview: {
            select: {
              value: 'value',
              label: 'label',
            },
            prepare({ value, label }) {
              return {
                title: value,
                subtitle: label,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 4,
        },
        {
          name: 'author',
          title: 'Author Name',
          type: 'string',
        },
        {
          name: 'role',
          title: 'Job Title',
          type: 'string',
        },
        {
          name: 'company',
          title: 'Company',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Override default title for SEO (max 60 chars)',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Override excerpt for SEO (max 160 chars)',
          validation: (Rule) => Rule.max(160),
        },
        {
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          description: 'Image for social media sharing (1200x630px recommended)',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'client',
      subtitle: 'title',
      media: 'featuredImage',
    },
  },
  orderings: [
    {
      title: 'Project Date, New',
      name: 'projectDateDesc',
      by: [{ field: 'projectDate', direction: 'desc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'projectDate', direction: 'desc' },
      ],
    },
  ],
});
