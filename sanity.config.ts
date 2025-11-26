import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'Innovista Design Studio',

  projectId: 'thhy1crr',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .child(
                S.documentTypeList('post')
                  .title('Blog Posts')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
            S.listItem()
              .title('Case Studies')
              .child(
                S.documentTypeList('caseStudy')
                  .title('Case Studies')
                  .defaultOrdering([{ field: 'projectDate', direction: 'desc' }])
              ),
            S.listItem()
              .title('Partner Directory')
              .child(
                S.documentTypeList('partner')
                  .title('Partners')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
            S.listItem()
              .title('Job Postings')
              .child(
                S.documentTypeList('job')
                  .title('Job Postings')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
            S.divider(),
            S.listItem()
              .title('Authors')
              .child(S.documentTypeList('author').title('Authors')),
            S.listItem()
              .title('Categories')
              .child(S.documentTypeList('category').title('Categories')),
          ]),
    }),
    visionTool(), // Query testing tool
    codeInput(), // Code block support
  ],

  schema: {
    types: schemaTypes,
  },
});
