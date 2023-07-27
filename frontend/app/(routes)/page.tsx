'use client';

import { Container, Stack } from '@mantine/core';

import { AboutSection } from '../_components/home/about/AboutSection';
import { BenefitsSection } from '../_components/home/benefits/BenefitsSection';
import { LandingSection } from '../_components/home/landing/LandingSection';
import { ProjectRoadSection } from '../_components/home/projectRoad/ProjectRoadSection';

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
