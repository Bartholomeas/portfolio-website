'use client';

import { Container, Stack } from '@mantine/core';
import { AboutSection } from '@/components/home/about/AboutSection';
import { BenefitsSection } from '@/components/home/benefits/BenefitsSection';
import { LandingSection } from '@/components/home/landing/LandingSection';
import { ProjectRoadSection } from '@/components/home/projectRoad/ProjectRoadSection';

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
