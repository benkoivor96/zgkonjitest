import { defineCollection, z } from 'astro:content';

const vijesti = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    category: z.enum(['najave', 'vijesti', 'rezultati']).optional(),
    discipline: z.enum(['preponsko', 'dresurno', 'daljinsko', 'vise']).optional(),
    excerpt: z.string().optional(),
    // Opcionalna kalendarska polja — vijest s ovim poljima pojavljuje se i u kalendaru
    date_start: z.coerce.date().optional(),
    date_end: z.coerce.date().optional(),
    location: z.string().optional(),
    level: z.enum(['medunarodno', 'drzavno', 'regionalno']).optional(),
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
