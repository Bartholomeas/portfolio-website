import { FetchResponse } from '@/types';
import { HomePageSections } from '@/types/pages';
import { API_URL } from '@/utils/variables';

export async function getAboutMePage(): Promise<
  FetchResponse<HomePageSections>
> {
  try {
    const res = await fetch(
      `${API_URL}/api/home-page?populate[0]=aboutmeCards,aboutMeSection.aboutmeCards.image`
    );

    if (!res.ok) {
      throw new Error('getRecommendedPage: error');
    }

    return await res.json();
  } catch (err: any) {
    throw new Error(`getHomepageData: ${err}`);
  }
}
