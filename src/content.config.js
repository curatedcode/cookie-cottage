import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const blogPostSchema = z.object({
	id: z.number(),
	title: z.string().min(1),
	excerpt: z.string().min(1),
	date: z.string().min(1),
	author: z.string().min(1),
	category: z.enum(["Stories", "Recipes", "Events", "Seasonal", "Tips"]),
	imageUrl: z.string().min(1),
	tags: z.array(z.string()),
});

/**
 * @typedef {Object} BlogPost
 * @property {number} id - Unique identifier for the blog post
 * @property {string} title - The blog post title
 * @property {string} excerpt - A short summary of the post
 * @property {string} content - Full content of the post
 * @property {string} date - Publication date
 * @property {string} author - Author's name
 * @property {string} category - Category of the blog post (e.g. recipes, events)
 * @property {string} imageUrl - URL to the cover image
 * @property {string[]} tags - Array of tags related to the post
 */
const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
	schema: blogPostSchema,
});

export const collections = { blog };
