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
    year: z.number().int(),
    image: z.string().startsWith('/'),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .nonempty(),
  }),
});

export const collections = { publications };
