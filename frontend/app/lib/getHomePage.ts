import {FetchResponse} from '@/types';
import {HomePageSections} from '@/types/pages';
import {API_URL} from '@/utils/variables';
import {GET_HOMEPAGE_KEY} from "@/lib/keys";

export async function getHomePage(): Promise<FetchResponse<HomePageSections>> {
    try {
        const res = await fetch(
            `${API_URL}/api/home-page?populate[0]=caseStudiesSection.caseStudies.tools,caseStudiesSection.heading,caseStudiesSection.caseStudies.mainImg,caseStudiesSection.caseStudies.description`,
            {next: {tags: [GET_HOMEPAGE_KEY], revalidate: 60 * 60 * 24}}
        );

        if (!res.ok) {
            return Promise.reject(new Error('getHomePage: error').message);
        }

        return await res.json();
    } catch (err: any) {
        throw new Error(`getHomepageData: ${err}`);
    }
}
