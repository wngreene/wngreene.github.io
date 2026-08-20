import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
import { PEOPLE } from './data/site';

const personKeys = Object.keys(PEOPLE) as [string, ...string[]];

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
    // Validated against PEOPLE at build time: a typo fails the build.
    authors: z.array(z.enum(personKeys)).nonempty(),
    venue: z.string(),
    // Honours such as a best-paper nomination. Kept out of `venue` so the
    // venue line stays scannable.
    award: z.string().optional(),
    year: z.number().int(),
    image: z.string().startsWith('/'),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .nonempty(),
  }),
});

const education = defineCollection({
  loader: file('src/data/education.yaml'),
  schema: z.object({
    order: z.number().int().positive(),
    institution: z.string(),
    degree: z.string(),
    // Real institution mark when one is available; entries without one
    // render a crossed-box placeholder.
    logo: z.string().startsWith('/').optional(),
    notes: z.array(z.string()).default([]),
  }),
});

const experience = defineCollection({
  loader: file('src/data/experience.yaml'),
  schema: z.object({
    order: z.number().int().positive(),
    // Year the role ended; 9999 for a current one. Used to merge this
    // collection with publications on the home page.
    sortYear: z.number().int(),
    role: z.string(),
    company: z.string(),
    dates: z.string(),
    location: z.string().optional(),
    logo: z.string().startsWith('/').optional(),
    description: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

export const collections = { publications, education, experience };
