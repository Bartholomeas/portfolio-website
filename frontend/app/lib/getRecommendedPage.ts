import { FetchResponse, RecommendedItems } from '@/types';
import { API_URL } from '@/utils/variables';

export async function getRecommendedPage(): Promise<
  FetchResponse<RecommendedItems[]>
> {
  try {
    const res = await fetch(
      `${API_URL}/api/recommended-page?populate[0]=recommendedItems,recommendedItems.recommendedItem`
    );

    if (!res.ok) {
      return Promise.reject(new Error('getRecommendedPage: error').message);
    }

    return await res.json();
  } catch (err: any) {
    return Promise.reject(new Error(`getRecommendedPage: ${err}`));
  }
}
