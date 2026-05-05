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
    // Kalendarska polja — vijest s je_dogadaj:true pojavljuje se i u kalendaru
    je_dogadaj: z.boolean().optional(),
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

const sponzori = defineCollection({
  type: 'content',
  schema: z.object({
    naziv: z.string(),
    logo: z.string().optional(),
    url: z.string().optional(),
    redoslijed: z.number().optional(),
  }),
});

const rezultati = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    natjecanje: z.enum(['prvenstvoZagreba', 'zagrebOpen', 'konjickaLiga']),
    godina: z.number(),
    datoteka: z.string().optional(),
    opis: z.string().optional(),
  }),
});

const dokumenti = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['statut', 'pravilnici', 'tablice', 'obrasci', 'ostalo']),
    file: z.string().optional(),
  }),
});

export const collections = { vijesti, kalendar, rezultati, sponzori, dokumenti };
