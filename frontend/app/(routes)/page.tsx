'use client';

import { Container, Stack } from '@/_components/common/mantine';

import { AboutSection } from '@/_components/views/landing/about/AboutSection';
import { BenefitsSection } from '@/_components/views/landing/benefits/BenefitsSection';
import { CaseStudiesSection } from '@/_components/views/landing/caseStudies/CaseStudiesSection';
import { LandingSection } from '@/_components/views/landing/landing/LandingSection';
import { ProjectRoadSection } from '@/_components/views/landing/projectRoad/ProjectRoadSection';

function Home() {
  return (
    <Stack spacing={64}>
      <Container size="md">
        <LandingSection />
      </Container>
      <Container size="md">
        <AboutSection />
      </Container>
      <Container size={1900}>
        <CaseStudiesSection />
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
export default Home;
