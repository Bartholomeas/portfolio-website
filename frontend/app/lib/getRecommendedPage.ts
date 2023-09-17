import { FetchResponse, RecommendedItems } from '@/types';
import { API_URL } from '@/utils/variables';

export async function getRecommendedPage(): Promise<
  FetchResponse<RecommendedItems[]>
> {
  try {
    const res = await fetch(
      `${API_URL}/api/recommended-pages?fields[0]=title&populate[items]=items`
    );

    if (!res.ok) {
      throw new Error('getRecommendedPage: error');
    }

    return await res.json();
  } catch (err: any) {
    throw new Error(`getRecommendedPage: ${err}`);
  }
}
