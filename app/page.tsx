'use client';

import { Stack } from '@mantine/core';
import { LandingSection } from './components/home/landing/LandingSection';
import { AboutSection } from './components/home/about/AboutSection';
import { BenefitsSection } from './components/home/benefits/BenefitsSection';
import { ProjectRoadSection } from './components/home/projectRoad/ProjectRoadSection';

function Home() {
  return (
    <Stack spacing={64}>
      <LandingSection />
      <AboutSection />
      <BenefitsSection />
      <ProjectRoadSection />
    </Stack>
  );
}
export default Home;
