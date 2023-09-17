import { Container, Stack } from '@/components/common/mantine';

import { AboutSection } from '@/components/views/landing/about/AboutSection';
import { BenefitsSection } from '@/components/views/landing/benefits/BenefitsSection';
import { CaseStudiesSection } from '@/components/views/landing/caseStudies/CaseStudiesSection';
import { LandingSection } from '@/components/views/landing/landing/LandingSection';
import { ProjectRoadSection } from '@/components/views/landing/projectRoad/ProjectRoadSection';

import { getHomePage } from '@/lib/getHomePage';

export default async function Home() {
  const homePageData = getHomePage();
  const { data } = await homePageData;

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
