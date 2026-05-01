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

const kalendar = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date_start: z.coerce.date(),
    date_end: z.coerce.date().optional(),
    location: z.string(),
    discipline: z.enum(['preponsko', 'dresurno', 'daljinsko', 'vise']),
    level: z.enum(['medunarodno', 'drzavno', 'regionalno']).optional(),
  }),
});

export const collections = { vijesti, kalendar };
