import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'job',
  title: 'Job Postings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'e.g., "Senior Frontend Developer"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering', value: 'Engineering' },
          { title: 'Design', value: 'Design' },
          { title: 'Strategy', value: 'Strategy' },
          { title: 'Marketing', value: 'Marketing' },
          { title: 'Operations', value: 'Operations' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Internship', value: 'Internship' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Remote (Canada)", "Edmonton / Hybrid", "Remote"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full job description with requirements, responsibilities, etc.',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key responsibilities',
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of requirements and qualifications',
    }),
    defineField({
      name: 'niceToHave',
      title: 'Nice to Have',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional qualifications',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Employee benefits for this role',
    }),
    defineField({
      name: 'salary',
      title: 'Salary Range',
      type: 'string',
      description: 'Optional salary range (e.g., "$80k-$120k CAD")',
    }),
    defineField({
      name: 'applicationUrl',
      title: 'Application URL',
      type: 'url',
      description: 'External application link (if using a job board)',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Posting',
      type: 'boolean',
      description: 'Set to false to hide this job from the careers page',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'When this job was posted',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'department',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, subtitle, isActive } = selection;
      return {
        title: `${title}${!isActive ? ' (Inactive)' : ''}`,
        subtitle: subtitle,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
  ],
});
