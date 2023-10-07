import { FetchResponse } from '@/types';
import { RecommendedPage } from '@/types/pages';
import { API_URL } from '@/utils/variables';

export async function getRecommendedPage(): Promise<
  FetchResponse<RecommendedPage>
> {
  try {
    const res = await fetch(
      `${API_URL}/api/recommended-page?populate[0]=recommendedGroups.items`
    );

    if (!res.ok) {
      return Promise.reject(
        new Error('getRecommendedPage: error: ' + res.status).message
      );
    }

    return await res.json();
  } catch (err: any) {
    throw new Error(`getRecommendedPage: ${err}`);
  }
}
