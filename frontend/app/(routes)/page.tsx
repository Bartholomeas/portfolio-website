'use client';

import { Container, Stack } from '@mantine/core';

import { AboutSection } from '@/_components/views/landing/about/AboutSection';
import { BenefitsSection } from '@/_components/views/landing/benefits/BenefitsSection';
import { LandingSection } from '@/_components/views/landing/landing/LandingSection';
import { ProjectRoadSection } from '@/_components/views/landing/projectRoad/ProjectRoadSection';

function Home() {
  return (
    <Stack spacing={64}>
      <Container size="md">
        <LandingSection />
        <AboutSection />
        <BenefitsSection />
        <ProjectRoadSection />
      </Container>
    </Stack>
  );
}
export default Home;
