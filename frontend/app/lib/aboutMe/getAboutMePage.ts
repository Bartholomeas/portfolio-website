import { FetchResponse } from '@/types';
import { AboutMePage } from '@/types/pages';
import { API_URL } from '@/utils/variables';

export async function getAboutMePage(): Promise<FetchResponse<AboutMePage>> {
  try {
    const res = await fetch(
      `${API_URL}/api/about-me-page?populate[0]=aboutMeCards,aboutMeCards.image`
    );

    if (!res.ok) {
      return Promise.reject(new Error('getAboutMePage: error').message);
    }

    return await res.json();
  } catch (err: any) {
    throw new Error(`getAboutMePage: ${err}`);
  }
}
