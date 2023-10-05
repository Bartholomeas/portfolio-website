import { Container, Stack } from '@/components/common/mantine';

import { BenefitsSection } from '@/components/views/landing/benefits/BenefitsSection';
import { CaseStudiesSection } from '@/components/views/landing/caseStudies/CaseStudiesSection';
import { LandingSection } from '@/components/views/landing/landing/LandingSection';

import { ProjectRoadSection } from '@/components/views/landing/projectRoad/ProjectRoadSection';

import { getHomePage } from '@/lib/getHomePage';

async function Home() {
  const homePageData = getHomePage();
  const { data } = await homePageData;

  return (
    <Stack spacing={64} w="100%">
      <LandingSection />
      <Container size="lg" w="100%" sx={{ overflow: 'visible' }}>
        <CaseStudiesSection data={data.caseStudiesSection} />
        <BenefitsSection />
        <ProjectRoadSection />
      </Container>
    </Stack>
  );
}

export default Home;
