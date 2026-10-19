import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().default(''),
    fecha: z.coerce.date(),
    categoria: z.enum(['Opiniones', 'Políticas públicas']).default('Opiniones'),
    autor: z.string().default('Administración Pública HN'),
    portada: z.string().optional(),
    destacado: z.boolean().default(false),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { posts };
