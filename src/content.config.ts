import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    image: z.object({
      src: z.string(), // relative to src/images/
      alt: z.string(),
      positionx: z.string().optional(),
      positiony: z.string().optional(),
      mobilepositionx: z.string().optional(),
      mobilepositiony: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog };
