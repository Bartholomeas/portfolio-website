import { FetchResponse, Post } from '@/types';
import { API_URL } from '@/utils/variables';

export async function getSingleBlogPost(
  slug: string
): Promise<FetchResponse<Post>> {
  try {
    const res = await fetch(`${API_URL}/api/blog-posts/${slug}`, {});
    return res.json();
  } catch (err) {
    throw new Error('getBlogPost: error');
  }
}