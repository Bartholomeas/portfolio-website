'use client';

import { Stack } from '@mantine/core';
import { LandingSection } from './components/home/landing/LandingSection';
import { AboutSection } from './components/home/about/AboutSection';
import { BenefitsSection } from './components/home/benefits/BenefitsSection';

function Home() {
  return (
    <Stack spacing={64}>
      <LandingSection />
      <AboutSection />
      <BenefitsSection />
    </Stack>
  );
}
export default Home;
