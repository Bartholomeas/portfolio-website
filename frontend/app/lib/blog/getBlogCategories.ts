import { BlogCategory, FetchResponse } from '@/types';
import { API_URL } from '@/utils/variables';

export async function getBlogCategories(): Promise<
  FetchResponse<BlogCategory[]>
> {
  try {
    const res = await fetch(
      `${API_URL}/api/blog-categories?fields[0]=code&fields[1]=name`
    );
    if (!res.ok) throw new Error('getBlogCategories: error');

    return await res.json();
  } catch (err: any) {
    throw new Error(`getCategories: ${err.message}`);
  }
}
