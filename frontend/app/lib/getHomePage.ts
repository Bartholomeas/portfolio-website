import { FetchResponse } from '@/types';
import { HomePageSections } from '@/types/pages';
import { API_URL } from '@/utils/variables';

export async function getHomePage(): Promise<FetchResponse<HomePageSections>> {
  try {
    const res = await fetch(
      `${API_URL}/api/home-page?populate[0]=caseStudiesSection.caseStudies.tools,caseStudiesSection.heading,caseStudiesSection.caseStudies.mainImg,caseStudiesSection.caseStudies.description`,
      { next: { revalidate: 60 * 60 * 24 } }
    );

    if (!res.ok) {
      return Promise.reject(new Error('getRecommendedPage: error').message);
    }

    return await res.json();
  } catch (err: any) {
    throw new Error(`getHomepageData: ${err}`);
  }
}
