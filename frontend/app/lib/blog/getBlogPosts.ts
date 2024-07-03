import {FetchResponse, Post} from '@/types';
import {API_URL} from '@/utils/variables';

export async function getBlogPosts(isHomepage?: boolean): Promise<FetchResponse<Post[]>> {
    const homepageParams = '&pagination[limit]=3'
    try {
        const res = await fetch(
            `${API_URL}/api/blog-posts?sort=createdAt%3Adesc&populate[blogCategories]=blogCategories&populate[headerImg]=headerImg&fields[0]=title&fields[1]=readTime&fields[2]=shortDescription&fields[3]=publishedAt&fields[4]=slug${isHomepage ? `${homepageParams}` : ''}`,
            {next: {revalidate: 60 * 60 * 24}}
        );

        if (!res.ok) {
            Promise.reject(new Error('getBlogPosts: error').message);
        }

        return await res.json();
    } catch (err: any) {
        throw new Error(`getBlogPosts: ${err.message}`);
    }
}
