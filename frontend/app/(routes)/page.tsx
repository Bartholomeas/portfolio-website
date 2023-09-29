import { Container, Stack } from '@/components/common/mantine';
import { AboutSection } from '@/components/views/landing/about/AboutSection';

import { BenefitsSection } from '@/components/views/landing/benefits/BenefitsSection';
import { CaseStudiesSection } from '@/components/views/landing/caseStudies/CaseStudiesSection';
import { LandingSection } from '@/components/views/landing/landing/LandingSection';

import { ProjectRoadSection } from '@/components/views/landing/projectRoad/ProjectRoadSection';

import { getHomePage } from '@/lib/getHomePage';

async function Home() {
  const homePageData = getHomePage();
  const { data } = await homePageData;

  return (
    <Stack spacing={64}>
      <Container size="xl">
        <LandingSection />
      </Container>
      <Container size="xl" sx={{ overflow: 'visible' }}>
        <AboutSection data={data.aboutMeSection} />
      </Container>
      <Container size="xl">
        <CaseStudiesSection data={data.caseStudiesSection} />
      </Container>
      <Container size="xl">
        <BenefitsSection />
      </Container>
      <Container size="xl">
        <ProjectRoadSection />
      </Container>
    </Stack>
  );
}

export default Home;
