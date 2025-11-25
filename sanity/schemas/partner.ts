import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'partner',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short one-liner (e.g., "Editorial Wedding Photography")',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of services (2-3 sentences)',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Visuals', value: 'visuals' },
          { title: 'Legal & Money', value: 'legal-money' },
          { title: 'Growth/Marketing', value: 'growth-marketing' },
          { title: 'Print/Physical', value: 'print-physical' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'verified',
      title: 'Verified Partner',
      type: 'boolean',
      description: 'Display verified badge',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show at the top of directory',
      initialValue: false,
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Edmonton, AB"',
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tags/keywords (e.g., "Branding", "Headshots")',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email (Internal Only)',
      type: 'string',
      description: 'Email for forwarding intro requests - NOT shown publicly',
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio',
      type: 'array',
      description: 'Add photos or embedded video URLs to showcase work',
      of: [
        {
          type: 'object',
          name: 'portfolioImage',
          title: 'Image',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'string',
            },
          ],
          preview: {
            select: {
              media: 'image',
              caption: 'caption',
            },
            prepare({ media, caption }) {
              return {
                title: caption || 'Portfolio Image',
                media,
              };
            },
          },
        },
        {
          type: 'object',
          name: 'portfolioVideo',
          title: 'Embedded Video',
          fields: [
            {
              name: 'videoUrl',
              title: 'Video URL',
              type: 'url',
              description: 'YouTube, Vimeo, or other embeddable video URL',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption (Optional)',
              type: 'string',
            },
          ],
          preview: {
            select: {
              url: 'videoUrl',
              caption: 'caption',
            },
            prepare({ url, caption }) {
              return {
                title: caption || 'Portfolio Video',
                subtitle: url,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first (0-999)',
      initialValue: 500,
      validation: (Rule) => Rule.min(0).max(999),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      media: 'image',
      category: 'category',
      verified: 'verified',
    },
    prepare(selection) {
      const { title, subtitle, media, category, verified } = selection;
      return {
        title: `${verified ? '✓ ' : ''}${title}`,
        subtitle: `${category} - ${subtitle}`,
        media,
      };
    },
  },
});
