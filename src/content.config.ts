import { defineCollection, z } from 'astro:content';

const vijesti = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    category: z.enum(['najave', 'vijesti', 'rezultati']).optional(),
    discipline: z.enum(['preponsko', 'dresurno', 'daljinsko']).optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { vijesti };
