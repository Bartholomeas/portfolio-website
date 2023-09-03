// 'use client';

import { Container, Stack } from '@/_components/common/mantine';

import { AboutSection } from '@/_components/views/landing/about/AboutSection';
import { BenefitsSection } from '@/_components/views/landing/benefits/BenefitsSection';
import { CaseStudiesSection } from '@/_components/views/landing/caseStudies/CaseStudiesSection';
import { LandingSection } from '@/_components/views/landing/landing/LandingSection';
import { ProjectRoadSection } from '@/_components/views/landing/projectRoad/ProjectRoadSection';

import { FetchResponse } from '@/_types';
import { HomePageSections } from '@/_types/pages';

import { API_URL } from '@/_utils/variables';

async function getHomePage(): Promise<FetchResponse<HomePageSections>> {
  try {
    const res = await fetch(
      `${API_URL}/api/home-page?populate[0]=caseStudiesSection.caseStudies.tools,caseStudiesSection.heading,caseStudiesSection.caseStudies.mainImg&populate[1]=aboutMeSection.heading,aboutMeSection.skillCards,aboutMeSection.sectionImage`
    );

    if (!res.ok) {
      throw new Error('getRecommendedPage: error');
    }

    return await res.json();
  } catch (err: any) {
    throw new Error(`getHomepageData: ${err}`);
  }
}

export default async function Home() {
  const homePagePromise = getHomePage();
  const { data } = await homePagePromise;

  return (
    <Stack spacing={64}>
      <Container size="md">
        <LandingSection />
      </Container>
      <Container size="md">
        <AboutSection data={data.aboutMeSection} />
      </Container>
      <Container size={1900}>
        <CaseStudiesSection data={data.caseStudiesSection} />
      </Container>
      <Container size="md">
        <BenefitsSection />
      </Container>
      <Container size="md">
        <ProjectRoadSection />
      </Container>
    </Stack>
  );
}
