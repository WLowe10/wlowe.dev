import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		banner: z.string().optional(),
		tags: z.array(z.string()),
		date: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = {
	blog: blogCollection
}