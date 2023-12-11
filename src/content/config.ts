import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		banner: image(),
		tags: z.array(z.string()).optional(),
		date: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = {
	blog: blogCollection
}