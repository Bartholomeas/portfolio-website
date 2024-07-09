import {MetadataRoute} from "next";
import {getBlogPosts} from "@/requests/blog/getBlogPosts";
import {BASE_URL} from "@/utils/variables";
import {Post} from "@/types";


const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
    let posts: Post[] = [];
    try {
        const {data} = await getBlogPosts()
        posts = data
    } catch (err) {
        posts = []
    }

    return posts?.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post?.createdAt,
        priority: 0.8,
    }))
}

export default sitemap