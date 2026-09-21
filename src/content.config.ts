import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Files live in src/content/blog/{es,en,ru,fr}/*.md → id looks like "fr/my-post"
const blog = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    translationKey: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Files in src/content/policies/{es,en,ru,fr}/{legal,privacy,cookies}.md
const policies = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/policies",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lastUpdated: z.coerce.date(),
    noindex: z.boolean().default(true),
  }),
});

export const collections = { blog, policies };
