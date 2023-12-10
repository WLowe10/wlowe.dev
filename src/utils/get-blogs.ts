import { getCollection } from "astro:content";

export async function getBlogs() {
    const posts = await getCollection("blog");

    return posts.sort((a, b) => (a.data.date < b.data.date ? 1 : -1));
}