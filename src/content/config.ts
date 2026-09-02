import { defineCollection, z } from 'astro:content';

// A single "blog" collection. Posts live in blog/en/ and blog/he/.
// The folder they sit in tells us their language.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),   // used for the card AND for SEO meta
    pubDate: z.coerce.date(),
        image: z.string().optional(),
    imageAlt: z.string().optional(),
    kind: z.string().default('Guide'),   // e.g. Guide / Essay / Teardown
    readMins: z.number().default(6),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
